import { type experienceProps, educationProps } from "./types/index";

export const experience: experienceProps[] = [
  {
    logo: "/assets/about/github.jpg",
    title: "Personal Projects",
    description:
      "I have worked on various small personal projects ranging from html websites to full stack.",
    role: "FullStack",
    href: "https://github.com/y17godara",
    label: "Personal Projects",
    ariaLabel: "Personal Projects",
    className: "",
    location: "India",
    joined: {
      month: "July",
      year: "2021",
    },
    to: {
      month: "", // Leave empty if currently working
      year: Date().split(" ")[3],
    },
  },
];

export const education: educationProps[] = [
  {
    title: "Graduation",
    course: "Bachelors of Computer Applications",
    majors: ["Coud", "FullStack", "Security"],
    cgpa: "N/A",
    certification: "",
    verification: "",
    description:
      "Currently pursuing my Bachelors of Computer Applications from Amity University, Noida.",
    joined: {
      month: "July",
      year: "2023",
    },
    to: {
      month: "July",
      year: "2026",
    },
    location: "India",
    className: "",
    ariaLabel: "BCA",
    categories: "education",
  },
  {
    title: "Senior Secondary",
    course: "Higher Secondary Education",
    majors: ["Computer Science", "Mathematics", "Physics"],
    cgpa: "6.5",
    certification: "",
    verification: "",
    description:
      "Finished my Higher Secondary Education from Heera Public School, Delhi.",
    joined: {
      month: "July",
      year: "2021",
    },
    to: {
      month: "July",
      year: "2022",
    },
    location: "India",
    className: "",
    ariaLabel: "Senior Secondary",
    categories: "education",
  },
  {
    title: "Secondary",
    course: "Secondary Education",
    majors: ["Computer Science", "Mathematics", "Physics"],
    cgpa: "7.6",
    certification: "",
    verification: "",
    description:
      "Finished my Secondary Education from Heera Public School, Delhi.",
    joined: {
      month: "July",
      year: "2018",
    },
    to: {
      month: "July",
      year: "2019",
    },
    location: "India",
    className: "",
    ariaLabel: "Secondary",
    categories: "education",
  },
];

export const certifications: educationProps[] = [
  {
    title: "FullStack Web Development",
    course: "FullStack Cohort at 100xDevs by Harikat Singh",
    majors: ["React.js", "Node.js", "Next.js", "MongoDB", "PostgreSQL"],
    cgpa: "",
    certification: "/assets/about/100xdev.jpg",
    verification: "#",
    description:
      "Completed a 6 month long FullStack Web Development course from 100xDevs by Harikat Singh.",
    joined: {
      month: "",
      year: "2023",
    },
    to: {
      month: "Nov",
      year: "2023",
    },
    location: "Online",
    className: "",
    ariaLabel: "FullStack Web Development",
    categories: "certification",
  },
];
