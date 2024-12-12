export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  components: true,
})