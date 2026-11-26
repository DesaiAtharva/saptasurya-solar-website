'use client';
import { trackLead } from './analytics';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
];
const UTM_STORAGE = 'ss_utm';

/** Call once on app load: remembers ad-campaign params for the whole visit. */
export function captureUtm(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) sessionStorage.setItem(UTM_STORAGE, JSON.stringify(found));
  } catch {
    /* storage unavailable */
  }
}

function readUtm(): Record<string, string> | undefined {
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE);
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
}

export type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  monthlyBill?: string;
  propertyType?: string;
  message?: string;
  source: string;
  details?: Record<string, unknown>;
  company?: string; // honeypot
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, pagePath: window.location.pathname, utm: readUtm() }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) {
      trackLead(payload.source, { city: payload.city, property_type: payload.propertyType });
      try {
        localStorage.setItem('ss_lead_submitted', '1');
      } catch {
        /* ignore */
      }
      return { ok: true };
    }
    return { ok: false, error: data.error || 'Something went wrong. Please call or WhatsApp us.' };
  } catch {
    return { ok: false, error: 'Network error. Please call or WhatsApp us.' };
  }
}

export function hasSubmittedLead(): boolean {
  try {
    return localStorage.getItem('ss_lead_submitted') === '1';
  } catch {
    return false;
  }
}
