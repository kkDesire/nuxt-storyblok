// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/main.css"],
  modules:  [
    [
      "@storyblok/nuxt", 
      {
        accessToken: "YQGOSs9WfsSPCYKBoyUATQtt",
        apiOptions:{
          region: "ci",
        }
      },
    ]
  ],
  devtools: { enabled: true }
})
