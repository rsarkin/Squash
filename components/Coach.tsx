"use client";

import React from "react";
import { Award, CheckCircle, Target, Users, BookOpen, Star, Calendar } from "lucide-react";

export default function Coach() {
  const achievements = [
    "USAPA Certified Elite Coach",
    "Former touring tennis & pickleball professional",
    "Creator of the 'Kinetic Momentum' footwork drills",
    "Specialist in DUPR rating improvement and strategy",
  ];

  return (
    <section id="coaches" className="w-full bg-gradient-to-b from-[#00492C] to-[#0D1F3D] text-white py-24 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Subtle Ice Blue background glow */}
      <div className="absolute top-1/4 left-3/4 w-[400px] h-[400px] bg-airy/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-energy/10 border border-energy/20 text-energy text-xs font-bold uppercase tracking-wider mb-4">
            Elite Coaching
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1]">
            Meet Your <br />
            <span className="text-energy">Head Instructor.</span>
          </h2>
        </div>

        {/* Coach Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Image Overlay (Span 5) */}
          <div className="col-span-1 lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl group border border-white/10">
            {/* Coach Picture */}
            <div
              className="w-full h-[450px] md:h-[550px] bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/coach_marcus.png')" }}
            />
            {/* Dark Gradient bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Floating DUPR Badge */}
            <div className="absolute top-6 right-6 bg-energy text-primary-dark px-4 py-2 rounded-2xl font-extrabold text-sm tracking-tight shadow-md flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>5.85 DUPR</span>
            </div>

            {/* Overlaid Info */}
            <div className="absolute bottom-0 inset-x-0 p-8 text-white">
              <div className="text-xs text-energy font-bold uppercase tracking-widest mb-1">Head Director</div>
              <h3 className="text-3xl font-extrabold tracking-tighter">Marcus Thorne</h3>
              <p className="text-white/60 text-sm mt-1">Coaching Competitive & Professional Athletes</p>
            </div>
          </div>

          {/* Right Column: Bio & Achievements (Span 7) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-white">
              Unlock Your Championship Potential
            </h3>

            <p className="text-white/80 leading-relaxed mb-8 font-normal text-base md:text-lg">
              Marcus Thorne is a legendary name on the professional court. Over the past decade, he has developed a coaching methodology that bridges raw athletic power with surgical shot precision. Whether you are looking to refine your kitchen dinks or master the third shot drop, Marcus provides the tactical playbook you need.
            </p>

            {/* Metrics Checklist */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-y border-white/10 py-8">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-energy tracking-tight">12+</span>
                <span className="text-xs text-white/55 font-bold uppercase tracking-wider mt-1.5">Years Coaching</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-energy tracking-tight">850+</span>
                <span className="text-xs text-white/55 font-bold uppercase tracking-wider mt-1.5">Players Trained</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-energy tracking-tight">4.98</span>
                <span className="text-xs text-white/55 font-bold uppercase tracking-wider mt-1.5">Rating</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-energy tracking-tight">15</span>
                <span className="text-xs text-white/55 font-bold uppercase tracking-wider mt-1.5">Medalists Developed</span>
              </div>
            </div>

            {/* Achievement Items */}
            <div className="space-y-4 mb-8">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-energy flex-shrink-0" />
                  <span className="text-white/95 text-sm font-semibold tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            {/* Booking CTA */}
            <div>
              <a
                href="#book"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-energy text-primary-dark font-extrabold tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
              >
                <Calendar className="w-5 h-5 text-primary-dark" />
                <span>Book Session</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
