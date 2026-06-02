# WLIMP Institutional Launch Platform

Production-ready one-page platform for the WeCare Leadership and Impact Mentorship Programme (WLIMP) and the WeCare Leadership Conference 2026.

## Stack

- Next.js 15 App Router
- TypeScript
- TailwindCSS
- ShadCN-style local UI components
- Framer Motion
- Lucide React Icons
- Supabase
- React Hook Form + Zod
- Resend
- Vercel

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_your_key
RESEND_FROM_EMAIL=WLIMP <registrations@your-verified-domain.com>
RESEND_REPLY_TO_EMAIL=team@yourdomain.com
ADMIN_NOTIFICATION_EMAIL=team@yourdomain.com
```

`SUPABASE_SERVICE_ROLE_KEY` must only be used server-side. Do not expose it in the browser.

## Supabase Setup

1. Create a free Supabase project.
2. Open the SQL editor.
3. Run [`supabase/schema.sql`](./supabase/schema.sql).
4. Copy the project URL and service role key into Vercel environment variables.

The registration API inserts into `conference_registrations`, prevents duplicate emails, and stores source/user-agent metadata for operational follow-up.

## Resend Setup

1. Create a free Resend account.
2. Verify a sending domain when available. For early testing, use Resend's allowed sandbox sender.
3. Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `ADMIN_NOTIFICATION_EMAIL`.

If Resend variables are missing, registrations still store in Supabase, but confirmation/admin emails are skipped.

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Set the environment variables above for Production.
4. Deploy.
5. Update `NEXT_PUBLIC_SITE_URL` to the final domain and redeploy so metadata, sitemap, robots, and structured data use the production URL.

## Quality Notes

- The landing page is modularized for future expansion into applications, alumni, media, and learning areas.
- The registration flow uses client validation, server validation, a honeypot field, basic in-memory rate limiting, Supabase persistence, and Resend email notifications.
- SEO includes metadata, Open Graph, Twitter card data, sitemap, robots, and JSON-LD event structured data.
- Motion respects `prefers-reduced-motion`.
- The primary image is stored locally in `public/images` for stable performance.

## Commands

```bash
npm run dev
npm run lint
npm run build
npm start
```
