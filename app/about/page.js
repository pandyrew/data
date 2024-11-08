import Image from 'next/image';

import sparkleBlack from '/public/icons/sparkle-black.svg';
import groupPhoto from '/public/photos/group.png';
import gradient from '/public/gradients/about-gradient.png';
import aboutWave from '/public/wave/about-wave.png';
import juan from '/public/photos/juan.png';

export default function About() {
  return (
    <div className="lg:relative h-fit w-full">
      <div className="relative bg-[url('/gradients/front-page-gradient-png.png')] h-screen lg:p-10 lg:pl-[70px] p-0 h-sm:h-auto h-md:h-80">
        <div className="relative sm:top-[18%] flex gap-1 top-[20%]">
          <div className="relative flex flex-col gap-2 justify-center items-center sm:justify-normal sm:items-start z-50">
            <p className="text-[#5EA1FF] font-clash font-medium sm:text-3xl text-2xl">
              About us
            </p>
            <p className="font-clash sm:text-5xl text-3xl text-center">
              Together, we make sense of data
            </p>
          </div>
          <Image
            src={sparkleBlack}
            alt="Sparkle Icon"
            className="bottom-0 mt-8 hidden sm:block"
          ></Image>
        </div>
        <div className="absolute sm:top-[33%] sm:right-12 top-[48%] z-1">
          <Image
            src={groupPhoto}
            alt="Group Photo"
            className="relative border-4 border-[#9D9D9D] rounded-xl"
          ></Image>
          <div
            className="absolute xl:p-10 lg:p-8 md:p-4 -bottom-[80px]  xl:w-[500px] lg:w-[300px] w-[200px] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md h-auto rounded-xl bg-white/20 ring-1 ring-black/5
   items-center font-satoshi xl:text-xl shadow-md xl:right-[700px] right-[600px] hidden lg:flex"
          >
            Regular meetups, hackathons, and seminars provide opportunities for
            members to collaborate, network, and learn from each other.
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center z-[12] lg:h-full h-screen">
        <Image
          src={gradient}
          alt="Gradient Background"
          className="relative inset-0 h-full w-full object-cover"
        ></Image>
        <div className="rounded-2xl bg-[#D4D4D4] p-8 lg:px-[300px] px-4 ring-1 ring-black/5 absolute top-[6%] bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-md shadow-md">
          <p className="font-clash lg:text-7xl text-3xl font-medium">
            Our Mission
          </p>
        </div>
        <div className="sm:flex-row flex-col px-10  absolute top-[19%] w-full flex">
          <div className="flex-1">
            <Image
              src={juan}
              alt="Juan"
              className="rounded-2xl border-4 border-[#9D9D9D]"
            ></Image>
          </div>
          <div className="flex-1 sm:p-10 p-5 font-satoshi lg:text-2xl flex flex-col gap-5 text-sm">
            <p>
              Data@UCI aims to nurture a community of Anteaters exploring their
              place in an increasingly data-driven world. Through workshops,
              professional panels, and speaker events, we provide resources and
              a network for students to grow their analytical skills and gain a
              deeper appreciation for data — helping them to succeed in college
              and in their careers.{' '}
            </p>
            <p className="hidden sm:flex">
              We are a student-run organization ultimately dedicated to the UCI
              and larger Orange County communities.{' '}
            </p>
          </div>
          <div>
            <div
              className="absolute xl:p-10 lg:p-8 md:p-4 -bottom-[80px]  xl:w-[500px] lg:w-[300px] w-[200px] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md h-auto rounded-xl bg-white/20 ring-1 ring-black/5
     items-center font-satoshi xl:text-xl shadow-md xl:right-[700px] right-[600px] hidden lg:flex"
            >
              Photo taken from a Data Science Applications in Finance panel.
            </div>
          </div>
        </div>
        <Image
          src={aboutWave}
          alt="Wave Graphic"
          className="absolute bottom-0"
        ></Image>
      </div>
    </div>
  );
}
