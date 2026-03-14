'use client';
import React from 'react';

interface JsonLdProps {
  city?: string;
}

export default function JsonLd({ city }: JsonLdProps) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Saptasurya Solar Energy',
    url: 'https://saptasuryasolar.com',
    telephone: '+91 98608 74908',
    email: 'info@saptasuryasolar.com',
    image: 'https://saptasuryasolar.com/new_logo.png',
    description:
      'Saptasurya Solar provides premium rooftop solar panel installation and renewable energy solutions across Maharashtra.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city || 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5204',
      longitude: '73.8567',
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    sameAs: ['https://saptasuryasolar.com'],
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
    url: 'https://saptasuryasolar.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://saptasuryasolar.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Solar Panel Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Saptasurya Solar Energy',
    },
    areaServed: city ? `${city}, Maharashtra` : 'Maharashtra',
    description:
      'Professional rooftop solar panel installation, solar water heaters, solar pumps, and battery storage solutions.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
