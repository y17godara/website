"use client";
import React from "react";
import { GoGitBranch } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { LuSignalHigh } from "react-icons/lu";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Link } from "@/components/ui/Link";

interface GithubStats {
  totalContributions?: number;
  firstContribution?: string;
  longestStreak?: {
    start: string;
    end: string;
    length: number;
  };
  currentStreak?: {
    start: string;
    end: string;
    length: number;
  };
  excludedDays?: string[];
}

export const Stats = () => {
  const [githubStats, setGithubStats] = React.useState<GithubStats>({
    totalContributions: 0,
  });

  const [blogsStats, setBlogsStats] = React.useState({
    totalViews: 0,
  });

  const [githubStars, setGithubStars] = React.useState(0);

  React.useEffect(() => {
    axios.get("/api/stats").then((response) => {
      // only keep the stats we need
      setGithubStats(response.data.github);
    });
  }, []);

  return (
    <>
      <ul className={cn("animated-list space-y-2")}>
        <li className='transition-opacity'>
          <Link
            className='flex items-center gap-3 no-underline'
            href={"https://github.com/brianruizy"}
          >
            <GoGitBranch className='text-xl' />
            <div
              className='
              flex flex-row
              gap-2
              text-sm
              text-secondary
              md:text-base
            '
            >
              {githubStats ? githubStats.totalContributions : "000"}

              <span>Github Contributions</span>
            </div>
          </Link>
        </li>
        <li className='transition-opacity'>
          <Link
            className='flex items-center gap-3 no-underline'
            href={"https://www.youtube.com/@"}
          >
            <CiStar className='text-xl' />
            <div
              className='
              flex flex-row
              gap-2
              text-sm
              text-secondary
              md:text-base
            '
            >
              {githubStars ? githubStars : "0"}
              <span> Github Stars</span>
            </div>
          </Link>
        </li>
        <li className='transition-opacity'>
          <Link className='flex items-center gap-3' href='/blogs'>
            <LuSignalHigh className='h-5 w-5' />
            <div
              className='
             flex flex-row
             gap-2
             text-sm
             text-secondary
             md:text-base
           '
            >
              {blogsStats ? blogsStats.totalViews : "0"}
              <span> Total Blog Views</span>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};
