<template>
  <div id="app">
    <main>
      <div class="home">
        <div class="hero">
          <h1>Welcome to WeatherTech</h1>
          <p>Your advanced source for weather insights</p>
        </div>
        <div class="search-bar w-50 mx-2">
          <SearchBox
            v-model="city"
            placeholder="Search for a city..."
            @search="searchWeather"
          />
        </div>

        <WeatherCard v-if="weatherData" :weather="weatherData" />

        <div class="weather-wrap">
          <div class="location-box">
            <WeatherComponent v-if="weatherData" :weather="weatherData" />
          </div>
        </div>

        <div class="features">
          <Feature
            icon="fas fa-thermometer-half"
            label="Temperature"
            value="main.temp"
            unit="°C"
          />
          <Feature icon="fas fa-tint" label="Humidity" value="main.humidity" unit="%" />
          <Feature icon="fas fa-wind" label="Wind Speed" value="wind.speed" unit="m/s" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import SearchBox from "./components/SearchBox.vue";
import WeatherComponent from "./components/Weather.vue";
import WeatherCard from "./components/WeatherCard.vue";
import Feature from "./components/Feature.vue"; // New component for features
import "../src/assets/css/main.css";

export default {
  components: {
    SearchBox,
    WeatherComponent,
    WeatherCard,
    Feature,
  },

  data() {
    return {
      city: "",
      api_key: "4961107b1886f55d498bfb31e4fb897c",
      url_base: "https://api.openweathermap.org/data/2.5/weather",
      weatherData: null,
    };
  },

  methods: {
    async searchWeather() {
      try {
        const { api_key, url_base, city } = this;
        const response = await fetch(
          `${url_base}?q=${city}&appid=${api_key}&units=metric`
        );

        if (response.ok) {
          this.weatherData = await response.json();
        } else {
          console.error("Error fetching weather data:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
