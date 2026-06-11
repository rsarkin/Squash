"use client";

import React from "react";
import { Layers, Activity, Star, Eye, Zap, Flame, ShieldAlert, Sparkles } from "lucide-react";

export default function CourtSpecs() {
  const specs = [
    { name: "Shock Absorption Layer", desc: "15% impact reduction for joint protection", icon: ShieldAlert },
    { name: "Energy Return Foundation", desc: "Explosive recoil and kinetic spring-back", icon: Activity },
    { name: "Surface Grip Coating", desc: "Zero-slip traction in all weather conditions", icon: Flame },
    { name: "Acoustically Optimized Sub-base", desc: "Noisy echoes eliminated for mental focus", icon: Layers },
    { name: "Professional Boundary Marking", desc: "High-contrast neon visibility lines", icon: Eye },
    { name: "Reinforced Perimeter Channel", desc: "Heavy-duty perimeter stability borders", icon: Star },
    { name: "Sub-surface Ventilation", desc: "Prevents moisture buildup and surface slickness", icon: Zap },
    { name: "High-density Cushion Matrix", desc: "Premium fatigue reduction cushion layer", icon: Sparkles },
  ];

  const row1Photos = [
    { name: "Sports Cafe", url: "/court_cafe.png" },
    { name: "Pro Shop", url: "/court_shop.png" },
    { name: "Match Play", url: "/court_action.png" },
  ];

  const row2Photos = [
    { name: "Surface Technology", url: "/court_turf_texture.png" },
    { name: "Club Life", url: "/court_group_photo.png" },
    { name: "Tournaments", url: "/court_tournament.png" },
  ];

  const duplicatedRow1 = [...row1Photos, ...row1Photos, ...row1Photos];
  const duplicatedRow2 = [...row2Photos, ...row2Photos, ...row2Photos];

  return (
    <section id="courts" className="w-full min-h-screen bg-airy text-navy py-20 px-6 md:px-16 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">

        {/* Top Part: Specs and Intro Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Intro & Stats */}
          <div className="flex flex-col justify-start">
            <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-navy" />
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-6">
              Defy the<br />
              <span className="text-navy/80">Drop.</span>
            </h2>

            <p className="text-lg text-navy/80 leading-relaxed font-normal mb-8 max-w-sm">
              Experience court surfaces engineered for maximum shock absorption, professional grip, and explosive kinetic energy return. Built to reduce fatigue and elevate play.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 border-t border-navy/20 pt-8">
              <div>
                <div className="text-3xl font-extrabold text-navy tracking-tight">15%</div>
                <div className="text-xs text-navy/70 uppercase tracking-wider font-bold mt-1">Impact Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-navy tracking-tight">98%</div>
                <div className="text-xs text-navy/70 uppercase tracking-wider font-bold mt-1">Surface Grip Traction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Spec List */}
          <div className="bg-white/45 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(30,67,128,0.25)] transition-all duration-300">
            <h3 className="text-xl font-extrabold text-navy uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-energy block" />
              Antigravity 8-Layer Court Build
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/60 border border-white/80 flex items-center justify-center text-navy shadow-sm group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold tracking-tight text-navy">{spec.name}</h4>
                      <p className="text-xs text-navy/70 leading-normal mt-1">{spec.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Styles for horizontal infinite marquee scroll */}
        <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-photos {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        @keyframes marquee-photos-reverse {
          0% {
            transform: translate3d(-33.333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-photos {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee-photos 20s linear infinite;
        }
        .animate-marquee-photos-reverse {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee-photos-reverse 20s linear infinite;
        }
        .animate-marquee-photos:hover,
        .animate-marquee-photos-reverse:hover {
          animation-play-state: paused;
        }
        .fade-mask-photos {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}} />

        {/* Bottom Part: 6-Photo Marquees (3 in a line, 2 rows) */}
        <div className="flex flex-col gap-6 mt-8 w-full overflow-hidden fade-mask-photos">
          {/* Row 1 Carousel - Scrolls Right to Left */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-photos">
              {duplicatedRow1.map((photo, idx) => (
                <div key={`row1-${idx}`} className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/30 h-[220px] w-[320px] flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${photo.url}')` }}
                  />
                  {/* Dark blue gradient from below */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3D]/85 via-[#0D1F3D]/20 to-transparent" />

                  {/* Category Title directly at bottom */}
                  <div className="absolute bottom-5 inset-x-6">
                    <span className="text-xs text-energy font-extrabold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {photo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Carousel - Scrolls Left to Right */}
          <div className="w-full overflow-hidden">
            <div className="animate-marquee-photos-reverse">
              {duplicatedRow2.map((photo, idx) => (
                <div key={`row2-${idx}`} className="relative rounded-3xl overflow-hidden shadow-2xl group border border-white/30 h-[220px] w-[320px] flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${photo.url}')` }}
                  />
                  {/* Dark blue gradient from below */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3D]/85 via-[#0D1F3D]/20 to-transparent" />

                  {/* Category Title directly at bottom */}
                  <div className="absolute bottom-5 inset-x-6">
                    <span className="text-xs text-energy font-extrabold uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {photo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
