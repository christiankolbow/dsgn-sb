/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        default: '#707070',
        primary: '#FA6E68',
        'primary-light': '#FFA190',
        light: '#F9F5F4',
        footer: '#D18C85B4',
        form: '#A7A7A7',
      },
      fontFamily: {
        clanBook: ['Clan-Book', 'sans-serif'],
        clanMedium: ['Clan-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
