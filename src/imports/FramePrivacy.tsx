"use client";
import React from "react";
import { LegalTemplate } from "@/components/sections/LegalTemplate";

export default function FramePrivacy() {
  const sections = [
    {
      title: "Information we collect",
      content: "We may collect personal information such as name, email, and company when you use our contact form or request an NDA. We also collect usage data via cookies."
    },
    {
      title: "How we use information",
      content: "Collected information is used primarily to respond to inquiries, facilitate scientific discussions, and improve our website experience."
    },
    {
      title: "Cookies and analytics",
      content: "We use essential and analytical cookies to understand how visitors interact with our content. You can manage cookie preferences in your browser settings."
    },
    {
      title: "Sharing",
      content: "Kevda Bioworks does not sell your personal data. We only share information with partners or service providers necessary to fulfill your requests."
    },
    {
      title: "Retention",
      content: "We retain personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law."
    },
    {
      title: "Security",
      content: "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "Your choices",
      content: "You have the right to access, correct, or delete your personal information. Please contact us to exercise these rights."
    },
    {
      title: "Contact",
      content: "For privacy-related inquiries, please email us at info@kevdabioworks.com."
    }
  ];

  return (
    <LegalTemplate 
      title="Privacy Policy" 
      subtitle="This page describes how Kevda Bioworks collects, uses, and protects information when you interact with our website" 
      sections={sections} 
    />
  );
}
