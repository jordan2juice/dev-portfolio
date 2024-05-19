"use client";

import React from "react";
import Header from "./components/header/page";
import AboutMe from "./components/about-me/page";
import HeroSection from "./components/hero-section/page";
import Experience from "./components/experience/page";
import Skills from "./components/skills/page";

import Footer from "./components/footer/page";
import Education from "./components/education/page";
import Projects from "./components/projects/projects";

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
