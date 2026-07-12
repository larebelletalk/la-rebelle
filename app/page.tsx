import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import House from "./components/House";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Intro />
      <Hero />
      <Collection />
      <House />
      <Contact />
    </>
  );
}