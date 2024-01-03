<template>
  <div class="time-component">
    <h>Philippine Standard Time</h>
    {{ currentTime }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: this.getCurrentTime(),
    };
  },
  methods: {
    getCurrentTime() {
      const currentTime = new Date().toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila",
        hour12: true,
      });
      return currentTime;
    },
    updateTime() {
      setInterval(() => {
        this.currentTime = this.getCurrentTime();
      }, 1000); // Update every second
    },
  },
  mounted() {
    this.updateTime();
  },
};
</script>

<style scoped></style>
