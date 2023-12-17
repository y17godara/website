import React from "react";
import { Link } from "@/components/ui/index";
import Image from "next/image";
import { type experienceProps } from "./types/index";
import { cn } from "@/lib/utils";

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
}: experienceProps) {
  const content = (
    <>
      <div
        aria-label={ariaLabel}
        className={cn("flex h-full w-full items-center gap-4", className)}
      >
        <div className='flex items-center rounded-full border border-primary shadow-sm transition-opacity'>
          <Image
            src={logo}
            alt={label}
            height={50}
            width={50}
            className='rounded-full'
          />
        </div>
        <div className='flex-1'>
          <div className='flex flex-col'>
            <h2 className='text-sm font-bold' title={title}>
              {title}
            </h2>
            <p
              className='text-start text-xs font-normal text-secondary'
              title={description}
            >
              {description}
            </p>
          </div>
        </div>
        <div>
          <div className='flex flex-row gap-1'>
            <h3 className='text-xs font-semibold'>Role:</h3>
            <p className='text-xs font-normal'>{role}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className='text-xs font-semibold'>Duration:</h3>
            <p className='text-xs font-normal'>
              {joined.month} {joined.year} - {to.month} {to.year}
            </p>
          </div>
          <div className='flex flex-row gap-1'>
            <h3 className='text-xs font-semibold'>Location:</h3>
            <p className='text-xs font-normal'>{location} </p>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <>
      {href ? (
        <Link
          href={href}
          target
          aria-label={ariaLabel}
          title={title}
          className='inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity'
        >
          {content}
        </Link>
      ) : (
        content
      )}
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
      <ul className='animated-list flex flex-col-reverse gap-2 sm:gap-4'>
        {experience.map(Experience)}
      </ul>
    </>
  );
}
