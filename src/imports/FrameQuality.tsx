"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle2, Zap } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameQuality() {
  const sideNavItems = [
    { label: "Intro", sectionId: "quality-hero" },
    { label: "Process", sectionId: "quality-process" },
    { label: "Standards", sectionId: "quality-standards" },
    { label: "Execution", sectionId: "quality-execution" },
    { label: "Contact", sectionId: "quality-contact" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <section id="quality-hero" className="relative w-full min-h-screen flex items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
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
            Quality
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            Disciplined execution, explicit controls, and structured documentation designed to stand up to scientific and investor scrutiny.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Start a Confidential Discussion
            </button>
            <button className="bg-[#084d43] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Request a Quality Overview
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

      {/* Process Section - Align, Execute, Deliver */}
      <section id="quality-process" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">Our Process</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 lg:gap-4 items-center justify-center w-full max-w-7xl mx-auto">
             {[
               { title: "Align", desc: "Define scope, controls, and timeline.", img: "/assets/ae1f46d83ab06c33177cd41a806d672ba77aaa62.png" },
               { title: "Execute", desc: "Controlled workflows with checkpoints.", img: "/assets/61d5db715286933f02c2930031fc2eb2371cb47a.png" },
               { title: "Deliver", desc: "Verified data, protocols, and constructs.", img: "/assets/8a5c2d67097e8722b9bd1b000d2126f3ee98fef7.png" }
             ].map((step, i) => (
               <React.Fragment key={i}>
                 <div className="flex flex-col items-center flex-1 max-w-[320px]">
                    <div className="bg-[#f7f7f7] rounded-2xl p-6 md:p-8 flex flex-col items-center gap-6 w-full relative group shadow-sm border border-gray-50">
                       <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-full transform group-hover:scale-110 transition-transform shadow-md bg-white">
                         <Image src={step.img} alt={step.title} fill className="object-cover scale-[2] md:scale-[3]" />
                       </div>
                       <div className="bg-white/80 px-8 py-2 rounded-lg text-2xl md:text-3xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                         {step.title}
                       </div>
                       <p className="text-center text-[#242424] font-normal mt-2 h-12 flex items-center">{step.desc}</p>
                    </div>
                 </div>
                 
                 {/* connector */}
                 {i < 2 && (
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

      {/* Standards Section */}
      <section id="quality-standards" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col items-center">
           <div className="w-full max-w-md bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="bg-[#084d43] px-10 py-3 text-center">
                 <span className="text-white text-[10px] tracking-[4px] font-bold">REPORTS</span>
              </div>
              <div className="p-10 flex flex-col gap-6">
                 <h3 className="text-2xl font-bold text-black">Briefing</h3>
                 <div className="flex flex-col gap-4">
                    {[
                      "Clear scope and acceptance criteria",
                      "Defined controls",
                      "Structured checkpoints",
                      "Consistent execution discipline",
                      "Reporting built for interpretation and review"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-md bg-[#084d43] flex items-center justify-center shrink-0">
                            <CheckCircle2 size={14} className="text-white" />
                         </div>
                         <span className="text-gray-600 text-sm font-medium">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Execution Section */}
      <section id="quality-execution" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1400px] mx-auto border border-gray-100 rounded-[40px] overflow-hidden bg-white shadow-sm">
           <div className="px-10 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-medium text-gray-800">Outputs/Notes</h2>
              <p className="text-sm text-gray-400">Here&apos;s a preview of what exactly you will receive</p>
           </div>
            <div className="p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
               <div className="flex-1 bg-[#dbe4e4] rounded-[32px] p-8 lg:p-12 relative flex items-center gap-6">
                  <div className="absolute top-4 right-4 text-[#8a9b9b]">
                     <Zap size={20} />
                  </div>
                  <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm w-full">
                     <Zap size={24} className="text-[#a0c5c1]" />
                     <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        Eligible workflows may include CoA-style summaries — residual DNA, endotoxin, and stability — aligned to scope and client requirements
                     </p>
                  </div>
               </div>

               <div className="w-full lg:w-[400px] flex flex-col gap-6">
                  {[
                    { title: "Report Package Outline", tag: "PDF", type: "lines", highlight: true, color: "#FDF8EE" },
                    { title: "Checklist Summary", tag: "PDF", type: "checklist", color: "#ffffff" }
                  ].map((card, i) => (
                    <div key={i} className={`border border-gray-100 rounded-[24px] overflow-hidden bg-[#fafaf6] shadow-sm ${card.highlight ? 'border-t-[2.5px] border-t-[#d4b57c]' : ''}`}>
                       <div className="px-6 py-3 flex items-center justify-between border-b border-gray-100" style={{ backgroundColor: card.color }}>
                          <span className="text-[11px] font-medium text-gray-700 tracking-tight">{card.title}</span>
                          <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">{card.tag}</span>
                       </div>
                       <div className="p-6">
                          {card.type === "lines" ? (
                            <div className="flex flex-col gap-1.5 mt-1">
                               {[...Array(5)].map((_, j) => (
                                 <div 
                                   key={j} 
                                   className={`h-1.5 rounded-full bg-[#E4E4DC] ${j % 2 === 0 ? 'w-full' : 'w-[72%]'}`} 
                                 />
                               ))}
                            </div>
                          ) : (
                            <div className="flex flex-col gap-2 mt-1">
                               {[80, 100, 60].map((w, j) => (
                                 <div key={j} className="flex items-center gap-2">
                                   <div className="w-2.5 h-2.5 border border-[#004D43] rounded-[2px] shrink-0" />
                                   <div className="h-1.5 rounded-full bg-[#E4E4DC] flex-1" style={{ width: `${w}%` }} />
                                 </div>
                               ))}
                            </div>
                          )}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
        </div>
      </section>

      <div id="quality-contact">
         <UnifiedCTA secondaryButtonText="Request a Quality Overview" secondaryButtonHref="/contact" />
      </div>
    </PageWrapper>
  );
}
