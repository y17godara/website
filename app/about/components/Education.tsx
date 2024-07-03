import { type educationProps } from "./types/index";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Link } from "@/components/ui/Link";

export function Edu({
  title,
  course,
  majors,
  cgpa,
  certification,
  verification,
  description,
  joined,
  to,
  location,
  className,
  ariaLabel,
}: educationProps) {
  const content = (
    <>
      <div
        key={title}
        aria-label={ariaLabel}
        className={cn("flex h-full w-full items-center gap-4", className)}
      >
        <div className='flex-1'>
          <div className='flex flex-col gap-1'>
            <h2 className='text-sm font-bold text-secondary' title={title}>
              {title}
            </h2>
            <h4 className='text-md text-start font-normal text-primary'>
              {course}{" "}
            </h4>
            <p
              className='text-start text-xs font-normal text-secondary'
              title={description}
            >
              {description}
            </p>
            <p>
              <span className='text-xs font-semibold'>Majors: </span>
              <span className='text-xs font-normal'>{majors.join(", ")}</span>
            </p>
          </div>
        </div>
        {certification ? (
          <>
            <div className='hidden flex-col gap-y-4 sm:flex'>
              <Link
                href={verification}
                target
                className='flex flex-col gap-y-4'
              >
                <Image
                  src={certification}
                  alt={title}
                  width={80}
                  height={80}
                  quality={80}
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL={"https://bit.ly/placeholder-image"}
                  style={{ width: "auto", height: "auto" }}
                  className='rounded-lg'
                />
              </Link>
              <div>
                <h3 className='text-xs font-semibold'>Duration:</h3>
                <p className='text-xs font-normal'>
                  {joined.month} {joined.year} - {to.month} {to.year}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className='flex flex-row gap-1'>
                {cgpa ? (
                  <>
                    <h3 className='text-xs font-semibold'>CGPA</h3>
                    <p className='text-xs font-normal'>{cgpa}</p>
                  </>
                ) : null}
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
            </div>{" "}
          </>
        )}
      </div>
    </>
  );

  return (
    <li key={title}>
      <div
        aria-label={ariaLabel}
        title={title}
        className='inline-grid w-full rounded-lg border border-primary bg-secondaryA p-4 no-underline transition-opacity'
      >
        {content}
      </div>
    </li>
  );
}

export function Education({ education }: { education: educationProps[] }) {
  return (
    <>
      <ul className='animated-list grid flex-grow grid-cols-1 gap-2'>
        {education.map(Edu)}
      </ul>
    </>
  );
}
