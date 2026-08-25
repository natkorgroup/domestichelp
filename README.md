# DomesticHelp.ca

A premium, responsive homepage concept for a Canadian private household-staff recruitment agency. Built with the Next.js App Router, React, TypeScript, and original brand assets.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Keep the detected framework set to **Next.js**.
3. Deploy. The included `vercel.json` uses the standard `npx next build` command, which has been verified successfully.
4. Connect the final `domestichelp.ca` domain when ready.

Node.js 22 or newer is required. The public pages do not require a database, external image host, or paid service. The enquiry form requires the Resend email settings described below before it can deliver messages.

## Connect enquiry emails with Resend

1. Create or sign in to a Resend account.
2. Verify the sending domain you want to use, such as `domestichelp.ca`.
3. Create an API key in the Resend dashboard.
4. In Vercel, open **Project → Settings → Environment Variables** and add:

| Variable | Example | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | `re_your_real_secret_key` | Private server-side Resend API key |
| `CONTACT_EMAIL_TO` | `hello@domestichelp.ca` | Mailbox that receives new household enquiries |
| `CONTACT_EMAIL_FROM` | `DomesticHelp.ca <noreply@domestichelp.ca>` | Sender on a domain verified with Resend |

5. Redeploy the project after adding those variables.

Change `CONTACT_EMAIL_TO` to the correct mailbox before launching. It can be any mailbox that should receive leads. Replies go directly to the family’s submitted email address. The Resend API key is read only on the server and must never be placed in client code or committed to Git.

The form includes field validation, a hidden anti-spam field, basic request throttling, clear success/error states, and a plain-text plus HTML email containing the family’s contact details, city, requested household role, preferred recruitment plan, schedule, start timing, and household needs.

## Brand and design files

| Asset | File | Use |
| --- | --- | --- |
| Complete editable logo | `public/logo.svg` | Website, documents, and brand handoff |
| Standalone editable brand icon | `public/brand-mark.svg` | Navigation and social profiles |
| Browser icon | `public/favicon.svg` | Tabs and bookmarks |
| Original homepage photograph | `public/hero-household-help.png` | Hero and senior-support sections |
| Original social-sharing image | `public/og-domestichelp.png` | Open Graph and Twitter previews |

### Brand palette

- Forest green: `#173B32`
- Deep forest: `#112C26`
- Warm cream: `#F7F4EE`
- Sage: `#687C67`
- Copper: `#B57B59`

## Homepage sections

- Homepage, About, Services, Locations, How It Works, Pricing, Payroll, FAQ, Contact, and dedicated support for ageing parents.
- Eight standalone household recruitment service pages, including household assistants, housekeepers, senior companions, private cooks, family assistants, household managers, housekeeper-cooks, and live-in household help.
- Fifteen city pages and 120 dedicated combinations of household service plus city, each with its own SEO title, description, canonical URL, social-preview metadata, and structured service information.
- Dedicated, strictly non-medical support messaging for ageing parents.
- Four-step recruitment process.
- Curated candidate search: **$995**, including up to three introductions.
- Full household recruitment: **10% of annual salary**; a **$500** search commencement is credited to the final fee.
- Optional household payroll: **$70 per employee per month**, unavailable in Quebec.
- Ontario, British Columbia, Alberta, and Quebec service areas, including Montreal and Westmount.
- SEO metadata, social preview, XML sitemap, robots.txt, responsive mobile layout, and a working Resend enquiry form.

Update `CONTACT_EMAIL_TO` before launch to make sure enquiries arrive at the correct mailbox. If the contact email shown publicly should change too, update `enquiryEmail` in `app/lib/content.ts`.

## Main source files

- `app/page.tsx`: homepage content and structure.
- `app/lib/content.ts`: all household roles, cities, neighbourhoods, and public contact email.
- `app/services/` and `app/locations/`: index, service, city, and city-service landing pages.
- `app/components/contact-form.tsx`: complete household enquiry form.
- `app/api/contact/route.ts`: secure server-side Resend email delivery.
- `app/globals.css`: responsive visual design and brand tokens.
- `app/layout.tsx`: SEO metadata, social preview, and favicon.
- `app/sitemap.ts` and `app/robots.ts`: search-engine discovery files.
- `.env.example`: the three Resend configuration settings.
- `vercel.json`: Vercel-specific deployment configuration.

For local development run `npm run dev`. This checkout also retains the Sites-compatible build configuration for its existing hosted preview.
