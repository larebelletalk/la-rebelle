export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-8">

        <h1 className="text-white tracking-[0.35em] text-sm">
          LA REBELLE
        </h1>

        <nav className="flex gap-10 text-xs tracking-[0.25em] text-neutral-400 uppercase">

          <a
            href="#collection"
            className="hover:text-white transition"
          >
            Collection
          </a>

          <a
            href="#house"
            className="hover:text-white transition"
          >
            The House
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}