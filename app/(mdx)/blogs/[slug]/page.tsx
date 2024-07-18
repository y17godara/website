import { allBlogs as allPosts, Blog as Post } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { MdxWrapper } from "../../components";
import { Link } from "@/components/ui/index";
import Avatar from "@/app/icon.png";
import { ViewCounter, LoveCounter } from "../../components/ui/index";
import { cookies } from "next/headers";

type Props = {
  params: {
    slug: string;
  };
  searchParams: URLSearchParams;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parents: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find((post: Post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  const { title } = post;
  const metadata: Metadata = {
    title: `${title} | Blogs`,
    description: post.description,
    openGraph: {
      title,
      description: post.description,
      type: "article",
      images: [
        {
          url: post.image,
          alt: title,
        },
      ],
    },
  };

  return metadata;
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const loveCookie = cookies().has(`love-${params.slug}`);

  return (
    <div className='flex flex-col gap-20'>
      <div
        className='flex animate-in flex-col gap-8'
        style={{ "--index": 1 } as React.CSSProperties}
      >
        {/*
        {post.image && (
          <>
            <Image
              src={post.featuredImage}
              alt={`${post.title} post image`}
              width={700}
              height={350}
              className='-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]'
              style={{ "--index": 2 } as React.CSSProperties}
              priority
              quality={100}
            />
          </>
        )}
        */}

        <div
          className='flex max-w-3xl animate-in flex-col gap-4'
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <div className='flex w-full flex-col'>
            <h1 className='w-full text-3xl font-bold leading-tight tracking-tight text-primary'>
              {post.title}
            </h1>
          </div>

          <div className='flex flex-col gap-1.5'>
            <div
              className='flex flex-col gap-4 overflow-hidden rounded-lg border border-secondary'
              style={{ "--index": 3 } as React.CSSProperties}
            >
              {post.image && (
                <>
                  <Image
                    src={post.featuredImage}
                    alt={`${post.title} post image`}
                    width={700}
                    height={350}
                    className='-ml-6 w-[calc(100%+48px)] max-w-none animate-in md:rounded-lg lg:-ml-16 lg:w-[calc(100%+128px)]'
                    priority
                    quality={100}
                  />
                </>
              )}
            </div>
            <div className='flex w-full flex-col items-end gap-0.5 text-secondary'>
              <h5 className='text-xs text-secondary'>
                Last updated on {new Date(post.updatedAt).toDateString()}
              </h5>
            </div>
          </div>

          <p className='text-base leading-tight text-secondary md:text-lg'>
            {post.description}
          </p>

          <div
            className='flex flex-col items-start justify-start gap-4 md:flex-row md:items-center md:justify-between'
            style={{ "--index": 4 } as React.CSSProperties}
          >
            <div className='flex max-w-none items-center gap-2 sm:gap-4'>
              <Image
                src={Avatar}
                width={40}
                height={40}
                alt='avatar'
                className='rounded-full bg-secondary'
              />
              <div className='leading-tight'>
                <p className='font-medium text-primary'>Yash Godara</p>
                <div className='flex flex-row items-center gap-2 leading-tight text-secondary'>
                  <ViewCounter post={post as Post} />
                  <LoveCounter post={post as Post} loveCookie={loveCookie} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article
        className='blog prose-white prose animate-in dark:prose-invert lg:prose-lg'
        style={{ "--index": 5 } as React.CSSProperties}
      >
        <MdxWrapper code={post.body.code} />
      </article>

      <div
        className='flex animate-in flex-col gap-5 md:gap-10 lg:gap-16'
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <div className='flex flex-col gap-6'>
          <h2>#Tags</h2>
          <div className='flex flex-wrap gap-3 '>
            {post.tags.map((tag: string) => (
              <div
                key={tag}
                className='whitespace-nowrap rounded-lg bg-secondary px-4 py-1.5 text-sm text-secondary'
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h2>Contact</h2>
          <p className='max-w-lg text-secondary'>
            Need more details, have any doubts in mind, or interested in working
            together? Reach out to me directly at{" "}
            <a
              href='mailto:contact@yash17godara@gmail.com'
              className='text-primary underline'
            >
              yash17godara@gmail.com
            </a>
            . I&apos;d be happy to connect and talk!{" "}
          </p>
        </div>

        <Link href='/blogs' className='text-primary underline'>
          ← All Blogs
        </Link>
      </div>
    </div>
  );
}
