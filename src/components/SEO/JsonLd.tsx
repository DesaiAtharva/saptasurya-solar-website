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
    telephone: '9860874908',
    email: 'info@saptasuryasolar.com',
    image: 'https://saptasuryasolar.com/new_logo.png',
    description:
      'Saptasurya Solar provides premium rooftop solar panel installation and renewable energy solutions across all 36 districts of Maharashtra.',
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
    description: 'Professional rooftop solar panel installation for residential and commercial customers in Maharashtra.',
    offers: {
      '@type': 'Offer',
      price: '75000',
      priceCurrency: 'INR',
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solarService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(waterHeaterService) }}
      />
    </>
  );
}
