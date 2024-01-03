<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to WeatherTech</h1>
      <p>Find the current weather and the 24-hour forecast</p>
    </div>

    <weather-component :city="city" />

    <div class="forecast-container" v-if="hourlyForecastData.length">
      <h2>24-Hour Forecast</h2>
      <ul class="forecast-list">
        <li v-for="hourlyData in hourlyForecastData" :key="hourlyData.time">
          {{ hourlyData.time }}: {{ hourlyData.temperature }}°C
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WeatherComponent from "./Weather.vue";

const city = ref("");
const hourlyForecastData = ref([]);

// Assume you have a function to fetch hourly forecast data
const fetchHourlyForecast = async (city) => {
  // Implement your logic to fetch hourly forecast data
  // Replace the following with your actual API endpoint and structure
  const response = await fetch(`YOUR_HOURLY_FORECAST_API_ENDPOINT`);
  if (response.ok) {
    return await response.json();
  } else {
    console.error("Failed to fetch hourly forecast data");
    return [];
  }
};

// Fetch the hourly forecast data when the component is mounted
onMounted(async () => {
  hourlyForecastData.value = await fetchHourlyForecast(city.value);
});
</script>

<style>
/* Add your styles for the forecast container and list here */
.forecast-container {
  margin-top: 20px;
}

.forecast-list {
  list-style: none;
  padding: 0;
}

.forecast-list li {
  margin-bottom: 5px;
}
</style>
