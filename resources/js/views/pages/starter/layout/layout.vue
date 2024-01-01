<!-- Layout.vue -->

<template>
  <div>
    <!-- Your layout structure goes here -->
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
/* Add your layout-specific styles here */
</style>
