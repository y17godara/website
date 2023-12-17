import React from "react";
import { MotionDiv } from "@/components/index";
import { Link } from "@/components/ui";
import { Spotlight, Tilt } from "@/components/ui/index";
import { socials } from "@/components/index";
import { type socialsProps } from "@/types/index";

export const SocialsCard = () => {
  return (
    <>
      <Tilt>
        <Spotlight
          strength={20}
          size={400}
          color='#8b0d0d'
          className='rounded-lg'
        >
          <div
            className='animate-in text-lg font-medium tracking-tight text-secondary'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            <div className='flex  animate-in flex-col items-center justify-center gap-2 rounded-lg bg-tertiary p-6 text-center lg:p-8'>
              <p className='font-medium text-primary'>
                Connect with me on social media
              </p>
              {/* Social */}
              <div>
                <div className='relative flex items-center justify-center gap-4 pb-6 '>
                  {socials.map((social: socialsProps, index: number) => (
                    <>
                      {social.private ? null : (
                        <MotionDiv
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Link
                            className={`text-3xl text-primary ${social.className}`}
                            href={social.href}
                            target
                            aria-label={social.ariaLabel}
                            title={social.title}
                          >
                            <span className='text-[20px] sm:text-[24px] md:text-[32px]'>
                              {social.icon}
                            </span>
                          </Link>
                        </MotionDiv>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <p className='text-sm text-tertiary'>
                <span className='font-bold'>Note:</span> This site is currently
                under development.
              </p>
              <span className='text-sm text-tertiary'>
                Previous Portfolio Website here 👉{" "}
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
