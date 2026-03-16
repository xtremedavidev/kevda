import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
export function Hero() {
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
        className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4 mt-24 md:mt-0 order-1"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-[28px] sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black wrap-break-word"
        >
          Integrated mRNA Development.<br/>
          Built for Preclinical Execution.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl font-normal text-black w-full max-w-2xl"
        >
          Kevda Bioworks is a premium wet-lab CRO supporting biotech and biopharma teams across molecular biology, cell-based assays, protein characterization, and mRNA/LNP delivery.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl font-normal text-black w-full max-w-2xl whitespace-pre-wrap"
        >
          {`Boston, MA     |     Bangalore, India`}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
        >
          <button className="bg-[#d3b582] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
            Start a Confidential Discussion
          </button>
          <button className="bg-[#084d43] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
            Explore Capabilities
          </button>
        </motion.div>
      </motion.div>

      {/* Background Graphic */}
      <div className="relative md:absolute md:inset-0 pointer-events-none opacity-80 overflow-hidden w-full h-[400px] md:h-full order-2 md:order-0 mt-12 md:mt-0">
        <Suspense fallback={<div className="w-full h-full bg-white" />}>
          <Spline 
            scene="/spline/home.splinecode" 
            className="w-full h-full object-cover md:pl-160 md:scale-130"
          />
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
        <ArrowDown size={24} className="stroke-[1.5px]" />
        <span className="font-light text-base">Scroll for more</span>
      </div>
    </motion.section>
  );
}

