<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo";

const imageInfos = [
  new ImageInfo({
    title: "",
    filename: "lilfoxesmeeting3.png",
    date: "22",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "lilfoxesmeeting2.png",
    date: "22",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "lilfoxesmeeting1.png",
    date: "22",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "ciel.png",
    date: "16",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "asagiiro.png",
    date: "14",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "myu3.png",
    date: "08",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "nachi2.png",
    date: "07",
    month: "10",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "styaki5.png",
    date: "24",
    month: "09",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "ale.png",
    date: "19",
    month: "08",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "styaki4.png",
    date: "12",
    month: "08",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "cloud1.png",
    date: "24",
    month: "07",
    descriptions: [],
  }),
  new ImageInfo({
    title: "",
    filename: "summer1.png",
    date: "23",
    month: "07",
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
      next-page="/contents/sky/2025-5to7"
    />
  </DefaultLayout>
</template>