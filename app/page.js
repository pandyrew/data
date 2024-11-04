'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import heroPicture from '/public/photos/data-alt.png';
import sparkle from '/public/icons/sparkle.svg';
import arrow from '/public/icons/arrow.svg';
import wave1 from '/public/wave/wave-1.png';
import wave2 from '/public/wave/wave-2.png';
import gradient from '/public/gradients/front-page-gradient-2.png';
import memories1 from '/public/photos/memories1.png';
import memories2 from '/public/photos/memories2.png';
import memories3 from '/public/photos/memories3.png';
import memories4 from '/public/photos/memories4.png';
import internshipSearchStrategies from '/public/photos/internship_search_strategies.png';
import { motion } from 'framer-motion';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const text = 'Data @ UCI';

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative h-fit">
      <div className="relative w-screen h-screen flex flex-col items-center p-10 z-[30]">
        <Image
          src="/gradients/front-page-gradient-png.png"
          alt="Background Gradient"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAJWANbvRFKjQAAAABJRU5ErkJggg=="
        />
        {isClient && (
          <motion.div className="relative font-clash font-medium top-[15%] lg:text-[128px] text-5xl flex">
            {text.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0 }}
          className="relative bg-black rounded-2xl top-[22%] sm:h-[78%] h-[50%] w-full overflow-hidden"
        >
          <Image
            src={heroPicture}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl opacity-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute inset-0 flex flex-col justify-between p-8"
          >
            <div>
              <div className="lg:text-6xl text-white font-satoshi font-black tracking-normal text-4xl mb-4">
                Making the invisible, visible{' '}
                <Image src={sparkle} alt="sparkle" className="inline-block" />
              </div>
              <div className="hidden lg:block text-2xl text-[#e9e9e9] font-satoshi font-medium tracking-normal mt-4 max-w-[800px]">
                Join an expanding community of data-science lovers, and unlock
                the secrets of data with us
              </div>
            </div>
            <div className="flex-col items-center justify-center hidden sm:flex absolute right-8 bottom-8 ">
              <div className="p-4 lg:text-4xl md:text-3xl text-xl text-[#e9e9e9] font-satoshi font-medium tracking-normal">
                Learn More
              </div>
              <Image
                src={arrow}
                alt="arrow"
                className="lg:w-12 lg:h-12  w-8 h-8 animate-bounce mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="relative z-[1]">
        <Image src={gradient} alt="Gradient Background" className=""></Image>
        <Image
          src={wave1}
          alt="Wave Graphic"
          className="absolute z-[1] top-0 sm:flex hidden"
        ></Image>
        <div className="w-1/2 h-fit z-[2] absolute xl:top-[400px] lg:top-[300px] sm:top-[200px] top-[100px] left-[50%] -translate-x-1/2 flex flex-col items-center gap-5">
          <div className="w-full flex flex-col items-center justify-center p-5">
            <p className="xl:text-6xl font-clash font-medium text-5xl">
              Upcoming Event
            </p>
          </div>
          <div className="xl:w-full sm:w-[90%] w-full">
            <Image
              src={internshipSearchStrategies}
              alt="Internship Search Strategies"
              className="object-cover rounded-2xl "
            ></Image>
          </div>
        </div>
        <div className="absolute bottom-0 z-[1] w-full hidden lg:block">
          <Image src={wave2} alt="Wave Graphic" className=""></Image>
          <div className="relative w-full h-[550px]  bg-[#6BB5FF] text-white font-clash text-6xl flex flex-col gap-20 p-5 pb-20 items-center justify-center">
            <div>Memories from Data@UCI</div>
            <div className="">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    image: memories1,
    alt: 'Datathon Attendees',
    description:
      'A group of participants from the Atlantis 2024 Datathon posing together.',
  },
  {
    id: 2,
    image: memories2,
    alt: 'Data@UCI Workshop Participants',
    description:
      'A group photo of Data@UCI members after an engaging workshop. These collaborative sessions help students develop practical skills in data science and analytics.',
  },
  {
    id: 3,
    image: memories3,
    alt: 'Data@UCI Board Members',
    description: 'A group photo of Data@UCI board members from last year.',
  },
  {
    id: 4,
    image: memories4,
    alt: 'Data@UCI Workshop Participants',
    description:
      'Engaged learners at a recent Data@UCI workshop. These hands-on sessions provide valuable opportunities for students to enhance their data science skills and collaborate on real-world problems.',
  },
];
