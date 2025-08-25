import { notFound } from "next/navigation";
import { blogPosts } from "../../data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose">
      <h1>{post.title}</h1>
      <p className="text-muted-foreground">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}