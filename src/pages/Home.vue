<script setup lang="ts"></script>

<template>
  <div class="home">
    <div class="menu-header">気分屋茶飯事</div>
    <div><router-link to="/guide" class="menu-items">案内板</router-link></div>
    <div>
      <router-link to="/weblogs" class="menu-items">茶飯事</router-link>
    </div>
    <div>
      <router-link to="/contents" class="menu-items">瓦落多</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  color: #a24747;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/situgaiki.gif');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

a:link,
a:visited {
  color: #a24747;
}
a:hover,
a:active {
  color: #d3cbc0;
}

.menu-header {
  margin-top: 5vh;
  margin-left: 53px;
  font-size: 2.5em;
}

.menu-items {
  display: inline-block;
  margin-top: 1vh;
  margin-left: 55px;
  font-size: 1.8em;
  text-decoration: none;
}
</style>
