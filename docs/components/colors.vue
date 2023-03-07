<template>
  <div class="box-container" @click="handleClick">
    <div class="box" :style="{ backgroundColor: props.color }"></div>
    <div class="color-txt">{{ props.color }}</div>
    <div class="color-txt">{{ props.weight }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  color: string,
  weight: string
}>()
const handleClick = () => {
  alert(props.color)
}
</script>

<style>
.box-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.box {
  width: 80px;
  height: 80px;
}

.box:hover {
  transform: translateY(-10px);
}

.color-txt {
  font-size: 10px;
}
</style>
