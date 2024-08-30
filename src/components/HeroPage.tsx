'use client'
import ReportButton from './ReportButton'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Spotlight } from './ui/Sportlight'
import { FaCheck } from "react-icons/fa6";
import './heroPage.css'
import { useEffect, useState } from 'react';
import { HEROIMAGES } from '@/constants/heroImages';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


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
        {!isLoading &&
          <Spotlight
            className='absolute hidden lg:block right-[-35%] top-[40%] lg:right-[-30%] lg:top-[25%] h-[90vh]'
            fill=''
          />}

      </section>
    );
  }

  return (
    <section className="relative lg:px-14 grid grid-cols-1 lg:grid-cols-2 w-full 
         min-h-screen lg:gap-12 pt-[120px] lg:pt-[60px] bg-[#082854] justify-between lg:justify-between items-center px-7">
      <div className="flex text-white flex-col justify-between items-center lg:items-start w-full
              md:text-left">
        <div className='flex items-center gap-4 flex-col'>
          <TextGenerateEffect
            className='text-4xl text-white md:text-5xl text-center lg:text-left font-bold'
            words='Learn the story of your future or current car'
          />
          {/* <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold">Learn the story of your future or current car</h1> */}
          <TextGenerateEffect
            className="text-[14px] text-gray-200 sm:w-[80%] font-light text-center lg:text-left lg:w-full"
            words='Get a report to avoid bad deals, sell faster, or learn if your car is safe.'
          />
        </div>
        <div className='w-full mt-10' id='report-section'>
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
    <div className='w-full px-7'>
      <div className='hidden lg:flex relative w-[70%] sm:w-[60%] lg:w-[90%]'>
        <img src="./Hero-img.png" alt="Mazda"
          className='w-full max-h-[600px]'
        />
      </div>
      <div className='flex py-[80px] lg:hidden'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {HEROIMAGES.map((image) => (
            <SwiperSlide>
              <img key={image.id} src={image.url} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>


  )
}

const CheckTypes = () => {
  return (
    <div className='hidden text-[13px] text-gray-300 mt-2 font-extralight lg:block w-full lg:justify-start gap-10'>
      <ul className='grid grid-cols-2 justify-between'>
        <li className='flex py-1 gap-2 items-center'><span className='bg-gray-300 p-[2px] text-black rounded-full text-[10px]'><FaCheck /></span> Mileage rollbacks</li>
        <li className='flex py-1 gap-2 items-center'><span className='bg-gray-300 p-[2px] text-black rounded-full text-[10px]'><FaCheck /></span> Record Images</li>
        <li className='flex py-1 gap-2 items-center'><span className='bg-gray-300 p-[2px] text-black rounded-full text-[10px]'><FaCheck /></span> Ownership</li>
        <li className='flex py-1 gap-2 items-center'><span className='bg-gray-300 p-[2px] text-black rounded-full text-[10px]'><FaCheck /></span> Damages</li>
        <li className='flex py-1 gap-2 items-center'><span className='bg-gray-300 p-[2px] text-black rounded-full text-[10px]'><FaCheck /></span> Safety recalls</li>
        <li className='flex py-1 gap-2 items-center'><span className='bg-gray-300 p-[2px] text-black rounded-full text-[10px]'><FaCheck /></span> Theft records</li>
      </ul>
    </div>
  )
}