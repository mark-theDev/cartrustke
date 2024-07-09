import React from 'react'
import Image from 'next/image'

const TrustedBy = () => {
  return (
    <section>
        <div className='flex justify-between items-center gap-6 text-black' >
            <Image src="auto-bild.svg" alt='autobild' width={40} height={40} />
            <Image src="reuters logo.svg" alt='reuters' width={100} height={80} />
            <Image src="TopGearLogo (1).svg" alt='topgear' width={80} height={80}/>
            <Image src="/Forbes.png" alt='forbes' className='text-black' width={60} height={30} />
        </div> 
    </section>
  )
}

export default TrustedBy