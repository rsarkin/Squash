"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1F3D] py-8 px-4 sm:px-6 md:px-12">
      {/* Floating Dark Green Footer Card */}
      <div className="max-w-7xl mx-auto bg-[#00492C] text-white rounded-[40px] md:rounded-[48px] shadow-2xl p-6 md:py-10 md:px-12 border border-white/10 relative overflow-hidden">
        
        {/* Top Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 mb-8">
          
          {/* Column 1: Brand Statement (Span 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-extrabold text-lg uppercase tracking-wider text-[#FBBA16]">
              Brand Statement
            </h4>
            <p className="text-sm text-white/80 leading-relaxed font-semibold">
              Redefining the sports court experience. High-performance pickleball courts, professional instruction, and a premium community lounge for players of all levels.
            </p>
            <p className="text-xs text-[#9BCCD0] font-bold uppercase tracking-wider">
              From baseline drops to kitchen dominance.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4.5 pt-2 text-white">
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FBBA16] hover:text-[#00492C] hover:scale-105 active:scale-95 transition-all duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FBBA16] hover:text-[#00492C] hover:scale-105 active:scale-95 transition-all duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FBBA16] hover:text-[#00492C] hover:scale-105 active:scale-95 transition-all duration-300" aria-label="YouTube">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="10 15 15 12 10 9"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-lg uppercase tracking-wider text-[#FBBA16]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-bold text-white/70">
              <li>
                <a href="#courts" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Court Specs
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Club Amenities
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Elite Coaches
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Member Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Collections / Services (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-lg uppercase tracking-wider text-[#FBBA16]">
              Club Offerings
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-bold text-white/70">
              <li>
                <a href="#book" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Court Rental
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Private Coaching
                </a>
              </li>
              <li>
                <a href="#coaches" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Group Clinics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Tournaments & Leagues
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Pro Shop Gear
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Simplified Actions Column next to Club Offerings (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-lg uppercase tracking-wider text-[#FBBA16]">
              Get Started
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm font-bold text-white/70">
              <li>
                <a href="#book" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Join Club
                </a>
              </li>
              <li>
                <Link href="/book" className="hover:text-[#FBBA16] hover:translate-x-1 inline-block transition-all duration-300">
                  Book a Slot
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Giant Squash branding (Pegasus circle icon removed) */}
        <div className="border-t border-white/10 pt-6 pb-2 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 overflow-hidden">
          {/* Big Text branding */}
          <div className="flex items-center select-none">
            <span className="text-6xl sm:text-7xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter text-white leading-none uppercase">
              Squash
            </span>
          </div>

          {/* Subtext and Copyright (Lower Right) */}
          <div className="text-center md:text-right text-xs text-white/50 space-y-2 md:max-w-md font-semibold">
            <p className="leading-relaxed">
              © {new Date().getFullYear()} Squash Club. Designed for elite preservation. Documenting matches beyond tournaments.
            </p>
            <div className="flex justify-center md:justify-end gap-5 font-extrabold text-white/80">
              <a href="#" className="hover:text-[#FBBA16] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#FBBA16] transition-colors">Terms of Play</a>
              <a href="#" className="hover:text-[#FBBA16] transition-colors flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Support</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
