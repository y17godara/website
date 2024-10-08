import Image from "next/image";
import { Link } from "@/components/ui";
import { socials } from "@/components";
import Avatar from "@/app/icon.png";
import { Metadata } from "next";
import { socialsProps } from "@/types";

export const metadata: Metadata = {
  title: "Connect with Me",
};

export default function page() {
  return (
    <>
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='flex animate-in flex-col gap-8'>
          <Image
            src={Avatar}
            width={100}
            height={100}
            alt='avatar'
            className='mx-auto animate-in rounded-full bg-secondary'
            style={{ "--index": 1 } as React.CSSProperties}
          />
          <div
            className='animate-in space-y-1'
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className='text-center text-2xl font-bold tracking-tight'>
              Yash Godara
            </h1>
            <p className='mx-auto max-w-sm text-center text-secondary'>
              Connect with me on social media
            </p>
          </div>
          {/* TODO: Add Share Button */}
        </div>

        <ul
          className='animated-list grid flex-grow animate-in grid-cols-1 gap-2 lg:gap-3'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {socials.map((link: socialsProps, index: number) => (
            <li className='col-span-1 transition-opacity' key={index}>
              <Link
                href={link.href}
                className='inline-grid w-full rounded-lg bg-tertiary p-4 no-underline transition-opacity'
              >
                <div className='flex items-center gap-3'>
                  <span className='text-xl'>{link.icon}</span>
                  {link.label}
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
    </>
  );
}
