import { Link } from "@/components/ui/index";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import { Metadata } from "next/types";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/index";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
};

export default function page() {
  const projects = allProjects.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className='mx-auto max-w-[700px]'>
        <div className='flex flex-col gap-16 md:gap-24'>
          <div className='flex animate-in flex-col gap-8'>
            <div>
              <h1 className='animate-in text-3xl font-bold tracking-tight'>
                Projects
              </h1>
              <p
                className='animate-in text-secondary'
                style={{ "--index": 1 } as React.CSSProperties}
              >
                Here are some of the projects I&apos;ve worked on.
              </p>
            </div>
          </div>
          <ul
            className='animated-list flex animate-in flex-col'
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {projects.map((project: Project, idx: number) => (
              <li
                key={idx}
                className={cn(
                  "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6"
                )}
              >
                {/* Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className='aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5'
                >
                  <Spotlight strength={10}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout='fill'
                      objectFit='cover'
                      quality={80}
                      loading='lazy'
                      className='h-full w-full '
                    />
                  </Spotlight>
                </Link>
                {/* Content */}
                <div className='w-full animate-in space-y-2 md:w-3/5'>
                  <div className='flex flex-col gap-1'>
                    <Link
                      href={`/projects/${project.slug}`}
                      className='animate-in text-lg font-medium text-primary hover:underline'
                    >
                      {project.title}
                    </Link>
                    <time className='animate-in text-sm text-secondary'>
                      {" "}
                      {format(parseISO(project.time), "LLLL d, yyyy")}
                    </time>
                  </div>

                  <p className='line-clamp-3 animate-in text-tertiary'>
                    {project.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
