/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-card": "#20CD8D",
        "custom-ticket-background": "#004238",
        "custom-hover-green": "#18a370"
      },

    },
  },
  plugins: [],
}