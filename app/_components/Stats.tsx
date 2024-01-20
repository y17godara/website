"use client";

import useSWR from "swr";
import { GoGitBranch } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { LuSignalHigh } from "react-icons/lu";

import { fetcher, cn } from "@/lib/utils";
import { is } from "date-fns/locale";

export const Stats = () => {
  const { data, error, isLoading } = useSWR("/api/stats", fetcher);

  const { Stars, Contributions, Views } = {
    Stars: data?.Stars,
    Contributions: data?.Contributions,
    Views: data?.Views,
  };

  return (
    <ul className={cn("animated-list space-y-2")}>
      <li className='transition-opacity'>
        <div className='flex items-center gap-3 no-underline'>
          <GoGitBranch className='text-xl' />
          <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
            {isLoading ? "Loading" : error ? "Error" : Contributions}
            <span>Github Commits</span>
          </div>
        </div>
      </li>
      <li className='transition-opacity'>
        <div className='flex items-center gap-3 no-underline'>
          <CiStar className='text-xl' />
          <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
            {isLoading ? "Loading" : error ? "Error" : Stars}
            <span> Github Stars</span>
          </div>
        </div>
      </li>
      <li className='transition-opacity'>
        <div className='flex items-center gap-3'>
          <LuSignalHigh className='h-5 w-5' />
          <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
            {isLoading ? "Loading" : error ? "Error" : Views}
            <span> Total Blog Views</span>
          </div>
        </div>
      </li>
    </ul>
  );
};
