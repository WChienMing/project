<template>
  <div class="color-switcher" :class="{ opened: isOpen }">
    <button class="color-switcher-btn" @click="toggleColorSwitcher">
      <i class="ph ph-palette"></i>
    </button>
    <div class="color-switcher-content">
      <h4>Choose Color</h4>
      <div class="color-options">
        <button
          v-for="color in colors"
          :key="color.value"
          :class="['color-btn', { active: currentColor === color.value }]"
          :style="{ backgroundColor: color.value }"
          @click="setColor(color.value)"
          :data-color="color.value"
        >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)
const currentColor = ref('#6366f1')

const colors = [
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' }
]

const toggleColorSwitcher = () => {
  isOpen.value = !isOpen.value
}

const setColor = (color) => {
  currentColor.value = color
  document.documentElement.style.setProperty('--p1', color)
  localStorage.setItem('primary-color', color)
}

onMounted(() => {
  const savedColor = localStorage.getItem('primary-color')
  if (savedColor) {
    currentColor.value = savedColor
    document.documentElement.style.setProperty('--p1', savedColor)
  }
})
</script>


