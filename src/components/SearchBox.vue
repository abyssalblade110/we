<!-- SearchBox.vue -->
<template>
  <div class="search-container">
    <div contenteditable="true" @keydown="searchWeather" class="search-box">
      <div class="details" placeholder="enter city name" spellcheck="false">
        <h3>Search Your City</h3>
      </div>
    </div>
    <button @click="searchWeather" class="search-button">Search</button>
  </div>
</template>

<script setup>
const searchWeather = (e) => {
  if (e.key === "Enter" || e.type === "click") {
    const cityName = document.querySelector(".search-box").innerText.trim();

    if (cityName) {
      fetch(`/api/weather?city=${encodeURIComponent(cityName)}`)
        .then((response) => response.json())
        .then((data) => {
          // Emit the weather data to the parent component
          emit("search", data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }
};
</script>

<style scoped></style>
