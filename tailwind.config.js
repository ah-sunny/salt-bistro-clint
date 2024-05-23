/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero_bg': "url('./src/assets/home/chef-service.jpg')",
        'featured_bg': "url('./src/assets/home/featured.jpg')",
      
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}