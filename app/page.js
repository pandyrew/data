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
    { name: 'JPMorgan Chase', logo: '/companies/jpmc.webp', website: 'https://www.jpmorganchase.com', span: 'col-span-12 sm:col-span-6 lg:col-span-4' },
    { name: 'Tesla', logo: '/companies/tesla.png', website: 'https://www.tesla.com', span: 'col-span-12 sm:col-span-6 lg:col-span-5' },
    { name: 'Charles Schwab', logo: '/companies/charlesschwab.png', website: 'https://www.schwab.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
    { name: 'Atlassian', logo: '/companies/atlassian.png', website: 'https://www.atlassian.com', span: 'col-span-12 sm:col-span-6 lg:col-span-5' },
    { name: 'Deloitte', logo: '/companies/deloitte.webp', website: 'https://www.deloitte.com', span: 'col-span-12 sm:col-span-6 lg:col-span-4' },
    { name: 'Square', logo: '/companies/square.jpg', website: 'https://www.square.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
    { name: 'Resmed', logo: '/companies/resmed.jpg', website: 'https://www.resmed.com', span: 'col-span-12 sm:col-span-6 lg:col-span-6' },
    { name: 'T-Mobile', logo: '/companies/tmobile.avif', website: 'https://www.t-mobile.com', span: 'col-span-12 sm:col-span-6 lg:col-span-6' },
    { name: 'First American', logo: '/companies/firstamerican.webp', website: 'https://www.firstam.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
    { name: 'Skylar Capital Management', logo: '/companies/skylar.jpeg', website: 'https://www.linkedin.com/company/skylarcap/', span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
    { name: 'Pacific Life', logo: '/companies/pacific-life.jpg', website: 'https://www.pacificlife.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
    { name: 'Inari Medical', logo: '/companies/inary.png', website: 'https://www.inarimedical.com', span: 'col-span-12 sm:col-span-6 lg:col-span-3' },
  ];

  return (
    <div className="relative">
      <BgStack />
      <main className="relative z-10">
        <section className="min-h-[120vh] grid content-start pt-24">
          {isClient && (
            <motion.div className="self-start justify-self-start pt-[11%] pl-[19.2%] text-left font-clash font-bold text-white space-y-4">
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

        <section
          id="about"
          className="relative text-white px-6 md:px-12 pt-16 md:pt-20 mt-[20px] md:mt-[40px] lg:mt-[480px]"
        >
          <div className="max-w-2xl mx-auto md:text-center">
            <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
              About Data at UCI
            </h2>
            <p className="text-base md:text-lg font-mono mb-4 text-bold">
              Data@UCI is UCI’s premier Data Science club—the only one on campus, open to all majors.
              We run hands-on workshops, speaker panels, project teams, and an annual Datathon—think
              hackathon but with Data Science. Whether you’re brand new or building advanced ML, you’ll
              find mentorship, resume/portfolio support, and real projects that make an impact on the world.
            </p>
            <p className="text-base md:text-lg font-mono mb-4 text-medium">
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
              <PhotoGallery src="/carousel/memories1.png" alt="Datathon Picture" caption="Datathon Participants!" />
              <PhotoGallery src="/carousel/memories2.png" alt="Memories" caption="More Datathon!" />
              <PhotoGallery src="/carousel/memories3.png" alt="Memories" caption="Board" />
              <PhotoGallery src="/carousel/memories4.png" alt="Memories" caption="Another memory!" />
              <PhotoGallery src="/carousel/memories5.png" alt="Memories" caption="Another memory!" />
              <PhotoGallery src="/carousel/memories8.jpg" alt="Memories" caption="Another memory!" />
            </div>
          </div>
        </section>

        <section>
          <div className="w-full bg-transparent pt-[360px] px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-clash font-medium text-center mb-16 text-white">
                Where Our Members Have Worked
              </h2>
              <div className="grid grid-cols-12 gap-4 md:gap-6 pb-[12%]">
                {companies.map((c) => (
                  <a
                    key={c.name}
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${c.span} block min-w-0`}
                  >
                    <div className="relative h-24 md:h-28 bg-white rounded-[24px] shadow flex items-center justify-center transition-transform hover:scale-105">
                      <Image
                        src={c.logo}
                        alt={`${c.name} logo`}
                        fill
                        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 90vw"
                        style={{ objectFit: 'contain' }}
                        className="pointer-events-none"
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
