"use client";

import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BlogHeader from '../components/blog/BlogHeader';
import BlogSearch from '../components/blog/BlogSearch';
import CategoryFilter from '../components/blog/CategoryFilter';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGrid';
import { BlogPostPreview } from '../types/blog';

const blogPosts: BlogPostPreview[] = [
  {
    id: 1,
    title: 'VAT Refund in France: An easy guide to tax-free shopping',
    excerpt: 'Learn how to make the most of your travel shopping while exploring Paris with this hands-on VAT Refunds guide.',
    image: '/lovable-uploads/dd63fd82-fd6c-44c0-9ad3-f4495cb3ffa9.png',
    date: '14 Mar 2025',
    author: 'Mathieu Olivier',
    category: 'Guide',
    delay: 0,
    featured: true,
    slug: 'vat-refund-france'
  }
];

const categories = ['All', 'Guide'];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const featuredPost = blogPosts.find(post => post.featured);
  
  const resetFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-32 pb-20">
        <section className="px-6 md:px-12 mb-16">
          <div className="container mx-auto">
            <BlogHeader />
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <BlogSearch 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
              />
              
              <CategoryFilter 
                categories={categories} 
                activeCategory={activeCategory} 
                setActiveCategory={setActiveCategory} 
              />
            </div>
            
            {featuredPost && searchTerm === '' && activeCategory === 'All' && (
              <FeaturedPost post={featuredPost} />
            )}
            
            <BlogGrid posts={filteredPosts} resetFilters={resetFilters} />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
