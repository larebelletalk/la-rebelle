import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl tracking-[0.2em] mb-12">
          THE HOUSE
        </h1>

        <p className="text-neutral-300 leading-9 text-lg">
          La Rebelle is a contemporary fashion house inspired by timeless
          silhouettes, premium craftsmanship and effortless elegance.
        </p>

        <p className="mt-8 text-neutral-400 leading-9">
          Every collection is designed to balance confidence, comfort and
          individuality. We believe luxury is not about excess, but about
          quality, attention to detail and pieces that remain relevant beyond
          trends.
        </p>

      </section>

    </main>
  );
}