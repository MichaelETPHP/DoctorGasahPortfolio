/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e1ebff',
          200: '#c3d8ff',
          300: '#a4c0ff',
          400: '#819dff',
          500: '#5d7afc',
          600: '#3b57f5',
          700: '#2c42db',
          800: '#2537b1',
          900: '#20318a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
