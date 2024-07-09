'use client'
import React, { useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Faq from '../../components/Faq';
import JoinUs from '../../components/JoinUs';
import { IoStar } from "react-icons/io5";
import ContactUS from '../../components/ContactUS';

const b2bPricing = () => {

    const [openIndex, setOpenIndex] = useState<null | number>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const pricingSection = useRef<HTMLDivElement>(null)

    const handleOpen = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index)
    }

    const moveToDiv = () => {
        contactRef.current ? contactRef.current.scrollIntoView({behavior: 'smooth'}): ''
    }

    const moveToPricing = () => {
        pricingSection.current ? pricingSection.current.scrollIntoView({behavior: 'smooth'}) : ''
    }

    return (
        <section>
            <div className='h-screen text-center w-full px-7 lg:px-14 pt-[6rem] bg-[#082854] text-white flex flex-col justify-center gap-12 items-center'>
                <h1 className='text-4xl md:text-5xl font-bold'>Boost your dealership business</h1>
                <p className='text-lg font-light w-[90%] sm:w-[60%]'>Our products will make your automotive business more efficient, transparent and will increase customer satisfaction.</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Reduce the risk of unexpected costs</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Simplify car evaluation process</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Make your sales faster</p></div>
                </div>
                <div className='flex justify-center gap-4 items-center'>
                    <button onClick={moveToPricing} className='px-3 lg:px-12 text-sm group transition-all duration-300 ease-in-out font-medium py-3 bg-white text-black hover:bg-[#ffffffc0] rounded-full'>Check pricing</button>
                    <button onClick={moveToDiv} className='px-3 lg:px-12 text-sm group transition-all duration-300 ease-in-out font-medium py-3 border text-white border-white hover:bg-[#051935] rounded-full'>Get in touch</button>
                </div>
            </div>

            <div ref={pricingSection} className='w-full px-7 lg:px-14 py-16 flex flex-col gap-6 h-auto'>
                <h1 className='text-4xl font-bold text-center'>Flexible pricing</h1>
                <p className='text-base text-center font-normal'>No contracts or obligations. Better report prices for your business. Save more than 73%.</p>
                <div className='grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 w-full  gap-6'>
                    <div className='flex border border-gray-300 items-center rounded-2xl flex-col gap-4 justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'>10 reports</h1>
                        <p className='text-2xl font-bold'>$9.90 <br /> <span className='text-sm'>/report</span></p>
                        <p className='text-base text-gray-500'>Save 67%</p>
                        <button className='w-full rounded-full py-2 text-sm font-bold bg-yellow-400'>Buy for $99</button>
                    </div>
                    <div className='flex border border-gray-300 items-center rounded-2xl flex-col gap-4 justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'>30 reports</h1>
                        <div className='block text-center'><p className='text-2xl font-bold'>$9.39</p><p className='text-sm'>/ report</p></div>
                        <p className='text-base text-gray-500'>Save 69%</p>
                        <button className='w-full rounded-full py-2 text-sm font-bold bg-yellow-400'>Buy for $281.70</button>
                    </div>
                    <div className='flex border border-gray-300 items-center rounded-lg flex-col gap-4 justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'>100 reports</h1>
                        <p className='text-2xl font-bold'>$8.79 <br /> <span className='text-sm'>/ report</span></p>
                        <p className='text-base text-gray-500'>Save 71%</p>
                        <button className='w-full rounded-full py-2 text-sm font-bold bg-yellow-400'>Buy for $879.00</button>
                    </div>
                    <div className='flex items-center bg-sky-400 gap-4 rounded-lg flex-col justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'><FaCirclePlus /></h1>
                        <p className='text-xl font-bold'>Want to buy more reports? Get custom offer</p>

                        <button className='w-full rounded-full py-2 text-sm font-bold bg-yellow-400'>Contact us</button>
                    </div>
                </div>
            </div>           

            <div className='w-full'>
                <JoinUs />
            </div>           

            <div className='flex flex-col py-16 w-full px-7 lg:px-14'>
                <div className='text-center w-full flex flex-col gap-4 pb-14'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>Don't take only our word for it</h1>
                    <p className='text-base font-normal'>We help businesses just like yours to sell more vehicles.</p>
                </div>
                
                <div className='grid grid-col-1 justify-center lg:grid-cols-3 gap-6'>
                    <div className='flex justify-between max-w-[450px] w-full flex-col gap-3 p-4 rounded-lg items-left border border-gray-200 shadow'>
                        <img src='./assets/blog/Blogger1.png' alt="" style={{width: '50px', objectFit: 'cover', borderRadius: '100%'}} />
                        <h1 className='text-lg font-semibold'>Pavel</h1>
                        <h3 className='text-sm font-light text-gray-500'>Co-owner & Deputy CEO at CarTrax</h3>
                        <p className='text-sm font-normal'>"With CARTRUST, we've reduced the risk of buying cars with hidden flaws to a minimum. Previously, some issues could only be found after a thorough inspection."</p>
                        <div className='flex text-yellow-300'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    </div>
                    <div className='flex justify-between max-w-[450px] w-full flex-col gap-3 p-4 rounded-lg items-left border border-gray-200 shadow'>
                        <img src='./assets/blog/Blogger2.png' alt="" style={{width: '50px', objectFit: 'cover', borderRadius: '100%'}} />
                        <h1 className='text-lg font-semibold'>Laurynas Boguševičius</h1>
                        <h3 className='text-sm font-light text-gray-500'>Deals on Wheels Founder</h3>
                        <p className='text-sm font-normal'>"Openness and transparency are crucial when selling or buying a vehicle. CARTRUST is a huge help in fostering these values."</p>
                        <div className='flex text-yellow-300'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    </div>
                    <div className='flex justify-between max-w-[450px] w-full flex-col gap-3 p-4 rounded-lg items-left border border-gray-200 shadow'>
                        <img src='./assets/blog/Blogger3.png' alt="" style={{width: '50px', objectFit: 'cover', borderRadius: '100%'}} />
                        <h1 className='text-lg font-semibold'>Gergo Almasi</h1>
                        <h3 className='text-sm font-light text-gray-500'>CEO at AGR Auto Kft</h3>
                        <p className='text-sm font-normal'>"A car is an expensive purchase, and customers want to know everything about it before making a decision. The vehicle’s history check is a bonus that we offer to clients."</p>
                        <div className='flex text-yellow-300'><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></div>
                    </div>
                </div>
            </div>

            <div ref={contactRef} className='w-full h-full bg-[#f9f9f9] px-7 lg:px-14 py-16'>
                <ContactUS />
            </div>

            <div className='text-left px-7 w-full py-20 sm:w-[80%] mx-auto lg:w-[60%]'>
                <h1 className='text-3xl sm:text-4xl pb-8 font-bold'>Frequently Asked Questions</h1>
                {
                    faqs.map((entry, index) => (
                        <div
                            key={index}
                            className='pb-4'
                        >
                            <Faq
                                question={entry.qstn}
                                answer={entry.ans}
                                isOpen={openIndex === index}
                                toggleOpen={() => handleOpen(index)}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default b2bPricing


const faqs = [
    {
        qstn: 'What are CARTRUST report bundles?',
        ans: 'Our business customers (and others who want to check more than 1 car) can choose one of our report bundles. Doing so will add a number of report credits to your CARTRUST account (the number depends on your chosen bundle) at a discounted price. You can use these credits whenever you need them, within 6 months of the purchase date.'
    },
    {
        qstn: 'How does a 10-report monthly subscription work?',
        ans: 'Our services are available on a subscription basis for B2B clients. By subscribing, you agree to auto-renewal every month on the renewal day, which is based on your first bundle purchase. You’ll be billed at the current price at renewal for a ten-report subscription.'
    },
    {
        qstn: 'I am a business client, none of the report packages suit my needs.',
        ans: 'We can provide you with a customized package proposal. Please feel free to message us with your inquiry.'
    },
    {
        qstn: 'What happens when I buy more than 1 report?',
        ans: 'After you buy more than one report, all reports you don’t use immediately will appear in your CARTRUST account as report credits. To use them, simply log into your account and follow these steps. All of the credits will be valid for 6 months, so you don’t have to rush to use them.'
    },
    {
        qstn: 'Can I get an invoice for my payment?',
        ans: 'After you select a desirable package and enter your credit card information, you will be asked to confirm your purchase. Immediately after confirmation, you will be redirected to the page where, with a single click of a button, you will have access to an invoice for the reports you’ve purchased.'
    }
]