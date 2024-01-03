<script setup>
import { getCurrentInstance } from "vue";

const { emit } = getCurrentInstance();
// const handleInput = (e) => {
//   // Handle input changes if needed
// };

const searchWeather = async () => {
  const cityName = document.querySelector(".search-box").innerText.trim();

  if (cityName) {
    try {
      const response = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
      const weatherData = await response.json();

      // Check if the required properties are present in the response
      if (
        weatherData.main &&
        weatherData.main.temp &&
        weatherData.wind &&
        weatherData.wind.speed &&
        weatherData.main.humidity
      ) {
        // Emit the weather data to the parent component, including wind speed, humidity, and temperature
        emit("search", {
          temperature: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          windSpeed: weatherData.wind.speed,
        });
      } else {
        console.error("Invalid weather data format");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }
};
</script>

<style scoped></style>
