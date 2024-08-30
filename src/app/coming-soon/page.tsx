import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="relative h-screen flex justify-center items-center isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className='w-full z-[4] text-white flex justify-center flex-col items-center gap-5'>
          <h2 className='text-3xl font-bold'>Something Awesome is Coming Soon</h2>
          <p className='text-sm text-gray-400'>We are determined to improve your car history check experience</p>
          <Link href={'/'}>
            <button className="px-4 py-2 rounded-lg border text-black bg-[#fbb000] text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              Home
            </button>
          </Link>
        </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">        
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#270b83] to-[#381b74] opacity-30"
        />
      </div>
    </div>
  )
}

export default page