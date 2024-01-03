<template>
  <div id="app">
    <main>
      <!-- Your existing content here -->
      <router-view></router-view>
      <!-- In your existing template -->
      <nav class="main-nav">
        <ul>
          <li><router-link to="/about" class="'nav-link">About</router-link></li>
          <!-- Add more navigation linkclasss as needed -->
        </ul>
      </nav>

      <div class="home">
        <div class="hero">
          <h1>Welcome to WeatherTech</h1>
          <p>Your advanced source for weather insights</p>
        </div>
        <BackgroundImage />
        <WeatherCard
          :currentLocation="currentLocation"
          :currentTemperature="currentTemperature"
          :conditions="conditions"
          :hourlyForecast="hourlyForecastData"
          @weather-updated="updateWeatherData"
        />
        <TimeComponent />

        <div class="weather-wrap">
          <div class="location-box">
            <WeatherComponent :weather="weather" />
          </div>
        </div>

        <div class="features">
          <EmitWeather />
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
import { ref, computed, nextTick } from "vue";
import WeatherComponent from "./components/Weather.vue";
import WeatherCard from "./components/WeatherCard.vue";
import "../src/assets/css/main.css";
import EmitWeather from "./components/EmitWeather.vue";
import BackgroundImage from "./components/BackgroundImage.vue";
import TimeComponent from "./components/TimeComponent.vue";

const currentLocation = ref("");
const currentTemperature = ref(0);
const conditions = ref("");
const hourlyForecastData = ref([]);

// Listen for the weather-updated event from Weather.vue
const updateWeatherData = (weatherData) => {
  currentTemperature.value = weatherData.temperature;
  conditions.value = getWeatherCondition(weatherData.conditions);
  // You can define a method to get a more descriptive weather condition
  const getWeatherCondition = (weatherDescription) => {
    // Implement your logic to map weather descriptions to more user-friendly conditions
    return weatherDescription;
  };
  // Update other data properties as needed
};
export default {
  components: {
    WeatherComponent,
    WeatherCard,
    EmitWeather,
    BackgroundImage,
    TimeComponent,
  },
  data() {
    return {
      city: "",
      api_key: "4961107b1886f55d498bfb31e4fb897c",
      url_base: "https://api.openweathermap.org/data/2.5/weather",
      weatherData: null,
      currentLocation: "Cebu City",
      currentTemperature: 25, // Replace with actual temperature data
      conditions: "Clear sky", // Replace with actual condition data
      hourlyForecastData: [
        { time: "12:00 PM", temperature: 28 },
        { time: "1:00 PM", temperature: 29 },
        // Add more hourly forecast data as needed
      ],
    };
  },

  computed: {
    weatherCondition() {
      if (this.weatherData) {
        const weather = this.weatherData.weather[0].main.toLowerCase();
        if (weather.includes("clear")) {
          return "sunny";
        } else if (weather.includes("rain")) {
          return "rainy";
        } else if (weather.includes("snow")) {
          return "freezing";
        }
      }
      return "neutral";
    },
  },
  methods: {
    async fetchWeather() {
      try {
        const apiKey = this.api_key;
        const baseUrl = this.url_base;
        const city = this.city;

        const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);

        if (response.ok) {
          const data = await response.json();
          this.weatherData = data;
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    handleClick() {
      this.$refs.myRef.innerHTML = "Clicked!";

      nextTick(() => {
        console.log("DOM has been updated");
      });
    },
  },
};
</script>
