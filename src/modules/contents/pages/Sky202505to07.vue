<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo";

const imageInfos = [
  new ImageInfo({
    title: "",
    filename: "saki2.png",
    date: "10",
    month: "07",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "summerbell.png",
    date: "23",
    month: "06",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "ale2.png",
    date: "16",
    month: "06",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "wind.png",
    date: "12",
    month: "05",
    descriptions: [],
  }),
];
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <ContentPage
        :invalid-description-toggle="true"
        :image-infos="imageInfos"
        year-month="2025/05"
        prev-page="/contents/sky/2024-4to10"
        next-page="/contents/sky/2026-1to3"
    />
  </DefaultLayout>
</template>