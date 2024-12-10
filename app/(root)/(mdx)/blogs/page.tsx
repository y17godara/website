import { Link } from "@/components/ui/index";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import { Metadata } from "next/types";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/index";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tech Blogs by Yash Godara | Socials @y17godara",
  description:
    "Explore a collection of insightful blogs covering various topics, including personal experiences, technology, and learning.",
  keywords: [
    "blogs",
    "tech blogs",
    "learning experiences",
    "personal insights",
    "technology",
    "programming",
  ],
  alternates: {
    canonical: "https://www.y-g.tech/blogs",
    languages: {
      "x-default": "https://www.y-g.tech/blogs",
      en: "https://www.y-g.tech/blogs",
    },
  },
  openGraph: {
    title: "Tech Blogs by Yash Godara | Socials @y17godara",
    description: "Explore a collection of insightful blogs by Yash Godara.",
    url: `/blogs`,
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
  const blogs = allBlogs.sort((a: any, b: any) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  const generateJSONLD = () => {
    const jsonLd = {
      "@context": "http://schema.org",
      "@type": "Blog",
      headline: "Blogs",
      description: metadata.description,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.y-g.tech/blogs",
      },
      blogPosts: blogs.map((blog) => ({
        "@type": "BlogPosting",
        headline: blog.title,
        url: `https://www.y-g.tech/blogs/${blog.slug}`,
        datePublished: blog.publishedAt,
        description: blog.description,
        image: blog.featuredImage,
        author: {
          "@type": "Person",
          name: "Yash Godara",
        },
      })),
      author: {
        "@type": "Person",
        name: "Yash Godara",
        url: "https://github.com/y17godara",
      },
      publisher: {
        "@type": "Organization",
        name: "y-g.tech",
        url: "https://www.y-g.tech",
        logo: {
          "@type": "ImageObject",
          url: "https://www.y-g.tech/assets/logo/logo.png",
        },
      },
    };

    return JSON.stringify(jsonLd, null, 2);
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
              Blogs
            </h1>
            <h2
              className='animate-in text-secondary'
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Here are some of the blogs. I have written. I write about my
              experiences and things I have learned.
            </h2>
          </div>
        </div>
        <ul
          className='animated-list flex animate-in flex-col'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {blogs.map((blog: Blog, idx: number) => {
            return (
              <>
                <li
                  key={idx}
                  className={cn(
                    "flex flex-col gap-4 py-6 transition-opacity first:pt-0 last:pb-0 md:flex-row md:gap-6"
                  )}
                >
                  {/* Image */}
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className='aspect-video w-full select-none overflow-clip rounded-lg border border-secondary bg-tertiary md:w-2/5'
                  >
                    <Spotlight strength={10}>
                      <Image
                        src={blog.featuredImage}
                        alt={blog.title}
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
                        href={`/blogs/${blog.slug}`}
                        className='animate-in text-lg font-medium text-primary hover:underline'
                      >
                        <h2>{blog.title}</h2>
                      </Link>
                      <time className='animate-in text-sm text-secondary'>
                        {" "}
                        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
                      </time>
                    </div>

                    <h3 className='line-clamp-3 animate-in text-tertiary'>
                      {blog.description}
                    </h3>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className='mx-auto max-w-[700px]'>
        <div className='flex flex-col gap-16 md:gap-24'>
          {blogs.length === 0 ? (
            <div className='flex animate-in flex-col gap-8'>
              <div>
                <h1 className='animate-in text-3xl font-bold tracking-tight'>
                  Blogs
                </h1>
                <p
                  className='animate-in text-secondary'
                  style={{ "--index": 1 } as React.CSSProperties}
                >
                  Sorry, no blogs found. Please check back later. or you can
                  check out my{" "}
                  <Link
                    href='/projects'
                    className='animate-in text-primary underline'
                  >
                    projects
                  </Link>
                </p>
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
