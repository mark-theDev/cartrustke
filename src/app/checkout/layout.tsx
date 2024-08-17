'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const steps = [
    { id: 'pre-check', label: '1. Pre-check' },
    { id: 'recepient-details', label: '2. Your Details' }
]

export default function StepsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const currentStep = steps.find(step => pathname.includes(step.id))?.id // Extract the current step from the pathname


    console.log(currentStep)
    return (
        <div className="w-full min-h-screen flex flex-col mt-20">
            {/* Progress Tracker */}
            <div className="flex gap-4 w-full bg-[#e1e1e1] border-gray-500 px-7 md:px-14 py-2 border-b">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`text-sm ${currentStep === step.id ? 'font-bold text-black' : 'text-gray-500'}`}>
                        {step.label}
                    </div>
                ))}
            </div>
            {/* Page Content */}
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}
