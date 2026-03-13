"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameAbout() {
  const sideNavItems = [
    { label: "Intro", sectionId: "about-hero" },
    { label: "Our Story", sectionId: "about-story" },
    { label: "Philosophy", sectionId: "about-philosophy" },
    { label: "Footprint", sectionId: "about-footprint" },
    { label: "Contact", sectionId: "about-contact" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <section id="about-hero" className="relative w-full min-h-screen flex items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
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
            About Us
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            Kevda Bioworks is a premium biotech team focused on high-level wet lab execution — delivering accuracy to support preclinical decision edge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Start a Confidential Discussion
            </button>
            <button className="bg-[#084d43] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Read our Capabilities
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

      {/* Who We Are */}
      <section id="about-story" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square bg-[#f5efe4] rounded-[40px] overflow-hidden relative shadow-sm">
            <Image src="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png" alt="Lab Work" fill className="object-cover opacity-80" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-5xl font-medium text-black">Who We Are</h2>
            <p className="text-lg md:text-xl font-normal text-black/70 leading-relaxed">
              Kevda operates as an extension of client R&D teams, focused on breakout discovery work requiring highly linear control.
            </p>
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section id="about-philosophy" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-5xl font-medium text-black">Operating Philosophy</h2>
            <p className="text-lg md:text-xl font-normal text-black/70 leading-relaxed">
              Rigorous execution only happens when results are defined upfront. Beyond data points, Kevda commits to context-aware scouting.
            </p>
          </div>
          <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square bg-[#eef2f2] rounded-[40px] overflow-hidden relative shadow-sm">
            <Image src="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png" alt="Strategy" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section id="about-footprint" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-[1600px] flex flex-col items-center gap-16">
          <h2 className="text-3xl md:text-6xl font-medium text-black text-center">Footprint</h2>
          
          <div className="relative w-full aspect-2/1 bg-[#fcfcfc] rounded-[40px] overflow-hidden border border-gray-100 p-8 shadow-sm">
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <Image src="/assets/0e18b8ec2472ed719583ad65571944b72e974749.png" alt="Map BG" fill className="object-cover" />
             </div>
             
             <div className="relative w-full h-full flex items-center justify-center">
                {/* Marker 1: Arlington, MA */}
                <div className="absolute top-[30%] left-[25%] flex flex-col items-center gap-2">
                   <div className="bg-[#084d43] text-white p-3 rounded-full shadow-lg animate-bounce">
                      <MapPin size={24} />
                   </div>
                   <div className="bg-[#084d43] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                      Arlington, MA
                   </div>
                 </div>

                {/* Marker 2: Bangalore, India */}
                <div className="absolute top-[60%] left-[70%] flex flex-col items-center gap-2">
                   <div className="bg-[#084d43] text-white p-3 rounded-full shadow-lg animate-bounce [animation-delay:0.5s]">
                      <MapPin size={24} />
                   </div>
                   <div className="bg-[#084d43] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                      Bangalore, India
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <div id="about-contact">
        <UnifiedCTA secondaryButtonText="Explore Site Map" secondaryButtonHref="/" />
      </div>
    </PageWrapper>
  );
}
