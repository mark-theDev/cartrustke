'use client'
import React, { useRef } from 'react'
import { FaCheck } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import Faq from '../../components/Faq';
import { useState } from 'react';
import ContactUS from '../../components/ContactUS';

const page = () => {

    const [openIndex, setOpenIndex] = useState<null | number>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const faqRef = useRef<HTMLDivElement>(null)

    const moveToDiv = () => {
        contactRef.current ? contactRef.current.scrollIntoView({behavior: 'smooth'}): ''
    }

    function scrollIntoView () {
        faqRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const handleOpen = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index)
    }
    return (
        <section className='w-full h-full'>
            <div className='h-screen text-center w-full px-7 lg:px-14 bg-[#ffffff] flex flex-col justify-center gap-7 items-center'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Avoid fraud and manage risk in your insurance business</h1>
                <p className='text-lg font-light w-[90%] sm:w-[60%]'>Vehicle history data is a quick and easy way to determine the real value of a car and minimize risk:</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Ensure a car's value matches the reality</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Avoid insurance fraud</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Use our API for easy integration, making your job easier</p></div>
                </div>
                <div className='flex justify-between w-full max-w-[400px] gap-4 items-center'>
                    <button onClick={moveToDiv} className='w-full text-sm group text-white transition-all duration-300 ease-in-out font-medium py-3 bg-[#082854] hover:bg-[#061d3d] rounded-full'>Get in touch</button>
                    <button onClick={scrollIntoView} className='w-full text-sm group transition-all duration-300 ease-in-out font-medium py-3 border border-black hover:bg-black hover:text-white rounded-full'>Learn more</button>
                </div>
            </div>
            <div className='bg-[#082854] h-screen items-center py-10 px-7 lg:px-14 w-full grid grid-cols-1 md:grid-cols-2 gap-9'>
                <div className='text-left order-2 md:order-1 text-white'>
                    <h1 className='text-3xl mb-8 md:text-4xl font-bold'>Manage risk – detect damages, mileage rollbacks, and other tricks</h1>
                    <p className='text-sm font-medium'>Knowing the real value of a car is crucial for any insurance business, but your clients don't always know the condition of cars they're insuring. CARTRUST helps you spot damaged, clocked, and otherwise compromised vehicles. No more unnecessary risks – see them from a mile away.</p>
                    <button className='rounded-full mt-8 transition duration-300 ease-in-out text-sm font-medium px-9 py-2 border border-white hover:bg-white hover:text-[#000f78]'>Contact us</button>
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

            <div ref={contactRef} className='bg-[#e6e4e4] px-7 lg:px-14 py-16'>
                <ContactUS />
            </div>

            <div ref={faqRef} className='flex flex-col min-h-[70vh] items-left w-full mx-auto md:w-[70vw] px-7 lg:px-14 justify-center'>
                <h1 className='text-3xl sm:text-4xl pb-8 font-bold'>Frequently Asked Questions</h1>
                {facts.map((entry, index) => (
                    <div key={index}>
                        <Faq
                            question={entry.qst}
                            answer={entry.ans}
                            isOpen={openIndex === index}
                            toggleOpen={() => handleOpen(index)}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default page

const facts = [
    {
        qst: 'What information may appear in the CARTRUST report?',
        ans: 'CARTRUST reports are used by many insurance companies to verify the car’s real history. It may indicate damages, mileage rollbacks, theft cases, specs, usage details and more. This information may be crucial when determining the precise value of the car.'
    },
    {
        qst: 'Are there any special solutions for insurance companies?',
        ans: 'CARTRUST provides car history reports in different formats/segments.API solutions can be easily integrated into your platforms and you can manage how you access vehicle history reports. Our API is the key to unlocking vital information with ease and precision.'
    },
    {
        qst: 'How much does it cost? Where can I find more information about custom solutions?',
        ans: 'The report price may vary based on the number of reports purchased – larger bundles result in cheaper reports. We also provide custom solutions to any insurance company adapting to your established processes and business models. Please contact our dedicated B2B managers for more details. They will assess your needs and provide the most suitable solutions.'
    }
]