"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ChatBalloon from "@/components/ChatBalloon";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="bg-mesh" />
      <div className="bg-grid" />

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <CtaBanner />
      <Footer />
      <ChatBalloon />
    </LanguageProvider>
  );
}
