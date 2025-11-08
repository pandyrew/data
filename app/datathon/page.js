'use client';

import Image from 'next/image';
import gradient from '/public/gradients/datathon-gradient.png';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import nathan from '/public/photos/nathan.png';
import textbox from '/public/icons/textbox.png';
import white_sparkle from '/public/icons/white_sparkle.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import framePng from '/public/icons/pixel_frame.png';

const BASE_BLUE = '#5A82E0';

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
      style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.35))', willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div className={`relative ${aspect} w-full`}>
        <div className="absolute" style={{ top: insetPct, right: insetPct, bottom: insetPct, left: insetPct }}>
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

const AnimatedGraph = () => {
  const WAVE_OFFSET = 54;
  return (
    <motion.div
      className="w-full h-[583px] relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2000 583"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <defs>
          <linearGradient id="paint0_linear_232_2" x1="1000" y1="0" x2="1000" y2="583" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#CAD8E6" />
            <stop offset="0.60" stopColor="#97B4F8" />
            <stop offset="0.92" stopColor={BASE_BLUE} />
            <stop offset="1" stopColor={BASE_BLUE} />
          </linearGradient>
        </defs>
        <mask id="mask0_232_2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="-200" y="0" width="2400" height="583">
          <rect width="2400" height="583" x="-200" fill="white" />
        </mask>
        <g mask="url(#mask0_232_2)">
          <motion.line
            x1="-200"
            y1="168.383"
            x2="2200"
            y2="168.383"
            stroke="#D9D9D9"
            strokeWidth="4"
            strokeDasharray="8 8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
          <g transform={`translate(0 ${WAVE_OFFSET})`}>
            <motion.path
              d="M-200 583C-150 583 338.605 336.573 416.666 329.46C494.728 322.348 556.062 454.557 620.438 452.046C684.813 449.536 947.891 168.383 1075.12 168.383C1202.35 168.383 1195.25 324.858 1307.79 322.348C1420.32 319.837 1728 100 2200 -50V583H-200Z"
              fill="url(#paint0_linear_232_2)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.path
              d="M-200 583C-150 583 338.605 336.573 416.666 329.46C494.728 322.348 556.062 454.557 620.438 452.046C684.813 449.536 947.891 168.383 1075.12 168.383C1202.35 168.383 1195.25 324.858 1307.79 322.348C1420.32 319.837 1728 100 2200 -50"
              stroke="#6492FF"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <g transform="translate(1075.12, 168.383)">
              <motion.circle r="19" fill="#6492FF" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} />
              <motion.circle r="13" fill="white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2 }} />
            </g>
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

const companies = [
  { name: 'Melissa Education', logo: '/companies/melissa_logo.png', website: 'https://www.melissa.com/education/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.1 },
  { name: 'Merage', logo: '/companies/merage.png', website: 'https://merage.uci.edu', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 0.85 },
  { name: 'SPFB', logo: '/companies/spfb.png', website: 'https://asuci.uci.edu/president/spfb/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.6 },
  { name: 'Strata Scratch', logo: '/companies/strata.png', website: 'https://stratascratch.com', span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 0.9 },
  { name: 'OIT', logo: '/companies/oit.png', website: 'https://www.oit.uci.edu/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1 },
  { name: 'Redbull', logo: '/companies/redbull.webp', website: 'https://www.redbull.com/us-en', span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 1 },
  { name: 'Monster', logo: '/companies/monster.webp', website: 'https://www.monsterenergy.com/en-us/', span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 1.6 },
  { name: 'CrowdStrike', logo: '/companies/crowdstrike.webp', website: 'https://www.crowdstrike.com/en-us/', span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 2 },
  { name: 'Guayaki', logo: '/companies/guayaki.jpg', website: 'https://yerbamadre.com/', span: 'col-span-12 sm:col-span-6 lg:col-span-4 ', scale: 1.3 },
  { name: 'Notion', logo: '/companies/notion.png', website: 'https://www.notion.com/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1 },
  { name: 'Quokka', logo: '/companies/quokka.png', website: 'https://www.quokka.io/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1 },
  { name: 'Mathworks', logo: '/companies/mathworks.webp', website: 'https://www.mathworks.com/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1 },
];

const TextBubble = ({ text, className = '', delay = 0, flip = false, flipY = false }) => {
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
};

export default function Datathon() {
  const bubbles = [
    { text: 'Similar to hackathons, datathons let students explore data by tackling a real-world project.', className: 'w-[300px] bottom-[49%] z-1', delay: 0.2 },
    { text: 'Clean, explore, and model—ask mentors for help at anytime.', className: 'w-[230px] bottom-[50%] left-[85%] z-1', delay: 0.4 },
    { text: 'Submit a notebook + slides and present to judges.', className: 'w-[250px] left-[50%] top-[78%] z-1', delay: 0.5, flipY: true }
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
    <div className="relative w-full min-h-dvh pt-[140px] overflow-x-hidden supports-[overflow:clip]:overflow-x-clip bg-gradient-to-b from-[#4E74D9] via-[#7FA1E6] to-[#CAD8E6]">
      <motion.div className="w-full h-auto relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <AnimatedGraph />
        <motion.p className="absolute lg:top-[7%] left-[5%] font-clash lg:text-7xl text-4xl font-medium w-fit top-[100px] text-white" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          What is Datathon
        </motion.p>
        <Image alt="white sparkle" src={white_sparkle} width={200} height={200} className="absolute left-[45%] bottom-[75%] pointer-events-none" />
        <Image alt="white sparkle" src={white_sparkle} width={250} height={250} className="absolute lg:right-[4%] right-[14%] top-[34%] pointer-events-none" />
        <Image alt="white sparkle" src={white_sparkle} width={210} height={210} className="absolute left-[48%] top-[50%] pointer-events-none" />
        <motion.div className="absolute left-[5%] top-[190px] max-w-[640px] pt-30 pr-6 z-10" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <p className="text-white leading-relaxed font-mono">
            A datathon is a fast-paced, team-based or individual event where you dig into real datasets, uncover insights, and present your findings. Think hackathon—but focused on data exploration, analysis, and storytelling.
          </p>
          <div className="mt-4 flex justify-left pt-2">
            <span className="px-5 py-5 bg-[#CAD8F5] text-[#4E74D9] font-bold rounded-full shadow hover:scale-105 transition-transform">
              Datathon 2026 Coming Soon
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="relative w-full flex flex-col justify-center items-center mt-6 lg:mt-8">
        <div className="hidden lg:block relative w-full h-[980px] max-w-[1280px] mx-auto overflow-visible">
          {framedPhotos.map((p, i) => (
            <FramedPhoto key={i} src={p.src} alt={p.alt} className={p.className} delay={p.delay} desktopWidthPx={p.desktopWidthPx} />
          ))}
          {bubbles.map((b, i) => (
            <TextBubble key={i} text={b.text} className={b.className} delay={b.delay} flip={!!b.flip} flipY={!!b.flipY} />
          ))}
          <Image alt="white sparkle" src={white_sparkle} width={240} height={240} className="absolute right-[94%] top-[14%] pointer-events-none" />
          <Image alt="white sparkle" src={white_sparkle} width={240} height={240} className="absolute left-[99%] top-[45%] pointer-events-none" />
          <Image alt="white sparkle" src={white_sparkle} width={240} height={240} className="absolute left-[24%] top-[49%] pointer-events-none" />
        </div>
        <div className="lg:hidden grid grid-cols-1 gap-6 w-full px-6">
          {framedPhotos.map((p, i) => (
            <FramedPhoto key={i} src={p.src} alt={p.alt} className="w-full relative" delay={p.delay} absolute={false} desktopWidthPx={360} />
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
      </motion.div>

      <div className="w-full h-fit relative flex-col items-center flex">
        <div className="h-full relative w-full flex justify-center items-center overflow-x-hidden supports-[overflow:clip]:overflow-x-clip">
          <Image alt="gradient" src={gradient} quality={100} sizes="100vw" className="absolute bg-cover h-full w-full opacity-90 pointer-events-none" />
          <StickyScroll content={content} />
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-[#CAD8E6] via-[#97B4F8] to-[#4E74D9] pt-[100px] px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-clash font-medium text-left mb-16 text-white">Past Sponsors</h2>
          <div className="grid grid-cols-12 gap-4 md:gap-6 pb-[12%]">
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${c.span} block min-w-0`}
              >
                <div className="relative h-24 md:h-28 bg-white rounded-[24px] shadow overflow-hidden flex items-center justify-center">
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={600}
                    height={300}
                    className="object-contain"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 90vw"
                    style={{ maxHeight: '82%', maxWidth: '88%', transform: `scale(${c.scale ?? 1})` }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const content = [
  { title: 'Datathon 2026: Coming Soon', description: 'Stay tuned for Datathon 2026! This will be our fourth iteration of the event and we are excited to bring you something exciting and new!', content: <div className="h-full w-full bg-[url('/photos/datathon5.png')] bg-cover flex items-center justify-center text-white font-mono">Datathon 2026</div> },
  { title: 'Datathon 2025: Soar into Data', description: 'Inspired by the Seven Wonders of the World, Soar into Data invited participants to embark on a journey of discovery through data—much like how explorers uncovered the mysteries of these magnificent monuments.', content: <div className="h-full w-full bg-[url('/photos/datathon3.png')] bg-cover flex items-center justify-center text-white font-mono">Soar 2025</div> },
  { title: 'Datathon 2024: Dive into Data', description: 'Our 2024 datathon, Atlantis, served as a beacon guiding us towards uncharted waters of discovery. Like the fabled city lost to the depths of time, our datasets harbored untold stories waiting to be unveiled. Together, we unraveled the mysteries, decoded the patterns, and charedt a course towards new horizons of knowledge and understanding.', content: <div className="h-full w-full bg-[url('/photos/datathon4.png')] bg-cover flex items-center justify-center text-white font-mono">Dive 2024</div> },
  { title: 'Datathon 2023: Embark', description: 'In 2023, we introduced our first Datathon as Embark—a theme that reflected our commitment to new adventures and continued growth. We carried this spirit forward, as it was all about trying something new and finding more ways to support our data community. We hoped participants would also discover something through the event that would fascinate them for years to come.', content: <div className="h-full w-full bg-[url('/photos/datathon1.png')] bg-cover flex items-center justify-center text-white font-mono">Embark 2023</div> },
];
