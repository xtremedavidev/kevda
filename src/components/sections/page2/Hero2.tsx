"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero2() {
  return (
    <section className="relative w-full min-h-screen flex items-center  pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
        <Image
          src="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png"
          alt="DNA Background"
          fill
          className="object-cover md:object-contain object-right"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-full flex flex-col gap-4 sm:gap-4 md:gap-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] leading-tight sm:leading-[1.1] font-medium text-black break-words max-w-full lg:max-w-3xl">
          Execution built for
          <br />
          preclinical pace.
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal text-black w-full max-w-2xl">
          Kevda focuses on execution-heavy wet-lab work so teams can reach
          proof-of-concept milestones without expanding internal overhead.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-normal sm:whitespace-nowrap backdrop-blur-md transition-transform hover:scale-105">
            Start a Confidential Discussion
          </button>
          <button className="bg-[#084d43] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-normal sm:whitespace-nowrap backdrop-blur-md transition-transform hover:scale-105">
            Request a Scope Proposal
          </button>
        </div>
        <div className="flex items-center gap-2 bg-[#e3d5b8] w-fit px-3 py-1 rounded-lg">
          <span className="text-xs text-[#6e4515]">
            NDA available upon request
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b] z-20">
        <ArrowDown size={24} className="stroke-[1.5px]" />
        <span className="font-light text-base">Scroll for more</span>
      </div>
    </section>
  );
}
