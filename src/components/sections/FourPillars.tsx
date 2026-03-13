"use client";
import React from "react";
import Image from "next/image";

export function FourPillars() {
  const pillars = [
    {
      title: "Molecular Biology & Vector Engineering",
      img: "/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png",
      opacity: "opacity-100",
    },
    {
      title: "Cell Engineering & Functional Assays",
      img: "/assets/61d5db715286933f02c2930031fc2eb2371cb47a.png",
      opacity: "opacity-45 md:opacity-[0.85]",
    },
    {
      title: "Protein Characterization & Immunoanalytics",
      img: "/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png",
      desc: "Quantitative and visual confirmation of target biology",
      opacity: "opacity-45 md:opacity-75",
    },
    {
      title: "Advanced RNA & LNP Systems",
      img: "/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png",
      opacity: "opacity-45 md:opacity-60",
    }
  ];

  return (
    <section className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16 relative">
      <div className="w-full max-w-[1600px] min-h-[600px] flex flex-col relative">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">Four pillars. One execution system.</h2>
        </div>

        {/* Floating pill desktop */}
        <div className="hidden lg:flex absolute top-5 right-0 bg-[#f0f0f0] bg-opacity-90 rounded-xl px-12 py-3 items-center gap-12 z-20 shadow-sm">
           <span className="text-black/80 font-normal">03</span>
           <div className="flex items-center gap-3">
             <span className="font-normal text-black text-base">Visit</span>
           </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full overflow-x-auto pb-8 snap-x mt-8">
          {pillars.map((p, i) => (
             <div key={i} className={`flex-shrink-0 w-[280px] sm:w-[300px] bg-[#ebebeb] rounded-2xl flex flex-col overflow-hidden snap-center ${p.opacity} transition-opacity cursor-pointer hover:opacity-100`}>
                <div className="h-[220px] sm:h-[260px] w-full relative flex items-center justify-center overflow-hidden">
                   <Image src={p.img} alt={p.title} fill className="object-cover scale-150" />
                </div>
                <div className="p-5 flex flex-col h-full bg-white/40 backdrop-blur-sm">
                   <h3 className="font-medium text-lg leading-tight text-[#242424]">{p.title}</h3>
                   {p.desc && <p className="text-sm text-[#3c3c3c] mt-2 font-normal leading-relaxed">{p.desc}</p>}
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

