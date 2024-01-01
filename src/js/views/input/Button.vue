<template>
  <button class="weather-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
import button from './components/js/views/input/Button.vue'

<style scoped>
.weather-button {
  padding: 10px 20px;
  background-color: #3498db; /* Blue button color */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.weather-button:hover {
  background-color: #2980b9; /* Darker blue on hover */
}
</style>
