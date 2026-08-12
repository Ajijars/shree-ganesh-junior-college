# Shree Ganesh Junior College — Korhale

Professional prototype website for **Shree Ganesh Junior College, Korhale** — 11th & 12th Science and Commerce.

**Tagline:** *Learning Today ... Leading Tomorrow*

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **TypeScript**
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, batches, leadership preview |
| `/about` | Vision, mission, leadership messages, infrastructure |
| `/academics` | All streams, teaching & non-teaching staff |
| `/academics/science/neet` | NEET batch details & syllabus |
| `/academics/science/jee` | JEE batch details & syllabus |
| `/academics/science/cet` | CET batch details & syllabus |
| `/academics/science/regular-board` | Regular Board batch |
| `/academics/commerce` | Commerce stream |
| `/admissions` | Enquiry form, eligibility, process, fees |
| `/hostel` | Hostel facilities & rules |
| `/results` | Board results & achievements |
| `/activities` | Sports, events, competitions, gallery |
| `/contact` | Contact info & enquiry form |

## Updating Content

All college data lives in **`src/data/college.ts`**. Edit names, staff, syllabus, results, phone numbers, etc. there — pages update automatically.

## Real Details Already Added

- **Chairman/President:** Mr. Vijay Shete
- **Biology Faculty (NEET):** Mr. Riyaj R. Shaikh
- **Email:** contact@shreeganeshedu.in / shreeganeshdocument@gmail.com
- **Instagram:** [@shreeganesh_official](https://www.instagram.com/shreeganesh_official/)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily to [Vercel](https://vercel.com) — connect this folder and deploy.
