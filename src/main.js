import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../assets/css/style.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

// 添加 body 样式
const style = document.createElement('style')
style.textContent = `
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    body {
      display: block;
      justify-content: unset;
      align-items: unset;
      min-height: auto;
    }
  }
`
document.head.appendChild(style)

const app = createApp(App)

app.use(router)

// 初始化 AOS
app.mount('#app')

// 等待 DOM 加载完成后初始化 AOS
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      offset: 120,
      duration: 800,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom',
      once: true,
    })
  })
} else {
  AOS.init({
    offset: 120,
    duration: 800,
    easing: 'ease-in-out',
    anchorPlacement: 'top-bottom',
    once: true,
  })
}


