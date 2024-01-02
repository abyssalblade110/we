<template>
  <div>
    <div class="search-bar">
      <label for="cityInput">Enter City:</label>
      <input id="cityInput" v-model="city" placeholder="Enter city name" />
      <button @click="searchWeather">Search</button>
    </div>
    <div v-if="weatherData">
      <h2>{{ weatherData.name }}</h2>
      <p>Temperature: {{ weatherData.main.temp }}°C</p>
      <p>Conditions: {{ weatherData.weather[0].description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const city = ref("Philippines"); // Default city name
const apiKey = "4961107b1886f55d498bfb31e4fb897c"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const weatherData = ref({
  name: "",
  main: { temp: "" },
  weather: [{ description: "" }],
});

const searchWeather = async () => {
  try {
    const response = await fetch(
      `${apiUrl}?q=${city.value}&appid=${apiKey}&units=metric`
    );

    if (response.ok) {
      const data = await response.json();
      weatherData.value = data;
    } else {
      console.error("Failed to fetch weather data");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// Fetch initial weather data on component mount
import { onMounted } from "vue";
onMounted(searchWeather);
</script>

<style scoped>
.search-bar {
  margin-bottom: 20px;
}
</style>
