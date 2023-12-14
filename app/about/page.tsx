import { Metadata } from 'next';
import React from 'react';
import { Link } from '@/components/ui';
import { socials } from '@/components/index';
import { type socialsProps } from '@/types/index';

export const metadata: Metadata = {
  title: 'About',
};

export default async function About() {
  return (
    <>
      {/* Intro */}
      <div className='flex flex-col gap-16 md:gap-24'>
        <div>
          <h1 className='animate-in text-3xl font-bold'>About</h1>
          <p className='animate-in text-lg font-normal'>
            Just a quick glimpse.
          </p>
        </div>

        {/* TODO: Images Section Here */}

        {/* About */}
        <div className='flex animate-in flex-col gap-16 md:gap-24'>
          <section className='col-reverse flex flex-col gap-2 md:flex-row md:gap-9'>
            <div className='flex flex-col gap-6'>
              <p>Hello World,</p>
              <p>
                I&apos;m Yash{' '}
                <Link
                  className='text-sm italic underline underline-offset-4'
                  href='https://twitter.com/y17godara'
                  target
                >
                  (@y17godara)
                </Link>{' '}
                Godara
              </p>
              <p>
                A Undergrad Computer Science Student from India. I am a
                self-taught developer who loves to code and explore new
                technologies.
              </p>
              <p>
                I have been coding for a years now and I have worked on various
                small personal projects ranging from html websites to full
                stack.
              </p>
              <p>
                I am currently working on a few personal projects and learning
                new technologies.
              </p>
              {/* Additionally */}
              <p>
                Additionally, I love to read tech Blogs, watch movies and
                series, listen to music and sometimes read books.
              </p>
              <p>
                In addition to my passion for coding and technology, I find
                immense joy in sharing my knowledge with those around me. I
                believe in the power of knowledge sharing, and I make it a point
                to share what I learn in my day-to-day life with my friends,
                family, and peers.I always enjoy contributing to a culture of
                learning. There&apos;s something fulfilling about seeing others
                benefit from the knowledge I share, and it motivates me to
                continue my journey as a lifelong learner and educator.
              </p>
              <p>
                I also love to travel and explore new places and I am a big fan
                of nature. When I am not on my desk, I am either spending time
                with my family or travelling.
              </p>
            </div>
          </section>
        </div>

        {/* Contact */}
        <div className='flex animate-in flex-col gap-16  md:gap-24 '>
          <div className='relative flex flex-col gap-6'>
            <div>
              <h1 className='animate-in text-lg font-bold'>Contact Me</h1>
              <p className='text-md animate-in font-normal'>
                Connect with me on social media.
              </p>
            </div>

            {/* Social */}
            <ul className='animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2'>
              {socials.map((link: socialsProps, index: number) => (
                <li className='col-span-1 transition-opacity' key={index}>
                  <Link
                    href={link.href}
                    target
                    aria-label={link.ariaLabel}
                    title={link.title}
                    className='inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity'
                  >
                    <div className='flex items-center gap-3'>
                      {/* Icon */}
                      <span className='text-xl'>{link.icon}</span>
                      {link.label}

                      {/* is Private */}
                      {link.private ? (
                        <span className='text-xs text-tertiary'>{`(Private)`}</span>
                      ) : null}

                      {/* Arrow */}
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='ml-auto h-5 w-5 text-secondary'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
