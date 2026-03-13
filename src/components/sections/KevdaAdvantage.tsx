"use client";
import React from "react";
import Image from "next/image";

export function KevdaAdvantage() {
  const cards = [
    {
      title: "Scientific standards",
      desc: "Shaped by leading research and platform biotech environments.",
      bg: "bg-[#fce4c1]",
      img: "/assets/8a5c2d67097e8722b9bd1b000d2126f3ee98fef7.png",
    },
    {
      title: "Strategic efficiency",
      desc: "Extend R&D runway without compromising data integrity.",
      bg: "bg-[#d4c29c]",
      img: "/assets/2737fabcc17e337f5b3ff5f84e620a94b1d54fcf.png",
    },
    {
      title: "QC-forward reporting",
      desc: "Structured outputs built for internal and investor review.",
      bg: "bg-[rgba(224,203,167,0.93)]",
      img: "/assets/2737fabcc17e337f5b3ff5f84e620a94b1d54fcf.png",
    },
    {
      title: "End-to-end logistics",
      desc: "Procurement through reporting managed seamlessly.",
      bg: "bg-[rgba(224,203,167,0.93)]",
      img: "/assets/2737fabcc17e337f5b3ff5f84e620a94b1d54fcf.png",
    },
  ];

  return (
    <section className="bg-white w-full py-16 md:py-20 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10">
      <div className="w-full max-w-[1600px]">
        {/* Dark wrapper */}
        <div className="bg-[#084d43] rounded-[24px] py-6 md:py-8 px-4 sm:px-8 md:px-14 flex flex-col items-start w-full relative overflow-hidden">
          {/* Title */}
          <div className="flex items-center justify-between w-full mb-4 md:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-white leading-tight">
              The Kevda Advantage
            </h2>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-xl p-5 md:p-6 flex flex-col gap-3 items-start group hover:scale-[1.01] transition-transform`}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover scale-[3]"
                  />
                </div>
                <div className="flex flex-col gap-3 leading-normal">
                  <h3 className="font-medium text-xl md:text-2xl text-black">
                    {card.title}
                  </h3>
                  <p className="font-normal text-lg md:text-xl text-black/70">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button bottom right */}
          <div className="flex justify-end w-full mt-8 md:mt-16">
            <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap backdrop-blur-md transition-transform hover:scale-105">
              Start a Confidential Discussion
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

