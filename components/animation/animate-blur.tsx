import AnimateIn from "./animate-in";

export const AnimateBlur = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <AnimateIn
      from='opacity-0 blur-lg'
      to='opacity-100 blur-none'
      className={className ?? ""}
    >
      {children}
    </AnimateIn>
  );
};
