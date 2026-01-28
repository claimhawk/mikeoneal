"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type Step = "times" | "details" | "payment" | "success";

interface TimeSlot {
  date: Date;
  formatted: string;
  day: string;
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
    day: d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
    time: d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
  };
}

function groupSlotsByDay(slots: Date[]): Map<string, TimeSlot[]> {
  const groups = new Map<string, TimeSlot[]>();
  
  slots.forEach(slot => {
    const formatted = formatSlot(slot);
    const dayKey = formatted.formatted;
    
    if (!groups.has(dayKey)) {
      groups.set(dayKey, []);
    }
    groups.get(dayKey)!.push(formatted);
  });
  
  return groups;
}

export function BookingFlow() {
  const [step, setStep] = useState<Step>("times");
  const [slots, setSlots] = useState<Date[]>([]);
  const [loading, setLoading] = useState(true);
  const [primaryTime, setPrimaryTime] = useState<Date | null>(null);
  const [alternateTime, setAlternateTime] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [manageToken, setManageToken] = useState<string | null>(null);

  useEffect(() => {
    fetchSlots();
  }, []);

  async function fetchSlots() {
    try {
      const res = await fetch("/api/appointments/slots");
      const data = await res.json();
      setSlots(data.slots.map((s: string) => new Date(s)));
    } catch {
      setError("Failed to load available times");
    } finally {
      setLoading(false);
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
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress indicator */}
      <div className="flex justify-center gap-2 mb-12">
        {["times", "details", "payment", "success"].map((s, i) => (
          <div
            key={s}
            className={`h-1 w-16 transition-all duration-500 ${
              ["times", "details", "payment", "success"].indexOf(step) >= i
                ? "bg-white"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1: TIME SELECTION */}
        {step === "times" && (
          <motion.div
            key="times"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Choose Two Times
              </h3>
              <p className="text-zinc-400 text-lg">
                Select a primary and backup time that work for you
              </p>
            </div>

            {/* Selected times display */}
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

            {/* Available slots by day */}
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
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
                          {selected && (
                            <span className="block text-xs mt-1 uppercase tracking-wider">
                              {selected === "primary" ? "Primary" : "Backup"}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep("details")}
              disabled={!primaryTime || !alternateTime}
              className={`w-full py-5 text-lg font-bold uppercase tracking-wider transition-all ${
                primaryTime && alternateTime
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </motion.div>
        )}

        {/* STEP 2: DETAILS */}
        {step === "details" && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Tell Me About Yourself
              </h3>
              <p className="text-zinc-400 text-lg">
                A little context helps me prepare for our conversation
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-2 border-zinc-800 p-4 text-white text-lg focus:border-white focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-2 border-zinc-800 p-4 text-white text-lg focus:border-white focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border-2 border-zinc-800 p-4 text-white text-lg focus:border-white focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">
                  What&apos;s on your mind?
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={5}
                  className="w-full bg-transparent border-2 border-zinc-800 p-4 text-white text-lg focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your business, challenges, or what you're hoping to achieve..."
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep("times")}
                className="px-8 py-5 text-lg font-bold uppercase tracking-wider text-zinc-400 border-2 border-zinc-800 hover:border-zinc-600 transition-all"
              >
                Back
              </button>
              <button
                onClick={() => setStep("payment")}
                disabled={!formData.name || !formData.email}
                className={`flex-1 py-5 text-lg font-bold uppercase tracking-wider transition-all ${
                  formData.name && formData.email
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                }`}
              >
                Continue to Payment
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: PAYMENT */}
        {step === "payment" && (
          <motion.div
            key="payment"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Complete Your Booking
              </h3>
              <p className="text-zinc-400 text-lg">
                Secure payment powered by Stripe
              </p>
            </div>

            {/* Summary */}
            <div className="bg-zinc-900 p-6 space-y-4 mb-8">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
                <span className="text-zinc-400">Initial Consultation (90 min)</span>
                <span className="text-2xl font-bold text-white">$199</span>
              </div>
              <div className="text-sm text-zinc-500">
                <p className="mb-2"><strong className="text-zinc-300">Primary:</strong> {primaryTime && formatSlot(primaryTime).formatted} at {primaryTime && formatSlot(primaryTime).time}</p>
                <p><strong className="text-zinc-300">Backup:</strong> {alternateTime && formatSlot(alternateTime).formatted} at {alternateTime && formatSlot(alternateTime).time}</p>
              </div>
            </div>

            <PaymentForm
              formData={formData}
              primaryTime={primaryTime!}
              alternateTime={alternateTime!}
              onSuccess={(token) => { setManageToken(token); setStep("success"); }}
              onBack={() => setStep("details")}
              error={error}
              setError={setError}
              submitting={submitting}
              setSubmitting={setSubmitting}
            />
          </motion.div>
        )}

        {/* STEP 4: SUCCESS */}
        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              You&apos;re All Set!
            </h3>
            <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
              I&apos;ll confirm your appointment time via email shortly. Looking forward to our conversation.
            </p>
            <p className="text-zinc-500 mb-8">
              Check your inbox at <strong className="text-white">{formData.email}</strong>
            </p>
            {manageToken && (
              <div className="bg-zinc-900 p-6 max-w-md mx-auto">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Need to make changes?</p>
                <p className="text-zinc-400 text-sm mb-4">
                  You can reschedule (48+ hours before) or cancel your appointment anytime.
                </p>
                <a 
                  href={`/manage/${manageToken}`}
                  className="text-white underline hover:no-underline"
                >
                  Manage Your Appointment →
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface PaymentFormProps {
  formData: { name: string; email: string; phone: string; notes: string };
  primaryTime: Date;
  alternateTime: Date;
  onSuccess: (manageToken: string) => void;
  onBack: () => void;
  error: string | null;
  setError: (e: string | null) => void;
  submitting: boolean;
  setSubmitting: (s: boolean) => void;
}

function PaymentFormInner({ formData, primaryTime, alternateTime, onSuccess, onBack, error, setError, submitting, setSubmitting }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!stripe || !elements) return;
    
    setSubmitting(true);
    setError(null);
    
    try {
      const { error: submitError, paymentMethod } = await stripe.createPaymentMethod({
        elements,
      });
      
      if (submitError) {
        setError(submitError.message || "Payment failed");
        setSubmitting(false);
        return;
      }
      
      const res = await fetch("/api/appointments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          primaryTime: primaryTime.toISOString(),
          alternateTime: alternateTime.toISOString(),
          paymentMethodId: paymentMethod.id,
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || "Something went wrong");
        setSubmitting(false);
        return;
      }
      
      onSuccess(data.appointment.manageToken);
    } catch {
      setError("An unexpected error occurred");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-zinc-900 p-6">
        <PaymentElement 
          options={{
            layout: "tabs",
          }}
        />
      </div>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 p-4 text-red-400 text-center">
          {error}
        </div>
      )}
      
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="px-8 py-5 text-lg font-bold uppercase tracking-wider text-zinc-400 border-2 border-zinc-800 hover:border-zinc-600 transition-all disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!stripe || submitting}
          className={`flex-1 py-5 text-lg font-bold uppercase tracking-wider transition-all ${
            submitting
              ? "bg-zinc-800 text-zinc-600"
              : "bg-white text-black hover:bg-zinc-200"
          }`}
        >
          {submitting ? "Processing..." : "Pay $199"}
        </button>
      </div>
    </form>
  );
}

function PaymentForm(props: PaymentFormProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Create a setup intent to collect payment method
    fetch("/api/stripe/setup", { method: "POST" })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(() => props.setError("Failed to initialize payment"));
  }, []);

  if (!clientSecret) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "night",
          variables: {
            colorPrimary: "#ffffff",
            colorBackground: "#18181b",
            colorText: "#ffffff",
            colorDanger: "#ef4444",
            fontFamily: "system-ui, sans-serif",
            borderRadius: "0px",
          },
        },
      }}
    >
      <PaymentFormInner {...props} />
    </Elements>
  );
}
