import Image from "next/image";

import sparkleBlack from "/public/icons/sparkle-black.svg"
import groupPhoto from '/public/photos/group.png'
import gradient from '/public/gradients/about-gradient.png'
import aboutWave from '/public/wave/about-wave.png'
import juan from '/public/photos/juan.png'
import Cards from "@/components/ui/cardsnew";
import CardsTwo from "@/components/ui/cardsnewtwo";

export default function About() {



  return (
    <div className="relative h-fit">
      <div className="relative bg-[url('/gradients/front-page-gradient-png.png')] w-screen h-screen p-10 pl-[70px]">
        <div className="relative top-[18%] flex gap-1 ">
          <div className="relative flex flex-col gap-2 ">

            <p className="text-[#5EA1FF] font-clash font-medium text-3xl">About us</p>
            <p className="font-clash text-5xl">Together, we make sense of data</p>
          </div>
        <Image src={sparkleBlack} className="bottom-0 mt-8 "></Image>
        </div>
        <div className="absolute top-[33%] right-12">

          <Image src={groupPhoto} className="relative border-4 border-[#9D9D9D] rounded-xl"></Image>
        <div className="absolute xl:p-10 lg:p-8 md:p-4 -bottom-[80px]  xl:w-[500px] lg:w-[300px] w-[200px] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md h-auto rounded-xl bg-white/20 ring-1 ring-black/5
    flex items-center font-satoshi xl:text-xl shadow-md xl:right-[700px] right-[600px]" >Regular meetups, hackathons, and seminars provide opportunities for members to collaborate, network, and learn from each other.</div>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <Image src={gradient} className="relative"></Image>
        <div className="rounded-2xl bg-[#D4D4D4] p-8 px-[300px] ring-1 ring-black/5 absolute  top-[6%] bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-md shadow-md">
          <p className='font-clash text-7xl font-medium'>Our Mission</p>
        </div>
        <div className="  px-10  absolute top-[17%] w-full flex">
          <div className="flex-1">
            <Image src={juan} className="rounded-2xl border-4 border-[#9D9D9D]"></Image>
          </div>
          <div className="flex-1 p-10 font-satoshi text-2xl flex flex-col gap-5">
            <p>Data@UCI aims to nurture a community of Anteaters exploring their place in an increasingly data-driven world. Through workshops, professional panels, and speaker events, we provide resources and a network for students to grow their analytical skills and gain a deeper appreciation for data — helping them to succeed in college and in their careers. </p>
            <p>We are a student-run organization ultimately dedicated to the UCI and larger Orange County communities. </p>
          </div>
          <div>
            <div className="absolute xl:p-10 lg:p-8 md:p-4 -bottom-[80px]  xl:w-[500px] lg:w-[300px] w-[200px] bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md h-auto rounded-xl bg-white/20 ring-1 ring-black/5
    flex items-center font-satoshi xl:text-xl shadow-md xl:right-[700px] right-[600px]" >Photo taken from a Data Science Applications in Finance panel.</div>
          </div>
        </div>
        <Image src={aboutWave} className="absolute bottom-0"></Image>
      </div>
      <div className="w-full h-[500px] flex">
        <Cards></Cards>
        <CardsTwo></CardsTwo>

      </div>

    </div>
  )
}
