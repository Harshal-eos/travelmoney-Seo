import React from 'react';
import { Button } from '../ui/button';
import BlogCard from './BlogCard';
import { BlogPostPreview } from '@/app/types/blog';

interface BlogGridProps {
  posts: BlogPostPreview[];
  resetFilters: () => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, resetFilters }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your search or filter to find what you&apos;re looking for
        </p>
        <Button 
          variant="outline" 
          className="rounded-full"
          onClick={resetFilters}
        >
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
