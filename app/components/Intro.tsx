"use client";

export default function Intro() {
  return (
    <section className="flex h-screen items-center justify-center bg-[#0a0a0a] px-6">

      <div className="text-center">

        <h1
          className="
            text-white
            text-4xl
            sm:text-6xl
            md:text-8xl
            font-extralight
            tracking-[0.18em]
            md:tracking-[0.45em]
            leading-none
          "
        >
          LA REBELLE
        </h1>

        <p
          className="
            mt-6
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[0.35em]
            md:tracking-[0.8em]
            text-neutral-500
          "
        >
          Maison de Couture
        </p>

      </div>

    </section>
  );
}