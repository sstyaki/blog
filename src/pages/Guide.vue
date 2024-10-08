<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
import {ref} from "vue";

const isMobileView = ref(true);
</script>

<template>
  <DefaultLayout @change-device-of-window="(isMovieViewValue: boolean) => isMobileView = isMovieViewValue">
    <template v-slot:header>案内板</template>
    <h2>此処は・・・？</h2>
    <div>いらっしゃいませ。気分屋です。</div>
    <div>売れる気分だけ売っています。</div>
    <h2>貴方は・・・？</h2>
    <div class="about-me">
      <img src="../assets/okojo.png" alt="オコジョの絵" class="my-icon-image" :class="{'my-icon-image-mobile': isMobileView}"/>
      <div class="about-me-link-table-column">
        <div class="about-me-link-title">My Links</div>
        <div class="about-me-link-table-row">
          <a href="https://twitter.com/_styaki" target="_blank" rel="noopener noreferrer" class="about-me-link">
            <img src="../assets/xicon.png" alt="xのアイコン" class="about-me-icon" :class="{'about-me-icon-mobile': isMobileView}"/>
            <div v-if="!isMobileView">twitter</div>
          </a>
          <a href="https://www.youtube.com/@styaki-is-online" target="_blank" rel="noopener noreferrer" class="about-me-link">
            <img src="../assets/youtubeicon.png" alt="youtubeのアイコン" class="about-me-icon" :class="{'about-me-icon-mobile': isMobileView}"/>
            <div v-if="!isMobileView">youtube</div>
          </a>
        </div>
        <div class="about-me-link-table-row">
          <a href="https://www.tiktok.com/@_styaki" target="_blank" rel="noopener noreferrer" class="about-me-link">
            <img src="../assets/tiktokicon.png" alt="xのアイコン" class="about-me-icon" :class="{'about-me-icon-mobile': isMobileView}"/>
            <div v-if="!isMobileView">tiktok</div>
          </a>
          <a href="https://www.twitch.tv/styaki" target="_blank" rel="noopener noreferrer" class="about-me-link">
            <img src="../assets/twitchicon.png" alt="xのアイコン" class="about-me-icon" :class="{'about-me-icon-mobile': isMobileView}"/>
            <div v-if="!isMobileView">twitch</div>
          </a>
        </div>
      </div>
    </div>
    <div>ちゃきと申します。</div>
    <div>おこじょではないです。おこじょが好きです。</div>
    <h2>メニューについて</h2>
    <div>戻る　：トップページに戻ります。</div>
    <div>案内板：ここのことです。</div>
    <div>茶飯事：何かの進捗だったり、どうでもいいことだったりが書いてあります。</div>
    <div>瓦落多：ガラクタが置いてあります。絵とかです。説明スイッチをONにすると私のぼやきが見れます。</div>
  </DefaultLayout>
</template>

<style scoped>
.my-icon-image {
  max-width: 250px;
  margin-bottom: 10px;
}

.my-icon-image-mobile {
  max-width: 150px;
  margin-bottom: 10px;
}

.about-me {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
}

.about-me-link-title {
  font-size: 1.5em;
}

.about-me-link-table-column {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.about-me-link-table-row {
  display: flex;
  flex-direction: row;
  gap: 2em;
}

.about-me-link {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-me-icon {
  width: 4.5em;
}

.about-me-icon-mobile {
  width: 3.5em;
}
</style>