"use client"
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
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { PaymentModal } from "@/components/PaymentModal"


const formSchema = z.object({
    phoneNumber: z.string().min(10, {
        message: 'Phone number must have 10 digits'
    })
        .refine((value) => !isNaN(Number(value)), {
            message: 'Phone number must be a valid number'
        })
        .refine((value) => value.startsWith('07') || value.startsWith('01'), {
            message: 'Phone number must start with 07 or 01'
        })
})

const PaymentPage = () => {

    const [regNumber, setRegNumber] = useState('')
    const [reportPrice, setReportPrice] = useState('')
    const [reportEmail, setReportEmail] = useState('')
    const [isSent, setIsSent] = useState(false)

    const router = useRouter()


    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        const regNum = query.get('regNum')
        const payPrice = query.get('price')
        const sendEmail = query.get('email')

        if (regNum && payPrice && sendEmail) {
            setRegNumber(regNum)
            setReportEmail(sendEmail)
            setReportPrice(payPrice)
        }
    }, [])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: ''
        }
    })

    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        const { phoneNumber } = data

        try {
            const response = await fetch('http://localhost:3000/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reportEmail,
                    phoneNumber,
                    regNumber,
                    amount: reportPrice
                })
            })

            const result = await response.json()
            console.log(response)

            if (result.success) {
                setIsSent(true)
                router.push(`/`)
            }
            else {
                alert('Failed to initiate payment. Please try again')
            }
        }
        catch (err) {
            console.error('Error initiating STK Push', err)
            alert('An error occured.Please try again later.')
        }
    }

    return (
        <div className='flex justify-center px-7 h-screen items-center shadow-md bg-[#e1e1e1]'>
            <div className="bg-white min-h-[400px] w-full md:w-[80vw] mx-auto rounded-lg grid grid-cols-2">
                <div className="flex text-white rounded-tl-lg rounded-bl-lg flex-col  bg-[#082854] justify-center items-center gap-3">
                    <h1 className="text-2xl mb-6 font-bold text-white">Learn your car's history</h1>
                    <div>
                        <h3 className='text-[14px] mb-3 font-normal'>Car Registration: <span className='text-[15px] ml-4 font-bold'>{regNumber}</span></h3>
                        <h3 className='text-[14px] mb-3 font-normal'>Amount to pay: <span className='text-[15px] ml-4 font-bold'>Ksh{reportPrice}</span></h3>
                        <h3 className='text-[14px] mb-3 font-normal'>Email: <span className='text-[15px] ml-4 font-bold'>{reportEmail}</span></h3>
                    </div>
                    <img src="/assets/CarInfo/Mazda-Img.png" className="object-contain max-w-[300px]" alt="Mazda image" />
                </div>
                <div className="p-6 flex w-full flex-col gap-3">
                    <h4 className="text-lg text-center font-bold">Enter payment details</h4>
                    <p className="text-sm">Use a valid <strong className="text-[#008A36]">MPESA</strong>  number to receive a payment prompt</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 flex w-full flex-col items-start">

                            <div className="flex items-center w-full gap-4">
                                <img src="/mpesa_logo.png" className="max-w-[70px]" alt="" />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Mobile Number</FormLabel>
                                            <FormControl>
                                                <Input className="w-full" placeholder="07 or 01" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <h4 className="text-lg w-full text-center border-t border-b border-gray-400 py-2 font-semibold">or</h4>
                                <h3 className="text-sm text-center mt-4 font-medium">PayBill: <span className="text-[15px] ml-4 font-bold">123456</span></h3>
                                <p className="text-sm text-center mt-3 font-medium">Account number: <span className="text-[15px] ml-4 font-bold">Your name</span></p>
                            </div>
                            <Button className="w-full bg-[#082854]" type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
            </div>
            {isSent && <PaymentModal />}
        </div>
    )
}

export default PaymentPage 