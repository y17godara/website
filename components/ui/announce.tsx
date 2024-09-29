"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import useAlertStore from "@/lib/zustand";
import { cn } from "@/lib/utils";
import { SiGoogledocs } from "react-icons/si";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const AlertAccounce = ({ className = "" }: { className?: string }) => {
  const { isVisible, hide } = useAlertStore();

  if (!isVisible) return null; // Return null
  return (
    <div className='fixed bottom-0 sm:bottom-4 left-0 right-0 z-[99]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, y: 20 }}
        className={cn(
          "border-brand group mx-auto max-w-2xl border-4 border-b-0 border-l-2 border-t-2 bg-primary p-2 font-sans text-primary shadow-[5px_5px_black] dark:border dark:shadow-[5px_5px_white]",
          className
        )}
      >
        <div className='relative w-full'>
          <SiGoogledocs className='h-4 w-4' />
          <AlertTitle className='pt-1'>Hire Me</AlertTitle>
          <AlertDescription className='text-xs'>
            Let&apos;s talk, I am available for Gig Projects or any other
            opportunities.{" "}
            <Link
              className='underline group-hover:text-brand group-hover:underline-offset-2'
              href='https://docs.google.com/document/d/1sUTNAoeqXXwJ_OUXztWzqUDSunaUvqoQXNWDXgsqwv8/edit?usp=sharing'
              target='_blank'
            >
              Resume
            </Link>
          </AlertDescription>
          <span
            className='absolute right-0.5 top-0.5 cursor-pointer rounded-full border bg-primary p-1 hover:border-[#8b0d0d] hover:text-brand md:-right-4 md:-top-4'
            role='button'
            aria-label='Close alert'
            onClick={hide}
          >
            <IoClose className='h-4 w-4' />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role='alert'
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, AlertAccounce };
