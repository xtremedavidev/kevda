"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function HowWeWork() {
  const steps = [
    { title: "Align", desc: "Define scope, controls, and timeline.", img: "/imgs/index/how we work/align.png" },
    { title: "Execute", desc: "Controlled workflows with checkpoints.", img: "/imgs/index/how we work/execute.png" },
    { title: "Deliver", desc: "Clean, review-ready data packages.", img: "/imgs/index/how we work/deliver.png" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16"
    >
       <div className="w-full">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black text-center md:text-left">How We Work</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-0 max-w-[1400px] mx-auto">
             {steps.map((step, i) => (
               <React.Fragment key={i}>
                 <div className="flex flex-col items-center flex-1 w-full max-w-[320px]">
                    <div className="bg-[#f7f7f7] rounded-3xl p-6 md:p-7 flex flex-col items-center gap-6 w-full relative group hover:shadow-xl transition-all">
                       <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full transform group-hover:scale-105 transition-transform">
                         <Image src={step.img} alt={step.title} fill className="object-cover" />
                       </div>
                       <div className="bg-white px-8 py-3 rounded-xl text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                         {step.title}
                       </div>
                       <p className="text-center text-black/60 font-normal leading-relaxed">{step.desc}</p>
                    </div>
                 </div>
                 
                 {/* Horizontal dashed connector with circles */}
                 {i < steps.length - 1 && (
                   <>
                     <div className="hidden md:flex items-center justify-center grow max-w-[120px]">
                        <div className="relative flex items-center w-full h-16">
                           <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white absolute left-0 z-10" style={{ bottom: i % 2 === 0 ? '0' : 'auto', top: i % 2 === 0 ? 'auto' : '0' }} />
                           <svg className="w-full h-full absolute inset-0 py-1" preserveAspectRatio="none" viewBox="0 0 100 100">
                             {i % 2 === 0 ? (
                               <path d="M 0 100 L 40 100 Q 50 100 50 90 L 50 10 Q 50 0 60 0 L 100 0" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 2" vectorEffect="non-scaling-stroke" />
                             ) : (
                               <path d="M 0 0 L 40 0 Q 50 0 50 10 L 50 90 Q 50 100 60 100 L 100 100" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 2" vectorEffect="non-scaling-stroke" />
                             )}
                           </svg>
                           <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white absolute right-0 z-10" style={{ top: i % 2 === 0 ? '0' : 'auto', bottom: i % 2 === 0 ? 'auto' : '0' }} />
                        </div>
                     </div>
                     <div className="md:hidden flex items-center justify-center py-4 text-slate-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                           <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                     </div>
                   </>
                 )}
               </React.Fragment>
             ))}
          </div>
       </div>
    </motion.section>
  );
}

