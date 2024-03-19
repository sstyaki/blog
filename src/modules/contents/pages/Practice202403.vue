<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo.ts";

const imageInfos = [
  new ImageInfo({
    title: "視線",
    filename: "tower.png",
    date: "19",
    descriptions: [
      "お題を設けず好きなものを書いてみた。",
      "知らない世界の知らない街並みが好きだ。",
    ],
  }),
  new ImageInfo({
    title: "視線",
    filename: "eye1.png",
    date: "09",
    descriptions: [
      "目。",
      "キャンパスサイズを上げてもっと細かく描きたい。",
      "ただ、なんとなくこのキャンパスサイズを気に入ってきている。",
      "仕方がないので目にめちゃくちゃ近い絵にして描いた。",
    ],
  }),
  new ImageInfo({
    title: "絵にかいた",
    filename: "apple.png",
    date: "08",
    descriptions: [
      "またリンゴ。",
      "ダンジョン飯という漫画が好きで、それに絵の中で飯を食う話があった。",
      "絵の中なら食べても太らないそうなのでぜひ家に欲しい。",
    ],
  }),
  new ImageInfo({
    title: "呼吸",
    filename: "smoke.gif",
    date: "07",
    descriptions: [
      "夜に溶けそうな煙。",
      "タバコのさきっぽが。呼吸に合わせてじりじりと焼けていく様がすき。",
      "私は吸わないので他人が吸っているところをガン見している。",
    ],
  }),
  new ImageInfo({
    title: "ショトカ",
    filename: "shortcut.png",
    date: "06",
    descriptions: [
        "スーパーマリオ64のスライダーでいい感じに下に落下してショトカしていた子供時代を思い出す。",
    ],
  }),
  new ImageInfo({
    title: "グリッドに飛び込みたい",
    filename: "minecraft1.png",
    date: "05",
    descriptions: [
      "マイクラが好きなので描いた。",
    ],
  }),
  new ImageInfo({
    title: "朝日",
    filename: "grass1.png",
    date: "05",
    descriptions: [
      "きらきらしはじめた草",
    ],
  }),
  new ImageInfo({
    title: "ツールキット",
    filename: "toolkit.png",
    date: "04",
    descriptions: [
      "工具のゴチャ感がやり過ぎてないので全体の情報量が好きなレベルでまとまっている。",
      "文字もかわいいし立体感も背景も好き。",
    ],
  }),
  new ImageInfo({
    title: "ミュート",
    filename: "volume1.gif",
    date: "04",
    descriptions: [
      "音量を上げて、現実を消して、違う景色を見たい。",
    ],
  }),
  new ImageInfo({
    title: "バスターソード",
    filename: "bustersword.png",
    date: "03",
    descriptions: [
      "背景も絵も文字も上手くいかず悩んだ。",
    ],
  }),
  new ImageInfo({
    title: "米穂",
    filename: "rice1.png",
    date: "02",
    descriptions: [
      "なぜかこの絵に、お褒めの言葉をいくつか頂いた。",
      "渾身の一作ってわけでもなかったから不思議だ。",
      "でも褒められて嬉しい。あまり言葉にして伝えてもらえることってない気がする。",
      "たくさん褒められたい。",
    ],
  }),
  new ImageInfo({
    title: "消えた",
    filename: "t-shirts.png",
    date: "01",
    descriptions: [
      "T-シャツとしわを残して。",
    ],
  }),
];
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <ContentPage
        :image-infos="imageInfos"
        year-month="2024/03"
        prev-page="/contents/practice/2024-2"
    />
  </DefaultLayout>
</template>