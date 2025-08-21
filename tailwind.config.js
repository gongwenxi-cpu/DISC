/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'disc-d': '#dc2626',
        'disc-i': '#eab308', 
        'disc-s': '#16a34a',
        'disc-c': '#2563eb'
      }
    },
  },
  plugins: [],
} 