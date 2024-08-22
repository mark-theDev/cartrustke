'use client'
import React, { useState } from 'react'
import { FormInput } from './FormInput'
import { useRouter } from 'next/navigation'


const ReportButton = () => {

  const [regNumber, setRegNumber] = useState('')
  const [errors, setErrors] = useState('')

  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegNumber(e.target.value.toUpperCase())
    setErrors('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const regEx = /^K[A-C][A-EG-HJ-NP-Z]{1}(?!000)\d{3}[A-EG-HJ-NP-Z]$/

    const dRegEx = /^KD[A-EG-HJ-NP-Q](?!000)\d{3}[A-HJ-NP-Z]$/

    if(!regEx.test(regNumber) && !dRegEx.test(regNumber)) {
      setErrors('Enter valid car registration number')
      return
    }
    router.push(`/checkout/pre-check?regNumber=${encodeURIComponent(regNumber)}`)
  }


  return (
    <div className='w-full md:max-w-[70%] lg:max-w-[90%]'>
      <form onSubmit={handleSubmit} className="lg:flex lg:flex-col gap-4 lg:items-center relative w-full ">
        <div className='w-full'>
          <FormInput
            type="text"
            placeholder="Enter Car Registration"
            className="py-4 px-4 text-base text-black rounded-lg outline-none w-full"
            onChange={handleInputChange}
            value={regNumber}
          />
        </div>
        {errors && <p className='text-sm transition-all duration-300 text-red-600'>{errors}</p>}
        <button className="sm:absolute hover:bg-[#919da7] text-black font-bold w-full mt-3 sm:mt-0 sm:w-fit transition top-[8px] right-2 bg-[#b6c5d1] text-xs px-4 py-3 rounded-full">Get Report</button>        
      </form>      
    </div>
  )
}
export default ReportButton