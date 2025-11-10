<template>
  <div class="w-100 bgn1-color p-3 position-fixed z-3 bottom-0 d-block d-lg-none br-top-n5 box-shadow1">
    <div class="header-bottom-menu w-full">
      <ul class="d-flex gap-1 align-items-center justify-content-between">
        <li :class="['rounded-3', { 'bg1-color': $route.name === 'Resume' }]">
          <router-link 
            :to="{ name: 'Resume' }" 
            :class="['d-flex', 'align-items-center', 'gap-2', 'fs-eight', 'p-2',
              $route.name === 'Resume' ? 'n11-color' : 'n5-color'
            ]"
            style="text-decoration: none;"
          >
            <span class="fs-five d-flex align-items-center justify-content-center">
              <i class="ph-fill ph-notebook fs-six"></i>
            </span>
            <span class="d-none d-md-block">Resume</span>
          </router-link>
        </li>
        <li :class="['rounded-3', { 'bg1-color': $route.name === 'Portfolio' || $route.name === 'PortfolioDetail' }]">
          <router-link 
            :to="{ name: 'Portfolio' }" 
            :class="['d-flex', 'align-items-center', 'gap-2', 'fs-eight', 'p-2',
              ($route.name === 'Portfolio' || $route.name === 'PortfolioDetail') ? 'n11-color' : 'n5-color'
            ]"
            style="text-decoration: none;"
          >
            <span class="fs-five d-flex align-items-center justify-content-center">
              <i class="ph-fill ph-code-block"></i>
            </span>
            <span class="d-none d-md-block">Portfolio</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>




