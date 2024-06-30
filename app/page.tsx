import React from "react";
import Image from "next/image";
import Avatar from "./icon.png";
import { Suspense } from "react";
import { Stats, LatestBlogs } from "./_components/index";
import { Link } from "@/components/ui";
import { PiArrowUpRight } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { allBlogs, Blog } from "contentlayer/generated";
import { SiGoogledocs } from "react-icons/si";
import { getStars, getContributions, getViews } from "@/actions/get-stats";
import ActivityChart from "@/components/ActivityChart";

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yash Godara",
  additionalName: "y17godara",
  username: "y17godara",
  pronouns: "he/him",
  worksFor: "Sarathi Rides",
  jobTitle: "Software Developer",
  workingStatus: "Open for opportunities",
  homeLocation: "New Delhi, India",
  url: "https://www.y-g.tech",
  sameAs: [
    "https://www.linkedin.com/in/y17godara",
    "https://x.com/y17godara",
    "https://twitter.com/y17godara",
    "https://stackoverflow.com/users/17114824/y17godara",
    "https://github.com/y17godara",
    "https://www.yashgodara.me",
  ],
  projects: [
    {
      "@type": "SoftwareApplication",
      name: "Desh Videsh Travels",
      url: "https://www.y-g.tech/projects/desh-videsh-travels",
    },
    {
      "@type": "SoftwareApplication",
      name: "Capture A Trip",
      url: "https://www.y-g.tech/projects/capture-a-trip",
    },
    {
      "@type": "SoftwareApplication",
      name: "Dramatic Scripts",
      url: "https://www.y-g.tech/projects/dramatic-scripts",
    },
    {
      "@type": "SoftwareApplication",
      name: "Next.js + Contentlayer Portfolio Website",
      url: "https://www.y-g.tech/projects/portfolio-nextjs",
    },
    {
      "@type": "SoftwareApplication",
      name: "Blue Everest - Digial Solutions for your Business",
      url: "https://www.y-g.tech/projects/blueeverest",
    },
  ],
};

export default async function page() {
  const blogs: Blog[] = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    // 2 most recent
    .filter((_, i) => i < 2);

  const stars = await getStars();
  const contributions = await getContributions();
  const views = await getViews();

  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        {/* JSON LD */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        ></script>
        <div className='flex animate-in flex-col gap-8'>
          <div>
            <h1 className='animate-in text-3xl font-bold tracking-tight text-primary'>
              Hi, I&apos;m Yash,
            </h1>
            <p
              className='animate-in text-secondary'
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Passionate about building products, sharing knowledge, and
              helping.
            </p>
          </div>
          <div
            className='flex max-w-lg animate-in flex-col gap-6 overflow-x-hidden text-secondary md:flex-row md:items-center'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <Image
              src={Avatar}
              width={90}
              height={90}
              alt='avatar'
              priority
              className='rounded-full bg-secondary'
            />
            <Suspense
              fallback={
                <div className='flex h-24 flex-1 animate-pulse rounded-md bg-secondary'></div>
              }
            >
              <Stats
                contributions={contributions}
                stars={stars}
                views={views}
              />
            </Suspense>
          </div>
          <div
            className='flex max-w-lg animate-in flex-col gap-8 text-primary'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <p>
              A Undergrad Computer Science Student from New Delhi, India. I am a
              self-taught Software Developer Who is Passionate about Building
              Products, Learning New Technologies, and Sharing Knowledge with
              other fellow developers.
            </p>
            <p>
              I bring a wealth of positive energy and a strong work ethic to the
              table. I am a self-starter who is always looking for new
              opportunities to learn and improve my skills. I am a team player
              who is always willing to help others and share my knowledge.
            </p>
            <p>
              Other than coding, I sometimes spend my time exploring new things
              like photography, videography, and sometimes learning new facts
              about the world and the universe. I am a very curious person who
              loves to learn new things daily and share them with others.
            </p>
            <ul
              className='animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6'
              style={{ "--index": 2 } as React.CSSProperties}
            >
              <li className='transition-opacity'>
                <Link
                  href='mailto:yash17godara@gmail.com'
                  className='flex items-center gap-2 no-underline'
                >
                  <MdAttachEmail className='h-5 w-5' />
                  <span className='underline-offset-4 hover:underline'>
                    Email me
                  </span>
                </Link>
              </li>
              <li className='transition-opacity'>
                <Link
                  href='/assets/about/resume-y17godara.pdf'
                  className='flex items-center gap-2 no-underline'
                >
                  <SiGoogledocs className='h-5 w-5' />
                  <span className='underline-offset-4 hover:underline'>
                    Resume
                  </span>
                </Link>
              </li>
              <li className='transition-opacity'>
                <Link
                  href='/connect'
                  className='flex items-center gap-2 no-underline'
                >
                  <PiArrowUpRight className='h-5 w-5' />
                  <span className='underline-offset-4 hover:underline'>
                    More ways to connect
                  </span>
                </Link>
              </li>
            </ul>

            <Suspense
              fallback={
                <div className='flex h-32 w-full rounded-md bg-tertiary p-2'></div>
              }
            >
              <ActivityChart />
            </Suspense>
          </div>
        </div>

        {/* Latest Blogs */}
        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <h2 className='text-secoundary text-lg'>Latest Blogs</h2>
          {blogs.length > 0 ? (
            <LatestBlogs blogs={blogs as Blog[]} />
          ) : (
            <div className='text-sm text-primary'>No blogs found</div>
          )}
          <Link
            href='/blogs'
            className='text-secondary underline underline-offset-4 hover:text-primary'
          >
            See All
          </Link>
        </div>
      </div>
    </>
  );
}
