"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md">

      <div className="flex items-center justify-between px-6 md:px-10 py-6">

        <Link
          href="/"
          className="text-white tracking-[0.3em] text-sm md:text-base"
        >
          LA REBELLE
        </Link>

        {/* Desktop */}

        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.25em] text-neutral-400">

          <Link href="/collection">
            Collection
          </Link>

          <Link href="/about">
            The House
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {open && (

        <div className="md:hidden bg-[#0A0A0A] border-t border-neutral-800">

          <nav className="flex flex-col items-center gap-8 py-10 uppercase tracking-[0.25em] text-sm text-white">

            <Link
              href="/collection"
              onClick={() => setOpen(false)}
            >
              Collection
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
            >
              The House
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}