<script setup lang="ts">

import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>茶飯事</template>
    <h2>諸々</h2>
    <div>2024/03/14 :</div>
    <router-link to="/weblogs/2024-3-16" class="log-link">開設日</router-link>
  </DefaultLayout>
</template>

<style scoped>
.log-link {
  font-size: 1.2em;
  padding-left: 15px;
}
</style>