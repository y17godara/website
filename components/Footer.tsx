import { cn } from '@/lib/utils';
import { Link } from './ui';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';

export function Footer() {
  return (
    <div
      className={cn(
        'md:stick relative top-0 z-50 my-36 animate-in bg-primary pb-12 text-base shadow-sm'
      )}
      style={{ '--index': 1 } as React.CSSProperties}
    >
      {/* Socials */}
      <footer className='mx-auto flex max-w-[700px] flex-col items-center justify-between gap-3 px-4 py-3 md:px-6'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='flex flex-col justify-between font-medium lg:flex-row'>
            <div className='flex space-x-5'>
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className='flex flex-row items-center gap-1 text-secondary hover:text-primary'
                >
                  {social.label}
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Build Stack */}
          <p className='mt-8 text-sm text-secondary '>
            Built with{' '}
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
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='mt-8 text-sm text-secondary '>
            © {new Date().getFullYear()} Yash Godara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Socials
type socialsProps = {
  href: string;
  label: string;
  ariaLabel: string;
  icon?: React.ReactNode;
}[];

const socials: socialsProps = [
  {
    href: 'https://www.linkedin.com/in/y17godara',
    label: 'Linkedin',
    ariaLabel: 'LinkedIn',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://twitter.com/y17godara',
    label: 'Github',
    ariaLabel: 'X Twitter',
    icon: <FaXTwitter />,
  },
  {
    href: 'https://github.com/y17godara',
    label: 'Github',
    ariaLabel: 'GitHub',
    icon: <FaGithub />,
  },
  {
    href: 'https://stackoverflow.com/users/17114824/y17godara',
    label: 'Stackoverflow',
    ariaLabel: 'Stack Overflow',
    icon: <FaStackOverflow />,
  },
  {
    href: 'https://discord.com/users/526972062741299211',
    label: 'Discord',
    ariaLabel: 'Discord',
    icon: <FaDiscord />,
  },
];
