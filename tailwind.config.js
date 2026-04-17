/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0C0C0C',
        surface: '#111111',
        elevated: '#161616',
        'text-primary': '#E8E4DF',
        red: {
          brand: '#CC2200',
          deep: '#C41A00',
        },
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", 'Helvetica Neue', 'sans-serif'],
        body: ["'EB Garamond'", 'Georgia', 'serif'],
        mono: ["'JetBrains Mono'", 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
