# Vedanta — Next.js

Luxury Himalayan residences marketing site for Vedanta by Vaishno Group.

## Develop

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://www.vedantabyvaishnogroup.com
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url
```

## Build

```bash
yarn build
yarn start
```

## Deploy (Vercel)

1. Import the repo in Vercel
2. Framework: Next.js (auto-detected)
3. Set `NEXT_PUBLIC_SITE_URL=https://www.vedantabyvaishnogroup.com` and `NEXT_PUBLIC_BACKEND_URL`
4. Deploy
