import React from "react";
import Image from "next/image";
import Avatar from "./icon.png";
import { Stats, LatestBlogs } from "./_components/index";
import { Link } from "@/components/ui";
import { PiArrowUpRight } from "react-icons/pi";
import { MdAttachEmail } from "react-icons/md";
import { allBlogs, Blog } from "contentlayer/generated";

export default async function page() {
  const blogs: Blog[] = await allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    // 2 most recent
    .filter((_, i) => i < 2);
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          <div>
            <h1 className='animate-in text-3xl font-bold tracking-tight text-primary'>
              Hi, I&apos;m Yash,
            </h1>
            <p
              className='animate-in text-secondary'
              style={{ "--index": 1 } as React.CSSProperties}
            >
              I love to code and explore new technologies.
            </p>
          </div>
          <div
            className='flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center'
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
            <Stats />
          </div>
          <div
            className='flex max-w-lg animate-in flex-col gap-8 text-primary'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <p>
              A Undergrad Computer Science Student from New Delhi, India. I am a
              self-taught developer who loves to code and explore new
              technologies.
            </p>
            <p>
              I bring a wealth of positive energy and a strong work ethic to the
              table. I am a self-starter who is always looking for new
              opportunities to learn and improve my skills. I am a team player
              who is always willing to help others and share my knowledge.
            </p>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className='h-full max-w-full animate-in text-secondary'
                src='https://ghchart.rshah.org/y17godara'
                alt='y17godara Github chart'
              />
            </div>
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
