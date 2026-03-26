<script setup lang="ts">

import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>茶飯事</template>
    <h2>諸々</h2>
    <div class="weblogs">
      <div class="weblog-item">
        <div>2025/05/20 :</div>
        <router-link to="/weblogs/2025-5-20" class="log-link">日記</router-link>
      </div>
      <div class="weblog-item">
        <div>2025/01/24 :</div>
        <router-link to="/weblogs/2025-1-24" class="log-link">日記</router-link>
      </div>
      <!--
      <div class="weblog-item">
        <div>2024/10/08 :</div>
        <router-link to="/weblogs/2024-10-08" class="log-link">マイクラをしている</router-link>
      </div>
      <div class="weblog-item">
        <div>2024/03/16 :</div>
        <router-link to="/weblogs/2024-3-16" class="log-link">開設日</router-link>
      </div>
      -->
    </div>
  </DefaultLayout>
</template>

<style scoped>
.weblogs {
  display: flex;
  flex-direction:column;
  gap: 2em;
}

.log-link {
  font-size: 1.2em;
  padding-left: 15px;
}
</style>