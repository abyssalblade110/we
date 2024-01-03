<template>
  <div
    :class="getBackgroundClass()"
    :style="{ backgroundImage: getBackgroundImage() }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      backgroundImage: "../img/rainy bg.jpg",
    };
  },
  async created() {
    await this.fetchTemperature();
  },
  props: {
    weatherCondition: String,
  },
  computed: {
    normalizedCondition() {
      return this.weatherCondition ? this.weatherCondition.toLowerCase() : "neutral";
    },
  },
  methods: {
    async fetchTemperature() {
      try {
        const apiKey = "4961107b1886f55d498bfb31e4fb897c";
        const city = "Cebu";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          this.setBackgroundImage(data.main.temp);
        } else {
          console.error("Failed to fetch temperature data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    setBackgroundImage(temperature) {
      if (temperature < 16) this.backgroundImage = "../assets/img/snow.jpg";
      else if (temperature >= 16 && temperature <= 30)
        this.backgroundImage = "../assets/img/sunny bg.jpg";
      else this.backgroundImage = "../assets/img/bg-1.jpg";
    },
    getBackgroundClass() {
      return {
        "sunny-background": this.weatherCondition === "sunny",
        "rainy-background": this.weatherCondition === "rainy",
        "freezing-background": this.weatherCondition === "freezing",
        "neutral-background": this.weatherCondition === "neutral",
      };
    },
    getBackgroundImage() {
      switch (this.normalizedCondition) {
        case "cold":
          return 'url("../assets/img/snow.jpg")';
        case "moderate":
          return 'url("../assets/img/bg-1.jpg")';
        case "hot":
          return 'url("../assets/img/sunny bg.jpg")';
        default:
          return 'url("../assets/img/default-bg.jpg")';
      }
    },
  },
};
</script>

<style scoped></style>
