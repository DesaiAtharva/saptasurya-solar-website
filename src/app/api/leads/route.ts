import { NextResponse } from 'next/server';

/**
 * POST /api/leads
 * Stores a lead in Supabase (shared with the future CRM app) and notifies the owner.
 *
 * Env vars (see .env.example):
 *   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY          -> storage
 *   RESEND_API_KEY, LEAD_NOTIFY_EMAIL, LEAD_FROM_EMAIL -> email alert
 *   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID              -> instant phone alert
 */

export const runtime = 'nodejs';

type LeadInput = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  monthlyBill?: unknown;
  propertyType?: unknown;
  message?: unknown;
  source?: unknown;
  pagePath?: unknown;
  utm?: unknown;
  details?: unknown;
  company?: unknown; // honeypot
};

type Lead = {
  name: string;
  phone: string;
  email: string | null;
  city: string | null;
  monthly_bill: string | null;
  property_type: string | null;
  message: string | null;
  source: string;
  page_path: string | null;
  utm: Record<string, string> | null;
  details: Record<string, unknown> | null;
  status: 'new';
};

const str = (v: unknown, max = 200): string | null => {
  if (typeof v !== 'string') return null;
  const t = v.trim().slice(0, max);
  return t.length ? t : null;
};

/** Normalise Indian mobile numbers to +91XXXXXXXXXX. Returns null when invalid. */
function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  const local =
    digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits.replace(/^0/, '');
  return /^[6-9]\d{9}$/.test(local) ? `+91${local}` : null;
}

// Best-effort, per-instance rate limit (serverless instances don't share memory).
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

async function saveToSupabase(lead: Lead): Promise<boolean> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;
  const res = await fetch(`${url}/rest/v1/leads`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(lead),
  });
  if (!res.ok) console.error('Supabase insert failed', res.status, await res.text());
  return res.ok;
}

function summary(lead: Lead): string {
  const lines = [
    `New solar lead (${lead.source})`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email && `Email: ${lead.email}`,
    lead.city && `City: ${lead.city}`,
    lead.property_type && `Property: ${lead.property_type}`,
    lead.monthly_bill && `Monthly bill: ${lead.monthly_bill}`,
    lead.details && `Details: ${JSON.stringify(lead.details)}`,
    lead.message && `Message: ${lead.message}`,
    lead.page_path && `Page: ${lead.page_path}`,
    lead.utm && `UTM: ${JSON.stringify(lead.utm)}`,
  ];
  return lines.filter(Boolean).join('\n');
}

async function notifyEmail(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!key || !to) return false;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || 'Saptasurya Leads <onboarding@resend.dev>',
      to: to.split(',').map((s) => s.trim()),
      subject: `New lead: ${lead.name} – ${lead.city || 'Unknown city'}`,
      text: summary(lead),
    }),
  });
  if (!res.ok) console.error('Resend failed', res.status, await res.text());
  return res.ok;
}

async function notifyTelegram(lead: Lead): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: summary(lead) }),
  });
  if (!res.ok) console.error('Telegram failed', res.status, await res.text());
  return res.ok;
}

export async function POST(req: Request) {
  let body: LeadInput;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (str(body.company)) return NextResponse.json({ ok: true });

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please call or WhatsApp us.' },
      { status: 429 }
    );
  }

  const name = str(body.name, 100);
  const phoneRaw = str(body.phone, 20);
  const phone = phoneRaw ? normalisePhone(phoneRaw) : null;
  const email = str(body.email, 150);

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 400 });
  }
  if (!phone) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid 10-digit mobile number.' },
      { status: 400 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 });
  }

  const utm =
    body.utm && typeof body.utm === 'object'
      ? Object.fromEntries(
          Object.entries(body.utm as Record<string, unknown>)
            .map(([k, v]) => [k.slice(0, 40), str(v, 200)])
            .filter(([, v]) => v)
        )
      : null;

  const details =
    body.details && typeof body.details === 'object' && JSON.stringify(body.details).length < 2000
      ? (body.details as Record<string, unknown>)
      : null;

  const lead: Lead = {
    name,
    phone,
    email,
    city: str(body.city, 80),
    monthly_bill: str(body.monthlyBill, 40),
    property_type: str(body.propertyType, 40),
    message: str(body.message, 2000),
    source: str(body.source, 40) || 'website',
    page_path: str(body.pagePath, 200),
    utm: utm && Object.keys(utm).length ? (utm as Record<string, string>) : null,
    details,
    status: 'new',
  };

  const results = await Promise.allSettled([
    saveToSupabase(lead),
    notifyEmail(lead),
    notifyTelegram(lead),
  ]);
  const delivered = results.some((r) => r.status === 'fulfilled' && r.value);

  if (!delivered) {
    // Nothing configured or every channel failed — never silently lose a lead.
    console.error('LEAD NOT DELIVERED', summary(lead));
    return NextResponse.json(
      { ok: false, error: 'We could not submit right now. Please call or WhatsApp us.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
