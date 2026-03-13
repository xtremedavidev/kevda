"use client";
import React from "react";
import Image from "next/image";

export function HowWeWork() {
  const steps = [
    { title: "Align", desc: "Define scope, controls, and timeline.", img: "/assets/ae1f46d83ab06c33177cd41a806d672ba77aaa62.png" },
    { title: "Execute", desc: "Controlled workflows with checkpoints.", img: "/assets/61d5db715286933f02c2930031fc2eb2371cb47a.png" },
    { title: "Deliver", desc: "Verified data, protocols, and constructs.", img: "/assets/8a5c2d67097e8722b9bd1b000d2126f3ee98fef7.png" }
  ];

  return (
    <section className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16">
       <div className="w-full max-w-[1600px]">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">How We Work</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-4 items-center justify-center w-full max-w-7xl">
             {steps.map((step, i) => (
               <React.Fragment key={i}>
                 <div className="flex flex-col items-center flex-1 max-w-[280px]">
                    <div className="bg-[#f7f7f7] rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 w-full relative group">
                       <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full transform group-hover:scale-110 transition-transform">
                         <Image src={step.img} alt={step.title} fill className="object-cover scale-[2] md:scale-[3]" />
                       </div>
                       <div className="bg-white/80 px-8 py-2 rounded-lg text-2xl md:text-3xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                         {step.title}
                       </div>
                       <p className="text-center text-[#242424] font-normal mt-2 h-12 flex items-center">{step.desc}</p>
                    </div>
                 </div>
                 
                 {/* connector */}
                 {i < steps.length - 1 && (
                    <div className="hidden md:flex flex-col items-center">
                       <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                       <div className="w-16 lg:w-24 border-t border-dashed border-gray-400 mx-2"></div>
                       <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                    </div>
                 )}
               </React.Fragment>
             ))}
          </div>
       </div>
    </section>
  );
}

