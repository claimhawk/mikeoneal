import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Appointment } from '@/lib/models/Appointment';
import { getStripe, CONSULTATION_PRICE } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

const HOURS_48 = 48 * 60 * 60 * 1000;

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    
    if (!token) {
      return NextResponse.json(
        { error: 'Missing token' },
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
        { error: 'Appointment already cancelled' },
        { status: 400 }
      );
    }
    
    const now = new Date();
    const timeUntilAppointment = appointment.scheduledTime.getTime() - now.getTime();
    
    // Calculate refund amount
    const isMoreThan48Hours = timeUntilAppointment > HOURS_48;
    const refundAmount = isMoreThan48Hours ? CONSULTATION_PRICE : Math.floor(CONSULTATION_PRICE / 2);
    
    // Process refund with Stripe
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }
    
    if (appointment.stripePaymentId) {
      const refund = await stripe.refunds.create({
        payment_intent: appointment.stripePaymentId,
        amount: refundAmount,
      });
      
      appointment.stripeRefundId = refund.id;
    }
    
    appointment.status = 'cancelled';
    appointment.cancelledAt = now;
    appointment.refundAmount = refundAmount;
    await appointment.save();
    
    return NextResponse.json({
      success: true,
      refundAmount: refundAmount / 100,
      isFullRefund: isMoreThan48Hours,
    });
  } catch (error) {
    console.error('Error cancelling appointment:', error);
    return NextResponse.json(
      { error: 'Failed to cancel appointment' },
      { status: 500 }
    );
  }
}
