/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'subtle-zoom': 'subtle-zoom 20s ease-in-out infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        'subtle-zoom': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
};


