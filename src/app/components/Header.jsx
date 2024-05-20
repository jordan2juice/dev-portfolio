"use client";

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="bg-white text-black p-2 flex justify-between items-center">
        <h1 className="mt-1 text-3xl font-bold text-cyan-700">
          Jordan Toujouse
        </h1>
        <nav
          className="flex
        justify-between items-center gap-3"
        >
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
