import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';

export const dynamic = 'force-dynamic';

const HOURS_48 = 48 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const { token, newPrimaryTime, newAlternateTime } = await request.json();
    
    if (!token || !newPrimaryTime || !newAlternateTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    const appointment = await Appointment.findOne({ manageToken: token });
    
    if (!appointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }
    
    if (appointment.status === 'cancelled') {
      return NextResponse.json(
        { error: 'Cannot reschedule a cancelled appointment' },
        { status: 400 }
      );
    }
    
    // Determine the appointment time (use confirmedTime or primaryTime)
    const appointmentTime = appointment.confirmedTime || appointment.primaryTime;
    const now = new Date();
    const timeUntilAppointment = appointmentTime.getTime() - now.getTime();
    
    // Can only reschedule if more than 48 hours before
    if (timeUntilAppointment <= HOURS_48) {
      return NextResponse.json(
        { error: 'Cannot reschedule within 48 hours of appointment. You can cancel for a 50% refund.' },
        { status: 400 }
      );
    }
    
    // Check for conflicts with new times
    const conflictingAppointments = await Appointment.findOne({
      _id: { $ne: appointment._id },
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        { primaryTime: new Date(newPrimaryTime) },
        { alternateTime: new Date(newPrimaryTime) },
        { confirmedTime: new Date(newPrimaryTime) },
        { primaryTime: new Date(newAlternateTime) },
        { alternateTime: new Date(newAlternateTime) },
        { confirmedTime: new Date(newAlternateTime) },
      ]
    });
    
    if (conflictingAppointments) {
      return NextResponse.json(
        { error: 'One or both of your selected times are no longer available' },
        { status: 409 }
      );
    }
    
    // Update the appointment
    appointment.primaryTime = new Date(newPrimaryTime);
    appointment.alternateTime = new Date(newAlternateTime);
    appointment.confirmedTime = undefined; // Reset confirmed time
    appointment.status = 'confirmed';
    await appointment.save();
    
    return NextResponse.json({
      success: true,
      appointment: {
        primaryTime: appointment.primaryTime,
        alternateTime: appointment.alternateTime,
      }
    });
  } catch (error) {
    console.error('Error rescheduling appointment:', error);
    return NextResponse.json(
      { error: 'Failed to reschedule appointment' },
      { status: 500 }
    );
  }
}
