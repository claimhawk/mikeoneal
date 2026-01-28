"use client";

import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar } from "@/app/components/Calendar";

interface AppointmentData {
  name: string;
  email: string;
  scheduledTime: string;
  status: string;
  canReschedule: boolean;
  canCancel: boolean;
  refundPercent: number;
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function ManageAppointmentPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const [appointment, setAppointment] = useState<AppointmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"details" | "reschedule-date" | "reschedule-time" | "cancel" | "cancelled" | "rescheduled">("details");
  const [slots, setSlots] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [refundAmount, setRefundAmount] = useState<number | null>(null);

  useEffect(() => {
    fetchAppointment();
    fetchSlots();
  }, [token]);

  async function fetchAppointment() {
    try {
      const res = await fetch(`/api/appointments/${token}`);
      if (!res.ok) throw new Error("Appointment not found");
      const data = await res.json();
      setAppointment(data);
      if (data.status === "cancelled") setView("cancelled");
    } catch {
      setError("Could not find this appointment");
    } finally {
      setLoading(false);
    }
  }

  async function fetchSlots() {
    try {
      const res = await fetch("/api/appointments/slots");
      const data = await res.json();
      setSlots(data.slots.map((s: string) => new Date(s)));
    } catch {
      // Ignore
    }
  }

  // Get unique dates from slots
  const availableDates = slots.reduce((acc: Date[], slot) => {
    const exists = acc.some(d => isSameDay(d, slot));
    if (!exists) acc.push(slot);
    return acc;
  }, []);

  // Get slots for selected date
  const slotsForSelectedDate = selectedDate
    ? slots.filter(slot => isSameDay(slot, selectedDate))
    : [];

  async function handleCancel() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/appointments/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setRefundAmount(data.refundAmount);
      setView("cancelled");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to cancel");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleReschedule() {
    if (!selectedTime) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/appointments/reschedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          newTime: selectedTime.toISOString(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setView("rescheduled");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to reschedule");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error && !appointment) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-3xl font-black text-white mb-4">Appointment Not Found</h1>
          <p className="text-zinc-400 mb-8">{error}</p>
          <Link href="/" className="text-white underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link href="/" className="text-zinc-500 hover:text-white text-sm uppercase tracking-wider mb-8 inline-block">
          ← Back to Home
        </Link>

        <AnimatePresence mode="wait">
          {/* DETAILS VIEW */}
          {view === "details" && appointment && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h1 className="text-4xl font-black text-white mb-2">Manage Appointment</h1>
              <p className="text-zinc-400 mb-12">Hi {appointment.name}, here are your booking details.</p>

              <div className="bg-zinc-900 p-8 mb-8">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Your Appointment</p>
                <p className="text-3xl font-bold text-white">{formatTime(new Date(appointment.scheduledTime))}</p>
                <p className="text-zinc-400">{formatDate(new Date(appointment.scheduledTime))}</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mt-6 mb-1">Status</p>
                <p className="text-white font-bold capitalize">{appointment.status}</p>
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-4 text-red-400 mb-6">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                {appointment.canReschedule && (
                  <button
                    onClick={() => setView("reschedule-date")}
                    className="w-full py-5 text-lg font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all"
                  >
                    Reschedule Appointment
                  </button>
                )}
                {appointment.canCancel && (
                  <button
                    onClick={() => setView("cancel")}
                    className="w-full py-5 text-lg font-bold uppercase tracking-wider border-2 border-zinc-700 text-zinc-400 hover:border-red-500 hover:text-red-400 transition-all"
                  >
                    Cancel Appointment ({appointment.refundPercent}% Refund)
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* RESCHEDULE - DATE */}
          {view === "reschedule-date" && (
            <motion.div
              key="reschedule-date"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h1 className="text-4xl font-black text-white mb-2">Pick a New Date</h1>
              <p className="text-zinc-400 mb-8">Select when you&apos;d like to reschedule.</p>

              <Calendar
                availableDates={availableDates}
                selectedDate={selectedDate}
                onSelectDate={(date) => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
              />

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-8"
                >
                  <p className="text-zinc-400 mb-4">
                    Selected: <span className="text-white font-bold">{formatDate(selectedDate)}</span>
                  </p>
                </motion.div>
              )}

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => { setView("details"); setError(null); setSelectedDate(null); }}
                  className="px-8 py-5 text-lg font-bold uppercase tracking-wider text-zinc-400 border-2 border-zinc-800"
                >
                  Back
                </button>
                <button
                  onClick={() => setView("reschedule-time")}
                  disabled={!selectedDate}
                  className={`flex-1 py-5 text-lg font-bold uppercase tracking-wider transition-all ${
                    selectedDate
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                  }`}
                >
                  Choose Time
                </button>
              </div>
            </motion.div>
          )}

          {/* RESCHEDULE - TIME */}
          {view === "reschedule-time" && (
            <motion.div
              key="reschedule-time"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h1 className="text-4xl font-black text-white mb-2">Pick a Time</h1>
              <p className="text-zinc-400 mb-8">{selectedDate && formatDate(selectedDate)}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {slotsForSelectedDate.map((slot) => {
                  const isSelected = selectedTime?.getTime() === slot.getTime();
                  return (
                    <motion.button
                      key={slot.toISOString()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTime(slot)}
                      className={`p-8 text-center transition-all border-2 ${
                        isSelected
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                      }`}
                    >
                      <span className="text-3xl font-black">{formatTime(slot)}</span>
                      <span className="block text-sm mt-2 uppercase tracking-wider">
                        {isSelected ? "Selected" : "90 minutes"}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-4 text-red-400 mb-6">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => setView("reschedule-date")}
                  className="px-8 py-5 text-lg font-bold uppercase tracking-wider text-zinc-400 border-2 border-zinc-800"
                >
                  Back
                </button>
                <button
                  onClick={handleReschedule}
                  disabled={!selectedTime || submitting}
                  className={`flex-1 py-5 text-lg font-bold uppercase tracking-wider transition-all ${
                    selectedTime && !submitting
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                  }`}
                >
                  {submitting ? "Updating..." : "Confirm New Time"}
                </button>
              </div>
            </motion.div>
          )}

          {/* CANCEL CONFIRMATION */}
          {view === "cancel" && appointment && (
            <motion.div
              key="cancel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <h1 className="text-4xl font-black text-white mb-4">Cancel Appointment?</h1>
              <p className="text-zinc-400 mb-8">
                {appointment.canReschedule
                  ? "You'll receive a full refund of $199."
                  : "Since this is within 48 hours of your appointment, you'll receive a 50% refund ($99.50)."}
              </p>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-4 text-red-400 mb-6">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => { setView("details"); setError(null); }}
                  className="flex-1 py-5 text-lg font-bold uppercase tracking-wider text-zinc-400 border-2 border-zinc-800"
                >
                  Keep Appointment
                </button>
                <button
                  onClick={handleCancel}
                  disabled={submitting}
                  className="flex-1 py-5 text-lg font-bold uppercase tracking-wider bg-red-600 text-white hover:bg-red-700 transition-all disabled:opacity-50"
                >
                  {submitting ? "Cancelling..." : "Yes, Cancel"}
                </button>
              </div>
            </motion.div>
          )}

          {/* CANCELLED SUCCESS */}
          {view === "cancelled" && (
            <motion.div
              key="cancelled"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Appointment Cancelled</h1>
              {refundAmount !== null && (
                <p className="text-zinc-400 text-lg mb-8">
                  A refund of ${refundAmount.toFixed(2)} has been initiated. It may take 5-10 business days to appear.
                </p>
              )}
              <Link href="/" className="inline-block py-4 px-8 bg-white text-black font-bold uppercase tracking-wider">
                Return Home
              </Link>
            </motion.div>
          )}

          {/* RESCHEDULED SUCCESS */}
          {view === "rescheduled" && (
            <motion.div
              key="rescheduled"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-black text-white mb-4">Rescheduled!</h1>
              <p className="text-zinc-400 text-lg mb-8">
                Your appointment has been updated. See you then!
              </p>
              <Link href="/" className="inline-block py-4 px-8 bg-white text-black font-bold uppercase tracking-wider">
                Return Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
