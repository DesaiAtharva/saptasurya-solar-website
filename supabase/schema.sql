-- Leads table shared by the website (writes) and the future CRM app (reads/updates).
-- Run this once in the Supabase SQL editor.

create table if not exists public.leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  name          text not null,
  phone         text not null,
  email         text,
  city          text,
  monthly_bill  text,
  property_type text,          -- home | society | commercial | farm
  message       text,
  source        text not null default 'website', -- quote_form | calculator | popup | contact_page ...
  page_path     text,
  utm           jsonb,
  details       jsonb,         -- e.g. calculator output (kW, cost, subsidy)
  -- CRM pipeline fields (used by the separate CRM app)
  status        text not null default 'new',
  -- new | contacted | site_survey | quote_sent | won | subsidy_applied
  -- | installed | net_metering | subsidy_received | lost
  assigned_to   text,
  next_follow_up timestamptz,
  notes         text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_phone_idx on public.leads (phone);

-- Lock the table down: only the service-role key (server side) can access it.
-- The CRM app will add authenticated-user policies later.
alter table public.leads enable row level security;

create or replace function public.touch_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;

drop trigger if exists leads_touch on public.leads;
create trigger leads_touch before update on public.leads
for each row execute function public.touch_updated_at();
