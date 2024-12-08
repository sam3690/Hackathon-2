import Image from 'next/image'
import React from 'react'
import graniteTable from '../public/assets/contents/Granite square side table 1.png'
import cloudSofa from '../public/assets/contents/Cloud sofa three seater + ottoman_3 1.png'
import line1 from '../public/assets/contents/Line 1.png'



const Shop2 = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center space-x- bg-[#FAF4F4] w-full h-screen'>
        <div className='flex flex-col justify-center pt-10 items-center'>
            <Image src={graniteTable} height={1000} width={1000} alt='granite table' className='h-[600px] w-[600px]'/><br />
            <div className=' translate-y-[-150px] mb-0'>
            <h1 className='text-[40px]'>Rocket Single</h1>
                <div className='text-[25px] mt-0 traslate-y-[-200px]'>
                <h2>Shop Now</h2>
                <Image src={line1} width={120} height={100} alt='line' className='text-xl'/>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-between items-center m-10 pt-10 object-cover'>
            <Image src={cloudSofa} height={1000} width={1000} alt='granite table' className='h-[600px] w-[600px] mr-10'/><br />
            <div className=' translate-y-[-150px] mb-0'>
            <h1 className='text-[40px]'>Rocket Single</h1>
                <div className='text-[25px] mt-0 traslate-y-[-200px]'>
                <h2>Shop Now</h2>
                <Image src={line1} width={120} height={100} alt='line' className='text-xl'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Shop2