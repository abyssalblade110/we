<template>
  <div class="weather-card">
    <h2>{{ currentLocation }}</h2>
    <div class="details">
      <p class="temperature">{{ currentTemperature }}°C</p>
      <p class="conditions">{{ conditions }}</p>
    </div>
    <div class="forecast">
      <h3>24-Hour Forecast</h3>
      <ul>
        <li v-for="(hourlyData, index) in hourlyForecast" :key="index">
          {{ hourlyData.time }}: {{ hourlyData.temperature }}°C
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    currentLocation: String,
    currentTemperature: Number,
    conditions: String,
    hourlyForecast: Array,
    // Add more props as needed
  },
};
</script>

<style scoped></style>
