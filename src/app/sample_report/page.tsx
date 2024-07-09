'use client'
import React, { useEffect, useState } from 'react'

const API_URL = "https://api-carma.kisoko.org/cartrust/api/v1/search/filter?page=1&per_page=10"

interface Record {
    ntsaStatus: boolean;
    retries: number;
    retryAfter: number;
    id: number;
    regNumber: string;
    phoneNumber: string;
    email: string | null;
    accountRef: string;
    mpesaId: string | null;
    pricingId: number;
    promoId: string | null;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}

interface Meta {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    previous_page_url: string | null;
}

interface ApiResponse {
    code: number;
    success: boolean;
    message: string;
    data: {
        meta: Meta;
        data: Record[];
    }
}

const sampleReport = () => {

    const [records, setRecords] = useState<Record []>([])
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1)
    const [meta, setMeta] = useState< Meta | null>(null)

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const res = await fetch(`${API_URL}?page=${page}&per_page=10`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!res.ok) {
                    throw new Error(`Error: ${res.status} ${res.statusText}`)
                }
                const data:ApiResponse = await res.json()
                console.log("Fetched data:", data)

                setRecords(data.data.data)
                setMeta (data.data.meta)
            }

            catch (e: any) {
                console.error('Fetched error: ', e)
                setError(e.message)
            }
            
            finally {
                setIsLoading(false)
            }
        }

        fetchPost();
    }, [page])

    const handleNextPage = () => {
        if (meta && page < meta.last_page) {
            setPage(page + 1)
        }
    }

    const handlePreviousPage = () => {
        if (meta && page > meta.first_page) {
            setPage(page - 1)
        }
    }

    return (
        <div className='w-full pt-[150px] min-h-screen flex flex-col items-center bg-slate-300 px-7 lg:px-14'>
            <h1 className='text-black'>Fetching Api</h1>
            {isloading &&
                <div>Loading...</div>
            }
            {error && <div className='text-red-500'>Error: {error}</div>}
            <div>
                {records.length > 0 && (
                    <div className='bg-white p-4 w-full'>
                        <p>Total Records: {meta?.total}</p>
                        <ul>
                            {records.map((record) => (
                                <li 
                                key={record.id}
                                className='shadow text-sm p-2 my-2 rounded-lg'
                                >
                                    <p>ID: {record.id}</p>
                                    <p>Reg Number: {record.regNumber}</p>
                                    <p>Phone Number: {record.phoneNumber}</p>
                                    <p>Email: {record.email ? record.email : 'N/A'}</p>
                                    <p>Account Ref: {record.accountRef}</p>
                                    <p>Status: {record.status ? 'True' : 'False'}</p>
                                    <p>Created At: {record.createdAt}</p>
                                    <p>Updated At: {record.updatedAt}</p>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                        <div className='flex justify-between'>
                            <button
                                className='px-4 py-2 bg-blue-500 text-white rounded'
                                onClick={handlePreviousPage}
                                disabled={meta?.current_page === meta?.first_page}
                            >
                                Previous
                            </button>
                            <button
                                className='px-4 py-2 bg-blue-500 text-white rounded'
                                onClick={handleNextPage}
                                disabled={meta?.current_page === meta?.last_page}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default sampleReport