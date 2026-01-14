'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

import textbox from '/public/icons/textbox.png';
import white_sparkle from '/public/icons/white_sparkle.svg';
import framePng from '/public/icons/pixel_frame.png';

const PALETTE = {
  bluePale: '#CAD8E6',
  blueLight: '#E0E7F8',
  blueMid: '#97B4F8',
  blueStrong: '#6492FF',
};

const GALLERY = [
  { src: '/photos/mentor2.png', alt: 'General Meeting', span: 'col-span-2 row-span-2' },
  { src: '/photos/mentor3.png', alt: 'More Winners!', span: 'col-span-2 row-span-2' },
  { src: '/photos/mentor6.png', alt: 'More fun!', span: 'col-span-2 row-span-2' },
  { src: '/photos/mentor4.png', alt: 'Workshop', span: 'col-span-2 row-span-2' },
  { src: '/photos/mentor5.png', alt: 'Participants', span: 'col-span-1 row-span-2' },
  { src: '/photos/mentor1.JPG', alt: 'More Workshop!', span: 'col-span-2 row-span-2' },
  { src: '/photos/mentor7.JPG', alt: 'More Workshop!', span: 'col-span-1 row-span-2' },
];

function TextBubble({ text, className = '', delay = 0, flip = false, flipY = false }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className={`relative w-full ${flip ? '-scale-x-100' : ''} ${flipY ? 'scale-y-[-1]' : ''}`}>
        <Image alt="textbox" src={textbox} className="hidden lg:block w-full h-auto pointer-events-none" />
        <div className={`absolute inset-0 px-6 ${flipY ? 'flex items-end pb-10 scale-y-[-1]' : 'flex items-start pt-10'}`}>
          <p className="text-neutral-900 leading-snug">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

function MosaicGallery({ items }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.06 } },
      }}
      className="relative"
    >
      <div className="mb-4 ml-1 text-xs tracking-widest uppercase text-black/70">Previous Mentorship Programs!</div>
      <div className="grid grid-cols-6 auto-rows-[7rem] sm:auto-rows-[8rem] grid-flow-dense gap-3 sm:gap-4">
        {items.map((it, i) => (
          <Tile key={i} src={it.src} alt={it.alt} span={it.span} />
        ))}
      </div>
    </motion.div>
  );
}

function Tile({ src, alt, span }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      whileHover={{ scale: 1.02 }}
      className={`${span} relative overflow-hidden rounded-xl lg:rounded-2xl ring-1 ring-white/10 bg-white/5`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover select-none"
        sizes="(max-width: 1024px) 100vw, 560px"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
    </motion.div>
  );
}

export default function About() {
  const bubbles = [
    {
      text: 'Similar to hackathons, datathons let students explore data by tackling a real-world project.',
      className: 'w-[300px] bottom-[49%] z-1',
      delay: 0.2,
    },
    {
      text: 'Clean, explore, and model—ask mentors for help at anytime.',
      className: 'w-[230px] bottom-[50%] left-[85%] z-1',
      delay: 0.4,
    },
    {
      text: 'Submit a notebook + slides and present to judges.',
      className: 'w-[250px] left-[50%] top-[78%] z-1',
      delay: 0.5,
      flipY: true,
    },
  ];

  return (
    <div className="w-full bg-white">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg,
            ${PALETTE.blueStrong} 0%,
            ${PALETTE.blueStrong} 25%,
            ${PALETTE.blueMid} 80%,
            ${PALETTE.blueLight} 100%
          )`,
        }}
      >
        <Image
          src="/gradients/dots-overlay-4k.png"
          alt=""
          fill
          priority
          className="pointer-events-none object-cover"
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(/gradients/noise-alpha-64.png)',
            opacity: 0.05,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-40 md:pt-48 lg:pt-[12%] pb-40 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 lg:col-span-2 max-w-4xl">
            <motion.h1
              className="text-4xl sm:text-6xl font-clash font-medium text-white leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mentorship Program
            </motion.h1>

            <motion.p
              className="text-white/95 font-mono leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In this mentorship program, you’ll work in a small team to build a data science project alongside an industry mentor. Along the way, you’ll sharpen your problem-solving, collaboration, and technical skills while getting plenty of guidance and support. The program is designed to help you grow, try new ideas, and create something meaningful you can be proud of. Weekly events are held to supplement and support participants, covering topics such as data visualization, machine learning, and other skills that can be directly applied to the projects. Come build, learn, and have fun with a community of students and mentors who love data!
            </motion.p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg,
            ${PALETTE.blueLight} 0%,
            ${PALETTE.blueMid} 25%,
            ${PALETTE.blueStrong} 60%,
            ${PALETTE.blueStrong} 100%
          )`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(/gradients/noise-alpha-64.png)',
            opacity: 0.05,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-24 md:pt-28 pb-28">
          <div className="hidden lg:block relative w-full max-w-[1280px] mx-auto">
            <MosaicGallery items={GALLERY} />

            <Image
              alt="white sparkle"
              src={white_sparkle}
              width={240}
              height={240}
              className="absolute right-[96%] top-[15%] pointer-events-none"
            />
            <Image
              alt="white sparkle"
              src={white_sparkle}
              width={240}
              height={240}
              className="absolute left-[94%] top-[49%] pointer-events-none"
            />
          </div>

          <div className="lg:hidden grid grid-cols-1 gap-6 w-full">
            <MosaicGallery items={GALLERY} />
            {bubbles.map((b, i) => (
              <div key={i} className="w-full">
                <div className="relative w-full">
                  <Image alt="textbox" src={textbox} className="w-full h-auto pointer-events-none" />
                  <div className="absolute inset-0 px-6 flex items-start pt-10">
                    <p className="text-neutral-900 leading-snug">{b.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
