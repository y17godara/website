import React from 'react';
import { MotionDiv } from '@/components/index';
import { Link } from '@/components/ui';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';
import { Spotlight } from '@/components/ui/index';

export const SocialsCard = () => {
  return (
    <>
      <Spotlight strength={20}>
        <div
          className='animate-in text-lg font-medium tracking-tight text-secondary'
          style={{ '--index': 1 } as React.CSSProperties}
        >
          <div className='flex  animate-in flex-col items-center justify-center gap-2 rounded-lg bg-tertiary p-6 text-center lg:p-8'>
            <p className='font-medium text-primary'>
              Connect with me on social media
            </p>
            {/* Social */}
            <div>
              <div className='relative flex items-center justify-center gap-4 pb-6 '>
                {socials.map((social, index) => (
                  <MotionDiv
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      className='text-3xl text-primary hover:text-brand'
                      href={social.href}
                      target
                      aria-label={social.ariaLabel}
                    >
                      {social.icon}
                    </Link>
                  </MotionDiv>
                ))}
              </div>
            </div>
            <p className='text-sm text-tertiary'>
              <span className='font-bold'>Note:</span> This site is currently
              under development.
            </p>
            <span className='text-sm text-tertiary'>
              Previous Portfolio Website here 👉{' '}
              <Link
                className='hover:underline'
                href='https://yashgodara-me.vercel.app/'
                target
                aria-label='Previous Portfolio Website'
              >
                Visit now
              </Link>
            </span>
          </div>
        </div>
      </Spotlight>
    </>
  );
};

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
