import Image from 'next/image';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import Navbar from '@/components/ui/navbar';
import heroPicture from '/public/photos/data-alt.png';
import sparkle from '/public/icons/sparkle.svg';
import arrow from '/public/icons/arrow.svg';
import wave1 from '/public/wave/wave-1.png';
import wave2 from '/public/wave/wave-2.png';
import gradient from '/public/gradients/front-page-gradient-2.png';
import intro from '/public/photos/intro.png';
import memories1 from '/public/photos/memories1.png';
import memories2 from '/public/photos/memories2.png';
import memories3 from '/public/photos/memories3.png';
import memories4 from '/public/photos/memories4.png';

export default function Home() {
  return (
    <div className="relative h-fit">
      <div className="relative bg-[url('/gradients/front-page-gradient-png.png')] w-screen h-screen flex flex-col items-center p-10 z-[30]">
        <div className="relative font-clash font-medium top-[15%] lg:text-[128px] text-5xl ">
          Data @ UCI
        </div>
        <div className="relative bg-black rounded-2xl top-[22%] sm:h-[78%] h-[50%]">
          <Image
            src={heroPicture}
            alt="asdf"
            sizes="100vw"
            width={0}
            height={0}
            className="h-full object-cover rounded-2xl relative opacity-50"
          ></Image>
          <div className="flex">
            <div className="absolute top-0 p-10 lg:text-6xl bg-red text-white font-satoshi font-black tracking-normal text-4xl">
              Making the invisible, visible{' '}
              <Image
                src={sparkle}
                alt="sparkle"
                className="absolute top-5 left-[94%] hidden lg:flex p-2"
              ></Image>
            </div>
            <div className="hidden lg:flex absolute top-20 p-10 text-2xl w-[800px] bg-red text-[#e9e9e9] font-satoshi font-medium tracking-normal">
              Join an expanding community of data-science lovers, and unlock the
              secrets of data with us
            </div>
            <div className="absolute right-[5%] bottom-[5%] flex-col items-center justify-center hidden sm:flex">
              <div className="p-10 lg:text-4xl md:ext-3xl text-xl bg-red text-[#e9e9e9] font-satoshi font-medium tracking-normal">
                Learn More
              </div>
              <Image
                src={arrow}
                alt="sparkle"
                className="lg:p-2 animate-bob lg:-mt-3 p-4 -mt-10"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-[1]">
        <Image src={gradient} alt="Gradient Background" className=""></Image>
        <Image
          src={wave1}
          alt="Wave Graphic"
          className="absolute z-[1] top-0 sm:flex hidden"
        ></Image>
        <div className="w-1/2 h-fit z-[2] absolute xl:top-[400px] lg:top-[300px] sm:top-[200px] top-[100px] left-[50%] -translate-x-1/2 flex flex-col items-center gap-5">
          <div className="w-full flex flex-col items-center justify-center p-5">
            <p className="xl:text-6xl font-clash font-medium text-5xl">
              Upcoming Event
            </p>
          </div>
          <div className="xl:w-full sm:w-[90%] w-full">
            <Image
              src={intro}
              alt="intro event"
              className="object-cover rounded-2xl "
            ></Image>
          </div>
        </div>
        <div className="absolute bottom-0 z-[1] w-full hidden lg:block">
          <Image src={wave2} alt="Wave Graphic" className=""></Image>
          <div className="relative w-full h-[550px]  bg-[#6BB5FF] text-white font-clash text-6xl flex flex-col gap-20 p-5 pb-20 items-center justify-center">
            <div>Memories from Data@UCI</div>
            <div className="">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    image: memories1,
    alt: 'Datathon Attendees',
    description:
      'A group of participants from the Atlantis 2024 Datathon posing together.',
  },
  {
    id: 2,
    image: memories2,
    alt: 'Data@UCI Workshop Participants',
    description:
      'A group photo of Data@UCI members after an engaging workshop. These collaborative sessions help students develop practical skills in data science and analytics.',
  },
  {
    id: 3,
    image: memories3,
    alt: 'Data@UCI Board Members',
    description: 'A group photo of Data@UCI board members from last year.',
  },
  {
    id: 4,
    image: memories4,
    alt: 'Data@UCI Workshop Participants',
    description:
      'Engaged learners at a recent Data@UCI workshop. These hands-on sessions provide valuable opportunities for students to enhance their data science skills and collaborate on real-world problems.',
  },
];
