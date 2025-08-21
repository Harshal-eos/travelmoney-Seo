import React from 'react';
import EmailCapture from '../sections/EmailCapture';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => {
  return (
    <>
      <div 
        className="prose prose-lg max-w-none prose-headings:text-travel-blue prose-a:text-travel-blue prose-strong:text-travel-blue"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <div className="mt-12">
        <EmailCapture />
      </div>
    </>
  );
};

export default BlogPostContent;
