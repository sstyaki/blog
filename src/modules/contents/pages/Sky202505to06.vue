<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo";

const imageInfos = [
  new ImageInfo({
    title: "",
    filename: "summerbell.png",
    date: "28",
    month: "6",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "ale2.png",
    date: "14",
    month: "6",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "wind.png",
    date: "10",
    month: "5",
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
        year-month="2024/04"
        prev-page="/contents/sky/2024-3"
        next-page="/contents/sky/2025-5to6"
    />
  </DefaultLayout>
</template>