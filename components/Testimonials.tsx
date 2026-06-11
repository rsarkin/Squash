"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      title: "Competitive Club Player",
      rating: 5,
      dupr: "DUPR 4.85",
      quote: "The Antigravity court cushion matrix is an absolute game-changer. I play three hours of intense pickleball here and wake up without any knee stiffness. The court grip is unmatched.",
    },
    {
      name: "David Vance",
      title: "Founding Member",
      rating: 5,
      dupr: "DUPR 3.90",
      quote: "The Baseline Cafe serves the best post-match protein shakes in the city, and the luxury recovery suites are outstanding. It feels less like a sports facility and more like a luxury resort.",
    },
    {
      name: "Michael Chen",
      title: "Tournament Competitor",
      rating: 5,
      dupr: "DUPR 5.12",
      quote: "Coach Marcus Thorne completely overhauled my third-shot drop game. My tournament statistics have improved dramatically, and my DUPR rating shot up from 4.2 to over 5 in four months.",
    },
    {
      name: "Emily Rodriguez",
      title: "Advanced League Competitor",
      rating: 5,
      dupr: "DUPR 4.60",
      quote: "Squash provides the ultimate environment for competitive play. The tournament logistics are top-notch, the community is highly engaging, and the court traction is incredible.",
    },
  ];

  // Duplicate reviews list to create seamless infinite scroll loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="w-full bg-[#0D1F3D] text-white py-24 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      
      {/* Styles for horizontal infinite marquee scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .fade-mask {
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
      `}} />

      {/* Subtle Ice Blue background glow */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-airy/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Abstract Court Outline & Kinetic Momentum Illustration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full text-white/5" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract Court boundary */}
          <rect x="220" y="50" width="1000" height="500" rx="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          {/* Non-volley zone (kitchen) boundary lines */}
          <line x1="220" y1="200" x2="1220" y2="200" stroke="currentColor" strokeWidth="1.5" />
          <line x1="220" y1="400" x2="1220" y2="400" stroke="currentColor" strokeWidth="1.5" />
          {/* Center court lines */}
          <line x1="720" y1="50" x2="720" y2="200" stroke="currentColor" strokeWidth="1.5" />
          <line x1="720" y1="400" x2="720" y2="500" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Kinetic curves */}
          <path d="M-100 150 C 300 50, 500 450, 1540 250" stroke="url(#kinetic-gradient)" strokeWidth="2" strokeLinecap="round" />
          <path d="M-50 200 C 400 100, 600 500, 1490 350" stroke="url(#kinetic-gradient)" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M-150 100 C 200 0, 400 400, 1590 150" stroke="url(#kinetic-gradient)" strokeWidth="1" strokeLinecap="round" />
          
          {/* Colors gradient defs */}
          <defs>
            <linearGradient id="kinetic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9BCCD0" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#FBBA16" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E4380" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 px-4 sm:px-0">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-energy/10 border border-energy/20 text-energy text-xs font-bold uppercase tracking-wider mb-4">
              Member Voice
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1]">
              What Our <br />
              <span className="text-energy">Members Say.</span>
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-sm">
            Hear from our members who compete, train, and socialize at Squash daily. Our facility is proven on and off the court.
          </p>
        </div>

        {/* Marquee Infinite Loop Container */}
        <div className="relative overflow-hidden w-full py-4 fade-mask">
          <div className="animate-marquee">
            {duplicatedReviews.map((rev, idx) => (
              <div 
                key={idx} 
                className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 flex flex-col justify-between bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-energy/40 hover:bg-white/[0.07] transition-all duration-300 relative group"
              >
                {/* Quote Icon Overlay */}
                <div className="absolute top-6 right-6 text-white/5 group-hover:text-energy/5 transition-colors">
                  <Quote className="w-14 h-14 transform scale-y-[-1]" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-energy text-energy" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed italic mb-6 relative z-10 font-normal">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold tracking-tight text-white">{rev.name}</h4>
                    <p className="text-[10px] sm:text-xs text-white/55 font-bold mt-0.5">{rev.title}</p>
                  </div>
                  <div className="bg-white/10 text-white/80 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase">
                    {rev.dupr}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
