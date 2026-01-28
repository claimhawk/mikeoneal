"use client";

import { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface AppointmentData {
  name: string;
  email: string;
  primaryTime: string;
  alternateTime: string;
  confirmedTime?: string;
  status: string;
  canReschedule: boolean;
  canCancel: boolean;
  refundPercent: number;
}

interface TimeSlot {
  date: Date;
  formatted: string;
  time: string;
}

function formatSlot(date: Date): TimeSlot {
  const d = new Date(date);
  return {
    date: d,
    formatted: d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
    time: d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
  };
}

function groupSlotsByDay(slots: Date[]): Map<string, TimeSlot[]> {
  const groups = new Map<string, TimeSlot[]>();
  slots.forEach(slot => {
    const formatted = formatSlot(slot);
    const dayKey = formatted.formatted;
    if (!groups.has(dayKey)) groups.set(dayKey, []);
    groups.get(dayKey)!.push(formatted);
  });
  return groups;
}

export default function ManageAppointmentPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const [appointment, setAppointment] = useState<AppointmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"details" | "reschedule" | "cancel" | "cancelled" | "rescheduled">("details");
  const [slots, setSlots] = useState<Date[]>([]);
  const [primaryTime, setPrimaryTime] = useState<Date | null>(null);
  const [alternateTime, setAlternateTime] = useState<Date | null>(null);
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
    if (!primaryTime || !alternateTime) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/appointments/reschedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          newPrimaryTime: primaryTime.toISOString(),
          newAlternateTime: alternateTime.toISOString(),
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

  function handleTimeSelect(time: Date) {
    if (!primaryTime) {
      setPrimaryTime(time);
    } else if (!alternateTime && time.getTime() !== primaryTime.getTime()) {
      setAlternateTime(time);
    } else if (time.getTime() === primaryTime.getTime()) {
      setPrimaryTime(alternateTime);
      setAlternateTime(null);
    } else if (time.getTime() === alternateTime?.getTime()) {
      setAlternateTime(null);
    }
  }

  function isSelected(time: Date): "primary" | "alternate" | false {
    if (primaryTime && time.getTime() === primaryTime.getTime()) return "primary";
    if (alternateTime && time.getTime() === alternateTime.getTime()) return "alternate";
    return false;
  }

  const groupedSlots = groupSlotsByDay(slots);

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

  const appointmentTime = appointment?.confirmedTime || appointment?.primaryTime;

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
                {appointmentTime && (
                  <>
                    <p className="text-3xl font-bold text-white">{formatSlot(new Date(appointmentTime)).time}</p>
                    <p className="text-zinc-400">{formatSlot(new Date(appointmentTime)).formatted}</p>
                  </>
                )}
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
                    onClick={() => setView("reschedule")}
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

          {/* RESCHEDULE VIEW */}
          {view === "reschedule" && (
            <motion.div
              key="reschedule"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h1 className="text-4xl font-black text-white mb-2">Reschedule</h1>
              <p className="text-zinc-400 mb-8">Choose two new times that work for you.</p>

              {/* Selected times */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className={`p-6 border-2 transition-all ${primaryTime ? "border-white bg-white/5" : "border-zinc-800 border-dashed"}`}>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Primary Choice</p>
                  {primaryTime ? (
                    <div>
                      <p className="text-2xl font-bold text-white">{formatSlot(primaryTime).time}</p>
                      <p className="text-zinc-400">{formatSlot(primaryTime).formatted}</p>
                    </div>
                  ) : (
                    <p className="text-zinc-600 text-lg">Select from below</p>
                  )}
                </div>
                <div className={`p-6 border-2 transition-all ${alternateTime ? "border-white bg-white/5" : "border-zinc-800 border-dashed"}`}>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Backup Choice</p>
                  {alternateTime ? (
                    <div>
                      <p className="text-2xl font-bold text-white">{formatSlot(alternateTime).time}</p>
                      <p className="text-zinc-400">{formatSlot(alternateTime).formatted}</p>
                    </div>
                  ) : (
                    <p className="text-zinc-600 text-lg">Select from below</p>
                  )}
                </div>
              </div>

              {/* Slots */}
              <div className="space-y-6 max-h-[300px] overflow-y-auto pr-2 mb-8">
                {Array.from(groupedSlots.entries()).map(([day, daySlots]) => (
                  <div key={day}>
                    <p className="text-sm uppercase tracking-widest text-zinc-500 mb-3">{day}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {daySlots.map((slot) => {
                        const selected = isSelected(slot.date);
                        return (
                          <button
                            key={slot.date.toISOString()}
                            onClick={() => handleTimeSelect(slot.date)}
                            className={`p-4 text-center transition-all border-2 ${
                              selected === "primary"
                                ? "bg-white text-black border-white"
                                : selected === "alternate"
                                ? "bg-zinc-800 text-white border-white"
                                : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
                            }`}
                          >
                            <span className="text-lg font-bold">{slot.time}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-4 text-red-400 mb-6">
                  {error}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => { setView("details"); setError(null); }}
                  className="px-8 py-5 text-lg font-bold uppercase tracking-wider text-zinc-400 border-2 border-zinc-800"
                >
                  Back
                </button>
                <button
                  onClick={handleReschedule}
                  disabled={!primaryTime || !alternateTime || submitting}
                  className={`flex-1 py-5 text-lg font-bold uppercase tracking-wider transition-all ${
                    primaryTime && alternateTime && !submitting
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                  }`}
                >
                  {submitting ? "Updating..." : "Confirm New Times"}
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
                Your new times have been submitted. I&apos;ll confirm via email shortly.
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
