<script setup>
import { ref, onBeforeMount } from "vue";

const city = ref("");
const hourlyForecastData = ref([]);

const fetchHourlyForecast = async (city) => {
  const apiKey = "4961107b1886f55d498bfb31e4fb897c"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to fetch hourly forecast data");
      return [];
    }
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

// Fetch the hourly forecast data when the component is mounted
onBeforeMount(async () => {
  hourlyForecastData.value = await fetchHourlyForecast(city.value);
});
</script>

<style>
/* Add your styles for the forecast container and list here */
.forecast-container {
  margin-top: 20px;
}

.forecast-list {
  list-style: none;
  padding: 0;
}

.forecast-list li {
  margin-bottom: 5px;
}
</style>
