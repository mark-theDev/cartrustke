"use client"
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { motion } from 'framer-motion'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Card } from '@nextui-org/react';

type SlideImages = {
    url: string,
}
const slides = [
    {
        url: "/inspection-icon.png",
        title: 'Avoid expensive mistakes',
        paragraph: 'Learn the history of any car, to ensure you are not getting a bad deal'
    },
    {
        url: "/reporting-icon.png",
        title: 'Save precious time',
        paragraph: 'Test drives takes hours, so filter out the noise before you drive'
    },
    {
        url: "/deal-done.png",
        title: 'Negotiate a better deal',
        paragraph: 'Once you\'ve identified your next car, we\'ll have the facts to get the price down'
    }
]

const LandingPage1 = () => {
    
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    return (
        <section className='py-[60px] grid grid-cols-1 justify-between gap-5 h-full w-full px-8'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-2xl font-bold'>Choose Wisely </h1>
                <p className='text-base font-normal pt-4'>Make sure your new car is a trustworthy companion</p>
            </div>
            {/* <div className='flex flex-col md:hidden w-full justify-between'>
                <div className='relative group'>
                    <motion.div
                        className='w-full'
                        drag="x"
                        dragConstraints={{ left: -10, right: 0 }}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                    >
                        {slides.map((slide, index) => (
                            <motion.div
                                initial={{
                                    opacity: currentIndex === index ? 0 : 0.5,
                                    scale: currentIndex === index ? 0.5 : 0.3
                                }}
                                animate={{
                                    opacity: currentIndex === index ? 1 : 0.5,
                                    scale: currentIndex === index ? 1 : 0.3
                                }}
                                transition={{
                                    ease: 'linear',
                                    duration: 0.5,
                                    x: { duration: 0.5 }
                                }}
                                key={index}
                                className={`flex flex-col gap-2 justify-center items-center w-full text-center ${currentIndex !== index ? 'hidden' : ""}`}
                            >
                                <img src={slide.url} alt={slide.title} className='max-w-[400px] mb-6 cursor-grab active:cursor-grabbing object-contain' />
                            </motion.div>
                        ))}
                        {slides.map((entry, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col overflow-hidden gap-2 items-center justify-between ${currentIndex !== index ? 'hidden' : ''}`}
                                initial={{
                                    y: currentIndex === index ? 50 : 0,
                                    opacity: currentIndex === index ? 0 : 0.5
                                }}
                                animate={{
                                    y: currentIndex === index ? 0 : 100,
                                    opacity: currentIndex === index ? 1 : 0.5
                                }}
                                transition={{
                                    duration: 1,
                                    ease: 'easeInOut'
                                }}
                            >
                                <h1 className='text-xl mb-2 font-bold'>{entry.title}</h1>
                                <p className='text-sm font-medium'>{entry.paragraph}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <MdArrowBackIos onClick={prevSlide} className='absolute cursor-pointer group-hover:block hidden left-0 sm:left-[30px] text-2xl top-[50%]' />
                    <MdArrowForwardIos onClick={nextSlide} className='absolute text-2xl cursor-pointer group-hover:block hidden right-0 sm:right-[50px] top-[50%]' />
                </div>
                <div className='flex transition-all duration-500 ease-in-out pt-4 justify-center'>
                    {slides.map((_, index) => (
                        <span key={index}
                            onClick={() => moveToSlide(index)}
                            className={`rounded-full transition duration-300 ease-in-out w-2 h-2 mx-1 cursor-pointer ${currentIndex === index ? 'bg-black px-4' : 'bg-gray-300'}`}>
                        </span>
                    ))}
                </div>
            </div> */}
            <div className="w-full px-9 block md:hidden">
                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent>
                        {slides.map((card, index) => (
                            <CarouselItem key={index}>
                                <div className="flex flex-col cursor-grab gap-2 justify-between items-center w-full text-center">
                                    <img src={card.url} alt={card.title} className='object-contain' />
                                    <h1 className='text-xl mb-2 font-bold'>{card.title}</h1>
                                    <p className='text-sm font-medium'>{card.paragraph}</p>
                                </div>                                
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                
                <div className="py-2 text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div>
            </div>
            <div className='hidden w-full h-fit md:grid grid-cols-3 text-center gap-5 justify-between items-center'>
                <div className='flex items-center gap-3 flex-col'>
                    <img src={slides[0].url} alt="" className='object-contain mb-2 h-full max-w-[300px]' />
                    <h1 className='text-lg font-bold'>{slides[0].title}</h1>
                    <p className='text-sm'>{slides[0].paragraph}</p>
                </div>
                <div className='flex items-center gap-3 flex-col'>
                    <img src={slides[1].url} alt="" className='object-contain max-w-[300px]' />
                    <h1 className='text-lg font-bold'>{slides[1].title}</h1>
                    <p className='text-sm'>{slides[1].paragraph}</p>
                </div>
                <div className='flex items-center gap-3 flex-col'>
                    <img src={slides[2].url} alt="" className='object-contain max-w-[300px]' />
                    <h1 className='text-lg font-bold'>{slides[2].title}</h1>
                    <p className='text-sm'>{slides[2].paragraph}</p>
                </div>
            </div>
        </section>
    )
}

export default LandingPage1

