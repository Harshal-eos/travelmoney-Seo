import React from 'react';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { Button } from '../ui/button';
import AnimatedImage from '../ui/AnimatedImage';
import { BlogPostPreview } from '@/app/types/blog';

interface FeaturedPostProps {
  post: BlogPostPreview;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className="grid md:grid-cols-2 gap-8 mb-16 border border-travel-gray-light rounded-2xl overflow-hidden">
      <div className="order-2 md:order-1 p-8 flex flex-col justify-center">
        <span className="text-sm font-medium px-3 py-1 rounded-full bg-travel-blue/10 text-travel-blue inline-block mb-4 w-fit">
          Featured
        </span>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-travel-blue transition-spring">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        
        <p className="text-muted-foreground mb-6">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
        </div>
        
        <Button
          className="rounded-full bg-travel-blue hover:bg-travel-blue-dark text-white w-fit"
          asChild
        >
          <Link href={`/blog/${post.slug}`}>
            Read Full Article
          </Link>
        </Button>
      </div>
      
      <div className="order-1 md:order-2 aspect-[16/9] md:aspect-auto">
        <Link href={`/blog/${post.slug}`}>
          <AnimatedImage
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            animationType="fade-in"
          />
        </Link>
      </div>
    </article>
  );
};

export default FeaturedPost;
