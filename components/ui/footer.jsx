import React from 'react'
import arrow from '/public/icons/arrow-footer.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <div className="w-full lg:h-[350px] h-auto flex justify-between lg:p-20 p-4 pb-5 pt-10 flex-col items-center lg:flex-row lg:items-start gap-5">
        <div className="lg:flex flex-col gap-2 hidden">
            <p className="font-anderson text-[#6A6A6A] text-xl">What are you waiting for?</p>
            <p className="font-clash font-semibold lg:text-5xl text-3xl">Get Involved Here:</p>
        </div>
        <div className="w-auto lg:w-[700px] flex flex-col justify-between gap-5">
            <div className="lg:h-[150px] h-auto grid grid-cols-1 md:grid-cols-2 gap-10 font-satoshi lg:text-2xl text-lg text-[#464646]">
                <Link href='https://www.instagram.com/dataatuci'>
                    <div className="group border-b-2 border-[#DEDEDE] items-end flex flex-1 pb-2 pr-2 justify-between cursor-pointer">
                        Instagram
                        <Image src={arrow} alt="Arrow icon" className="transition-transform duration-200 group-hover:translate-x-2"></Image>
                    </div>
                </Link>
                <Link href='https://docs.google.com/forms/d/e/1FAIpQLSclueO-3bwhLinPvt3JQIwkLfa4t-OknV6PHS6esMaFertaKQ/viewform'>
                    <div className="group border-b-2 border-[#DEDEDE] items-end flex flex-1 pb-2 pr-2 justify-between cursor-pointer">
                        Newsletter
                        <Image src={arrow} alt="Arrow icon" className="transition-transform duration-200 group-hover:translate-x-2"></Image>
                    </div>
                </Link>
                <Link href='https://discord.com/invite/aNAgdGfYSe'>
                    <div className="group border-b-2 border-[#DEDEDE] items-end flex flex-1 pb-2 pr-2 justify-between cursor-pointer">
                        Discord
                        <Image src={arrow} alt="Arrow icon" className="transition-transform duration-200 group-hover:translate-x-2"></Image>
                    </div>
                </Link>
                <Link href='https://linktr.ee/DataAtUCIrvine'>
                    <div className="group border-b-2 border-[#DEDEDE] items-end flex flex-1 pb-2 pr-2 justify-between cursor-pointer">
                        Contact
                        <Image src={arrow} alt="Arrow icon" className="transition-transform duration-200 group-hover:translate-x-2"></Image>
                    </div>
                </Link>
            </div>
            <div className="text-right font-satoshi lg:text-lg text-sm text-[#373737] mt-2">
                <p><span className="font-sans">&copy;</span> 2024 Data@UCI. All Rights Reserved.</p>
            </div>
        </div>

    </div>
    </>
  )
}
