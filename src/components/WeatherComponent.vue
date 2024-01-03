<template>
  <div>
    <div v-if="weatherData" class="weather-info">
      <!-- Render weather information -->
      <h2>{{ weatherData.name }}</h2>
      <p class="temperature" :class="getTemperatureClass(weatherData.main.temp)">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p>Conditions: {{ weatherData.weather[0].description }}</p>
      <div class="wind-humidity">
        <p>Wind Speed: {{ weatherData.wind.speed }} m/s</p>
        <p>Humidity: {{ weatherData.main.humidity }}%</p>
      </div>
      <emit-weather
        :temperature="weatherData.main.temp"
        :humidity="weatherData.main.humidity"
        :wind-speed="weatherData.wind.speed"
        @weather-updated="onWeatherUpdated"
      />
      <background-image :weather-condition="getTemperatureRange(weatherData.main.temp)" />
    </div>

    <div class="search-bar">
      <input id="cityInput" v-model="city" placeholder="Enter city name" />
      <button @click="searchWeather">Search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from "vue";

const city = ref("Cebu City");
const apiKey = "4961107b1886f55d498bfb31e4fb897c"; // Replace with your actual API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const weatherData = ref({
  name: "",
  main: { temp: "", humidity: "" },
  weather: [{ description: "" }],
  wind: { speed: "" },
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

const getCurrentLocationWeather = async () => {
  try {
    // Get current location coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // Fetch weather data using coordinates
        const response = await fetch(
          `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );

        if (response.ok) {
          const data = await response.json();
          weatherData.value = data;
        } else {
          console.error("Failed to fetch weather data");
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
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

const onWeatherUpdated = () => {
  // Emit weather data to the parent component
  provide("weatherData", weatherData.value.main.temp);
};

const getTemperatureRange = (temp) => {
  if (temp < 16) {
    return "cold";
  } else if (temp >= 16 && temp <= 30) {
    return "moderate";
  } else {
    return "hot";
  }
};

// Fetch initial weather data on component mount
onMounted(getCurrentLocationWeather);
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
