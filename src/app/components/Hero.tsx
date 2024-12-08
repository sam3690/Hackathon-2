'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import hero from '../public/assets/contents/hero.png'
import useMediaQuery from 'react-responsive'
import { type } from 'node:os'
import line1 from '../public/assets/contents/Line 1.png'

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(true)

    let windowsWidth : number
    const checkWindowSize = () => {
        if(typeof window !== 'undefined') {
           windowsWidth = window.innerWidth
        }
        if (windowsWidth >= 1024) {
            setIsDesktop(true)
        } else {
            setIsDesktop(false)            
        }
    }

    useEffect(() => {
      checkWindowSize()
    }, [isDesktop])
    
  return (
    <main className='flex flex-col justify-between w-full h-screen  bg-[#FBEBB5]'>
        <div className='flex flex-col translate-y-[300px] max-w-fit translate-x-[300px]'>
            <div className='text-[60px]'>
            <h1>Rocket Single</h1>
            <h1>seater</h1>
            </div><br />
            <div className='text-[25px]'>
               <h2>Shop Now</h2>
            </div>
            <Image src={line1} width={100} height={100} alt='line' className='text-xl'/>
        </div>
        <br className='sm:hidden'/>
        <div className='flex flex-col items-end justify-between object-cover self-end mt-[-100px] mr-20 top-0 h-[900px] w-[800px]'>
            <Image src={hero} width={1000} height={1000} alt='sofa' className={isDesktop?'h-[700px] w-[700px]':'h-[300px] w-[300px] mb-[-30px'}/>
        </div>
    </main>
  )
}

export default Hero