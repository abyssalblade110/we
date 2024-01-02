<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to WeatherTech</h1>
      <p>Your advanced source for weather insights</p>
    </div>

    <div class="search-box">
      <search-box
        v-model="city"
        placeholder="Search for a city..."
        @search="searchWeather"
      />
    </div>

    <weather-component :city="city" />

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
</template>

<script>
import SearchBox from "./SearchBox.vue";
import WeatherComponent from "./Weather.vue";

export default {
  components: {
    SearchBox,
    WeatherComponent,
  },
  data() {
    return {
      city: "",
    };
  },
  methods: {
    searchWeather() {
      // Implement your weather search logic here
    },
  },
};
</script>
<style></style>
