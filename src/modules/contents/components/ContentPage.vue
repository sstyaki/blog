<script setup lang="ts">
import { ImageInfo } from '../constants/imageInfo'
import Toggle from '../../../components/Toggle.vue'
import { ref } from 'vue'

interface Props {
  invalidDescriptionToggle?: boolean | undefined
  invalidDate?: boolean | undefined
  imageInfos: ImageInfo[]
  yearMonth: string
  nextPage?: string | undefined
  prevPage?: string | undefined
}
const props = withDefaults(defineProps<Props>(), {})
const dynamicImageURL = (fileName: string) => {
  return new URL(`../assets/${fileName}`, import.meta.url).href
}

const showDescription = ref(!props.invalidDescriptionToggle)
const handleToggleOn = () => {
  showDescription.value = true
}
const handleToggleOff = () => {
  showDescription.value = false
}
</script>

<template>
  <Toggle
    v-if="!invalidDescriptionToggle"
    @toggle-on="handleToggleOn()"
    @toggle-off="handleToggleOff()"
    >… 説明 {{ showDescription ? 'ON' : 'OFF' }}</Toggle
  >

  <div
    v-for="imageInfo in imageInfos"
    :key="imageInfo.value.filename"
    class="image-info"
  >
    <div v-if="!invalidDate">
      <div v-if="imageInfo.value.month == null">
        {{ yearMonth }}/{{ imageInfo.value.date }}
      </div>
      <div v-else>
        {{ yearMonth.slice(0, 4) }}/{{ imageInfo.value.month }}/{{
          imageInfo.value.date
        }}
      </div>
    </div>

    <div class="image-name">{{ imageInfo.value.title }}</div>

    <img
      :src="dynamicImageURL(imageInfo.value.filename)"
      :alt="imageInfo.value.title + 'の画像'"
      class="image"
    />

    <template v-if="showDescription">
      <div
        v-for="(description, index) in imageInfo.value.descriptions"
        :key="index"
      >
        {{ description }}
      </div>
    </template>
  </div>

  <div class="pagination-menu">
    <div v-if="prevPage"><router-link :to="prevPage">前</router-link></div>
    <div v-else>　</div>
    <div>|</div>
    <div v-if="nextPage"><router-link :to="nextPage">次</router-link></div>
    <div v-else>　</div>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  max-width: 900px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.image-name {
  margin-left: 15px;
}

.image-info {
  margin-bottom: 90px;
}

.pagination-menu {
  gap: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
