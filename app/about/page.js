import Image from "next/image";

import sparkleBlack from "/public/icons/sparkle-black.svg"
import groupPhoto from '/public/photos/group.png'
export default function About() {



  return (
    <div className="relative h-fit ">
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

    </div>
  )
}
