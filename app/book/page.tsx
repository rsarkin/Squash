"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard, 
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Lock,
  Check,
  Sun,
  Moon
} from "lucide-react";

// Types
interface DateItem {
  id: number;
  dayName: string;
  dateNum: number;
  month: string;
  fullDate: string;
  isSelectable: boolean;
}

interface TimeSlot {
  id: number;
  startTime: string;
  endTime: string;
  label: string;
  isBooked: boolean;
}

export default function BookPage() {
  // Navigation & States
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [phase, setPhase] = useState<"selection" | "checkout" | "success">("selection");
  const [selectedDate, setSelectedDate] = useState<DateItem | null>(null);
  const [selectedCourt, setSelectedCourt] = useState<"Court A" | "Court B">("Court A");
  const [selectedStartSlotIndex, setSelectedStartSlotIndex] = useState<number | null>(null);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [dates, setDates] = useState<DateItem[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [timeOfDay, setTimeOfDay] = useState<"day" | "night">("day");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const dateContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollDates = (direction: "left" | "right") => {
    if (dateContainerRef.current) {
      const scrollAmount = 240;
      dateContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Generate Date list (Next 7 days)
  useEffect(() => {
    const days = [];
    const date = new Date();
    const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthNames = ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY"]; // Simplified mapping
    
    // Use real month names starting from current month
    const realMonthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    for (let i = -2; i <= 12; i++) {
      const nextDate = new Date(date);
      nextDate.setDate(date.getDate() + i);
      const isSelectable = i >= 0;
      days.push({
        id: i,
        dayName: dayNames[nextDate.getDay()],
        dateNum: nextDate.getDate(),
        month: realMonthNames[nextDate.getMonth()].toUpperCase(),
        fullDate: nextDate.toLocaleDateString("en-US", { 
          weekday: "long", 
          year: "numeric", 
          month: "long", 
          day: "numeric" 
        }),
        isSelectable
      });
    }
    setDates(days);
    const todayItem = days.find((d) => d.id === 0);
    setSelectedDate(todayItem || days[2]);

    // Generate Time Slots from 06:00 AM to 10:00 PM (1-hour slots)
    const slots: TimeSlot[] = [];
    const startHour = 6;
    const endHour = 22;
    let id = 0;
    for (let hour = startHour; hour < endHour; hour++) {
      // Skip 2:00 PM - 3:00 PM (14), 3:00 PM - 4:00 PM (15), and 9:00 PM - 10:00 PM (21)
      if (hour === 14 || hour === 15 || hour === 21) {
        continue;
      }
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;
      
      const displayHourStart = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      const ampmStart = hour >= 12 ? "PM" : "AM";
      const displayHourEnd = (hour + 1) > 12 ? (hour + 1) - 12 : (hour + 1) === 0 ? 12 : (hour + 1);
      const ampmEnd = (hour + 1) >= 12 ? "PM" : "AM";
      
      const label = `${displayHourStart}:00 ${ampmStart} - ${displayHourEnd}:00 ${ampmEnd}`;
      
      slots.push({
        id: id++,
        startTime,
        endTime,
        label,
        // Pre-book some slots to make it look active/dynamic
        isBooked: [1, 4, 7, 10].includes(id - 1)
      });
    }
    setTimeSlots(slots);

    // Simulate load state for skeleton transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Handle click to select a single 1-hour slot (and allow deselecting)
  const handleSlotClick = (index: number) => {
    const slot = timeSlots[index];
    if (slot.isBooked) return;
    if (selectedStartSlotIndex === index) {
      setSelectedStartSlotIndex(null);
    } else {
      setSelectedStartSlotIndex(index);
    }
    setErrorMsg(null);
  };

  // Compute selected time ranges
  const getSelectedRangeString = () => {
    if (selectedStartSlotIndex === null || timeSlots.length === 0) return "";
    const slot = timeSlots[selectedStartSlotIndex];
    return slot.label;
  };

  const getSelectedMilitaryRangeString = () => {
    if (selectedStartSlotIndex === null || timeSlots.length === 0) return "";
    const slot = timeSlots[selectedStartSlotIndex];
    return `${slot.startTime} - ${slot.endTime}`;
  };

  const basePrice = 600;
  const totalPrice = 600; // 600/- per 1 hour slot

  // Clear selections when switching dates or courts to simulate dynamic loading
  const handleDateChange = (date: DateItem) => {
    if (!date.isSelectable) return;
    setSelectedDate(date);
    setSelectedStartSlotIndex(null);
    setErrorMsg(null);
  };

  const handleCourtChange = (court: "Court A" | "Court B") => {
    setSelectedCourt(court);
    setSelectedStartSlotIndex(null);
    setErrorMsg(null);
  };

  if (isLoading) {
    return (
      <div className="relative min-h-screen bg-primary-dark font-poppins text-white pb-16">
        {/* Skeleton Header */}
        <header className="sticky top-0 z-40 bg-primary-dark/85 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-white/5 animate-pulse" />
            <div>
              <div className="h-3 w-24 bg-white/10 rounded animate-pulse mb-2" />
              <div className="h-6 w-32 bg-white/15 rounded animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/10 animate-pulse" />
            <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
          </div>
        </header>

        {/* Skeleton Content Area */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
          {/* Date Selector Skeleton Wrapped in Glassmorphic Panel */}
          <div className="glass p-5 md:p-6 rounded-3xl space-y-4">
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse" />
            <div className="flex gap-3 overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="w-20 h-24 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center justify-center p-3 gap-2 flex-shrink-0 animate-pulse">
                  <div className="h-3 w-8 bg-white/10 rounded" />
                  <div className="h-7 w-8 bg-white/15 rounded-md" />
                  <div className="h-2 w-10 bg-white/10 rounded" />
                </div>
              ))}
            </div>
            {/* Dummy Skeleton arrows below date strip */}
            <div className="flex justify-end gap-2 pt-1 animate-pulse">
              <div className="w-8 h-8 rounded-xl bg-white/5" />
              <div className="w-8 h-8 rounded-xl bg-white/5" />
            </div>
          </div>

          {/* Swapped & Realigned Controls Skeleton Container */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-stretch sm:items-center">
            {/* Left: Day/Night filter skeleton */}
            <div className="space-y-3 flex-1 max-w-md">
              <div className="h-4 w-40 bg-white/10 rounded animate-pulse" />
              <div className="h-12 w-full rounded-full bg-white/5 border border-white/5 p-1.5 flex gap-2 animate-pulse">
                <div className="flex-1 rounded-full bg-white/10" />
                <div className="flex-1 rounded-full" />
              </div>
            </div>
            {/* Right: Select Arena skeleton */}
            <div className="space-y-3 flex-1 max-w-md sm:flex sm:flex-col sm:items-end w-full">
              <div className="h-4 w-28 bg-white/10 rounded animate-pulse w-28" />
              <div className="h-12 w-full rounded-full bg-white/5 border border-white/5 p-1.5 flex gap-2 animate-pulse">
                <div className="flex-1 rounded-full bg-white/10" />
                <div className="flex-1 rounded-full" />
              </div>
            </div>
          </div>

          {/* Slots Horizontal List Skeleton */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-4 w-36 bg-white/10 rounded animate-pulse" />
              <div className="h-3 w-64 bg-white/5 rounded animate-pulse" />
            </div>
            
            <div className="glass p-5 md:p-6 rounded-3xl space-y-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-28 sm:h-24 rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between animate-pulse gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/5" />
                    <div className="space-y-1.5">
                      <div className="h-4 w-36 bg-white/10 rounded" />
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-16 bg-white/5 rounded" />
                        <div className="h-2 w-2 rounded bg-white/5" />
                        <div className="h-5 w-14 rounded-md bg-white/5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start sm:items-end gap-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-6.5 rounded-full bg-white/5" />
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
                      <div className="space-y-1 text-left sm:text-right">
                        <div className="h-2 w-12 bg-white/5 rounded" />
                        <div className="h-4 w-10 bg-white/10 rounded" />
                      </div>
                      <div className="w-20 h-9 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-primary-dark font-poppins text-white selection:bg-energy selection:text-primary-dark pb-16">
      
      {/* Dynamic Stroke CSS for Success checkmark animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes scale {
          0%, 100% {
            transform: none;
          }
          50% {
            transform: scale3d(1.1, 1.1, 1);
          }
        }
        @keyframes fill-success {
          100% {
            box-shadow: inset 0px 0px 0px 80px rgba(251, 186, 22, 0.1);
          }
        }
        .animate-checkmark {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.3s forwards;
        }
        .success-circle {
          animation: scale 0.3s ease-in-out 0.9s both, fill-success 0.4s ease-in-out 0.4s forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Background visual glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-airy/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-navy/20 rounded-full blur-[140px] pointer-events-none translate-y-1/3"></div>

      {/* PHASE 1 & 2 HEADER */}
      {phase !== "success" && (
        <header className="sticky top-0 z-40 bg-primary-dark/85 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {phase === "selection" ? (
              <Link 
                href="/" 
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            ) : (
              <button 
                onClick={() => setPhase("selection")}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Back to selection"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="text-xs font-bold text-airy tracking-widest uppercase">
                {phase === "selection" ? "Step 1: Choose Slot" : "Step 2: Review Booking"}
              </span>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">
                {phase === "selection" ? "Book A Court" : "Checkout Details"}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-energy flex items-center justify-center font-extrabold text-primary-dark text-sm tracking-tighter">
              S
            </div>
            <span className="font-extrabold text-lg tracking-tighter hidden sm:inline">SQUASH</span>
          </div>
        </header>
      )}

      {/* CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 relative z-10">
        
        {/* PHASE 1: THE MATRIX */}
        {phase === "selection" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* The Date Bar - Horizontal Date Selector Wrapped in Glassmorphism Panel */}
            <div className="glass p-5 md:p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-sm font-bold tracking-widest uppercase text-airy flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Select Date
                </h2>
                {selectedDate && (
                  <span className="text-xs text-white/60 font-semibold">{selectedDate.fullDate}</span>
                )}
              </div>
              
              <div 
                ref={dateContainerRef}
                className="flex gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
              >
                {dates.map((d) => {
                  const isSelected = selectedDate?.id === d.id;
                  return (
                    <button
                      key={d.id}
                      disabled={!d.isSelectable}
                      onClick={() => handleDateChange(d)}
                      className={`flex-shrink-0 flex flex-col items-center justify-center w-20 py-3 rounded-2xl border transition-all duration-300 ${
                        !d.isSelectable
                          ? "bg-black/20 border-white/5 text-white/25 opacity-30 cursor-not-allowed"
                          : isSelected 
                            ? "bg-energy text-primary-dark border-energy shadow-lg shadow-energy/20 scale-[1.03] font-bold cursor-pointer" 
                            : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-white cursor-pointer"
                      }`}
                    >
                      <span className={`text-[10px] tracking-wider uppercase font-semibold ${!d.isSelectable ? "text-white/20" : isSelected ? "text-primary-dark/80" : "text-white/40"}`}>
                        {d.dayName}
                      </span>
                      <span className="text-2xl font-extrabold tracking-tight mt-0.5">
                        {d.dateNum}
                      </span>
                      <span className={`text-[9px] tracking-widest uppercase font-bold mt-0.5 ${!d.isSelectable ? "text-white/20" : isSelected ? "text-primary-dark/80" : "text-white/40"}`}>
                        {d.month}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation arrows below date strip on the right */}
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => scrollDates("left")}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollDates("right")}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Swapped & Realigned Controls Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-stretch sm:items-center">
              
              {/* Left Column: Filter Session Time (Originally Arena's spot) */}
              <div className="space-y-3 flex-1 max-w-md">
                <h2 className="text-sm font-bold tracking-widest uppercase text-airy flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Filter Session Time
                </h2>
                
                <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 w-full">
                  <button
                    onClick={() => setTimeOfDay("day")}
                    className={`flex-1 py-3 px-6 rounded-full text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      timeOfDay === "day"
                        ? "bg-white text-primary-dark shadow-md font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Sun className="w-4 h-4" />
                    Day Slots
                  </button>
                  <button
                    onClick={() => setTimeOfDay("night")}
                    className={`flex-1 py-3 px-6 rounded-full text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      timeOfDay === "night"
                        ? "bg-white text-primary-dark shadow-md font-bold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Moon className="w-4 h-4" />
                    Night Slots
                  </button>
                </div>
              </div>

              {/* Right Column: Select Arena (Moved to the right side) */}
              <div className="space-y-3 flex-1 max-w-md sm:flex sm:flex-col sm:items-end w-full">
                <h2 className="text-sm font-bold tracking-widest uppercase text-airy flex items-center gap-2 w-full sm:justify-end">
                  <MapPin className="w-4 h-4" />
                  Select Arena
                </h2>
                
                <div className="inline-flex p-1.5 rounded-full bg-white/5 border border-white/10 w-full">
                  <button
                    onClick={() => handleCourtChange("Court A")}
                    className={`flex-1 py-3 px-6 rounded-full text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                      selectedCourt === "Court A"
                        ? "bg-white text-primary-dark shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Court A
                  </button>
                  <button
                    onClick={() => handleCourtChange("Court B")}
                    className={`flex-1 py-3 px-6 rounded-full text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                      selectedCourt === "Court B"
                        ? "bg-white text-primary-dark shadow-md"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Court B
                  </button>
                </div>
              </div>

            </div>

            {/* Time Grid Title & Indicator */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div>
                  <h2 className="text-sm font-bold tracking-widest uppercase text-airy flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Available Slots
                  </h2>
                  <p className="text-xs text-white/50 mt-1">Rates: 600/- per 1-hour session.</p>
                </div>
                
                {/* Legend Indicators */}
                <div className="flex gap-4 text-xs font-semibold items-center">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/45 border border-emerald-500/20 text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      Available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-red-950/45 border border-red-500/20 text-red-300">
                      <Lock className="w-3.5 h-3.5" />
                      Occupied
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-energy text-primary-dark border border-energy">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      Selected
                    </span>
                  </div>
                </div>
              </div>

              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-950/45 border border-red-500/35 flex items-center gap-3 text-red-200 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Skyscanner-Style Horizontal Time Slots wrapped in a glass container */}
              <div className="glass p-5 md:p-6 rounded-3xl space-y-3">
                {timeSlots
                  .filter((slot) => {
                    const startHour = parseInt(slot.startTime.split(":")[0]);
                    return timeOfDay === "day" ? startHour < 16 : startHour >= 16;
                  })
                  .map((slot) => {
                    const originalIndex = timeSlots.findIndex((s) => s.id === slot.id);
                    const isSlotSelected = selectedStartSlotIndex === originalIndex;

                    return (
                      <div
                        key={slot.id}
                        onClick={() => {
                          if (!slot.isBooked) {
                            handleSlotClick(originalIndex);
                          }
                        }}
                        className={`relative flex flex-col sm:flex-row sm:items-center justify-between p-4.5 rounded-2xl border transition-all duration-300 gap-4 ${
                          slot.isBooked 
                            ? "bg-black/35 border-white/5 text-white/30 opacity-40 cursor-not-allowed" 
                            : isSlotSelected 
                              ? "bg-energy border-energy text-primary-dark shadow-xl shadow-energy/30 scale-[1.01] cursor-pointer" 
                              : "glass hover:bg-white/15 hover:border-white/20 hover:scale-[1.005] cursor-pointer"
                        }`}
                      >
                        {/* Left side: Time, clock icon, duration, court details */}
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl flex items-center justify-center ${
                            slot.isBooked
                              ? "bg-white/5 text-white/20"
                              : isSlotSelected
                                ? "bg-primary-dark/10 text-primary-dark"
                                : "bg-white/5 text-airy"
                          }`}>
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`text-base font-extrabold tracking-tight ${
                                slot.isBooked ? "line-through text-white/20" : ""
                              }`}>
                                {slot.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className={`text-xs font-semibold ${
                                isSlotSelected ? "text-primary-dark/70" : "text-white/40"
                              }`}>
                                1 Hour Session
                              </span>
                              <span className={`text-xs font-semibold ${
                                isSlotSelected ? "text-primary-dark/40" : "text-white/20"
                              }`}>•</span>
                              <span className={`text-[10px] font-black px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                                isSlotSelected 
                                  ? "bg-primary-dark/10 border-primary-dark/20 text-primary-dark" 
                                  : "bg-white/5 border-white/10 text-airy font-extrabold"
                              }`}>
                                {selectedCourt}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Right side: Badge (over/above) + Pricing and Action trigger */}
                        <div className="flex flex-col items-start sm:items-end gap-3.5 border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
                          {/* Status Badge moved here */}
                          <div className="flex items-center gap-2">
                            {slot.isBooked ? (
                              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-red-950/45 border border-red-500/20 text-red-300">
                                <Lock className="w-3.5 h-3.5" />
                                Sold Out
                              </span>
                            ) : isSlotSelected ? (
                              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-primary-dark/15 border border-primary-dark/20 text-primary-dark font-extrabold">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                                Your Choice
                              </span>
                            ) : (
                              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-950/45 border border-emerald-500/20 text-emerald-300">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                Available
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between sm:justify-end gap-5 w-full sm:w-auto">
                            <div className="text-left sm:text-right">
                              <span className={`text-[10px] tracking-wider uppercase font-bold block ${
                                isSlotSelected ? "text-primary-dark/60" : "text-white/40"
                              }`}>
                                Total Cost
                              </span>
                              <span className={`text-lg font-black tracking-tight ${
                                slot.isBooked ? "text-white/10" : isSlotSelected ? "text-primary-dark font-black" : "text-energy font-black"
                              }`}>
                                {slot.isBooked ? "--" : "600/-"}
                              </span>
                            </div>

                            <div
                              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                                slot.isBooked
                                  ? "bg-white/5 text-white/20 border border-transparent"
                                  : isSlotSelected
                                    ? "bg-primary-dark text-energy border border-primary-dark shadow-md shadow-primary-dark/10"
                                    : "bg-energy text-primary-dark border border-energy shadow-md shadow-energy/10"
                              }`}
                            >
                              {slot.isBooked ? "Booked" : isSlotSelected ? "Selected" : "Choose"}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            
            {/* Informational Bento Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-airy/10 border border-airy/20 text-airy">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-tight mb-1">Instant Booking</h3>
                  <p className="text-xs text-white/60 leading-relaxed">Your reservation is confirmed in real-time. No emails, no phone calls required.</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-energy/10 border border-energy/20 text-energy">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-tight mb-1">Flexible Payments</h3>
                  <p className="text-xs text-white/60 leading-relaxed">Pay seamlessly via cards, UPI, or net banking. Cancel up to 12 hours prior for free refund.</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base tracking-tight mb-1">Need Assistance?</h3>
                  <p className="text-xs text-white/60 leading-relaxed">Have questions about our professional gear or training? Contact our front desk 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 2: CHECKOUT & CONFIRMATION */}
        {phase === "checkout" && selectedDate && selectedStartSlotIndex !== null && (
          <div className="max-w-2xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Bento-box Summary Card */}
            <div className="glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-energy/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="bg-white/5 border-b border-white/5 px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-energy flex items-center justify-center text-primary-dark font-extrabold text-sm">✓</div>
                  <span className="font-extrabold text-sm tracking-wider uppercase text-white/80">Review Order Details</span>
                </div>
                <span className="text-xs font-bold text-energy px-2.5 py-1 rounded-full bg-energy/10 border border-energy/25">
                  1 HOUR SLOT
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                
                {/* Grid details */}
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Arena detail */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-airy">Arena</span>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4 text-energy" />
                      <span className="font-extrabold text-lg text-white">{selectedCourt}</span>
                    </div>
                  </div>

                  {/* Date detail */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-airy">Date</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-energy" />
                      <span className="font-extrabold text-lg text-white">{selectedDate.dayName}, {selectedDate.month} {selectedDate.dateNum}</span>
                    </div>
                  </div>

                  {/* Time Window detail */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-airy">Time Window</span>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-energy" />
                      <span className="font-extrabold text-lg text-white">{getSelectedRangeString()}</span>
                    </div>
                  </div>

                  {/* Pricing detail */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-airy">Session Rate</span>
                    <div className="flex items-center gap-2 mt-1">
                      <CreditCard className="w-4 h-4 text-energy" />
                      <span className="font-extrabold text-lg text-white">600/- per hour</span>
                    </div>
                  </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-white/10 my-6"></div>

                {/* Totals Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Court Booking Subtotal</span>
                    <span>600/-</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Equipments</span>
                    <span className="text-airy">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Platform Service Charge</span>
                    <span className="text-airy">FREE</span>
                  </div>
                  <div className="flex justify-between text-lg font-extrabold text-white pt-2 border-t border-white/5">
                    <span>Amount Payable</span>
                    <span className="text-energy text-2xl font-black">600/-</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom T&C Checkbox */}
            <div className="glass p-5 rounded-2xl border border-white/10 flex items-start gap-4">
              <label className="relative flex items-center justify-center mt-1 cursor-pointer select-none">
                <input 
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-6 h-6 rounded-md border border-white/20 bg-white/5 transition-all duration-300 peer-checked:bg-energy peer-checked:border-energy flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-dark font-extrabold stroke-[3] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </label>
              <div className="text-sm">
                <span className="font-bold text-white block">Accept Terms & Conditions</span>
                <span className="text-xs text-white/50 mt-1 block leading-relaxed">
                  I agree to follow the club safety regulations, correct footwear policy, and cancellation policy. I understand there is a 12-hour free cancellation limit.
                </span>
              </div>
            </div>

            {/* Final Action Button */}
            <button
              onClick={() => setPhase("success")}
              disabled={!acceptTerms}
              className={`w-full py-4.5 rounded-full font-black tracking-wider text-base uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer ${
                acceptTerms
                  ? "bg-energy text-primary-dark hover:scale-[1.02] active:scale-[0.98] shadow-energy/20"
                  : "bg-white/10 text-white/40 cursor-not-allowed border border-white/5"
              }`}
            >
              Confirm Booking
            </button>
          </div>
        )}

        {/* SUCCESS VIEW */}
        {phase === "success" && selectedDate && selectedStartSlotIndex !== null && (
          <div className="max-w-md mx-auto py-12 flex flex-col items-center justify-center text-center space-y-8 animate-fadeIn">
            
            {/* Large Success Circle with Animated SVG Checkmark */}
            <div className="w-28 h-28 rounded-full bg-white/5 border border-white/10 flex items-center justify-center success-circle">
              <svg className="w-16 h-16 text-energy" fill="none" stroke="currentColor" strokeWidth="5.5" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="animate-checkmark"
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>

            {/* Confirmation Texts */}
            <div className="space-y-3">
              <span className="text-xs font-black tracking-widest text-energy uppercase">CONGRATULATIONS</span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Slot is Booked!</h2>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm mx-auto">
                Your reservation at <strong className="font-extrabold text-white">Squash Pickleball Club</strong> is complete. A digital entry pass has been generated.
              </p>
            </div>

            {/* Receipt Summary Block */}
            <div className="glass w-full rounded-2xl p-5 border border-white/10 text-left divide-y divide-white/5 space-y-3.5">
              <div className="flex justify-between items-center pb-3 pt-1">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Ticket Code</span>
                <span className="text-sm font-extrabold text-airy font-mono">SQ-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between items-center py-3.5">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Arena</span>
                <span className="text-sm font-extrabold text-white">{selectedCourt}</span>
              </div>
              <div className="flex justify-between items-center py-3.5">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Session Time</span>
                <span className="text-sm font-extrabold text-white">
                  {selectedDate.dayName}, {selectedDate.month} {selectedDate.dateNum} @ {getSelectedMilitaryRangeString()}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 pb-1">
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Amount Paid</span>
                <span className="text-sm font-black text-energy">600/- Paid</span>
              </div>
            </div>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-bold tracking-tight hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
            >
              Return to Landing Page
            </Link>
          </div>
        )}
      </main>

      {/* PHASE 1: STICKY FOOTER */}
      {phase === "selection" && selectedStartSlotIndex !== null && (
        <div className="fixed bottom-0 left-0 w-full z-50 glass-dark border-t border-white/10 px-6 py-4 md:py-5 animate-slideUp">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Info: Duration and Time Window */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 self-start sm:self-center">
              {/* Duration */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-white/70 border border-white/5">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-bold text-white/50 block">Duration</span>
                  <span className="text-base font-extrabold text-white block tracking-tight">
                    1 Hour
                  </span>
                </div>
              </div>

              {/* Time Window */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-airy/15 text-airy">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase font-bold text-white/50 block">Time Window</span>
                  <span className="text-base font-extrabold text-white block tracking-tight">
                    {getSelectedRangeString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action: Price + Proceed */}
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
              <div className="text-left">
                <span className="text-[10px] tracking-wider uppercase font-bold text-white/50 block">Total Price</span>
                <span className="text-2xl font-black text-white tracking-tight">
                  {totalPrice}/-
                </span>
              </div>
              
              <button
                onClick={() => setPhase("checkout")}
                className="px-8 py-3 rounded-full bg-energy text-primary-dark font-black tracking-tight text-sm uppercase hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg shadow-energy/20 flex items-center justify-center cursor-pointer"
              >
                Proceed
              </button>
            </div>
            
          </div>
        </div>
      )}
      
    </div>
  );
}
