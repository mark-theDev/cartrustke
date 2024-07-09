import Link from 'next/link'
import React, { useState } from 'react'

const FooterItems = () => {
    const [isOpen,setIsOpen] = useState <number | null> (null)

    const listItems =[
        {
            label: 'Reports',
            listItems: ['Advantages','Sample Report','Vin Decoder: Free VIN Number Lookup','Motorcycle VIN Lookup','Pricing','Help'],
            link: "/"
        },
        {
            label: 'Opportunities',
            listItems: ['Affiliate Program','Influencers program', 'For Business'],
            link: "/"
        },
        {
            label: "Company",
            listItems: ['About Us','Contacts','Blog','Press Area'],
            link: "/"
        },
        {
            label: 'Mobile Apps',
            listItems: ['VIN Decoder for Android', 'VIN Decoder for iOS'],
            link: "/"
        },
        {
            label: "Decorders by Make",
            listItems: ['Audi VIN Decoder','Chevrolet VIN Decoder','Dodge VIN Decoder','Ford VIN Decoder', 'Jeep VIN Decoder', 'Lexus VIN decoder',
            'Mercedes-Benz VIN Decoder','Nissan VIN Decoder','RAM VIN Decoder','Toyota VIN Decoder', 'Volkswagen VIN Decoder'],
            link: "/"
        }
    ]

    function toggleList (index: number) {
        setIsOpen(prev => (prev === index ? null : index))
    }

  return (
    <div className='sm:hidden text-sm mt-6 flex flex-col gap-2'>
        {listItems.map((item,index) =>(
            <div className='relative py-3 px-2 bg-gray-500/20 rounded-md'>
                <li className="text-gray-500/60 text-base font-bold cursor-pointer"
                    onClick={()=>toggleList(index)}>
                        {item.label}
                </li>
                {isOpen === index && (
                <ul className="">
                    {item.listItems.map((subList, subIndex) =>(
                        <Link href={item.link}>
                            <li className="font-light py-1 hover:text-gray-500/45 text-sm" key={subIndex}>{subList}</li>
                        </Link>
                    ))}   
                </ul>
                )}
            </div>
        ))}
    </div>
  )
}

export default FooterItems