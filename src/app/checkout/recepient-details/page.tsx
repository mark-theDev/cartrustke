'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,    
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    })
        .refine((value) => value.includes("@"), {
            message: "Email must contain an '@' symbol.",
        })
        .refine((value) => {
            const domain = value.split("@")[1];
            return domain && domain.includes(".");
        }, { message: 'Email should contain \'.\'' })   
})


const customerDetailsPage = () => {

    const [regNumber, setRegNumber] = useState('')
    const [reportPrice, setReportPrice] = useState('')

    const router = useRouter()

    useEffect(() => {

        const query = new URLSearchParams(window.location.search)

        const regNum = query.get('regNumber')
        const payPrice = query.get('price')

        if (regNum && payPrice) {
            setRegNumber(regNum)
            setReportPrice(payPrice)
        }
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""            
        },
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        
        const {email} = data

        console.log(regNumber, reportPrice, email)

        router.push(`/checkout/payment-details?regNum=${encodeURIComponent(regNumber)}&price=${encodeURIComponent(reportPrice)}&email=${encodeURIComponent(email)}`)
    }

    return (
        <div className='h-screen bg-[#e1e1e1] flex justify-center items-center w-full'>
            <div className='bg-white rounded-md p-5 max-w-lg w-full mx-auto'>
                <h1 className='text-lg text-center font-bold mb-3'>Email Details</h1>                
                <div className='my-4'>
                    <h3 className='text-[14px] mb-3 font-medium'>Car Registration: <span className='text-[15px] ml-4 font-bold'>{regNumber}</span></h3>
                    <h3 className='text-[14px] font-medium'>Amount to Pay: <span className='text-[15px] ml-4 font-bold'>Ksh{reportPrice}</span></h3>
                </div>
                <p className='text-sm text-gray-500 py-2'>Where to send report</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter email here..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />                        
                        <Button className='w-full mt-5' type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>

    )
}

export default customerDetailsPage