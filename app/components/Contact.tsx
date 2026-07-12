export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-32 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl tracking-[0.25em] mb-10">
          CONTACT
        </h2>

        <div className="space-y-6 text-lg">

          <a
            href="https://www.instagram.com/la.rebelle.ma?igsh=MTV4dG11NTBhZ2ZoOQ=="
            target="_blank"
            className="block hover:text-neutral-400 transition"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@la.rebelle.ma?_r=1&_t=ZS-97xh5baDvDI"
            target="_blank"
            className="block hover:text-neutral-400 transition"
          >
            TikTok
          </a>

          <a
            href="https://wa.me/212722110867"
            target="_blank"
            className="block hover:text-neutral-400 transition"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}