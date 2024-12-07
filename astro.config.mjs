// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import vuetifyPlugin from "vite-plugin-vuetify";

//Astro integration for Vuetify
function vuetify() {
  return {
    name: "my-astro-vuetify-integration",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          vite: {
            ssr: {
              noExternal: ["vuetify"],
            },
            plugins: [vuetifyPlugin()],
          },
        });
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      appEntrypoint: "/src/_app",
    }),
    vuetify(),
    tailwind(),
  ],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
});
