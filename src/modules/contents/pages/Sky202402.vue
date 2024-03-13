<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo";

const imageInfos = [
  new ImageInfo({
    title: "",
    filename: "key1.gif",
    date: "29",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "lapis1.png",
    date: "28",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "noey1.png",
    date: "26",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "red1.png",
    date: "23",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "cat1.png",
    date: "22",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "styaki2.png",
    date: "21",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "hakuo1.png",
    date: "20",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "alba.png",
    date: "14",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "saki1.png",
    date: "05",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "yamu1.png",
    date: "02",
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
      year-month="2024/02"
      prev-page="/contents/sky/2024-1"
      next-page="/contents/sky/2024-3"
    />
  </DefaultLayout>
</template>