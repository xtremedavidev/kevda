"use client";
import React from "react";
import { motion } from "motion/react";

export function Capabilities3() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10">
       <div className="w-full max-w-[1600px] flex flex-col">
          <div className="mb-8 md:mb-16 w-full text-left">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black break-words">Capabilities</h2>
          </div>
          
          <div className="flex flex-col gap-6 w-full">
             <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-1 bg-[#eef2f2] rounded-[40px] p-8 md:p-12 flex items-center justify-center text-center">
                   <h3 className="text-2xl sm:text-[28px] font-medium text-[#242424] leading-tight">Precision cloning (Gibson, Golden Gate, traditional assembly)</h3>
                </div>
                <div className="flex-1 bg-[#f5efe4] rounded-[40px] p-8 md:p-12 flex items-center justify-center text-center">
                   <h3 className="text-2xl sm:text-[28px] font-medium text-[#242424] leading-tight">Scalable plasmid workflows and microbial expansion</h3>
                </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="flex-1 bg-[#f5efe4] rounded-[40px] p-8 md:p-12 flex items-center justify-center text-center">
                   <h3 className="text-2xl sm:text-[28px] font-medium text-[#242424] leading-tight">Sequence verification and restriction mapping</h3>
                </div>
                <div className="flex-1 bg-[#eef2f2] rounded-[40px] p-8 md:p-12 flex items-center justify-center text-center">
                   <h3 className="text-2xl sm:text-[28px] font-medium text-[#242424] leading-tight">qPCR-based primer validation</h3>
                </div>
             </div>
          </div>
       </div>
    </motion.section>
  );
}

