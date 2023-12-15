import { type experienceProps, educationProps } from './types/index';

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

export const education: educationProps[] = [
  {
    title: 'Graduation',
    course: 'Bachelors of Computer Applications',
    majors: ['Coud', 'FullStack', 'Security'],
    cgpa: '00.00',
    description:
      'Currently pursuing my Bachelors of Computer Applications from Amity University, Noida.',
    joined: {
      month: 'July',
      year: '2023',
    },
    to: {
      month: 'July',
      year: '2026',
    },
    location: 'India',
    className: '',
    ariaLabel: 'BCA',
  },
  {
    title: 'Senior Secondary',
    course: 'Higher Secondary Education',
    majors: ['Computer Science', 'Mathematics', 'Physics'],
    cgpa: '6.5',
    description:
      'Finished my Higher Secondary Education from Heera Public School, Delhi.',
    joined: {
      month: 'July',
      year: '2021',
    },
    to: {
      month: 'July',
      year: '2022',
    },
    location: 'India',
    className: '',
    ariaLabel: 'Senior Secondary',
  },
  {
    title: 'Secondary',
    course: 'Secondary Education',
    majors: ['Computer Science', 'Mathematics', 'Physics'],
    cgpa: '7.6',
    description:
      'Finished my Secondary Education from Heera Public School, Delhi.',
    joined: {
      month: 'July',
      year: '2018',
    },
    to: {
      month: 'July',
      year: '2019',
    },
    location: 'India',
    className: '',
    ariaLabel: 'Secondary',
  },
];
