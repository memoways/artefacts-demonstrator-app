/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whale-skin': '#515792',
        'dark-knight': '#171A2F',
        'royal-curtsy': '#262845',
        'autumn-landscape': '#E27227',
        'pizazz': '#E58441',
        'skyline': '#989AB8',
        'desert-field': '#EFCFB7',
        'coast-cream': '#F7E7DB',
      },
      fontFamily: {
        headings: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
