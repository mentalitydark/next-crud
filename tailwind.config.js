/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^bg-/,
      variants: ['hover']
    }
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
