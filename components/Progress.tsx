import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Progress = ({
  percentage,
  theme,
}: {
  percentage: number;
  theme?: "brand" | "secondary" | "primary" | "tertiary";
}) => {
  return (
    <div className='mt-2.5 h-[5px] w-full overflow-hidden rounded-md border border-secondary md:h-[6px] lg:h-[8px]'>
      <motion.div
        className={cn(
          `h-[5px] w-full -translate-x-full transition-all duration-100 ease-in-out md:h-[6px] lg:h-[8px]`,
          {
            "bg-[var(--brand)]": theme === "brand",
            "bg-[var(--secondary)]": theme === "secondary",
            "bg-[var(--primary)]": theme === "primary",
            "bg-[var(--tertiary)]": theme === "tertiary",
          }
        )}
        initial={false}
        transition={{ ease: "easeOut", duration: 1 }}
        animate={{ x: `${percentage - 100}%` }}
      />
    </div>
  );
};

export default Progress;
