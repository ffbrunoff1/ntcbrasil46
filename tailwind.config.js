/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#5CAAE0', // Vivid light blue from logo
        'brand-secondary': '#2E86C1', // A darker, complementary blue
        'brand-light': '#F0F8FF', // AliceBlue, very light for backgrounds
        'brand-dark': '#0D2F4B', // A very dark blue for text
        'brand-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px -5px rgba(92, 170, 224, 0.1), 0 8px 10px -6px rgba(92, 170, 224, 0.1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
