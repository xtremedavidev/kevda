"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-60 overflow-hidden">
        <Image src="/assets/008d4cd5bfb647abbdba3681ada3b89d350124b8.png" alt="DNA Background" fill className="object-cover object-left bg-white" priority />
      </div>

      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black break-words">
          Integrated mRNA Development.<br/>
          Built for Preclinical Execution.
        </h1>
        
        <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
          Kevda Bioworks is a premium wet-lab CRO supporting biotech and biopharma teams across molecular biology, cell-based assays, protein characterization, and mRNA/LNP delivery.
        </p>

        <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl whitespace-pre-wrap">
          {`Boston, MA     |     Bangalore, India`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
            Start a Confidential Discussion
          </button>
          <button className="bg-[#084d43] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
            Explore Capabilities
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
        <ArrowDown size={24} className="stroke-[1.5px]" />
        <span className="font-light text-base">Scroll for more</span>
      </div>
    </section>
  );
}

