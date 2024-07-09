import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { FaTimes } from 'react-icons/fa';

interface Country {
    name: { common: string };
    cca3: string;
    flags: { svg: string }
}

const ToggleCountryModal = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [searchCountry, setSearchCountry] = useState<string>('');
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

    const specificCountries = [
        'USA', 'GBR', 'AUS', 'LTU', 'EST', 'LVA', 'POL', 'ROU', 'HUN', 'FRA',
        'UKR', 'SWE', 'BEL', 'CZE', 'HRV', 'BGR', 'SVK', 'SRB', 'FIN', 'SVN',
        'DEU', 'ITA', 'CHE', 'DNK'
    ];

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const filteredCountries = response.data.filter((country: Country) =>
                    specificCountries.includes(country.cca3)
                );
                setCountries(filteredCountries);
                setFilteredCountries(filteredCountries);
                setSelectedCountry(filteredCountries.find((country: Country) => country.cca3 === 'USA'));
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch countries');
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleSelect = (country: any) => {
        setSelectedCountry(country);
        setShowModal(false);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchCountry(event.target.value);
        const filtered = countries.filter(country =>
            country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredCountries(filtered);
    };

    return (
        <div className='p-2 hover:bg-gray-200 rounded-md duration-500 '>
            <button
                onClick={() => setShowModal(true)}
                className='flex items-centerrounded'
            >
                {selectedCountry && (
                    <img
                        src={selectedCountry.flags.svg}
                        alt={`${selectedCountry.name.common} flag`}
                        className='w-6 h-6 object-cover rounded-full'
                    />
                )}
            </button>

            {showModal && (
                <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center">
                    <div className='relative bg-white scroll-smooth p-8 rounded-lg max-w-[70%] w-full'>
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-lg rounded-full p-1 duration-500 hover:text-white hover:bg-black"
                        >
                            <FaTimes />
                        </button>
                        <div className='text-center mt-6 w-full'>
                            <h2 className="text-xl font-semibold mb-4">Select Country</h2><br />
                            <input
                                type="text"
                                placeholder='Search country...'
                                value={searchCountry}
                                onChange={handleSearch}
                                className='max-w-[50%] mb-6 outline-none w-full py-1 px-4 bg-gray-200 text-gray-600 rounded-lg'
                            />
                        </div>
                        <ul className="max-h-60 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {filteredCountries.map(country => (
                                <li key={country.cca3}
                                    onClick={() => handleSelect(country)}
                                    className="p-2 cursor-pointer rounded-md hover:bg-gray-100 flex items-center"
                                >
                                    <img src={country.flags.svg}
                                        alt={`${country.name.common} flag`}
                                        className="w-6 h-6 rounded-full object-cover mr-2"
                                    />
                                    <span>{country.name.common}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ToggleCountryModal;
