# Brantra

Brantra is a frontend product prototype for independent creators managing brand partnerships from inquiry through payment. It combines a public marketing site, authentication flows, and an interactive operations dashboard.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dashboard is available at `/dashboard`; all data and successful actions are currently simulated in the browser.

## Quality checks

```bash
npm run lint
npm run build
```

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- GSAP and Lenis for the marketing motion system
- Lucide icons

## Current scope

The frontend covers responsive marketing, sign-in and early-access forms, workspace search, notifications, deal capture, campaign progress, feedback review, and revised-cut selection. Authentication, persistence, file storage, email delivery, invoicing, and payment processing are intentionally left for the backend phase.
