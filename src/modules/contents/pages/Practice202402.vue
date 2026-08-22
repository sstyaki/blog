<script setup lang="ts">
import DefaultLayout from '../../../layouts/DefaultLayout.vue'
import ContentPage from '../components/ContentPage.vue'
import { ImageInfo } from '../constants/imageInfo.ts'

const imageInfos = [
  new ImageInfo({
    title: 'アイスクリーム・タウン',
    filename: 'icecream1.png',
    date: '28',
    descriptions: ['猛暑日、ホームレス多数。'],
  }),
  new ImageInfo({
    title: '装備スロット',
    filename: 'equipmentslot1.gif',
    date: '27',
    descriptions: ['意味も無く。たくさんポチポチして早着替えさせたりする。'],
  }),
  new ImageInfo({
    title: '500km先',
    filename: 'loudanimal.png',
    date: '26',
    descriptions: [
      'うるさい動物というお題。',
      '全然知らないので調べたら、クジラの声はバカでかいらしい。',
      '500km先まで届くんだってさ。',
    ],
  }),
  new ImageInfo({
    title: '立ち止まる',
    filename: 'salavadordali1.png',
    date: '25',
    descriptions: [
      'ダリの絵をみて描いた。',
      '抽象的な絵を見て理解しようとあれこれとアイディアを出している時間は嫌いじゃない。',
      'ところで、この時計は傾いている。',
    ],
  }),
  new ImageInfo({
    title: 'シマウマ',
    filename: 'savannah1.png',
    date: '24',
    descriptions: [
      '水場に来たシマウマの顔を正面から描いた。',
      'せいぜいシマシマしておけ。',
      'PS3のAFRIKAってゲームを思い出した。雄大な自然。',
    ],
  }),
  new ImageInfo({
    title: '金床',
    filename: 'anvil1.png',
    date: '23',
    descriptions: ['カン カン カン'],
  }),
  new ImageInfo({
    title: 'フェイスベール',
    filename: 'veil1.png',
    date: '22',
    descriptions: [
      'なびいている。',
      '人を描くのが苦手だと思っていたけれど、自分の中では上手くいった日。',
    ],
  }),
  new ImageInfo({
    title: 'Remote Meow Meeting',
    filename: 'remote.png',
    date: '21',
    descriptions: [
      'リモート会議をする猫。',
      'リモート会議をする猫。',
      'リモート会議をする猫。',
      'リモート会議をする猫達。',
    ],
  }),
  new ImageInfo({
    title: '水晶玉',
    filename: 'orb1.png',
    date: '20',
    descriptions: ['怪しそうな研究。すき。'],
  }),
  new ImageInfo({
    title: 'ナイフとリンゴ',
    filename: 'knife1.png',
    date: '20',
    descriptions: [
      'リンゴってやたら人気。',
      'あちこちで出てくるし、果物といえば私。みたいに思ってそう。',
      'みかんの方がすき。甘酸っぱい。',
      '明るく元気な橙色なのに、みかんは儚さを知っていそう。',
      '私はそういうギャップに弱い。',
      'お題をもらってドット絵を毎日描く「pixel_dailies」に参加し始めたのもここから。',
    ],
  }),
  new ImageInfo({
    title: '焚火',
    filename: 'campfire1.png',
    date: '02',
    descriptions: [
      '揺れるイメージをする。',
      '火の粉がふわりと舞って、焚火と私の間に落ちる。',
      'それだけ。',
    ],
  }),
]
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <ContentPage
      :image-infos="imageInfos"
      year-month="2024/02"
      prev-page="/contents/practice/2024-1"
      next-page="/contents/practice/2024-3"
    />
  </DefaultLayout>
</template>
