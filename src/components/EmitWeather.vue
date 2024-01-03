<script setup>
import { ref, defineProps } from "vue";

const { temperature, humidity, windSpeed } = defineProps([
  "temperature",
  "humidity",
  "windSpeed",
]);
</script>

<style scoped>
/* Add styling if needed */
</style>
