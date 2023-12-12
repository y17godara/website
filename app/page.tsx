import { MotionDiv } from '@/components/index';
import { Link } from '@/components/ui';
import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';

export default async function Home() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        {/* Content */}
        <div className='flex animate-in flex-col justify-center gap-8 pb-12 text-center'>
          <div>
            <h1 className='animate-in text-5xl font-bold tracking-tight text-primary sm:text-[4rem] sm:leading-[5rem]'>
              Yash Godara
            </h1>
            <h3>
              <span className='animate-in text-secondary'>Student </span>
              {' | '}
              <span className='animate-in text-secondary'>Developer</span>
            </h3>
          </div>

          <div>
            <h6
              className='animate-in text-2xl font-medium tracking-tight text-brand'
              style={{ '--index': 1 } as React.CSSProperties}
            >
              Exciting Things Coming Soon 🚧
            </h6>

            <p
              className='animate-in text-lg font-medium tracking-tight text-secondary'
              style={{ '--index': 1 } as React.CSSProperties}
            >
              Stay tuned for updates{' '}
              <span className='animate-in text-secondary'>🚀</span>
            </p>
          </div>
        </div>
        {/* Socials Card */}
        <div
          className='animate-in text-lg font-medium tracking-tight text-secondary'
          style={{ '--index': 1 } as React.CSSProperties}
        >
          <div className='flex  animate-in flex-col items-center justify-center gap-2 rounded-lg bg-tertiary p-6 text-center lg:p-8'>
            <p className='font-medium text-primary'>
              Connect with me on social media
            </p>
            {/* Cards */}
            <div>
              {/* Linkedin, X (former Twitter), GitHub, Stack Overflow, Discord */}
              <div className='relative flex items-center justify-center gap-4 pb-6'>
                <MotionDiv
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <Link
                    className='text-3xl text-primary hover:text-brand'
                    href='https://www.linkedin.com/in/y17godara'
                    target
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
              >
                Visit now
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
