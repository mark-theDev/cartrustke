import Link from 'next/link';
import React from 'react'
import { FaYoutube } from "react-icons/fa6";

interface YouTubeCardProps {
    imageUrl: string;
    description: string;
    link: string;
}

const YouTubeCard: React.FC<YouTubeCardProps> = ({imageUrl, description,link}) => {
  return (
    <div className="max-w-sm rounded transition-transform  transform overflow-hidden shadow-lg pb-5">
        <div className='flex flex-col h-full justify-between gap-2'>
            <div className='relative'>
                <img className='w-full transition-transform transform hover:scale-110' src={imageUrl} alt="Video Thumbnail" />
                <Link href={link} target='blank'  rel="noopener noreferrer" className='absolute inset-0 flex items-center justify-center text-white' >
                    <div className='bg-black bg-opacity-50 p-2 rounded-full'>
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 22V2l18 10L3 22z" />
                        </svg>                    
                    </div> 
                </Link>    
            </div>
            <div className="px-3">
                <p className=" text-base py-3 font-semibold">{description}</p>
            </div>            
            <Link href={link} className="flex gap-2 items-center text-base px-3">  
                <FaYoutube className='text-2xl text-red-600' />                  
                <span className='text-black text-xs'>Watch on YouTube</span>
            </Link>
            
        </div>
    </div>
  )
}

export default YouTubeCard