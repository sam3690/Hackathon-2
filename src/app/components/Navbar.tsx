import Image from 'next/image';
import React from 'react';
import navicon1 from '../public/assets/contents/navicon1.svg'
import navicon2 from '../public/assets/contents/navicon2.svg'
import navicon3 from '../public/assets/contents/navicon3.svg'
import navicon4 from '../public/assets/contents/navicon4.svg'


const Navbar = () => {
  return (
    <div className='flex flex-row justify-between w-full h-20 px-4 absolute'>
        <div className='flex flex-row justify-between font-normal text-xl justify-self-center ml-[500px] items-center w-[30%] h-20 px-4 '>
            <h2>Home</h2>
            <h2>Shop</h2>
            <h2>About</h2>
            <h2>Contact</h2>
        </div>
        <div className='flex flex-row justify-self-end items-center space-x-12'>
            <Image src={navicon1} width={30} height={30} alt="account"/>
            <Image src={navicon2} width={30} height={30} alt="account"/>
            <Image src={navicon3} width={30} height={30} alt="account"/>
            <Image src={navicon4} width={30} height={30} alt="account"/>

        </div>
    </div>
  )
}

export default Navbar