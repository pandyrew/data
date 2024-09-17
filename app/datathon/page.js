import Image from 'next/image';
import graph from '/public/wave/datathon-graph.png';
import gradient from '/public/gradients/datathon-gradient.png';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import nathan from '/public/photos/nathan.png';
import textbox from '/public/icons/textbox.png';
import sparkle from '/public/icons/sparkle-black.svg';
export default function Datathon() {
  return (
    // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    //   <InfiniteMovingCards
    //     items={testimonials}
    //     direction="right"
    //     speed="slow"
    //   />
    // </div>
    <div className="relative w-screen pt-[140px]">
      <div className="w-full h-auto relative ">
        <Image
          alt="Datathon Graph"
          src={graph}
          quality={100}
          sizes="100vw"
          className=""
        />
        <p className="absolute lg:top-[7%] left-[5%] font-clash lg:text-7xl text-4xl font-medium w-fit top-0">
          What is a Datathon?
        </p>
      </div>
      <div className="relative w-full h-[500px]  flex flex-col justify-center items-center -mt-10">
        <div className="relative">
          <div className="lg:w-[350px] w-[200px]">
            <Image
              alt="Nathan"
              src={nathan}
              className="rounded-xl border-[#9D9D9D] border-4 hidden lg:flex"
            ></Image>
          </div>
          <div className="sm:w-[300px] absolute lg:-top-[50px] -top-[150px] lg:left-[200px] w-[250px] -left-[10px]">
            <Image
              alt="textbox"
              src={textbox}
              className="hidden lg:flex"
            ></Image>
            <div className="absolute top-0 w-full p-6 flex items-center sm:font-normal">
              <p className="">
                Similar to hackathons, datathons provide students an opportunity
                to explore the vast world of data by working on a data science
                project related to a real-world issue.
              </p>
            </div>
          </div>
        </div>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute left-[6%] top-[9%]"
        ></Image>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute lg:right-[16%] right-[14%] top-[60%]"
        ></Image>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute left-[30%] top-[80%]"
        ></Image>
      </div>
      <div className="w-full h-fit relative flex-col items-center flex">
        <div className="h-full relative w-full flex justify-center items-center">
          <Image
            alt="gradient"
            src={gradient}
            quality={100}
            sizes="100vw"
            className="absolute bg-cover h-full w-full"
          />
          <StickyScroll content={content} className=""></StickyScroll>
        </div>
      </div>
    </div>
  );
}

const content = [
  {
    title: 'Datathon 2024: Dive into Data',
    description:
      'Join us for Datathon 2024, an exciting journey into the world of data science. This event challenges participants to explore diverse datasets and develop innovative solutions for real-world problems.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon3.png')] bg-cover flex items-center justify-center text-white">
        Datathon 2024
      </div>
    ),
  },
  {
    title: 'Uncharted Territories',
    description:
      'Datathon 2024 offers uncharted territories for data enthusiasts. Tackle complex problems across various domains, from healthcare to finance, using cutting-edge data analysis techniques and machine learning algorithms.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon4.png')] bg-cover flex items-center justify-center text-white">
        Datathon 2024
      </div>
    ),
  },
  {
    title: 'Collaborate and Innovate',
    description:
      'Immerse yourself in a collaborative environment at Datathon 2024. Network with fellow data scientists, domain experts, and industry professionals. Participate in workshops and mentorship sessions to enhance your skills.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon5.png')] bg-cover flex items-center justify-center text-white">
        Datathon 2024
      </div>
    ),
  },
  {
    title: 'Our First Datathon',
    description:
      'From April 15th to April 16th, Data @ UCI hosted EMBARK, our very first Datathon! We were thrilled to see so many talented students participate and showcase their data analysis skills! Their enthusiasm and dedication brought a new level of energy to the event. ',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon1.png')] bg-cover flex items-center justify-center text-white">
        Embark 2023
      </div>
    ),
  },
  {
    title: 'Sponsors',
    description:
      'A special thank you to UCI Office of Data and Information Technology, Melissa Data, MathWorks, Stratascratch, Crowdstrike, UCI Antrepreneur Center, Guayaki, Notion, and Quokka for making this event a huge success.',
    content: (
      <div className="h-full w-full bg-[url('/photos/datathon2.png')] bg-cover flex items-center justify-center text-white">
        Embark 2023
      </div>
    ),
  },
];
