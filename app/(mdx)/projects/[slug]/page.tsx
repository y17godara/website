import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  allProjects as allPosts,
  Project as Post,
} from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

function PostCard(post: Post) {
  const Content = getMDXComponent(post.body.code);

  return (
    <div className='mb-8'>
      <h2 className='text-xl'>
        <Link
          href={post.slug}
          className='text-blue-700 hover:text-blue-900'
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.time} className='mb-2 block text-xs text-gray-600'>
        {format(parseISO(post.time), "LLLL d, yyyy")}
      </time>
      <div className='text-sm'>
        <Content />
      </div>
    </div>
  );
}

// app router param
export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post.slug }));

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    if (!post) {
      notFound();
    }
  }

  return { title: post.title };
};

export default function Home({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <div className='mx-auto max-w-xl py-8'>
      <div className='mb-8 text-center'>Working</div>
      <article className='mx-auto max-w-xl py-8'>
        <div className='mb-8 text-center'>
          <time dateTime={post.time} className='mb-1 text-xs text-gray-600'>
            {format(parseISO(post.time), "LLLL d, yyyy")}
          </time>
          <h1>{post.title}</h1>
        </div>
        <Content />
      </article>
    </div>
  );
}
