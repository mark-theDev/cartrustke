import React from 'react'
import VinForm from './VinForm'

const ReportButton = () => {
  return (
    <div className='w-full md:max-w-[70%] lg:max-w-[90%]'> 
      <form className="lg:flex lg:flex-col gap-4 lg:items-center relative w-full ">
        <VinForm />
        <button className="sm:absolute hover:bg-[#919da7] text-black font-bold w-full mt-3 sm:mt-0 sm:w-fit transition top-[7px] right-2 bg-[#b6c5d1] text-xs px-4 py-3 rounded-full">Get Report</button>
        {/* <button className="bg-gray-300 absolute top-6 right-3 sm:right-[120px] px-1 py-1 rounded-full hover:bg-gray-800 transition"><FaQuestion className="text-white text-xs" /></button> */}        
      </form>
      {/* <Link className='flex text-xs gap-2 font-semibold py-2 items-center justify-center text-white border-white border mt-4 rounded-full w-full ease-in-out duration-500 hover:bg-white hover:text-[#082854]' href='/no-vin-check'>I don't have VIN<FaArrowRight className='text-base pb-1' /></Link> */}
    </div>
  )
}
export default ReportButton