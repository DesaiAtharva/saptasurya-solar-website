// City / district data that makes each local landing page genuinely different.

export type RegionKey = 'konkan' | 'western' | 'north' | 'marathwada' | 'vidarbha';

export type City = {
  slug: string;
  name: string;
  district: string;
  region: RegionKey;
  /** Electricity distribution companies that handle net metering here. */
  discoms: string[];
  /** Optional city-specific line shown on the page. */
  note?: string;
};

export const REGIONS: Record<
  RegionKey,
  {
    name: string;
    unitsPerKwDay: string;
    climate: string;
    advice: string[];
    popular: string;
  }
> = {
  konkan: {
    name: 'Konkan & Mumbai Metropolitan Region',
    unitsPerKwDay: '3.8 – 4.2',
    climate: 'heavy monsoon rainfall (June–September), high humidity and salty coastal air',
    advice: [
      'Hot-dip galvanised or aluminium mounting structures to resist coastal corrosion',
      'Wind-load rated structures for cyclone-prone months',
      'Lightning arresters & surge protection for intense monsoon storms',
      'Higher tilt angle so rain naturally washes dust off panels',
    ],
    popular: 'Housing-society rooftop systems for common-area lighting, lifts and water pumps',
  },
  western: {
    name: 'Western Maharashtra',
    unitsPerKwDay: '4.0 – 4.5',
    climate: 'moderate temperatures, dry summers and a clear post-monsoon season',
    advice: [
      'Monocrystalline PERC / TOPCon panels for best yield in mild temperatures',
      'Elevated structures on RCC roofs to keep terrace space usable',
      'Bi-weekly cleaning during the dry Feb–May months',
      'Hybrid inverters with battery backup for areas with load shedding',
    ],
    popular: 'Independent homes, bungalows and small industrial units in MIDC areas',
  },
  north: {
    name: 'North Maharashtra (Khandesh & Nashik)',
    unitsPerKwDay: '4.2 – 4.6',
    climate: 'hot, dry summers with strong sunshine for 300+ days a year',
    advice: [
      'Panels with a low temperature coefficient to handle 40°C+ summers',
      'Solar pumps for grape, onion and banana farms',
      'Regular cleaning in dusty summer months',
      'Ventilated mounting height to keep panels cooler',
    ],
    popular: 'Farm solar pumps, cold storages and residential rooftops',
  },
  marathwada: {
    name: 'Marathwada',
    unitsPerKwDay: '4.4 – 4.8',
    climate: 'among the highest solar radiation in Maharashtra, with very hot, dusty summers',
    advice: [
      'Excellent generation — systems typically pay back faster here',
      'PM-KUSUM solar pumps to beat irregular agricultural power supply',
      'Dust-resistant panels and frequent cleaning schedule',
      'Water-efficient cleaning methods during summer water scarcity',
    ],
    popular: 'Agricultural solar pumps and residential rooftop systems',
  },
  vidarbha: {
    name: 'Vidarbha',
    unitsPerKwDay: '4.4 – 4.8',
    climate: 'extreme summers reaching 45°C+ with very high solar radiation',
    advice: [
      'Heat-tolerant panels and inverters rated for high ambient temperature',
      'Elevated, well-ventilated structures to reduce heat losses',
      'Inverters installed in shaded, ventilated spots',
      'Solar pumps for cotton, soybean and orange farms',
    ],
    popular: 'Rooftop systems for homes facing high summer AC bills, and farm pumps',
  },
};

const M = ['MSEDCL (Mahavitaran)'];

export const CITIES: City[] = [
  // --- Districts ---
  { slug: 'ahmednagar', name: 'Ahmednagar', district: 'Ahilyanagar', region: 'north', discoms: M },
  { slug: 'akola', name: 'Akola', district: 'Akola', region: 'vidarbha', discoms: M },
  { slug: 'amravati', name: 'Amravati', district: 'Amravati', region: 'vidarbha', discoms: M },
  { slug: 'beed', name: 'Beed', district: 'Beed', region: 'marathwada', discoms: M },
  { slug: 'bhandara', name: 'Bhandara', district: 'Bhandara', region: 'vidarbha', discoms: M },
  { slug: 'buldhana', name: 'Buldhana', district: 'Buldhana', region: 'vidarbha', discoms: M },
  {
    slug: 'chandrapur',
    name: 'Chandrapur',
    district: 'Chandrapur',
    region: 'vidarbha',
    discoms: M,
  },
  {
    slug: 'chhatrapati-sambhajinagar',
    name: 'Chhatrapati Sambhajinagar',
    district: 'Chhatrapati Sambhajinagar',
    region: 'marathwada',
    discoms: M,
    note: 'Industrial units in Waluj, Shendra and Chikalthana MIDC can cut daytime power costs significantly with rooftop solar.',
  },
  { slug: 'dhule', name: 'Dhule', district: 'Dhule', region: 'north', discoms: M },
  {
    slug: 'gadchiroli',
    name: 'Gadchiroli',
    district: 'Gadchiroli',
    region: 'vidarbha',
    discoms: M,
  },
  { slug: 'gondia', name: 'Gondia', district: 'Gondia', region: 'vidarbha', discoms: M },
  { slug: 'hingoli', name: 'Hingoli', district: 'Hingoli', region: 'marathwada', discoms: M },
  { slug: 'jalgaon', name: 'Jalgaon', district: 'Jalgaon', region: 'north', discoms: M },
  { slug: 'jalna', name: 'Jalna', district: 'Jalna', region: 'marathwada', discoms: M },
  { slug: 'kolhapur', name: 'Kolhapur', district: 'Kolhapur', region: 'western', discoms: M },
  { slug: 'latur', name: 'Latur', district: 'Latur', region: 'marathwada', discoms: M },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    district: 'Mumbai City',
    region: 'konkan',
    discoms: ['BEST', 'Tata Power'],
    note: 'In Mumbai most rooftops are shared — we specialise in housing-society systems and help get society NOC and BEST/Tata Power net-metering approval.',
  },
  {
    slug: 'mumbai-suburban',
    name: 'Mumbai Suburban',
    district: 'Mumbai Suburban',
    region: 'konkan',
    discoms: ['Adani Electricity', 'Tata Power', 'MSEDCL (Mahavitaran)'],
    note: 'From Bandra to Dahisar and Kurla to Mulund, we handle net metering with Adani Electricity, Tata Power or MSEDCL depending on your area.',
  },
  {
    slug: 'nagpur',
    name: 'Nagpur',
    district: 'Nagpur',
    region: 'vidarbha',
    discoms: M,
    note: 'With some of the hottest summers in India, Nagpur homes with heavy AC use see some of the fastest solar paybacks in the state.',
  },
  { slug: 'nanded', name: 'Nanded', district: 'Nanded', region: 'marathwada', discoms: M },
  { slug: 'nandurbar', name: 'Nandurbar', district: 'Nandurbar', region: 'north', discoms: M },
  {
    slug: 'nashik',
    name: 'Nashik',
    district: 'Nashik',
    region: 'north',
    discoms: M,
    note: 'Popular with vineyard owners, cold-storage units and residential customers in Nashik city.',
  },
  { slug: 'dharashiv', name: 'Dharashiv', district: 'Dharashiv', region: 'marathwada', discoms: M },
  { slug: 'palghar', name: 'Palghar', district: 'Palghar', region: 'konkan', discoms: M },
  { slug: 'parbhani', name: 'Parbhani', district: 'Parbhani', region: 'marathwada', discoms: M },
  {
    slug: 'pune',
    name: 'Pune',
    district: 'Pune',
    region: 'western',
    discoms: M,
    note: 'Our home base — fastest site surveys in Pune city, PCMC, Hadapsar, Wagholi, Hinjewadi and surrounding areas.',
  },
  { slug: 'raigad', name: 'Raigad', district: 'Raigad', region: 'konkan', discoms: M },
  { slug: 'ratnagiri', name: 'Ratnagiri', district: 'Ratnagiri', region: 'konkan', discoms: M },
  { slug: 'sangli', name: 'Sangli', district: 'Sangli', region: 'western', discoms: M },
  { slug: 'satara', name: 'Satara', district: 'Satara', region: 'western', discoms: M },
  { slug: 'sindhudurg', name: 'Sindhudurg', district: 'Sindhudurg', region: 'konkan', discoms: M },
  { slug: 'solapur', name: 'Solapur', district: 'Solapur', region: 'western', discoms: M },
  { slug: 'thane', name: 'Thane', district: 'Thane', region: 'konkan', discoms: M },
  { slug: 'wardha', name: 'Wardha', district: 'Wardha', region: 'vidarbha', discoms: M },
  { slug: 'washim', name: 'Washim', district: 'Washim', region: 'vidarbha', discoms: M },
  { slug: 'yavatmal', name: 'Yavatmal', district: 'Yavatmal', region: 'vidarbha', discoms: M },
  // --- Major cities / towns ---
  { slug: 'kalyan', name: 'Kalyan', district: 'Thane', region: 'konkan', discoms: M },
  { slug: 'dombivli', name: 'Dombivli', district: 'Thane', region: 'konkan', discoms: M },
  { slug: 'navi-mumbai', name: 'Navi Mumbai', district: 'Thane', region: 'konkan', discoms: M },
  {
    slug: 'mira-bhayandar',
    name: 'Mira Bhayandar',
    district: 'Thane',
    region: 'konkan',
    discoms: ['Adani Electricity'],
  },
  { slug: 'vasai-virar', name: 'Vasai Virar', district: 'Palghar', region: 'konkan', discoms: M },
  { slug: 'ulhasnagar', name: 'Ulhasnagar', district: 'Thane', region: 'konkan', discoms: M },
  { slug: 'ambernath', name: 'Ambernath', district: 'Thane', region: 'konkan', discoms: M },
  { slug: 'panvel', name: 'Panvel', district: 'Raigad', region: 'konkan', discoms: M },
  {
    slug: 'bhiwandi',
    name: 'Bhiwandi',
    district: 'Thane',
    region: 'konkan',
    discoms: ['Torrent Power'],
    note: 'Ideal for warehouses and power-loom units with large roofs and high daytime consumption.',
  },
  { slug: 'badlapur', name: 'Badlapur', district: 'Thane', region: 'konkan', discoms: M },
  { slug: 'karjat', name: 'Karjat', district: 'Raigad', region: 'konkan', discoms: M },
  { slug: 'khopoli', name: 'Khopoli', district: 'Raigad', region: 'konkan', discoms: M },
  { slug: 'alibag', name: 'Alibag', district: 'Raigad', region: 'konkan', discoms: M },
];

export const getCity = (slug: string | undefined) => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City, limit = 12) =>
  CITIES.filter((c) => c.region === city.region && c.slug !== city.slug).slice(0, limit);
