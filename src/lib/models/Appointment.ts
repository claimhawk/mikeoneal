import mongoose, { Schema, Document } from 'mongoose';
import crypto from 'crypto';

export interface IAppointment extends Document {
  name: string;
  email: string;
  phone?: string;
  primaryTime: Date;
  alternateTime: Date;
  confirmedTime?: Date; // The final confirmed time
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'rescheduled';
  manageToken: string; // Unique token for cancel/reschedule links
  stripePaymentId?: string;
  stripeRefundId?: string;
  refundAmount?: number;
  paidAt?: Date;
  cancelledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    primaryTime: { type: Date, required: true },
    alternateTime: { type: Date, required: true },
    confirmedTime: { type: Date },
    notes: { type: String },
    status: { 
      type: String, 
      enum: ['pending', 'confirmed', 'cancelled', 'rescheduled'],
      default: 'confirmed'
    },
    manageToken: { 
      type: String, 
      required: true,
      unique: true,
      default: () => crypto.randomBytes(32).toString('hex')
    },
    stripePaymentId: { type: String },
    stripeRefundId: { type: String },
    refundAmount: { type: Number },
    paidAt: { type: Date },
    cancelledAt: { type: Date },
  },
  { timestamps: true }
);

// Index for checking conflicts
AppointmentSchema.index({ primaryTime: 1, status: 1 });
AppointmentSchema.index({ alternateTime: 1, status: 1 });
AppointmentSchema.index({ manageToken: 1 });

export const Appointment = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
