'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BgStack from '@/components/ui/bg';
import PhotoGallery from "@/components/ui/gallery";
import Image from 'next/image';



export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

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
      name: 'First American',
      size: 'small',
      logo: '/companies/firstamerican.webp',
      website: 'https://www.firstam.com',
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
  ];


  return (
    <div className="relative">
      <BgStack />
      <main className="relative z-10">
        <section className="min-h-[120vh] grid content-start pt-24">
          {isClient && (
            <motion.div className="self-start justify-self-start py-[11%] pl-[19.2%] text-left font-clash font-bold text-white space-y-4">
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

          <section className="relative text-white pt-[600px] px-6 md:px-12">
          <div className="max-w-2xl mx-auto md:text-center">
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              About Data at UCI
            </h2>
            <p className="text-lg md:text-xl font-satoshi mb-4">
              Data@UCI aims to nurture a community of Anteaters exploring their place
              in an increasingly data-driven world. Through workshops, professional panels,
              and speaker events, we provide resources and a network for students to grow
              their analytical skills and gain a deeper appreciation for data — helping them
              to succeed in college and in their careers. We are a student-run organization
              ultimately dedicated to the UCI and larger Orange County communities.
              Come find out if we are a fit for you!
            </p>
            <Link href="/about" className="inline-block py-[4%]">
              <span className="px-8 py-4 bg-white text-[#1D1B3F] font-bold rounded-full shadow hover:scale-105 transition-transform">
                Learn More
              </span>
            </Link>
          </div>
        </section>

        <section className="relative pt-[120px] pb-[400px] text-white">
          <div className="w-full max-w-screen-xl mx-auto px-13 md:px-30">
            <div className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <PhotoGallery
                src="/carousel/memories1.png"
                alt="Datathon Picture"
                caption="Datathon Participants!"
              />
              <PhotoGallery
                src="/carousel/memories2.png"
                alt="Memories"
                caption="More Datathon!"
              />
              <PhotoGallery
                src="/carousel/memories3.png"
                alt="Memories"
                caption="Board"
              />
              <PhotoGallery
                src="/carousel/memories4.png"
                alt="Memories"
                caption="Another memory!"
              />
              <PhotoGallery
                src="/carousel/memories5.png"
                alt="Memories"
                caption="Another memory!"
              />
              <PhotoGallery
                src="/carousel/memories8.jpg"
                alt="Memories"
                caption="Another memory!"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="w-full bg-transparent pt-[330px] px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-clash font-medium text-center mb-16 text-white">
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
        </section>

      </main>
    </div>
  );
}
