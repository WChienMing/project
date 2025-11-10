<template>
  <section class="pt-120 pb-120 mt-10 mt-lg-0">
    <div class="pb-60">
      <div data-aos="zoom-in" class="page-heading">
        <h3 class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
          {{ project ? project.title : 'Portfolio Detail' }}
        </h3>
      </div>
    </div>
    <div v-if="project" class="container mt-8 mt-md-15 pb-60">
      <div class="row g-6">
        <!-- 左侧侧边栏 -->
        <div data-aos="fade-left" class="col-12 col-xl-3">
          <div class="d-flex flex-column gap-5 position-sticky top-5 brn4 p-3 rounded">
            <div>
              <span class="n4-color fs-eight fw-medium d-block">Services</span>
              <span class="n5-color fs-six fw-medium">{{ project.service || 'Web Development' }}</span>
            </div>
            <div>
              <span class="n4-color fs-eight fw-medium d-block">Technologies</span>
              <span class="n5-color fs-six fw-medium">{{ project.technologies || project.tags.join(', ') }}</span>
            </div>
            <div v-if="project.screenshot">
              <span class="n4-color fs-eight fw-medium d-block">Screenshot</span>
              <a :href="project.screenshot" target="_blank" class="n5-color fs-six fw-medium d-flex align-items-center gap-2">
                View <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>
            <div v-if="project.link">
              <span class="n4-color fs-eight fw-medium d-block">{{ project.linkText || 'Link' }}</span>
              <a :href="project.link" target="_blank" class="n5-color fs-six fw-medium d-flex align-items-center gap-2">
                Live preview <i class="ph-bold ph-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" class="col-12 col-xl-9">
          <div class="project-details-content d-flex flex-column gap-8 gap-md-15">
            <div data-aos="fade-up">
              <h3 class="fs-five n5-color fw-semibold mt-5 mb-2 mb-md-4">
                {{ project.title }}
              </h3>
              <p v-if="project.description" class="text-seven n4-color">
                <b>Project Description:</b> <br>
                {{ project.description }}
              </p>
            </div>
            <div v-if="project.responsibilities && project.responsibilities.length > 0" data-aos="fade-up">
              <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                Responsibility:
              </h2>
              <ul>
                <li 
                  v-for="(responsibility, index) in project.responsibilities" 
                  :key="index"
                  class="n4-color fs-seven mb-2 mb-md-3"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container text-center">
      <p>Not Found</p>
      <router-link :to="{ name: 'Portfolio' }">Back to Portfolio</router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import AOS from 'aos'
import { onMounted } from 'vue'

const route = useRoute()
const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

onMounted(() => {
  AOS.refresh()
})
</script>




