'use client'
import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from 'framer-motion';
import { FaCheck } from "react-icons/fa";
import Faq from '../../components/Faq';
import Link from 'next/link';

const page = () => {

    const [isSelected, setIsSelected] = useState<number | null>(0)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setIsSelected(index)
    }

    const moveLeft = () => {
        const isFirst = currentIndex === 0;
        let newIndex = isFirst ? sliderContainer.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const moveRight = () => {
        const isLast = currentIndex === sliderContainer.length - 1
        let newSlide = isLast ? 0 : currentIndex + 1
        setCurrentIndex(newSlide)
    }

    const handleOpen = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index)
    }

    return (
        <section className='w-full'>
            <div className='pt-[150px] px-7 lg:px-14 bg-white'>
                <h1 className='mb-20 font-bold text-4xl text-center'>Pricing</h1>
                <div className='flex flex-col lg:flex-row w-full gap-5 lg:justify-evenly items-center'>
                    {priceCards.map((card, index) => (
                        <div key={index}
                            className={`p-5 bg-white flex flex-col justify-between gap-3 relative border min-w-[300px] min-h-[250px] lg:w-1/3 h-full rounded-lg cursor-pointer ${isSelected === index ? 'border-blue-500 border' : 'border-gray-300'}`}
                            onClick={() => handleClick(index)}
                        >
                            {(index === 0 || index === 1) && 
                                <div className='absolute inset-0 flex items-center justify-center text-lg font-bold rounded-lg bg-white/90'>
                                    Coming soon!
                                </div>
                            }
                            {card.popular && (
                                <div className="bg-[#082854] absolute text-white font-bold p-3 rounded-t-lg"
                                    style={{ top: "-35px", left: "0", minWidth: "300px", width: '100%' }}>
                                    Most Popular
                                </div>
                            )}
                            <h3 className='font-bold'>{card.title}</h3>
                            {card.discount && (
                                <p className='px-2 bg-[#697883] font-medium rounded w-fit'>{card.discount}</p>
                            )}
                            <h2 className='text-2xl font-bold'>{card.price}</h2>
                            <p className='text-base font-light'>{card.total}</p>
                            <div>
                                <input type="checkbox"
                                    name='pricePackage'
                                    checked={isSelected === index}
                                    readOnly
                                    className='form-checkbox h-8 w-8 text-sm text-[#082854]' />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='py-10 w-full text-center'>
                    <Link href={'/'} className='bg-[#082854] mb-3 max-w-[300px] hover:bg-[#0b3775] text-white transition-all duration-300 text-sm font-medium w-full rounded-full px-6 py-2'>Get report</Link>
                    <div className='flex items-center justify-center'>
                        <img src='/mpesa_logo.png' className='w-[60px]' alt='mpesa' />                        
                    </div>
                </div>

            </div>
            {/* Carousel */}
            <div className='text-center flex flex-col justify-between text-white h-[80vh] bg-[#082854] py-20 relative px-7 lg:px-14'>
                <h1 className='text-3xl font-bold'>Always check a car's history before buying</h1>
                <div className='lg:hidden mt-6 grid grid-cols-1 gap-4'>
                    <motion.div
                        className='flex items-center justify-center'
                        key={currentIndex}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    >
                        <img src={sliderContainer[currentIndex].img} className='object-contain max-w-[350px]' alt="" />
                    </motion.div>

                    {sliderContainer.map((slide, index) => (
                        <div
                            key={index}
                            className={`flex items-center flex-col justify-between ${currentIndex !== index ? 'hidden' : ''}`}
                        >
                            <motion.h1
                                className='text-base py-2 font-bold'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut'
                                }}
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.p
                                className='text-sm w-[80%] lg:w-full'
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 2,
                                    ease: 'easeInOut'
                                }}
                            >
                                {slide.description}
                            </motion.p>
                        </div>
                    ))}
                </div>

                <div className='hidden w-full h-full lg:flex gap-4 items-center justify-between'>
                    {sliderContainer.map((slide, index) => (
                        <div key={index} className='flex flex-col items-center justify-between '>
                            <img src={slide.img} className='object-cover w-full max-w-[300px]' alt="" />
                            <h1 className='text-base py-2 font-bold'>{slide.title}</h1>
                            <p className='text-sm'>{slide.description}</p>
                        </div>
                    ))}
                </div>
                <div className='p-2 text-center rounded-full hover:bg-[rgba(255,255,255,0.18)] transition duration-300 lg:hidden text-gray-300 absolute cursor-pointer top-1/2 text-5xl right-0'>
                    <IoIosArrowForward onClick={moveRight} className='' />
                </div>

                <div className='lg:hidden text-center text-gray-300 p-2 rounded-full hover:bg-[rgba(255,255,255,0.18)] transition duration-300 absolute cursor-pointer text-5xl top-1/2 left-0'>
                    <IoIosArrowBack onClick={moveLeft} />
                </div>

                <div className='flex lg:hidden gap-1 pt-7 justify-center'>
                    {sliderContainer.map((slide, index) => (
                        <div key={index} className={`w-2 h-2 rounded-full border border-black ${currentIndex === index ? 'bg-black px-3' : 'bg-none'}`}></div>
                    ))}
                </div>
            </div>
            <div className='w-full flex flex-col lg:flex-row py-12 px-7 lg:px-14 bg-white'>
                <div className='flex flex-col lg:w-1/2 gap-7'>
                    <h1 className='text-3xl font-bold'>What we check for when preparing a report</h1>
                    <p className='text-base'>CARTRUST is the largest online database of used vehicle records. It contains more than a billion data from all over world.</p>
                    <ul className='w-full sm:w-[50%] grid grid-cols-2 gap-3 justify-between lg:w-full grid-rows-4  text-xs'>
                        <li className='flex items-center gap-3'><FaCheck /> Mileage rollbacks</li>
                        <li className='flex items-center gap-3'><FaCheck /> Recorded images</li>
                        <li className='flex items-center gap-3'><FaCheck /> Ownership changes</li>
                        <li className='flex items-center gap-3'><FaCheck /> Other useful information</li>
                        <li className='flex items-center gap-3'><FaCheck /> Damages</li>
                        <li className='flex items-center gap-3'><FaCheck /> Safety recalls</li>
                        <li className='flex items-center gap-3'><FaCheck /> Theft records</li>
                    </ul>
                </div>
                <div className='flex justify-center my-20 lg:w-1/2'>
                    <div className='relative' style={{ maxWidth: 200 }}>
                        <img className='object-cover' src="./assets/LandingPg5/PhoneFrame.png" alt="phone frame" />
                        <img style={{ maxWidth: 150, top: 60, left: 20 }} className='absolute' src="./assets/CarInfo/Mazda-Img.png" alt="Car SVG" />
                        <img style={{ maxWidth: 100, top: 130, left: -100 }} className='absolute rounded' src="./assets/CarInfo/Mazda_wreck.png" alt="Car SVG" />
                        <img style={{ maxWidth: 70, top: 195, left: -100 }} className='absolute rounded' src="./assets/CarInfo/Mazda_wreck2.png" alt="Car SVG" />
                        <div style={{ top: 195, left: -20 }}
                            className='absolute z-10 shadow-md flex flex-col bg-white p-2 rounded w-[150px] gap-2'>
                            <div className='rounded-full p-2 w-[50%] bg-yellow-400'></div>
                            <div className='w-[90%] bg-gray-400/40 p-1 rounded-full'></div>
                            <p className='text-sm font-bold'>Ksh800,000</p>
                        </div>
                        <img style={{ height: 100, top: 240, right: -30 }} className='absolute shadow-md rounded' src="./assets/CarInfo/chart.png" alt="Car SVG" />
                        <div style={{ top: 230, right: -50 }}
                            className='absolute z-10 shadow-md flex flex-col bg-black p-1 rounded w-[100px] h-auto gap-1'>
                            <div className='rounded-full p-[2px] w-[95%] bg-gray-400/40'></div>
                            <div className='w-[95%] bg-gray-400/40 p-[2px] rounded-full'></div>
                            <div className='w-[50%] bg-gray-400/40 p-[2px] rounded-full'></div>
                        </div>
                        <div className='w-[50px] absolute py-2 rounded-full bg-yellow-400'
                            style={{ top: 265, right: 30 }}>
                        </div>
                        <p
                            style={{ top: 153, right: 20 }}
                            className='bg-gray-100 absolute w-fit text-xs p-1 rounded-lg'>VIN:1VWBN7A35CC••••••
                        </p>
                    </div>
                </div>
            </div>
            {/* Accordion */}
            <div className='w-full shadow bg-[#e4e5e7] mb-20 md:rounded-2xl p-12 md:w-[80%] mx-auto'>
                <h1 className='font-bold text-3xl mb-8'>Frequently Asked Questions</h1>
                {pricingAccordion.map((entry, index) => (
                    <div key={index} className='py-3 w-full'>
                        <Faq
                            question={entry.qst}
                            answer={entry.ans}
                            toggleOpen={() => handleOpen(index)}
                            isOpen={openIndex === index}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}


const priceCards = [
    {
        title: "Check 2 cars",
        discount: "10%",
        price: "Ksh360/ report",
        total: "You pay Ksh720",
        popular: true,
    },
    {
        title: "Check 3 cars",
        discount: "25%",
        price: "Ksh300/ report",
        total: "You pay Ksh900",
        popular: false,
    },
    {
        title: "Check 1 car",
        discount: null,
        price: "Ksh400/ report",
        total: "Full price",
        popular: false,
    },
]

const sliderContainer = [
    {
        img: './Corolla_Left.png',
        title: 'Avoid costly scam',
        description: "Avoid bad quality used cars, motorcycles and other vehicle deals by checking their mileage, accidents, and additional history facts using our reports."

    },
    {
        img: './Corolla_Front.png',
        title: 'Protect yourself and your family',
        description: 'Choose a vehicle with a known history and stay safe on the road. Concealed car accidents, inflated airbags, and suspension problems can cause life-threatenng consequences.'
    },
    {
        img: './Corolla_Right.png',
        title: 'Save when buying',
        description: 'Gain some leverage in negotiations when purchasing a car - learn what the seller doesn\'t know or won\'t tell you!'
    }
]

const pricingAccordion = [
    {
        qst: 'What is a VIN?',
        ans: '"VIN" is an abbreviation for "vehicle identification number" - a unique set of 17 characters that car manufacturers assign individually to every single vehicle (including cars, motorcycles, trucks, etc.). You can find the VIN on various parts of the vehicle or in the registration documents Read more about the VIN.'
    },
    {
        qst: 'What information may appear in the CARTRUST report?',
        ans: 'We provide the information necessary to determine the real condition of a vehicle: mileage, damage records, countries of registration, records from databases of stolen vehicles and so much more. Note: we don\'t own or create the data in our reports - the information we provide depends on availability.'
    },
    {
        qst: 'What makes a CARTRUST report different from other similar services?',
        ans: 'CARTRUST has many advantages over the competition. For example, unlike many car history businesses, CARTRUST offers one report for all countries - you won\'t need to pay extra to look for data in different countries'
    },
    {
        qst: 'Can I use a CARTRUST report as legal evidence in court?',
        ans: 'Unfortunately not. We give you hints to identify issues, but the report is not legal evidence. Our advice: order a CARTRUST report before actually signing the vehicle purchase agreement. This will help you avoid bad purchases on the used car market!'
    },
    {
        qst: 'Where does the data come from?',
        ans: 'We gather data from various sources, including state registries, insurance companies, auto repair shops, connected vehicle fleets and many more.'
    },
    {
        qst: 'What payment methods do you accept?',
        ans: 'Credit cards and PayPal are accepted payment methods.'
    }
]

export default page