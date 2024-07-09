import React from 'react'
import BlogCard from './BlogCard'
import { BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

const Blog = () => {
  return (
    <section className='flex flex-col items-center py-16 px-7 lg:px-14 justify-center'>
        <div className='py-9 text-center'>
            <h1 className='text-3xl pb-5
             font-bold'>Blog</h1>
            <p className='text-base'>Read our latest news and detailed analysis</p>
        </div>        
        <BlogCard /> 
        <Link className='flex items-center gap-2 my-8 rounded-full border-black py-3 px-6 border duration-500 ease-in-out hover:bg-black hover:text-white' href="https://www.carvertical.com/blog">
            <span className='text-xs font-medium'>All Posts</span> 
            <BsArrowRight className='font-extralight' />
        </Link>       
    </section>
  )
}

export default Blog