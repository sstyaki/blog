<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <h2>諸々</h2>
    <router-link to="/contents/game/1">げえむ</router-link>
    <div>2024/01/25</div>
    <img src="../modules/contents/assets/brokenbottle1.png" alt="割れたボトル" class="image">
  </DefaultLayout>
</template>

<style scoped>
.image {
  width: 100%;
  margin-bottom: 15px;
}
</style>