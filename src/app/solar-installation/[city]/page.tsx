import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityLandingPage from '@/components/SEO/CityLandingPage';
import { CITIES, getCity } from '@/data/cities';
import { SITE_URL } from '@/config/site';

// Public URL is /solar-installation-<city> (rewritten in next.config.js to this route).
type Props = { params: Promise<{ city: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const url = `${SITE_URL}/solar-installation-${city.slug}`;

  return {
    title: {
      absolute: `Solar Panel Installation in ${city.name} | Subsidy up to ₹78,000 | Saptasurya Solar`,
    },
    description: `Rooftop solar installation in ${city.name}, Maharashtra with PM Surya Ghar subsidy up to ₹78,000. ${city.discoms.join(' / ')} net metering handled for you. Free site survey — get your quote today.`,
    keywords: [
      `Solar Panel ${city.name}`,
      `Solar Installation ${city.name}`,
      `Rooftop Solar ${city.name}`,
      `Solar Company ${city.name}`,
      `Solar Subsidy ${city.name}`,
      `PM Surya Ghar ${city.name}`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `Solar Panel Installation in ${city.name} | Saptasurya Solar`,
      description: `Affordable rooftop solar with government subsidy in ${city.name}, Maharashtra.`,
      url,
      type: 'website',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  return <CityLandingPage city={city} />;
}
