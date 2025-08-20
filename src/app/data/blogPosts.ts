import { BlogPost } from '../types/blog';
import { vatRefundGuideContent } from './blogContent';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'VAT Refund Guide',
    slug: 'vat-refund-guide',
    image: '/images/vat-guide.jpg', // add your image path
    date: '2025-08-20', // example date
    author: 'Harshal Ogale',
    category: 'Travel',
    content: vatRefundGuideContent,
  },
];

// Helper function to find a post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
