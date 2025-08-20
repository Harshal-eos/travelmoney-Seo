import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Features from "./Features";
import Footer from "./components/layout/Footer";
import EmailCapture from "./components/sections/EmailCapture";

export default function Home() {
  return (
    <>

    <Navbar/>


      <main className="overflow-hidden">
        <Hero />
        <Features />
        <EmailCapture/>
      </main>

      <Footer/>
    </>
  );
}
