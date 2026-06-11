"use client";

import React, { useState, useEffect } from "react";

interface PreloaderProps {
  color?: string; // Customizable color for the loader columns
}

export default function Preloader({ color = "#9BCCD0" }: PreloaderProps) {
  const [step, setStep] = useState<"initial" | "step1" | "step2" | "step3" | "complete">("initial");
  const [showLogo, setShowLogo] = useState<boolean>(true);

  useEffect(() => {
    // Fade out logo slightly before columns start to collapse
    const t0 = setTimeout(() => setShowLogo(false), 800);
    
    // Phase transition timing matching the Framer module's keyframe delays
    const t1 = setTimeout(() => setStep("step1"), 1000); // 1s wait
    const t2 = setTimeout(() => setStep("step2"), 1200); // 1s + 200ms
    const t3 = setTimeout(() => setStep("step3"), 1400); // 1s + 200ms + 200ms
    const t4 = setTimeout(() => setStep("complete"), 2400); // Transitions finish

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (step === "complete") return null;

  // Map steps to column collapse state (scaleY: 0 collapsed, scaleY: 1 visible)
  const isCol3Collapsed = step !== "initial";
  const isCol24Collapsed = step === "step2" || step === "step3";
  const isCol15Collapsed = step === "step3";

  return (
    <div 
      className="fixed inset-0 w-full h-full z-9999 flex overflow-hidden pointer-events-auto"
      style={{
        zIndex: 9999,
      }}
    >
      {/* Centered Squash Logo with Green Background */}
      <div 
        className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none transition-all duration-500 ease-in-out"
        style={{
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? "scale(1)" : "scale(0.95)",
        }}
      >
        <div className="bg-[#00492C] px-16 py-12 rounded-[40px] border border-white/10 shadow-2xl flex items-center justify-center scale-75 sm:scale-100">
          <svg viewBox="0 0 520 160" className="w-[30rem] sm:w-[38rem] h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Yellow Logo Circle */}
            <circle cx="70" cy="80" r="50" fill="#FBBA16" />
            
            {/* Green 'S' inside circle */}
            <text 
              x="70" 
              y="99" 
              textAnchor="middle" 
              fill="#00492C" 
              fontSize="68" 
              fontWeight="900" 
              fontFamily="var(--font-poppins), system-ui, sans-serif"
            >
              S
            </text>
            
            {/* 'SQUASH' Text */}
            <text 
              x="145" 
              y="97" 
              fill="#FFFFFF" 
              fontSize="80" 
              fontWeight="900" 
              letterSpacing="-3" 
              fontFamily="var(--font-poppins), system-ui, sans-serif"
            >
              SQUASH
            </text>
            
            {/* Tagline Text */}
            <text 
              x="148" 
              y="134" 
              fill="#FFFFFF" 
              fontSize="16" 
              fontWeight="800" 
              letterSpacing="6" 
              fontFamily="var(--font-poppins), system-ui, sans-serif"
            >
              ELITE PICKLEBALL CLUB
            </text>
          </svg>
        </div>
      </div>

      {/* Column 1 */}
      <div 
        className="w-[20%] h-[105vh] transition-transform duration-1000 origin-top"
        style={{
          backgroundColor: color,
          transform: isCol15Collapsed ? "scaleY(0)" : "scaleY(1)",
          transitionTimingFunction: "cubic-bezier(1, 0, 0.56, 1)",
        }}
      />
      {/* Column 2 */}
      <div 
        className="w-[20%] h-[105vh] transition-transform duration-1000 origin-top"
        style={{
          backgroundColor: color,
          transform: isCol24Collapsed ? "scaleY(0)" : "scaleY(1)",
          transitionTimingFunction: "cubic-bezier(1, 0, 0.56, 1)",
        }}
      />
      {/* Column 3 */}
      <div 
        className="w-[20%] h-[105vh] transition-transform duration-1000 origin-top"
        style={{
          backgroundColor: color,
          transform: isCol3Collapsed ? "scaleY(0)" : "scaleY(1)",
          transitionTimingFunction: "cubic-bezier(1, 0, 0.56, 1)",
        }}
      />
      {/* Column 4 */}
      <div 
        className="w-[20%] h-[105vh] transition-transform duration-1000 origin-top"
        style={{
          backgroundColor: color,
          transform: isCol24Collapsed ? "scaleY(0)" : "scaleY(1)",
          transitionTimingFunction: "cubic-bezier(1, 0, 0.56, 1)",
        }}
      />
      {/* Column 5 */}
      <div 
        className="w-[20%] h-[105vh] transition-transform duration-1000 origin-top"
        style={{
          backgroundColor: color,
          transform: isCol15Collapsed ? "scaleY(0)" : "scaleY(1)",
          transitionTimingFunction: "cubic-bezier(1, 0, 0.56, 1)",
        }}
      />
    </div>
  );
}
