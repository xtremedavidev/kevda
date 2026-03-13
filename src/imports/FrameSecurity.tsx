"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, Zap, Lock, ShieldCheck, UserCheck, ClipboardCheck } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameSecurity() {
  const sideNavItems = [
    { label: "Intro", sectionId: "security-hero" },
    { label: "Approach", sectionId: "security-approach" },
    { label: "Notes", sectionId: "security-notes" },
    { label: "Contact", sectionId: "security-contact" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <section id="security-hero" className="relative w-full min-h-screen flex items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
          <Image 
            src="/assets/008d4cd5bfb647abbdba3681ada3b89d350124b8.png" 
            alt="DNA Background" 
            fill 
            className="object-cover object-left bg-white" 
            priority 
          />
        </div>

        <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black wrap-break-word">
            Security &<br/>Confidentiality
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            We treat sensitive sequences, programs, and experimental outcomes as a core operating responsibility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Start a Confidential Discussion
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d3b582] opacity-50"></div>
            <span className="text-xs text-gray-400 font-medium">NDA available upon request</span>
          </div>
        </div>

        <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
          <ArrowDown size={24} className="stroke-[1.5px]" />
          <span className="font-light text-base">Scroll for more</span>
        </div>
      </section>

      {/* Approach Section */}
      <section id="security-approach" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col">
          <div className="w-full mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-black">Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { text: "NDA-friendly engagement", icon: Lock },
              { text: "Controlled access to files and outputs", icon: ShieldCheck },
              { text: "Clear collaboration norms", icon: UserCheck },
              { text: "Professional handling of documentation and deliverables", icon: ClipboardCheck }
            ].map((item, i) => (
              <div 
                key={i} 
                className="rounded-[32px] p-10 bg-[#f7f7f7] border border-gray-50 flex flex-col items-center justify-center text-center gap-6 group hover:shadow-xl hover:scale-[1.02] transition-all min-h-[280px]"
              >
                <div className="text-gray-300">
                   <item.icon size={56} strokeWidth={1} />
                </div>
                <p className="text-xl font-medium text-black leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section id="security-notes" className="bg-white w-full py-20 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1400px] border border-gray-100 rounded-[40px] overflow-hidden bg-white shadow-sm mx-auto">
            <div className="p-8 lg:p-12">
               <div className="bg-[#EBF4F2] border border-[#C8DDD9] rounded-[24px] p-8 lg:p-12 relative flex items-center gap-6">
                  <div className="text-[#004D43]/40">
                     <Zap size={24} />
                  </div>
                  <p className="text-xl text-[#2D3748] leading-relaxed font-normal italic">
                     If preferred, we can begin under NDA before any program details are shared.
                  </p>
               </div>
            </div>
        </div>
      </section>

      <div id="security-contact">
         <UnifiedCTA secondaryButtonText="Contact Security Officer" secondaryButtonHref="/contact" />
      </div>
    </PageWrapper>
  );
}
