import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Navbar from "@/components/ui/navbar";
import heroPicture from '/public/photos/data-alt.png'
import sparkle from '/public/icons/sparkle.svg'
import arrow from '/public/icons/arrow.svg'
import wave1 from '/public/wave/wave-1.png'
import wave2 from '/public/wave/wave-2.png'
import gradient from '/public/gradients/front-page-gradient-2.png'

export default function Home() {



  return (

    <div className="relative h-fit">
      <div className="relative bg-[url('/gradients/front-page-gradient-png.png')] w-screen h-screen flex flex-col items-center p-10 z-[30]">
        <div className="relative font-clash font-medium top-[15%] text-[128px]  ">Data At UCI</div>
        <div className="relative bg-black rounded-2xl top-[22%] h-[78%]">
          <Image src={heroPicture} alt='asdf' sizes="100vw" width={0} height={0} className='h-full object-cover rounded-2xl relative opacity-50'></Image>
          <div className="flex">
            <div className="absolute top-0 p-10 text-6xl bg-red text-white font-satoshi font-black tracking-normal">Making the invisible, visible</div>
            <div className="absolute top-20 p-10 text-2xl w-[800px] bg-red text-[#e9e9e9] font-satoshi font-medium tracking-normal">Join an expanding community of data-science lovers, and unlock the secrets of data with us</div>
            <div className="absolute right-20 bottom-20 p-10 text-4xl bg-red text-[#e9e9e9] font-satoshi font-medium tracking-normal">Learn More</div>
            <Image src={sparkle} alt='sparkle' className="absolute top-5 p-2 right-[40%]"></Image>
            <Image src={arrow} alt='sparkle' className="absolute bottom-10 p-2 right-[12%] animate-bob"></Image>
          </div>
        </div>
      </div>
      <div className="relative z-[1]">
        <Image src={gradient} className=""></Image>
        <Image src={wave1} className="absolute z-[1] top-0"></Image>
        <div className="absolute bottom-0 z-[1] w-full">
          <Image src={wave2} className=""></Image>
          <div className="relative w-full h-[550px]  bg-[#6BB5FF] text-white font-clash text-6xl flex flex-col gap-20 p-5 pb-20 items-center justify-center">
          <div>What Students at UCI are saying</div>
          <div className="h-[200px] ">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              className="mb-[200px]"
            />
          </div>
        </div>
      </div>
      </div>


      

      
    </div>
  )
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];