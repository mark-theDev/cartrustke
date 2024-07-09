import React from 'react'
import CarInfo from '../../components/CarInfo'
import LandingPage4 from '../../components/LandingPage4'

const advantagePage = () => {
  return (
    <section>
        <div className='bg-[#fff] h-[60vh] lg:h-screen w-full mt-16 flex gap-8 justify-center items-center flex-col px-7 lg:px-14'>
            <div className='text-center'>
                <h1 className='text-3xl leading-[1.5] md:text-4xl mb-7 font-bold'>Why CARTRUST is better than the competition</h1>
                <p className='text-sm lg:text-base font-light w-full mx-auto mt-3'>With more vehicle history services entering the market each year, CARTRUST presents a solution that will work for most. Whether you're buying a car, selling one, or running an automotive business, our service is for you.</p>
            </div>            
            <div className='flex justify-center items-center mx-auto w-[80vw] sm:w-[70vw] lg:max-w-[70%]'>
                <img className='object-contain' src="./Advantages_Img.png" alt="" />
            </div>
        </div>
        <div className='grid grid-cols-1 px-7 lg:px-14 gap-10 bg-[#082854] py-20 w-full lg:grid-cols-2'>
            <div className='order-1 text-white flex flex-col gap-10 lg:order-2'>
                <h1 className='text-3xl font-bold'>A Car Registration  is all you need</h1>
                <p className='text-base font-light'>Many history checks will ask you for vehicle registration details, license plate numbers, and other information to get you started.</p>
                <p className='text-base font-light'>Meanwhile, all you'll need on CARTRUST is a VIN, which is often available in online vehicle ads. Even if you can’t find it, sellers are far more likely to give it to you than they would be offering sensitive, personally identifiable information.</p>
                <p className='text-base font-light'>The VIN is the only fool-proof identification tool - it stays the same from the moment the car exits the manufacturing plant. This allows us to learn about vehicles regardless of where they've been in the past.</p>
            </div>
            <div className='order-2 lg:order-1 flex justify-center'>
                <img src="/Nerds_Img.png" alt="" />
            </div>            
        </div>
        <div className='grid grid-cols-1 bg-[#ffffff] h-screen items-center gap-10 md:grid-cols-2 px-7 lg:px-14 py-14'>
            <div className='flex justify-between gap-5 flex-col'>
                <h1 className='text-3xl md:text-4xl font-bold'>Cars, motorcycles, and other vehicles supported</h1>
                <p className='text-base font-light'>The VIN identifies almost any vehicle type on the road - cars, motorcycles, scooters, ATVs, RVs, and others. You can technically use this code to get a history check for any of these vehicle types, but many VIN lookup services focus heavily on cars, leaving worse (or no) reports to owners of other vehicle types.</p>
                <p className='text-base font-light'>We offer detailed history checks for all clients - and we're improving our service for bikers, and other users all the time!</p>
            </div>
            <div className='flex justify-center max-h-[40vh] lg:max-h-[50vh]'>
                <img className='object-contain h-auto w-auto' src="./Group_6.png" alt="" />                
            </div>
        </div>
        
        <div className='grid grid-cols-1 h-[60vh] items-center bg-[#b6c5d1] gap-10 md:grid-cols-2 px-7 lg:px-14 py-14'>
            <div className='md:order-2 text-center md:text-start'>
                <h1 className='text-3xl mb-5 font-bold'>Pay how you like</h1>
                <p className='text-base font-light'>CARTRUST offers various payment options. Aside from Mpesa, Visa and MasterCard you can pay via PayPal or even Crypto.</p>
            </div>
            <div className='md:order-1 w-full flex justify-center'>
                <img className='max-w-[300px]' src="./Payment_Wallet.png" alt="Wallet" />
            </div>
        </div>
        <div className='grid h-[70vh] grid-cols-1 gap-10 items-center md:grid-cols-2 px-7 lg:px-14 py-14'>
            <div className='text-center md:text-start'>
                <h1 className='text-3xl mb-5 font-bold'>Best vehicle history partner for businesses</h1>
                <p className='text-base font-light'>Our services focus on businesses just as much as they do on individual clients.</p>
            </div>
            <div className='flex justify-center w-full'>
                <img className='max-w-[400px] lg:max-w-[500px] object-contain' src="./Yard.png" alt="Car Report" />
            </div>
        </div>
        <LandingPage4 />
    </section>
  )
}

export default advantagePage