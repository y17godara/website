import { type experienceProps, educationProps } from "./types/index";

export const experience: experienceProps[] = [
  {
    logo: "/assets/about/github.jpg",
    title: "FullStack Developer",
    description:
      "Contributing as Fullstack Developer, building side projects and learning new technologies.",
    role: "FullStack",
    href: "https://github.com/y17godara",
    label: "Freelancer",
    ariaLabel: "Freelancer",
    className: "",
    location: "Remote",
    joined: {
      month: "May",
      year: "2024",
    },
    to: {
      month: "", // Leave empty if currently working
      year: "Present",
    },
  },
  {
    logo: "/assets/about/capture-a-trip.jpeg",
    title: "Junior Software Developer",
    description:
      "Working as a Junior Software Developer at Capture A Trip, Helping in building the next big thing.",
    role: "FullStack",
    href: "https://captureatrip.com/",
    label: "Capture A Trip",
    ariaLabel: "Capture A Trip",
    className: "",
    location: "India",
    joined: {
      month: "Feb",
      year: "2024",
    },
    to: {
      month: "May", // Leave empty if currently working
      year: "2024",
    },
  },
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
      month: "Feb", // Leave empty if currently working
      year: "2024",
    },
  },
];

export const education: educationProps[] = [
  {
    title: "Graduation",
    course: "Bachelors of Computer Applications",
    majors: ["Cloud", "FullStack", "Security"],
    cgpa: "9.0",
    certification: "",
    verification: "",
    description:
      "Currently pursuing my Bachelors of Computer Applications from Amity University Online, Noida.",
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
    cgpa: "",
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
    cgpa: "",
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
    majors: ["React.js", "Node.js", "Next.js", "MongoDB", "PostgreSQL", "..."],
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
