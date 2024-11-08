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
            y1="-357"
            x2="1000"
            y2="526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5F9FFF" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="1" />
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
            stroke="#2E81FF"
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
              fill="#5F9FFF"
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

export default function Datathon() {
  return (
    <div className="relative w-screen pt-[140px]">
      <motion.div
        className="w-full h-auto relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedGraph />
        <motion.p
          className="absolute  lg:top-[7%] left-[5%] font-clash lg:text-7xl text-4xl font-medium w-fit top-[100px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          What is a Datathon?
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full h-[500px] flex flex-col justify-center items-center -mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative">
          <motion.div
            className="lg:w-[350px] w-[200px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Image
              alt="Nathan"
              src={nathan}
              className="rounded-xl border-[#9D9D9D] border-4 hidden lg:flex"
            />
          </motion.div>

          <motion.div
            className="sm:w-[300px] absolute lg:-top-[50px] -top-[150px] lg:left-[200px] w-[250px] -left-[10px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Image
              alt="textbox"
              src={textbox}
              className="hidden lg:flex"
            ></Image>
            <div className="absolute top-0 w-full p-6 flex items-center sm:font-normal">
              <p className="">
                Similar to hackathons, datathons provide students an opportunity
                to explore the vast world of data by working on a data science
                project related to a real-world issue.
              </p>
            </div>
          </motion.div>
        </div>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute left-[6%] top-[9%]"
        ></Image>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute lg:right-[16%] right-[14%] top-[60%]"
        ></Image>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute left-[30%] top-[80%]"
        ></Image>
      </motion.div>
      <div className="w-full h-fit relative flex-col items-center flex">
        <div className="h-full relative w-full flex justify-center items-center">
          <Image
            alt="gradient"
            src={gradient}
            quality={100}
            sizes="100vw"
            className="absolute bg-cover h-full w-full"
          />
          <StickyScroll content={content} className=""></StickyScroll>
        </div>
      </div>
    </div>
  );
}

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
