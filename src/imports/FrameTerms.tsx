"use client";
import React from "react";
import { LegalTemplate } from "@/components/sections/LegalTemplate";

export default function FrameTerms() {
  const sections = [
    {
      title: "Acceptance",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Permitted use",
      content: "The services and content on this website are for research use only unless otherwise specified. Commercial use without prior authorization is prohibited."
    },
    {
      title: "Intellectual property",
      content: "All content, including sequences, data, and methodology visualizations, are the intellectual property of Kevda Bioworks LLC unless otherwise noted."
    },
    {
      title: "Disclaimers",
      content: "Kevda Bioworks provides this site on an 'as is' basis. We do not warrant that the site will be error-free or that the information provided is suitable for clinical use."
    },
    {
      title: "Limitation of liability",
      content: "In no event shall Kevda Bioworks be liable for any damages arising out of the use or inability to use the materials on this website."
    },
    {
      title: "Third-party links",
      content: "Our website may contain links to external sites. We are not responsible for the content or privacy practices of these third-party websites."
    },
    {
      title: "Governing law",
      content: "These terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles."
    },
    {
      title: "Contact",
      content: "If you have any questions about these Terms of Use, please contact us at info@kevdabioworks.com."
    }
  ];

  return (
    <LegalTemplate 
      title="Terms of Use" 
      subtitle="These terms govern use of the Kevda Bioworks website" 
      sections={sections} 
    />
  );
}
