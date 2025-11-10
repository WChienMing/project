<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useButtonEffect } from './composables/useButtonEffect'

useButtonEffect()

onMounted(() => {
  document.body.classList.add('loaded')
})
</script>


