export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_global.scss" as *;',
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
});
