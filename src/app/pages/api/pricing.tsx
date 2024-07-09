import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = 'https://api-carma.kisoko.org/cartrust/api/v1/search/create';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  
    try{
        const response = await fetch(API_URL)

        if(!response.ok){
            throw new Error(`Error: ${response.status} ${response.statusText}`)
        }

        const data = await response.json();
        res.status(200).json(data)
    }
    catch(error:any){
        res.status(500).json({error: error.message})
    }
}

