<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>案内板</template>
    <h2>此処は・・・？</h2>
    <div>いらっしゃいませ。気分屋です。</div>
    <div>売れる気分だけ売っています。</div>
    <h2>貴方は・・・？</h2>
    <img src="../assets/okojo.png" alt="オコジョの絵" class="icon-image"/>
    <div>ちゃきと申します。</div>
    <div>おこじょではないです。おこじょが好きです。</div>
    <h2>メニュー分かりにくい・・・</h2>
    <div>戻る　：トップページに戻ります。</div>
    <div>案内板：ここのことです。</div>
    <div>茶飯事：何かの進捗だったり、どうでもいいことだったりが書いてあります。</div>
    <div>瓦落多：ガラクタが置いてあります。絵とかです。</div>
  </DefaultLayout>
</template>

<style scoped>
.icon-image {
  max-width: 250px;
  margin-bottom: 10px;
}
</style>