import Lottie from 'lottie-react'
import React, {useState, useEffect} from 'react'

const HeroAnimation = () => {
    const [animationData, setAnimationData] = useState<any>(null)
    useEffect (() => {
      const fetchAnimationData = async () => {
        try{
          const {default: data} = await import('./HeroAnimation.json')
          setAnimationData(data)
        }
        catch (error) {
          console.error(error)
        }
      }
      fetchAnimationData();
    }, [])
  return (
    <div className="relative lg:w-1/2 lg:h-300px w-full max-w-[400px] ">
        {animationData && <Lottie loop={false} className="lg:mt-32 px-5 mt-8 h-[400px] lg:h-[500px] lg:w-[400px]" animationData={animationData} />}
    </div>
  )
}

export default HeroAnimation