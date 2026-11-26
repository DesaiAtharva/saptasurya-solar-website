import React from 'react';

interface JsonLdProps {
  city?: string;
  /** On city pages the global LocalBusiness/WebSite schema is already in the root layout. */
  servicesOnly?: boolean;
}

export default function JsonLd({ city, servicesOnly = false }: JsonLdProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Saptasurya Solar Energy',
    url: 'https://www.saptasuryasolar.com',
    telephone: '+91-7058362510',
    email: 'info@saptasuryasolar.com',
    image: 'https://www.saptasuryasolar.com/og-image.png',
    logo: 'https://www.saptasuryasolar.com/brand/saptasurya-logo-512.png',
    description:
      'Saptasurya Solar provides premium rooftop solar panel installation and renewable energy solutions across all 36 districts of Maharashtra.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alankapuri Complex, Laxmi Colony, Hadapsar',
      addressLocality: 'Pune',
      postalCode: '411028',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.4981',
      longitude: '73.9557',
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '₹₹',
    areaServed: {
      '@type': 'State',
      name: 'Maharashtra',
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Saptasurya Solar',
    url: 'https://www.saptasuryasolar.com',
  };

  const solarService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Panel Installation',
    serviceType: 'Solar Energy System Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Saptasurya Solar Energy',
    },
    areaServed: city ? `${city}, Maharashtra` : 'Maharashtra',
    description:
      'Professional rooftop solar panel installation for residential and commercial customers in Maharashtra.',
  };

  const waterHeaterService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Water Heater Installation',
    serviceType: 'Renewable Energy Water Heating',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Saptasurya Solar Energy',
    },
    areaServed: city ? `${city}, Maharashtra` : 'Maharashtra',
  };

  return (
    <>
      {!servicesOnly && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
          />
        </>
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solarService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waterHeaterService) }}
      />
    </>
  );
}
