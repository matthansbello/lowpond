# Lowpond Nigeria Limited

Marketing website for Lowpond Nigeria Limited — an engineering and construction firm based in Jos, Plateau State, Nigeria.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19, TypeScript
- Tailwind CSS v4
- [Resend](https://resend.com) for contact form email delivery
- Deployed on [Netlify](https://netlify.com)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Fill in `.env.local`:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for sending emails |
| `CONTACT_RECIPIENT_EMAIL` | Inbox that receives contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Production URL for social metadata (e.g. `https://lowpond.ng`) |

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/           # Routes and server actions
├── components/    # UI components
└── lib/           # Shared data, utilities, and constants
public/
└── images/        # Static images and logos
```

## Deployment

The site is configured for Netlify. Set the environment variables above in your Netlify site settings before deploying.
