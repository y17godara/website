import { FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaXTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
import { type socialsProps } from "@/types/index";

export const socials: socialsProps[] = [
  {
    href: "mailto:yash17godara@gamil.com",
    label: "Email",
    ariaLabel: "Email",
    title: "Email",
    className: "hover:text-[#ea4335] ",
    icon: <MdAttachEmail />,
  },
  {
    href: "https://www.linkedin.com/in/y17godara",
    label: "Linkedin",
    ariaLabel: "LinkedIn",
    title: "@y17godara",
    className: "hover:text-[#0077B5] ",
    icon: <FaLinkedin />,
    private: false,
  },
  {
    href: "https://twitter.com/y17godara",
    label: "X.com",
    ariaLabel: "X",
    title: "@y17godara",
    className: "hover:text-[#14171A] ",
    icon: <FaXTwitter />,
    private: false,
  },
  {
    href: "https://github.com/y17godara",
    label: "GitHub",
    ariaLabel: "GitHub",
    title: "@y17godara",
    className: "hover:text-[#24292e] ",
    icon: <FaGithub />,
    private: false,
  },
  {
    href: "https://stackoverflow.com/users/17114824/y17godara",
    label: "Stackoverflow",
    ariaLabel: "Stack Overflow",
    title: "@y17godara",
    className: "hover:text-[#f1730c] ",
    icon: <FaStackOverflow />,
    private: false,
  },
  {
    href: "https://discord.gg/63t4kNS53A",
    label: "Discord",
    ariaLabel: "Discord",
    title: "@y17godara",
    className: "hover:text-[#7289da] ",
    icon: <FaDiscord />,
    private: true,
  },
];
