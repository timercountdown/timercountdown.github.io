// tailwind.config.js - 使用 CommonJS 语法
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff',
        secondary: '#e5e5e5',
        background: '#f7f9fc',
        card: '#ffffff',
        text: {
          primary: '#2b2d42',
          secondary: '#555555',
          muted: '#777777'
        }
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace']
      }
    }
  },
  plugins: [],
};