"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="flex items-center justify-between px-6 md:px-10 py-6">

        <h1 className="text-white tracking-[0.3em] text-sm md:text-base">
          LA REBELLE
        </h1>

        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase text-neutral-400">

          <a href="#collection">Collection</a>

          <a href="#house">The House</a>

          <a href="#contact">Contact</a>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-black/95 backdrop-blur-sm">

          <nav className="flex flex-col items-center gap-8 py-10 uppercase tracking-[0.25em] text-sm text-white">

            <a href="#collection" onClick={() => setOpen(false)}>
              Collection
            </a>

            <a href="#house" onClick={() => setOpen(false)}>
              The House
            </a>

            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>

          </nav>

        </div>

      )}

    </header>
  );
}