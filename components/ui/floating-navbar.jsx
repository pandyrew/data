'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoImage from "next/image";
import dataIcon from '/public/icons/data-icon.svg';

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#3450A3] backdrop-blur border-b border-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full pl-6 pr-28 py-3.5 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          <LogoImage
            src={dataIcon}
            alt="Data @ UCI logo"
            width={85}
            className="rounded"
          />
        </Link>

        <ul className="flex gap-14 text-sm">
          {[
            { name: "HOME", href: "/" },
            { name: "DATATHON", href: "/datathon" },
            { name: "ABOUT US", href: "/about" },
            { name: "CONTACT", href: "/contact" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={[
                  "font-sans",   
                  "transition-colors",
                  "text-lg",
                  scrolled
                    ? "text-white hover:text-gray-300"
                    : "text-white hover:text-gray-300"
                ].join(" ")}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
