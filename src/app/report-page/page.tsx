'use client'
import PaymentForm from '@/components/PaymentForm';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';


const report_page = () => {

    const [regNumber, setRegNumber] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState('')
    const [ntsaStatus, setNtsaStatus] = useState<boolean | null>(null)
    const [userNumber, setUserNumber] = useState<string | null>(null)
    const [recordFound, setrecordFound] = useState(false)
    const [payment, setPayment] = useState('')

    const detailsRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const regNum = query.get('regNumber');
        if (regNum) {
            setRegNumber(regNum);
        }
    }, []);

    useEffect(() => {
        if(detailsRef.current && recordFound) {
            detailsRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [recordFound])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!name || !email || !phone) {
            setErrors('required')
            return;
        }

        try {
            const response = await axios.get('https://api-carma.kisoko.org/cartrust/api/v1/search/filter?page=1&per_page=20', {
                params: {
                    page: 1,
                    per_page: 20,
                    regNumber: regNumber
                },
                headers: {
                    'accept': 'application/json'
                }
            });
            if (response.data.success) {
                const carData = response.data.data.data.find((item: any) => item.regNumber === regNumber)
                console.log(carData)
                if (carData) {
                    console.log(`NTSA Status: ${carData.ntsaStatus}`)
                    console.log(`User Number: ${carData.phoneNumber}`)
                    setNtsaStatus(carData.ntsaStatus)
                    setUserNumber(carData.phoneNumber)
                    setPayment(carData.pricingId)
                    setrecordFound(true)

                    
                }
                else {
                    console.log('No entry found')
                    alert('No record found!')
                    setNtsaStatus(null)
                    setUserNumber(null)
                    setrecordFound(false)
                }
            }
            else {
                console.log('Error Fetching Data')
            }
        }
        catch (error) {
            console.log('Error fetching data:', error)
        }

        // console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Car Details: ${regNumber}, NTSA: ${ntsaStatus}, Owner Number: ${userNumber}`)
        setName(''); setEmail(''); setPhone(''); setRegNumber('')
    }  

    
    return (
        <div className='min-h-screen h-full py-[100px] relative px-14 bg-[#082854] mt-[70px] w-full flex flex-col justify-center items-center'>
            <div className='grid w-full relativemt-10 md:w-[80vw] lg:w-[70vw] grid-cols-1 rounded-lg md:grid-cols-2'>
                <div className='hidden relative md:flex justify-center items-center h-full w-full'>
                    <div className='text-white px-2 w-full text-center relative z-10'>
                        <h1 className='text-3xl font-bold mb-7'>Check your car details with us now</h1>
                        <p className='text-base font-normal'>And get instant feedback on your phone</p>
                    </div>
                    <div className='absolute z-[7] inset-0 bg-black/60' />
                    <img className='object-cover z-[5] absolute inset-0 w-full h-full max-h-[600px]' src="/car_dash.jpg" alt="" />
                </div>
                <form onSubmit={handleSubmit} className='bg-white p-6 w-full'>
                    <h2 className='text-xl text-center w-full font-bold mb-4'>Vehicle Check Form</h2>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Name</label>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} type='text' className='w-full outline-[#082854] p-2 border rounded' />
                        {errors && <p className='text-red-600 text-sm mt-1'>{errors}</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Mobile Number</label>
                        <input value={phone} onChange={(e) => { setPhone(e.target.value) }} type='text' className='w-full outline-[#082854] p-2 border rounded' />
                        {errors && <p className='text-red-600 text-sm mt-1'>{errors}</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' className='w-full outline-[#082854] p-2 border rounded' />
                        {errors && <p className='text-red-600 text-sm mt-1'>{errors}</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Car Registration</label>
                        <input className='w-full p-2 border rounded' value={regNumber} readOnly />
                    </div>
                    {/* <div className='mb-4'>
                        <label className='block text-gray-700'>Payment Details</label>
                        <input type='text' className='w-full outline-[#082854] p-2 border rounded' />
                    </div> */}
                    <button type='submit' className='w-full p-2 bg-[#082854] text-white rounded'>Submit</button>
                </form>
            </div>
            {recordFound &&
                <div ref={detailsRef} className='grid my-[80px] text-white py-8 px-3 mb-9 max-w-[500px] w-full justify-center grid-cols-1 items-center gap-3'>
                    <h1 className='text-3xl text-center font-bold'>Car Details</h1>
                    <p className='text-sm'><span className='text-base font-medium mr-3'>NTSA Status:</span>{ntsaStatus === true ? 'Active' : 'Inactive'}</p>
                    <p className='text-sm'><span className='text-base font-medium mr-3'>User Phone Number:</span> <span className='text-sm'>{userNumber}</span></p>
                    <p className='text-sm'><span className='text-base font-medium mr-3'>Amount:</span>Ksh.{payment}</p>
                    <div className='flex mt-10 w-full'>
                        <PaymentForm name={name} />
                    </div>
                </div>

            }


        </div>
    )
}

export default report_page


