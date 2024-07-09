'use client'
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import ContactUS from '../../components/ContactUS';
import Faq from '../../components/Faq';

const page = () => {

    const [openIndex, setOpenIndex] = useState<null | number>(null)

    const handleOpen = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index)
    }
    return (
        <section>
            <div className='h-screen text-center w-full px-7 lg:px-14 pt-[5rem] text-white bg-[#082854] flex flex-col gap-7 items-center justify-center'>
                <h1 className='text-3xl md:text-5xl font-bold'>Lower risk in your car leasing business</h1>
                <p className='text-lg font-light w-[90%] sm:w-[60%]'>Vehicle history data is a quick and easy way to determine the real value of a car and minimize risk:</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Ensure a car's value matches the reality</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Avoid insurance fraud</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Avoid bad loans</p></div>
                </div>
                <div className='flex justify-center gap-4 items-center'>
                    <button className='px-12 text-sm group transition-all duration-300 ease-in-out font-medium py-3 bg-white text-black hover:bg-[#ffffffb1] rounded-full'>Get in touch</button>
                    <button className='px-12 text-sm group transition-all duration-300 ease-in-out font-medium py-3 border border-white hover:bg-black hover:text-white rounded-full'>Learn more</button>
                </div>
            </div>
            <div className='flex flex-col py-16 w-full px-7 lg:px-14'>
                <div className='text-center w-full flex flex-col gap-4 pb-14'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>Don't take only our word for it</h1>
                    <p className='text-base font-normal'>We help businesses just like yours to sell more vehicles.</p>
                </div>

                <div className='grid grid-col-1 justify-center lg:grid-cols-3 gap-6'>
                    <div className='flex justify-between max-w-[450px] w-full flex-col gap-3 p-4 rounded-lg items-left border border-gray-200 shadow'>
                        <img src='./assets/blog/Blogger1.png' alt="" style={{ width: '50px', objectFit: 'cover', borderRadius: '100%' }} />
                        <h1 className='text-lg font-semibold'>Pavel</h1>
                        <h3 className='text-sm font-light text-gray-500'>Co-owner & Deputy CEO at CarTrax</h3>
                        <p className='text-sm font-normal'>"With CARTRUST, we've reduced the risk of buying cars with hidden flaws to a minimum. Previously, some issues could only be found after a thorough inspection."</p>
                        <div className='flex text-yellow-300'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    </div>
                    <div className='flex justify-between max-w-[450px] w-full flex-col gap-3 p-4 rounded-lg items-left border border-gray-200 shadow'>
                        <img src='./assets/blog/Blogger2.png' alt="" style={{ width: '50px', objectFit: 'cover', borderRadius: '100%' }} />
                        <h1 className='text-lg font-semibold'>Laurynas Boguševičius</h1>
                        <h3 className='text-sm font-light text-gray-500'>Deals on Wheels Founder</h3>
                        <p className='text-sm font-normal'>"Openness and transparency are crucial when selling or buying a vehicle. CARTRUST is a huge help in fostering these values."</p>
                        <div className='flex text-yellow-300'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    </div>
                    <div className='flex justify-between max-w-[450px] w-full flex-col gap-3 p-4 rounded-lg items-left border border-gray-200 shadow'>
                        <img src='./assets/blog/Blogger3.png' alt="" style={{ width: '50px', objectFit: 'cover', borderRadius: '100%' }} />
                        <h1 className='text-lg font-semibold'>Gergo Almasi</h1>
                        <h3 className='text-sm font-light text-gray-500'>CEO at AGR Auto Kft</h3>
                        <p className='text-sm font-normal'>"A car is an expensive purchase, and customers want to know everything about it before making a decision. The vehicle’s history check is a bonus that we offer to clients."</p>
                        <div className='flex text-yellow-300'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    </div>
                </div>
            </div>
            <div className='bg-[#082854] h-screen items-center py-10 px-7 lg:px-14 w-full grid grid-cols-1 md:grid-cols-2 gap-9'>
                <div className='text-left order-2 md:order-1 text-white'>
                    <h1 className='text-3xl mb-8 md:text-4xl font-bold'>Detect damaged cars, mileage rollbacks, and other tricks</h1>
                    <p className='text-sm font-medium'>Your clients don't know everything about the cars they're buying – uncovering damages, odometer tampering, and other tricks can be difficult. CARTRUST is the hack that lets you see the truth without a mechanic's help.</p>
                    <button className='rounded-full mt-8 transition duration-300 ease-in-out text-sm font-medium px-9 py-2 border border-white hover:bg-white hover:text-[#000f78]'>Give a trial</button>
                </div>
                <div
                    className='relative order-1 md:order2 flex justify-center'
                    style={{ maxWidth: '500px', maxHeight: '400px' }}
                >
                    <img src="./Chart_Trend.png"
                        className='rounded-lg w-full'

                        alt="chart"
                    />
                    <img src="./assets/CarInfo/Mazda_Wreck.png"
                        alt=""
                        className='absolute rounded-md'
                        style={{ width: '150px', position: 'absolute', right: -10, bottom: 30 }}
                    />
                    <img src="./assets/CarInfo/Mazda_Wreck2.png" alt=""
                        className='absolute rounded-md'
                        style={{ width: '150px', position: 'absolute', right: '30%', bottom: -50 }}
                    />
                    <img src="./Record_File.png" alt=""
                        className='shadow-md'
                        style={{ position: 'absolute', width: '200px', top: '-50px', left: 10 }}
                    />
                </div>
            </div>
            <div className='grid bg-white grid-cols-1 items-center gap-9 md:grid-cols-2 py-[60px] h-full w-full md:h-screen px-7 lg:px-14'>
                <div className=''>
                    <h1 className='text-3xl mb-8 md:text-4xl font-bold'>Don't overestimate a vehicle's value!</h1>
                    <p className='text-sm font-medium'>Correctly evaluating the value of a car is crucial for any leasing business. With our vehicle history reports, doing so is easier than ever. Spot damages, mileage rollbacks, and other value-diminishing facts at the click of a button.</p>
                    <button className='rounded-full mt-8 transition duration-300 ease-in-out text-sm font-medium px-9 py-2 border border-black hover:bg-black hover:text-white'>Contact us</button>
                </div>
                <div className='relative'>
                    <img className='max-w-[80%] rounded-xl' src="./mazda_CX5.jpeg" alt="" />
                    <img className='absolute max-w-[300px] rounded-lg shadow-lg bottom-[-2rem] right-[20px]' src="./Mileage_Check.png" alt="" />
                </div>
            </div>
            <div className='w-full bg-[#eeecec] py-[60px] h-full px-7 lg:px-14'>
                <ContactUS />
            </div>
            <div className='flex flex-col min-h-[70vh] items-left w-full mx-auto md:w-[70vw] px-7 lg:px-14 justify-center'>
                <h1 className='text-3xl sm:text-4xl pb-8 font-bold'>Frequently Asked Questions</h1>
                {
                    faqArr.map((entry, index) => (
                        <div key={index}>
                            <Faq
                                question={entry.qst}
                                answer={entry.ans}
                                toggleOpen={() => handleOpen(index)}
                                isOpen={openIndex === index}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default page

const faqArr = [
    {
        qst: 'What information may appear in the CARTRUST report?',
        ans: 'CARTRUST reports are used by many leasing companies to verify the car’s real history. It may indicate damages, mileage rollbacks, theft cases, specs, usage details and more. This information may be crucial when determining the exact condition of the car.'
    },
    {
        qst: 'Are there any special solutions for leasing companies?',
        ans: 'CARTRUST provides car history reports in different formats/segments.API solutions can be easily integrated into your platforms and you can manage how you access vehicle history reports. Our API is the key to unlocking vital information with ease and precision.'
    },
    {
        qst: 'How much does it cost? Where can I find more information about custom solutions?',
        ans: 'The report price may vary based on the number of purchased reports purchased. We also provide custom solutions to any leasing company adapting to your established processes and business models. Please contact our dedicated B2B managers for more details. They will assess your needs and provide the most suitable solutions.'
    }
]