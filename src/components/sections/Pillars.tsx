"use client";
import React from "react";
import Image from "next/image";

export function Pillars() {
  return (
    <section className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16">
       <div className="w-full max-w-[1600px]">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">Built for rigor and clarity</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png" alt="Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">Milestone-based scopes</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png" alt="Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">Disciplined workflows</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png" alt="Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">QC and CoA-style documentation (where applicable)</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/assets/f4d9827ecf063e588ba72ced3af7970e4ac887c5.png" alt="Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">Turnkey execution from sequence to data</p>
            </div>
          </div>
       </div>
    </section>
  );
}

