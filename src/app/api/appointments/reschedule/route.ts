import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';

export const dynamic = 'force-dynamic';

const HOURS_48 = 48 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const { token, newTime } = await request.json();
    
    if (!token || !newTime) {
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
    
    const now = new Date();
    const timeUntilAppointment = appointment.scheduledTime.getTime() - now.getTime();
    
    // Can only reschedule if more than 48 hours before
    if (timeUntilAppointment <= HOURS_48) {
      return NextResponse.json(
        { error: 'Cannot reschedule within 48 hours of appointment. You can cancel for a 50% refund.' },
        { status: 400 }
      );
    }
    
    // Check for conflicts with new time
    const conflictingAppointment = await Appointment.findOne({
      _id: { $ne: appointment._id },
      status: { $in: ['pending', 'confirmed'] },
      scheduledTime: new Date(newTime),
    });
    
    if (conflictingAppointment) {
      return NextResponse.json(
        { error: 'This time slot is no longer available' },
        { status: 409 }
      );
    }
    
    // Update the appointment
    appointment.scheduledTime = new Date(newTime);
    appointment.status = 'confirmed';
    await appointment.save();
    
    return NextResponse.json({
      success: true,
      appointment: {
        scheduledTime: appointment.scheduledTime,
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
