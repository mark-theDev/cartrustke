'use client'
import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useRef } from 'react'
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form'
import { Button } from './ui/button';
import Link from 'next/link';

interface FormProps {
    name: string;
}

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phoneNumber: z.string().min(10, {
        message: "Phone number must be at least 10 digits"
    }).max(15, {
        message: 'Number is too long, please check again'
    }).refine((value) => !isNaN(Number(value)), {
        message: 'Phone number must be a valid number'
    })
})

const PaymentForm: React.FC<FormProps> = ({ name }) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: ""
        },
    })

    const handleSubmit = () => { }
    return (
        <div className='bg-white text-center text-black max-w-lg w-full p-6 rounded-lg'>
            <h1 className='text-2xl font-bold mb-3'>Enter Payment Details</h1>
            <p className='text-sm mx-auto max-w-[70%]'>Please use valid mpesa number to receive payment prompt</p>
            <Form {...form}>
                <form className='grid text-start gap-6 px-3 py-8' onSubmit={form.handleSubmit(handleSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Name" type='name' {...field} />
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

                    <Button className='w-full bg-[#082854]' type='submit'>Submit</Button>
                </form>
            </Form>
            <Link href={'/'}><p className='text-xs font-medium hover:underline text-[#082854]'>Terms and conditions.</p></Link>
        </div>
    )
}

export default PaymentForm