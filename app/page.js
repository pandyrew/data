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
import { testimonials } from '@/data/carousel';
import data from '/public/photos/data-alt.png';
import schedule from '/public/photos/schedule.png';

import { motion } from 'framer-motion';

const UPCOMING_EVENT_EXISTS = true; // Set to true when you have an event image

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

  const companies = [
    {
      name: 'JPMorgan Chase',
      size: 'large',
      logo: '/companies/jpmc.webp',
      website: 'https://www.jpmorganchase.com',
    },
    {
      name: 'Tesla',
      size: 'large',
      logo: '/companies/tesla.png',
      website: 'https://www.tesla.com',
    },
    {
      name: 'Charles Schwab',
      size: 'large',
      logo: '/companies/charlesschwab.png',
      website: 'https://www.schwab.com',
    },
    {
      name: 'Atlassian',
      size: 'large',
      logo: '/companies/atlassian.png',
      website: 'https://www.atlassian.com',
    },
    {
      name: 'Deloitte',
      size: 'large',
      logo: '/companies/deloitte.webp',
      website: 'https://www.deloitte.com',
    },
    {
      name: 'Square',
      size: 'medium',
      logo: '/companies/square.jpg',
      website: 'https://www.square.com',
    },
    {
      name: 'Resmed',
      size: 'medium',
      logo: '/companies/resmed.jpg',
      website: 'https://www.resmed.com',
    },
    {
      name: 'T-Mobile',
      size: 'medium',
      logo: '/companies/tmobile.avif',
      website: 'https://www.t-mobile.com',
    },
    {
      name: 'Skylar Capital Management',
      size: 'small',
      logo: '/companies/skylar.jpeg',
      website: 'https://www.linkedin.com/company/skylarcap/',
    },
    {
      name: 'Pacific Life',
      size: 'small',
      logo: '/companies/pacific life.jpg',
      website: 'https://www.pacificlife.com',
    },
    {
      name: 'Inari Medical',
      size: 'small',
      logo: '/companies/inary.png',
      website: 'https://www.inarimedical.com',
    },
    {
      name: 'First American',
      size: 'small',
      logo: '/companies/firstamerican.webp',
      website: 'https://www.firstam.com',
    },
  ];

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
            {UPCOMING_EVENT_EXISTS ? (
              <Image
                src={schedule}
                alt="Data@UCI"
                className="object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center">
                <p className="text-2xl text-gray-500 font-clash">
                  New Events Coming Soon!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 z-[1] w-full hidden lg:block">
          <Image src={wave2} alt="Wave Graphic" className=""></Image>
          <div className="relative w-full h-[550px] bg-[#6BB5FF] text-white font-clash text-6xl flex flex-col gap-20 p-5 pb-20 items-center justify-center">
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

      <div className="w-full bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-clash font-medium text-center mb-16">
            Where Our Members Have Worked
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${
                    company.size === 'large'
                      ? 'w-64 h-64 md:w-80 md:h-80'
                      : 'w-48 h-48 md:w-64 md:h-64'
                  }
                  relative bg-white rounded-xl flex items-center justify-center p-4
                  transition-transform hover:scale-105 cursor-pointer
                `}
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  className="p-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
