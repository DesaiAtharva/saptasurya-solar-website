// Thin wrapper around GA4 (gtag) and Meta Pixel (fbq).
// Both are no-ops when the scripts are not loaded (env vars missing).

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Params = {}): void {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', name, params);
  } catch {
    /* ignore */
  }
}

/** A qualified lead was submitted (form, calculator, popup). */
export function trackLead(source: string, params: Params = {}): void {
  trackEvent('generate_lead', { lead_source: source, currency: 'INR', ...params });
  if (process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION) {
    trackEvent('conversion', { send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION });
  }
  try {
    window.fbq?.('track', 'Lead', { content_name: source });
  } catch {
    /* ignore */
  }
}

/** Visitor tapped a call or WhatsApp link. */
export function trackContact(channel: 'call' | 'whatsapp', placement: string): void {
  trackEvent(channel === 'call' ? 'click_call' : 'click_whatsapp', { placement });
  try {
    window.fbq?.('track', 'Contact', { content_name: `${channel}:${placement}` });
  } catch {
    /* ignore */
  }
}
