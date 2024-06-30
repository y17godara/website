import React from "react";
import { Link } from "@/components/ui/index";
import Image from "next/image";
import { type experienceProps } from "./types/index";
import { cn } from "@/lib/utils";
import { ExperienceMore, ExperienceBadge } from "./Experience.Client";

export function Experience({
  href,
  label,
  ariaLabel,
  title,
  description,
  role,
  logo,
  className,
  location,
  joined,
  to,
  tags,
  more,
  badge,
  badgeColor,
  badgeContent,
}: experienceProps) {
  const content = (
    <>
      <div
        key={title}
        aria-label={ariaLabel}
        className={cn("flex h-full w-full items-center gap-4", className)}
      >
        <div className='flex w-full flex-col gap-2'>
          <div className='flex w-full flex-row items-center justify-between gap-2'>
            <p className='text-xs font-light text-primary'>{location}</p>
            <p className='text-xs font-light text-primary'>
              {/* Month Short Year Numberical */}
              {joined.toLocaleString("default", {
                month: "short",
                year: "numeric",
              })}
              {" " +
                " - " +
                to.toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                }) || "Present"}
            </p>
          </div>
          <div className='md:items-between flex w-full flex-col items-start justify-start gap-2 md:flex-row md:justify-between'>
            <h1>
              <span className='text-lg font-bold'>{title}</span> at{" "}
              {href ? (
                <Link
                  href={href}
                  className='text-lg text-primary underline hover:cursor-pointer'
                  target={true}
                  title={ariaLabel}
                >
                  {label}
                </Link>
              ) : (
                <span className='text-lg text-primary'>{label}</span>
              )}
            </h1>
            <ExperienceBadge
              badge={badge}
              badgeColor={badgeColor}
              badgeContent={badgeContent}
            />
          </div>
          <div className='flex w-full flex-col gap-2'>
            {description.map((desc, index) => (
              <p
                key={index}
                className='text-sm font-light text-primary'
                title={desc}
              >
                {desc}
              </p>
            ))}

            <div className='mt-2 flex w-full flex-row flex-wrap items-center justify-start gap-1'>
              {tags?.map((tag, index) => (
                <button
                  key={index}
                  className='rounded-full bg-secondaryA px-1.5 py-0.5 text-[10px] text-xs font-light text-primary'
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className='mt-2 flex w-full flex-col items-center justify-start gap-2'>
              {more && more.length > 0 ? (
                <>
                  {more?.length > 1 ? (
                    <ExperienceMore more={more} />
                  ) : (
                    <p
                      className={cn(
                        "w-full rounded-xl px-2 py-1 text-sm font-light text-primary",
                        "cursor-pointer bg-gradient-to-r from-[var(--secondaryA)] to-transparent transition-all"
                      )}
                    >
                      {more}
                    </p>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      <li
        className='inline-grid w-full rounded-lg border border-primary bg-secondary p-4 no-underline transition-opacity'
        key={title}
      >
        {content}
      </li>
    </>
  );
}

export function WorkExperience({
  experience,
}: {
  experience: experienceProps[];
}) {
  return (
    <>
      <ul className='animated-list grid grid-cols-1 gap-2 sm:gap-4'>
        {experience.map(Experience)}
      </ul>
    </>
  );
}
