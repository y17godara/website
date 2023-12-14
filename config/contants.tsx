import { FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaGithub, FaDiscord } from 'react-icons/fa6';
import { type socialsProps } from '@/types/index';

export const socials: socialsProps[] = [
  {
    href: 'https://www.linkedin.com/in/y17godara',
    label: 'Linkedin',
    ariaLabel: 'LinkedIn',
    title: '@y17godara',
    className: 'hover:text-[#0077B5] ',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://twitter.com/y17godara',
    label: 'Twitter',
    ariaLabel: 'Twitter',
    title: '@y17godara',
    className: 'hover:text-[#14171A] ',
    icon: <FaXTwitter />,
  },
  {
    href: 'https://github.com/y17godara',
    label: 'GitHub',
    ariaLabel: 'GitHub',
    title: '@y17godara',
    className: 'hover:text-[#24292e] ',
    icon: <FaGithub />,
  },
  {
    href: 'https://stackoverflow.com/users/17114824/y17godara',
    label: 'Stackoverflow',
    ariaLabel: 'Stack Overflow',
    title: '@y17godara',
    className: 'hover:text-[#f1730c] ',
    icon: <FaStackOverflow />,
  },
  {
    href: 'https://discord.com/users/526972062741299211',
    label: 'Discord',
    ariaLabel: 'Discord',
    title: '@y17godara',
    className: 'hover:text-[#7289da] ',
    icon: <FaDiscord />,
  },
];
