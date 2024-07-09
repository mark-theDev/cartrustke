import React from 'react'


export interface FormValues {
    fullName: string;
    email: string;
    companyName: string;
    textArea: string;
    privacyPolicy: boolean,
    newsletter: boolean
}

export interface ValidationErrors {
    fullName?: string;
    email?: string;
    companyName?: string;
    textArea?: string;
    privacyPolicy?: string;
    newsletter?: string
}

const Validation = (value: FormValues): ValidationErrors => {
    let errors: ValidationErrors = {}

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!value.fullName) {
        errors.fullName = `Name is required`
    }

    if (!value.email) {
        errors.email = "Email is required"
    }
    else if (!emailRegex.test(value.email)) {
        errors.email = "Email is invalid"
    }

    if (!value.companyName) {
        errors.companyName = "Company name is required"
    }

    if (!value.textArea) {
        errors.textArea = "Field is empty"
    }
    if (!value.newsletter) {
        errors.newsletter = "required"
    }
    if (!value.privacyPolicy) {
        errors.privacyPolicy = "required"
    }

    return errors
}

export default Validation