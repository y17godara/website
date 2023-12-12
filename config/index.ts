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
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
  ],
  description: `Welcome to my digital space! I'm Yash Godara, a passionate computer science student based in India. Aspiring to become a successful software and web developer, my portfolio showcases my journey through coding and learning. Dive into my projects and explore my expertise in technologies like Next.js, React, TypeScript, Node.js, and more. Join me as I navigate the exciting world of development. Let's code the future together`,
  twitterHandle: `@y17godara`,
  meta: `Developer Expertise in Tech like ▲ Next.js, TailwindCSS, React, TypeScript, Node.js, Serverless, Prisma PostgreSQL, MongoDB, and more. Aspiring to become a successful software and web developer.`,
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  generator: `Next.js`,
  // ogImage: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
  links: {
    twitter: 'https://x.com/y17godara',
    github: 'https://github.com/y17godara',
  },
  keywords: process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL.split(',')
    : ['y17godar', 'Yash Godara', 'Portfolio Website', 'Blogs Website'],
};

export type SiteConfig = typeof siteConfig;
