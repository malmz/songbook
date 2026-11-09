// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://songs.databladet.se",
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
