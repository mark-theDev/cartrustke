import React from 'react'

const JoinUs = () => {
    return (
        <section className='flex flex-col lg:rounded-2xl lg:w-[90vw] mx-auto bg-[#082854] w-full py-20 px-7 text-white lg:px-14'>
            <div className='lg:w-full lg:flex lg:justify-center'>
                <div className='lg:w-[70%] lg:text-center'>
                    <h1 className='text-2xl font-bold md:font-extrabold md:text-4xl'>Even more value for your automotive business</h1>
                    <p className='text-base md:text-lg py-3'>Vehicle dealerships, classifieds websites, insurance companies, and others will love our features</p>
                </div>
            </div>
            <div className='flex flex-col lg:justify-between lg:flex-row'>
                <div className="py-12 flex justify-center lg:order-2 items-center gap-4">
                    <img className="max-w-[150px] lg:order-2 rounded-lg" src="./assets/JoinUs/person1.png" alt="person1" />
                    <div className='flex justify gap-4 flex-col lg:order-1'>
                        <img className="max-w-[150px] rounded-lg" src="./assets/JoinUs/person2.png" alt="person2" />
                        <img className="max-w-[150px] rounded-lg" src="./assets/JoinUs/person3.png" alt="person3" />
                    </div>
                </div>
                <div className='text-white lg:pt-9 lg:order-1 lg:w-1/2'>
                    <div className='pb-9'>
                        <h1 className='text-xl font-bold'>Easier to understand for you and your customers</h1>
                        <p className='text-sm pt-3'>Our car history report has a more intuitive layout and useful advice.</p>
                    </div>
                    <div className='pb-9'>
                        <h1 className='text-xl font-bold'>More data - more profit</h1>
                        <p className='text-sm pt-4'>We keep expanding our pool of data sources - each new source means more potential to save money for our users.</p>
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>Developing our B2B offerings</h1>
                        <p className='text-sm pt-4'>carVertical is committed to building on success in the B2B market by continuing to improve our business offerings.</p>
                    </div>
                    <div className='hidden lg:flex pt-12 justify-start'>
                        <button className='rounded-full py-3 px-4 bg-[#b5c5d1] duration-300 ease-in-out text-black text-xs font-medium hover:bg-[#ccd2d6] w-full sm:w-fit '>Become business partner</button>
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex pt-12 justify-center'>
                <button className='rounded-full py-3 px-4 bg-[#b5c5d1] duration-300 ease-in-out text-black text-xs font-medium hover:bg-[#ccd2d6] w-full sm:w-fit '>Become business partner</button>
            </div> 
                       
        </section>
    )
}

export default JoinUs