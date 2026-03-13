"use client";
import React from "react";
import { Hero2 } from "@/components/sections/page2/Hero2";
import { Pillars2 } from "@/components/sections/page2/Pillars2";
import { EngagementModels } from "@/components/sections/page2/EngagementModels";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SideNavItem } from "@/components/sections/SideNav";

const sideNavItems: SideNavItem[] = [
  { label: "Intro", sectionId: "p2-hero" },
  { label: "Pillars", sectionId: "p2-pillars" },
  { label: "Engagement", sectionId: "p2-engagement" },
  { label: "Contact", sectionId: "p2-contact" },
];

export default function Page2() {
  return (
    <PageWrapper sideNavItems={sideNavItems}>
      <div id="p2-hero"><Hero2 /></div>
      <div id="p2-pillars"><Pillars2 /></div>
      <div id="p2-engagement"><EngagementModels /></div>
      <div id="p2-contact">
        <UnifiedCTA 
          secondaryButtonText="Request a Scope Proposal" 
          secondaryButtonHref="/contact"
        />
      </div>
    </PageWrapper>
  );
}
