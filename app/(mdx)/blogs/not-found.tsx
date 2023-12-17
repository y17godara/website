import { Link } from "@/components/ui/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Blog not found",
  description:
    "Uh oh! This page does not exist, maybe you clicked an old link or misspelled. Please try again…",
};

const Custom404 = (): JSX.Element => (
  <div className='flex flex-col gap-2'>
    <h1>404 - Blog not found</h1>
    <p className='text-secondary'>
      Uh oh! This page does not exists, maybe you clicked an old link or
      misspelled. Please try again…
    </p>
    <div className='h-2' />
    <Link href='/Blog' className='hover:underline'>
      All Blogs
    </Link>
  </div>
);

export default Custom404;
