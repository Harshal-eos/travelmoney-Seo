
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  author: string;
  category: string;
  content: string;
}

export interface BlogPostPreview {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  delay?: number;
  featured?: boolean;
}
