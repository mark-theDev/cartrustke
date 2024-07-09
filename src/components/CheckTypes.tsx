import React from 'react'
import { FaCheck } from "react-icons/fa6";

const CheckTypes = () => {
  return (
    <div className='hidden text-sm font-extralight lg:flex lg:w-full lg:justify-start gap-10'>
        <ul>
            <li className='flex py-1 gap-2 items-center'><FaCheck /> Mileage rollbacks</li>
            <li className='flex py-1 gap-2 items-center'><FaCheck /> Record Images</li>
            <li className='flex py-1 gap-2 items-center'><FaCheck /> Ownership</li>
        </ul>
        <ul>
            <li className='flex py-1 gap-2 items-center'><FaCheck /> Damages</li>
            <li className='flex py-1 gap-2 items-center'><FaCheck /> Safety recalls</li>
            <li className='flex py-1 gap-2 items-center'><FaCheck /> Theft records</li>
        </ul>
    </div>
  )
}

export default CheckTypes