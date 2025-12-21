'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import Cards from '@/components/ui/cards';
import { leadershipData, internData, facultyData } from '@/data/leadership';
import nathan from '/public/photos/nathan.png';

const PALETTE = {
  bluePale: '#CAD8E6',
  blueLight: '#E0E7F8',
  blueMid: '#97B4F8',
  blueStrong: '#6492FF',
};

const GALLERY = [
  { src: '/photos/presduo.jpg', alt: 'Check-in table', span: 'col-span-1 row-span-2' },
  { src: '/photos/data-alt.png', alt: 'Can sculpture', span: 'col-span-3 row-span-2' },
  { src: '/carousel/memories2.png', alt: 'Hallway crew', span: 'col-span-2 row-span-2' },
  { src: '/photos/datathon3.png', alt: 'Logistics team', span: 'col-span-2 row-span-2' },
  { src: '/photos/datafun7.jpg', alt: 'Logistics team', span: 'col-span-2 row-span-2' },
  { src: '/photos/datafun3.jpg', alt: 'Logistics team', span: 'col-span-1 row-span-2' },
  { src: '/photos/datafun2.jpg', alt: 'Logistics team', span: 'col-span-1 row-span-2' },
];

export default function About() {
  return (
    <div className="w-full bg-white">
      <section
        className="relative overflow-visible md:overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg,
            ${PALETTE.blueStrong} 0%,
            ${PALETTE.blueStrong} 24%,
            ${PALETTE.blueMid} 56%,
            ${PALETTE.blueLight} 100%
          )`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          src="/gradients/dots-overlay-4k.png"
          alt=""
          fill
          priority
          className="pointer-events-none select-none object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(/gradients/noise-alpha-64.png)',
            backgroundRepeat: 'repeat',
            opacity: 0.05,
          }}
        />

        <motion.div
          className="hidden md:block absolute right-[12%] pt-[15%] z-20 w-[32%] max-w-[620px]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative aspect-[6/4]">
            <Image
              src="/photos/board.jpg"
              alt="Board Picture"
              fill
              className="object-cover rounded-2xl shadow-xl ring-1 ring-white/20"
              priority
            />
          </div>
        </motion.div>

        <div className="max-w-7xl pl-6 md:pl-[16%] pt-16 md:pt-[12%] pb-24 md:pb-[28%]">
          <div className="flex items-start gap-4">
            <div className="flex flex-col gap-3">
              <motion.p
                className="text-2xl sm:text-7xl font-medium font-clash text-white"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About Data
              </motion.p>
              <motion.div
                className="relative md:absolute md:left-[5%] max-w-[min(90vw,750px)] md:pt-[6.5%] md:pl-[7.5%] px-6 z-10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-white leading-relaxed font-mono break-words">
                  Data@UCI nurtures a community of Anteaters exploring their place in an increasingly data-driven world.
                  Through workshops, professional panels, and speaker events, we help students grow analytical skills and
                  develop a deeper appreciation for data — empowering success in college and beyond.
                  Join us at meetings on Wednesdays 6:30 PM - 7:30 PM in DBH 6011.
                </p>
              </motion.div>
              <motion.h1
                className="font-quicksand text-3xl sm:text-5xl leading-tight text-neutral-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative -mt-px"
        style={{
          backgroundImage: `linear-gradient(180deg,
            ${PALETTE.blueLight} 0%,
            ${PALETTE.blueMid} 10%,
            ${PALETTE.blueStrong} 32%,
            ${PALETTE.blueStrong} 100%
          )`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(/gradients/noise-alpha-64.png)',
            backgroundRepeat: 'repeat',
            opacity: 0.05,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-16 lg:pt-40 lg:pb-24">
          <div className="mx-auto flex flex-col gap-10">
            <div className="text-white text-sm lg:text-lg">
              <div className="py-4 mb-6">
                <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6 text-white">Our Club</h2>
              </div>
              <div className="flex flex-col gap-5 leading-relaxed">
                <p className="text-white/95 font-mono">
                  As UCI’s only Data Science club, we’re building a welcoming, project-driven community where students
                  from any major can explore data together. Whether in or outside of school, we hope to unite people with 
                  a common interest of data, seeking to build a culture of advancing one another’s skills, finding our 
                  people, and creating memories that stick. We’re a student-run organization dedicated to UCI and the broader 
                  Orange County community.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <MosaicGallery items={GALLERY} />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="max-w-2xl mx-auto md:text-center font-quicksand text-4xl sm:text-5xl tracking-tight text-neutral-900 py-16">
            Our Team
          </p>
          <div className="mb-16">
            <HeaderBadge>Executive Board</HeaderBadge>
            <div className="mt-10">
              <Cards data={leadershipData} />
            </div>
          </div>
          <div className="mb-24">
            <HeaderBadge>Board Interns</HeaderBadge>
            <div className="mt-10">
              <Cards data={internData} />
            </div>
          </div>
          <div className="mb-24">
            <HeaderBadge>Faculty Advisor</HeaderBadge>
            <div className="mt-10">
              <Cards data={facultyData} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeaderBadge({ children }) {
  return (
    <div className="flex justify-center">
      <div className="px-8 py-4">
        <h2 className="font-satoshi text-3xl sm:text-4xl text-center">
          {children}
        </h2>
      </div>
    </div>
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
      <div className="mb-4 ml-1 text-xs tracking-widest uppercase text-white/70">Snapshots from our events</div>
      <div className="grid grid-cols-6 auto-rows-[6.5rem] sm:auto-rows-[7.5rem] grid-flow-dense gap-2 sm:gap-3 lg:gap-4">
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
