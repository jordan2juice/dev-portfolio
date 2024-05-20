"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div id="about me" className="bg-slate-200 container flex flex-wrap">
      <h2
        style={{ textAlign: "justify" }}
        className="text-2xl font-bold text-cyan-700 mb-2 p-4"
      >
        About Me
      </h2>
      <section className="flex p-4">
        <p style={{ textAlign: "justify" }} className=" w- p-4 mr-1 text-black">
          I am a professional and enthusiastic programmer in my daily life. I am
          a quick learner with a self-learning attitude. I love to learn and
          explore new technologies and am passionate about problem-solving. I
          love almost all the stacks of web application development and love to
          make the web more open to the world. My core skill is based on
          JavaScript and I love to do most of the things using JavaScript. I am
          available for any kind of job opportunity that suits my skills and
          interests.
        </p>
        <motion.img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/profile-pic (1).png"
          className=" w-60 rounded-md m-3 border-4  border-cyan-500"
        />
      </section>
    </div>
  );
}
