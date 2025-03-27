import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Clients = () => {
  return (
    <>
      <div className='flex justify-center items-center w-full gap-5'>
        <div className='text-white'>
          <h1 className='text-3xl text pb-4'>OUR AWESOME CLIENT</h1>
          <h1 className='text-6xl font-semibold'>We Built Best<br /> Solution For Your<br /> Company</h1>
        </div>
        <div className=' flex flex-col justify-center items-center gap-4'>
          <div className='flex justify-center items-center gap-4'>
            <div>
              <Image
                src='/ARX_vision.png'
                height={64}
                width={64}
                alt='ARX VISION'
                className=' border-2 border-white p-2 h-[20vh] w-[20vw] hover:w-[22vw] hover:h-[22vh] transition-all duration-300'
              />
            </div>
            <div>
              <Image
                src='/Dona.png'
                height={64}
                width={64}
                alt='DONA'
                className=' border-2 border-white p-2 h-[20vh] w-[20vw] hover:w-[22vw] hover:h-[22vh] transition-all duration-300'
              />
            </div>
          </div>
          <div>
            <Image
              src='/Our_media.png'
              height={64}
              width={64}
              alt='OUR MEDIA'
              className=' border-2 border-white p-2 h-[20vh] w-[20vw] hover:w-[22vw] hover:h-[22vh] transition-all duration-300'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients