"use client";

// Thanks to Tim (https://github.com/timcole) & Antoinek.fr (https://github.com/AntoineKM)
import { FC, useEffect, useMemo, useState } from "react";
import type { Presence } from "@/types/lanyard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SpotifyLogo from "/assets/logo/spotify-logo.svg";
import Progress from "./Progress";
import Image from "next/image";
import { id } from "date-fns/locale";

const StatusMap = {
  dnd: "hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)",
  online: "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)",
  idle: "hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)",
  offline: "hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)",
};

enum Operation {
  Event,
  Hello,
  Initialize,
  Heartbeat,
}

enum EventType {
  INIT_STATE = "INIT_STATE",
  PRESENCE_UPDATE = "PRESENCE_UPDATE",
}

type SocketEvent = {
  op: Operation;
  t: EventType;
  d: Presence | unknown;
};

const USERID = "526972062741299211";

const logLanyardEvent = (eventName: string, data: Presence | unknown) => {
  console.log(
    `%cLanyard%c <~ ${eventName}`,
    "background-color: #8b0d0d; border-radius: 5px; padding: 3px; color: white; font-weight: bold;",
    "background: none; color: white; border-radius: 5px; padding: 2px;",
    {
      data,
    }
  );
};

const Lanyard: FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(
    () => new WebSocket("wss://api.lanyard.rest/socket")
  );
  const [doing, setDoing] = useState<Presence>();
  const [progress, setProgress] = useState<number>(0);

  const vsCode = useMemo(
    () =>
      doing?.activities.find(
        ({ application_id }) => application_id === "383226320970055681"
      ),

    [doing]
  );

  useEffect(() => {
    const send = (op: Operation, d?: unknown): void => {
      if (socket !== null) socket.send(JSON.stringify({ op, d }));
    };

    if (socket === null) return () => {};
    socket.onmessage = function ({ data }: MessageEvent): void {
      const { op, t, d }: SocketEvent = JSON.parse(data);

      if (op === Operation.Hello) {
        setInterval(
          () => send(Operation.Heartbeat),
          (d as { heartbeat_interval: number }).heartbeat_interval
        );
        send(Operation.Initialize, { subscribe_to_id: USERID });
      } else if (op === Operation.Event) {
        logLanyardEvent(t, {
          active_on_discord_mobile: (d as Presence).active_on_discord_mobile,
          active_on_discord_desktop: (d as Presence).active_on_discord_desktop,
          discord_user: {
            id: (d as Presence).discord_user.id,
            username: (d as Presence).discord_user.username,
            avatar: (d as Presence).discord_user.avatar,
          },
          listening_to_spotify: (d as Presence).listening_to_spotify,
          spotify: (d as Presence).spotify,
          activities: (d as Presence).activities,
        });
        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t)) {
          setDoing(d as Presence);
        }
      }
    };

    socket.onclose = () => {
      setSocket(null);
    };
  }, [socket, setDoing]);

  useEffect(() => {
    if (!doing?.spotify) {
      document.getElementsByTagName("html")[0].setAttribute("data-artist", "");
      return;
    }

    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-artist", doing.spotify.artist);

    const progressUpdate = setInterval(() => {
      const total =
        doing.spotify!.timestamps.end! - doing.spotify!.timestamps.start;
      setProgress(
        100 -
          (100 * (doing.spotify!.timestamps.end! - new Date().getTime())) /
            total
      );
    }, 250);

    return () => clearInterval(progressUpdate);
  }, [doing]);

  if (!doing || (!vsCode && !doing.spotify)) return <section></section>;
  return (
    <>
      <section className='relative flex'>
        <DisplayPresence doing={doing} />
      </section>
    </>
  );
};

const DisplayPresence = (Presence: any) => {
  const doing = Presence.doing;
  const currentDate: any = new Date();
  const currentActivity = useMemo(
    () => doing?.activities.find((activity: any) => activity.type === 0),
    [doing]
  );

  useEffect(() => {
    // console.log("currentActivity", { currentActivity });
    // console.log("doing", { doing });
  }, [Presence]);
  return (
    <>
      {doing?.listening_to_spotify ? (
        <Link
          className={cn(
            "w-full cursor-pointer rounded-md border-[1px] border-secondary bg-transparent p-[1rem] text-secondary transition-colors duration-200 ease-in-out hover:bg-secondary hover:text-primary"
          )}
          href={"/presence"}
        >
          <h5 className='flex flex-row items-center justify-center gap-1 text-center'>
            Listening to Spotify
            <div className='inline-block h-2 w-2 animate-pulse rounded-full bg-[var(--brand)]'></div>
          </h5>
          <>
            {/* Row */}
            <div className={cn("flex flex-row items-center")}>
              {/* ImageContainer */}
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
            <Progress
              percentage={
                (100 * (currentDate - doing.spotify.timestamps.start)) /
                (doing.spotify.timestamps.end - doing.spotify.timestamps.start)
              }
            />
          </>
        </Link>
      ) : null}
      {/* {currentActivity ? (
          <Container href={"/presence"} {...props}>
            <h5>{"Doing something"}</h5>
            <ActivityRow>
              {currentActivity.assets ? (
                <ActivityImageContainer>
                  <ActivityImage
                    src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
                  />
                  <ActivitySecondaryImage
                    src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
                  />
                </ActivityImageContainer>
              ) : null}
              <ActivityInfo>
                <h5>{currentActivity.name}</h5>
                {currentActivity.details ? (
                  <p>{currentActivity.details}</p>
                ) : null}
                {currentActivity.state ? <p>{currentActivity.state}</p> : null}
              </ActivityInfo>
            </ActivityRow>
          </Container>
        ) : null} */}
    </>
  );
};

export default Lanyard;
