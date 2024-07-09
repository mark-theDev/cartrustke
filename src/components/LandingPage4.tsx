import React from 'react'
import ReportButton from './ReportButton'
import TrustedBy from './TrustedBy'
import Link from 'next/link'

const LandingPage4 = () => {
  return (
    <section className="px-7 lg:px-14 min-h-[70vh] md:mb-20 grid grid-cols-1 lg:grid-cols-2 items-center lg:w-[90vw] mx-auto lg:rounded-3xl bg-[#082854]">
        <div className="flex w-full text-center text-white flex-col gap-4 items-center justify-between">
            <h1 className='text-4xl lg:text-[43px] font-bold'>Car history report</h1>
            <p className='text-sm text-center font-light py-6'>Avoid costly problems by checking a car's history. <br />Just enter the <Link className='underline font-medium hover:text-[#697883]' href=''>Car Registration</Link>  and get a full report.</p>
            <ReportButton />
            {/* <div className='hover:text-white hover:border:white'><TrustedBy /></div> */}
            <img src="./assets/FigmaImg/LandingPg4.png" alt="Image" 
              className='hidden absolute max-h-[60%] bottom-0 right-[-20%]' />                        
        </div>
        <div className='w-full hidden lg:flex justify-center'>
          <img className='w-full' src="/assets/LandingPage1/G_Wagon.png" alt="" />
        </div>
    </section>
  )
}

export default LandingPage4