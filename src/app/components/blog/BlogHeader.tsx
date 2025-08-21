import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const BlogHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <Link href="/" className="inline-flex items-center gap-2 text-travel-gray hover:text-travel-blue transition-spring w-fit">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Home</span>
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold">
        TravelMoney <span className="text-gradient">Blog</span>
      </h1>
      
      <p className="text-muted-foreground max-w-2xl">
        Discover expert tips, guides, and insights to help you travel smarter and manage your finances on the go.
      </p>
    </div>
  );
};

export default BlogHeader;
