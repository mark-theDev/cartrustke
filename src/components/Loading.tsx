import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return <div className="flex bg-[#082854] justify-center items-center h-screen">
        <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25 " cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-1" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg> 
    </div>
};

export default LoadingSpinner;