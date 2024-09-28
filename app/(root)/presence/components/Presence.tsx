import { useMemo } from "react";
import Progress from "@/components/Progress";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";

function DiscordPresence({ doing }: { doing: any }) {
  return (
    <ul className='animated-list relative flex flex-col gap-2 md:gap-4 xl:gap-6'>
      <DisplayPresence doing={doing} />
    </ul>
  );
}

const DisplayPresence = (Presence: any) => {
  const doing = Presence.doing;
  const currentDate: any = new Date();

  const currentActivity = useMemo(
    () =>
      doing?.activities.find(
        ({ application_id }: any) => application_id === "383226320970055681"
      ),

    [doing]
  );
  return (
    <>
      {doing?.listening_to_spotify ? (
        <li
          className={cn(
            "flex w-full cursor-pointer flex-col gap-y-2 rounded-md border-[1px] border-secondary bg-transparent p-[1rem] text-secondary transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-primary md:gap-1"
          )}
        >
          <h5 className='line-clamp-1 flex flex-row items-center justify-center gap-1 text-center'>
            Listening to Spotify
            <div className='inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--brand)]'></div>
          </h5>

          <div className={cn("flex flex-row items-center justify-between")}>
            {/* ImageContainer */}
            <div
              className={
                "relative flex h-full flex-row items-center justify-between"
              }
            >
              <div className={"relative h-[50px] md:h-[80px] lg:h-[100px]"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={doing.spotify.album_art_url}
                  alt='Album Art'
                  className='h-[50px] w-[50px] rounded-md md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]'
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={"/assets/logo/spotify-logo.svg"}
                  alt='Spotify Logo'
                  className='absolute -bottom-[5px] -right-[5px] h-5 w-5 rounded-full border border-white bg-white dark:border-black dark:bg-black'
                />
              </div>
              <div className='ml-4'>
                <h5 className='m-0 text-primary'>{doing.spotify.song}</h5>
                <p className='m-0 text-sm font-thin'>
                  {"by "}
                  {doing.spotify.artist}
                </p>
              </div>
            </div>

            <div className={"relative h-full"}>
              <Link
                href={`https://open.spotify.com/track/${doing.spotify.track_id}`}
                className='m-0 cursor-pointer text-primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaSpotify className={"h-5 w-5 text-green-500 md:h-8 md:w-8"} />
              </Link>
            </div>
          </div>
          <Progress
            theme='brand'
            percentage={
              (100 * (currentDate - doing.spotify.timestamps.start)) /
              (doing.spotify.timestamps.end - doing.spotify.timestamps.start)
            }
          />
        </li>
      ) : null}
      {currentActivity ? (
        <li
          className={cn(
            "flex w-full cursor-pointer flex-col gap-y-2 rounded-md border-[1px] border-secondary bg-transparent p-[1rem] text-secondary transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-primary md:gap-1"
          )}
        >
          <h5 className='line-clamp-1 flex flex-row items-center justify-center gap-1 text-center'>
            Doing something
            <div className='inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--brand)]'></div>
          </h5>
          <div className='flex flex-row items-center'>
            {currentActivity.assets ? (
              <div className={"relative h-[50px] md:h-[80px] lg:h-[100px]"}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
                  alt='Album Art'
                  className='h-[50px] w-[50px] rounded-md md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]'
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
                  alt='Spotify Logo'
                  className='absolute -bottom-[5px] -right-[5px] h-5 w-5 rounded-full border border-white bg-white dark:border-black dark:bg-black'
                />
              </div>
            ) : null}
            <div className='ml-4'>
              <h5 className='m-0 text-sm text-primary sm:text-base'>
                {currentActivity.name}
              </h5>
              {currentActivity.details ? (
                <p className='m-0 text-sm font-thin'>
                  {currentActivity.details}
                </p>
              ) : null}
              {currentActivity.state ? (
                <p className='text-xs sm:text-sm md:text-base'>
                  {currentActivity.state}
                </p>
              ) : null}
            </div>
          </div>
        </li>
      ) : null}
    </>
  );
};

export default DiscordPresence;
