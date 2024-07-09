import React from 'react'
import Pg5PhoneImg from './Pg5PhoneImg'
import { SiTicktick } from "react-icons/si";

const LandingPage5 = () => {

    const items = [
        {
            
            title: 'Give the full story',
            description: 'Does your car\'s story sound too good? Prove it with a carVertical report.'
        },
        {
            
            title: 'Transparency builds trust',
            description: 'Used car buyers have good reasons to be suspicious - hard facts can put them at ease.'
        },
        {
            
            title: 'Full disclosure for quick sales',
            description: 'Even if your car has a difficult past, you\'ll sell it faster with a history check.'
        },
        {
            
            title: 'Gain a bargaining chip',
            description: 'A clean bill of health can help you justify a higher asking price.'
        }
    ]
  return (
    <section className='py-16 shadow lg:rounded-2xl lg:w-[90vw] mx-auto w-full text-left px-7 lg:mb-20 lg:px-14 lg:h-screen'>
        <div className='lg:text-center'>
            <h1 className='text-3xl font-bold'>Time to sell? We've got your back</h1>
            <p className='text-base pt-3 pb-8'>Don't undervalue your car—get the right deal</p>
        </div>
        
        <div className='flex flex-col w-full lg:gap-10 lg:flex-row lg:items-center lg:justify-between'>
            <div className=''>
                {items.slice(0,2).map((item,index) => (
                    <div className='flex flex-col gap-2 mb-6 items-start justify-between' 
                        key={index}>
                        <SiTicktick className='text-[#697883] text-2xl'/>
                        <h1 className='text-lg font-bold'>{item.title}</h1>
                        <p className='text-base'>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='hidden mx-12 lg:block max-w-[200px]'>
                <Pg5PhoneImg />
            </div>            
            <div>
            {items.slice(2).map((item,index) => (
                <div className='flex flex-col gap-2 mb-6 items-start justify-between' 
                    key={index}>
                    <SiTicktick className='text-[#697883] text-2xl'/>
                    <h1 className='text-lg font-bold'>{item.title}</h1>
                    <p className='text-base'>{item.description}</p>
                </div>
            ))}
            </div>
        </div>
        
    </section>
  )
}

export default LandingPage5