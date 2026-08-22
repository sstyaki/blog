<script setup lang="ts">
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>瓦落多</template>
    <h2>練習とか</h2>
    <div class="contents">
      <div>2024年</div>
      <div>
        <router-link to="/contents/practice/2024-3" class="log-link"
          >　　　3月</router-link
        >
      </div>
      <div>
        <router-link to="/contents/practice/2024-2" class="log-link"
          >　　　2月</router-link
        >
      </div>
      <div>
        <router-link to="/contents/practice/2024-1" class="log-link"
          >　　　1月</router-link
        >
      </div>
    </div>
    <h2>skyの絵とか</h2>
    <div class="contents">
      <div>2026年</div>
      <div>
        <router-link to="/contents/sky/2026-1to3" class="log-link"
          >　　　1月~3月</router-link
        >
      </div>
      <div>2025年</div>
      <div>
        <router-link to="/contents/sky/2025-5to7" class="log-link"
          >　　　5月~7月</router-link
        >
      </div>
      <div>2024年</div>
      <div>
        <router-link to="/contents/sky/2024-4to10" class="log-link"
          >　　　4月~10月</router-link
        >
      </div>
      <div>
        <router-link to="/contents/sky/2024-3" class="log-link"
          >　　　3月</router-link
        >
      </div>
      <div>
        <router-link to="/contents/sky/2024-2" class="log-link"
          >　　　2月</router-link
        >
      </div>
      <div>
        <router-link to="/contents/sky/2024-1" class="log-link"
          >　　　1月</router-link
        >
      </div>
    </div>
    <h2>minecraftの建築とか</h2>
    <div class="contents">
      <div>
        <router-link to="/contents/minecraft" class="log-link"
          >　　　全部</router-link
        >
      </div>
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
