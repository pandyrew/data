'use client';
import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import dataIcon from '/public/icons/data-icon.svg';
import linkedInIcon from '/public/icons/linkedin-icon.svg';
import instagramIcon from '/public/icons/instagram-icon.svg';
import hamburgerIcon from '/public/icons/hamburger.png';

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      let direction = current - scrollYProgress.getPrevious();

      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownOpen) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [dropdownOpen]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: isMobile ? 0 : -100,
        }}
        animate={{
          y: visible ? 0 : isMobile ? 0 : -100,
          opacity: visible ? 1 : isMobile ? 1 : 0,
        }}
        transition={{
          duration: isMobile ? 0 : 0.2,
        }}
        className={cn(
          'flex sm:max-w-fit w-full ring-1 font-anderson bg-white/20 font-medium text-3xl ring-black/5 bg-clip-padding backdrop-filter shadow backdrop-blur-md bg-opacity-60 fixed sm:top-8 top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2]  sm:rounded-xl dark:bg-black z-[5000] pr-2 sm:pl-8 py-2 pl-2 rounded-b-xl sm:items-center items-center justify-center sm:space-x-8 space-x-0 h-fit',
          className
        )}
      >
        <Link href="/" className="">
          <Image
            src={dataIcon}
            alt="Picture of the author"
            className="h-full"
          />
        </Link>
        <div className="hidden sm:flex items-center justify-center space-x-10 overflow-x-auto whitespace-nowrap">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-neutral-50 mb-[5px] items-center justify-center text-neutral-800 dark:hover:text-neutral-100 hover:text-neutral-700 transition duration-300 hover:drop-shadow-sm'
              )}
            >
              <span className="text-sm ">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="xl:w-[400px] lg:w-[300px] w-[200px] hidden sm:flex"></div>
        <div className="gap-14 items-center h-auto justify-center hidden sm:flex">
          <Link
            href="https://www.linkedin.com/company/data-uci/mycompany/"
            className=""
          >
            <Image
              src={linkedInIcon}
              alt="Picture of the author"
              className="h-full"
            />
          </Link>
          <Link href="https://www.instagram.com/dataatuci/?__d=1" className="">
            <Image
              src={instagramIcon}
              alt="Picture of the author"
              className="h-[30%]"
            />
          </Link>
        </div>
        {isMobile && (
          <div className="absolute right-[20px]">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-neutral-500 dark:text-neutral-50 flex justify-center items-center"
            >
              <div className="h-full flex justify-center items-center">
                <Image
                  src={hamburgerIcon}
                  alt="hamburger icon"
                  width={30}
                  height={30}
                  className="h-full"
                ></Image>
              </div>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  About
                </Link>
                <Link
                  href="/datathon"
                  className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Datathon
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Contact
                </Link>
                <Link
                  href="/meet-us"
                  className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Meet Us
                </Link>
                <Link
                  href="/apply"
                  className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Apply
                </Link>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
