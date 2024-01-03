<template>
  <div class="weather-card">
    <div class="news news-container newsstyling">
      <h3 class="news-heading">News Today</h3>
      <ul class="news-list">
        <li class="news-item" v-for="(article, index) in newsArticles" :key="index">
          <div>
            <img :src="article.urlToImage" alt="News Image" class="news-image" />
          </div>
          <a :href="article.url" target="_blank" class="news-title">{{
            article.title
          }}</a>
        </li>
      </ul>
    </div>

    <div class="forecast">
      <h3 class="ticker">24 Hour Forecast</h3>
      <ul>
        <li class="feature1" v-for="(hourlyData, index) in hourlyForecast" :key="index">
          {{ hourlyData.time }}: {{ hourlyData.temperature }}°C
        </li>
      </ul>
      <footer class="fixed-bottom text-white bg-dark p-.5 text-center">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WeatherCard",
  props: {
    currentLocation: String,
    currentTemperature: Number,
    conditions: String,
  },
  data() {
    return {
      hourlyForecast: [],
      newsArticles: [],
    };
  },
  mounted() {
    this.fetchHourlyForecast();
    this.fetchNews();
  },
  methods: {
    async fetchNews() {
      try {
        const newsApiKey = "6c25f1d6e5f7465b968af4aecaf43785";
        const newsResponse = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`
        );

        if (newsResponse.data && newsResponse.data.articles) {
          this.newsArticles = newsResponse.data.articles.slice(0, 5);
          this.shuffleNews();
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    },
    shuffleNews() {
      for (let i = this.newsArticles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.newsArticles[i], this.newsArticles[j]] = [
          this.newsArticles[j],
          this.newsArticles[i],
        ];
      }
    },
    async fetchHourlyForecast() {
      try {
        const apiKey = "4961107b1886f55d498bfb31e4fb897c";
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${this.currentLocation}&appid=${apiKey}&units=metric`
        );

        if (response.data && response.data.list) {
          this.hourlyForecast = response.data.list
            .map((forecast) => {
              return {
                time: forecast.dt_txt,
                temperature: forecast.main.temp,
              };
            })
            .slice(0, 8);
        }
      } catch (error) {
        console.error("Error fetching hourly forecast:", error);
      }
    },
  },
};
</script>

<style scoped></style>
