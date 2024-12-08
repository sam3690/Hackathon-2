import React from 'react'
import rectangle from '../public/assets/contents/Rectangle_17.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const Ourinsta = () => {
  
  return (
    <main className='flex flex-col justify-between gap-0 items-center w-full h-[450px]' style={{ backgroundImage: `url("../
    public/assets/contents/Rectangle_17.png")`, backgroundSize: 'cover'}} >
      <div className='flex flex-col justify-center items-center h-full w-full gap-10'>
        <Image src={rectangle} width={1000} height={1000} alt='rectangle' className='h-inherit w-full bg-cover bg-no-repeat absolute'>
        </Image>
          <h1 className='text-8xl font-semibold absolute'>Our Instagram</h1> <br />
          <h1 className='absolute mt-10 translate-y-[80px] text-2xl font-light'>Follow our store on Instagram</h1>
          
          <button className='rounded-full absolute mt-10 translate-y-[160px] bg-[#FAF4F4] h-[50px] w-[200px] text-black drop-shadow-md'>Follow Us</button>
      </div>
    </main>
  )
}

export default Ourinsta