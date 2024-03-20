<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo";

const imageInfos = [
  new ImageInfo({
    title: "",
    filename: "mayonaka.png",
    date: "20",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "styaki3.png",
    date: "16",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "tudoi1.png",
    date: "03",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "nachi1.png",
    date: "02",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "myu2.png",
    date: "01",
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
      year-month="2024/03"
      prev-page="/contents/sky/2024-2"
    />
  </DefaultLayout>
</template>