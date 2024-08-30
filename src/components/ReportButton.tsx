'use client'
import React, { useState } from 'react'
import { FormInput } from './FormInput'
import { useRouter } from 'next/navigation'
import { QuerryButton } from './ReportInfoButton'
import CircleLoading from './CircleLoading'


const ReportButton = () => {

  const [regNumber, setRegNumber] = useState('')
  const [errors, setErrors] = useState('')
  const [submitting, setIsSubmitting] = useState(false)

  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedRegNum = e.target.value.toUpperCase().replace(/\s+/g, '')
    setRegNumber(formattedRegNum)
    setErrors('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const regEx = /^K[A-C][A-EG-HJ-NP-Z]{1}(?!000)\d{3}[A-EG-HJ-NP-Z]$/

    const dRegEx = /^KD[A-EG-HJ-NP-Q](?!000)\d{3}[A-EG-HJ-NP-Z]$/

    if (!regEx.test(regNumber) && !dRegEx.test(regNumber)) {
      setErrors('Enter valid car registration number')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      router.push(`/checkout/pre-check?regNumber=${encodeURIComponent(regNumber)}`)
    }, 5000);

  }


  return (
    <div className='w-full sm:mx-auto sm:w-[70%] lg:w-[90%] lg:mx-0'>
      <form onSubmit={handleSubmit} className="lg:flex lg:flex-col transition-all duration-300 ease-in-out lg:items-center relative w-full ">
        <div className='w-full'>
          <FormInput
            type="text"
            placeholder="Enter Car Registration"
            className="py-3 sm:py-4 px-4 text-base text-black rounded outline-none w-full"
            onChange={handleInputChange}
            value={regNumber}
          />
        </div>
        <p className={`text-sm transition-all mt-2 text-center w-full duration-300 text-red-600 ${errors ? 'opacity-100' : 'opacity-0'}`}>{errors}</p>
        <button
          className="sm:absolute hover:bg-[#919da7] text-black font-bold w-full mt-3 sm:mt-0 sm:w-fit transition-all duration-300 top-[8px] right-2
             bg-[#b6c5d1] text-xs px-4 py-2 sm:py-3 rounded-full"
          disabled={submitting}
        >
          {submitting ? 'Fetching Report' : 'Get Report'}
        </button>
        <div className='absolute hidden sm:block top-[7px] right-[110px]'>
          <QuerryButton />
        </div>
        <div className={`transition-all flex justify-center items-center duration-300 ease-in-out
         ${submitting ? 'max-h-screen opacity-100 mt-3' : 'max-h-0 opacity-0' }`}>
          <span className='text-sm mr-3'>Checking registration...</span> <span><CircleLoading /></span>
        </div>
      </form>
    </div>
  )
}
export default ReportButton