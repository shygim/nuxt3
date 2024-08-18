<template>
  <div>
    <div class="page">
      <CardUI
        v-for="article in data?.articles"
        :key="article.url"
        :data="article"
      />
      <!-- <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI />
      <CardUI /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import CardUI from "./components/Card.vue";
import AppHeader from "~/components/AppHeader.vue";
// import { ApiStructure } from "~/types/api";
const API_KEY = "06f671fa9166414cb0a08dab3e00a616";
const API_URL = `https://newsapi.org/v2/everything?q=Apple&from=2024-08-15&sortBy=popularity&apiKey=${API_KEY}`;
const { data, pending, error, refresh } = await useAsyncData("getNews", () =>
  $fetch(API_URL)
);
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  /* width: calc(100%-96px); */
  width: calc(100% - 96px);
  padding: 48px;
  gap: 24px;
}
</style>
