# My Personal Website
![visitors](https://visitor-badge.laobi.icu/badge?page_id=y17godara.website)

## Tech Stack

- [Next.js](nextjs.org) / TypeScript
- [MDX](https://mdxjs.com) / [Contentlayer](https://contentlayer.dev/) (Blogs / Projects)
- [Prisma](https://www.prisma.io) (ORM)
- [Postgres](https://vercel.com/docs/storage/vercel-postgres) (Vercel Postgres Database)
- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Radix Primitives](https://www.radix-ui.com/primitives) (Headless UI components)
- [Radix UI Colors](https://www.radix-ui.com/colors) (Color system)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Discord Presence](https://github.com/Phineas/lanyard) (RESTful API and WebSocket)
- [Zustand](https://github.com/pmndrs/zustand) (State Management)

## Getting Started

1. **Clone the repository**:

```bash
git clone
```

2. **Install dependencies**:

```bash
npm install
```

3. **Setup Environment Variables**

   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_KEYWORDS=
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   DOMAIN="localhost:3000"
   NODE_ENV=
   DATABASE_URL=
   DIRECT_URL=
   REDIS_URL=
   REDIS_TOKEN=
   ```

4. **Setup Database/ Prisma**:

```bash
npx prisma generate
npx prisma db push
npx prisma migrate dev --name init
```

5. **Start the Development Server**:

```bash
npm run dev
```

## Deployment

This project is deployed on [Vercel](https://vercel.com) and is automatically deployed on every push to `main` branch.
