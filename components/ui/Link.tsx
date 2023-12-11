import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  className?: string;
  target?: boolean;
} & NextLinkProps;

export function Link(props: LinkProps) {
  const { target, ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={cn(
        'duration-600 underline-offset-4 transition ease-in-out ',
        props.className
      )}
      // is target true so _black else undefined
      target={target ? '_blank' : undefined}
    >
      {props.children}
    </NextLink>
  );
}
