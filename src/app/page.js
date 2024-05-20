"use client";

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero-Section";
import AboutMe from "./components/About-Me";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
