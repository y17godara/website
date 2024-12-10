import { Link } from "@/components/ui";
import {
  allProjects as allPosts,
  Project as Post,
} from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxWrapper } from "../../components";
import { Metadata, ResolvingMetadata } from "next";
import Script from "next/script";

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
    title: `${title} | Projects`,
    description: post.description,
    keywords: [...post.tags],
    alternates: {
      canonical: "https://www.y-g.tech/projects",
      languages: {
        "x-default": "https://www.y-g.tech/projects",
        en: "https://www.y-g.tech/projects",
      },
    },
    openGraph: {
      title,
      description: post.description,
      url: `/projects/${post.slug}`,
      siteName: "Yash Godara",
      type: "article",
      images: [
        {
          url: `https://www.y-g.tech${post.featuredImage}`,
          width: 1200,
          height: 900,
          alt: title,
        },
      ],
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
      <Script
        id='post-json-ld'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post?.jsonLd || {}),
        }}
        type='application/ld+json'
      />
      <article className='prose dark:prose-invert lg:prose-lg'>
        <div className='flex animate-in flex-col gap-3'>
          <div className='flex items-center gap-3 text-secondary'>
            <p>{post.time}</p>
            {post.url && (
              <>
                <span>&middot;</span>
                <Link
                  href={post.url}
                  target
                  className='underline hover:text-primary'
                >
                  Visit Project
                </Link>
              </>
            )}
          </div>
          <h1 className='text-3xl font-bold leading-tight tracking-tight text-primary'>
            {post.title}
          </h1>
          <p
            className='animate-in text-lg leading-tight text-secondary md:text-xl'
            style={{ "--index": 1 } as React.CSSProperties}
          >
            {post.description}
          </p>
        </div>

        <div className='h-12' />
        <div
          className='project prose-white animate-in'
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
            Need more project details, have any doubts in mind, or interested in
            working together? Reach out to me directly at{" "}
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
          ← All Projects
        </Link>
      </div>

      <div />
    </div>
  );
}
