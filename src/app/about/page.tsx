import Image from 'next/image'
import React from 'react'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import filter from '@/app/public/assets/contents/system-uicons_filtering.png'
import grid from '@/app/public/assets/contents/ci_grid-big-round.png'
import viewList from '@/app/public/assets/contents/bi_view-list.png'
import line5 from "@/app/public/assets/contents/Line 5.svg"
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'


const page = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      {/* hero section */}
      <div className='w-full h-20'/> 
        <div className='flex flex-col w-full h-[316px] justify-center items-center'>
          <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Blog</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-normal'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Blog</h2>
            </div>
        </div>
      </main>
  )
}

export default page