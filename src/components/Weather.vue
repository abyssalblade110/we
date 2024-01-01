<template>
  <div class="weather-app">
    <div class="background-image">
      <div class="overlay"></div>
      <div class="search-box">
        <input
          v-model="city"
          class="search-bar"
          type="text"
          placeholder="Search for a city..."
        />
        <Button @click="searchWeather">Search</Button>
      </div>
    </div>

    <div class="wrapper" id="App">
      <HelloWorld msg="The Weather Today" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
      weatherData: {
        "New York": { temperature: 22, conditions: "Sunny" },
        London: { temperature: 18, conditions: "Cloudy" },
        // Add more cities and weather data as needed
      },
    };
  },
  methods: {
    searchWeather() {
      const cityName = this.city.trim();
      if (cityName && this.weatherData.hasOwnProperty(cityName)) {
        setTimeout(() => (this.weatherData = this.weatherData[cityName]), 500);
      } else {
        console.error(`Weather data not available for ${cityName}`);
      }
    },
  },
};
</script>

<style scoped>
.weather-app {
  text-align: center;
}

.background-image {
  position: sticky;
  height: 100vh;
  background: linear-gradient(to right top, #bdc3c7, #2c3e50);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.search-box {
  text-align: center;
}

.search-bar {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
  color: #020202;
}

.search-button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.wrapper {
  text-align: center;
}
</style>
