// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/adam-eats/",
    buildAssetsDir: "assets",
  },
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
  nitro: {
    baseURL: "/adam-eats/",
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  modules: [
    "nuxt-icon",
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
