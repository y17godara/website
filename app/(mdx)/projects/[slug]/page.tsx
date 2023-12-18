import { format, parseISO } from "date-fns";
import {
  allProjects as allPosts,
  Project as Post,
} from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  allPosts.map((post: any) => ({ slug: post.slug, key: post.slug }));

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find((post: Post) => post.slug === params.slug);

  if (!post) {
    if (!post) {
      notFound();
    }
  }

  return { title: post.title };
};

export default function Home({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post.slug === params.slug);

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
