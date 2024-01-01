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
          <div class="feature">
            <i class="fas fa-thermometer-half"></i>
            <p>Real-time Temperature</p>
          </div>
          <div class="feature">
            <i class="fas fa-tint"></i>
            <p>Humidity Information</p>
          </div>
          <div class="feature">
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
import WeatherCard from "./components/weathercard.vue";

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

<style scoped>
/* Your exi<style scoped>
/* Your existing styles are unchanged */

.home {
  text-align: center;
  padding: 20px;
  background-color: #282c34; /* Dark background color */
  color: #61dafb; /* Light text color */
}

.hero {
  background-color: #3498db;
  color: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.search-box {
  margin-bottom: 20px;
}

.weather-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.location-box {
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #282c34; /* Dark text color */
}

.features {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.feature {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
  border-radius: 10px;
  margin: 0 10px;
  color: #282c34; /* Dark text color */
}

.feature i {
  font-size: 2em;
  margin-bottom: 10px;
  color: #61dafb; /* Light icon color */
}

/* Additional styling as needed */
</style>
