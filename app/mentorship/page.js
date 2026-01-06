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

function FramedPhoto({
  src,
  alt,
  className = '',
  delay = 0,
  aspect = 'aspect-square',
  insetPct = '14%',
  frameOutsetPct = '10%',
  absolute = true,
  desktopWidthPx = 320,
}) {
  return (
    <motion.div
      className={`${absolute ? 'absolute' : ''} ${className}`}
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ rotate: -1.2, scale: 1.015 }}
      style={{
        filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.35))',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      <div className={`relative ${aspect} w-full`}>
        <div
          className="absolute"
          style={{ top: insetPct, right: insetPct, bottom: insetPct, left: insetPct }}
        >
          <Image
            src={src}
            alt={alt ?? ''}
            fill
            className="object-cover"
            quality={85}
            sizes={`(min-width:1536px) ${desktopWidthPx}px,
                    (min-width:1280px) ${Math.round(desktopWidthPx * 0.95)}px,
                    (min-width:1024px) ${Math.round(desktopWidthPx * 0.9)}px,
                    (min-width:640px) 50vw,
                    90vw`}
            priority={false}
          />
        </div>

        <div
          className="absolute z-20 pointer-events-none"
          style={{
            top: `-${frameOutsetPct}`,
            right: `-${frameOutsetPct}`,
            bottom: `-${frameOutsetPct}`,
            left: `-${frameOutsetPct}`,
          }}
        >
          <Image
            src={framePng}
            alt=""
            fill
            className="object-contain"
            quality={92}
            sizes={`(min-width:1536px) ${desktopWidthPx + 64}px,
                    (min-width:1280px) ${desktopWidthPx + 48}px,
                    (min-width:1024px) ${desktopWidthPx + 32}px,
                    (min-width:640px) 55vw,
                    95vw`}
            priority={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

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

  const framedPhotos = [
    { src: '/photos/datafun7.jpg', alt: 'Friends', className: 'w-[270px] top-[68%] left-[23%] z-10', delay: 0.25, desktopWidthPx: 270 },
    { src: '/photos/workshop.JPG', alt: 'Workshop', className: 'w-[310px] top-[50%] right-[82%] z-10', delay: 0.35, desktopWidthPx: 310 },
    { src: '/photos/datafun1.jpg', alt: 'Deep discussion', className: 'w-[320px] top-[50%] left-[80%] z-10', delay: 0.45, desktopWidthPx: 320 },
    { src: '/photos/datathon2.png', alt: 'Besties', className: 'w-[290px] top-[50%] left-[48%] z-10', delay: 0.55, desktopWidthPx: 290 },
    { src: '/photos/datafun5.jpg', alt: 'Board', className: 'w-[275px] top-[21%] left-[25%] z-10', delay: 0.65, desktopWidthPx: 275 },
    { src: '/photos/datafun6.jpg', alt: 'Free drinks!', className: 'w-[290px] top-[19.5%] right-[22%] z-10', delay: 0.75, desktopWidthPx: 290 },
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
              Mentorship Program:
              <br />
              Winter Project Series
            </motion.h1>

            <motion.p
              className="text-white/95 font-mono leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Participants will collaborate with peers in a small team to develop a data
              science project under the guidance of an industry mentor. Through this process,
              they will strengthen their collaboration, problem-solving, and technical data science
              skills while receiving program support. The program is designed to foster growth,
              encourage exploration of new ideas, and enable participants to produce a meaningful,
              high-impact project. Weekly events are held to supplement and support participants, covering 
              topics such as data visualization, machine learning, and other skills that can be directly 
              applied to their projects.
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
          <div className="hidden lg:block relative w-full h-[980px] max-w-[1280px] mx-auto overflow-visible">
            {framedPhotos.map((p, i) => (
              <FramedPhoto
                key={i}
                src={p.src}
                alt={p.alt}
                className={p.className}
                delay={p.delay}
                desktopWidthPx={p.desktopWidthPx}
              />
            ))}

            {bubbles.map((b, i) => (
              <TextBubble
                key={i}
                text={b.text}
                className={b.className}
                delay={b.delay}
                flip={!!b.flip}
                flipY={!!b.flipY}
              />
            ))}

            <Image
              alt="white sparkle"
              src={white_sparkle}
              width={240}
              height={240}
              className="absolute right-[94%] top-[14%] pointer-events-none"
            />
            <Image
              alt="white sparkle"
              src={white_sparkle}
              width={240}
              height={240}
              className="absolute left-[99%] top-[45%] pointer-events-none"
            />
            <Image
              alt="white sparkle"
              src={white_sparkle}
              width={240}
              height={240}
              className="absolute left-[24%] top-[49%] pointer-events-none"
            />
          </div>

          {/* Mobile stacked */}
          <div className="lg:hidden grid grid-cols-1 gap-6 w-full">
            {framedPhotos.map((p, i) => (
              <FramedPhoto
                key={i}
                src={p.src}
                alt={p.alt}
                className="w-full relative"
                delay={p.delay}
                absolute={false}
                desktopWidthPx={360}
              />
            ))}

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
