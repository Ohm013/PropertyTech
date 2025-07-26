/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        accent: '#2563EB', // Electric blue
        background: '#F9FAFB', // Light gray
        text: '#64748B', // Slate
      },
    },
  },
  plugins: [],
};
