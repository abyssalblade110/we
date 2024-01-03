<template>
  <div class="time-component">
    <div
      class="timezone-container"
      @mouseover="startUpdatingTime"
      @mouseleave="stopUpdatingTime"
    >
      <p class="timezone-name">{{ timeZone }}</p>
      <p class="time">{{ currentTime }}</p>
      <p class="date">{{ currentDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: this.getCurrentTime(),
      timeZone: "Philippine Standard Time",
      currentDate: "",
      updatingTimeInterval: null,
    };
  },
  methods: {
    updateTime() {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      this.currentTime = now.toLocaleTimeString("en-US", options);
      this.currentDate = now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
    getCurrentTime() {
      const currentTime = new Date().toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour12: true,
      });
      return currentTime;
    },
    startUpdatingTime() {
      this.updateTime();
      this.updatingTimeInterval = setInterval(() => {
        this.updateTime();
      }, 1000); // Update every second
    },
    stopUpdatingTime() {
      clearInterval(this.updatingTimeInterval);
    },
  },
  beforeUnmount() {
    this.stopUpdatingTime();
  },
  mounted() {
    this.updateTime();
    this.startUpdatingTime();
  },
};
</script>

<style scoped>
/* Add your component styles here */
</style>
