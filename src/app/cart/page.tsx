import Image from 'next/image'
import React from 'react'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const page = () => {
  return (
    <div className='flex flex-col w-full justify-between '>
      {/* Hero */}
        <div className='w-full h-20'/> 
          <div className='flex flex-col w-full h-[316px] justify-center items-center'>
            <Image src={rectangle1} height={1000} width={1000} className='w-full h-full'alt='rectangle fixed'/>
            <Image src={houseLogo} height={77} width={77} className='absolute translate-y-[-50px]' alt='logo'/>
          <h1 className='text-5xl font-semibold absolute mt-26'>Cart</h1>
          <div className='flex flex-row justify-between items-center w-[121px] mt-20 absolute'>
              <h2 className='font-medium'>Home</h2>
              <Image src={arrow} height={20} width={20} className='mt-1' alt='arrow'/>
              <h2 className='font-light'>Cart</h2>
          </div>
        </div>
        {/* form */}
        <div className='flex flex-row w-full justify-between items-center gap-3 p-10'>
          <div className='flex flex-row sm:flex-row justify-between items-center'>
            <div className='w-[817px] flex flex-col'>
              <div className='w-full h-[55px] bg-[#FFF9E5]'></div>

            </div>
          </div>
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
    </div>
  )
}

export default page