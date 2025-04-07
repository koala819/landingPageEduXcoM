// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import favicons from 'astro-favicons';

// https://astro.build/config
export default defineConfig({
  site: 'https://landing-page-edu-x-com.vercel.app/',
  integrations: [react(), favicons()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['framer-motion'],
    },
  },
  base: '/',
  trailingSlash: 'always',
});
