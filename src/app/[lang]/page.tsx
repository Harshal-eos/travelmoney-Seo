// app/[lang]/page.tsx
import Hero from "../components/sections/Hero";
import Navbar from "../components/layout/Navbar";
import Features from "../Features";
import Footer from "../components/layout/Footer";
import EmailCapture from "../components/sections/EmailCapture";
import BlogPreview from "../components/sections/BlogPreview";
import AuthWrapper from "../components/auth/AuthWrapper";
import { use } from "react";

export default function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);

  return (
    <AuthWrapper>
      <Navbar lang={lang} />
      <main className="overflow-hidden">
        <Hero lang={lang} />
        <Features lang={lang} />
        <EmailCapture lang={lang} />
        <BlogPreview lang={lang} />
      </main>
      <Footer lang={lang} />
    </AuthWrapper>
  );
}
