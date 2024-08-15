import React from 'react'
import { FormInput } from './FormInput'

export default function VinForm() {
  return (
    <div className='w-full'>
      <FormInput
        type="text"
        placeholder="Enter Car Registration"
        className="py-3 px-4 text-sm text-black rounded-lg outline-none w-full"        
      />
    </div> 
  )
}

