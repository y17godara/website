interface DiscordStatus {
  [key: string]: string;
}

const StatusMap: DiscordStatus = {
  dnd: "hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)",
  online: "hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)",
  idle: "hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%)",
  offline: "hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)",
};

export const DiscordStatus = ({
  status,
}: {
  status: "dnd" | "online" | "idle" | "offline";
}) => {
  return (
    <div className='flex w-full flex-col items-center gap-2 '>
      <div
        className='flex w-full items-center justify-center gap-x-2 rounded-md p-3 text-center text-sm text-[var(--brand)]'
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <p className='text-lg text-secondary hover:text-primary'>
          <span
            className='inline-block h-2 w-2 rounded-full'
            style={{ backgroundColor: StatusMap[status] }}
          ></span>{" "}
          {status}
        </p>
      </div>
    </div>
  );
};
