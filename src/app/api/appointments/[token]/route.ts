import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';

export const dynamic = 'force-dynamic';

const HOURS_48 = 48 * 60 * 60 * 1000;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    
    await connectToDatabase();
    
    const appointment = await Appointment.findOne({ manageToken: token });
    
    if (!appointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }
    
    const appointmentTime = appointment.confirmedTime || appointment.primaryTime;
    const now = new Date();
    const timeUntilAppointment = appointmentTime.getTime() - now.getTime();
    const canReschedule = timeUntilAppointment > HOURS_48;
    
    return NextResponse.json({
      name: appointment.name,
      email: appointment.email,
      primaryTime: appointment.primaryTime,
      alternateTime: appointment.alternateTime,
      confirmedTime: appointment.confirmedTime,
      status: appointment.status,
      canReschedule,
      canCancel: appointment.status !== 'cancelled',
      refundPercent: canReschedule ? 100 : 50,
    });
  } catch (error) {
    console.error('Error fetching appointment:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointment' },
      { status: 500 }
    );
  }
}
