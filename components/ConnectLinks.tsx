import { FaStackOverflow, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
    private: false,
  },
  {
    href: 'https://twitter.com/y17godara',
    label: 'X.com',
    ariaLabel: 'X',
    title: '@y17godara',
    className: 'hover:text-[#14171A] ',
    icon: <FaXTwitter />,
    private: false,
  },
  {
    href: 'https://github.com/y17godara',
    label: 'GitHub',
    ariaLabel: 'GitHub',
    title: '@y17godara',
    className: 'hover:text-[#24292e] ',
    icon: <FaGithub />,
    private: false,
  },
  {
    href: 'https://stackoverflow.com/users/17114824/y17godara',
    label: 'Stackoverflow',
    ariaLabel: 'Stack Overflow',
    title: '@y17godara',
    className: 'hover:text-[#f1730c] ',
    icon: <FaStackOverflow />,
    private: false,
  },
  {
    href: 'https://discord.com/users/526972062741299211',
    label: 'Discord',
    ariaLabel: 'Discord',
    title: '@y17godara',
    className: 'hover:text-[#7289da] ',
    icon: <FaDiscord />,
    private: true,
  },
  {
    href: 'https://www.instagram.com/y17godara',
    label: 'Instagram',
    ariaLabel: 'Instagram',
    title: '@y17godara',
    className: 'hover:text-[#e1306c]',
    icon: <FaInstagram />,
    private: true,
  },
];
