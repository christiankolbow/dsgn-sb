import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        header: 'storyblok/Header',
        checkeredRows: 'storyblok/CheckeredRows',
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
