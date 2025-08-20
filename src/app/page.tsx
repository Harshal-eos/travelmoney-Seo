import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Features from "./Features";

export default function Home() {
  return (
    <>

    <Navbar/>


      <main className="overflow-hidden">
        <Hero />
        <Features />
      </main>
    </>
  );
}
