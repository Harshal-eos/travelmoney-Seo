import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

import { Button } from '../ui/button';
import { BlogPost } from '@/app/types/blog';

type BlogPreviewPost = Omit<BlogPost, 'content'> & {
  excerpt: string;
  delay: number;
};

const blogPosts: (BlogPreviewPost & { featured?: boolean })[] = [
  {
    id: 1,
    title: 'VAT Refund in France: An easy guide to tax-free shopping',
    slug: 'vat-refund-france',
    excerpt: 'Learn how to make the most of your budget while exploring Europe with these expert tips on currency exchange, accommodation, and more.',
    image: '/lovable-uploads/9d43a1e9-8b1c-4e6c-a7d9-8f1c2e6d4b3a.png',
    date: '14 Mar 2025',
    author: 'Mathieu Olivier',
    category: 'Guide',
    delay: 0,
    featured: true
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-travel-blue/10 text-travel-blue">
              VAT Refunds Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Hands On Guides on <span className="text-gradient">VAT Refunds</span>
            </h2>
            <p className="text-muted-foreground">
              Discover expert tips, guides, and insights to help you maximise your VAT refunds and shop smarter.
            </p>
          </div>
          
          <Button
            variant="outline"
            className="rounded-full group"
            asChild
          >
            <Link href="/blog">
              <span className="flex items-center gap-2">
                View All Articles
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </Button>
        </div>
        
        <div className="flex justify-center">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  post: (BlogPreviewPost & { featured?: boolean });
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article 
      className="group rounded-2xl overflow-hidden border border-travel-gray-light hover:shadow-md transition-spring"
      style={{ animationDelay: `${post.delay}ms` }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
          </div>
          
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-travel-blue/10 text-travel-blue inline-block">
            {post.category}
          </span>
          
          <h3 className="text-xl font-semibold group-hover:text-travel-blue transition-spring">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground">
            {post.excerpt}
          </p>
          
          <div className="pt-2">
            <span className="text-travel-blue font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPreview;
