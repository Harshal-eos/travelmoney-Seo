
import { useParams } from 'react-router-dom';
import { getBlogPostBySlug } from '@/data/blogPosts';
import { BlogPost } from '@/types/blog';

export const useBlogPost = (): { 
  post: BlogPost | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);
  
  // In a real app, you would have actual loading and error states
  // Here we simplify since we're using mock data
  return {
    post,
    isLoading: false,
    error: post ? null : new Error('Blog post not found')
  };
};
