import BlogContent from './BlogContent';
import { use } from 'react';

export default function Blog({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);

  return <BlogContent lang={lang} />;
}
