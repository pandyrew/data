import React from 'react'
import Image from 'next/image'
import dataIcon from '/public/icons/data-icon.svg'
import linkedInIcon from '/public/icons/linkedin-icon.svg'
import instagramIcon from '/public/icons/instagram-icon.svg'
import Link from 'next/link'


export default function navbar() {


  return (

    <div class="fixed top-[2rem] w-full transition-all duration-300 ease-in-out items-center flex flex-col h-[3rem]">
        <div className="w-3/4 h-full p-2 px-10 bg-opacity-60 bg-clip-padding backdrop-filter backdrop-blur-md  isolate aspect-video rounded-xl bg-white/20 ring-1 ring-black/5
    flex items-center justify-between shadow" >
            <div className='flex items-center w-[40%] h-full justify-between font-anderson'>
                <Link href='/' className="h-[120%]">
                
                <Image
                    src={dataIcon}
                    alt="Picture of the author"
                    className="h-full"
                />
                </Link>

                <Link href='/datathon' className="">Datathon</Link>
                <Link href='/about' className="">About</Link>
                <Link href='/contact' className="">Contact</Link>
            </div>
            <div className="flex gap-14 items-center h-[95%] justify-center">
                <Link href="https://www.linkedin.com/company/data-uci/mycompany/" className='h-[85%]'>
                <Image
                    src={linkedInIcon}
                    alt="Picture of the author"
                    className='h-full'
                />
                </Link>
                <Link href="https://www.instagram.com/dataatuci/?__d=1" className="h-[99%]">
                <Image
                    src={instagramIcon}
                    alt="Picture of the author"
                    className="h-full"
                />
                </Link>

            </div>
        </div>
    </div>
  )
}
