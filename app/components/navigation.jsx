"use client"
import React from 'react'
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<div className='navBar shadow-lg bg-gradient-to-r from-[#ec4899]/35 via-[#8b5cf6]/35 to-[#3b82f6]/35 w-full flex justify-between items-center fixed z-[999] bg-white/70 backdrop-blur-sm p-[10px] rounded-md'>        <div className='logo'>
          <img src='favicon.ico' className='w-14 h-14 rounded-full border-2 border-gray-600' />
        </div>
        <div className='hidden md:flex gap-10 '>
        {
        [
            { name: "Home", link: "#about" },
            { name: "About Us", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Projects", link: "#projects" }
          ].map((item, index) => (
            <a href={item.link} key={index} className="text-xl font-medium capitalize hover:text-gray-800 text-black drop-shadow-md">
              {item.name}
            </a>
            
          ))
          }
          <button className=''>
          <a href="#contactUs" className='p-2 text-xl font-medium capitalize bg-white hover:text-gray-800 text-black border-2 rounded-xl shadow-2xl border-gray-600'>Contact Us</a>
          </button>

          

          
        </div>
        <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>
        ☰
        </button>

        {isOpen && (
        <div className="absolute top-19 left-0 w-full bg-zinc-600 p-4 shadow-lg flex flex-col items-center gap-5 md:hidden rounded-b-3xl">
          {[
            { name: "Home", link: "#home" },
            { name: "About Us", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Projects", link: "#projects" }
          ].map((item, index) => (
            <a key={index} href={item.link} className="text-xl font-medium capitalize text-gray-100 hover:text-white drop-shadow-md">
              {item.name}
            </a>
          ))}
          <a href="#contactUs" className="p-2 text-xl font-medium capitalize bg-white text-gray-800 hover:text-black border-2 rounded-xl shadow-2xl border-gray-600">
            Contact Us
          </a>
        </div>
      )}
        <style jsx>
          {`
          .contact-btn{
          padding: 6px;
          }
          
          `}
        </style>
      </div>
    </>
  )
}

export default Navigation