import React from 'react'
import { shopLinks } from '../public/constants'
import sofa from '../public/assets/contents/white-sofa-1.png'
import Image from 'next/image'
const Productlist = () => {
  return (
    <div className='grid grid-cols-4 gap-4 justify-items-end '>
      { shopLinks.map((prod) => (
      <div key={prod.id} className='col-span-1  h-[350px]  gap-2 justify-center items-end'>
        <Image src={prod.imgUrl} height={300} width={300} alt='sofa' className=' h-[300px] w-[300px] object-contain' />
        <h2>{prod.title}</h2>
        <h1 className='text-2xl'>{prod.price}</h1>
      </div>
      ))}
      
   
    </div>
  )
}

export default Productlist