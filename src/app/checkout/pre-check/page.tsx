'use client'
import React, { useEffect, useState } from 'react'
import '../styles.css'
import { PAYMENTPLAN } from '@/constants/paymentPlan';
import { useRouter } from 'next/navigation';
import { PaymentOptionsFormProps } from '@/types/paymentForm';
import Link from 'next/link';
import LandingPage1 from '@/components/LandingPage1';
import FaqAccordion from '@/components/FaqShadCN';
import { FaCheck } from "react-icons/fa6";
import { HoverEffect, Card, CardTitle, CardDescription } from '@/components/ui/card-hover-effect';
import CircleLoading from '@/components/CircleLoading';
import Image from 'next/image';


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
        <div className='bg-[#e1e1e1] min-h-screen pt-[20px] w-full'>
            <div className='flex gap-8 px-7 md:px-14 pt-8'>
                <div className='flex flex-col justify-center gap-3'>
                    <p className='text-sm font-medium'>Success! We've detected this vehicle and its previous data records.</p>
                    <h2 className='text-xl font-bold'>Car Registration</h2>
                    {regNumber && (<h5 className='text-base px-4 py-1 font-medium rounded w-fit h-fit text-white bg-[#082454]'>{regNumber}</h5>)}
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
            <div className='w-full h-full pt-[60px] pb-[40px] px-7 md:px-20'>
                <PaymentOptionsForm regNumber={regNumber} />
            </div>
            <div className='text-black flex flex-col items-center px-7 pb-[80px] md:px-14'>
                <h2 className='text-3xl w-full lg:max-w-[60vw] font-bold mb-5'>Our data comes from verifible sources</h2>
                <p className='text-sm w-full lg:max-w-[60vw]'>
                    Our car history reports are based on data from various local
                    databases. Once we've gathered all the relevant information about a vehicle,
                    we organize it and present it in an easy-to-understand format.
                    Each data request to all of our sources carries a cost,
                    which is why our reports aren't provided for free. If you believe
                    the generated report contains inaccuracies or mistakes or if you
                    are unsatisfied with it, please contact our <Link className='hover:underline transition-all duration-300 text-[#082854] font-medium' href={'/contactUs'}>customer service</Link> .</p>
            </div>
            <div className='w-full bg-white px-7 md:px-14'>
                <LandingPage1 />
            </div>
            <div className='w-full bg-[#e1e1e1] py-[100px]'>
                <h2 className='text-3xl font-bold text-center mb-9'>Frequently Asked Questions</h2>
                {faqContent.map(entry => (
                    <FaqAccordion title={entry.qst} description={entry.ans} value={entry.id} />
                ))}
            </div>
        </div>
    )
}

export default preCheckPage

export const PaymentOptionsForm: React.FC<PaymentOptionsFormProps> = ({ regNumber }) => {

    const [selectedOption, setSelectedOption] = useState('2')
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()

    const handleOptionChange = (id: string) => {
        setSelectedOption(id)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const selectedPlan = PAYMENTPLAN.find(entry => entry.id === selectedOption)

        setSubmitting(true)

        if (selectedPlan) {
            const { price } = selectedPlan

            console.log('Reg number and selected and price:', selectedOption, regNumber, price)


            setTimeout(() => {
                router.push(`/checkout/recepient-details?reports=${selectedOption}&regNumber=${encodeURIComponent(regNumber)}&price=${price}`)
                setSubmitting(false)
            }, 3000);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full items-center p-4">
                <div className='grid justify-center gap-5 grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        PAYMENTPLAN.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleOptionChange(item.id)}
                                className={`max-w-[300px] hover:shadow-lg transition-all duration-300 relative justify-between px-4 pt-4 pb-2 flex flex-col cursor-pointer border-2 rounded-lg
                                    ${selectedOption === item.id ? 'border-2 border-[#082854]' : ''}
                                     ${(item.id === '1' || item.id === '2') ? 'bg-white' : 'bg-[#082854] text-white scale-[1.05]'}`}

                            >
                                <div className={`flex justify-between w-full items-center mb-3`}>
                                    <p className={`font-bold text-xl ${item.id === '3' ? 'text-[#fbb000]' : ''}`}>{item.plan}</p>
                                    {item.id === '3' &&
                                        <Image src={'/most-popular.png'} width={80} height={80} alt='popular' />}
                                </div>
                                <p className={`text-xs ${item.id === '3' ? 'text-gray-400' : 'text-gray-700'}`}>{item.sellingPoint}</p>
                                <h2 className='font-bold text-3xl relative ml-8 mt-5 mb-3'>
                                    <span className='absolute -top-3 -left-6 text-[10px]'>Ksh</span>
                                    {item.price}
                                    <span className='text-[14px] ml-2 text-gray-500'>/report</span></h2>
                                <ul className='flex border-t border-gray-200 pt-4 flex-col gap-2 items-start h-full'>
                                    {item.planDetails.map((list) => (
                                        <li key={index} className='flex text-xs items-center gap-3'>
                                            <span
                                                className={`p-[2px] rounded-full ${item.id === '3' ?
                                                    'bg-[#fbb000] text-white' : 'bg-[#082854] text-white'}`}>
                                                <FaCheck className='text-[8px]' />
                                            </span>
                                            <span className='text-xs'>{list}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    type="submit"
                                    className={`mt-[40px] w-full text-sm text-white px-8 font-medium 
                                    py-2 rounded-lg hover:-translate-y-1 transform transition duration-200 
                                    ${item.id === '3' ? 'bg-[#fbb000]' : 'bg-[#082854]'}`}
                                    disabled={submitting}
                                >
                                    Choose
                                </button>
                                {selectedOption === item.id ?
                                    (<div className={`absolute inset-0 bg-white/80 flex items-center transition-all duration-300 ease-in-out
                                                justify-center gap-2 text-center ${submitting ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <CircleLoading />
                                    </div>) : ''
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={`mt-6 flex items-center w-full transition-all duration-300 ease-in-out
                                                justify-center gap-2 text-center ${submitting ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <span className='font-bold text-black'>Processing plan...</span>
                </div>
            </form>
        </div>
    )
}

const faqContent = [
    {
        id: '1',
        qst: 'How does the carTrust service work?',
        ans: 'carTrust provides data about vehicles gathered from more than 900 data sources. We collect all the data we can find about a specific vehicle and compile it into one history report. We do not create the data seen in our reports – when you enter a VIN into our website, we use it to query databases belonging to various institutions, including insurance, law enforcement, and others. All of the information included in the report comes from these sources.'
    },
    {
        id: '2',
        qst: 'What information may appear in the carTrust report?',
        ans: 'We may provide the information necessary to determine the real condition of a vehicle: mileage, damage records, records from databases of stolen vehicles, and so much more.'
    },
    {
        id: '3',
        qst: 'Where does the data come from?',
        ans: 'We gather data from various reliable local sources.'
    }
]