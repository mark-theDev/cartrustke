import ReportButton from './ReportButton'
import CheckTypes from './CheckTypes'
import CarInfo from './CarInfo'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Spotlight } from './ui/Sportlight'

const HeroPage = () => { 

  return (
    <section className="relative lg:px-14 grid grid-cols-1 lg:grid-cols-2 w-full 
        h-screen lg:gap-12 py-[80px] mt-[50px] lg:mt-[20px] bg-[#082854] items-center px-7">
      <div className="flex text-white flex-col items-center lg:items-start w-full gap-6
            md:gap-10 md:text-left">
        <div className='flex items-center flex-col gap-3'>
          <TextGenerateEffect
            className='text-4xl text-white md:text-5xl text-center lg:text-left font-bold'
            words='Learn the story of your future or current car'
          />
          {/* <h1 className="text-4xl md:text-5xl text-center lg:text-left font-bold">Learn the story of your future or current car</h1> */}
          <TextGenerateEffect
            className="text-base sm:w-[80%] font-light text-center lg:text-left lg:w-full"
            words='Get a report to avoid bad deals, sell faster, or learn if your car is safe.'
          />
        </div>
        <ReportButton />
        <CheckTypes />
      </div>
      <div className='flex flex-col w-full items-center justify-center'>
        <CarInfo />
      </div>
      <Spotlight 
        className='absolute hidden lg:block right-[-35%] top-[40%] lg:right-[-30%] lg:top-[25%] h-[90vh]'
        fill=''
      />      
    </section>
  )
}

export default HeroPage