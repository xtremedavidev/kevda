"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalTemplateProps {
  title: string;
  subtitle: string;
  sections: LegalSection[];
}

import { PageWrapper } from "@/components/layout/PageWrapper";

export const LegalTemplate: React.FC<LegalTemplateProps> = ({ title, subtitle, sections }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <PageWrapper>
      <div className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16 flex flex-col items-center">
        {/* ... existing content ... */}
        <div className="w-full max-w-[1200px] mb-12">
          <h1 className="text-4xl md:text-6xl font-medium text-black mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="w-full max-w-[1200px] bg-[#f7f7f7] rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">
          {/* Tan Header */}
          <div className="bg-[#d3b582] px-8 md:px-12 py-6">
            <h2 className="text-2xl font-medium text-black">Sections</h2>
          </div>

          {/* Accordion List */}
          <div className="p-4 md:p-8 flex flex-col gap-3">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[20px] overflow-hidden border border-gray-50/50"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left group hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl font-medium text-[#333] group-hover:text-black transition-colors">
                    {section.title}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 text-lg text-[#555] leading-relaxed font-normal">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
