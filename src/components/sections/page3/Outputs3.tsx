"use client";
import React from "react";
import { Zap } from "lucide-react";

export function Outputs3() {
  const points = [
    "Verified constructs with documentation",
    "QC checkpoints aligned to scope",
    "Clean reporting designed for handoff"
  ];

  return (
    <section className="bg-white w-full py-16 md:py-32 px-6 md:px-10 lg:px-16 relative z-10 flex flex-col items-start">
       <div className="w-full max-w-[1600px] border-t border-[#ddd] pt-12 flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="flex flex-col gap-4 w-full lg:w-1/3 text-left">
             <h2 className="text-2xl md:text-3xl font-medium text-[#666]">Outputs/Notes</h2>
             <p className="text-base text-[#7c7b82]">Here's a preview of what exactly you will receive</p>
          </div>
          
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
             {points.map((pt, i) => (
               <div key={i} className="flex items-center gap-4 bg-white/50 p-2 rounded-xl">
                  <div className="bg-[#def9f5] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                     <Zap className="text-[#084d43] fill-[#084d43]/20" size={24} />
                  </div>
                  <span className="text-[#555] text-lg font-normal leading-tight">{pt}</span>
               </div>
             ))}
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-1/3">
             {/* Fake Table Cards */}
             <div className="bg-[#f6f6f6] rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-[rgba(8,77,67,0.26)] px-4 py-3 border-b border-white/20 flex justify-between items-center">
                   <h4 className="font-medium text-[#333]">Construct Summary</h4>
                </div>
                <div className="p-4 flex flex-col gap-2">
                   <div className="h-2 bg-[#d9d9d9] rounded-full w-full"></div>
                   <div className="h-2 bg-[#d9d9d9] rounded-full w-4/5"></div>
                   <div className="h-2 bg-[#d9d9d9] rounded-full w-full"></div>
                </div>
             </div>

             <div className="bg-[#f6f6f6] rounded-xl overflow-hidden border border-gray-100 flex flex-col">
                <div className="bg-[rgba(211,181,130,0.46)] px-4 py-3 border-b border-white/20 flex justify-between items-center">
                   <h4 className="font-medium text-[#333]">Validation Table</h4>
                </div>
                <div className="p-4 flex flex-col gap-2">
                   <div className="h-2 bg-[#d9d9d9] rounded-full w-full"></div>
                   <div className="h-2 bg-[#d9d9d9] rounded-full w-[85%]"></div>
                   <div className="h-2 bg-[#d9d9d9] rounded-full w-[60%]"></div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

