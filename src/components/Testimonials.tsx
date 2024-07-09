import React from 'react'
import YouTubeCard from './YouTubeCard'

const Testimonials = () => {
  return (
    <section className='py-[90px] px-7 lg:px-14'>
        <div>
            <h1 className='text-3xl font-bold'>What People are Saying About our Service</h1>
            <p className='text-base py-4'>Here are the thoughts of prominent YouTube automotive content creators.</p>
        </div>
        <div className="container mt-10 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <YouTubeCard
                imageUrl="./assets/Testimonials/youtuber1.png"
                description="They took automotive information to the next level and gave me a super in-depth report."
                link="https://youtu.be/qRg3Jirml-I?list=TLGGeRk6wbl6CcEyMTA1MjAyNA"
            />
            <YouTubeCard
                imageUrl="./assets/Testimonials/youtuber2.png"
                description="Try carVertical. Checking that VIN before you buy a car is an absolute must."
                link="https://youtu.be/U0apW5MohYc?list=TLGGeMukzIUvgr8yMTA1MjAyNA"
            />
            <YouTubeCard
                imageUrl="./assets/Testimonials/youtuber3.png"
                description="Avoid any nasty surprises by using carVertical’s complete vehicle check."
                link="https://youtu.be/0THfimSteVQ?list=TLGGydcKXyH118syMTA1MjAyNA"
            />
        </div>
    </section>
  )
}

export default Testimonials