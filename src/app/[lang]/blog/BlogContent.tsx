"use client";

import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BlogHeader from '../../components/blog/BlogHeader';
import BlogSearch from '../../components/blog/BlogSearch';
import CategoryFilter from '../../components/blog/CategoryFilter';
import FeaturedPost from '../../components/blog/FeaturedPost';
import BlogGrid from '../../components/blog/BlogGrid';
import { BlogPostPreview } from '../../types/blog';
import { blogPosts } from '../../data/blogPosts';

interface BlogContentProps {
    lang: string;
}

// Convert BlogPost to BlogPostPreview format
const convertToPreview = (post: any): BlogPostPreview => {
    return {
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || 'Read more about this topic in our comprehensive guide.',
        image: post.image,
        date: post.date,
        author: post.author,
        category: post.category,
        delay: 0,
        featured: post.featured || false
    };
};

// Convert blog posts to preview format
const blogPostsPreview: BlogPostPreview[] = blogPosts.map(convertToPreview);

// Update the first post to be featured and add proper excerpt
blogPostsPreview[0].featured = true;
blogPostsPreview[0].excerpt = 'Learn how to make the most of your travel shopping while exploring Paris with this hands-on VAT Refunds guide.';
blogPostsPreview[0].image = '/lovable-uploads/dd63fd82-fd6c-44c0-9ad3-f4495cb3ffa9.png';

// Add excerpt for the pharmacy guide
blogPostsPreview[1].excerpt = 'Discover the best French pharmacy products and save up to 70% on premium skincare, haircare, and wellness products during your Paris visit.';
blogPostsPreview[1].image = '/lovable-uploads/french-pharmacy-guide.jpg';

// Add excerpt for the Belgium VAT guide
blogPostsPreview[2].excerpt = 'Complete guide to VAT refunds in Belgium - save up to 17% on your purchases with our step-by-step process for tax-free shopping.';
blogPostsPreview[2].image = '/lovable-uploads/vat-refund-belgium.jpg';

// Add excerpt for the Portugal VAT guide
blogPostsPreview[3].excerpt = 'Complete guide to VAT refunds in Portugal - save up to 20% on your purchases with Europe\'s highest VAT rate and regional advantages.';
blogPostsPreview[3].image = '/lovable-uploads/vat-refund-portugal.jpg';

// Add excerpt for the Spain VAT guide
blogPostsPreview[4].excerpt = 'Complete guide to VAT refunds in Spain - save up to 15.7% on your purchases with no minimum spend requirement and DIVA kiosk validation.';
blogPostsPreview[4].image = '/lovable-uploads/vat-refund-spain.jpg';

// Add excerpt for the Italy VAT guide
blogPostsPreview[5].excerpt = 'Complete guide to VAT refunds in Italy - save up to 18% on your purchases with Europe\'s highest VAT rate and OTELLO system validation.';
blogPostsPreview[5].image = '/lovable-uploads/vat-refund-italy.jpg';

// Add excerpt for the Germany VAT guide
blogPostsPreview[6].excerpt = 'Complete guide to VAT refunds in Germany - save up to 16% on your purchases with traditional manual customs validation and German precision.';
blogPostsPreview[6].image = '/lovable-uploads/vat-refund-germany.jpg';

const categories = ['All', 'Travel', 'Shopping', 'Guide'];

export default function BlogContent({ lang }: BlogContentProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = blogPostsPreview.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const featuredPost = blogPostsPreview.find(post => post.featured);

    const resetFilters = () => {
        setSearchTerm('');
        setActiveCategory('All');
    };

    return (
        <>
            <Navbar lang={lang} />

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

            <Footer lang={lang} />
        </>
    );
}
