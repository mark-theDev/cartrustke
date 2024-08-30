import Link from 'next/link'
import React, { useState } from 'react'

const FooterItems = () => {
    const [isOpen,setIsOpen] = useState <number | null> (null)

    const listItems =[
        {
            label: 'Reports',
            listItems: ['Advantages','Sample Report','Vehicle Registration Number Lookup','Motorcycle Registration Lookup','Pricing','Help'],
            link: "/"
        },
        {
            label: 'Opportunities',
            listItems: ['For Business'],
            link: "/"
        },
        {
            label: "Company",
            listItems: ['About Us','Contacts','Blog'],
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
                <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen === index ? 'max-h-screen': 'max-h-0'}`}>
                    <ul className="mt-2">
                        {item.listItems.map((subList, subIndex) => (
                            <Link href={item.link}>
                                <li 
                                    className="font-light py-1 transition-all duration-300 hover:text-gray-500/45 text-sm" 
                                    key={subIndex}
                                >
                                    {subList}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>                
            </div>
        ))}
    </div>
  )
}

export default FooterItems