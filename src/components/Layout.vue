<template>
  <div class="layout-wrapper">
    <Sidebar />
    <MobileHeader />
    <MobileBottomMenu />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import MobileHeader from './MobileHeader.vue'
import MobileBottomMenu from './MobileBottomMenu.vue'
</script>


