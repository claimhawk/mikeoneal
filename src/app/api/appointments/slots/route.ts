import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';

export const dynamic = 'force-dynamic';

// Generate available slots for the next 4 weeks
// Monday, Tuesday, Wednesday only
// Hour blocks: 11am, 12pm, 1pm (Central Time) - 90 min meetings
// Only 1 booking allowed per day

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
      // Hour blocks (Central Time = UTC-6):
      // 11:00am CST = 17:00 UTC
      // 12:00pm CST = 18:00 UTC
      // 1:00pm CST = 19:00 UTC
      for (const utcHour of [17, 18, 19]) {
        const slot = new Date(current);
        slot.setUTCHours(utcHour, 0, 0, 0);
        if (slot > now) slots.push(slot);
      }
    }
    
    current.setDate(current.getDate() + 1);
  }
  
  return slots;
}

// Get date string for comparison (YYYY-MM-DD in UTC)
function getDateKey(date: Date): string {
  return date.toISOString().split('T')[0];
}

export async function GET() {
  try {
    await connectToDatabase();
    
    // Get all booked appointments
    const bookedAppointments = await Appointment.find({
      status: { $in: ['pending', 'confirmed'] },
      scheduledTime: { $gte: new Date() }
    }).select('scheduledTime');
    
    // Get dates that are fully booked (1 booking = day is full)
    const bookedDates = new Set<string>();
    bookedAppointments.forEach(apt => {
      bookedDates.add(getDateKey(apt.scheduledTime));
    });
    
    // Get all possible slots
    const allSlots = getAvailableSlots();
    
    // Filter out slots on days that already have a booking
    const availableSlots = allSlots.filter(
      slot => !bookedDates.has(getDateKey(slot))
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
