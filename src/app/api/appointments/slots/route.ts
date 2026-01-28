import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';

export const dynamic = 'force-dynamic';

// Generate available slots for the next 4 weeks
// Monday, Tuesday, Wednesday only
// 90-minute slots: 11am and 1:30pm (Central Time)

function getAvailableSlots(): Date[] {
  const slots: Date[] = [];
  const now = new Date();
  const fourWeeksFromNow = new Date(now.getTime() + 28 * 24 * 60 * 60 * 1000);
  
  const current = new Date(now);
  current.setHours(0, 0, 0, 0);
  current.setDate(current.getDate() + 1); // Start from tomorrow
  
  while (current <= fourWeeksFromNow) {
    const dayOfWeek = current.getDay();
    
    // Monday = 1, Tuesday = 2, Wednesday = 3
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      // 90-minute slots (Central Time = UTC-6):
      // 11:00am CST = 17:00 UTC
      // 1:30pm CST = 19:30 UTC
      const slot1 = new Date(current);
      slot1.setUTCHours(17, 0, 0, 0);
      if (slot1 > now) slots.push(slot1);
      
      const slot2 = new Date(current);
      slot2.setUTCHours(19, 30, 0, 0);
      if (slot2 > now) slots.push(slot2);
    }
    
    current.setDate(current.getDate() + 1);
  }
  
  return slots;
}

export async function GET() {
  try {
    await connectToDatabase();
    
    // Get all booked times
    const bookedAppointments = await Appointment.find({
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        { primaryTime: { $gte: new Date() } },
        { alternateTime: { $gte: new Date() } }
      ]
    }).select('primaryTime alternateTime');
    
    const bookedTimes = new Set<string>();
    bookedAppointments.forEach(apt => {
      bookedTimes.add(apt.primaryTime.toISOString());
      bookedTimes.add(apt.alternateTime.toISOString());
    });
    
    // Get all possible slots
    const allSlots = getAvailableSlots();
    
    // Filter out booked slots
    const availableSlots = allSlots.filter(
      slot => !bookedTimes.has(slot.toISOString())
    );
    
    return NextResponse.json({ slots: availableSlots });
  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json(
      { error: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
}
