<script setup lang="ts">

import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <h2>練習とか</h2>
    <div>
      <div class="contents">
        <div>2024年</div>
        <div><router-link to="/contents/practice/2024-3" class="log-link">　　　3月</router-link></div>
        <div><router-link to="/contents/practice/2024-2" class="log-link">　　　2月</router-link></div>
        <div><router-link to="/contents/practice/2024-1" class="log-link">　　　1月</router-link></div>
      </div>
    </div>
    <h2>skyの絵とか</h2>
      <div class="contents">
        <div>2024年</div>
        <div><router-link to="/contents/sky/2024-3" class="log-link">　　　3月</router-link></div>
        <div><router-link to="/contents/sky/2024-2" class="log-link">　　　2月</router-link></div>
        <div><router-link to="/contents/sky/2024-1" class="log-link">　　　1月</router-link></div>
      </div>
  </DefaultLayout>
</template>

<style scoped>
.contents {
  font-size: 1.2em;
}

.log-link {
  padding-left: 15px;
}
</style>