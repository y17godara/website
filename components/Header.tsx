"use client";
import React, { Fragment } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { NavLink, SimpleNote } from "./ui";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Popover, Transition } from "@headlessui/react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";
import { siteConfig } from "@/config";

export function Header() {
  const pathname = `/${usePathname().split("/")[1]}`;
  return (
    <>
      <header
        className={cn("md:stick relative top-0 z-50 bg-primary shadow-sm")}
      >
        <nav className='mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6'>
          {/* Logo */}
          <Link href='/' className='relative flex flex-col gap-1 sm:flex-row'>
            <div>
              <Image
                src={Logo}
                priority
                alt='Yash Godara Logo'
                className='h-8 w-8 rounded-full'
                width={40}
                height={40}
              />
            </div>
            <SimpleNote
              className={`relative flex h-4 flex-row items-center justify-center gap-[2px] rounded-lg bg-pink-100 p-[4px] text-[10px] font-medium text-primary dark:bg-pink-900`}
            >
              Beta <span>{`v${siteConfig.siteVersion}`}</span>
            </SimpleNote>
          </Link>

          {/* Desktop Nav */}
          <ul className='relative hidden h-8 items-center justify-center gap-1 sm:flex'>
            {navLinks.map((link: navLinksProps, index: number) => (
              <li key={index}>
                <NavLink
                  className='text-primary hover:bg-tertiary'
                  href={link.href}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <Link className='ml-4 text-primary' href={"/connect"}>
              <CiLocationArrow1 title={"Connect with Me"} className='h-5 w-5' />
            </Link>
          </ul>

          {/* Small Nav Menu */}
          <Popover className='relative ml-auto sm:hidden'>
            <Popover.Button className='flex items-center gap-1 rounded-lg p-1 text-secondary hover:text-primary focus:ring-0 focus-visible:outline-none'>
              <TbDotsVertical
                className='h-5 w-5'
                title='Menu'
                arial-label={"Menu"}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute right-0 z-10 mt-4 max-h-60 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base capitalize shadow-sm focus:outline-none dark:bg-black sm:text-sm'>
                <div className='grid gap-1'>
                  {navLinks.map((link: navLinksProps, index: number) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "rounded-md px-4 py-2 text-sm transition-colors hover:bg-tertiary hover:text-primary",
                        pathname === link.href
                          ? "bg-secondary font-medium"
                          : "font-normal"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Theme Toggle */}
          <div className='flex h-8 w-8 items-center justify-center'>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}

type navLinksProps = {
  href: string;
  label: string;
};

const navLinks: navLinksProps[] = [
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/about",
    label: "About",
  },
];
