<template>
  <div class="weather-card">
    <h2>{{ Philippines }}</h2>
    <div class="details">
      <p class="temperature">{{ temperature }}°C</p>
      <p class="conditions">{{ conditions }}</p>
      <!-- Add more details as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    cityName: String,
    temperature: Number,
    conditions: String,
    // Add more props as needed
  },
};
</script>

<style scoped>
/* Add more styling as needed */
</style>
