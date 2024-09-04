"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { experienceProps } from "./types";
import { motion, AnimatePresence } from "framer-motion";

function ExperienceMore({ more }: { more: experienceProps["more"] }) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleViewMore = () => {
    setOpen(!open);
  };

  return (
    <>
      {more?.slice(0, 1).map((more, index: number) => (
        <p
          key={more}
          className={cn(
            "w-full rounded-xl px-2 py-1 text-sm font-light text-primary",
            "cursor-pointer bg-gradient-to-r from-[var(--secondaryA)] to-transparent transition-all"
          )}
        >
          {more}
        </p>
      ))}
      {open && (
        <>
          {more?.slice(1).map((more, index: number) => (
            <p
              key={more}
              className={cn(
                "w-full rounded-xl px-2 py-1 text-sm font-light text-primary",
                "cursor-pointer bg-gradient-to-r from-[var(--secondaryA)] to-transparent transition-all"
              )}
            >
              {more}
            </p>
          ))}
        </>
      )}
      <button
        onClick={handleViewMore}
        className={cn(
          "w-fit rounded-xl px-2 py-1 text-sm font-light text-primary hover:underline",
          "cursor-pointer transition-all"
        )}
      >
        {open ? "View Less" : "View More"}
      </button>
    </>
  );
}

function ExperienceBadge({
  badge,
  badgeColor,
  badgeContent,
}: {
  badge: experienceProps["badge"];
  badgeColor: experienceProps["badgeColor"];
  badgeContent: experienceProps["badgeContent"];
}) {
  //   const [open, setOpen] = React.useState<boolean>(false);

  //   const containerRef = React.useRef<HTMLDivElement>(null);

  //   const handleViewMore = () => {
  //     setOpen(!open);
  //   };

  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (
  //       containerRef.current &&
  //       !containerRef.current.contains(e.target as Node)
  //     ) {
  //       setOpen(false);
  //     }
  //   };

  //   React.useEffect(() => {
  //     document.addEventListener("mousedown", handleClickOutside);

  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  return (
    <>
      <motion.button
        className={cn(
          "cursor-pointer rounded-full px-1.5 py-0.5 text-[10px] text-xs",
          badgeColor ? `${badgeColor}` : ""
        )}
        // onMouseEnter={() => setOpen(true)}
        // onMouseLeave={() => setOpen(false)}
      >
        {badge}
      </motion.button>
    </>
  );
}

export { ExperienceMore, ExperienceBadge };
