<template>
  <div id="app">
    <main>
      <div class="home">
        <div class="hero">
          <h1>Welcome to WeatherTech</h1>
          <p>Your advanced source for weather insights</p>
        </div>
        <div class="d-flex justify-content-center h-100"></div>
        <div class="search-bar" w-50 mx-2>
          <SearchBox
            v-model="city"
            placeholder="Search for a city..."
            @search="searchWeather"
          />
        </div>
        <WeatherCard> </WeatherCard>
        <div class="weather-wrap">
          <div class="location-box">
            <WeatherComponent :weather="weather" />
          </div>
        </div>

        <div class="features">
          <div class="feature1">
            <i class="fas fa-thermometer-half"></i>
            <p>Real-time Temperature</p>
          </div>
          <div class="feature1">
            <i class="fas fa-tint"></i>
            <p>Humidity Information</p>
          </div>
          <div class="feature1">
            <i class="fas fa-wind"></i>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { nextTick } from "vue";
import SearchBox from "./components/SearchBox.vue";
import WeatherComponent from "./components/Weather.vue";
import WeatherCard from "./components/WeatherCard.vue";
import "../src/assets/css/main.css";

export default {
  components: {
    SearchBox,
    WeatherComponent,
    WeatherCard,
  },
  data() {
    return {
      city: "",
      api_key: "4961107b1886f55d498bfb31e4fb897c",
      url_base: "https://api.openweathermap.org/data/2.5/weather",
      weather: null,
    };
  },
  methods: {
    async searchWeather() {
      // Fixed typo: changed "this.searchWeather" to "this.searchingWeather"
      this.searchingWeather = true;
      await nextTick(); // Fixed spacing and removed unnecessary "&"
      const apiKey = this.api_key;
      const baseUrl = this.url_base;
      const city = this.city;

      const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);

      if (response.ok) {
        const data = await response.json();
        this.weather = data;
      } else {
        console.error("Failed to fetch weather data");
      }
    },
  },
};
</script>
