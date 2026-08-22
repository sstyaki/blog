<script setup lang="ts">
import DefaultLayout from '../../../layouts/DefaultLayout.vue'
import ContentPage from '../components/ContentPage.vue'
import { ImageInfo } from '../constants/imageInfo'

const imageInfos = [
  new ImageInfo({
    title: '',
    filename: 'u1.png',
    date: '29',
    descriptions: [],
  }),
  new ImageInfo({
    title: '',
    filename: 'myu1.png',
    date: '28',
    descriptions: [],
  }),
  new ImageInfo({
    title: '',
    filename: 'styaki1.png',
    date: '26',
    descriptions: [],
  }),
]
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <ContentPage
      :invalid-description-toggle="true"
      :image-infos="imageInfos"
      year-month="2024/01"
      next-page="/contents/sky/2024-2"
    />
  </DefaultLayout>
</template>
