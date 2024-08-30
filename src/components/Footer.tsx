"use client"
import React from 'react'
import { ListItems } from './ListItems';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FooterItems from './FooterItems';
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const reports = ['Advantages', 'Sample Report','Vehicle Registration Check', 'Motorcycle Registration Check', 'Pricing', 'Help'];
  const opportunities = ['For Business']
  const company = ['About Us', 'Contacts', 'Blog']
  

  return (
    <div className="bg-black text-white pt-12 px-8">
      <div className="grid border-b border-white/20 pb-9 grid-cols-1 w-full items-center gap-4 md:grid-cols-2 justify-between">
        <div className="flex flex-col  justify-between w-full gap-4">
          <p className="text-xl font-semibold">Join our newsletter</p>
          <p className="text-xs font-light">We'll keep you updated with exciting news, useful content and promotions.</p>
          <form className="flex flex-col relative w-full md:max-w-[400px]">            
            <input type="text"
              placeholder="abc@xyz.com"
              className="bg-black border rounded-lg text-xs py-3 px-2 w-full
            border-gray-400 text-gray-400"/>
            <button className="bg-gray-300 transition-all duration-300 right-[10px] top-[6px] font-bold
              md:absolute text-xs mt-3 md:mt-0 px-2 py-2 rounded-full hover:border hover:border-white text-black hover:bg-black hover:text-white" >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-600">You may opt out any time. For more details, review our
            <Link href="/" className="underline font-bold hover:text-white"> Privacy Policy.</Link>
          </p>
        </div>
        <div className="flex flex-col items-start h-full gap-3">
          <h1 className='text-xl font-bold'>Contact Us</h1>
          <p className='text-[12.5px] font-light'>Mirage Towers - Off Waiyaki Way, Westlands, Nairobi</p>
          <div>
            <Link href='' className='flex mb-2 gap-3'><IoIosCall className="" /><span className='text-[12.5px] hover:underline'>0722123456</span></Link>
            <Link href='' className='flex gap-3'><MdEmail className="" /> <span className='text-[12.5px] hover:underline'>cartrustke@gmail.com</span></Link>
          </div>
        </div>
      </div>
      {/* Grid cols for descriptions */}
      <div className="hidden sm:grid border-b border-white/20 pb-6 mt-6 md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-4">
        <ListItems href='/' title='Reports' items={reports} />
        <ListItems href='/' title='Opportunities' items={opportunities} />
        <ListItems href='/' title='Company' items={company} />        
      </div>
      <FooterItems />
      <div className='flex justify-between mt-6 border-b border-white/20 pb-6'>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-center font-medium text-[12px]">
          <Link className="hover:text-gray-700" href="/">Privacy</Link>
          <Link className="hover:text-gray-700" href="/">Terms & Conditions</Link>
          <Link className="hover:text-gray-700" href="/">Security</Link>
          <Link className="hover:text-gray-700" href="/">Remove Your Data</Link>
          <Link className="hover:text-gray-700" href="/">Refund Policy</Link>
        </div>
        <div className='flex flex-col sm:flex-row gap-5 items-center group-hover:scale-[1.1]'>
          <Link href='' className="bg-blue-700 text-white p-2 text-lg rounded-full"><FaFacebookF className="" /></Link>
          <Link href='' className="bg-red-700 text-white p-2 text-lg rounded-full"><FaYoutube className="" /></Link>
          <Link href='' className="bg-gradient-to-r from-[#e6683c] via-[#dc2727] to-[#bc1888] text-white p-2 text-lg rounded-full"><FaInstagram className="" /></Link>
        </div>
      </div>
      <div className="text-center mt-6 pb-6">
        <p className="text-xs font-light">&copy; 2024 mark_theDev. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer