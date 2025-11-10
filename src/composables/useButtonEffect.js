import { onMounted } from 'vue'

export function useButtonEffect() {
  onMounted(() => {
    // Primary button effect
    document.querySelectorAll('.primary-btn').forEach((btn) => {
      let span = document.createElement('span')
      span.className = 'primary-btnSpan'
      btn.appendChild(span)

      btn.onmousemove = (event) => {
        let rect = btn.getBoundingClientRect()
        let offsetX = event.clientX - rect.left
        let offsetY = event.clientY - rect.top
        span.style.top = `${offsetY}px`
        span.style.left = `${offsetX}px`
      }
    })

    // Primary button2 effect
    document.querySelectorAll('.primary-btn2').forEach((btn) => {
      let span = document.createElement('span')
      span.className = 'primary-btn2Span'
      btn.appendChild(span)

      btn.onmousemove = (event) => {
        let rect = btn.getBoundingClientRect()
        let offsetX = event.clientX - rect.left
        let offsetY = event.clientY - rect.top
        span.style.top = `${offsetY}px`
        span.style.left = `${offsetX}px`
      }
    })
  })
}


