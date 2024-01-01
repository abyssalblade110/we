<template>
    <div class="weather-card">
      <h2>{{ cityName }}</h2>
      <div class="details">
        <p class="temperature">{{ temperature }}°C</p>
        <p class="conditions">{{ conditions }}</p>
        <!-- Add more details as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeatherCard',
    props: {
      cityName: String,
      temperature: Number,
      conditions: String,
      // Add more props as needed
    },
  };
  </script>
  
  <style scoped>
  .weather-card {
    background-color: #3498db;
    color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .weather-card:hover {
    transform: translateY(-5px);
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
  
  .details {
    display: flex;
    flex-direction: column;
  }
  
  .temperature {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  
  .conditions {
    font-size: 1.2rem;
  }
  
  /* Add more styling as needed */
  </style>
  