import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blogPosts";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, lang } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar lang={lang} />
      <main className="min-h-screen pt-32 pb-20">
        <article className="max-w-3xl mx-auto px-6 py-12 prose">
          <h1>{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
      <Footer lang={lang} />
    </>
  );
}
