import { BlogPost } from "../types/blog";
import { vatRefundGuideContent, frenchPharmacyGuideContent, vatRefundBelgiumGuideContent, vatRefundPortugalGuideContent, vatRefundSpainGuideContent, vatRefundItalyGuideContent, vatRefundGermanyGuideContent } from "./blogContent";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "VAT Refund Guide",
    slug: "vat-refund-france",
    image: "/images/vat-guide.jpg",
    date: "2025-08-20",
    author: "Mathieu Olivier",
    category: "Travel",
    content: vatRefundGuideContent,
  },
  {
    id: 2,
    title: "French Pharmacy Shopping Guide: Save Up to 70% on Premium Skincare",
    slug: "french-pharmacy-shopping-guide",
    image: "/images/french-pharmacy-guide.jpg",
    date: "2025-01-15",
    author: "Mathieu Olivier",
    category: "Shopping",
    content: frenchPharmacyGuideContent,
  },
  {
    id: 3,
    title: "VAT Refund: Essential + Step-by-Step Guide – Belgium",
    slug: "vat-refund-belgium-guide",
    image: "/images/vat-refund-belgium.jpg",
    date: "2025-01-20",
    author: "Mathieu Olivier",
    category: "Travel",
    content: vatRefundBelgiumGuideContent,
  },
  {
    id: 4,
    title: "VAT Refund: Essential + Step-by-Step Guide – Portugal",
    slug: "vat-refund-portugal-guide",
    image: "/images/vat-refund-portugal.jpg",
    date: "2025-01-25",
    author: "Mathieu Olivier",
    category: "Travel",
    content: vatRefundPortugalGuideContent,
  },
  {
    id: 5,
    title: "VAT Refund: Essential + Step-by-Step Guide – Spain",
    slug: "vat-refund-spain-guide",
    image: "/images/vat-refund-spain.jpg",
    date: "2025-01-30",
    author: "Mathieu Olivier",
    category: "Travel",
    content: vatRefundSpainGuideContent,
  },
  {
    id: 6,
    title: "VAT Refund: Essential + Step-by-Step Guide – Italy",
    slug: "vat-refund-italy-guide",
    image: "/images/vat-refund-italy.jpg",
    date: "2025-02-05",
    author: "Mathieu Olivier",
    category: "Travel",
    content: vatRefundItalyGuideContent,
  },
  {
    id: 7,
    title: "VAT Refund: Essential + Step-by-Step Guide – Germany",
    slug: "vat-refund-germany-guide",
    image: "/images/vat-refund-germany.jpg",
    date: "2025-02-10",
    author: "Mathieu Olivier",
    category: "Travel",
    content: vatRefundGermanyGuideContent,
  },
];

// Helper function to find a post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
