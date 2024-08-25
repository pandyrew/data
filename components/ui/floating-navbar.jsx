"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import dataIcon from '/public/icons/data-icon.svg'
import linkedInIcon from '/public/icons/linkedin-icon.svg'
import instagramIcon from '/public/icons/instagram-icon.svg'
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();


        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      
    }
  });
  

  return (
    (<AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit ring-1 font-anderson bg-white/20 font-medium text-3xl ring-black/5 bg-clip-padding backdrop-filter shadow backdrop-blur-md bg-opacity-60 fixed top-8 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-black z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-8",
          className
        )}>
          <Link href='/' className="">
                
                <Image
                    src={dataIcon}
                    alt="Picture of the author"
                    className="h-full"
                />
                </Link>
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500"
            )}>
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <div className="xl:w-[400px] lg:w-[300px] w-[200px]">

        </div>
        <div className="flex gap-14 items-center h-auto justify-center">
                <Link href="https://www.linkedin.com/company/data-uci/mycompany/" className=''>
                <Image
                    src={linkedInIcon}
                    alt="Picture of the author"
                    className='h-full'
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
      </motion.div>
    </AnimatePresence>)
  );
};
