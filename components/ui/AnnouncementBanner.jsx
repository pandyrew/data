'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Add body padding when banner is visible to prevent content overlap
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('has-announcement');
    } else {
      document.body.classList.remove('has-announcement');
    }

    return () => {
      document.body.classList.remove('has-announcement');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-4 z-[5001]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1"></div>
            <div className="text-center flex-grow font-satoshi">
              <span className="font-medium">
                Upcoming Datathon: April 11-13th at UCI
              </span>
              <Link
                href="https://soarintodata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 font-bold underline hover:text-blue-100 transition-colors"
              >
                Register Now →
              </Link>
            </div>
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setIsVisible(false)}
                className="focus:outline-none hover:text-blue-100 transition-colors"
                aria-label="Close announcement"
              >
                <IconX size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
