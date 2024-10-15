import React from 'react';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import applyGradient from '/public/gradients/apply-gradient.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Apply() {
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
          <h1 className="font-clash xl:text-6xl lg:text-4xl md:text-2xl text-xl text-gray-800">
            Apply to be an Intern
          </h1>
          <p className="font-satoshi xl:text-lg md:text-md text-xs text-gray-600 max-w-[600px] w-1/2">
            By being an intern, youll get hands-on experience and see what goes
            on behind running a collegiate club
          </p>
        </div>
      </div>
      <div className="mt-12 flex justify-center w-full">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfnlD24UuDAnARzvfQcW_I_LO7FZ9NWlF722i9qeVLRoTKwMA/viewform"
          className="bg-[#d3d3ff] hover:text-black hover:bg-[#EEEEFF] font-clash text-white text-center py-4 px-8 md:text-2xl lg:text-3xl text-xl transition duration-300 ease-in-out transform hover:scale-[1.01] w-full"
        >
          Application Link
        </Link>
      </div>
    </div>
  );
}
