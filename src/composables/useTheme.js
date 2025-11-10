import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  const isDarkMode = ref(false)

  const updateUI = (dark) => {
    const body = document.querySelector('body')
    if (body) {
      body.classList.toggle('dark', dark)
    }
  }

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('mode', isDarkMode.value ? 'dark' : 'light')
    updateUI(isDarkMode.value)
  }

  onMounted(() => {
    const savedMode = localStorage.getItem('mode') || 'light'
    isDarkMode.value = savedMode === 'dark'
    updateUI(isDarkMode.value)
  })

  watch(isDarkMode, (newVal) => {
    updateUI(newVal)
  })

  return {
    isDarkMode,
    toggleDarkMode
  }
}


