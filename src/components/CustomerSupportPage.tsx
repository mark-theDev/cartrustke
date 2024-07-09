import React from 'react'
import { FaBullhorn } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

const CustomerSupportPage = () => {
    return (
        <section className='flex flex-col h-[70vh] w-full items-center justify-between md:w-[90vw] mx-auto px-7 lg:px-[100px] md:my-20 py-14 md:rounded-2xl bg-[#b6c5d1]'>           
            <div className='text-center pt-16 w-full'>
                <h1 className='text-3xl font-bold'>Customer support is always here to help</h1>
                <p className='text-base pt-7'>Our support team is happy to assist you whenever you have a question. Drop us a message and we will get back to you.</p>
            </div>
            <div className='flex text-center justify-between w-full items-center pt-12'>
                <div className='flex flex-col items-center'>
                    <FaBullhorn className='text-[#082854] text-4xl' />
                    <h1 className='text-2xl p-2 font-bold'>97%</h1>
                    <p className='text-sm'>satisfaction rate</p>
                </div>
                <div className='flex flex-col items-center'>
                    <FaEnvelopeOpenText className='text-[#082854] text-4xl' />
                    <h1 className='text-2xl p-2 font-bold'>12-24h</h1>
                    <p className='text-sm'>avg. response time</p>
                </div>
                <div className='flex flex-col items-center'>
                    <CiTimer className='text-[#082854] text-4xl' />
                    <h1 className='text-2xl p-2 font-bold'>24/7</h1>
                    <p className='text-sm'>always available</p>
                </div>
            </div>
        </section>
    )
}

export default CustomerSupportPage