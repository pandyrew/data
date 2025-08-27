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
import Bg from '@/components/ui/bg';
import Bg2 from '@/components/ui/bg2';
import { motion } from 'framer-motion';
import Link from "next/link";


const UPCOMING_EVENT_EXISTS = true;

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Bg />
      <Bg2 />
      <main className="relative z-10">
        <section className="min-h-[300vh]grid">
          {isClient && (
            <motion.div className="place-self-center justify-self-start py-[14%] pl-[22%] text-left font-clash font-bold text-white space-y-4">
              <motion.div
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-clash"
              >
                Data @
              </motion.div>
              <motion.div
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-6xl lg:text-8xl font-clash"
              >
                UCI
              </motion.div>
            </motion.div>
          )}
        </section>

        <section className="relative text-white py-[850px] px-6 md:px-12">
          <div className="max-w-2xl mx-auto md:text-center">
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              About Data at UCI
            </h2>
            <p className="text-lg md:text-xl font-satoshi mb-4 ">
            Data@UCI aims to nurture a community of Anteaters exploring their place
            in an increasingly data-driven world. Through workshops, professional panels,
            and speaker events, we provide resources and a network for students to grow 
            their analytical skills and gain a deeper appreciation for data — helping them
            to succeed in college and in their careers. We are a student-run organization 
            ultimately dedicated to the UCI and larger Orange County communities.
            Come find out if we are a fit for you!
            </p>
              <button>
                <Link href="/about">
                  <span className="px-8 py-3 bg-white text-[#1D1B3F] font-bold rounded-full shadow hover:scale-105 transition-transform">
                    Learn More
                  </span>
                </Link>
              </button>
          </div>
        </section>
      </main>
    </>
  );
}
