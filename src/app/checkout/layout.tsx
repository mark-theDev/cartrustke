'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { FetchedVehicleData } from './contexts/PaymentContext'

const steps = [
    { id: 'pre-check', label: '1.Pre-check' },
    { id: 'recepient-details', label: '2.Your Details' },
    { id: 'payment-details', label: '3.Payment Details' },
    {id: 'report-page', label: '4.Report Details'}
]

export default function StepsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const currentStep = steps.find(step => pathname.includes(step.id))?.id // Extract the current step from the pathname

    const visibleSteps = steps.filter((step) => {
        if (currentStep === 'pre-check') {return step.id === 'pre-check'}
        else if(currentStep === 'recepient-details') {
            return step.id === 'pre-check' || step.id === 'recepient-details'
        }
        else if(currentStep === 'payment-details') {
            return step.id !== 'report-page'
        }
        else{
            return true
        }
    })
    console.log(currentStep)
    return (
        <div className="w-full min-h-screen flex flex-col pt-20">
            {/* Progress Tracker */}
            <div className="fixed top-[52px] lg:top-[60px] z-[3] right-0 flex gap-4 w-full bg-white border-t border-gray-300 px-7 md:px-14 py-2 ">
                {visibleSteps.map((step) => (
                    <div
                        key={step.id}
                        className={`text-xs transition-all duration-300 ${currentStep === step.id ? 'font-bold text-black' : 'text-gray-500'}`}>
                        {step.label}
                    </div>
                ))}
            </div>
            {/* Page Content */}
            <div className="w-full">
                <FetchedVehicleData>
                    {children}
                </FetchedVehicleData>                
            </div>
        </div>
    )
}
