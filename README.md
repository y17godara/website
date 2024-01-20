# My Personal Website

https://www.y-g.tech

## Tech Stack

- [Next.js](nextjs.org) / TypeScript
- [MDX](https://mdxjs.com) / [Contentlayer](https://contentlayer.dev/) (Blogs / Projects)
- [Prisma](https://www.prisma.io) (ORM)
- [MySQL](https://planetscale.com/) (Planetscale Database)
- [Tailwind CSS](https://tailwindcss.com) (Styling)
- [Radix Primitives](https://www.radix-ui.com/primitives) (Headless UI components)
- [Radix UI Colors](https://www.radix-ui.com/colors) (Color system)
- [Framer Motion](https://www.framer.com/motion/) (Animations)
- [Discord Presence](https://github.com/Phineas/lanyard) (RESTful API and WebSocket)

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
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   DOMAIN="localhost:3000"
   NODE_ENV=development
   DATABASE_URL=""
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

# Todo

- [x] Add `Og Image` support
- [x] `Discord Presence API` Integration.
- [x] `Spotify API` Integration.
- [ ] Add `Share Button` Component.
- [ ] `Table`, `List View` for Blogs and Projects.
- [ ] `Add Related Blogs` to `Blog Post Page using Tags`.
- [ ] `Blog` and `Project` `Search` Feature.
- [ ] `Blog` and `Project` `Filter` Feature.
- [ ] `Blog` and `Project` `Sort` Feature.
- [ ] `Blog` and `Project` `Pagination` Feature.
- [ ] `Blog` and `Project` `Tags` Feature.
- [ ] `Blog` and `Project` `Categories` Feature.
