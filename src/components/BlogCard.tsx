import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
    const items = [
        {
            titleImg: "./assets/Blog/Blog4.png",
            link: "https://www.carvertical.com/blog/carvertical-report-features-and-improvements-2024",
            description: "What’s new: carVertical report features and improvements in 2024",
            bloggerImg: "./assets/Blog/Blogger1.png",
            name: "Simonas Žižiūnas",
            date: "2024-05-17",  
            blogBtn: "Company News"           
        },
        {
            titleImg: "./assets/Blog/Blog2.png",
            link: "https://www.carvertical.com/blog/new-ai-damage-feature",
            description: "Our new AI damage feature can identify collisions from vehicle photos",
            bloggerImg: "./assets/Blog/Blogger2.png",
            name: "Renata Liubertaitė",
            date: "2024-05-17",
            blogBtn: "Company News"            
        },
        {
            titleImg: "./assets/Blog/Blog3.png",
            link: "https://www.carvertical.com/blog/title-check-feature-in-the-carvertical-report",
            description: "Importing cars from the US made easy: Introducing the Title Check feature in the carVertical report",
            bloggerImg: "./assets/Blog/Blogger3.png",
            name: "Evaldas Zabitis",
            date: "2024-05-17",    
            blogBtn: "Company News"         
        }
    ]

  return (
    <div className='grid grid-cols-1 gap-7 md:grid-cols-3'>
        {items.map((item,index) => (
            <Link href={item.link} className='flex flex-col hover:shadow-md p-2 rounded gap-2' key={index}>
                <div>
                    <img className="object-cover rounded-lg mx-auto max-h-[200px]" src={item.titleImg} />
                </div>                
                <div className='flex gap-2 items-center'>
                    <div className="border text-xs rounded-sm p-1">{item.blogBtn}</div>
                    <p className='text-xs text-gray-400'>{item.date}</p>
                </div>
                <h1 className='text-base py-3 font-semibold'>{item.description}</h1>
                <div className='flex items-center gap-2'>
                    <img src={item.bloggerImg} className='h-[20px] object-cover rounded-full' />
                    <p className='text-sm'>{item.name}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default BlogCard