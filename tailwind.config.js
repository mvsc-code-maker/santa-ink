/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        'ink-black': '#0a0a0a',
        'ink-gray': '#1a1a1a',
        'ink-light': '#f5f5f5',
      }
    }
  },
  plugins: [],
}
