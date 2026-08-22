<script setup lang="ts">
interface Props {
  title: string
  yearMonthDay: string
  nextPage?: string | undefined
  prevPage?: string | undefined
}
withDefaults(defineProps<Props>(), {})
</script>

<template>
  <h2>{{ yearMonthDay + ' ー ' + title }}</h2>
  <div class="main">
    <slot />
    <div class="pagination-menu">
      <div v-if="prevPage"><router-link :to="prevPage">前</router-link></div>
      <div v-else>　</div>
      <div>|</div>
      <div v-if="nextPage"><router-link :to="nextPage">次</router-link></div>
      <div v-else>　</div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 15px 15px;
}

.pagination-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
}
</style>
