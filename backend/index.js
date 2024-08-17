const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyParser.json());

const getAccessToken = async () => {
    const response = await axios.get(
        'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
        {
            auth: {
                username: process.env.CONSUMER_KEY,
                password: process.env.CONSUMER_SECRET,
            },
        }
    );
    return response.data.access_token;
};

app.post('/stkpush', async (req, res) => {
    const { phoneNumber, amount } = req.body;

    const accessToken = await getAccessToken();

    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, 14);
    const password = Buffer.from(
        `${process.env.SHORTCODE}${process.env.PASSKEY}${timestamp}`
    ).toString('base64');

    const stkPushRequest = {
        BusinessShortCode: process.env.SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerPayBillOnline',
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.CALLBACK_URL,
        AccountReference: 'Test Payment',
        TransactionDesc: 'Test Payment',
    };

    try {
        const response = await axios.post(
            'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
            stkPushRequest,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
