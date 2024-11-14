import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vue Motion',
  description: 'Dedicated to building the most comprehensive and widely-used dynamic effects library in the Vue ecosystem.',
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/litingyes/vue-motion' },
    ],
    search: {
      provider: 'local',
    },
  },
})
