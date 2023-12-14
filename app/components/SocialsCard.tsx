import React from 'react';
import { MotionDiv } from '@/components/index';
import { Link } from '@/components/ui';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';
import { Spotlight, Tilt } from '@/components/ui/index';

export const SocialsCard = () => {
  return (
    <>
      <Tilt>
        <Spotlight
          strength={30}
          size={600}
          color='#8b0d0d'
          className='rounded-lg'
        >
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
                  <MotionDiv
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      className='text-3xl text-primary hover:text-brand'
                      href='https://www.linkedin.com/in/y17godara'
                      target
                      aria-label='LinkedIn'
                    >
                      <FaLinkedin />
                    </Link>
                  </MotionDiv>
                  <MotionDiv
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      className='text-3xl text-primary hover:text-brand'
                      href='https://twitter.com/y17godara'
                      target
                      aria-label='X Twitter'
                    >
                      <FaXTwitter />
                    </Link>
                  </MotionDiv>
                  <MotionDiv
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      className='text-3xl text-primary hover:text-brand'
                      href='https://github.com/y17godara'
                      target
                      aria-label='GitHub'
                    >
                      <FaGithub />
                    </Link>
                  </MotionDiv>
                  <MotionDiv
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      className='text-3xl text-primary hover:text-brand'
                      href='https://stackoverflow.com/users/17114824/y17godara'
                      target
                      aria-label='Stack Overflow'
                    >
                      <FaStackOverflow />
                    </Link>
                  </MotionDiv>
                  <MotionDiv
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      className='text-3xl text-primary hover:text-brand'
                      href='https://discord.com/users/526972062741299211'
                      target
                      aria-label='Discord'
                    >
                      <FaDiscord />
                    </Link>
                  </MotionDiv>
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
      </Tilt>
    </>
  );
};
