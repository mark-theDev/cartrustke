'use client'
import React, { useEffect, useState } from 'react'

interface AnimatedNum {
    value: number,
    duration: number
}

const HeroAnimatedNumber: React.FC <AnimatedNum> = ({value,duration}) => {

    const [displayVal, setDisplayNum] = useState<number>(0)

    useEffect(() => {
        let start: number| null = null;
        const finalVal = value; 

        const countUp = (timestamp: number) => {
            if(start === null) start = timestamp
            const progress = timestamp - start
            const current = Math.min(finalVal, Math.floor(progress / duration * finalVal))
            setDisplayNum(current)
            if(current < finalVal) {
                window.requestAnimationFrame(countUp)
            }
        };
        window.requestAnimationFrame(countUp)
    },[])

  return (
    <div className='text-xl p-1 font-bold'>
        Ksh {displayVal.toLocaleString()}
    </div>
  )
}

export default HeroAnimatedNumber