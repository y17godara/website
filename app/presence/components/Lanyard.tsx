"use client";

// Thanks to Tim (https://github.com/timcole) & Antoinek.fr (https://github.com/AntoineKM)
import { FC, useEffect, useMemo, useState, Suspense } from "react";
import DiscordPresence from "./Presence";
import type { Presence } from "@/types/lanyard";
import { DiscordStatus } from "./Status";

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
          active_on_discord_desktop: (d as Presence).active_on_discord_desktop,
          active_on_discord_web: (d as Presence).active_on_discord_web,
          active_on_discord_mobile: (d as Presence).active_on_discord_mobile,
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

  if (!doing) return <section>{null}</section>;

  if (doing?.discord_status === "offline")
    return (
      <>
        <section>
          <DiscordStatus status='offline' />
        </section>
      </>
    );

  return (
    <>
      <section>
        <DiscordStatus status={doing?.discord_status || "offline"} />
        <Suspense fallback={<section></section>}>
          <DiscordPresence doing={doing} />
        </Suspense>
      </section>
    </>
  );
};

export default Lanyard;
