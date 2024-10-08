<script setup lang="ts">
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
import ContentPage from "../components/ContentPage.vue";
import {ImageInfo} from "../constants/imageInfo.ts";

const imageInfos = [
  new ImageInfo({
    title: "花鳥郷",
    filename: "minecraft/aviary.jpg",
    date: "01",
    descriptions: [
      "sky再現第3弾。",
      "風の街道を作りたかったが、ホームからは直接つながっていないので花鳥郷から作った。",
      "つまりただの通過点にすぎない。",
      "私もskyも進み続けている。困る。",
    ],
  }),
  new ImageInfo({
    title: "重なる",
    filename: "minecraft/minecraftxsky.png",
    date: "01",
    descriptions: [
      "お気に入りのスクショ。",
      "マイクラとskyの世界が重なって崩れ合う。",
      "私の星も、ふたつの世界を跨ぐ自分の体に驚いているはず。",
    ],
  }),
  new ImageInfo({
    title: "自星",
    filename: "minecraft/bothstyaki.png",
    date: "01",
    descriptions: [
      "sky再現第2弾。",
      "星の子をマイクラの世界に生み出した。figuraというmodを使っている。",
      "今はまだまだだけど、少しずつもっと星の子にしていく。",
    ],
  }),
  new ImageInfo({
    title: "ホーム",
    filename: "minecraft/home.jpg",
    date: "01",
    descriptions: [
      "sky再現第1弾。",
      "星の子のためにホームを作った。",
      "ログインしたてのフレンドと会えるから好きな場所。",
      "一個前とは年単位のブランクがある。",
    ],
  }),
  new ImageInfo({
    title: "通称、穴の町",
    filename: "minecraft/holetown.png",
    date: "01",
    descriptions: [
      "巨大な塔に巨大な穴。",
      "そしてそれを埋めるように3次元に配置された家たち。",
      "配信で設定を話しながら作った大切な思い出の街。",
      "一軒一軒にストーリーがあって、生活がある。",
      "尚、未完。",
    ],
  }),
  new ImageInfo({
    title: "パイプと城と",
    filename: "minecraft/steampunkcastle.png",
    date: "01",
    descriptions: [
      "当然のように未完の城。",
      "ちゃき御得意の造形 + 城のコンボ。",
      "全面違う装飾を行うことでシンメトリーやコピペばかりの城建築に喧嘩を売っている。",
      "ちなみに1つも売れなかった。",
    ],
  }),
  new ImageInfo({
    title: "歯車の星",
    filename: "minecraft/gearplanet.png",
    date: "01",
    descriptions: [
      "歯車の星。",
      "mayaで作ったモデルをマイクラに出力するテスト用。",
      "テストにしては出来がよくて気に入っている。",
    ],
  }),
  new ImageInfo({
    title: "宙船",
    filename: "minecraft/sorabune.png",
    date: "01",
    descriptions: [
      "宙船。",
      "城と船が混ざって構造物のような、船のような。",
      "視聴者達にお題をもらって即興で建てた建築。",
    ],
  }),
  new ImageInfo({
    title: "箱庭",
    filename: "minecraft/hakoniwa.png",
    date: "01",
    descriptions: [
      "正月に作った箱庭。ネザーにあるので熱そう。",
      "真ん中に枝垂れ桜があり、連続した鳥居の先に神社がある。",
      "誰も来ない箱庭に神様はまだいてくれているかな。",
      "私の過去建築で唯一動画化されている。何故。",
    ],
  }),
  new ImageInfo({
    title: "クリスマスツリー",
    filename: "minecraft/xmas.png",
    date: "01",
    descriptions: [
      "2019くらいのクリスマスに作ったツリー。",
      "よく見ると周りに廃墟がある。",
      "寒波に追われてここに住めなくなった住民が、クリスマスの日だけここに帰って、",
      "巨大な焚火を囲みながら周囲の瓦礫に想いを馳せる。",
      "そんな設定があった気がする。",
    ],
  }),
  new ImageInfo({
    title: "心の塔",
    filename: "minecraft/towerofheart.png",
    date: "01",
    descriptions: [
      "ねじれて崩れて規則的で不規則的で。",
    ],
  }),
  new ImageInfo({
    title: "浮家3",
    filename: "minecraft/floatinghouse3.png",
    date: "01",
    descriptions: [
      "浮いている家シリーズ第3弾。",
      "正気を取り戻して家っぽい形には戻った。",
      "ただ浮家らしい装飾はけっこうついててかなりお気に入りな家。",
      "残念ながら当時はあまり伸びなくて「世界、見る目なさすぎる」と思った記憶がある。",
    ],
  }),
  new ImageInfo({
    title: "浮家2",
    filename: "minecraft/floatinghouse2.png",
    date: "01",
    descriptions: [
      "浮いている家シリーズ第2弾。",
      "浮いてるので自由な形でいいんだ！ と狂いめちゃくちゃに作ってやった。",
      "吊るされたランタンが夜空を優しく照らす。",
    ],
  }),
  new ImageInfo({
    title: "浮家1",
    filename: "minecraft/floatinghouse1.png",
    date: "01",
    descriptions: [
      "浮いている家シリーズ第1弾。",
      "毎日投稿しようとおもって綺麗に3日で飽きたシリーズ。",
      "3部作とか言うとかっこいいので3部作と呼んでください。かっこいいので。",
      "この頃の私は自分のロゴができた喜びでデカデカとはっつけている。",
    ],
  }),
  new ImageInfo({
    title: "根城",
    filename: "minecraft/treecastle.png",
    date: "01",
    descriptions: [
      "巨大な木に埋もれる城。",
      "なにかが起きて木に埋もれたのか、木があって城を建てたのか。",
      "そんなわくわくな妄想が捗る建築。",
    ],
  }),
  new ImageInfo({
    title: "港町",
    filename: "minecraft/porttown.png",
    date: "01",
    descriptions: [
      "レンガ屋根と白壁の街。",
      "細かい家を狂ったように作るのが好きで、ほとんど手置きで作っている。",
      "後輩と作ってた思い出の街だが、データがどこにいったか分かっていない。",
      "この頃の私は一緒にゲームする友だちがいてうらやましい。",
    ],
  }),
  new ImageInfo({
    title: "浮城2",
    filename: "minecraft/floatingcastle2.png",
    date: "01",
    descriptions: [
      "浮城1の上のとこが見えやすいスクショ。",
      "確か建築を始めた理由はドラクエが好きで、",
      "ファンタジーな城が作りたかったんだと思う。",
    ],
  }),
  new ImageInfo({
    title: "浮城1",
    filename: "minecraft/floatingcastle1.png",
    date: "01",
    descriptions: ["全てのはじまり。"],
  }),
];
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <ContentPage
      :invalid-date="true"
      :image-infos="imageInfos"
      year-month="0000/00"
    />
  </DefaultLayout>
</template>