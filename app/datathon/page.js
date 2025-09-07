'use client';

import Image from 'next/image';
import gradient from '/public/gradients/datathon-gradient.png';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import nathan from '/public/photos/nathan.png';
import textbox from '/public/icons/textbox.png';
import sparkle from '/public/icons/sparkle-black.svg';
import { motion } from 'framer-motion';

const AnimatedGraph = () => {
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
          <linearGradient
            id="paint0_linear_232_2"
            x1="1000"
            y1="0"
            x2="1000"
            y2="583"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#CAD8E6" />
            <stop offset="0.6" stopColor="#97B4F8" />
            <stop offset="1" stopColor="#5A82E0" />
          </linearGradient>
        </defs>

        <mask
          id="mask0_232_2"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="-200"
          y="0"
          width="2400"
          height="583"
        >
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
            <motion.circle
              r="19"
              fill="#6492FF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
            <motion.circle
              r="13"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </g>
        </g>
      </svg>
    </motion.div>
  );
};

const TextBubble = ({ text, className = '', delay = 0, flip = false }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Image
        alt="textbox"
        src={textbox}
        className={`hidden lg:block w-full h-auto ${flip ? '-scale-x-100' : ''}`}
      />
      <div className="absolute inset-0 flex items-start justify-start pt-10 px-6">
        <p className="text-neutral-900 leading-snug">{text}</p>
      </div>
    </motion.div>
  );
};

export default function Datathon() {
  const bubbles = [
    {
      text:
        'Similar to hackathons, datathons let students explore data by tackling a real-world project.',
      className:
        'w-[300px] top-[10px] left-1/2 -translate-x-1/2 lg:top-[-80px] lg:left-[200px] lg:translate-x-0 z-10',
      delay: 0.20,
    },
    {
      text:
        'Team up with mentors and peers to learn fast and build something meaningful.',
      className:
        'w-[300px] top-[110px] left-1/2 -translate-x-1/2 lg:top-[-40px] lg:left-auto lg:right-[12%] lg:translate-x-0 z-10',
      delay: 0.30,
      flip: true,
    },
    {
      text:
        'Clean, explore, and model with Python/SQL/ML—ask mentors anytime.',
      className:
        'w-[320px] top-[210px] left-1/2 -translate-x-1/2 lg:top-[50px] lg:left-[30%] lg:translate-x-0 z-10',
      delay: 0.40,
    },
    {
      text:
        'Submit a notebook + slides and present to judges.',
      className:
        'w-[300px] top-[310px] left-1/2 -translate-x-1/2 lg:top-[110px] lg:left-auto lg:right-[20%] lg:translate-x-0 z-10',
      delay: 0.50,
      flip: true,
    },
    {
      text:
        'Tracks span health, finance, and more—pick a challenge and dive in.',
      className:
        'w-[300px] top-[410px] left-1/2 -translate-x-1/2 lg:top-[190px] lg:left-[12%] lg:translate-x-0 z-10',
      delay: 0.60,
    },
    {
      text:
        'Workshops, mentorship, prizes, food—and a portfolio-ready project.',
      className:
        'w-[320px] top-[490px] left-1/2 -translate-x-1/2 lg:top-[250px] lg:left-auto lg:right-[8%] lg:translate-x-0 z-10',
      delay: 0.70,
      flip: true,
    },
  ];

  return (
    <div className="relative w-screen min-h-screen pt-[140px] bg-gradient-to-b from-[#4E74D9] via-[#7FA1E6] to-[#CAD8E6]">
      <motion.div
        className="w-full h-auto relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedGraph />
        <motion.p
          className="absolute lg:top-[7%] left-[5%] font-clash lg:text-7xl text-4xl font-medium w-fit top-[100px] text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          What is Datathon
        </motion.p>
      </motion.div>

      <section className="relative w-full flex justify-center mt-6 lg:mt-8 px-6">
        <p className="max-w-3xl text-center text-white/95 leading-relaxed">
          A datathon is a fast-paced, team-based event where you dig into real datasets,
          uncover insights, and present your findings. Think hackathon—but focused on data
          exploration, analysis, and storytelling with tools like Python, SQL, and ML.
        </p>
      </section>

      <motion.div
        className="relative w-full h-[520px] flex flex-col justify-center items-center mt-6 lg:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative w-full">
          {bubbles.map((b, i) => (
            <TextBubble
              key={i}
              text={b.text}
              className={b.className}
              delay={b.delay}
              flip={!!b.flip}
            />
          ))}
        </div>

        <Image alt="black sparkle" src={sparkle} className="absolute left-[6%] top-[9%]" />
        <Image alt="black sparkle" src={sparkle} className="absolute lg:right-[16%] right-[14%] top-[60%]" />
        <Image alt="black sparkle" src={sparkle} className="absolute left-[30%] top-[80%]" />
      </motion.div>

      <div className="w-full h-fit relative flex-col items-center flex">
        <div className="h-full relative w-full flex justify-center items-center">
          <Image
            alt="gradient"
            src={gradient}
            quality={100}
            sizes="100vw"
            className="absolute bg-cover h-full w-full opacity-90"
          />
          <StickyScroll content={content} />
        </div>
      </div>

      <div className="w-full bg-transparent pt-[100px] px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-clash font-medium text-left mb-16 text-white">
            Past Sponsors
          </h2>

          <div className="grid grid-cols-12 gap-4 md:gap-6 pb-[12%]">
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`${c.span} block min-w-0`}
              >
                <div className="relative h-24 md:h-28 bg-white rounded-[24px] shadow flex items-center justify-center transition-transform hover:scale-105">
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 90vw"
                    style={{ objectFit: 'contain' }}
                    className="pointer-events-none"
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

const companies = [
  { name: 'JPMorgan Chase', logo: '/companies/jpmc.webp', website: 'https://www.jpmorganchase.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4' },
  { name: 'Tesla', logo: '/companies/tesla.png', website: 'https://www.tesla.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-5' },
  { name: 'Charles Schwab', logo: '/companies/charlesschwab.png', website: 'https://www.schwab.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3' },

  { name: 'Atlassian', logo: '/companies/atlassian.png', website: 'https://www.atlassian.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-5' },
  { name: 'Deloitte', logo: '/companies/deloitte.webp', website: 'https://www.deloitte.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-4' },
  { name: 'Square', logo: '/companies/square.jpg', website: 'https://www.square.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3' },

  { name: 'Resmed', logo: '/companies/resmed.jpg', website: 'https://www.resmed.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6' },
  { name: 'T-Mobile', logo: '/companies/tmobile.avif', website: 'https://www.t-mobile.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6' },

  { name: 'First American', logo: '/companies/firstamerican.webp', website: 'https://www.firstam.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
  { name: 'Skylar Capital Management', logo: '/companies/skylar.jpeg', website: 'https://www.linkedin.com/company/skylarcap/',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
  { name: 'Pacific Life', logo: '/companies/pacific-life.jpg', website: 'https://www.pacificlife.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
  { name: 'Inari Medical', logo: '/companies/inary.png', website: 'https://www.inarimedical.com',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
];

const content = [
  {
    title: 'Datathon 2024: Dive into Data',
    description:
      'Join us for Datathon 2024, an exciting journey into the world of data science. This event challenges participants to explore diverse datasets and develop innovative solutions for real-world problems.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon3.png')] bg-cover flex items-center justify-center text-white">
        Datathon 2024
      </div>
    ),
  },
  {
    title: 'Uncharted Territories',
    description:
      'Datathon 2024 offers uncharted territories for data enthusiasts. Tackle complex problems across various domains, from healthcare to finance, using cutting-edge data analysis techniques and machine learning algorithms.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon4.png')] bg-cover flex items-center justify-center text-white">
        Datathon 2024
      </div>
    ),
  },
  {
    title: 'Collaborate and Innovate',
    description:
      'Immerse yourself in a collaborative environment at Datathon 2024. Network with fellow data scientists, domain experts, and industry professionals. Participate in workshops and mentorship sessions to enhance your skills.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon5.png')] bg-cover flex items-center justify-center text-white">
        Datathon 2024
      </div>
    ),
  },
  {
    title: 'Our First Datathon',
    description:
      'From April 15th to April 16th, Data @ UCI hosted EMBARK, our very first Datathon! We were thrilled to see so many talented students participate and showcase their data analysis skills! Their enthusiasm and dedication brought a new level of energy to the event. ',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon1.png')] bg-cover flex items-center justify-center text-white">
        Embark 2023
      </div>
    ),
  },
  {
    title: 'Sponsors',
    description:
      'A special thank you to UCI Office of Data and Information Technology, Melissa Data, MathWorks, Stratascratch, Crowdstrike, UCI Antrepreneur Center, Guayaki, Notion, and Quokka for making this event a huge success.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon2.png')] bg-cover flex items-center justify-center text-white">
        Embark 2023
      </div>
    ),
  },
];
