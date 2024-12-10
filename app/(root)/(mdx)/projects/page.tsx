import { Link } from "@/components/ui/index";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import { Metadata } from "next/types";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/index";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tech Projects by Yash Godara | Socials @y17godara",
  description:
    "Explore a showcase of projects I've worked on, highlighting my experience in Software Development Engineering, and creative solutions.",
  keywords: [
    "web development projects",
    "software engineering portfolio",
    "frontend development",
    "backend development",
    "Yash Godara projects",
    "programming solutions",
    "portfolio showcase",
    "y-g.tech projects",
  ],
  alternates: {
    canonical: "https://www.y-g.tech/projects",
    languages: {
      "x-default": "https://www.y-g.tech/projects",
      en: "https://www.y-g.tech/projects",
    },
  },
  openGraph: {
    title: "Tech Projects by Yash Godara | Socials @y17godara",
    description: "Explore a collection of projects by Yash Godara.",
    url: `/projects`,
    siteName: "Yash Godara",
    images: [
      {
        url: "https://www.y-g.tech/assets/logo/opengraph-image.png",
        width: 1200,
        height: 900,
        alt: "Yash Godara",
      },
    ],
  },
};

export default function page() {
  const projects = allProjects.sort((a: any, b: any) =>
    compareDesc(parseISO(a.time!), parseISO(b.time!))
  );
  const generateJSONLD = () => {
    const jsonLdData = {
      "@context": "http://schema.org",
      "@type": "CollectionPage",
      name: "Projects",
      url: "https://www.y-g.tech/projects",
      description:
        "Explore a showcase of projects I've worked on, highlighting my experience in web development, software engineering, and creative solutions. Dive into the details of each project to see my work in action.",
      keywords: [
        "web development projects",
        "software engineering portfolio",
        "Yash Godara projects",
        "frontend development",
        "backend development",
        "creative programming solutions",
        "portfolio showcase",
        "y-g.tech projects",
      ],
      publisher: {
        "@type": "Organization",
        name: "y-g.tech",
        url: "https://www.y-g.tech",
        logo: {
          "@type": "ImageObject",
          url: "https://www.y-g.tech/assets/logo/logo.png",
          width: 100,
          height: 100,
        },
      },
      mainEntity: {
        "@type": "ItemList",
        name: "List of Projects",
        itemListElement: projects.map((project, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `https://www.y-g.tech/projects/${project.slug}`,
          name: project.title,
          image: project.featuredImage,
          datePublished: project.time,
          description: project.description,
        })),
      },
    };
    return JSON.stringify(jsonLdData);
  };

  const Content = () => {
    return (
      <>
        <div className='flex animate-in flex-col gap-8'>
          <Script
            id='post-json-ld'
            dangerouslySetInnerHTML={{
              __html: generateJSONLD(),
            }}
            type='application/ld+json'
          />
          <div>
            <h1 className='animate-in text-3xl font-bold tracking-tight'>
              Projects
            </h1>
            <h2
              className='animate-in text-secondary'
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Here are some of the projects I&apos;ve worked on.
            </h2>
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
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    quality={80}
                    sizes='(min-width: 768px) 50vw, 100vw'
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
                    <h2>{project.title}</h2>
                  </Link>
                  <time className='animate-in text-sm text-secondary'>
                    {" "}
                    {format(parseISO(project.time!), "LLLL d, yyyy")}
                  </time>
                </div>

                <h3 className='line-clamp-3 animate-in text-tertiary'>
                  {project.description}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className='mx-auto max-w-[700px]'>
        <div className='flex flex-col gap-16 md:gap-24'>
          {projects.length === 0 ? (
            <div className='flex animate-in flex-col gap-8'>
              <div>
                <h1 className='animate-in text-3xl font-bold tracking-tight'>
                  Projects
                </h1>
                <h2
                  className='animate-in text-secondary'
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  Oops , No projects listed yet. Check back soon! or visit my{" "}
                  Github{" "}
                  <Link
                    href='https://github.com/y17godara'
                    target
                    className='underline hover:text-primary'
                  >
                    here
                  </Link>
                </h2>
              </div>
            </div>
          ) : (
            <Content />
          )}
        </div>
      </div>
    </>
  );
}
