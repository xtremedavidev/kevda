"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function Workflow3() {
  const steps = [
    { title: "Design", icon: "/assets/244b7157c24330440e2f4fa549d56d4c17a53083.png" },
    { title: "Assembly", icon: "/assets/244b7157c24330440e2f4fa549d56d4c17a53083.png" },
    { title: "Expansion", icon: "/assets/ae1f46d83ab06c33177cd41a806d672ba77aaa62.png" },
    { title: "Validation", icon: "/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png" },
    { title: "Handoff", icon: "/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png" }
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-16 px-6 md:px-10 lg:px-16 relative z-10 overflow-hidden">
       <div className="w-full max-w-[1600px] flex flex-col md:flex-row items-center justify-start gap-4 lg:gap-8">
          {steps.map((step, i) => (
             <React.Fragment key={step.title}>
                <div className="bg-[#f7f7f7] rounded-[16px] p-6 lg:p-8 flex flex-col items-center gap-4 w-full sm:w-[180px] max-w-[220px] shrink-0">
                   <div className="relative w-20 h-20 overflow-hidden">
                      <Image src={step.icon} alt={step.title} fill className="object-cover scale-150" />
                   </div>
                   <span className="text-xl lg:text-2xl font-medium text-black">{step.title}</span>
                </div>
                {i < steps.length - 1 && (
                   <div className="hidden lg:flex items-center gap-2 opacity-30 px-2 shrink-0">
                      <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                      <div className="w-12 border-t border-dashed border-gray-400"></div>
                      <div className="w-2 h-2 rounded-full border border-gray-400"></div>
                   </div>
                )}
             </React.Fragment>
          ))}
       </div>
    </motion.section>
  );
}

