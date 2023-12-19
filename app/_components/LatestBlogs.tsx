import { Link } from "@/components/ui";
import { FaLink } from "react-icons/fa";
import { Blog } from "contentlayer/generated";

type LatestBlogsProps = {
  blogs: Blog[];
};

export const LatestBlogs = ({ blogs }: LatestBlogsProps) => {
  return (
    <>
      <ul
        className='
        flex animate-in flex-col
        items-start
        justify-start
        gap-8
        text-start
        text-secondary
        md:gap-8
      '
      >
        {blogs.map((blog: Blog, index: number) => (
          <li className='flex flex-row gap-2 text-sm' key={index}>
            <Link
              target
              className='underline-offset-4 hover:underline'
              href={`/blogs/${blog.slug}`}
            >
              {blog.title}
              <FaLink className='inline-block h-5 w-5 p-1' />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
