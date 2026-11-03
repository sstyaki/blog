<script setup lang="ts">
import WeblogPage from '../conponents/WeblogPage.vue'
import DefaultLayout from '../../../layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>茶飯事</template>
    <WeblogPage
        title="述駄"
        year-month-day="2026/11/02"
    >
      <div class="novel">
        <div class="chunk">
          <div>俺は自称妖怪だ。</div>
          <div>人の言葉を喰って生きてゐる。</div>
          <div>奴らは俺が何者かさへ分からず。</div>
          <div>指先から溶かされて征くのだ。</div>
        </div>
        <div class="chunk">
          <div>俺は自称妖怪だ。</div>
          <div>貴様の言葉を喰って嗤ってゐる。</div>
          <div>痴者共が欣んで差出す其れを。</div>
          <div>身を裂きながら呑み干すのだ。</div>
        </div>
        <div class="chunk">
          <div>俺は自称妖怪だ。</div>
          <div>寄る辺ない言葉を喰って眠ってゐる。</div>
          <div>一迅の風が届けた紙束は。</div>
          <div>昼夢で点るナトリウム灯。</div>
        </div>
        <div class="chunk">
          <div>俺は未だ人間だ。</div>
          <div>言葉を用いて儘ならず。</div>
          <div>喰い。取り込み。吐き出してゐる。</div>
          <div>そして目尻で捉えた俺に。</div>
          <div>今晩出逢うのだ。</div>
        </div>
      </div>
    </WeblogPage>
  </DefaultLayout>
</template>

<style scoped>
.novel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.chunk {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 20px;
}
.talk {
  display: flex;
  flex-direction: column;
  padding-top: 3px;
  padding-bottom: 3px;
}
</style>
