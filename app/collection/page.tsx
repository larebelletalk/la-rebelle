import Navbar from "../components/Navbar";
import Collection from "../components/Collection";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="pt-32">
        <Collection />
      </div>
    </main>
  );
}