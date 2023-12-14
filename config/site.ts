export const siteConfig = {
  title: `Yash Godara`,
  aboutMe: ``,
  creator: `Yash Godara`,
  publisher: `Yash Godara`,
  category: `technology`,
  authors: [
    {
      name: `Yash Godara`,
      twitterHandle: `@y17godara`,
    },
  ],
  description: `Developer Expertise in Tech like ▲ Next.js, TailwindCSS, React, TypeScript, Node.js, Serverless, Prisma PostgreSQL, MongoDB, and more. Aspiring to become a successful software and web developer.`,
  twitterHandle: `@y17godara`,
  meta: `Developer Expertise in Tech like ▲ Next.js, TailwindCSS, React, TypeScript, Node.js, Serverless, Prisma PostgreSQL, MongoDB, and more. Aspiring to become a successful software and web developer.`,
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  generator: `Next.js`,
  ogImage: `https://website-61p9jbjff-y17godara.vercel.app/opengraph-image.png`,
  links: {
    twitter: 'https://x.com/y17godara',
    github: 'https://github.com/y17godara',
  },
  keywords: process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL.split(',')
    : ['y17godar', 'Yash Godara', 'Portfolio Website', 'Blogs Website'],
};

export type SiteConfig = typeof siteConfig;
