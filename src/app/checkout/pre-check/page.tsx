'use client'
import React, { useEffect, useState } from 'react'
import '../styles.css'
import { paymentPlan } from '@/constants/paymentPlan';
import { useRouter } from 'next/navigation';
import { PaymentOptionsFormProps } from '@/types/paymentForm';
import Link from 'next/link';
import LandingPage1 from '@/components/LandingPage1';
import FaqAccordion from '@/components/FaqShadCN';


const preCheckPage = () => {

    const [regNumber, setRegNumber] = useState('')

    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        const regNum = query.get('regNumber')

        console.log('The registration number is:', regNum)

        if (regNum) {
            setRegNumber(regNum)
        }
    }, [])


    return (
        <div className='bg-[#e1e1e1] min-h-screen w-full'>
            <div className='flex gap-8 px-7 md:px-14 pt-8'>
                <div className='flex flex-col justify-center gap-3'>
                    <p className='text-sm font-medium'>Success! We've detected this vehicle and its previous data records.</p>
                    <h2 className='text-xl font-bold'>Car Registration</h2>
                    {regNumber && (<h5 className='text-base px-4 py-1 font-medium w-fit h-fit text-white bg-[#082454]'>{regNumber}</h5>)}
                </div>
                <img src="/blue_line.png" className='max-h-[200px] w-1' alt="" />
                <div className='flex flex-col justify-center gap-4'>
                    <h3 className='text-lg font-bold'>With carTrust you may get:</h3>
                    <ul className='list'>
                        <li>Info about previous owners, accidents, theft and mileage records</li>
                        <li>Vehicle's photos and how it looked in the past</li>
                        <li>Maintenance and service history records</li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-full py-[80px]'>
                <PaymentOptionsForm regNumber={regNumber} />
                
            </div>
            <div className='text-black flex flex-col items-center px-7 pb-[80px] md:px-14'>
                <h2 className='text-3xl w-full lg:max-w-[60vw] font-bold mb-5'>Our data comes from verifible sources</h2>
                <p className='text-base w-full lg:max-w-[60vw]'>
                    Our car history reports are based on data from various local
                    databases belonging to NTSA, insurance companies,
                    Kenya Police, official garages, and other institutions.
                    Once we've gathered all the relevant information about a vehicle,
                    we organize it and present it in an easy-to-understand format.
                    Each data request to all of our sources carries a cost,
                    which is why our reports aren't provided for free. If you believe
                    the generated report contains inaccuracies or mistakes or if you
                    are unsatisfied with it, please contact our <Link className='underline transition-all duration-300 text-[#082854] hover:font-bold' href={''}>customer service</Link> .</p>
            </div>
            <div className='w-full bg-white px-7 md:px-14'>
                <LandingPage1 />
            </div>
            <div className='w-full bg-white py-[100px]'>
                <h2 className='text-3xl font-bold text-center mb-9'>Frequently Asked Questions</h2>
                {faqContent.map(entry => (
                    <FaqAccordion title={entry.qst} description={entry.ans} value={entry.id}/>
                ))}
            </div>
        </div>
    )
}

export default preCheckPage

const PaymentOptionsForm: React.FC<PaymentOptionsFormProps> = ({ regNumber }) => {

    const [selectedOption, setSelectedOption] = useState('1')
    const router = useRouter()

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const selectedPlan = paymentPlan.find(entry => entry.id === selectedOption)

        if (selectedPlan) {
            const { price } = selectedPlan

            console.log('Reg number and selected and price:', selectedOption, regNumber, price)

            router.push(`/checkout/recepient-details?reports=${selectedOption}&regNumber=${encodeURIComponent(regNumber)}&price=${price}`)
        }



    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
                <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {
                        paymentPlan.map((item, index) => (
                            <label
                                key={index}
                                htmlFor={`plan-${item.id}`}
                                className={`max-w-xs bg-white h-[300px] px-4 py-8 flex flex-col cursor-pointer border-2 rounded-lg shadow-md ${selectedOption === item.id ? 'border-2 border-[#082854]' : ''}`}
                            >
                                <div className='flex items-center justify-between mb-12'>
                                    <input
                                        id={`plan-${item.id}`}
                                        type="checkbox"
                                        value={item.id}
                                        checked={selectedOption === item.id}
                                        onChange={handleOptionChange}
                                        className="mr-2"
                                        style={{ width: '35px', height: '35px', accentColor: '#082854', borderRadius: '10px' }}
                                    />
                                    <p className='flex flex-col text-base font-bold'>{item.plan} <span className='text-xs font-normal'>{item.planDetails}</span></p>
                                </div>
                                <h2 className='font-medium text-lg mb-4'>Ksh{item.price} <span className='text-base font-light'>/report</span></h2>
                                {item.discountedPrice && (<h5 className='text-base font-medium mb-4'>You pay <span className='text-lg underline font-bold'>Ksh{item.discountedPrice}</span> <span className='text-xs text-red-600 line-through'>Ksh{item.originalPrice}</span></h5>)}
                                {index === 2 && (<p className='text-base font-medium mb-4'>Full Price</p>)}
                                <h4 className='text-sm font-bold p-2 bg-[#082854] rounded-md text-white w-fit'>{item.discount}</h4>
                            </label>
                        ))
                    }
                </div>
                <button type="submit" className="mt-[80px] w-fit bg-[#082854] text-sm text-white px-8 font-bold py-2 rounded-full">Get Report</button>
                <img src="/mpesa_logo.png" className='w-[80px] mt-5 text-center' alt="" />
            </form>
        </div>
    )
}

const faqContent = [
    {
        id: '1',
        qst: 'How does the carVertical service work?',
        ans: 'CARTRUST provides data about vehicles gathered from more than 900 data sources. We collect all the data we can find about a specific vehicle and compile it into one history report. We do not create the data seen in our reports – when you enter a VIN into our website, we use it to query databases belonging to various institutions, including insurance, law enforcement, and others. All of the information included in the report comes from these sources.'
    },
    {
        id: '2',
        qst: 'What information may appear in the carVertical report?',
        ans: 'We may provide the information necessary to determine the real condition of a vehicle: mileage, damage records, records from databases of stolen vehicles, and so much more.'
    },
    {
        id: '3',
        qst: 'Where does the data come from?',
        ans: 'We gather data from various sources, including government agency registries eg NTSA, insurance companies, auto repair shops, connected vehicle fleets and many more.'
    }
]