// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import favicons from 'astro-favicons';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://landing-page-edu-x-com.vercel.app/',
  integrations: [favicons(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  base: '/',
  trailingSlash: 'always',
});