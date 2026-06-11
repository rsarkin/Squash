"use client";

import React from "react";
import { ChevronRight, Calendar, UserCheck, Star, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-primary-dark">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{ backgroundImage: "url('/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark" />
      </div>

      {/* Header / Navigation Bar */}
      <header className="relative z-10 w-full px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-black/45 to-transparent backdrop-blur-sm sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-energy flex items-center justify-center font-extrabold text-primary-dark text-lg tracking-tighter">
            S
          </div>
          <span className="font-extrabold text-2xl tracking-tighter text-white">SQUASH</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-white/80">
          <a href="#courts" className="hover:text-energy transition-colors">Courts</a>
          <a href="#facilities" className="hover:text-energy transition-colors">Facilities</a>
          <a href="#coaches" className="hover:text-energy transition-colors">Coaches</a>
          <a href="#testimonials" className="hover:text-energy transition-colors">Reviews</a>
        </nav>
        <div>
          <a
            href="#book"
            className="px-6 py-2.5 rounded-full bg-energy text-primary-dark font-bold text-sm tracking-tight hover:bg-white transition-all duration-300 shadow-md"
          >
            Join Club
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-16 max-w-5xl pt-16 pb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-red-500/25 text-red-400 text-xs font-bold tracking-widest uppercase mb-6 w-fit">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          Available For Bookings
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6">
          Train Smarter.<br />
          Play Stronger.<br />
          <span className="text-energy">Win More.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 font-normal">
          A modern sports club experience built for players of every level  from first timers to competitive athletes. Welcome to the home of elite pickleball.
        </p>

        {/* Call to Actions (Dual Badge Buttons) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="/book"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-energy text-primary-dark font-extrabold tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg group"
          >
            <Calendar className="w-5 h-5 text-primary-dark" />
            <span>Book a Court</span>
            <ChevronRight className="w-4 h-4 text-primary-dark group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#coaches"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-extrabold tracking-tight hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-300 shadow-md"
          >
            <UserCheck className="w-5 h-5 text-white" />
            <span>Coaching Sessions</span>
          </a>
        </div>
      </div>

      {/* Footer Info & Scroll Indicator */}
      <div className="relative z-10 w-full px-6 py-8 md:px-16 flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-6">
        <a
          href="#courts"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-semibold tracking-tight"
        >
          <span>Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>

        {/* Member Rating Badge */}
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-energy text-energy" />
            <span className="font-extrabold text-white text-sm">4.9</span>
          </div>
          <div className="w-[1px] h-4 bg-white/20" />
          <div className="flex -space-x-2.5">
            <div className="w-6 h-6 rounded-full bg-slate-400 border border-primary-dark overflow-hidden flex items-center justify-center text-[10px] font-bold text-white">M</div>
            <div className="w-6 h-6 rounded-full bg-blue-400 border border-primary-dark overflow-hidden flex items-center justify-center text-[10px] font-bold text-white">S</div>
            <div className="w-6 h-6 rounded-full bg-emerald-400 border border-primary-dark overflow-hidden flex items-center justify-center text-[10px] font-bold text-white">J</div>
          </div>
          <span className="text-white/60 text-xs font-semibold">3k+ Members</span>
        </div>
      </div>
    </section>
  );
}
