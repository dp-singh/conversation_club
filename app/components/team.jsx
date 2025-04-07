import Image from 'next/image'
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Team = () => {
    const data = [
        {
            title: "Dharmendra",
            description: "FullStack Developer",
            image: '/dharmendra.png',
            lurl:"https://www.linkedin.com/in/dharmsingh",
            location:"Bristol, England, United Kingdom",
        },
        {
            title: "Yash",
            description: "Frontend Developer",
            image: '/yash.png',
            lurl:"https://www.linkedin.com/in/yash-raghuvanshi-a14361287",
            location:"Noida, Uttar Pradesh, India",
        },
        {
            title: "Jitesh",
            description: "Frontend Developer",
            image: '/jitesh.png',
            lurl:"https://www.linkedin.com/in/jitesh-singh-920413285",
            location:"Ludhiana, Punjab, India",
        },
        {
            title: "Priya",
            description: "Frontend Developer",
            image: '/priya.png',
            lurl:"https://www.linkedin.com/in/priya-singh-a5859799/",
            location:"Uttar Pradesh, India"
        },
        {
            title: "Manav",
            description: "Backend Developer",
            image: '/manav.png',
            lurl:"#",
            location:"Bristol, England, United Kingdom",
        },
    ];

    return (
        <>
            <div className='mb-28 mt-28'>
                <div className='container mx-auto px-6 text-center mb-20'>
                    <h1 className="text-5xl md:text-7xl font-extrabold text drop-shadow-lg">Our Team</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 px-6'>
                    {data.slice(0, 5).map((element) => (
                        <div 
                            key={element.title} 
                            className="bg-gray-800 rounded-lg shadow-lg p-4 min-w-[200px] min-h-[280px] flex flex-col items-center justify-center"
                        >
                            <Image 
                                src={element.image} 
                                alt={`Image of ${element.title}`} 
                                width={200} 
                                height={200} 
                                className="rounded-full mb-4 border-2 border-gray-200 p-1" 
                            />
                            <h1 className="text-xl font-semibold text-white">{element.title}</h1>
                            <p className="text-gray-400 mt-2">{element.description}</p>
                            <p className="text-gray-400 mt-2">{element.location}</p>
                            <div className="flex gap-4 mt-6">
                                <a href={element.lurl} aria-label={`LinkedIn profile of ${element.title}`} className="hover:text-blue-700">
                                    <FaLinkedin size={24} />
                                </a>
                                <a href="#" aria-label={`Email ${element.title}`} className="hover:text-red-700">
                                    <BiLogoGmail size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Team