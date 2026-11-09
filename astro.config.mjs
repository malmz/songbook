// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import { repris } from "./src/markdown/repris.ts";

// https://astro.build/config
export default defineConfig({
  site: "https://songs.databladet.se",
  markdown: {
    processor: satteri({
      features: { directive: true },
      mdastPlugins: [repris],
    }),
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Serif",
      cssVariable: "--font-ibm-plex-serif",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Literata",
      cssVariable: "--font-literata",
      weights: ["200 900"],
      styles: ["normal", "italic"],
    },
  ],
});
