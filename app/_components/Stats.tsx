"use client";
import React, { useEffect, useState, useMemo } from "react";
import { GoGitBranch } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { LuSignalHigh } from "react-icons/lu";
import axios from "axios";
import { cn } from "@/lib/utils";

interface GithubStats {
  totalContributions?: number;
}

export const Stats = () => {
  const [githubStats, setGithubStats] = useState<GithubStats>({});
  const [blogsStats, setBlogsStats] = useState<number>(0);
  const [githubStars, setGithubStars] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [githubResponse, blogsResponse, starsResponse] =
          await Promise.all([
            axios.get("/api/stats"),
            axios.get("/api/views/totalViews"),
            axios.get("/api/github/stars?username=y17godara"),
          ]);

        if (githubResponse.data.github) {
          setGithubStats(githubResponse.data.github);
        }

        if (blogsResponse.data.total_views) {
          setBlogsStats(blogsResponse.data.total_views);
        }

        if (starsResponse.data.stars) {
          setGithubStars(starsResponse.data.stars);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const githubStatsElement = useMemo(
    () => (
      <div className='flex items-center gap-3 no-underline'>
        <GoGitBranch className='text-xl' />
        <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
          {githubStats.totalContributions ?? "0"}
          <span>Github Contributions</span>
        </div>
      </div>
    ),
    [githubStats.totalContributions]
  );

  const githubStarsElement = useMemo(
    () => (
      <div className='flex items-center gap-3 no-underline'>
        <CiStar className='text-xl' />
        <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
          {githubStars ?? "0"}
          <span> Github Stars</span>
        </div>
      </div>
    ),
    [githubStars]
  );

  const blogsStatsElement = useMemo(
    () => (
      <div className='flex items-center gap-3'>
        <LuSignalHigh className='h-5 w-5' />
        <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
          {blogsStats ?? "0"}
          <span> Total Blog Views</span>
        </div>
      </div>
    ),
    [blogsStats]
  );

  return (
    <ul className={cn("animated-list space-y-2")}>
      <li className='transition-opacity'>{githubStatsElement}</li>
      <li className='transition-opacity'>{githubStarsElement}</li>
      <li className='transition-opacity'>{blogsStatsElement}</li>
    </ul>
  );
};
