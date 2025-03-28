import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="bg-cover bg-center h-screen w-full pt-5 flex justify-center items-center">
        <div>
          <Image 
            src='/back.png' 
            height={900} 
            width={1200} 
            alt='back' 
            className='object-cover rounded-lg shadow-lg'
          />
        </div>
        <div className='text-white absolute top-[20vh] left-[10vw] '>
          <h1 className='text-8xl font-bold '>YNV Tech</h1>
          <h1 className='text-3xl text-white border-b-2 border-white font-semibold p-1 text' style={{ display: 'inline-block' }}>Driving Digital Transformation Through Innovation</h1>
          <div className='w-[35vw] pt-4'>
            <p className='text-2xl font-lg'>We are a dynamic technology company that builds the future through advanced AI solutions, powerful Mobile Device Management, and exceptional mobile app development for Android and iOS. Our website is your gateway to exploring our services, diving into our portfolio, and connecting with our team. Let's innovate together.</p>
          </div>
          <div className='pt-4'>
            <Link href="#services">
              <button className='text-xl font-semibold border-2 border-white p-2 px-7 rounded-xl shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 hover:scale-105 hover:bg-gradient-to-r hover:from-[#ec4899]/60 hover:via-[#8b5cf6]/60 hover:to-[#3b82f6]/60 transition-all duration-300 ease-in-out'>
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default About