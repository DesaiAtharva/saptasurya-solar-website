import { Metadata } from 'next';
import BlogClient from '@/components/Blog/BlogClient';

export const metadata: Metadata = {
  title: 'Solar Energy Blog | Costs, Tips & Subsidy Guides | Saptasurya Solar',
  description:
    'Read our latest articles on solar panel costs in Maharashtra, PM Surya Ghar subsidy guides, and solar energy benefits for homeowners and businesses.',
  alternates: {
    canonical: 'https://saptasuryasolar.com/blog',
  },
  openGraph: {
    title: 'Solar Energy Blog - Expert Insights | Saptasurya Solar',
    description: 'Expert guides and news on solar energy in Maharashtra.',
    url: 'https://saptasuryasolar.com/blog',
    images: [{ url: 'https://saptasuryasolar.com/og-image.jpg' }],
  },
};

const BlogPage = () => {
  return <BlogClient />;
};

export default BlogPage;
