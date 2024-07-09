import React from 'react'

interface CountryProps {
    name: string,
    flagUrl: string
}

const Country: React.FC <CountryProps> = ({name,flagUrl}) => {
  return (
    <div className='flex items-center mb-4'>
        <img className='w-8 h-auto mr-4' src={flagUrl} alt={`Flag of ${name}`} />
        <p className='text-base font-medium'>{name}</p>
    </div>
  )
}

export default Country