import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Features from "./Features";
import Footer from "./components/layout/Footer";
import EmailCapture from "./components/sections/EmailCapture";
import BlogPreview from "./components/sections/BlogPreview";

export default function Home() {
  return (
    <>

    <Navbar/>


      <main className="overflow-hidden">
        <Hero />
        <Features />
        <EmailCapture/>
        <BlogPreview/>
        
      </main>

      <Footer/>
    </>
  );
}
