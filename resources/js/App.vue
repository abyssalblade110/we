<template>
    <div class="weather-app">
      <header class="header">
        <div class="background-image">
          <div class="overlay"></div>
          <div class="search-box">
            <input v-model="city" class="search-bar" type="text" placeholder="Search for city..." />
            <button @click="searchWeather" class="search-button">Search</button>
          </div>
        </div>
  
        <div class="wrapper" id="App">
          <HelloWorld msg="The Weather Today" />
        </div>
      </header>
  
      <main class="main">
        <TheWelcomeVue />
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        city: "",
        weatherData: {
          "New York": { temperature: 22, conditions: "Sunny" },
          "London": { temperature: 18, conditions: "Cloudy" },
          // Add more cities and weather data as needed
        },
      };
    },
    methods: {
      searchWeather() {
        const cityName = this.city.trim();
        if (cityName && this.weatherData.hasOwnProperty(cityName)) {
          // Simulate an asynchronous operation (e.g., API request)
          setTimeout(() => {
            this.weatherData = this.weatherData[cityName];
          }, 500);
        } else {
          // Handle the case where the city is not found
          console.error(`Weather data not available for ${cityName}`);
        }
      },
    },
  };
  
  </script>
  
  <style scoped>
  .weather-app {
    text-align: center;
  }
  
  .header {
    position: relative;
    background: linear-gradient(to right top, #36d1dc, #5b86e5);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  
  .search-box {
    text-align: center;
  }
  
  .search-bar {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 16px;
  }
  
  .search-button {
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .wrapper {
    text-align: center;
  }
  
  .home-button {
    padding: 10px 15px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }
  /* Additional styling as needed */
  </style>
  