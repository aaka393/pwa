// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          Default: '#030712',
          light: '#3B82F6',
          dark: '#1f2937'
        },
        secondary: {
          Default: '#fafafa',
          light: '#fff000',
          dark: '#B45309'
        }
      },
      animation: {
        slideInFromRight: 'slideInFromRight 0.5s ease-in-out',
        slideInFromBottom: 'slideInFromBottom 0.5s ease-in-out',
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
