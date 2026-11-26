import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogPosts';
import { BLOG_CONTENT } from '@/data/blogContent';
import BlogArticle from '@/components/Blog/BlogArticle';
import { SITE_URL } from '@/config/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => BLOG_CONTENT[p.slug]).map((p) => ({ slug: p.slug }));
}

const find = (slug: string) => {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const blocks = BLOG_CONTENT[slug];
  return post && blocks ? { post, blocks } : null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = find(slug);
  if (!found) return {};
  const { post } = found;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const found = find(slug);
  if (!found) notFound();
  const { post, blocks } = found;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: { '@type': 'Organization', name: 'Saptasurya Solar Energy' },
    publisher: {
      '@type': 'Organization',
      name: 'Saptasurya Solar Energy',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/brand/saptasurya-logo-512.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && BLOG_CONTENT[p.slug])
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogArticle post={post} blocks={blocks} related={related} />
    </>
  );
}
