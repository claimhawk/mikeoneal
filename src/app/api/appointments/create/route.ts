import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';
import { getStripe, CONSULTATION_PRICE } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, primaryTime, alternateTime, notes, paymentMethodId } = body;
    
    // Validate required fields
    if (!name || !email || !primaryTime || !alternateTime || !paymentMethodId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    await connectToDatabase();
    
    // Check for conflicts
    const conflictingAppointments = await Appointment.findOne({
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        { primaryTime: new Date(primaryTime) },
        { alternateTime: new Date(primaryTime) },
        { primaryTime: new Date(alternateTime) },
        { alternateTime: new Date(alternateTime) },
      ]
    });
    
    if (conflictingAppointments) {
      return NextResponse.json(
        { error: 'One or both of your selected times are no longer available' },
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
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never',
      },
      metadata: {
        name,
        email,
        primaryTime,
        alternateTime,
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
      phone,
      primaryTime: new Date(primaryTime),
      alternateTime: new Date(alternateTime),
      notes,
      status: 'confirmed',
      stripePaymentId: paymentIntent.id,
      paidAt: new Date(),
    });
    
    return NextResponse.json({ 
      success: true, 
      appointment: {
        id: appointment._id,
        primaryTime: appointment.primaryTime,
        alternateTime: appointment.alternateTime,
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
