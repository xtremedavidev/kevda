"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function Pillars2() {
  const cards = [
    {
      title: "Molecular Biology & Vector Engineering",
      desc: "Precision cloning and validated constructs built for downstream success.",
      img: "/imgs/index/pilars/molecular.png",
      href: "/capabilities/molecular-biology"
    },
    {
      title: "Cell Engineering & Functional Analysis",
      desc: "Structured transfection, knockdown, and IC50 workflows designed for decisions.",
      img: "/imgs/index/pilars/cell.png",
      href: "/capabilities/cell-engineering"
    },
    {
      title: "Protein Characterization & Immunoassays",
      desc: "Quantitative and visual confirmation of target biology.",
      img: "/imgs/index/pilars/protein.png",
      href: "/capabilities/protein-characterization"
    },
    {
      title: "Specialized RNA & Advanced Delivery",
      desc: "IVT mRNA (1–100 mg), microfluidic LNP formulation, and analytical profiling.",
      img: "/imgs/index/pilars/specialized.png",
      href: "/capabilities/rna-delivery"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10"
    >
       <div className="w-full max-w-[1600px] min-h-[600px] flex flex-col">
          <div className="mb-8 md:mb-16 w-full text-left">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black break-words">Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
             {cards.map((card, i) => (
                <Link href={card.href} key={i}>
                  <div className="flex flex-col h-full bg-[#f6f6f6] rounded-[24px] p-4 group cursor-pointer hover:shadow-lg transition-all duration-300">
                     <div className="w-full h-[200px] sm:h-[280px] rounded-[16px] overflow-hidden relative">
                        <Image src={card.img} alt={card.title} fill className="object-contain transform group-hover:scale-105 transition-transform" />
                     </div>
                     <div className="bg-white/90 backdrop-blur-md rounded-[24px] mt-4 p-6 sm:p-8 flex flex-col gap-4 shadow-sm border border-gray-100 flex-1 justify-center">
                        <div className="bg-[#d3b582] w-full sm:w-auto whitespace-normal sm:whitespace-nowrap rounded-full py-3 px-6 w-full flex justify-center text-center">
                           <h3 className="text-lg sm:text-xl font-normal text-black break-words">{card.title}</h3>
                        </div>
                        <p className="text-center font-normal text-base sm:text-lg text-black">{card.desc}</p>
                     </div>
                  </div>
                </Link>
             ))}
          </div>
       </div>
    </motion.section>
  );
}
