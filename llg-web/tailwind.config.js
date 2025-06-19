/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Usar clase para modo oscuro
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores institucionales
        primary: {
          50: '#eef4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a5b8fd',
          400: '#8190f9',
          500: '#6469f3',
          600: '#4f3ee5',
          700: '#3f2dc9',
          800: '#2f24a3',
          900: '#1e1766',
          DEFAULT: '#155dfc', // 21, 93, 252
        },
        secondary: {
          50: '#fffce5',
          100: '#fff8cc',
          200: '#fff199',
          300: '#ffea66',
          400: '#ffe333',
          500: '#ffdc00',
          600: '#ccb000',
          700: '#998400',
          800: '#665800',
          900: '#332c00',
          DEFAULT: '#fdc700', // 253, 199, 0
        },
        // Colores para modo claro
        light: {
          text: '#0a0a0a', // Texto principal
          'text-secondary': '#fdc700', // Texto secundario
          bg: '#ffffff', // Fondo
          card: '#f8fafc', // Tarjetas y paneles
        },
        // Colores para modo oscuro
        dark: {
          text: '#ffffff', // Texto principal
          'text-secondary': '#fdc700', // Texto secundario
          bg: '#101828', // Fondo
          card: '#1e2939', // Tarjetas y paneles
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
