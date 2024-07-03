"use client";

import { useState, useEffect } from "react";
import ActivityCalendar from "react-activity-calendar";

type Activity = {
  date: string;
  count: number;
  level: number;
};

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
  const [data, setData] = useState<Activity[]>();
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/y17godara`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    return await res.json();
  };

  useEffect(() => {
    fetchData().then((data) => {
      setData(data.contributions);
      setLoading(false);
    });
  }, []);

  if (!data || loading)
    return <div className='flex h-32 w-full rounded-md bg-tertiary p-2'></div>;

  const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth(); // January is 0, December is 11

  const filteredData = data.filter((d) => {
    const date = new Date(d.date);
    return (
      date.getFullYear() === currentYear
      //   && date.getMonth() <= currentMonth
    );
  });

  return (
    <div className='flex w-full flex-col items-start justify-start p-2 text-center'>
      <ActivityCalendar
        data={filteredData}
        loading={loading}
        theme={githubTheme}
      />
    </div>
  );
}
