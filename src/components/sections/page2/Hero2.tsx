import { motion } from "motion/react";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowDown } from "lucide-react";

export function Hero2() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="relative w-full min-h-screen flex flex-col md:flex-row md:items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full max-w-full flex flex-col gap-4 sm:gap-4 md:gap-8 mt-24 md:mt-0 order-1"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[28px] sm:text-5xl md:text-6xl lg:text-[64px] leading-tight sm:leading-[1.1] font-medium text-black wrap-break-word max-w-full lg:max-w-3xl"
        >
          Execution built for
          <br />
          preclinical pace.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl font-normal text-black w-full max-w-2xl"
        >
          Kevda focuses on execution-heavy wet-lab work so teams can reach
          proof-of-concept milestones without expanding internal overhead.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
        >
          <button className="bg-[#d3b582] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-normal sm:whitespace-nowrap backdrop-blur-md transition-transform hover:scale-105">
            Start a Confidential Discussion
          </button>
          <button className="bg-[#084d43] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-normal sm:whitespace-nowrap backdrop-blur-md transition-transform hover:scale-105">
            Request a Scope Proposal
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex items-center gap-2 bg-[#e3d5b8] w-fit px-3 py-1 rounded-lg"
        >
          <span className="text-xs text-[#6e4515]">
            NDA available upon request.
          </span>
        </motion.div>
      </motion.div>

      {/* Background Graphic */}
      <div className="relative md:absolute md:inset-0 pointer-events-none opacity-80 overflow-hidden w-full h-[400px] md:h-full order-2 md:order-0 mt-12 md:mt-0">
        <Suspense fallback={<div className="w-full h-full bg-white" />}>
          <Spline 
            scene="/spline/capabilities.splinecode" 
            className="w-full h-full object-cover md:pl-100"
          />
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b] z-20">
        <ArrowDown size={24} className="stroke-[1.5px]" />
        <span className="font-light text-base">Scroll for more</span>
      </div>
    </motion.section>
  );
}
