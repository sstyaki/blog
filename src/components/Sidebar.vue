<script setup lang="ts">
import { LayoutType } from '../constants/layoutType.ts'

interface Props {
  type: LayoutType
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="sidebar">
    <div><router-link to="/" class="menu-items">表紙</router-link></div>
    <div><router-link to="/guide" class="menu-items">案内板</router-link></div>
    <div>
      <router-link to="/weblogs" class="menu-items">茶飯事</router-link>
    </div>
    <div>
      <router-link to="/contents" class="menu-items">瓦落多</router-link>
    </div>
    <div class="menu-bottom-line">　</div>
    <div class="status-items" v-if="props.type === LayoutType.Game">
      状態：ああああ
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  font-size: 1.2em;
  min-width: 215px;
  background-image: url('../assets/layout-sidebarline-vertical.png');
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
}

.menu-items {
  padding-left: 35px;
}

.status-items {
  font-size: 0.8em;
  padding-left: 35px;
}

.menu-bottom-line {
  font-size: 10px;
  margin-top: 1px;
  margin-bottom: 5px;
  background-image: url('../assets/layout-sidebarline-horizon.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
