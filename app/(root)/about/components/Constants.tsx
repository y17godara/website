import { type experienceProps, educationProps } from "./types/index";

export const experience: experienceProps[] = [
  {
    logo: "/assets/about/desh-videsh-travels.png",
    title: "Software Developer",
    description: [
      "Managing and Developing the Desh Videsh Travels Website and Internal Tools, from Optimizating SEO, AWS, to Developing new features and fixing bugs.",
    ],
    role: "FullStack",
    href: "/projects/desh-videsh-travels",
    label: "Desh Videsh Travels",
    ariaLabel: "Software Developer",
    className: "",
    location: "Remote, India",
    joined: new Date("2024-05-01"),
    to: "Present",
    badge: "Founding Developer",
    badgeColor: "text-teal-900 bg-teal-100 border-teal-200 border",
    badgeContent:
      "Joined Desh Videsh Travels as a Fullstack Developer and helped in building the website from scratch in there initial days. From Maintaining the Website, Implementing SEO, AWS, to Developing new features and fixing bugs, I have done it all. I have also helped in building the internal tools for the company like the Invoice Generator and other opertaions tools.",
    tags: [
      "React.js",
      "TypeScript",
      "Vercel",
      "Node.js",
      "Redis",
      "Prisma ORM",
      "Next.js",
      "MongoDB",
      "AWS",
      "SEO",
      "CRM",
      "Google Analytics",
      "RESTful API",
      "TailwindCSS",
      "Github",
      "Git",
      "Content Writing",
    ],
    more: [
      "Developed and Redesigned the Website from Scratch.",
      "Refactored the Website for better SEO and Performance.",
      "Code Reviews, Maintaining the Website, and Implementing new features.",
      "Developed the Internal Tools for the Company.",
      "Manage the AWS Services and Cost Optimization.",
    ],
  },
  {
    logo: "/assets/about/capture-a-trip.jpeg",
    title: "Junior Software Developer",
    description: [
      "Role as a Junior, but i contributed as a Fullstack Software Developer, from Choosing the Trending Technologies, to Developing new Features and Fixing bugs.",
      "Worked with Cross-Functional Teams, from Designers, Developers, Operations, to Marketing Team.",
    ],
    role: "FullStack",
    href: "/projects/capture-a-trip",
    label: "Capture A Trip Pvt. Ltd.",
    ariaLabel: "Capture A Trip",
    className: "",
    location: "Haryana, India",
    joined: new Date("2024-02-19"),
    to: new Date("2024-05-09"),
    badge: "FullStack Developer",
    badgeColor: "text-green-900 bg-green-100 border-green-200 border",
    badgeContent:
      "Joined Capture A Trip as a Fullstack Developer and helped in building the website from scratch. From Maintaining the Website, Implementing SEO, to Developing new features and fixing bugs, I have done it all.",
    tags: [
      "React.js",
      "TypeScript",
      "Javascript",
      "Node.js",
      "Next.js",
      "MongoDB",
      "SEO",
      "Animation",
      "AWS",
      "Redis",
      "Prisma ORM",
      "RESTful API",
      "TailwindCSS",
      "Strapi CMS",
      "Github",
      "Git",
    ],
    more: [
      "Designed and Developed New Featured Website in Next.js TypeScript and TailwindCSS for Styling.",
      "Migrated Wordpress as a CMS to Strapi as a Headless CMS for better Performance",
      "Implemented SEO and Google Analytics to the Website for better Visibility.",
      "Collaborated with Cross-Functional Teams, to Maintain and Fix Bugs in the Website.",
    ],
  },
  {
    logo: "/assets/about/github.jpg",
    title: "FullStack Developer",
    description: [
      "Contributing as Fullstack Developer, building side projects and learning new technologies.",
    ],
    role: "FullStack",
    href: "https://github.com/y17godara",
    label: "Freelancer",
    ariaLabel: "Github" as const,
    className: "",
    location: "Remote, WFA",
    joined: new Date("2022-05-01"),
    to: "Present",
    badge: "Personal Projects",
    badgeColor: "text-yellow-900 bg-yellow-100 border-yellow-200 border",
    badgeContent:
      "Working as a Freelancer, building side projects and learning new technologies.",
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Next.js",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "SEO",
      "Google Analytics",
      "RESTful API",
      "TailwindCSS",
      "Github",
      "Git",
      "Learning Video Editing",
      "Learning Blender",
      "Learning Three.js",
      "Learning IOS",
    ],
    more: [
      "Creating Side Projects and Learning new Technologies.",
      "Implementing SEO and Google Analytics to the Projects, and Improving Performance.",
      "Developing Fullstack Applications.",
      "Learning Video Editing, Blender, Three.js, and IOS Development in Free Time.",
    ],
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
    location: "Noida, India",
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
    location: "New Delhi, India",
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
    location: "New Delhi, India",
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