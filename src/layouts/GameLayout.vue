<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import {LayoutType} from "../constants/layoutType.ts";
</script>

<template>
  <div class="default-layout">
    <div class="header">気分屋茶飯事 ー げえむ　ー<slot name="header"/></div>
    <div class="main">
      <Sidebar :type="LayoutType.Game"/>
      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.default-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  padding-left: 35px;
  min-height: 95px;
  background-image: url("../assets/layout-headerline.png");
  background-size: cover;
}

.main {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.main-content {
  max-width: 900px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px;
  padding: 0 40px 40px;
}
</style>