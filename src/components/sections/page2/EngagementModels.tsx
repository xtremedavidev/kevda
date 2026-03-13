"use client";
import React from "react";
import { FileText, TrendingUp, Users } from "lucide-react";

export function EngagementModels() {
  const models = [
    { title: "Defined scope", desc: "Milestone-aligned delivery.", icon: FileText },
    { title: "Pilot → scale", desc: "Validate, then expand capacity.", icon: TrendingUp },
    { title: "Ongoing bandwidth", desc: "Retained execution support.", icon: Users }
  ];

  return (
    <section id="p2-engagement" className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10">
       <div className="w-full max-w-[1600px] flex flex-col">
          <div className="mb-12 md:mb-20 w-full text-left">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black break-words">Engagement Models</h2>
          </div>
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-4 items-center justify-center w-full max-w-7xl mx-auto">
              {models.map((model, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center flex-1 max-w-[320px]">
                     <div className="bg-[#f7f7f7] rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 w-full relative group">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-sm">
                           <model.icon size={40} strokeWidth={1.5} className="text-[#084d43]" />
                        </div>
                        <div className="bg-white/80 px-4 py-2 rounded-lg text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                          {model.title}
                        </div>
                        <p className="text-center text-[#242424] font-normal mt-2 h-12 flex items-center">{model.desc}</p>
                     </div>
                  </div>
                  
                  {/* connector */}
                  {i < models.length - 1 && (
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
