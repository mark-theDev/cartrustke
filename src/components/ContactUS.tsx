import React, { use, useState } from 'react'
import "./ContactUs.css"
import Link from 'next/link'
import Validation, { ValidationErrors, FormValues } from './Validation'
import { HiOutlineExclamation } from "react-icons/hi";

const ContactUS = () => {

    const [value, setValue] = useState <FormValues>({
        fullName: "",
        email: "",
        companyName: "",
        textArea: "",
        privacyPolicy: false,
        newsletter: false
    })

    const [errors, setErrors] = useState<ValidationErrors>({})

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const validationErrors = Validation(value)
        setErrors(validationErrors) 
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            setValue(prevVal =>
            ({
                ...prevVal,
                [name]: checked,
            }))
        }
        else {
            setValue(prevVal =>
            ({
                ...prevVal,
                [name]: value,
            }))
        }

    }

    return (
        <form className='w-full h-full flex justify-center flex-col gap-10'>
            <div className='form-title w-full md:w-[50%]'>
                <h1 className=' '>Get in touch with us to arrrage a consultation</h1>
            </div>
            <div className='grid grid-col-1 md:grid-cols-2 gap-5'>
                <div className='grid grid-col-1 sm:grid-cols-2 gap-5'>
                    <div className='form-group'>
                        <label htmlFor="userName"><span>* </span>First and last name</label>
                        <input
                            value={value.fullName}
                            type="text"
                            name='fullName'
                            id='userName'
                            required
                            className='form-input'
                            onChange={handleOnChange}
                        />
                        {errors.fullName && <p className='p-error'><HiOutlineExclamation className='text-lg' />{errors.fullName}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="userEmail"><span>* </span>Email</label>
                        <input
                            value={value.email}
                            type="email"
                            name='email'
                            id='userEmail'
                            className='form-input'
                            onChange={handleOnChange}
                            required
                        />
                        {errors.email && <p className='p-error'><HiOutlineExclamation className='text-lg' />{errors.email}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="companyName"><span>* </span>Company Name</label>
                        <input
                            value={value.companyName}
                            type="text"
                            name='companyName'
                            id='companyName'
                            className='form-input'
                            onChange={handleOnChange}
                            required
                        />
                        {errors.companyName && <p className='p-error'><HiOutlineExclamation className='text-lg' />{errors.companyName}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="companyWebsite">Your Website</label>
                        <input
                            type="text"
                            name='website'
                            id='companyWebsite'
                            className='form-input'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='text-sm' htmlFor="textArea"><span>* </span>Type your message here</label>
                    <textarea
                        value={value.textArea}
                        name="textArea"
                        id="textArea"
                        className='form-input h-full'
                        required
                        onChange={handleOnChange}
                    >
                    </textarea>
                    {errors.textArea && <p className='p-error'><HiOutlineExclamation className='text-lg' />{errors.textArea}</p>}
                </div>
            </div>
            <div className='form-check'>
                <div className='pb-4'>
                    <input
                        type="checkbox"
                        name='privacyPolicy'
                        id='privacyPolicy'
                        className='check-btn'
                        checked={value.privacyPolicy}
                        onChange={handleOnChange}
                        required
                    />
                    <label htmlFor="privacyPolicy">I have read, understand and accept the content of the <Link className='text-[#0073f0] hover:text-black transition duration-300 underline font-semibold' href='/'>Privacy Policy</Link> and consent to the processing of my data as part of this application.</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name='newsletter'
                        id='newsletter'
                        className='check-btn'
                        checked={value.newsletter}
                        onChange={handleOnChange}
                        required
                    />
                    <label htmlFor="newsletter">Join our newsletter! We'll keep you updated with exciting news, useful content and promotions</label>
                </div>
            </div>
            <div>
                <button onClick={handleOnSubmit} type='submit' className='rounded-full text-sm font-medium transform duration-300 text-white bg-[#082854] px-12 py-3 hover:bg-[#04152d]'>Get in touch</button>
            </div>
        </form>
    )
}

export default ContactUS