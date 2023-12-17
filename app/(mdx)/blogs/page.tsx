import { Link } from "@/components/ui/index";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs, Blog } from "contentlayer/generated";
import { Metadata } from "next/types";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/index";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function page() {
  const blogs = allBlogs.sort((a: any, b: any) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <div className='mx-auto max-w-[700px]'>
        <div className='flex flex-col gap-16 md:gap-24'>
          <div className='flex animate-in flex-col gap-8'>
            <div>
              <h1 className='animate-in text-3xl font-bold tracking-tight'>
                Blogs
              </h1>
              <p
                className='animate-in text-secondary'
                style={{ "--index": 1 } as React.CSSProperties}
              >
                Here are some of the blogs. I have written. I write about my
                experiences and things I have learned.
              </p>
            </div>
          </div>
          <ul
            className='animated-list flex animate-in flex-col'
            style={{ "--index": 3 } as React.CSSProperties}
          >
            {blogs.map((blog: Blog, idx: number) => (
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
                      src={blog.image}
                      alt={blog.title}
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
                      href={`/blog/${blog.slug}`}
                      className='animate-in text-lg font-medium text-primary hover:underline'
                    >
                      {blog.title}
                    </Link>
                    <time className='animate-in text-sm text-secondary'>
                      {" "}
                      {format(parseISO(blog.date), "LLLL d, yyyy")}
                    </time>
                  </div>

                  <p className='line-clamp-3 animate-in text-tertiary'>
                    {blog.description}
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
