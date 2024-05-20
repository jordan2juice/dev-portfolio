"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
        setShowText(true);
      } else {
        setShowButton(false);
        setShowText(false);
      }
    };
  });

  return (
    <div className="container bg-white p-14 " id="hero-section">
      <div>
        <div>
          <div className="flex flex-wrap justify-between">
            <div>
              <h1 className="text-5xl font-bold text-cyan-700 mb-2">
                Hello my name is
              </h1>
              <h1 className="text-5xl font-bold text-cyan-700">
                Jordan Toujouse
              </h1>
              <h2 className="text-2xl font-bold text-cyan-500">I am a</h2>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Front End Developer",
                  1000,
                  "Back End Developer",
                  1000,
                  "Professional Coder",
                  1000,
                  "Professional Programmer",
                  1000,
                ]}
                wrapper="span"
                className="text-5xl font-bold text-cyan-700"
                id="typewriter"
                repeat={Infinity}
              />
              <div className="flex p-6 gap-4"></div>
              <button>
                <a
                  href="https://github.com/jordan2juice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/github.png"
                    alt="github"
                  />
                </a>
              </button>
              <button>
                <a
                  href="https://www.linkedin.com/in/jordan-toujouse-13609947/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/linkedin.png"
                    alt="linkedin"
                  />
                </a>
              </button>
              <div className="flex gap-4">
                <Link href={"./contact"}>
                  <AwesomeButton type="primary">Contact Me</AwesomeButton>
                </Link>
                <a href="https://drive.google.com/file/d/1b5RYJPmvXUqU67URqRAaii-x3L5XKGQ_/view?usp=drive_link">
                  <AwesomeButton type="primary">Resume</AwesomeButton>
                </a>
              </div>
            </div>
            <div>
              <img src="/avatar.jpg" className=" h-96 shadow-lg rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
