<template>
  {{ msg }}
  <div class="text-purple-500	">hello word!</div>
  <el-button type="primary">Primary</el-button>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
let msg = ref("hello word!")
</script>

<style scoped>

</style>