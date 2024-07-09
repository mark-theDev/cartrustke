'use client'
import React, { useRef, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Faq from '../../components/Faq';
import JoinUs from '../../components/JoinUs';
import { IoStar } from "react-icons/io5";
import ContactUS from '../../components/ContactUS';

const vinCheck = () => {

    const [openIndex, setOpenIndex] = useState<null | number>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const priceRef = useRef<HTMLDivElement>(null)

    const handleOpen = (index: number) => {
        setOpenIndex(prev => prev === index ? null : index)
    }

    const handleScroll = () => {
        contactRef.current ? contactRef.current.scrollIntoView({behavior: 'smooth'}):'';
    }
    const moveToPage = () => {
        priceRef.current ? priceRef.current.scrollIntoView({behavior: 'smooth'}): '';
    }

    return (
        <section>
            <div className='h-screen text-center text-white w-full px-7 lg:px-14 pt-[6rem] bg-[#082854] flex flex-col justify-center gap-12 items-center'>
                <h1 className='text-4xl md:text-5xl font-bold'>Pay now, check later</h1>
                <p className='text-lg font-light w-[90%] sm:w-[60%]'>Our products will make your automotive business more efficient, transparent and will increase customer satisfaction.</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Reduce the risk of unexpected costs</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Simplify car evaluation process</p></div>
                    <div className='flex items-center gap-3'><FaCheck /><p className='text-sm font-medium'>Make your sales faster</p></div>
                </div>
                <div className='flex w-full justify-center gap-10 items-center'>
                    <button onClick={moveToPage} className='px-3 sm:px-12 text-sm group transition-all duration-300 ease-in-out text-[#082854] font-medium py-3 border bg-white hover:bg-transparent hover:border-white hover:text-white rounded-full'>Check pricing</button>
                    <button onClick={handleScroll} className='px-3 sm:px-12 text-sm group transition-all duration-300 ease-in-out font-medium py-3 border border-white hover:bg-white hover:text-[#082854] rounded-full'>Get in touch</button>
                </div>
            </div>

            <div ref={priceRef} className='w-full px-7 lg:px-14 py-16 flex flex-col gap-6 h-auto'>
                <h1 className='text-4xl font-bold text-center'>Flexible pricing</h1>
                <p className='text-base text-center font-normal'>No contracts or obligations. Better report prices for your business. Save more than 73%.</p>
                <div className='grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 w-full  gap-6'>
                    <div className='flex border border-gray-300 items-center rounded-2xl flex-col gap-4 justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'>10 reports</h1>
                        <p className='text-2xl font-bold'>Ksh349 <br /> <span className='text-sm'>/report</span></p>
                        <p className='text-base text-gray-500'>Save 13%</p>
                        <button className='w-full rounded-full py-2 text-sm text-white font-bold bg-[#082854]'>Buy for Ksh 3,490</button>
                    </div>
                    <div className='flex border border-gray-300 items-center rounded-2xl flex-col gap-4 justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'>30 reports</h1>
                        <div className='block text-center'><p className='text-2xl font-bold'>Ksh299</p><p className='text-sm'>/ report</p></div>
                        <p className='text-base text-gray-500'>Save 25%</p>
                        <button className='w-full rounded-full py-2 text-sm font-bold text-white bg-[#082854]'>Buy for Ksh8,970</button>
                    </div>
                    <div className='flex border border-gray-300 items-center rounded-lg flex-col gap-4 justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'>100 reports</h1>
                        <p className='text-2xl font-bold'>Ksh249 <br /> <span className='text-sm'>/ report</span></p>
                        <p className='text-base text-gray-500'>Save 38%</p>
                        <button className='w-full rounded-full py-2 text-sm font-bold text-white bg-[#082854]'>Buy for Ksh24,900</button>
                    </div>
                    <div className='flex items-center bg-sky-400 gap-4 rounded-lg flex-col justify-between p-6 shadow-md'>
                        <h1 className='text-lg font-medium'><FaCirclePlus /></h1>
                        <p className='text-xl font-bold'>Want to buy more reports? Get custom offer</p>
                        <button className='w-full rounded-full py-2 text-sm font-bold bg-yellow-400'>Contact us</button>
                    </div>
                </div>
            </div>

            <div ref={contactRef} className='h-full px-7 lg:px-14 py-10 flex justify-center items-center bg-slate-100'>
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

export default vinCheck


const faqs = [
    {
        qstn: 'How does the CARTRUST service work?',
        ans: 'CARTRUST provides data about vehicles gathered from more than 900 data sources. We collect all the data we can find about a specific vehicle and compile it into one history report. We do not create the data seen in our reports – when you enter a VIN into our website, we use it to query databases belonging to various institutions, including insurance, law enforcement, and others. All of the information included in the report comes from these sources.'
    },
    {
        qstn: 'What information may appear in the CARTRUST report?',
        ans: 'We may provide the information necessary to determine the real condition of a vehicle: mileage, damage records, records from databases of stolen vehicles, and so much more.'
    },
    {
        qstn: 'Where does the data come from?',
        ans: 'We gather data from various sources, including state registries, insurance companies, auto repair shops, connected vehicle fleets and many more.'
    }
]