"use client";
import React from "react";
import { CapabilityTemplate } from "@/components/sections/CapabilityTemplate";
import { Beaker, Layers, Scan, FileText, Send } from "lucide-react";

export default function FrameProtein() {
  const sideNavItems = [
    { label: "Intro", sectionId: "prot-hero" },
    { label: "Capabilities", sectionId: "prot-caps" },
    { label: "Workflow", sectionId: "prot-workflow" },
    { label: "Outputs", sectionId: "prot-outputs" },
    { label: "Contact", sectionId: "prot-contact" },
  ];

  const capabilities = [
    { text: "ELISA and quantitative protein assays" },
    { text: "Western blotting (standard and multiplex)" },
    { text: "Immunofluorescence imaging and microscopy" },
  ];

  const workflowSteps = [
    { title: "Input", icon: FileText },
    { title: "Assay", icon: Beaker },
    { title: "Imaging", icon: Scan },
    { title: "Analysis", icon: Layers },
    { title: "Reporting", icon: Send },
  ];

  const outputPoints = [
    "Raw and normalized quantitative readouts",
    "Image panels with annotations where applicable",
    "Structured summary reporting tied to defined controls",
  ];

  const outputCards = [
    { title: "Quantitative Summary Table" as const, color: "#ffffff" as const, type: "table" as const, tag: "XLS" as const },
    { title: "Blot Panel" as const, color: "#FDF8EE" as const, type: "blot" as const, tag: "IMG" as const, highlight: true as const },
    { title: "IF Image Panel" as const, color: "#ffffff" as const, type: "image" as const, tag: "IMG" as const },
  ];

  return (
    <CapabilityTemplate
      title="Protein Characterization & Immunoassays"
      subtitle="Quantitative and visual confirmation of target biology — executed with clean controls, normalized reporting, and interpretable outputs."
      heroImage="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png"
      capabilities={capabilities}
      workflowSteps={workflowSteps}
      outputPoints={outputPoints}
      outputCards={outputCards}
      sideNavItems={sideNavItems}
    />
  );
}
