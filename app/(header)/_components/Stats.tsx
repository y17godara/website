import { GoGitBranch } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { LuSignalHigh } from "react-icons/lu";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { getStars, getContributions, getViews } from "@/actions/get-stats";

const Loading = ({
  className,
  color = "currentColor",
  width = "24",
  height = "24",
}: {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <>
      <svg
        className={className}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width={width}
        color={color}
        height={height}
      >
        <circle fill={color} transform='translate(8 0)' cx='0' cy='16' r='0'>
          <animate
            attributeName='r'
            values='0; 4; 0; 0'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0'
            keyTimes='0;0.2;0.7;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8'
            calcMode='spline'
          />
        </circle>
        <circle fill={color} transform='translate(16 0)' cx='0' cy='16' r='0'>
          <animate
            attributeName='r'
            values='0; 4; 0; 0'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0.3'
            keyTimes='0;0.2;0.7;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8'
            calcMode='spline'
          />
        </circle>
        <circle fill={color} transform='translate(24 0)' cx='0' cy='16' r='0'>
          <animate
            attributeName='r'
            values='0; 4; 0; 0'
            dur='1.2s'
            repeatCount='indefinite'
            begin='0.6'
            keyTimes='0;0.2;0.7;1'
            keySplines='0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8'
            calcMode='spline'
          />
        </circle>
      </svg>
    </>
  );
};

export const Stats = async () => {
  const stars = await getStars();
  const contributions = await getContributions();
  const views = await getViews();

  return (
    <ul className={cn("animated-list space-y-2")}>
      <li className='transition-opacity'>
        <div className='flex items-center gap-3 no-underline'>
          <GoGitBranch className='text-xl' />
          <div className='flex flex-row items-center gap-2 text-sm text-secondary md:text-base'>
            <span>{contributions}</span>
            <span>Github Commits</span>
          </div>
        </div>
      </li>
      <li className='transition-opacity'>
        <div className='flex items-center gap-3 no-underline'>
          <CiStar className='text-xl' />
          <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
            <span>{stars}</span>
            <span> Github Stars</span>
          </div>
        </div>
      </li>
      <li className='transition-opacity'>
        <div className='flex items-center gap-3'>
          <LuSignalHigh className='h-5 w-5' />
          <div className='flex flex-row gap-2 text-sm text-secondary md:text-base'>
            <span>{views}</span>
            <span> Total Blog Views</span>
          </div>
        </div>
      </li>
    </ul>
  );
};
