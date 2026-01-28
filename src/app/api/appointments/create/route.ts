import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';
import { getStripe, CONSULTATION_PRICE } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, interest, selectedTime, notes, paymentMethodId } = body;
    
    // Validate required fields
    if (!name || !email || !selectedTime || !paymentMethodId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    // Check for conflicts
    const conflictingAppointment = await Appointment.findOne({
      status: { $in: ['pending', 'confirmed'] },
      scheduledTime: new Date(selectedTime),
    });
    
    if (conflictingAppointment) {
      return NextResponse.json(
        { error: 'This time slot is no longer available' },
        { status: 409 }
      );
    }
    
    // Process payment with Stripe
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: CONSULTATION_PRICE,
      currency: 'usd',
      payment_method: paymentMethodId,
      payment_method_types: ['card'],
      confirm: true,
      metadata: {
        name,
        email,
        scheduledTime: selectedTime,
      },
    });
    
    if (paymentIntent.status !== 'succeeded') {
      return NextResponse.json(
        { error: 'Payment failed. Please try again.' },
        { status: 402 }
      );
    }
    
    // Create the appointment
    const appointment = await Appointment.create({
      name,
      email,
      interest,
      scheduledTime: new Date(selectedTime),
      notes,
      status: 'confirmed',
      stripePaymentId: paymentIntent.id,
      paidAt: new Date(),
    });
    
    return NextResponse.json({ 
      success: true, 
      appointment: {
        id: appointment._id,
        scheduledTime: appointment.scheduledTime,
        manageToken: appointment.manageToken,
      }
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    
    // Handle Stripe errors
    if (error instanceof Error && 'type' in error) {
      return NextResponse.json(
        { error: 'Payment failed: ' + error.message },
        { status: 402 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}
