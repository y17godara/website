import { type experienceProps } from '@/app/about/components/types/index';

export const experience: experienceProps[] = [
  {
    logo: '/assets/about/github.jpg',
    title: 'Personal Projects',
    description:
      'I have worked on various small personal projects ranging from html websites to full stack.',
    role: 'FullStack',
    href: 'https://github.com/y17godara',
    label: 'Personal Projects',
    ariaLabel: 'Personal Projects',
    className: '',
    location: 'India',
    joined: {
      month: 'July',
      year: '2021',
    },
    to: {
      month: '', // Leave empty if currently working
      year: Date().split(' ')[3],
    },
  },
];
