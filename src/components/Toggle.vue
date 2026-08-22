<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['toggle-on', 'toggle-off'])
const value = ref(true)

const toggleOff = () => {
  emit('toggle-off')
  value.value = false
}

const toggleOn = () => {
  emit('toggle-on')
  value.value = true
}
</script>

<template>
  <div class="toggle-body">
    <img
      v-if="value"
      @click="toggleOff"
      class="toggle"
      src="../assets/toggle-on.png"
      alt="toggle-on"
    />
    <img
      v-else
      @click="toggleOn"
      class="toggle"
      src="../assets/toggle-off.png"
      alt="toggle-off"
    />
    <slot />
  </div>
</template>

<style scoped>
.toggle-body {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}
.toggle {
  height: 35px;
  width: 160px;
}
</style>
