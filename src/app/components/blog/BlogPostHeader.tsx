import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface BlogPostHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  date,
  author,
  category
}) => {
  return (
    <>
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-travel-gray hover:text-travel-blue transition-spring w-fit">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {date}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="h-4 w-4" />
            {author}
          </span>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-travel-blue/10 text-travel-blue">
            {category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold">
          {title}
        </h1>
      </div>
    </>
  );
};

export default BlogPostHeader;
