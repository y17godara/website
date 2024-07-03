export type experienceProps = {
  href?: string;
  label: string;
  ariaLabel: string;
  title: string;
  description: string[];
  role: string;
  logo: string;
  className?: string;
  location: string;
  joined: Date;
  to: Date | "Present";
  badge?: string;
  badgeColor?: string;
  badgeContent?: string;
  tags?: string[];
  more?: string[];
};

export type educationProps = {
  title: string;
  course: string;
  majors: string[];
  cgpa: string;
  certification: string;
  verification: string;
  description: string;
  joined: {
    month: string;
    year: string;
  };
  to: {
    month: string;
    year: string;
  };
  location: string;
  className?: string;
  ariaLabel: string;
  categories: "education" | "certification";
};
