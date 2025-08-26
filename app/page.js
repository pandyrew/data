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
import { motion } from 'framer-motion';

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
      <main className="min-h-[300vh] grid relative">
        {isClient && (
          <motion.div className="place-self-top justify-self-start py-[14%] pl-[22%] text-left font-clash font-bold text-white space-y-4">
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
      </main>
    </>
  );
}
