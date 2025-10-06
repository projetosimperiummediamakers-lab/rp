/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple-extralight': '#f3e8ff',
        'brand-purple-light': '#e9d5ff',
        'brand-purple': '#7e22ce',
        'brand-purple-dark': '#581c87',
        'brand-yellow': '#fde047',
        'brand-yellow-dark': '#facc15',
        'brand-gray': '#4b5563',
        'brand-gray-light': '#f3f4f6',
        'brand-gray-dark': '#1f2937',
      },
    },
  },
  plugins: [],
}
