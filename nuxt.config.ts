import { defineNuxtConfig } from 'nuxt';
import presetIcons from "@unocss/preset-icons";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', "@unocss/nuxt", "@nuxtjs/color-mode"],
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },
  build: {
    transpile: ["@headlessui/vue"],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: "inline-block",
        },
      }),
    ],
    safelist: ["i-twemoji-flag-us-outlying-islands", "i-twemoji-flag-spain"],
  },
  colorMode: {
    classSuffix: "",
    fallback: "light",
    storageKey: "color-mode",
  },
})