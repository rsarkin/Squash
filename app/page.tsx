import React from "react";
import Hero from "@/components/Hero";
import CourtSpecs from "@/components/CourtSpecs";
import Facilities from "@/components/Facilities";
import Coach from "@/components/Coach";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Preloader />
      {/* 1. Hero Section (with Navigation) */}
      <Hero />

      {/* 2. Court Specs (Antigravity Module) */}
      <CourtSpecs />

      {/* 3. Facilities Grid (Bento Box) */}
      <Facilities />

      {/* 4. Head Coach Profile */}
      <Coach />

      {/* 5. Member Testimonials */}
      <Testimonials />

      {/* 6. Footer Layout */}
      <Footer />
    </main>
  );
}
