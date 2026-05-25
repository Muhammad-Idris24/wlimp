create extension if not exists pgcrypto;

create table if not exists public.conference_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  gender text not null check (gender in ('Female', 'Male', 'Prefer not to say')),
  organization text not null,
  location text not null,
  role text not null,
  motivation text not null,
  attendance_type text not null check (attendance_type in ('Participant', 'Partner', 'Media', 'Volunteer')),
  source text not null default 'website',
  user_agent text,
  ip_address text
);

create unique index if not exists conference_registrations_email_key
  on public.conference_registrations (lower(email));

alter table public.conference_registrations enable row level security;

create policy "Service role can manage conference registrations"
  on public.conference_registrations
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
