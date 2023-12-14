import { LinkProps as NextLinkProps } from 'next/link';
import { ReactNode } from 'react';

export type socialsProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title: string;
  className?: string;
  icon: React.ReactNode;
};

export type LinkProps = {
  children: ReactNode;
  className?: string;
  target?: boolean;
  title?: string;
} & NextLinkProps;

export type SpotlightProps = {
  children: ReactNode | ReactNode[];
  size?: number /**(px) */;
  strength?: number /**(0-100) */;
  color?: string /**(rgba) */;
  className?: string;
};
