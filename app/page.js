'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BgStack from '@/components/ui/bg';
import PhotoGallery from '@/components/ui/gallery';
import Image from 'next/image';
import nathan from '/public/photos/nathan.png';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  useEffect(() => setIsClient(true), []);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const sponsors = [
    { name: 'JPMorgan Chase', logo: '/companies/jpmc.webp', website: 'https://www.jpmorganchase.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 2 },
    { name: 'Google', logo: '/companies/google.png', website: 'https://www.google.com/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 0.8 },
    { name: 'Snowflake', logo: '/companies/snowflake.svg', website: 'https://www.snowflake.com/en/', span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 0.8 },
    { name: 'NVIDIA', logo: '/companies/nvidia.png', website: 'https://www.nvidia.com/en-us/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 0.65 },
    { name: 'Charles Schwab', logo: '/companies/charlesschwab.png', website: 'https://www.schwab.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 1.1 },
    { name: 'Microsoft', logo: '/companies/microsoft.jpg', website: 'https://www.microsoft.com/en-us/', span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 1.1 },
    { name: 'Capital One', logo: '/companies/cap1.png', website: 'https://www.capitalone.com/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.5 },
    { name: 'Skylar Capital Management', logo: '/companies/skylar.jpeg', website: 'https://www.linkedin.com/company/skylarcap/', span: 'col-span-12 sm:col-span-6 lg:col-span-5', scale: 1 },
    { name: 'Atlassian', logo: '/companies/atlassian.png', website: 'https://www.atlassian.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3', scale: 1.7 },
    { name: 'Deloitte', logo: '/companies/deloitte.webp', website: 'https://www.deloitte.com', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.7 },
    { name: 'Square', logo: '/companies/square.jpg', website: 'https://www.square.com', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 1.9 },
    { name: 'Meta', logo: '/companies/meta.png', website: 'https://www.meta.com/', span: 'col-span-12 sm:col-span-6 lg:col-span-4', scale: 0.9 },
  ];

  return (
    <div className="relative">
      <BgStack />
      <main className="relative z-10">
        <section className="min-h-[120vh] grid content-start pt-24">
          {isClient && (
            <div className="self-start justify-self-start pt-[11%] pl-[19.2%] text-left text-white">
              <div className="relative inline-block align-top h-[40vh] md:h-[52vh]">
                <motion.div
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-6xl lg:text-8xl font-clash font-bold leading-none"
                >
                  Data @
                </motion.div>
                <motion.div
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-6xl lg:text-8xl font-clash font-bold leading-none"
                >
                  UCI
                </motion.div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setShowSchedule((s) => !s)}
                    aria-expanded={showSchedule}
                    aria-controls="event-schedule"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-[#1D1B3F] font-bold px-6 py-3 shadow hover:scale-[1.03] active:scale-[0.99] transition-transform"
                  >
                    {showSchedule ? 'Hide Schedule' : 'View Event Schedule'}

                    <svg
                      className={`h-5 w-5 transition-transform ${showSchedule ? 'rotate-90' : 'rotate-0'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z" />
                    </svg>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {showSchedule && (
                    <motion.div
                      id="event-schedule"
                      key="schedule"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 12 }}
                      transition={{ duration: 0.25 }}
                      className="
                        relative mt-4 w-full max-w-[min(100vw-2rem,820px)]
                        sm:mt-0 sm:absolute sm:top-[-40px] sm:left-[calc(100%-3rem)]
                        sm:w-[min(70vw,820px)]
                        md:top-[5] md:left-[calc(100%-4.5rem)]
                        lg:top-[5] lg:left-[calc(100%-6rem)]
                        xl:top-[10] xl:left-[calc(110%-8rem)]
                      "
                    >
                      <div className="relative w-full rounded-xl overflow-hidden">
                        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                          <Image
                            src=""
                            alt="Event schedule"
                            fill
                            className="object-contain"
                            sizes="(min-width:1024px) 820px, (min-width:640px) 70vw, 100vw"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </section>

        <section
          id="about"
          className="relative text-white px-6 md:px-12 pt-16 md:pt-20 mt-[20px] md:mt-[40px] lg:mt-[480px]"
        >
          <div className="max-w-2xl mx-auto md:text-center">
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              About Data at UCI
            </h2>
            <p className="text-base md:text-lg font-mono mb-4">
              Data@UCI is UCI’s premier Data Science club—the only one on campus, open to all majors. We run hands-on workshops, speaker panels, project teams, and an annual Datathon—think hackathon but with Data Science. Whether you’re brand new or building advanced ML, you’ll find mentorship, resume/portfolio support, and real projects that make an impact on the world.
            </p>
            <p className="text-base md:text-lg font-mono mb-4">
              → Learn what we do, meet the team, and see how you can get involved.
            </p>
            <Link href="/about" className="inline-block py-[4%]">
              <span className="px-8 py-4 bg-white text-[#1D1B3F] font-bold rounded-full shadow hover:scale-105 transition-transform">
                Learn More
              </span>
            </Link>
          </div>
        </section>

        <section className="relative pt-[120px] pb-[380px] text-white">
          <div className="w-full max-w-screen-xl mx-auto px-13 md:px-30">
            <div className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <PhotoGallery src="/photos/datathon1.png" alt="Datathon Picture" caption="Datathon Participants!" />
              <PhotoGallery src="/carousel/memories3.png" alt="Memories" caption="More Datathon!" />
              <PhotoGallery src="/photos/datafun1.jpg" alt="Memories" caption="Board" />
              <PhotoGallery src="/carousel/memories4.png" alt="Memories" caption="Another memory!" />
              <PhotoGallery src="/carousel/memories5.png" alt="Memories" caption="Another memory!" />
              <PhotoGallery src="/photos/datafun5.jpg" alt="Memories" caption="Another memory!" />
            </div>
          </div>
        </section>

        <section>
          <div className="w-full pt-[390px] px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-clash font-medium text-left mb-8 text-white">
                Where We Have Worked
              </h2>
              <div className="grid grid-cols-12 gap-4 md:gap-6 pb-[12%]">
                {sponsors.map((c) => (
                  <a
                    key={c.name}
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${c.span} block min-w-0`}
                  >
                    <div className="relative h-24 md:h-28 bg-white rounded-[24px] shadow overflow-hidden flex items-center justify-center transition-transform hover:scale-105">
                      <Image
                        src={c.logo}
                        alt={`${c.name} logo`}
                        width={600}
                        height={300}
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 90vw"
                        className="object-contain"
                        style={{ maxHeight: '82%', maxWidth: '88%', transform: `scale(${c.scale ?? 1})` }}
                      />
                </div>
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
