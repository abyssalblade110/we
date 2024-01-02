import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = import.meta.env.PORT || 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// Sample weather data (replace with actual data from a weather API)
const weatherData = {
  city: 'Philippines',
  temperature: 25,
  conditions: 'Partly Cloudy',
};

// Endpoint to get the weather
app.get('/api/weather', (req, res) => {
  res.json(weatherData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
