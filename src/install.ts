import type { App } from 'vue'
import Motion from '@/components/Motion.vue'

export function install(app: App) {
  app.component(Motion.name!, Motion)
}
