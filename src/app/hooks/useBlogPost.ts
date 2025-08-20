"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getBlogPostBySlug } from "../data/blogPosts";
import { BlogPost } from "../types/blog";

export const useBlogPost = (): {
  post: BlogPost | null;
  isLoading: boolean;
  error: Error | null;
} => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

useEffect(() => {
  if (!slug) return; // wait until slug is available
  try {
    const blogPost = getBlogPostBySlug(slug as string);
    if (!blogPost) {
      throw new Error("Blog post not found");
    }
    setPost(blogPost);
  } catch (err: unknown) {
    if (err instanceof Error) {
      setError(err);
    } else {
      setError(new Error("An unexpected error occurred"));
    }
    setPost(null);
  } finally {
    setIsLoading(false);
  }
}, [slug]);


  return { post, isLoading, error };
};
