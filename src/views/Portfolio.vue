<template>
  <section class="pt-120 pb-120 mt-10 mt-lg-0">
    <div class="pb-60 br-bottom-n3">
      <div data-aos="zoom-in" class="page-heading">
        <h3 class="page-title n5-color fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
          Portfolio
        </h3>
      </div>
    </div>
    <div class="container mt-8 mt-md-15">
      <div>
        <ul 
          data-aos="zoom-in" 
          data-aos-duration="800" 
          class="tabs d-flex gap-3 gap-md-6 justify-content-center flex-wrap p-2 pb-5 pb-md-10"
        >
          <li 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['fs-seven', 'fw-medium', 'cursor-pointer', 'n3-color', 'pb-1', 'tab', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            {{ tab.label }}
          </li>
        </ul>
        <div class="tab-content position-relative overflow-hidden">
          <div 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['tab-panel', { active: activeTab === tab.id }]"
          >
            <div class="row g-6 g-md-8">
              <div 
                v-for="project in getProjectsByTab(tab.id)" 
                :key="project.id"
                class="col-xl-6"
              >
                <div class="project-card">
                  <router-link :to="{ name: 'PortfolioDetail', params: { id: project.id } }" class="thumb d-block">
                    <img :src="project.image" :alt="project.title" class="w-100 p-2" />
                  </router-link>
                  <div class="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                      <div class="d-flex gap-2 align-items-center">
                        <a 
                          v-for="tag in project.tags" 
                          :key="tag"
                          href="javascript:void(0)" 
                          class="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                        >
                          {{ tag }}
                        </a>
                      </div>
                      <router-link 
                        :to="{ name: 'PortfolioDetail', params: { id: project.id } }" 
                        class="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                      >
                        {{ project.title }}
                      </router-link>
                    </div>
                    <router-link 
                      :to="{ name: 'PortfolioDetail', params: { id: project.id } }" 
                      class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                    >
                      <i class="ph-bold ph-arrow-up-right n5-color"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import { projects } from '../data/projects'

const tabs = [
  { id: 'to2024', label: '2024' },
  { id: 'to2223', label: '2022 - 2023' },
  { id: 'to1921', label: '2019 - 2021' }
]

const activeTab = ref('to2024')

const getProjectsByTab = (tabId) => {
  return projects.filter(project => project.year === tabId)
}

onMounted(() => {
  AOS.refresh()
})
</script>

<style scoped>
.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}
</style>




