import { Link } from "@/components/ui/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page not found",
  description:
    "Uh oh! This page does not exist, maybe you clicked an old link or misspelled. Please try again…",
};

const Custom404 = (): JSX.Element => (
  <main
    className={
      "mx-auto mt-10 min-h-[60vh] max-w-[700px] px-4 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20"
    }
  >
    <div className='flex flex-col gap-2'>
      <h1>404 - Page not found</h1>
      <p className='text-secondary'>
        Uh oh! This page does not exists, maybe you clicked an old link or
        misspelled. Please try again…
      </p>
      <div className='h-2' />
      <Link href='/' className='hover:underline'>
        Return home
      </Link>
    </div>
  </main>
);

export default Custom404;
