// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, World! This is an Express.js server.');
});

// Define a route for "/about"
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
