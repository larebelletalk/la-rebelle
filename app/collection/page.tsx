import Link from "next/link";
import Navbar from "../components/Navbar";
import Collection from "../components/Collection";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 px-6">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition mb-10"
        >
          ← Back to Home
        </Link>

        <Collection />

      </div>

    </main>
  );
}