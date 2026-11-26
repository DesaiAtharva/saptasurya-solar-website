// Single source of truth for business contact details & site URL.
export const SITE_URL = 'https://www.saptasuryasolar.com';

export const BUSINESS = {
  name: 'Saptasurya Solar Energy',
  shortName: 'Saptasurya Solar',
  phoneDisplay: '+91 70583 62510',
  phoneE164: '+917058362510',
  whatsappNumber: '917058362510',
  email: 'info@saptasuryasolar.com',
  city: 'Pune',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const PROPERTY_TYPES = [
  { value: 'home', label: 'Independent Home / Bungalow' },
  { value: 'society', label: 'Housing Society' },
  { value: 'commercial', label: 'Shop / Office / Factory' },
  { value: 'farm', label: 'Farm / Solar Pump' },
] as const;

export const BILL_RANGES = [
  { value: 'lt1500', label: 'Below ₹1,500' },
  { value: '1500-3000', label: '₹1,500 – ₹3,000' },
  { value: '3000-5000', label: '₹3,000 – ₹5,000' },
  { value: '5000-10000', label: '₹5,000 – ₹10,000' },
  { value: 'gt10000', label: 'Above ₹10,000' },
] as const;

/**
 * Panel warranty shown on the site. Update per panel brand you install.
 * TODO(owner): fill in the brand's actual warranty years from the manufacturer datasheet.
 * Parts left as null are simply not shown — never display a number you haven't confirmed.
 */
export const PANEL_WARRANTY: {
  panelType: string;
  productYears: number | null;
  performanceYears: number | null;
} = {
  panelType: 'ALMM-listed DCR panels',
  productYears: null, // [X]
  performanceYears: null, // [Y]
};

/** "ALMM-listed DCR panels · X-year product warranty · Y-year performance warranty (as per manufacturer)" */
export function panelWarrantyLine(w = PANEL_WARRANTY): string {
  const years = [
    w.productYears ? `${w.productYears}-year product warranty` : null,
    w.performanceYears ? `${w.performanceYears}-year performance warranty` : null,
  ].filter(Boolean);
  return [w.panelType, ...years].join(' · ') + (years.length ? ' (as per manufacturer)' : '');
}
