import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { reportEmail, phoneNumber, regNumber, amount } = req.body;

        // Log the received data to the console
        console.log('Received payment data:', { reportEmail, phoneNumber, regNumber, amount });

        // Simulate backend processing
        setTimeout(() => {
            // Simulate a successful response
            res.status(200).json({ success: true, message: 'Payment initiated successfully.' });
        }, 2000);
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
