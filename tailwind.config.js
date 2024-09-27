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
          100: '#0C1D0C',
          200: '#0B120B',
        },
        glass: {
          DEFAULT: '#0A100A',
          light: '#00FF00',
          100: '#00FF00',
          200: '#00FF00',
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