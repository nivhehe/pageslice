// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pageslice.online',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://pageslice.online/404/' && page !== 'https://pageslice.online/500/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

