import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  email: string;
  phone?: string;
  primaryTime: Date;
  alternateTime: Date;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  stripePaymentId?: string;
  paidAt?: Date;
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
    notes: { type: String },
    status: { 
      type: String, 
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending'
    },
    stripePaymentId: { type: String },
    paidAt: { type: Date },
  },
  { timestamps: true }
);

// Index for checking conflicts
AppointmentSchema.index({ primaryTime: 1, status: 1 });
AppointmentSchema.index({ alternateTime: 1, status: 1 });

export const Appointment = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
