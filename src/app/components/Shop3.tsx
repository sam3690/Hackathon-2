import Image from 'next/image'
import React from 'react'
import trentonSofa from '../public/assets/contents/Trenton modular sofa_3 1.png'
import graniteDining from '../public/assets/contents/Granite dining table with dining chair 1.png'
import line1 from '../public/assets/contents/Line 1.png'


const Shop3 = () => {
  return (
    <main className='flex flex-col justify-between w-full h-screen bg-[#FFFFFF]'>
        <div className='flex flex-col justify-center items-center w-full h-[200px] '>
            <h1 className='text-5xl'>Top Picks for you</h1><br />
            <p className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-5 w-full h-[500px]'>
            <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                <Image src={trentonSofa} width={1000} height={1000} alt='sofa' className='h-[400px] w-[400px]'/>
                <h1 className='font-normal max-w-44'>Trenton Modular Sofa_3</h1>
                <h1 className='text-3xl font-normal mt-6'>RS. 25,000</h1>
            </div>            
            <div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                <Image src={graniteDining} width={1000} height={1000} alt='sofa' className='h-[400px] w-[400px]'/>
                <h1 className='font-normal max-w-44'>Granite Dining table with dining chair</h1>
                <h1 className='text-3xl font-normal mt-6'>RS. 25,000</h1>
            </div><div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                <Image src={trentonSofa} width={1000} height={1000} alt='sofa' className='h-[400px] w-[400px]'/>
                <h1 className='font-normal max-w-44'>Trenton Modular Sofa_3</h1>
                <h1 className='text-3xl font-normal mt-6'>RS. 25,000</h1>
            </div><div className='flex flex-col justify-center items-center w-[300px] h-[400px]'>
                <Image src={trentonSofa} width={1000} height={1000} alt='sofa' className='h-[400px] w-[400px]'/>
                <h1 className='font-normal max-w-44'>Trenton Modular Sofa_3</h1>
                <h1 className='text-3xl font-normal mt-6'>RS. 25,000</h1>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[200px] '>
            <h1 className='text-3xl'>View More</h1><br />
            <Image src={line1} width={140} height={100} alt='line' className='text-xl'/>
        </div>
    </main>
  )
}

export default Shop3