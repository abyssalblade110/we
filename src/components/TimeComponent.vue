<!-- components/TimeComponent.vue -->

<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="(timezone, index) in timezones" :key="index">
          <div class="timezone-container">
            <div class="timezone">
              <p class="timezone-name">{{ getTimezoneName(timezone) }}</p>
            </div>
            <div class="time">
              <p class="timezone-time">{{ getTimeInZone(timezone) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: "",
      theme: "default",
      timezones: ["America/New_York", "Europe/London", "Asia/Tokyo"],
    };
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = this.getTimeInZone(this.timezone);
      this.updateTheme(now.getHours());
    },
    getTimeInZone(timezone) {
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        timeZone: timezone,
      });

      return formatter.format(new Date());
    },
    getTimezoneName(timezone) {
      // Split the timezone string and extract the last part as the name
      const parts = timezone.split("/");
      return parts[parts.length - 1].replace("_", " ");
    },
    updateTheme(hours) {
      if (hours >= 5 && hours < 12) {
        this.theme = "morning-theme";
      } else if (hours >= 12 && hours < 18) {
        this.theme = "afternoon-theme";
      } else {
        this.theme = "evening-theme";
      }
    },
  },
};
</script>

<style scoped>
/* Add more styles as needed */
</style>
