import { Metadata } from "next";
import React from "react";
import Lanyard from "@/components/Lanyard";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
// https://api.lanyard.rest/v1/users/526972062741299211
// https://dcdn.dstn.to/profile/526972062741299211

export const metadata: Metadata = {
  title: "Presence",
};

export default async function page() {
  return (
    <>
      {/* Intro */}
      <div className='flex flex-col gap-16 md:gap-24'>
        <div className='animate-in'>
          <h1 className='text-3xl font-bold'>Presence</h1>
        </div>

        <div
          className='animate-in'
          style={{ "--index": 1 } as React.CSSProperties}
        >
          You may have noticed that while I&apos;m doing something like
          listening to Spotify, programming in VSCode or playing a game,
          it&apos;ll appear here. This is thanks to an open-source project
          called{" "}
          <span>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              className='group inline-flex flex-row p-0 font-semibold underline-offset-4 transition-all duration-200  ease-linear hover:text-brand hover:underline'
              href='https://github.com/Phineas/lanyard'
            >
              Lanyard
              <GoArrowRight
                size={18}
                className={"hidden group-hover:block group-hover:-rotate-45"}
              />
            </Link>{" "}
          </span>
          which pulls live presences from Discord and updates an API and
          WebSocket service.
        </div>

        {/* Presence */}
        <div
          className='flex animate-in flex-col gap-16 md:gap-24'
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Lanyard />
        </div>
      </div>
    </>
  );
}
