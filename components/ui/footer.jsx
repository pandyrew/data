'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '/public/icons/arrow-footer.svg';


const FooterLink = memo(({ href, text }) => (
  <Link href={href}>
    <div className="group border-b-2 border-[#DEDEDE] items-end flex flex-1 pb-2 pr-2 justify-between cursor-pointer">
      {text}
      <Image
        src={arrow}
        alt="Arrow icon"
        className="transition-transform duration-200 group-hover:translate-x-2"
        width={24}
        height={24}
      />
    </div>
  </Link>
));

FooterLink.displayName = 'FooterLink';


const footerLinks = [
  {
    href: 'https://www.instagram.com/dataatuci',
    text: 'Instagram',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSclueO-3bwhLinPvt3JQIwkLfa4t-OknV6PHS6esMaFertaKQ/viewform',
    text: 'Newsletter',
  },
  {
    href: 'https://discord.com/invite/aNAgdGfYSe',
    text: 'Discord',
  },
  {
    href: 'https://linktr.ee/DataAtUCIrvine',
    text: 'Contact',
  },
];

export default function Footer() {
  return (
    <div className="w-full lg:h-[350px] h-auto flex justify-between lg:p-20 p-4 pb-5 pt-10 flex-col items-center lg:flex-row lg:items-start gap-5">
      <div className="lg:flex flex-col gap-2 hidden">
        <p className="font-anderson text-[#6A6A6A] text-xl">
          What are you waiting for?
        </p>
        <p className="font-clash font-semibold lg:text-5xl text-3xl">
          Get Involved Here:
        </p>
      </div>
      <div className="w-auto lg:w-[700px] flex flex-col justify-between gap-5">
        <div className="lg:h-[150px] h-auto grid grid-cols-1 md:grid-cols-2 gap-10 font-satoshi lg:text-2xl text-lg text-[#464646]">
          {footerLinks.map((link) => (
            <FooterLink key={link.text} href={link.href} text={link.text} />
          ))}
        </div>
        <div className="text-right font-satoshi lg:text-lg text-sm text-[#373737] mt-2">
          <p>
            <span className="font-sans">&copy;</span> 2024 Data@UCI. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
