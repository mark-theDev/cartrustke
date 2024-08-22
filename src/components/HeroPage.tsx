'use client'
import ReportButton from './ReportButton'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Spotlight } from './ui/Sportlight'
import { FaCheck } from "react-icons/fa6";
import './heroPage.css'
import { useEffect, useState } from 'react';
import LoadingSpinner from './Loading';

const HeroPage = () => {


  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false)
    }, 1000);
  }, [])

  if (isLoading) {
    return (
      <section className="relative w-full h-screen bg-[#082854] justify-center items-center">
        <div className='w-full flex flex-col items-center justify-center'>          
          <h3 className='text-white z-10 font-bold text-3xl'>Page is Loading</h3>
        </div>
        <Spotlight
          className='absolute hidden lg:block right-[-35%] top-[40%] lg:right-[-30%] lg:top-[25%] h-[90vh]'
          fill=''
        />
      </section>
    );
  }

  return (
    <section className="relative lg:px-14 grid grid-cols-1 lg:grid-cols-2 w-full 
          h-screen lg:gap-12 py-[80px] bg-[#082854] justify-center lg:justify-between items-center px-7">
      <div className="flex text-white flex-col items-center lg:items-start w-full gap-6
              md:gap-10 md:text-left">
        <div className='flex items-center flex-col gap-3'>
          <TextGenerateEffect
            className='text-4xl text-white md:text-5xl text-center lg:text-left font-bold'
            words='Learn the story of your future or current car'
          />
          {/* <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold">Learn the story of your future or current car</h1> */}
          <TextGenerateEffect
            className="text-base sm:w-[80%] font-light text-center lg:text-left lg:w-full"
            words='Get a report to avoid bad deals, sell faster, or learn if your car is safe.'
          />
        </div>
        <div className='w-full' id='report=section'>
          <ReportButton />
        </div>
        <CheckTypes />
      </div>
      <div className='flex flex-col w-full items-center justify-center'>
        <CarInfo />
      </div>
      <Spotlight
        className='absolute hidden lg:block right-[-35%] top-[40%] lg:right-[-30%] lg:top-[25%] h-[90vh]'
        fill=''
      />
    </section>
  )
}

export default HeroPage

const CarInfo = () => {
  return (
    <div className='relative sm:w-[60%] lg:w-[90%]'>
      <img src="./assets/CarInfo/Mazda-Img.png" alt="Mazda"
        className='w-full'
      />
    </div>

  )
}

const CheckTypes = () => {
  return (
    <div className='hidden text-sm font-extralight lg:flex lg:w-full lg:justify-start gap-10'>
      <ul>
        <li className='flex py-1 gap-2 items-center'><FaCheck /> Mileage rollbacks</li>
        <li className='flex py-1 gap-2 items-center'><FaCheck /> Record Images</li>
        <li className='flex py-1 gap-2 items-center'><FaCheck /> Ownership</li>
      </ul>
      <ul>
        <li className='flex py-1 gap-2 items-center'><FaCheck /> Damages</li>
        <li className='flex py-1 gap-2 items-center'><FaCheck /> Safety recalls</li>
        <li className='flex py-1 gap-2 items-center'><FaCheck /> Theft records</li>
      </ul>
    </div>
  )
}