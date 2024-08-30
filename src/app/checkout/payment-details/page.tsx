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
import { PAYMENTPLAN } from "@/constants/paymentPlan"
import './styles.css'
import { motion, AnimatePresence } from "framer-motion"
import CubeSwipper from '@/components/CubeSwipper'
import CircleLoading from "@/components/CircleLoading"
import { useFetchedData } from "../contexts/PaymentContext"



const formSchema = z.object({
    phoneNumber: z.string().min(13, {
        message: 'Phone number must have 13 digits and start with +254'
    })
        .refine((value) => !isNaN(Number(value)), {
            message: 'Phone number must be a valid number'
        })
        .refine((value) => value.startsWith('+254'), {
            message: 'Phone number must start with +254'
        })
        .refine((value) => {
            const phoneCode = value.slice(4)
            return phoneCode.length >= 9 && !phoneCode.startsWith('0')
        }, {
            message: 'Number after +254 cannot be 0'
        })
})

const PaymentPage = () => {
    const [regNumber, setRegNumber] = useState('')
    const [reportPrice, setReportPrice] = useState('')
    const [reportEmail, setReportEmail] = useState('')
    const [isSent, setIsSent] = useState(false)
    const [plan, setPlan] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [paymentData, setPaymentData] = useState<string | null>(null)
    const [validating, setValidating] = useState(false)
    const [errors, setErrors] = useState<null | string>(null)

    const { vehicleDetails, insuranceDetails, setVehicleDetails, setInsuranceDetails } = useFetchedData()

    const router = useRouter()


    // Fetching data from url
    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        const regNum = query.get('regNum')
        const payPrice = query.get('price')
        const sendEmail = query.get('email')
        const payPlan = query.get('report')

        if (regNum && payPrice && sendEmail && payPlan) {
            setRegNumber(regNum)
            setReportEmail(sendEmail)
            setReportPrice(payPrice)
            setPlan(payPlan)
        }
    }, [])

    // Form validation 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: ''
        }
    })

    // Generating payment prompt
    const handleSubmit = async (data: z.infer<typeof formSchema>) => {
        const { phoneNumber } = data

        setSubmitting(true)

        console.log('submiting!')

        try {
            const response = await fetch('https://api-carma.kisoko.org/cartrust/api/v1/search/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    email: reportEmail,
                    phoneNumber: phoneNumber,
                    regNumber: regNumber,
                    pricingId: plan
                })
            })

            const result = await response.json()

            if (result.success) {
                const dataId = result.data
                setPaymentData(dataId)

                setIsSent(true)

                console.log('Data ID:', paymentData, '\n Payment Data:', paymentData)
                alert('Prompt sent')
            }
            else {
                alert('Failed to initiate payment. Please try again')
            }

        }
        catch (err) {
            console.error('Error initiating STK Push', err)
            alert('An error occured.Please try again later.')
        }
        finally {
            setSubmitting(false)
        }
    }


    // Validating function 
    useEffect(() => {

        const validatePayment = async () => {

            if (isSent && paymentData) {

                setValidating(true)

                try {
                    const response = await fetch(`https://api-carma.kisoko.org/cartrust/api/v1/payment/validate?accountRef=${paymentData}`, {
                        method: 'GET',
                        headers: {
                            'accept': 'application/json'
                        }
                    })

                    const result = await response.json()

                    console.log('Result', result)

                    if (result.success) {

                        const validationCode = result.code
                        setVehicleDetails(result.vehicle)
                        setInsuranceDetails(result.akiDetails)

                        console.log('Code', validationCode)
                        console.log('Vehicle details:', result.data.vehicle)
                        console.log('Insurance details:', result.data.akiDetails)
                        router.push(`/checkout/report-page?plan=${plan}&response=${encodeURIComponent(validationCode)}`)
                    }

                } catch (error) {
                    console.log(error)
                }
                finally {
                    setValidating(false)
                }
            }
        }

        validatePayment()

    }, [isSent, paymentData, setVehicleDetails, setInsuranceDetails, plan])



    // Calculating Vat price

    const planCost = calculatePlanCosts(plan)

    if (!planCost) return 0

    return (
        <div className='flex min-h-screen justify-center px-7 items-center w-full shadow-md bg-[#e1e1e1]'>
            <div className="bg-white min-h-[400px] w-full lg:max-w-[75vw] mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:flex text-white rounded-tl-lg rounded-bl-lg w-full flex-col bg-[#082854] justify-center items-center gap-5">
                    <h1 className="text-3xl mb-12 font-bold text-white">Learn your car's history</h1>
                    <div>
                        <CubeSwipper />
                    </div>
                </div>
                <div className="py-6 flex w-full items-center flex-col gap-3">
                    <AnimatePresence mode="wait">
                        <motion.div
                            className="flex w-full overflow-hidden relative flex-col px-12 md:px-6"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <h3 className="text-2xl font-bold w-full text-center">Checkout</h3>
                            <div className="flex mt-6 pb-5 border-b border-gray-300 flex-col">
                                <h3 className='text-[14px] mb-2 font-normal'>Car Registration: <span className='text-[15px] ml-4 font-medium'>{regNumber}</span></h3>
                                <h3 className='text-[14px] mb-2 font-normal'>Amount to pay: <span className='text-[15px] ml-4 font-medium'>Ksh{reportPrice}</span></h3>
                                <h3 className='text-[14px] mb-2 font-normal'>Email: <span className='text-[15px] ml-4 font-medium'>{reportEmail}</span></h3>
                            </div>
                            <p className="text-sm pt-8">Enter a valid <span className="text-[#008A36]">mpesa</span>  number to receive a payment prompt</p>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleSubmit)}
                                    className="space-y-8 flex w-full flex-col items-start"
                                >
                                    <div className="flex items-center w-full mt-4 gap-4">
                                        <img src="/mpesa_logo.png" className="max-w-[70px]" alt="" />
                                        <FormField
                                            control={form.control}
                                            name="phoneNumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-sm">Mobile Number</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className="w-full border border-gray-700"
                                                            placeholder="+254..."
                                                            {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full ">
                                        <h3
                                            className="flex justify-between w-full items-center mb-3">
                                            <span className="text-sm text-gray-800">Subtotal:</span>
                                            <span className="text-[13px] font-semibold">Ksh {planCost?.subtotal}</span>
                                        </h3>
                                        <h3
                                            className="flex justify-between w-full items-center mb-3">
                                            <span className="text-sm text-gray-800">Vat:</span>
                                            <span className="text-[13px] font-semibold">Ksh {planCost?.vat}</span>
                                        </h3>
                                        <h3
                                            className="flex justify-between w-full items-center mb-3">
                                            <span className="text-sm text-gray-800">Subtotal:</span>
                                            <span className="text-[13px] font-semibold">Ksh {planCost?.total}</span>
                                        </h3>
                                    </div>
                                    <Button type="submit" className="w-full bg-[#082854]">Get report</Button>
                                </form>
                            </Form>

                            {/* Sumbitting Modal */}
                            {submitting && (
                                <div className="bg-white/70 absolute inset-0 flex flex-col gap-3 justify-center items-center text-black">
                                    <h3 className="text-2xl font-semibold">Sending payment prompt</h3>
                                    <CircleLoading />
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            {isSent && <PaymentModal />}
        </div>
    )
}

export default PaymentPage

const calculatePlanCosts = (planId: string) => {

    const planInfo = PAYMENTPLAN.find(item => item.id === planId)

    if (!planInfo) return null

    const vatAmount = planInfo.price * 0.16

    const subTotal = planInfo.price - vatAmount

    return {
        vat: vatAmount,
        subtotal: subTotal,
        total: planInfo.price
    }

}