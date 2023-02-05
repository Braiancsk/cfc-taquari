/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding:'30px'
      },
      colors: {
        'primary': '#FFB804',
        'secondary': '#720285',
        'title': '#1B1B1B',
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
