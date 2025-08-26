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

const UPCOMING_EVENT_EXISTS = true; // Set to true when you have an event image

export default function Home() {
  return (
    <>
      <Bg />
      <main style={{ minHeight: "300vh", position: "relative" }}>
        {/* <h1>Hello World</h1> */}
      </main>
    </>
  );
}