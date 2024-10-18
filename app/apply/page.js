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

  const titleText = 'Apply to be an Intern';

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
      <div className="relative w-full xl:h-[300px] lg:h-[250px] md:h-[200px] h-[150px] overflow-hidden">
        <Image
          src={applyGradient}
          alt="Apply Gradient"
          layout="fill"
          objectFit="fill"
          quality={100}
        />
        <div className="absolute inset-0 flex flex-col justify-around p-8">
          {isClient && (
            <motion.h1 className="font-clash xl:text-6xl lg:text-4xl md:text-2xl text-xl text-gray-800 flex flex-wrap">
              {titleText.split('').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          )}
          <motion.p
            className="font-satoshi xl:text-lg md:text-md text-xs text-gray-600 max-w-[600px] w-1/2"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            By being an intern, you&apos;ll get hands-on experience and see what
            goes on behind running a collegiate club
          </motion.p>
        </div>
      </div>
      <motion.div
        className="mt-12 flex justify-center w-full"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfnlD24UuDAnARzvfQcW_I_LO7FZ9NWlF722i9qeVLRoTKwMA/viewform"
          className="bg-[#d3d3ff] hover:text-black hover:bg-[#EEEEFF] font-clash text-white text-center py-4 px-8 md:text-2xl lg:text-3xl text-xl transition duration-300 ease-in-out transform hover:scale-[1.01] w-full"
        >
          Application Link
        </Link>
      </motion.div>
    </div>
  );
}
