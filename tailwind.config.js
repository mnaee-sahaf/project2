/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], //tells me where tailwind needs to look for calssnames
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small screen breakpoint
      },
      animation: {
        marquee: 'marquee 40s linear infinite',  // 👈 Defines marquee animation
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(-200%)' },  // 👈 Starts from right
          to: { transform: 'translateX(200%)' },   // 👈 Moves to left
        },
      },
    }, //placeholder for custom styles
  },
  plugins: [], 
};

