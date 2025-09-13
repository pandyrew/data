'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoImage from "next/image";
import dataIcon from "/public/icons/data-icon.svg";

const NAV_ITEMS = [
  { name: "HOME", href: "/" },
  { name: "DATATHON", href: "/datathon" },
  { name: "ABOUT US", href: "/about" },
  { name: "CONTACT", href: "https://linktr.ee/DataAtUCIrvine" },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#3450A3] backdrop-blur border-b border-transparent" : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full pl-6 pr-28 py-3.5 flex items-center justify-between">
        <Link href="/" className="font-semibold" aria-label="Go to home">
          <LogoImage src={dataIcon} alt="Data @ UCI logo" width={85} className="rounded" />
        </Link>

        <ul className="flex gap-14 text-sm">
          {NAV_ITEMS.map((item) => {
            const isExternal = /^https?:\/\//.test(item.href);
            const cls = [
              "font-sans",
              "transition-colors",
              "text-lg",
              scrolled ? "text-white hover:text-gray-300" : "text-white hover:text-gray-300",
            ].join(" ");

            return (
              <li key={item.name}>
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                    aria-label={item.name}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link href={item.href} className={cls} aria-label={item.name}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
