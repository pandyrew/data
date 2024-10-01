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
  );
}

const testimonials = [
  {
    quote:
      'Data @ UCI has been instrumental in my journey as a data science enthusiast. The workshops and events they organize have given me practical skills that complement my coursework perfectly.',
    name: 'Computer Science Student',
    title: "Class of '24",
  },
  {
    quote:
      "Joining Data @ UCI was one of the best decisions I made in my college career. The community is incredibly supportive, and I've made great connections with both peers and industry professionals.",
    name: 'Data Science Major',
    title: "Class of '23",
  },
  {
    quote:
      'The Datathon organized by Data @ UCI was an amazing experience. It challenged me to apply my skills to real-world problems and work collaboratively under pressure.',
    name: 'Statistics Student',
    title: "Class of '25",
  },
  {
    quote:
      'As someone new to data science, Data @ UCI provided a welcoming environment to learn and grow. Their beginner-friendly workshops helped me build a strong foundation in data analysis.',
    name: 'Business Information Management Major',
    title: "Class of '24",
  },
  {
    quote:
      'The guest speakers invited by Data @ UCI have been incredibly inspiring. Hearing from industry leaders and UCI alumni about their career paths in data science has really shaped my professional goals.',
    name: 'Informatics Student',
    title: "Class of '23",
  },
];
