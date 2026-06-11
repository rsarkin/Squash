"use client";

import React from "react";
import { Coffee, ShieldCheck, ShoppingBag, Trophy, ArrowUpRight } from "lucide-react";

export default function Facilities() {
  return (
    <section id="facilities" className="w-full bg-primary-dark text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-energy/10 border border-energy/20 text-energy text-xs font-bold uppercase tracking-wider mb-4">
              Club Amenities
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1]">
              Explore Our <br />
              <span className="text-energy">Facilities.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5 max-w-sm">
            <p className="text-white/60 text-base leading-relaxed">
              Every square inch of Squash is built to facilitate elite athletic performance and premium social interaction. Discover what makes us the ultimate athletic hub.
            </p>
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-energy text-primary-dark font-extrabold text-sm tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <span>Book a Court</span>
              <ArrowUpRight className="w-4 h-4 text-primary-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Locker Room & Recovery (Large - col-span-2) */}
          <div className="md:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between group hover:border-energy/40 transition-all duration-300 min-h-[300px]">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-energy group-hover:text-primary-dark transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/45 group-hover:text-energy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-xs text-white/55 font-bold uppercase tracking-widest mb-1.5">Elite Comfort</div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">Luxury Lockers & Recovery Suite</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                Refresh post-match with individual luxury digital lockers, high pressure steam showers, ice plunge baths, and a specialized compression recovery zone.
              </p>
            </div>
          </div>

          {/* Card 2: Lounge & Cafe (Medium - col-span-1) */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between group hover:border-energy/40 transition-all duration-300 min-h-[300px]">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-energy group-hover:text-primary-dark transition-colors duration-300">
                <Coffee className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/45 group-hover:text-energy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-xs text-white/55 font-bold uppercase tracking-widest mb-1.5">Fuel & Hydration</div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">The Baseline Cafe</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Re-energize with custom pre-workout smoothies, performance focused protein bowls, custom roast espresso, and electrolyte hydration on tap.
              </p>
            </div>
          </div>

          {/* Card 3: Pro Shop (Medium - col-span-1) */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between group hover:border-energy/40 transition-all duration-300 min-h-[300px]">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-energy group-hover:text-primary-dark transition-colors duration-300">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/45 group-hover:text-energy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-xs text-white/55 font-bold uppercase tracking-widest mb-1.5">Professional Gear</div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">Signature Pro Shop</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Test and purchase premium paddles, pro balls, court footwear, and activewear. Get custom grip replacements and paddle tuning by certified experts.
              </p>
            </div>
          </div>

          {/* Card 4: Official Tournaments (Large - col-span-2) */}
          <div className="md:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between group hover:border-energy/40 transition-all duration-300 min-h-[300px]">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-energy group-hover:text-primary-dark transition-colors duration-300">
                <Trophy className="w-6 h-6" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/45 group-hover:text-energy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-xs text-white/55 font-bold uppercase tracking-widest mb-1.5">Sanctioned Play</div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">Championship Tournaments</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                Compete in official club championships, ladder matches, and regional leagues. We feature high-fidelity digital scoreboard streams and full bracket coordination.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
