import Link from 'next/link'
import React from 'react'

const navLinks = [
  {href: '/', key: 'reports', label: 'Reports'},
  {href: '/', key: 'resources', label: 'Resources'},
  {href: '/', key: 'for_Business', label: 'For Business'},
  {href: '/', key: 'company', label: 'Company'},
]

const MenuItems = () => {

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.key} className="list-none no-underline">
          <Link href={link.href} 
            className="text-base text-black flexCenter cursor-pointer 
            font-semibold pb-1.5 transition-all hover:text-sky-600">
            {link.label}
          </Link>
        </li>
      ))}
    </>

    // <div className="flex gap-12 font-semibold">
    //   <li>
    //     <Link href="/reports" className="text-gray-700 hover:text-gray-500">
    //       Reports
    //     </Link>
    //   </li>   
    //   <li>
    //     <Link href="/resources" className="text-gray-700 hover:text-gray-500">
    //       Resources
    //     </Link>
    //   </li> 
    //   <li>
    //     <Link href="/for-business" className="text-gray-700 hover:text-gray-500">
    //       For Business
    //     </Link>
    //   </li> 
    //   <li>
    //     <Link href="/company" className="text-gray-700 hover:text-gray-500">
    //       Company
    //     </Link>
    //   </li>    
    // </div>
  )
}

export default MenuItems