"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface CalendarProps {
  availableDates: Date[];
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function Calendar({ availableDates, selectedDate, onSelectDate }: CalendarProps) {
  const [viewDate, setViewDate] = useState(() => {
    // Start with the first available date's month, or current month
    if (availableDates.length > 0) {
      return new Date(availableDates[0]);
    }
    return new Date();
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // Get first day of month and total days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create set of available date strings for quick lookup
  const availableDateSet = new Set(
    availableDates.map(d => {
      const date = new Date(d);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    })
  );

  function isAvailable(day: number): boolean {
    const key = `${year}-${month}-${day}`;
    return availableDateSet.has(key);
  }

  function isSelected(day: number): boolean {
    if (!selectedDate) return false;
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    );
  }

  function handleSelectDay(day: number) {
    if (isAvailable(day)) {
      onSelectDate(new Date(year, month, day));
    }
  }

  function prevMonth() {
    setViewDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setViewDate(new Date(year, month + 1, 1));
  }

  // Generate calendar grid
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-xl font-bold text-white">
          {MONTHS[month]} {year}
        </h3>
        <button
          onClick={nextMonth}
          className="p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(day => (
          <div key={day} className="text-center text-xs uppercase tracking-wider text-zinc-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div key={index} className="aspect-square">
            {day !== null && (
              <motion.button
                whileHover={isAvailable(day) ? { scale: 1.1 } : {}}
                whileTap={isAvailable(day) ? { scale: 0.95 } : {}}
                onClick={() => handleSelectDay(day)}
                disabled={!isAvailable(day)}
                className={`w-full h-full flex items-center justify-center text-lg font-medium transition-all ${
                  isSelected(day)
                    ? "bg-white text-black"
                    : isAvailable(day)
                    ? "bg-zinc-800 text-white hover:bg-zinc-700 cursor-pointer"
                    : "text-zinc-700 cursor-default"
                }`}
              >
                {day}
              </motion.button>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-zinc-800" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white" />
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}
