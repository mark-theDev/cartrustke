'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify'

const ReportPage = () => {


    const [validatedData, setValidatedData] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        const fetchedData = query.get('report')

        if(fetchedData) {
          try {

            const parseData = JSON.parse(decodeURIComponent(fetchedData))
            const sanitizedData = DOMPurify.sanitize(parseData)
            console.log('Fetched data: ',sanitizedData)
          } catch (error) {
            console.log('Failed to fetch data',error)
          }
        }
        else {
          console.log('Unable to fetch data')
        }
        
    },[])


  return (
    <div className='h-screen flex justify-center items-center'>
        ReportPage
    </div>
  )
}

export default ReportPage