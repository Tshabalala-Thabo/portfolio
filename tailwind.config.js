module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        'source-code-pro': ['"Source Code Pro"', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#04A118',
          light: '#05C11D',
          200: '#0E160E',
          100: '#0A100A',
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
    },
  },
  plugins: [],
}