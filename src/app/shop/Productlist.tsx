import React from 'react'
import { shopLinks } from '../public/constants'
import sofa from '../public/assets/contents/white-sofa-1.png'
import Image from 'next/image'
import Link from 'next/link'
const Productlist = () => {
  return (
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 sm:m-0 m-2 justify-items-end '>
      { shopLinks.map((prod) => (
        <Link href={'/product'}>
      <div key={prod.id} className='col-span-1  h-[350px]  gap-2 justify-center items-end'>
        <Image src={prod.imgUrl} height={300} width={300} alt='sofa' className=' sm:h-[300px] h-[200px] sm:w-[300px] w-[200px] object-contain' />
        <h2 className='sm:text-lg text-sm'>{prod.title}</h2>
        <h1 className='sm:text-2xl text-xl'>{prod.price}</h1>
      </div>
        </Link>
      ))}
      
   
    </div>
  )
}

export default Productlist