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
        <p className="absolute top-[7%] left-[5%] font-clash text-7xl font-medium w-fit">
          What is a Datathon?
        </p>
      </div>
      <div className="relative w-full h-[500px]  flex flex-col justify-center items-center -mt-10">
        <div className="relative">
          <div className="w-[350px]">
            <Image
              alt="Nathan"
              src={nathan}
              className="rounded-xl border-[#9D9D9D] border-4"
            ></Image>
          </div>
          <div className="w-[300px] absolute -top-[50px] left-[200px]">
            <Image alt="textbox" src={textbox}></Image>
            <div className="absolute top-0 w-full p-6 flex items-center">
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
          className="absolute right-[16%] top-[60%]"
        ></Image>
        <Image
          alt="black sparkle"
          src={sparkle}
          className="absolute left-[30%] top-[80%]"
        ></Image>
      </div>
      <div className="w-full h-full relative flex flex-col items-center ">
        <Image
          alt="gradient"
          src={gradient}
          quality={100}
          sizes="100vw"
          className=""
        />
        <div className=" h-full w-[90%] absolute">
          <StickyScroll content={content}></StickyScroll>
        </div>
      </div>
    </div>
  );
}

const content = [
  {
    title: 'Collaborative Editing',
    description:
      'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Atlantis 2024
      </div>
    ),
  },
  {
    title: 'Real time changes',
    description:
      'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Atlantis 2024
      </div>
    ),
  },
  {
    title: 'Version control',
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Atlantis 2024
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
