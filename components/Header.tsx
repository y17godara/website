"use client";

import React, { Fragment } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { NavLink, SimpleNote } from "./ui";
import Logo from "@/public/assets/logo/favicon.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Transition, Menu } from "@headlessui/react";
import { TbDotsVertical } from "react-icons/tb";

export function Header() {
  const pathname = `/${usePathname().split("/")[1]}`;
  return (
    <>
      <header
        className={cn("fixed left-0 right-0 top-0 z-50 bg-primary sm:top-2")}
      >
        <nav className=' mx-auto flex max-w-[700px] items-center justify-between gap-3 border border-[var(--secondaryA)] px-4 py-3 shadow-sm sm:rounded-full md:px-6'>
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
            {/* <SimpleNote
              className={`relative flex h-4 flex-row items-center justify-center gap-[2px] rounded-lg bg-pink-100 p-[4px] text-[10px] font-medium text-primary dark:bg-pink-900`}
            >
              Beta <span>{`v${siteConfig.siteVersion}`}</span>
            </SimpleNote> */}
          </Link>

          {/* Desktop Nav */}
          <ul className='relative hidden h-8 items-center justify-center gap-3 sm:flex'>
            {navLinks.map((link: navLinksProps, index: number) => (
              <li key={index} className='relative'>
                <NavLink
                  className={cn(
                    "text-primary hover:bg-tertiary",
                    link.highlight &&
                      "cursor-pointer border border-secondary  font-medium hover:border-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                  )}
                  href={link.href}
                >
                  {link.label}
                  {link.badge && (
                    <span className='absolute right-2 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-[var(--brand)] p-1 px-2 text-[8px] font-semibold leading-none text-white shadow-md'>
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Small Nav Menu */}
          <div className='relative ml-auto sm:hidden'>
            <div className='text-right'>
              <Menu as='div' className='relative inline-block text-left'>
                <div>
                  <Menu.Button className='inline-flex items-center rounded-lg p-1 text-secondary hover:text-primary focus:ring-0 focus-visible:outline-none'>
                    <TbDotsVertical className='h-5 w-5' aria-hidden='true' />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 mt-6  max-h-60 w-40 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base capitalize shadow-sm focus:outline-none dark:bg-black sm:text-sm'>
                    <div className='flex flex-col gap-1 px-1 py-1'>
                      {navLinks.map((link: navLinksProps, index: number) => {
                        return (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <Link
                                href={link.href}
                                className={cn(
                                  "rounded-md px-4 py-2 text-sm transition-colors hover:bg-tertiary hover:text-primary",
                                  pathname === link.href
                                    ? "bg-secondary font-medium"
                                    : "font-normal"
                                )}
                              >
                                {link.label}
                                {link.badge && (
                                  <span className='absolute right-0  inline-flex items-center justify-center rounded-full bg-[var(--brand)] p-1 px-2 text-[10px] font-bold leading-none text-white'>
                                    {link.badge}
                                  </span>
                                )}
                              </Link>
                            )}
                          </Menu.Item>
                        );
                      })}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

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
  badge?: string;
  highlight?: boolean;
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
  {
    href: "/presence",
    label: "Presence",
  },
  // {
  //   href: "/showcase",
  //   label: "Showcase",
  //   badge: "🔥 Hire Me",
  //   highlight: true,
  // },
];
