/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#663399',   // Morado
        secondary: '#191A23', // Negro oscuro
        tertiary: '#F3F3F3',  // Gris claro
        textPurple: '#E6CDF8', // Púrpura claro para texto
      },
    },
  },
  plugins: [],
};
