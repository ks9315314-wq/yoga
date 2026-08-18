/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#faf8f4',
          100: '#f4efe6',
          200: '#e8dfce',
          300: '#d8c9ad',
          400: '#c4ad8a',
          500: '#b3956c',
          600: '#a07d57',
          700: '#86664a',
          800: '#6f5641',
          900: '#5d4838',
          950: '#33271d',
        },
        sage: {
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#d2dccf',
          300: '#adc3a7',
          400: '#84a37c',
          500: '#638660',
          600: '#4d6b4b',
          700: '#3f5640',
          800: '#364738',
          900: '#2f3c31',
          950: '#1a211b',
        },
        clay: {
          50: '#fbf3ef',
          100: '#f6e3da',
          200: '#edc6b6',
          300: '#e0a087',
          400: '#d17a55',
          500: '#c25f3a',
          600: '#ac4d2d',
          700: '#8f3c27',
          800: '#753326',
          900: '#612d25',
          950: '#351611',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1.2s ease-out forwards',
        'slow-zoom': 'slow-zoom 20s ease-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
