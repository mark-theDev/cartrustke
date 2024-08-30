'use client'
import React, { Children, ReactNode, useContext, createContext, useState } from 'react'


type VehicleDetails = {
    ownerName: string;
    ownerPin: string;
    registrationNo: string;
    make: string;
    model: string;
    engineNo: string;
    chassisNo: string;
    yearOfManufacture: string;
    vehicleUse: string;
    fuelType: string;
    seatCapacity: number;
    color: string;
    bodyType: string;
    logbookNo: string;
    logbookSerial: string;
    ccRating: string | null;
    isFinanced: boolean;
    saccoPin: string;
    saccoName: string;
    status: string;
    details: string;
}

type InsuranceDetails = {
    insuranceCertificateNo: string;
    memberCompanyName: string;
    coverEndDate: string;
    insurancePolicyNo: string;
    registrationNumber: string;
    chassisNumber: string;
}

interface FetchedDataContextProps {
    vehicleDetails: VehicleDetails | null;
    insuranceDetails: InsuranceDetails | null;
    setVehicleDetails: (data: VehicleDetails | null) => void;
    setInsuranceDetails: (data: InsuranceDetails | null) => void
}

const FetchedDataContext =  createContext<FetchedDataContextProps | undefined> (undefined)

export const FetchedVehicleData: React.FC<{children: ReactNode}> = ( {children}) => {
    
    const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(null)
    const [insuranceDetails, setInsuranceDetails] = useState<InsuranceDetails | null>(null)

    return (
        <FetchedDataContext.Provider value={{vehicleDetails, setVehicleDetails, insuranceDetails, setInsuranceDetails}}>
            {children}
        </FetchedDataContext.Provider>
    )
}

export const useFetchedData = () => {
    const context = useContext(FetchedDataContext)

    if(!context) {
        throw new Error('useFetchedData must be used within a FetchedDataProvider')
    }
    return context
}