import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityLandingPage from '@/components/SEO/CityLandingPage';

// All 36 Maharashtra districts + major cities
const maharashtraCities = [
  // Major Cities
  'pune', 'nagpur', 'mumbai', 'nashik', 'aurangabad', 'solapur', 'kolhapur',
  'amravati', 'nanded', 'sangli', 'jalgaon', 'latur', 'dhule', 'akola',
  'chandrapur', 'parbhani', 'beed', 'satara', 'yavatmal', 'thane',
  // Districts
  'wardha', 'bhandara', 'gondia', 'gadchiroli', 'buldhana', 'washim',
  'jalna', 'hingoli', 'osmanabad', 'ahmednagar', 'nandurbar', 'palghar',
  'raigad', 'ratnagiri', 'sindhudurg', 'talegaon',
];

function formatCityName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateStaticParams() {
  return maharashtraCities.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = formatCityName(params.city);
  if (!maharashtraCities.includes(params.city)) return {};

  return {
    title: `Solar Panel Installation in ${city} | Rooftop Solar | Saptasurya Solar`,
    description: `Looking for solar panel installation in ${city}, Maharashtra? Saptasurya Solar provides premium rooftop solar systems, solar water heaters and solar pumps with government subsidy support. Call for a free quote.`,
    keywords: [
      `Solar Panel ${city}`,
      `Solar Installation ${city}`,
      `Rooftop Solar ${city}`,
      `Solar Company ${city}`,
      `Solar Energy ${city} Maharashtra`,
      `Solar Subsidy ${city}`,
    ],
    alternates: {
      canonical: `https://saptasuryasolar.com/solar-panel-installation-${params.city}`,
    },
    openGraph: {
      title: `Solar Panel Installation in ${city} | Saptasurya Solar`,
      description: `Get affordable solar panels with subsidy support in ${city}, Maharashtra.`,
      url: `https://saptasuryasolar.com/solar-panel-installation-${params.city}`,
      type: 'website',
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  if (!maharashtraCities.includes(params.city)) {
    notFound();
  }

  const cityName = formatCityName(params.city);
  return <CityLandingPage citySlug={params.city} cityName={cityName} />;
}
