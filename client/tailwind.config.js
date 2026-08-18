/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f5',
          100: '#e1f0eb',
          200: '#c4e2d7',
          300: '#98ccbc',
          400: '#64af9c',
          500: '#3e927f',
          600: '#2b7465',
          700: '#215c51',
          800: '#1c4a42',
          900: '#0f3830', // Deep Forest Emerald
          950: '#07201c',
        },
        cream: {
          50: '#fcfcfb',
          100: '#f9f8f6',
          200: '#f4f3ee',
          300: '#eae7df',
          400: '#d8d2c6',
          500: '#c2baa9',
        },
        sand: {
          100: '#FAF8F5',
          200: '#F0ECE1',
          300: '#DFD8C8',
          400: '#C7BCA6',
          500: '#AFA087',
        },
        charcoal: {
          800: '#2C302E',
          900: '#191C1B',
          950: '#111313',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 56, 48, 0.07)',
        'luxury-lg': '0 30px 60px -15px rgba(15, 56, 48, 0.12)',
        'pill': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
