"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Footer
        className="bg-gray-800 text-white p-4 flex justify-between items-center"
       >
        <div
          className="flex justify-between items-center text-white"
        >
          <nav
            className="flex justify-between items-center"
            >
            <Link href={"/"}>
              Home
            </Link>
            <Link href={"/about"}>
              About
            </Link>
            <Link href={"/projects"}>
              Projects
            </Link>
            <Link href={"/contact"}>
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <Link href="https://github.com/JordanToujouse">JordanToujouse</Link>
          <Link href="https://github.com/JordanToujouse">Github</Link>
          <Link href="https://www.linkedin.com/in/jordan-toujouse-8b5b11233/">LinkedIn</Link>
        </div>
      </Footer>
    </div>
  );
}
