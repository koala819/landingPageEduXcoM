// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://landing-page-edu-x-com.vercel.app/',
  base: '/',
  trailingSlash: 'always',
  integrations: [react(), favicons()],
});