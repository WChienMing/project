<template>
  <div class="side-menu" :class="{ active: isSidebarOpen }">
    <div class="sidebar-btn close-btn cursor-pointer d-block d-lg-none" @click="toggleSidebar">
      <i class="ph ph-x fs-two p1-color"></i>
    </div>
    <div class="d-flex">
      <div class="side-menu-left">
        <div>
          <div class="d-flex flex-column gap-8 justify-content-center align-items-center mt-6">
            <router-link :to="{ name: 'Resume' }" class="side-icon bgn2-color brn4">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                <g clip-path="url(#clip0_3569_434)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.69145 8.43063L1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L5.69145 10.9887V8.43063Z" fill="rgba(var(--p1))" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L1.72801 5.49387Z" fill="rgba(var(--p1))" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86328 6.5702L8.82672 9.5065L4.86328 12.4606V15.0004L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z" fill="rgba(var(--p1))" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86328 6.5702L8.82672 9.5065L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z" fill="rgba(var(--p1))" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72466 2.00391C9.52091 2.00391 10.1657 2.64912 10.1657 3.44491C10.1657 4.24115 9.52091 4.88591 8.72466 4.88591C7.92841 4.88591 7.2832 4.2407 7.2832 3.44491C7.2832 2.64912 7.92841 2.00391 8.72466 2.00391Z" fill="rgba(var(--p1))" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.83013 12.9972C1.03388 12.9972 0.388672 12.352 0.388672 11.5562C0.388672 10.7604 1.03388 10.1152 1.82967 10.1152C2.62546 10.1152 3.27067 10.76 3.27067 11.5562C3.27067 12.3525 2.62592 12.9972 1.82967 12.9972H1.83013Z" fill="rgba(var(--p1))" />
                </g>
                <defs>
                  <clipPath>
                    <rect width="10.5561" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </router-link>
            <div class="d-flex flex-column align-items-center gap-1">
              <span class="toggle_name fs-eleven n5-color">{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
              <button class="side-icon bg1-color mood_toggle" @click="toggleDarkMode">
                <i :class="['mood_icon', 'ph-fill', isDarkMode ? 'ph-sun' : 'ph-moon', 'fs-six', 'n11-color']"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="side-menu-right overflow-y-auto">
        <div class="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
          <div class="">
            <div class="sidebar-profile">
              <div class="position-relative">
                <div class="profile-img1 d-flex justify-content-center overflow-hidden">
                  <img :src="`${baseUrl}img/profile.png`" alt="user" class="" />
                </div>
                <span class="thumb">👋</span>
              </div>
              <h4 class="n5-color fw-semibold fs-five mt-2 text-center">
                Chien Ming Woo
              </h4>
              <span class="n5-color fs-nine d-block text-center">Backend PHP Developer</span>
            </div>
            <div class="line-divider my-4 my-md-8"></div>
            <div class="menu-list">
              <ul class="d-flex flex-column gap-3">
                <li :class="['rounded-3', { 'bg1-color': $route.name === 'Resume' }]">
                  <router-link 
                    :to="{ name: 'Resume' }" 
                    :class="['d-flex', 'align-items-center', 'gap-2', 'fs-eight', 'px-3', 'py-2', 
                      $route.name === 'Resume' ? 'n11-color' : 'n5-color'
                    ]"
                  >
                    <i class="ph ph-notebook fs-six"></i>Resume
                  </router-link>
                </li>
                <li :class="['rounded-3', { 'bg1-color': $route.name === 'Portfolio' || $route.name === 'PortfolioDetail' }]">
                  <router-link 
                    :to="{ name: 'Portfolio' }" 
                    :class="['d-flex', 'align-items-center', 'gap-2', 'fs-eight', 'px-3', 'py-2',
                      ($route.name === 'Portfolio' || $route.name === 'PortfolioDetail') ? 'n11-color' : 'n5-color'
                    ]"
                  >
                    <i class="ph ph-code-block fs-six"></i> Portfolio
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode, toggleDarkMode } = useTheme()
const baseUrl = import.meta.env.BASE_URL
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

let handleClickOutside = null

onMounted(() => {
  handleClickOutside = (e) => {
    const sideMenu = document.querySelector('.side-menu')
    if (sideMenu && !sideMenu.contains(e.target) && !e.target.closest('.sidebar-btn')) {
      isSidebarOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (handleClickOutside) {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

