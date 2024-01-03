<template>
  <div>
    <div class="search-bar">
      <label for="cityInput">Enter City:</label>
      <input id="cityInput" v-model="city" placeholder="Enter city name" />
      <button @click="searchWeather">Search</button>
    </div>
    <div v-if="weatherData">
      <h2>{{ weatherData.name }}</h2>
      <p class="temperature" :class="getTemperatureClass(weatherData.main.temp)">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p>Conditions: {{ weatherData.weather[0].description }}</p>
      <div class="wind-humidity">
        <p>Wind Speed: {{ weatherData.wind.speed }} m/s</p>
        <p>Humidity: {{ weatherData.main.humidity }}%</p>
      </div>
      <!-- Emit weather data to the parent component -->
      <emit-weather
        :temperature="weatherData.main.temp"
        :humidity="weatherData.main.humidity"
        :wind-speed="weatherData.wind.speed"
        @weather-updated="onWeatherUpdated"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide, getCurrentInstance } from "vue";

const city = ref("Philippines"); // Default city name
const apiKey = "4961107b1886f55d498bfb31e4fb897c"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const weatherData = ref({
  name: "",
  main: { temp: "", humidity: "" },
  weather: [{ description: "" }],
  wind: { speed: "" },
});

const instance = getCurrentInstance();

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

const getTemperatureClass = (temp) => {
  if (temp < 10) {
    return "temperature-cold";
  } else if (temp < 20) {
    return "temperature-moderate";
  } else if (temp < 30) {
    return "temperature-warm";
  } else {
    return "temperature-hot";
  }
};

// Emit weather data to the parent component
const onWeatherUpdated = () => {
  instance.emit("weather-updated", {
    temperature: weatherData.value.main.temp,
    humidity: weatherData.value.main.humidity,
    windSpeed: weatherData.value.wind.speed,
  });
};

// Provide weather data to child components
provide("weatherData", weatherData);

// Fetch initial weather data on component mount
onMounted(searchWeather);
</script>

<style scoped>
/* Add dynamic background color based on temperature */
.temperature-cold {
  background: blue;
}

.temperature-moderate {
  background-color: green;
}

.temperature-warm {
  background-color: orange;
}

.temperature-hot {
  background-color: red;
}
</style>
