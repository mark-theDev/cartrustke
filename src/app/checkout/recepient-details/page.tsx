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
import CircleLoading from '@/components/CircleLoading';



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
    const [submitting, setSubmitting] = useState(false)
    const [plan, setPlan] = useState<null | string>('')

    const router = useRouter()

    useEffect(() => {

        const query = new URLSearchParams(window.location.search)

        const regNum = query.get('regNumber')
        const payPrice = query.get('price')
        const payPlan = query.get('reports')

        if (regNum) {
            setRegNumber(regNum)
        }
        if (payPrice) setReportPrice(payPrice)
        setPlan(payPlan)
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) => {

        const { email } = data

        console.log(regNumber, reportPrice, email, plan)
        setSubmitting(true)

        router.push(`/checkout/payment-details?report=${encodeURIComponent(plan || '')}&regNum=${encodeURIComponent(regNumber)}&price=${encodeURIComponent(reportPrice)}&email=${encodeURIComponent(email)}`)
    }

    return (
        <div className='h-screen bg-[#e1e1e1] flex flex-col justify-center items-center w-full'>
            <div className='bg-white rounded-md p-5 max-w-lg w-full mx-auto'>
                <h1 className='text-lg text-center font-bold mb-3'>Email Details</h1>
                {/* <div className='my-4'>
                    <h3 className='text-[14px] mb-3 font-medium'>Car Registration: <span className='text-[15px] ml-4 font-bold'>{regNumber}</span></h3>
                    <h3 className='text-[14px] font-medium'>Amount to Pay: <span className='text-[15px] ml-4 font-bold'>Ksh{reportPrice}</span></h3>
                </div> */}
                <p className='text-sm text-black mb-3'>Where to send report</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    {/* <FormLabel>Email</FormLabel> */}
                                    <FormControl>
                                        <Input className='border border-gray-500' placeholder="Enter email here..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='w-full mt-5' type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
            <div className={`mt-7 flex items-center transition-all duration-300 ease-in-out
                     justify-center gap-2 text-center ${submitting ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <span className='text-sm font-bold'>Updating details...</span>
                <CircleLoading />
            </div>
        </div>

    )
}

export default customerDetailsPage