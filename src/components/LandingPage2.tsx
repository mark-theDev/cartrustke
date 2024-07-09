"use client"
import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { CiCircleAlert } from "react-icons/ci";
import { motion } from "framer-motion"

const LandingPage2 = () => {
    return (
        <section className="bg-[#082854] min-h-full w-full px-7 lg:px-14 py-[60px]">
            <div className='lg:grid grid-cols-2 gap-4'>
                <div className='lg:hidden text-white block'>
                    <h1 className='text-3xl font-extrabold'>Learn about your car and give it proper care</h1>
                    <p className="text-base pt-4 font-normal">A well-maintained mechanical friend will always join your adventures</p>
                </div>
                <div className='lg:order-1'>
                    <div className='relative py-[40px] flex justify-center w-full'>
                        <img
                            src="/assets/LandingPage2/Landing2.png"
                            alt='Check history'
                            className="object-cover rounded-2xl max-w-[350px]"
                        />
                        <motion.div
                            className='absolute left-[35%] top-[40%] lg:left-[75%] lg:top-[60%] w-16 rounded-full bg-white h-6'
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <div className='w-5 h-5 absolute left-1 top-[2px] rounded-full bg-sky-500'></div>
                        </motion.div>
                        <motion.div
                            className='flex absolute top-[50%] lg:top-[40%] lg:right-[10px] items-center max-h-10 bg-white rounded-2xl py-7 px-1'
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        >
                            <div className='flex items-center bg-yellow-300 p-2 rounded-xl'>
                                <FiAlertTriangle className='text-3xl font-light' />
                            </div>
                            <p className='text-sm px-2'>Mileage discrepancy found</p>
                        </motion.div>
                        <motion.div
                            className='flex absolute left-[30%] bottom-[5%] lg:left-[70%] items-center max-h-10 bg-white rounded-2xl py-7 px-1'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 3, ease: 'easeOut' }}
                        >
                            <div className='flex items-center bg-yellow-300 p-2 rounded-xl'>
                                <FiAlertTriangle className='text-3xl font-light' />
                            </div>
                            <p className='text-sm px-2'>Maintainance</p>
                        </motion.div>
                        <motion.div
                            className='flex absolute left-[40%] bottom-[20%] lg:left-[60%] items-center max-h-10 bg-white rounded-2xl py-7 px-1'
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 4, ease: 'easeOut' }}
                        >
                            <div className='flex items-center bg-sky-400 p-2 rounded-xl'>
                                <CiCircleAlert className='text-3xl font-light' />
                            </div>
                            <p className='text-sm px-2'>Check car equipment</p>
                        </motion.div>
                    </div>
                </div>
                <div className='lg:order-2 lg:mt-[55px]'>
                    <div className='text-white hidden lg:block'>
                        <h1 className='text-3xl font-extrabold'>Learn about your car and give it proper care</h1>
                        <p className="text-lg pt-4 font-medium">A well-maintained mechanical friend will always join your adventures</p>
                    </div>
                    <div className='text-white my-[40px]'>
                        <h1 className="text-lg pb-6 font-bold">
                            Curiosity can be healthy
                        </h1>
                        <p className="text-sm font-normal">
                            Aside from being interesting, a car's story may hide weak spots and safety issues you'll want to address.
                        </p>
                    </div>
                    <div className='text-white'>
                        <h1 className="text-lg pb-6 font-bold">
                            Expert car care assistance
                        </h1>
                        <p className="text-sm font-normal">
                            Upcoming products and maintenance guides on our blog will keep your car happy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage2