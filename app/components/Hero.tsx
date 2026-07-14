export default function Hero() {
  return (
    <section className="relative h-screen bg-black text-white flex items-center justify-center">

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-6">

        <p className="tracking-[0.6em] uppercase text-sm text-neutral-400">
          LA REBELLE
        </p>

        <h1 className="mt-6 text-6xl md:text-8xl font-light tracking-[0.18em]">
          Timeless
        </h1>

        <p className="mt-8 max-w-xl mx-auto text-neutral-300 leading-8">
          Luxury womenswear and carefully selected unisex essentials,
          designed beyond trends.
        </p>

        <a
  href="/collection"
  className="inline-block mt-12 border border-white px-10 py-4 uppercase tracking-[0.3em]
  hover:bg-white hover:text-black transition-all duration-500"
>
  Explore Collection
</a>

      </div>

    </section>
  );
}