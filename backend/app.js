const express = require('express');
const app = express();
const cors = require('cors')
const port = 3001; // Or any port number you prefer

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true

}));
// Middleware to parse JSON data
app.use(express.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);

    // Here you can handle the form data (e.g., save it to a database)

    // Send a response back to the client
    res.status(200).json({ message: 'Form submitted successfully!', data: formData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
