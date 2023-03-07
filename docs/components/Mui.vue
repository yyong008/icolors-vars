<template>
  <div v-for="(value, key, index) in systemColors">
    <h1 class="theme-colors">{{ key }}</h1>
    <div class="level-color">
      <div class="color-wrap" v-for="(v, k, idx) in value" :key="key">
        <Colors :color="v" :key="k" :weight="k.slice(key.length)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Colors from './colors.vue'
import { systemColors } from '../../src/material-ui/colors'
</script>

<style>
.level-color {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.theme-colors {
  padding: 0px 0px 20px 0px;
}
.color-wrap {
  margin-right: 10px;
}
</style>
