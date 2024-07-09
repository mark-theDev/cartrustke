import Link from 'next/link';
import React from 'react'
import { BsEnvelopeAtFill } from "react-icons/bs";

const aboutUs = () => {
    return (
        <section className=''>
            <div className='bg-[#082854] pt-[100px] px-7 lg:px-14 text-white items-center justify-center gap-5 h-[80vh] grid grid-cols-1 lg:grid-cols-2 '>
                <div className='w-full sm:w-[70%] lg:w-full text-center lg:text-left mx-auto'>
                    <h1 className='text-4xl mb-6 font-bold'>We're helping people choose, care for, and sell vehicles</h1>
                    <p className='text-sm font-light'>Our team is constantly innovating, building tools, and introducing features to bring automotive data to your doorstep.</p>
                </div>
                <div className='w-full'>
                    <img className='w-full sm:w-[60%] lg:w-full mx-auto' src="/Prado.png" alt="" />
                </div>
            </div>
            <div className='bg-[#ffffff] py-[80px] px-7 lg:px-14 items-center justify-center gap-5 h-[80vh] grid grid-cols-1 lg:grid-cols-2 '>
                <div >
                    <h1 className='text-4xl mb-6 font-bold'>Leading the way in automotive data</h1>
                    <p className='text-sm font-light'>Our car history reports are based on data from national car registries database, insurance companies, law enforcement agencies, official garages, and other institutions. Once we've gathered all the relevant information about a vehicle, we organize it and present it in an easy-to-understand format. These reports are a great way to avoid bad deals, learn a vehicle's story to keep it healthy, or sell it at a good price.</p>
                </div>
                <div className='w-full'>
                    <img className='w-full object-contain sm:w-[70%] lg:w-full mx-auto' src="/BMW_X6.png" alt="" />
                </div>
            </div>
            <div className='bg-[#b6c5d15a] px-7 lg:px-14 py-[70px] grid grid-cols-1 gap-8'>
                <h1 className='text-4xl mb-6 font-bold'>Building a transparent used vehicle market</h1>
                <div className='flex flex-col gap-5'>
                    <p className='text-sm font-light'>For decades, getting a used car was a game of hide-and-seek between buyers and sellers. As recently as 5-10 years ago, you could only hope for sincerity or depend on physical inspections to detect flaws. Not anymore!</p>
                    <p className='text-sm font-light'>Through automotive data, we can learn the story of any vehicle on the market. This way, buyers learn about mileage rollbacks, past damages, safety issues, and other facts that can turn a great deal into an expensive nightmare.</p>
                    <p className='text-sm font-light'>Transparency on the second-hand market is the central goal of CARTRUST. We're proud to say that the existence of vehicle history reports has made selling bad vehicles more difficult and expensive. Buyers have learned that spending a little money on a history check is a lot cheaper than being blind-sided by future repair costs.</p>
                    <p className='text-sm font-light'>Yet that’s just part of the transparency puzzle – sellers are also learning that sales are quicker and easier with a history report. The result is beneficial for everyone: the quality of used vehicles on the market is growing, sellers are seen as more trustworthy, and buyers feel safer when choosing their next vehicle.</p>
                    <p className='text-sm font-light'>…And we’re just starting! CARTRUST has lots of exciting tools, features, and other solutions in the works. Through innovation, we will lead the industry to a level of transparency never before seen on the used vehicle market. We'll meet you all there!</p>
                </div>
            </div>
            <div className='w-full text-center px-7 text-white justify-center flex flex-col gap-6 h-[60vh] items-center bg-[#082854]'>
                <BsEnvelopeAtFill className='text-4xl' />
                <h1 className='text-4xl mb-6 font-bold'>Contact Us</h1>
                <p className='text-sm font-light'>Have a question, or want to offer a perspective? Reach us by email here.</p>
                <Link className='bg-[#b6c5d1] text-black w-fit text-sm font-bold rounded-full px-4 py-2' href=''>Email Us</Link>
            </div>
        </section>
    )
}

export default aboutUs