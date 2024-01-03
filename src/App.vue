<template>
  <div id="app">
    <main>
      <div>
        <div class="hero">
          <h1 class="heading advance" data-category="Weather">Welcome to WeatherTech</h1>
          <p>Your advanced source for weather insights</p>
          <p>Your Guide to the Great Outdoors</p>
        </div>
        <SearchBox />
        <TimeComponent />
        <EmitWeather />
        <BackgroundImage :weatherCondition="weatherCondition" />

        <WeatherComponent :weather="weather" />
        <WeatherCard
          :currentLocation="currentLocation"
          :currentTemperature="currentTemperature"
          :conditions="conditions"
          :hourlyForecast="hourlyForecastData"
          @weather-updated="updateWeatherData"
        />

        <div class="features">
          <div class="location-box"></div>
        </div>

        <div class="features">
          <div class="feature" v-for="feature in features" :key="feature.icon">
            <i :class="feature.icon"></i>
            <p>{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import WeatherComponent from "./components/WeatherComponent.vue";
import WeatherCard from "./components/WeatherCard.vue";
import EmitWeather from "./components/EmitWeather.vue";
import BackgroundImage from "./components/BackgroundImage.vue";
import TimeComponent from "./components/TimeComponent.vue";
import "./assets/css/main.css";

export default {
  components: {
    WeatherComponent,
    WeatherCard,
    EmitWeather,
    BackgroundImage,
    TimeComponent,
  },
  setup() {
    const currentLocation = ref("Cebu City");
    const currentTemperature = ref(25);
    const conditions = ref("Clear sky");
    const hourlyForecastData = ref([
      { time: "12:00 PM", temperature: 28 },
      { time: "1:00 PM", temperature: 29 },
      // Add more hourly forecast data as needed
    ]);

    const weatherData = ref(null);
    const weatherCondition = computed(() => {
      if (weatherData.value) {
        const weather = weatherData.value.weather[0].main.toLowerCase();
        if (weather.includes("clear")) return "sunny";
        else if (weather.includes("rain")) return "rainy";
        else if (weather.includes("snow")) return "freezing";
      }
      return "neutral";
    });

    const features = [];

    const updateWeatherData = (data) => {
      currentTemperature.value = data.temperature;
      conditions.value = data.conditions;
    };

    const fetchWeather = async () => {
      const apiKey = "4961107b1886f55d498bfb31e4fb897c";
      const city = "Cebu";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          weatherData.value = await response.json();
        } else {
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const handleClick = () => {
      // Handle click logic here
      console.log("Button Clicked!");
    };

    onMounted(() => {
      fetchWeather();
    });

    return {
      currentLocation,
      currentTemperature,
      conditions,
      hourlyForecastData,
      weatherCondition,
      features,
      updateWeatherData,
      handleClick,
    };
  },
};
</script>

<style scoped></style>
