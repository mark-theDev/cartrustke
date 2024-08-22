'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { motion } from 'framer-motion';

type NavItems = {
    label: string,
    link?: string,
    children?: NavItems[],
    icon?: string
}

const navItems: NavItems[] = [
    {
        label: "Reports",        
        children: [
            { label: "Sample Report", link: "/sample_report", icon: "/report.svg" },
            { label: "Pricing", link: "/pricing", icon: "/price.svg" },
            { label: "Advantages", link: "/advantages", icon: "/company-advantage.svg" },
            { label: "B2B Pricing", link: "/b2bPricing", icon: "/b2b.svg" }
        ]
    },
    {
        label: "Resources",        
        children: [
            { label: "Blog" },
            { label: "Help" }
        ]
    },
    {
        label: "For Business",        
        children: [
            { label: "Dealerships", link: "/dealerships" },
            { label: "Insurance Companies", link: "/insurance" },
            { label: "Leasing Companies", link: "/leasing" }
        ]
    },
    {
        label: "Company",        
        children: [
            { label: "About Us", link: "/aboutUs" },
            { label: "Contacts", link: "/contacts" }
        ]
    }
]

export default function Nav_Bar1() {
    
    const [animationParent] = useAutoAnimate()
    const [isSideOpen, setSideOpen] = useState(false)
    

    function openSideMenu() {
        setSideOpen(true)
    }
    function closeSideMenu() {
        setSideOpen(false)
    }

    return (
        <nav className="mx-auto flex items-center w-full z-10 fixed top-0 
        justify-between px-7 lg:px-14 text-sm py-2 bg-white">
            {/* Logo */}
            <Link href='/'>
                <img src="/CARTRUST-KE.png" alt="Cartrust logo" className="w-[200px]" />
            </Link>

            <section ref={animationParent} className='flex items-center justify-between'>
                {isSideOpen && <MobileNav closeSideMenu={closeSideMenu} />}
                {/* Nav Links */}
                <div className="hidden lg:flex items-end gap-2 transition-all text-sm font-medium">
                    {navItems.map((d, i) =>
                        <div
                            key={i}                            
                            className={`relative group px-4 py-3 transition-all `}
                        >
                            <p className="flex justify-center font-semibold transition-all items-center gap-2 text-black cursor-pointer 
                                group-hover:text-[#082854]">
                                <span>{d.label}</span>
                                <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                            </p>
                            {/* sub links */}
                            {d.children &&
                                <div
                                    className="absolute px-2 right-[-20px] z-10 top-full py-3 hidden flex-col gap-1 w-full min-w-[200px] rounded-lg 
                                        bg-white shadow-md transition-all border duration-300 ease-in-out group-hover:flex">
                                    {d.children.map((child, index) =>
                                        <Link key={index} href={child.link ?? ""}
                                            className={`flex cursor-pointer px-4 rounded-lg items-center py-2 pr-8
                                                    text-black hover:bg-gray-300/10`}>
                                            {child.icon &&
                                                <Image src={child.icon ?? ""} alt='reports' width={20} height={20} />}
                                            <span className="whitespace-nowrap pl-2 text-xs">{child.label}</span>
                                        </Link>)}
                                </div>}
                        </div>
                    )}
                </div>
            </section>

            {/* Right side navbar */}

            <section className='hidden lg:flex items-center gap-3'>
                <Link href='/' className="flex justify-center items-center gap-1 h-fit text-white transition-all px-4 py-2 rounded-full
                    border-2 font-medium bg-[#082854] text-xs hover:bg-[#05162f]">
                    Get Report
                </Link>
            </section>
            <CiMenuFries onClick={openSideMenu} className="cursor-pointer lg:hidden text-4xl" />
           
        </nav>
    )
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleWindowClick = (e: MouseEvent) => {
            ref.current && !ref.current.contains(e.target as Node) ? closeSideMenu() : ''
        }
        document.addEventListener('mousedown', handleWindowClick)

        return () => {
            document.removeEventListener('mousedown', handleWindowClick)
        }
    }, [closeSideMenu])

    return (
        <div className="fixed top-0 right-0 flex h-full w-full justify-end bg-black/40 lg:hidden">
            <motion.div
                ref={ref}
                className="sm:w-[50%] overflow-auto w-full h-auto bg-gray-100 p-4"
                initial={{ x: '100%', opacity: 1 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%' }}
                transition={{ duration: 1, type: 'tween' }}
            >
                <section className="cursor-pointer flex justify-end">
                    <IoMdClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
                </section>
                <div className="flex flex-col gap-4 transition-all text-base font-semibold">
                    {navItems.map((d, i) =>
                        <SingleNavLink
                            key={i}
                            label={d.label}
                            icon={d.icon}
                            link={d.link}
                            closeSideMenu={closeSideMenu}
                            children={d.children}
                        />
                    )}
                </div>
                <div>
                    <Link href='' className="flex mt-4 w-full justify-center items-center gap-1 h-fit text-white transition-all px-4 py-2 rounded-full
                        border-2 font-medium bg-[#082854] text-xs hover:bg-[#05162f]">
                        Get Report
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

function SingleNavLink({ label, icon, link, children, closeSideMenu }: NavItems & { closeSideMenu: () => void }) {
    const [animationParent] = useAutoAnimate()
    const [isOpen, setIsOpen] = useState(false)


    function toggleOpen() {
        return setIsOpen(!isOpen)
    }

    return (
        <div
            ref={animationParent}
            className="relative px-4 py-3 transition-all">
            <p onClick={toggleOpen} className="flex items-center gap-2 text-sm cursor-pointer 
                group-hover:bg-gray-400">
                <span>{label}</span>
                {children && <IoIosArrowDown className={`text-xs transition-all ${isOpen ? "rotate-180" : ""}`} />}
            </p>
            {/* sub links */}
            {isOpen && children &&
                <div
                    className="py-3 flex-col gap-1 px-2 w-auto rounded-lg 
                        bg-white transition-all duration-300 ease-in-out flex">
                    {children.map((child, index) =>
                        <Link
                            key={index}
                            href={child.link ?? "/"}
                            className={`flex cursor-pointer items-center px-6 pr-8
                            hover:bg-gray-100/90 py-2 rounded`}
                            onClick={closeSideMenu}>
                            {child.icon &&
                                <Image src={child.icon ?? ""} alt='reports' width={20} height={20} />}
                            <span className="whitespace-nowrap pl-2 text-xs">{child.label}</span>
                        </Link>)}
                </div>}
        </div>
    )
}