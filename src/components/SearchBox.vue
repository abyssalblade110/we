<template>
  <i> </i>
  <div class="details" placeholder="enter city name" spellcheck="false">
    <h3>
      <slot name="heading"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    searchWeather(e) {
      if (e.key === "Enter") {
        // Implement your weather search logic here
        this.$emit("search" /* Pass any necessary data to the parent component */);
      }
    },
  },
};
</script>

<style scoped>
.search-button {
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 26px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-button:hover {
  background-color: #27ae60;
}

.details {
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: #3498db;
}

h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #3498db;
}

@media (min-width: 1024px) {
  .search-button {
    padding: 14px 26px;
    margin-top: 0;
  }
}
</style>
