'use client'
import ContactUS from '@/components/ContactUS'
import React from 'react'

const contactsPage = () => {
  return (
    <div>
        <div className='bg-[#082854] pt-[100px] px-7 lg:p-14 text-white justify-center grid grid-cols-1 lg:grid-cols-2 h-[80vh] items-center'>
            <div className='text-center lg:text-left'>
                <h1 className='text-4xl font-bold mb-5'>Contact us</h1>
                <p className='text-sm font-light'>Do you have questions concerning our product, your order, or a general matter? Tell us how we can help you.</p>
            </div>
            <div className='flex w-ful justify-center'>
                <img className='max-w-[500px] max-h-[250px] lg:max-w-full' src="/ContactUS.png" alt="" />
            </div>            
        </div>
        <div className='w-full bg-[#b6c5d128] px-7 lg:px-14 py-[60px]'>
            <ContactUS />
        </div>
    </div>
  )
}

export default contactsPage