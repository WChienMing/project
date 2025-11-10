<template>
  <section class="pt-120 pb-120 mt-10 mt-lg-0">
    <div class="pb-60 br-bottom-n3">
      <div data-aos="zoom-in" class="page-heading">
        <h3 class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
          Online Resume
        </h3>
        <a 
          :href="resumePdfUrl" 
          class="w-max primary-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto" 
          download="Woo Chien Ming Resume.pdf"
          type="application/pdf"
        >
          <i class="ph ph-file-pdf"></i>Download PDF Version
        </a>
      </div>
    </div>
    <div class="container mt-8 mt-md-15">
      <div data-aos="fade-up" class="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
        <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
          <div>
            <h2 class="display-three p1-color fw-semibold">
              Woo Chien Ming
            </h2>
            <span class="n4-color fs-six fw-medium">Backend PHP Developer</span>
          </div>
          <div class="ps-5 br-left-n3">
            <ul class="d-flex flex-column gap-3">
              <li>
                <a href="tel:+60162637936" class="d-flex gap-2 align-items-center n4-color">
                  <i class="ph ph-phone"></i>+60162637936
                </a>
              </li>
              <li>
                <a href="mailto:chien321ming@hotmail.com" class="d-flex gap-2 align-items-center n4-color">
                  <i class="ph ph-envelope-simple"></i>chien321ming@hotmail.com
                </a>
              </li>
              <li class="d-flex gap-2 align-items-center n4-color">
                <i class="ph ph-map-pin"></i>Taman Sri Sinar, Kuala Lumber
              </li>
            </ul>
          </div>
        </div>
        <div class="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
          <div class="resume-profile flex-shrink-0">
            <img :src="`${baseUrl}img/profile.png`" alt="profile" class="object-fit-cover" width="127" height="159" />
          </div>
          <p class="n42-color fs-seven">
            With years of experience in web system development, proficient in PHP, JavaScript, and MySQL, and familiar with frameworks such as Laravel, CodeIgniter, and ThinkPHP. Experienced in integrating payment APIs, capable of developing stable and practical systems based on requirements, with a strong focus on code quality and performance optimization, while continuously improving technical skills.
          </p>
        </div>
        <div class="resume-section row g-6 pt-60 pb-60 br-bottom-n3">
          <div class="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
            <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
              <div class="title-line2"></div>
              <h2 class="fs-three p1-color fw-semibold">
                Work Experiences
              </h2>
            </div>
            <div class="mb-4 mb-md-6">
              <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                <span class="n5-color fs-six fw-medium">Backend PHP Programmer</span>
                <span class="n4-color fs-eight">Webify Network Sdn Bhd | 2021 November - Currently</span>
              </div>
              <p class="n42-color fs-seven my-2 my-md-5">Job Responsibilities:</p>
              <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 my-md-5">
                <li class="n42-color fs-seven">
                  Create website layout & user interface by using HTML/CSS/JS/ Jquery/ Bootstrap practices.
                </li>
                <li class="n42-color fs-seven">
                  Create website interface and responsive.
                </li>
                <li class="n42-color fs-seven">
                  Use vuejs develop webside interface and docking API.
                </li>
                <li class="n42-color fs-seven">
                  Use php and js create API.
                </li>
                <li class="n42-color fs-seven">
                  Use Thinkphp framework development function.
                </li>
                <li class="n42-color fs-seven">
                  Testing, implementation and maintenance aspects.
                </li>
              </ul>
            </div>
            <div class="mb-4 mb-md-6">
              <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                <span class="n5-color fs-six fw-medium">Junior Full Stack Developer</span>
                <span class="n4-color fs-eight">Flow Digital | 2021 May - 2021 September</span>
              </div>
              <p class="n42-color fs-seven my-2 my-md-5">Job Responsibilities:</p>
              <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 my-md-5">
                <li class="n42-color fs-seven">
                  Create website layout & user interface by using HTML/CSS/JS/ Jquery/ Bootstrap practices
                </li>
                <li class="n42-color fs-seven">
                  Use wordpress create client website interface.
                </li>
                <li class="n42-color fs-seven">
                  Use laravel framework create website interface
                </li>
                <li class="n42-color fs-seven">
                  Create website responsive.
                </li>
                <li class="n42-color fs-seven">
                  Development, testing, implementation and maintenance aspects.
                </li>
                <li class="n42-color fs-seven">
                  Add new features as requested by customers.
                </li>
              </ul>
            </div>
            <div class="mb-4 mb-md-6">
              <div class="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                <span class="n5-color fs-six fw-medium">Junior PHP Developer</span>
                <span class="n4-color fs-eight">Yelaoshr® HQ | 2019 February - 2021 April</span>
              </div>
              <p class="n42-color fs-seven my-2 my-md-5">Job Responsibilities:</p>
              <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10 my-md-5">
                <li class="n42-color fs-seven">
                  Create website layout & user interface by using HTML/CSS practices.
                </li>
                <li class="n42-color fs-seven">
                  Development, testing, implementation and maintenance aspects.
                </li>
                <li class="n42-color fs-seven">
                  Add and write new system features.
                </li>
                <li class="n42-color fs-seven">
                  Use php and js create API.
                </li>
                <li class="n42-color fs-seven">
                  Assist users in solving problems encountered by users.
                </li>
                <li class="n42-color fs-seven">
                  Repair computer hardware and softwareMonitor and maintain brand consistency across all marketing channels and materials.
                </li>
              </ul>
            </div>
          </div>
          <!-- right side  -->
          <div class="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
            <div class="ps-4 ps-xxl-7 br-left-n3 d-flex flex-column gap-8 gap-md-15">
              <!-- skills  -->
              <div>
                <div class="d-flex align-items-center gap-2 mb-5 mb-md-10">
                  <div class="title-line2"></div>
                  <h2 class="fs-three p1-color fw-semibold">Skills</h2>
                </div>
                <div class="mb-3 mb-md-6">
                  <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                    Technical
                  </h5>
                  <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                    <li class="n4-color fs-seven">PHP</li>
                    <li class="n4-color fs-seven">JavaScript</li>
                    <li class="n4-color fs-seven">MySQL</li>
                    <li class="n4-color fs-seven">HTML/CSS</li>
                  </ul>
                </div>
                <div class="mb-3 mb-md-6">
                  <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                    Framework
                  </h5>
                  <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                    <li class="n4-color fs-seven">Codeigniter</li>
                    <li class="n4-color fs-seven">Thinkphp</li>
                    <li class="n4-color fs-seven">Laravel</li>
                    <li class="n4-color fs-seven">VueJS</li>
                  </ul>
                </div>
                <div>
                  <h5 class="fs-six n5-color fw-medium mb-2 mb-md-4">
                    Tool
                  </h5>
                  <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                    <li class="n4-color fs-seven">GitHub</li>
                    <li class="n4-color fs-seven">Visual Studio Code</li>
                    <li class="n4-color fs-seven">WampServer</li>
                    <li class="n4-color fs-seven">Postman (API testing tool)</li>
                  </ul>
                </div>
              </div>
              <!-- education  -->
              <div>
                <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                  <div class="title-line2"></div>
                  <h2 class="fs-three p1-color fw-semibold">Education</h2>
                </div>
                <div class="d-flex gap-2 mb-3 mb-md-5">
                  <i class="ph ph-graduation-cap fs-six p1-color"></i>
                  <div>
                    <span class="n4-color fs-seven">BSc (Hons) Computing in Wrexham Glyndwr University</span>
                    <span class="n4-color fs-eleven">2022 - 2023</span>
                  </div>
                </div>
                <div class="d-flex gap-2">
                  <i class="ph ph-graduation-cap fs-six p1-color"></i>
                  <div>
                    <span class="n4-color fs-seven"> Advanced Diploma in Software Engineering & Mobile Application Development
                      (SEMD), West College Scotland (UK)</span>
                    <span class="n4-color fs-eleven">2017 - 2019</span>
                  </div>
                </div>
              </div>
              <!-- Languages  -->
              <div>
                <div class="d-flex align-items-center gap-2 mb-3 mb-md-6">
                  <div class="title-line2"></div>
                  <h2 class="fs-three p1-color fw-semibold">Languages</h2>
                </div>
                <ul class="d-flex flex-column gap-3 ms-6 ms-lg-10">
                  <li class="n4-color fs-seven">Cantonese (Fluent)</li>
                  <li class="n4-color fs-seven">Mandarin (Fluent)</li>
                  <li class="n4-color fs-seven">Malay (Basics)</li>
                  <li class="n4-color fs-seven">English (Basics)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import AOS from 'aos'

const baseUrl = import.meta.env.BASE_URL
const resumePdfUrl = computed(() => {
  return `${baseUrl}Woo Chien Ming Resume.pdf`
})

onMounted(() => {
  AOS.refresh()
})
</script>




