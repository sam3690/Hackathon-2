import React from 'react'
import Image from 'next/image'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import filter from '@/app/public/assets/contents/system-uicons_filtering.png'
import grid from '@/app/public/assets/contents/ci_grid-big-round.png'
import viewList from '@/app/public/assets/contents/bi_view-list.png'
import line5 from "@/app/public/assets/contents/Line 5.svg"
import Productlist from './Productlist'
import Footer from '../homepage/Footer'

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center'>
      {/* hero section */}
      <div className='w-full h-20'/> 
        <div className='flex flex-col w-full h-[316px] justify-center items-center'>
          <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
          <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Shop</h1>
            <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Shop</h2>
            </div>
        </div>
        {/* pink bar */}
        <div className='flex flex-row items-center mt-16 h-[100px] w-full bg-[#FAF4F4]'> 
          <div className='flex flex-row ml-32 gap-3 justify-center w-[85px] '>
            <Image src={filter} height={25} width={25} alt='filter'/>
            <h2>Filter</h2>
            <Image src={grid} height={25} width={25} alt='grid'/>
            <Image src={viewList} height={25} width={25} alt='viewList'/>
            <Image src={line5} height={10} width={25} alt='line5' className='h-6 justify-start ml-5 text-black'/>
          </div>
          <div className='flex flex-row justify-'>
              <h2 className='translate-x-20'>Showing 1–16 of 32 results</h2>
          </div>
          {/* <div className='flex flex-row ml-24 gap-3 justify-start w-[85px]'>
          </div> */}
          <div className='flex flex-row justify-center items-center gap-4 ml-20'>
            <h1 className='lg:translate-x-[500px] sm:translate-x-[100px]'>Show</h1>
            <div className='bg-main w-[55px] h-[55px] justify-between items-center lg:translate-x-[500px] sm:translate-x-[100px]'>
              <h2 className='mt-3 ml-4 text-xl text-[#9F9F9F]'>16</h2>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-4 ml-20'>
            <h1 className='lg:translate-x-[450px] sm:translate-x-[100px]'>Sort By</h1>
            <div className='bg-main w-[188px] h-[55px] justify-between items-center lg:translate-x-[450px] sm:translate-x-[100px]'>
              <h2 className='mt-3 ml-4 text-xl text-[#9F9F9F]'>Default</h2>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 mx-20 w-full bg-main'>
          <div className='flex flex-col items-center justify-center w-[287px] '></div>
        </div>
        <Productlist/><br /><br />
        {/* Nav options */}
        
          <div className='flex flex-row w-[400px] gap-3 h-[80px] justify-between '> 
            <div className='bg-[#FBEBB5] h-[60px] w-[60px] text-lg rounded-lg px-6 py-4'>1</div>
            <div className='bg-[#FFF9E5] h-[60px] w-[60px] text-lg rounded-lg px-6 py-4'>2</div>
            <div className='bg-[#FFF9E5] h-[60px] w-[60px] text-lg rounded-lg px-6 py-4'>3</div>
            <div className='bg-[#FFF9E5] h-[60px] w-[90px] text-lg rounded-lg px-6 py-4'>Next</div>
          </div>
        
        {/* pink section */}
        <div className='flex flex-row justify-center items-center gap-8 p-24 w-full h-[300px] bg-[#FAF4F4]'>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl font-semibold'>Free Delivery</h1>
                <h2 className='text-xl font-normal text-[#9F9F9F]'>For all oders over $50, consectetur adipim scing elit.</h2>
              </div>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl font-semibold'>90 Days Return</h1>
                <h2 className='text-xl text-[#9F9F9F] font-normal'>If goods have problems, consectetur adipim scing elit.</h2>
              </div>
              <div className='flex flex-col gap-2 w-[370px]'>
                <h1 className='text-4xl  font-semibold'>Secure Payment</h1>
                <h2 className='text-xl text-[#9F9F9F] font-normal'>100% secure payment, consectetur adipim scing elit.</h2>
              </div>
        </div>
        
    </main>
  )
}

export default page