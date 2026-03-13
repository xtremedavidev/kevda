"use client";
import React, { useState, useEffect } from "react";

export interface SideNavItem {
  /** Display label in the sidebar */
  label: string;
  /** The id of the section element to scroll to / observe */
  sectionId: string;
}

interface SideNavProps {
  items: SideNavItem[];
}

export function SideNav({ items }: SideNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold defines how far from the top a section must be to be "active"
      // Using 150px to account for header height + some buffer
      const threshold = 150;
      
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        const element = document.getElementById(item.sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= threshold) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const indicatorTop = activeIndex * 40;

  return (
    <nav className="flex gap-4 items-start pointer-events-auto" aria-label="Page sections">
      <div className="relative w-2 flex flex-col items-center" style={{ height: `${items.length * 40 - 12}px` }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-black/10 rounded-full h-full" />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full bg-[#d3b582] transition-all duration-300 ease-out"
          style={{ top: `${indicatorTop + 10}px` }}
        />
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <button
            key={item.sectionId}
            onClick={(e) => handleClick(e, item.sectionId)}
            className={`text-left text-sm font-medium transition-all duration-300 cursor-pointer block py-1 ${
              i === activeIndex 
                ? "text-black opacity-100 translate-x-1" 
                : "text-black/30 hover:text-black/60 opacity-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

