import Link from 'next/link'
import { title } from 'process'
import React from 'react'

type PropsItems ={
    items: string[]
    title?: string,
    href: string
    className?: string
}
export const ListItems: React.FC<PropsItems> = ({items,title,className}) => {
  return (
    <div>
        <p className="text-base text-gray-700  font-medium mb-2">{title}</p>
        <ul>        
            {items.map((item,index)=> (
                <li className="text-sm hover:text-gray-500 transition font-light py-1" key={index}>
                    <Link href="/">{item}</Link> 
                </li>
            ))}
        </ul>
    </div>
    
  )
}
