import Image from 'next/image'
import React from 'react'
import houseLogo from '@/app/public/assets/contents/Meubel House_Logos-05.png'
import rectangle1 from '@/app/public/assets/contents/Rectangle-1.png'
import arrow from '@/app/public/assets/contents/arrow.png'
import asgaard from '@/app/public/assets/contents/Asgaard sofa 1.png'
import yellowDelete from '@/app/public/assets/contents/yellow-delete.svg'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='flex flex-col  w-full justify-between '>
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
        <div className='flex contain-layout  flex-row w-full h-[525px] justify-between  items-center gap-3 p-10 mb-32'>
          <div className='flex flex-row sm:flex-row justify-between items-center'>
            <div className='w-[817px] h-[216px] translate-y-[-100px] flex flex-col '>
              <div className='w-full h-[55px] bg-[#FFF9E5] p-4 font-medium  justify-center flex flex-row gap-16'>
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
              </div>
              <div className='w-full h-[55px] bg-main p-4 flex flex-row gap-16'>
                <Image src={asgaard} height={100} width={100} alt='asgaard' className='bg-[#FBEBB5] rounded-md h-[106px] w-[106px]'/>
                <div className='flex flex-row justify-start pt-16 items-end gap-10'>
                  <h1 className='text-[#9F9F9F]'>Asgaard Sofa</h1>
                  <h1 className='text-[#9F9F9F]'>Asgaard Sofa</h1>
                  <div className='border-2 h-[32px] w-[32px] rounded-lg text-black px-2 translate-y-1'>1</div>
                  <h1 className='text-[#9F9F9F]'>Asgaard Sofa</h1>
                  <Image src={yellowDelete} height={20} width={20} alt='delete' className='mt-1'/>
                </div>

              </div>
            </div>
          </div>
          {/* 2nd div */}
          <div className='h-[390px] w-[393px] bg-[#FFF9E5] rounded-lg flex flex-col mx-20 gap-8 justify-center items-center'>
            <h1 className='text-4xl font-bold'>Cart Totals</h1>
            <div className='flex flex-row justify-center items-start w-full p-3 gap-16 '>
              <h1 className='font-medium  text-lg'>Subtotal</h1>
              <h1 className='font-medium text-lg text-[#9F9F9F]'>RS. 250,000.00</h1>
            </div>
            <div className='flex flex-row justify-center items-start w-full p-3 gap-16'>
              <h1 className='font-medium  text-lg'>Total</h1>
              <h1 className='font-medium text-2xl text-[#B88E2F]'>RS. 250,000.00</h1>
            </div>
              <Button className='bg-transparent hover:bg-transparent text-black w-[222px] h-[59px] border-2 border-black rounded-2xl text-xl'>Checkout</Button>
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