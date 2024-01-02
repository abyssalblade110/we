<template>
  <i>
    <slot name="icon"></slot>
  </i>
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
