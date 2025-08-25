// app/page.tsx
import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Features from "./Features";
import Footer from "./components/layout/Footer";
import EmailCapture from "./components/sections/EmailCapture";
import BlogPreview from "./components/sections/BlogPreview";
import AuthWrapper from "./components/auth/AuthWrapper";

export default function Home() {
  return (
    <AuthWrapper>
      <Navbar/>
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <EmailCapture/>
        <BlogPreview/>
      </main>
      <Footer/>
    </AuthWrapper>
  );
}