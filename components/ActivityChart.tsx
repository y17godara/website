"use client";

import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { AnimateBlur } from "./animation/animate-blur";

export default function ActivityChart() {
  const { theme, resolvedTheme } = useTheme();
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    // Update color scheme when theme changes or is resolved
    const newColorScheme = resolvedTheme === "dark" ? "dark" : "light";
    setColorScheme(newColorScheme);
  }, [resolvedTheme]);

  return (
    <AnimateBlur>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <GitHubCalendar
          username='y17godara'
          colorScheme={colorScheme === "dark" ? "dark" : "light"}
          hideColorLegend
          labels={{
            totalCount: "$ git push 'd {{count}} times since last year",
          }}
        />
      </div>
    </AnimateBlur>
  );
}
