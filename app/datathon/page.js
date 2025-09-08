'use client';

import Image from 'next/image';
import gradient from '/public/gradients/datathon-gradient.png';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import nathan from '/public/photos/nathan.png';
import textbox from '/public/icons/textbox.png';
import sparkle from '/public/icons/sparkle-black.svg';
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
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ rotate: -1.5, scale: 1.02 }}
      style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.35))' }}
    >
      <div className={`relative ${aspect} w-full`}>
        <div className="absolute" style={{ top: insetPct, right: insetPct, bottom: insetPct, left: insetPct }}>
          <Image src={src} alt={alt} fill sizes="220px" className="object-cover" />
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
          <Image src={framePng} alt="" fill sizes="240px" className="object-contain" />
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
          <g transform={`translate(0 ${54})`}>
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
  { name: 'Merage', logo: '/companies/merage.png', website: 'https://merage.uci.edu', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: .85 },
  { name: 'SPFB', logo: '/companies/spfb.png', website: 'https://asuci.uci.edu/president/spfb/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.6 },
  { name: 'Strata Scratch', logo: '/companies/strata.png', website: 'https://stratascratch.com', span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 1 },
  { name: 'OIT', logo: '/companies/oit.png', website: 'https://www.oit.uci.edu/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.1 },
  { name: 'Redbull', logo: '/companies/redbull.webp', website: 'https://www.redbull.com/us-en', span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 1.1 },
  { name: 'Monster', logo: '/companies/monster.webp', website: 'https://www.monsterenergy.com/en-us/', span: 'col-span-12 sm:col-span-6 lg:col-span-6', scale: 1.6 },
  { name: 'T-Mobile', logo: '/companies/tmobile.avif', website: 'https://www.t-mobile.com', span: 'col-span-12 sm:col-span-6 lg:col-span-6', scale: 1.3 },
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
        <Image alt="textbox" src={textbox} className="hidden lg:block w-full h-auto" />
        <div className={`absolute inset-0 px-6 ${flipY ? 'flex items-end pb-10 scale-y-[-1]' : 'flex items-start pt-10'}`}>
          <p className="text-neutral-900 leading-snug">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Datathon() {
  const bubbles = [
    { text: 'Similar to hackathons, datathons let students explore data by tackling a real-world project.', className: 'w-[300px] bottom-[10%]  z-1', delay: 0.2 },
    { text: 'Clean, explore, and model with Python/SQL/ML—ask mentors anytime.', className: 'w-[230px] bottom-[16%] left-[85%] z-1', delay: 0.4 },
    { text: 'Submit a notebook + slides and present to judges.', className: 'w-[250px] left-[50%] pt-[20%] z-1', delay: 0.5, flipY: true }
  ];

  const framedPhotos = [
    { src: nathan, alt: 'Nathan', className: 'w-[270px] pt-[14%] left-[23%] z-10', delay: 0.25 },
    { src: '/photos/datathon1.png', alt: 'Datathon 1', className: 'w-[310px] right-[82%] z-10', delay: 0.35 },
    { src: '/photos/datathon2.png', alt: 'Datathon 2', className: 'w-[320px] left-[80%] z-10', delay: 0.45 },
    { src: '/photos/datathon3.png', alt: 'Datathon 3', className: 'w-[290px] left-[48%] z-10', delay: 0.55 },
    { src: '/photos/datathon4.png', alt: 'Datathon 4', className: 'w-[275px]  bottom-[1%] left-[25%] z-10', delay: 0.65 },
    { src: '/photos/datathon5.png', alt: 'Datathon 5', className: 'w-[290px] bottom-[18%] right-[22%] z-10', delay: 0.75 },
  ];

  return (
    <div className="relative w-screen min-h-screen pt-[140px] bg-gradient-to-b from-[#4E74D9] via-[#7FA1E6] to-[#CAD8E6]">
      <motion.div className="w-full h-auto relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <AnimatedGraph />
        <motion.p className="absolute lg:top-[7%] left-[5%] font-clash lg:text-7xl text-4xl font-medium w-fit top-[100px] text-white" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          What is Datathon
        </motion.p>

        <motion.div className="absolute left-[5%] top-[190px] max-w-[640px] pt-30 pr-6 z-10" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <p className="text-white leading-relaxed font-mono">
            A datathon is a fast-paced, team-based event where you dig into real datasets, uncover insights, and present your findings. Think hackathon—but focused on data exploration, analysis, and storytelling with tools like Python, SQL, and ML.
          </p>
        <div className="mt-6 flex justify-left pt-2">
          <Link href="/about" className="block w-fit">
            <span className="px-5 py-5 bg-[#CAD8F5] text-[#4E74D9] font-bold rounded-full shadow hover:scale-105 transition-transform">
              Datathon 2026
            </span>
          </Link>
        </div>
        </motion.div>
      </motion.div>

      <motion.div className="relative w-full h-[980px] flex flex-col justify-center items-center mt-6 lg:mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
        <div className="relative w-full max-w-[1280px] mx-auto">
          {framedPhotos.map((p, i) => (
            <FramedPhoto key={i} src={p.src} alt={p.alt} className={p.className} delay={p.delay} />
          ))}
          {bubbles.map((b, i) => (
            <TextBubble key={i} text={b.text} className={b.className} delay={b.delay} flip={!!b.flip} flipY={!!b.flipY} />
          ))}
        </div>

        <Image alt="black sparkle" src={sparkle} className="absolute left-[16%] top-[9%]" />
        <Image alt="black sparkle" src={sparkle} className="absolute lg:right-[8%] right-[14%] top-[60%]" />
        <Image alt="black sparkle" src={sparkle} className="absolute left-[40%] top-[80%]" />


        
      </motion.div>
      <div className="w-full h-fit relative flex-col items-center flex">
        <div className="h-full relative w-full flex justify-center items-center">
          <Image alt="gradient" src={gradient} quality={100} sizes="100vw" className="absolute bg-cover h-full w-full opacity-90" />
          <StickyScroll content={content} />
        </div>
      </div>

      <div className="w-full bg-transparent pt-[100px] px-8">
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
  { title: 'Datathon 2024: Dive into Data', description: 'Join us for Datathon 2024, an exciting journey into the world of data science. This event challenges participants to explore diverse datasets and develop innovative solutions for real-world problems.', content: <div className="h-full w-full bg-[url('/photos/datathon3.png')] bg-cover flex items-center justify-center text-white font-mono">Datathon 2024</div> },
  { title: 'Uncharted Territories', description: 'Datathon 2024 offers uncharted territories for data enthusiasts. Tackle complex problems across various domains, from healthcare to finance, using cutting-edge data analysis techniques and machine learning algorithms.', content: <div className="h-full w-full bg-[url('/photos/datathon4.png')] bg-cover flex items-center justify-center text-white font-mono">Datathon 2024</div> },
  { title: 'Collaborate and Innovate', description: 'Immerse yourself in a collaborative environment at Datathon 2024. Network with fellow data scientists, domain experts, and industry professionals. Participate in workshops and mentorship sessions to enhance your skills.', content: <div className="h-full w-full bg-[url('/photos/datathon5.png')] bg-cover flex items-center justify-center text-white font-mono">Datathon 2024</div> },
  { title: 'Our First Datathon', description: 'From April 15th to April 16th, Data @ UCI hosted EMBARK, our very first Datathon! We were thrilled to see so many talented students participate and showcase their data analysis skills! Their enthusiasm and dedication brought a new level of energy to the event. ', content: <div className="h-full w-full bg-[url('/photos/datathon1.png')] bg-cover flex items-center justify-center text-white font-mono">Embark 2023</div> },
  { title: 'Sponsors', description: 'A special thank you to UCI Office of Data and Information Technology, Melissa Data, MathWorks, Stratascratch, Crowdstrike, UCI Antrepreneur Center, Guayaki, Notion, and Quokka for making this event a huge success.', content: <div className="h-full w-full bg-[url('/photos/datathon2.png')] bg-cover flex items-center justify-center text-white font-mono">Embark 2023</div> },
];
