<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo";

const imageInfos = [
  new ImageInfo({
    title: "",
    filename: "abyss.png",
    date: "24",
    month: "03",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "kimono.png",
    date: "22",
    month: "03",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "ice.png",
    date: "02",
    month: "02",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "styaki9.png",
    date: "26",
    month: "01",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "saki3.png",
    date: "23",
    month: "01",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "styaki8.png",
    date: "20",
    month: "01",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "junglegym.png",
    date: "16",
    month: "01",
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
        year-month="2026/01"
        prev-page="/contents/sky/2025-5to7"
    />
  </DefaultLayout>
</template>