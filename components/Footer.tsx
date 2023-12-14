import { cn } from '@/lib/utils';
import { Link } from './ui';
import { socials } from '@/components/index';
import { type socialsProps } from '@/types/index';

export function Footer() {
  return (
    <div
      className={cn(
        'md:stick relative top-0 z-50 my-36 animate-in bg-primary pb-12 text-base'
      )}
      style={{ '--index': 1 } as React.CSSProperties}
    >
      {/* Socials */}
      <footer className='mx-auto flex max-w-[700px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-6'>
        <div className='flex flex-col items-center justify-center text-start'>
          <div className='flex flex-col justify-between text-start font-medium lg:flex-row'>
            <div className='flex space-x-5'>
              {socials.map((social: socialsProps, index: number) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  title={social.label}
                  className='flex flex-row items-center gap-1 text-secondary hover:text-primary'
                >
                  {social.private ? null : (
                    <>
                      <span className='hidden sm:block'>{social.label}</span>
                      {social.icon}
                    </>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Build Stack */}
          <p className='mt-8 text-start text-sm text-secondary'>
            Built with <span className='text-primary'>❤️</span> using{' '}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={'/'}
            >
              Next.js
            </Link>
            {', '}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={'/'}
            >
              MDX
            </Link>
            {', '}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={'/'}
            >
              Tailwindcss
            </Link>
            {', '}
            and{' '}
            <Link
              className='italic underline-offset-2 hover:underline'
              href={'/'}
            >
              Vercel
            </Link>
            {'. '}
          </p>
        </div>
        {/* Copy Rights */}
        <div className='flex flex-col items-center justify-center text-start'>
          <p className='mt-8 text-sm text-secondary '>
            {/* Copyright */}©{' '}
            {new Date().getFullYear() === 2023
              ? 2023
              : `2023 - ${new Date().getFullYear()}`}{' '}
            Yash Godara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
