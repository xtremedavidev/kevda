"use client";
import React from "react";
import { SideNav, SideNavItem } from "@/components/sections/SideNav";

interface PageWrapperProps {
  sideNavItems?: SideNavItem[];
  children: React.ReactNode;
}

export function PageWrapper({ sideNavItems, children }: PageWrapperProps) {
  return (
    <div className="relative flex flex-col lg:flex-row w-full min-h-screen">
      {sideNavItems && sideNavItems.length > 0 && (
        <div className="hidden lg:block lg:w-[180px] relative z-20">
          <div className="sticky top-[200px] h-fit overflow-visible pl-8 xl:pl-16">
             <SideNav items={sideNavItems} />
          </div>
        </div>
      )}
      <div className="flex-1 min-w-0 relative z-10">
        {children}
      </div>
    </div>
  );
}
