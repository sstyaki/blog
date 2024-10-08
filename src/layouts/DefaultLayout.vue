<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import {LayoutType} from "../constants/layoutType.ts";
import {onMounted, ref, watch} from "vue";

const emit = defineEmits(["change-device-of-window"]);
const isMobileView = ref(true);
const windowWidth = ref(0);
const calculateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  return isMobileView.value = windowWidth.value < mobileSizeMax;
};
calculateWindowWidth();

const mobileSizeMax = 850;

onMounted(() => {
  window.addEventListener("resize", calculateWindowWidth);
});

watch(
    isMobileView,
    () => {
      emit("change-device-of-window", isMobileView.value);
    },
    { immediate: true }
);
</script>

<template>
  <div class="default-layout">
    <div v-if="isMobileView" class="header-mobile">
      <slot name="header"/>
      <div class="header-menu-mobile">
        <div><router-link to="/">表紙</router-link></div>
        <div><router-link to="/guide">案内板</router-link></div>
        <div><router-link to="/weblogs">茶飯事</router-link></div>
        <div><router-link to="/contents">瓦落多</router-link></div>
      </div>
    </div>
    <div v-else class="header">気分屋茶飯事 ー <slot name="header"/></div>
    <div class="main">
      <Sidebar v-if="!isMobileView" :type="LayoutType.Default"/>
      <div class="main-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.default-layout {
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
}

.header-mobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  padding-left: 20px;
  min-height: 95px;
  background-image: url("../assets/layout-headerline.png");
  background-size: cover;
}

.header-menu-mobile {
  display: flex;
  flex-direction: row;
  font-size: 0.75em;
  gap: 15px;
  padding-right: 20px;
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
  overflow: hidden;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px;
  overflow-y: auto;
}
</style>