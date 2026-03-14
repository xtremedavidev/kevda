import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import "../styles/index.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kevda Bioworks | Integrated mRNA Development",
  description:
    "Kevda Bioworks is a premium wet-lab CRO supporting biotech and biopharma teams across molecular biology, cell-based assays, protein characterization, and mRNA/LNP delivery.",
};

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased font-space-grotesk`} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
