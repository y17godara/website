export type experienceProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title: string;
  description: string;
  role: string;
  logo: string;
  className?: string;
  location: string;
  joined: {
    month: string;
    year: string;
  };
  to: {
    month: string;
    year: string;
  };
};
