// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  nitro: { prerender: { failOnError: false } },
  ssr: false,
  devtools: { enabled: true },
  css: [`assets/css/main.css`],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ["store"],
  },
  modules: [
    ["nuxt-icon"],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: [300, 400, 700],
        },
      },
    ],
  ],
});
