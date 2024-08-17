"use client"
import React, { useEffect, useState } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { motion } from 'framer-motion'

type SlideImages = {
    url: string,
}
const slides = [
    {
        url: "/assets/LandingPage1/LC200.png",
        title: 'Avoid expensive mistakes',
        paragraph: 'Learn the history of any car, to ensure you are not getting a bad deal'
    },
    {
        url: "/assets/LandingPage1/Subaru.png",
        title: 'Save precious time',
        paragraph: 'Test drives takes hours, so filter out the noise before you drive'
    },
    {
        url: "/assets/LandingPage1/Benz.png",
        title: 'Negotiate a better deal',
        paragraph: 'Once you\'ve identified your next car, we\'ll have the facts to get the price down'
    }
]

const LandingPage1 = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)


    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000);
        return () => {
            clearTimeout(timer)
        }
    }, [currentIndex])

    function prevSlide() {
        const isFirstSlide = currentIndex === 0
        const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newSlide)
    }
    function nextSlide() {
        const isLastSlide = currentIndex === slides.length - 1
        const newSlide = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newSlide)
    }

    function moveToSlide(index: number) {
        setCurrentIndex(index)
    }

    const onDragStart = () => {
        setIsDragging(true)
    }

    const onDragEnd = (event: any, info: any) => {
        setIsDragging(false)
        if (info.offset.x < -100) { nextSlide() }
        else if (info.offset.x > 100) { prevSlide() }
    }

    return (
        <section className='py-[60px] grid grid-cols-1 justify-between gap-5 h-full w-full px-8'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-4xl font-bold'>Choose Wisely </h1>
                <p className='text-lg font-normal pt-4'>Make sure your new car is a trustworthy companion</p>
            </div>
            <div className='flex flex-col lg:hidden w-full justify-between'>
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
                                <img src={slide.url} alt={slide.title} className='max-h-[200px] mb-6 cursor-grab active:cursor-grabbing object-contain' />
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
                                <p className='text-base font-medium'>{entry.paragraph}</p>
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
            </div>
            <div className='hidden w-full h-fit lg:grid grid-cols-3 text-center gap-5 justify-between items-center'>
                <div>
                    <img src={slides[0].url} alt="" className='object-cover' />
                    <h1 className='text-xl mb-2 font-bold'>{slides[0].title}</h1>
                    <p className='text-base font-medium'>{slides[0].paragraph}</p>
                </div>
                <div>
                    <img src={slides[1].url} alt="" className='object-cover' />
                    <h1 className='text-xl mb-2 font-bold'>{slides[1].title}</h1>
                    <p className='text-base font-medium'>{slides[1].paragraph}</p>
                </div>
                <div>
                    <img src={slides[2].url} alt="" className='object-cover' />
                    <h1 className='text-xl mb-2 font-bold'>{slides[2].title}</h1>
                    <p className='text-base font-medium'>{slides[2].paragraph}</p>
                </div>
            </div>
        </section>
    )
}

export default LandingPage1

