'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import data from '/public/photos/data-alt.png';
import group from '/public/photos/group.png';
import hero from '/public/photos/hero-picture.png';
import juan from '/public/photos/juan.png';

export default function Cardsnew() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-fit max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="bg-gray-100 dark:bg-gray-800 w-full flex justify-center items-center"
              >
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-auto max-h-[80vh] sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base max-h-40 md:max-h-60 pb-10 flex flex-col items-start gap-4 overflow-y-auto dark:text-neutral-400 [mask-image:linear-gradient(to_bottom,white_calc(100%-2rem),transparent)] pr-4"
                  >
                    {typeof active.content === 'function'
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={(e) => {
              e.stopPropagation(); // Stop the click event from propagating to the window
              setActive(card);
            }}
            className="p-4 flex flex-col md:flex-row justify-between min-h-[380px] sm:min-h-[0px] items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Co-President',
    title: 'Azra Zahin',
    src: '/photos/azra.png',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/azra-zahin/',
    content: () => {
      return (
        <p>
          Computer Science Major, previously Software Engineer Intern at
          Atlassian
        </p>
      );
    },
  },
  {
    description: 'Executive External Vice President',
    title: 'Catelynn Chen',
    src: '/photos/catelynn.png',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/catelynn-chen/',
    content: () => {
      return (
        <p>
          I am a second year doubling in data science and business information
          management.
        </p>
      );
    },
  },
  {
    description: 'Director of Community Development',
    title: 'Elane Elza Shane',
    src: '/photos/elane.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/elane-shane/',
    content: () => {
      return (
        <p>
          Hello! I&apos;m Elane Shane, a software engineering major at the
          University of California, Irvine, with a passion for using technology
          to drive innovation. My primary focus is on Machine Learning and Data
          Analysis, where I have honed my skills through coursework and hands-on
          projects. <br /> <br />
          Beyond my technical expertise, I bring a unique blend of creativity
          and analytical thinking, cultivated through my experience in social
          media-based marketing and fundraising.
        </p>
      );
    },
  },
  {
    description: 'VP of Community Development',
    title: 'Kyle Huynh',
    src: '/photos/kyle.png',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/kyle-huynh-093b8624b/',
    content: () => {
      return (
        <p>
          I am a third year data science student minoring in health informatics
          and bioinformatics. I love all thing computational biology and
          biotech! Feel free to come talk to me about anything I love getting to
          know other people&apos;s interests in and outside of data!
        </p>
      );
    },
  },
  {
    description: 'Co-Director of Marketing',
    title: 'Jake Silverman',
    src: '/photos/jake.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/jakelsilverman/',
    content: () => {
      return (
        <p>
          Hi, my name is Jake Silverman, and I&apos;m currently a full-time
          student at the University of California, Irvine pursuing a B.S in Data
          Science. I&apos;m passionate about the many problems an understanding
          of data can provide solutions to in many fields and disciplines.{' '}
          <br />
          <br />
          Outside of academics, I&apos;m an avid music listener and enjoy
          collecting vinyl from my favorite artists. Additionally, I closely
          follow the esports scenes of my favorite games and stay up to date
          with my favorite players and teams.
        </p>
      );
    },
  },
  {
    description: 'Graphic Designer',
    title: 'Elle Hsu',
    src: '/photos/elle.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/ellehsu/',
    content: () => {
      return (
        <p>
          Business Administration Major, previously Marketing Operations Intern
          at Celebrate Inc.
        </p>
      );
    },
  },
];
