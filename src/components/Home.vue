<template>
  <div class="home">
    <div class="hero">
      <h1>Welcome to WeatherTech</h1>
      <p>Your advanced source for weather insights</p>
    </div>

    <div class="search-box">
      <search-box v-model="city" placeholder="Search for a city..." @search="searchWeather" />
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

<style scoped>
.home {
  text-align: center;
  padding: 20px;
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
}

.feature i {
  font-size: 2em;
  margin-bottom: 10px;
  color: #3498db; /* Use a color that matches your theme */
}

/* Additional styling as needed */
</style>
