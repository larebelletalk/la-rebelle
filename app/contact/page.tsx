import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      <Navbar />

      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">

        <h1 className="text-5xl tracking-[0.2em] mb-12">
          CONTACT
        </h1>

        <div className="space-y-10">

          <div>
            <h2 className="text-xl mb-2">WhatsApp</h2>

            <a
              href="https://wa.me/212722110867"
              className="text-neutral-400 hover:text-white"
            >
              +212 722 110 867
            </a>
          </div>

          <div>
            <h2 className="text-xl mb-2">Instagram</h2>

            <a
              href="https://www.instagram.com/la.rebelle.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              @la.rebelle.ma
            </a>
          </div>

          <div>
            <h2 className="text-xl mb-2">TikTok</h2>

            <a
              href="https://www.tiktok.com/@la.rebelle.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              @la.rebelle.ma
            </a>
          </div>

        </div>

      </section>

    </main>
  );
}