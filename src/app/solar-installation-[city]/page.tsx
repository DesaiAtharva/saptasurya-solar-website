import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityLandingPage from '@/components/SEO/CityLandingPage';

// All 36 Maharashtra districts + major cities
const maharashtraCities = [
  // Districts
  'ahmednagar',
  'akola',
  'amravati',
  'beed',
  'bhandara',
  'buldhana',
  'chandrapur',
  'chhatrapati-sambhajinagar',
  'dhule',
  'gadchiroli',
  'gondia',
  'hingoli',
  'jalgaon',
  'jalna',
  'kolhapur',
  'latur',
  'mumbai',
  'mumbai-suburban',
  'nagpur',
  'nanded',
  'nandurbar',
  'nashik',
  'dharashiv',
  'palghar',
  'parbhani',
  'pune',
  'raigad',
  'ratnagiri',
  'sangli',
  'satara',
  'sindhudurg',
  'solapur',
  'thane',
  'wardha',
  'washim',
  'yavatmal',
  // Major Cities/Towns
  'kalyan',
  'dombivli',
  'navi-mumbai',
  'mira-bhayandar',
  'vasai-virar',
  'ulhasnagar',
  'ambernath',
  'panvel',
  'bhiwandi',
  'badlapur',
  'karjat',
  'khopoli',
  'alibag',
];

function formatCityName(slug: string | undefined): string {
  if (!slug) return '';
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
  // Guard: return empty metadata if city is invalid or undefined
  if (!params.city || !maharashtraCities.includes(params.city)) return {};

  const city = formatCityName(params.city);

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
      canonical: `https://saptasuryasolar.com/solar-installation-${params.city}`,
    },
    openGraph: {
      title: `Solar Panel Installation in ${city} | Saptasurya Solar`,
      description: `Get affordable solar panels with subsidy support in ${city}, Maharashtra.`,
      url: `https://saptasuryasolar.com/solar-installation-${params.city}`,
      type: 'website',
    },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  if (!params.city || !maharashtraCities.includes(params.city)) {
    notFound();
  }

  const cityName = formatCityName(params.city);
  return <CityLandingPage citySlug={params.city} cityName={cityName} />;
}
