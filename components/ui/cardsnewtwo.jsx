'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import data from '/public/photos/data-alt.png';
import group from '/public/photos/group.png';
import hero from '/public/photos/hero-picture.png';
import juan from '/public/photos/juan.png';

export default function Cardsnewtwo() {
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
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
              e.stopPropagation();
              setActive(card);
            }}
            className="p-4 flex flex-col md:flex-row justify-between min-h-[380px] sm:min-h-[0px] items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row justify-center items-center">
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
    title: 'Katherine Frields',
    src: '/photos/katie.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/katherine-frields-5672a6251/',
    content: () => {
      return <p>UCI Data Science Major &amp; Regents&apos; Scholar</p>;
    },
  },
  {
    description: 'Executive Internal Vice President',
    title: 'Shreya Shyam',
    src: '/photos/shreya.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/shreyashyam/',
    content: () => {
      return (
        <p>
          Hi, I&apos;m Shreya! I&apos;m a third year at UC Irvine, majoring in
          Data Science and a minor in Economics. My enthusiasm lies in utilizing
          quantitative research and statistical programming to address societal
          needs. Currently seeking new opportunities to grow as a professional
          and gain valuable experience/industry skills.
        </p>
      );
    },
  },

  {
    description: 'Vice President of Finance',
    title: 'Zeeshan Babul',
    src: '/photos/zeeshan.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/zeeshanbabul/',
    content: () => {
      return (
        <p>
          Hey everyone! My name is Zeeshan and I am the Vice President of
          Finance for Data @ UCI. I am a second year Data Science major and I
          love to play basketball, hang out with friends, and explore new
          places. Hope to see you all at our events!
        </p>
      );
    },
  },
  {
    description: 'VP of Community Development',
    title: 'Tulika Basu',
    src: '/photos/tulika.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/tulikabasu/',
    content: () => {
      return (
        <p>
          Passionate Cognitive Science student with a keen interest in
          data-driven decisions and solutions as well as computational
          neuroscience. I love exploring these interests in relation to the
          marketing field and consumer/UI/UX research!
        </p>
      );
    },
  },
  {
    description: 'Co-Director of Marketing',
    title: 'Megan Le',
    src: '/photos/megan.jpg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/meganthuyvanle/',
    content: () => {
      return (
        <p>
          I am a computer science student at UC Irvine, specializing in
          intelligent systems. Currently, I am working on categorizing plant
          specimen images in collaboration with New York Botanical Garden and
          Kaggle for Break Through Tech AI&apos;s private competition.
        </p>
      );
    },
  },
  {
    description: 'Webmaster',
    title: 'Andrew Hwang',
    src: '/photos/andrew.jpeg',
    ctaText: 'View',
    ctaLink: 'https://www.linkedin.com/in/andrew-hwang-78b375258/',
    content: () => {
      return (
        <p>
          Hey! Im Andrew and I am the Webmaster for Data @ UCI. I am a second
          year Data Science major. I love studying at cafes and learning new
          instruments. Excited to see you all at our events!
        </p>
      );
    },
  },
];
