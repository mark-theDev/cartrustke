'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Country {
    cca3: string;
    name: {
      common: string;
    };
    flags: {
      svg: string;
    };
  }

  const specificCountries = [
    'USA', 'GBR', 'AUS', 'LTU', 'EST', 'LVA', 'POL', 'ROU', 'HUN', 'FRA', 
    'UKR', 'SWE', 'BEL', 'CZE', 'HRV', 'BGR', 'SVK', 'SRB', 'FIN', 'SVN', 
    'DEU', 'ITA', 'CHE', 'DNK'
  ];

const CountryPage: React.FC = () => {

    const [countries, setCountries] = useState<Country []>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState <string| null> (null)
    const [showAll, setShowAll] = useState(false)

    const europeFilter = 'region/europe'

    const INITIAL_DISPLAY_COUNT = 18;

    useEffect ( () => {
        const fetchCountries = async () => {
            
            try{
                const response = await axios.get('https://restcountries.com/v3.1/all') 
                const filteredCounries = response.data.filter((country:Country) => 
                    specificCountries.includes(country.cca3))              
                setCountries(filteredCounries)
                setLoading(false)
            }
            catch(error) {
                console.error("Could not locate resource")
                setError('Failed to fetch resource')
                setLoading(false)
            }
            finally{
                setLoading(false)
            } 
        };
        fetchCountries ();       
    },[])

    const displayedCountries = showAll ? countries : countries.slice(0, INITIAL_DISPLAY_COUNT);

  return (
    <section className='bg-white min-h-screen py-16 text-center px-7 lg:px-14'>
        <h1 className='text-3xl font-bold'>Leading the way in how we use automotive data</h1>
        <p className='text-base py-6'>We're constantly innovating, building tools, and introducing features to bring the world of vehicle data to your doorstep.</p>
        <div className='flex flex-wrap justify-center gap-4'>
            {displayedCountries.map((country)=> (
                <div key={country.cca3} className="flex justify-center items-center px-2 py-1 gap-2 border rounded-full shadow-md">
                    <img src={country.flags.svg} 
                        alt={`${country.name.common} flag`} 
                        className="w-4 h-4 object-cover rounded-full" 
                    />
                    <p className="text-xs">{country.name.common}</p>
                </div>
            ))}
        </div>
        {!showAll && countries.length > INITIAL_DISPLAY_COUNT && (
            <button 
                onClick={()=> setShowAll(true)} 
                className='px-2 py-1 mt-4 shadow-md duration-500 ease-in-out bg-white text-black text-sm hover:text-white rounded-lg hover:bg-black'>
                    + {countries.length - INITIAL_DISPLAY_COUNT} More
            </button>
        )}
        <div>
            <img src="./map.png" alt="map" className='w-full py-9' />
        </div>
        <div className='flex flex-col md:flex-row sm:gap-5 gap-8'>
            <div className='flex flex-col items-start text-start md:rounded-lg md:p-7 md:bg-[#d7f0ff] gap-2'>
                <img src="./assets/LandingPage3/Icon8.png" className='w-[30px]' alt="image" />
                <h1 className='text-lg font-bold'>Cutting-edge car history report</h1>
                <p className='text-sm'>With every car history check, we gather and process information from 900+ global data sources—a complicated procedure for a simple and intuitive report.</p>
            </div>
            <div className='flex  flex-col items-start md:rounded-lg md:p-7 md:bg-[#d7f0ff] text-start gap-2'>
                <img src="./assets/LandingPage3/Icon8.png" className='w-[30px]' alt="image" />
                <h1 className='text-lg font-bold'>Data-driven research</h1>
                <p className='text-sm'>Processing so much data gives carVertical an exceptional capability to research automotive market trends. Sharing this information is essential to our mission of transparency.</p>
            </div>
            <div className='flex flex-col items-start md:rounded-lg md:p-7 md:bg-[#d7f0ff] text-start gap-2'>
                <img src="./assets/LandingPage3/Icon8.png" className='w-[30px]' alt="image" />
                <h1 className='text-lg font-bold'>The report isn't everything</h1>
                <p className='text-sm'>We want to show the world that automotive data is about much more than vehicle history—something we aim to demonstrate in the future!</p>
            </div>
        </div>
        
    </section>
  )
}

export default CountryPage