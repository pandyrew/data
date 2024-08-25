import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Navbar from "@/components/ui/navbar";
import heroPicture from '/public/photos/data-alt.png'
import sparkle from '/public/icons/sparkle.svg'
import arrow from '/public/icons/arrow.svg'
export default function Home() {



  return (
    // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    //   <InfiniteMovingCards
    //     items={testimonials}
    //     direction="right"
    //     speed="slow"
    //   />
    // </div>
    <div className="relative h-[10000px]">
      <div className="absolute bg-[url('/gradients/front-page-gradient-png.png')] w-screen h-screen flex flex-col items-center p-10">
        <div className="relative font-clash font-medium top-[15%] text-[128px] ">Data At UCI</div>
        <div className="relative bg-black rounded-2xl top-[22%]">
          <Image src={heroPicture} alt='asdf' sizes="100vw" width={0} height={0} className='w-full h-auto rounded-2xl relative opacity-50'></Image>
          <div className="flex">
            <div className="absolute top-0 p-10 text-6xl bg-red text-white font-satoshi font-black tracking-normal">Making the invisible, visible</div>
            <div className="absolute top-20 p-10 text-2xl w-[800px] bg-red text-[#e9e9e9] font-satoshi font-medium tracking-normal">Join an expanding community of data-science lovers, and unlock the secrets of data with us</div>
            <div className="absolute right-20 bottom-20 p-10 text-4xl bg-red text-[#e9e9e9] font-satoshi font-medium tracking-normal">Learn More</div>
            <Image src={sparkle} alt='sparkle' className="absolute top-5 p-2 right-[40%]"></Image>
            <Image src={arrow} alt='sparkle' className="absolute bottom-10 p-2 right-[12%] animate-bob"></Image>
          </div>
        </div>
      </div>
        <Navbar></Navbar>
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