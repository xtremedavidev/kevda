"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameLeadership() {
  const sideNavItems = [
    { label: "Intro", sectionId: "leadership-hero" },
    { label: "Team", sectionId: "leadership-team" },
    { label: "Contact", sectionId: "leadership-contact" },
  ];

  const leaders = [
    {
      name: "Aaron Larsen",
      title: "Co-Founder & CEO",
      bio: "Aaron Larsen is a scientist operator with academic and industry experience across molecular biology and RNA platforms. He conducted postgraduate research at Harvard University and contributed across leading biotech platforms including Moderna and Beam Therapeutics, supporting discovery programs, delivery systems, analytical workflows, and manufacturing-relevant execution.",
      image: "/assets/5443329941a5d6f1bfd2371cbef627f31be4d852.png"
    },
    {
      name: "Joel Deutsch",
      title: "Co-Founder & COO",
      bio: "Joel Deutsch leads operations and execution delivery. He was early hiring at Trialspark, leading project management, budgeting, and day-to-day project management — ensuring clinical readiness, structured documentation, and disciplined execution.",
      image: "/assets/5443329941a5d6f1bfd2371cbef627f31be4d852.png"
    }
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <section id="leadership-hero" className="relative w-full min-h-screen flex items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
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
            Leadership
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            Scientific standards and operational discipline — owned at the top.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Start a Confidential Discussion
            </button>
            <button className="bg-[#084d43] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Initiate a Project
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

      {/* Executives Section */}
      <section id="leadership-team" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col gap-24 md:gap-32">
           {leaders.map((leader, i) => (
             <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                   <div className="flex flex-col gap-1">
                      <h2 className="text-3xl md:text-[50px] font-medium text-black">{leader.name}</h2>
                      <p className="text-xl text-black/90 font-medium">{leader.title}</p>
                   </div>
                   <p className="text-lg md:text-xl text-black/70 leading-relaxed">
                      {leader.bio}
                   </p>
                </div>
                <div className="w-full lg:w-[500px] aspect-square relative rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl">
                   <Image 
                     src={leader.image} 
                     alt={leader.name} 
                     fill 
                     className="object-cover" 
                   />
                </div>
             </div>
           ))}
        </div>
      </section>

      <div id="leadership-contact">
        <UnifiedCTA />
      </div>
    </PageWrapper>
  );
}
