'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

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
        }, { message: 'Email should contain \'.\'' }),
    phoneNumber: z.string().min(10, {
        message: "Phone number must be at least 10 digits"
    }).max(15, {
        message: 'Number is too long, please check again'
    }).refine((value) => !isNaN(Number(value)), {
        message: 'Phone number must be a valid number'
    })
})


const customerDetailsPage = () => {

    const [regNumber, setRegNumber] = useState('')
    const [reportPrice, setReportPrice] = useState('')

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
            email: "",
            phoneNumber: ""
        },
    })

    const handleSubmit = () => { }

    return (
        <div className='h-screen bg-[#e1e1e1] flex justify-center items-center w-full'>
            <div className='bg-white rounded-md p-5 max-w-lg w-full mx-auto'>
                <h1 className='text-2xl text-center font-bold mb-3'>Enter Payment Details</h1>
                <p className='text-sm text-center'>Enter valid Email and Mobile Number. <br /> The email to receive the report and mpesa number to receive payment prompt</p>
                <div className='my-4'>
                    <h3 className='text-lg font-bold'>Car Registration: <span className='text-base ml-4 font-normal'>{regNumber}</span></h3>
                    <h3 className='text-lg font-bold'>Amount to Pay: <span className='text-base ml-4 font-normal'>Ksh{reportPrice}</span></h3>
                </div>
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

                        <div className='flex w-full gap-4 items-center'>
                            <div>
                                <img className='max-w-[130px] object-cover h-auto' src="/mpesa_logo.png" alt="" />
                            </div>
                            <div className='w-full'>
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mpesa number</FormLabel>
                                            <FormControl>
                                                <Input className='w-full' placeholder="Mobile number goes here..." type='tel' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex items-center my-8 space-x-2">
                            <Checkbox id="terms" className='mr-2' />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                        <Button className='w-full mt-5' type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>

    )
}

export default customerDetailsPage