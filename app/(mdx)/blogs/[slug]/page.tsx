import { allBlogs as allPosts, Blog as Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { MdxWrapper } from "../../components";
import { Link } from "@/components/ui/index";
import Avatar from "@/app/icon.png";

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
          url: `/api/og?title=${title}`,
          alt: title,
        },
      ]
    },
  };

  return metadata;
}

export default function Home({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='flex flex-col gap-20'>
      <article className=''>
        <div
          className='flex animate-in flex-col gap-8'
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <div className='max-w-xl space-y-2'>
            <h1 className='text-3xl font-bold leading-tight tracking-tight text-primary'>
              {post.title}
            </h1>
            <p className='text-lg leading-tight text-secondary md:text-xl'>
              {post.description}
            </p>
          </div>

          <div className='flex max-w-none items-center gap-4'>
            <Image
              src={Avatar}
              width={40}
              height={40}
              alt='avatar'
              className='rounded-full bg-secondary'
            />
            <div className='leading-tight'>
              <p className='font-medium text-primary'>Yash Godara</p>
            </div>
          </div>
        </div>

        {post.image && (
          <>
            <div className='h-8' />
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

        <div className='h-16' />
        <div
          className='prose prose-neutral animate-in'
          style={{ "--index": 3 } as React.CSSProperties}
        >
          <MdxWrapper code={post.body.code} />
        </div>
      </article>

      <div
        className='flex animate-in flex-col gap-20'
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

        <Link href='/projects' className='text-primary underline'>
          ← All Blogs
        </Link>
      </div>
    </div>
  );
}
