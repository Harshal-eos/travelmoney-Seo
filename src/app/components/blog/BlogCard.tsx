import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

import AnimatedImage from '../ui/AnimatedImage';
import { BlogPostPreview } from '@/app/types/blog';


interface BlogCardProps {
  post: BlogPostPreview;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article 
      className="group rounded-2xl overflow-hidden border border-travel-gray-light hover:shadow-md transition-spring"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="overflow-hidden aspect-[16/9]">
          <AnimatedImage
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            animationType="fade-in"
          />
        </div>
        
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
              <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
