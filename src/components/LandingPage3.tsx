import React from 'react'

const LandingPage3 = () => {

    const items = [
        {
            title: 'Damages',
            icon: './assets/LandingPage3/Icon1.png',
            description: 'No one wants a car with hidden damages. This may result in overpaying or road-safety issues.'
        },
        {
            title: 'Mileage rollbacks',
            icon: './assets/LandingPage3/Icon2.png',
            description: 'Mileage fraud is more common than you think. You\'re not only overpaying for the car but also might end up with a hefty repair bill.'
        },
        {
            title: 'Recorded images',
            icon: './assets/LandingPage3/Icon3.png',
            description: 'Knowing how the car looked in the past is very important for understanding its history and learning about damaged or weak spots.'
        },
        {
            title: 'Safety recalls',
            icon: './assets/LandingPage3/Icon4.png',
            description: 'Manufacturers typically issue safety recalls to fix harmful defects. Make sure your car doesn\'t have any before taking it on the road.'
        },
        {
            title: 'Ownership changes',
            icon: './assets/LandingPage3/Icon5.png',
            description: 'Knowing how many owners a car has had helps you understand whether it was sold frequently. This may indicate serious issues.'
        },
        {
            title: 'Theft records',
            icon: './assets/LandingPage3/Icon6.png',
            description: 'We check millions of records from international and local law enforcement to make sure a car wasn\'t stolen in any country.'
        }
    ]
  return (
    <section className="bg-white px-7 lg:px-14 py-[70px]">
        <h1 className="text-3xl py-6 font-bold">What we check for when preparing a report</h1>
        <p className='text-base pb-6 font-normal'>carVertical has access to one of the largest database networks for vehicle records. It contains countless data entries from all over the world.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">            
            {items.map((item,index) => (
                <div className="flex flex-col gap-3 hover:shadow-md shadow rounded p-2 items-start" 
                    key={index}>
                    <img src={item.icon} alt={item.title} className='h-[100px] w-[100px]' />
                    <h1 className='text-xl font-bold'>{item.title}</h1>
                    <p className='text-sm font-normal'>{item.description}</p>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default LandingPage3