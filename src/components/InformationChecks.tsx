
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { REPORT_TYPES_IMAGES } from '@/constants/reportTypesImages'



const InformationChecks = () => {

  
  return (
    <div className='w-full px-7 md:px-14 py-[60px]'>
      <h2 className="text-center mb-3 w-full px-7 text-3xl md:text-4xl font-bold">What we check for when preparing a report</h2>
      <h6 className="w-full px-7 mb-9 text-center text-base">CarTrust uses a vast vehicle database to acquire details on ownership, use, damages, repairs, </h6>
      <Carousel className="w-full h-full md:max-h-[70vh] rounded-md p-6 max-w-[90%] mx-auto bg-gray-100">
        <CarouselContent>
          {REPORT_TYPES_IMAGES.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative flex flex-col justify-center gap-5 h-full md:flex-row">
                <div className='w-full'>
                  <img src={image.url} alt="image" className='object-contain' />
                </div>
                <div className='flex w-full flex-col px-3 justify-center items-start gap-3'>
                  <h3 className='text-xl font-bold'>{image.title}</h3>
                  <p className='text-sm'>{image.details}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className='flex w-full justify-center mt-8 gap-2 items-center'>
        {REPORT_TYPES_IMAGES.map((image, index) => (
          <span key={index} className={`rounded-full w-2 h-2 ${currentSlide === index ? 'bg-black' : 'bg-gray-400'}`}></span>
        ))}

      </div> */}
    </div>
  )
}

export default InformationChecks