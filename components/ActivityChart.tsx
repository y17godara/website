"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { AnimateBlur } from "./animation/animate-blur";

const githubTheme = {
  dark: [
    "#161b22", // very dark gray
    "#0e4429", // dark green
    "#006d32", // green
    "#26a641", // light green
    "#39d353", // very light green
  ],
};

export default function ActivityChart() {
  const { theme } = useTheme();

  return (
    <AnimateBlur>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <GitHubCalendar
          username='y17godara'
          colorScheme={theme === "dark" ? "dark" : "light"}
          hideColorLegend
          labels={{
            totalCount: "$ git push 'd {{count}} times since last year",
          }}
        />
      </div>
    </AnimateBlur>
  );
}
