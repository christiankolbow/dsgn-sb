import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import storyblok from '@storyblok/astro';
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        portfolioHeader: 'storyblok/PortfolioHeader',
        checkeredRows: 'storyblok/CheckeredRows',
        homeHeader: 'storyblok/HomeHeader',
        portfolioTiles: 'storyblok/PortfolioTiles',
        customers: 'storyblok/Customers',
        aboutMe: 'storyblok/AboutMe',
        contact: 'storyblok/Contact',
        markdown: 'storyblok/Markdown',
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  /*   vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  }, */
});
