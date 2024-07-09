import React from 'react'
import TrustedBy from './TrustedBy'

const Recommendations = () => {
  return (    
    <section className="flex flex-col w-full items-center py-6 bg-[#f9f9f9]">
        <div className='flex relative w-[120px] justify-center'>
            <img src="./assets/RecommendedPage/1.png" alt="Image-1" 
                className="w-[40px] object-cover h-[40px] absolute left-[20%] rounded-full border-2 border-white" />
            <img src="./assets/RecommendedPage/2.png" alt="Image-2" 
                className="w-[40px] object-cover h-[40px] absolute left-[50%] rounded-full border-2 border-white" />
            <img src="./assets/RecommendedPage/3.png" alt="Image-3" 
            className="w-[40px] h-[40px] object-cover absolute left-[79%] rounded-full border-2 border-white" />
        </div>
        <p className='text-xs mt-12 text-center'>Trusted by over 1,800,000 people <br /> across 28 countries</p>
        <TrustedBy />
    </section>    
  )
}

export default Recommendations