<script setup lang="ts">

</script>

<template>
  <div class="sidebar">
    <div><router-link to="/" class="menu-items">戻る</router-link></div>
    <div><router-link to="/guide" class="menu-items">案内板</router-link></div>
    <div><router-link to="/sub" class="menu-items">茶飯事</router-link></div>
    <div><router-link to="/sub" class="menu-items">瓦落多</router-link></div>
    <div class="menu-bottom-line">　</div>
  </div>
</template>

<style scoped>
.sidebar {
  font-size: 1.2em;
  min-width: 215px;
  background-image: url("../assets/defaultlayout-sidebarline.png");
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
}

.menu-items {
  padding-left: 35px;
}

.menu-bottom-line {
  font-size: 10px;
  margin-top: 1px;
  background-image: url("../assets/defaultlayout-sidebarline-bottom.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>