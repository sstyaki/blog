<script setup lang="ts">
import DefaultLayout from '../../../layouts/DefaultLayout.vue'
import ContentPage from '../components/ContentPage.vue'
import { ImageInfo } from '../constants/imageInfo.ts'

const imageInfos = [
  new ImageInfo({
    title: '蛇口',
    filename: 'zyaguchi1.png',
    date: '29',
    descriptions: ['少しだけ光が当たった水場。'],
  }),
  new ImageInfo({
    title: '室外機',
    filename: 'situgaiki1.gif',
    date: '28',
    descriptions: [
      'はじめて動くものを描いた。室外機って大好き。',
      '空気を動かすおしごとを頑張っている。',
      '別に空気を動かしていなくてもいい。',
      '回っていてほしい。',
    ],
  }),
  new ImageInfo({
    title: '何かがあったぽい施設',
    filename: 'brokenlab1.png',
    date: '26',
    descriptions: [
      '警戒色がきらめく廃墟、何が起きたんだろうと',
      'おっかなびっくり歩く。',
      '歯車も描いてみた。',
      'なにかが暴れたせいでボロボロ。よくみるとにっこりがいる :)',
    ],
  }),
  new ImageInfo({
    title: '割れたボトル',
    filename: 'brokenbottle1.png',
    date: '25',
    descriptions: [
      'YoutubeShortsのさ、転がしたビー玉を何度も当ててガラス瓶を割る動画。',
      'じっと見ちゃう。',
      '人生に無駄なんてないって言う人は、あの時間も大切にしているのかな。',
    ],
  }),
  new ImageInfo({
    title: 'カラス',
    filename: 'karasu1.png',
    date: '24',
    descriptions: ['カア。', 'わあ、カラスだ。'],
  }),
  new ImageInfo({
    title: '信号',
    filename: 'singou1.png',
    date: '24',
    descriptions: [
      'この配色がすきだなあとイメージして描いてみた。',
      'この配色で描き続けるなんて思ってなかったね。',
    ],
  }),
]
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <ContentPage
      :image-infos="imageInfos"
      year-month="2024/01"
      next-page="/contents/practice/2024-2"
    />
  </DefaultLayout>
</template>
