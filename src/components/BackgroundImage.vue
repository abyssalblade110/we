<!-- components/BackgroundImage.vue -->
<template>
  <div :style="{ backgroundImage: getBackgroundImage() }"></div>
</template>

<script>
export default {
  props: {
    weatherCondition: String,
  },
  computed: {
    // Ensure the prop is reactive by using a computed property
    normalizedCondition() {
      return this.weatherCondition ? this.weatherCondition.toLowerCase() : "neutral";
    },
  },
  methods: {
    getBackgroundImage() {
      switch (this.normalizedCondition) {
        case "sunny":
          return 'url("./assets/img/sunny bg.jpg")';
        case "rainy":
          return 'url("./assets/img/rainy bg.jpg")';
        case "freezing":
          return 'url("./assets/img/snow.jpg")';
        default:
          return 'url("./assets/img/bg-1.jpg")';
      }
    },
  },
};
</script>

<style scoped></style>
