'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import applyGradient from '/public/gradients/apply-gradient.png';

export default function Apply() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const titleText = 'Mentorship Program Interest Form';

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-[90vh] bg-white mt-[170px] md:p-[70px] p-2">
      <motion.div
        className="relative w-full xl:h-[300px] lg:h-[250px] md:h-[200px] h-[150px] overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <Image
          src={applyGradient}
          alt="Apply Gradient"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col justify-around p-8">
          <div className="font-clash xl:text-6xl lg:text-4xl md:text-2xl text-xl text-gray-800 flex flex-wrap">
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.03,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="font-satoshi xl:text-lg md:text-md text-xs text-gray-600 max-w-[600px] w-1/2"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            As a mentee, you&apos;ll receive guidance from experienced data
            science students and career development support. For mentors, this
            is a chance to develop leadership skills and make an impact on
            fellow students&apos; data science journeys.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center w-full gap-6"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <Link
          href="https://forms.gle/7d5ztTR6KpjVbzCt9"
          className="bg-[#d3d3ff] hover:text-black hover:bg-[#EEEEFF] font-clash text-white text-center py-4 px-8 md:text-2xl lg:text-3xl text-xl transition duration-300 ease-in-out transform hover:scale-[1.01] w-full"
        >
          Mentee Form
        </Link>
        <Link
          href="https://forms.gle/CopTKAjiXzJpdJkMA"
          className="bg-[#d3d3ff] hover:text-black hover:bg-[#EEEEFF] font-clash text-white text-center py-4 px-8 md:text-2xl lg:text-3xl text-xl transition duration-300 ease-in-out transform hover:scale-[1.01] w-full"
        >
          Mentor Form
        </Link>
      </motion.div>
    </div>
  );
}
