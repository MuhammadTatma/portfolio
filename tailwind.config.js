/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#1e266d',
        paragraph: '#515867'
      },
      screen: {
        '2xl': '1320px'
      },
      backgroundImage: {
        'hero-pattern': "url('dist/images/hero-background.png')",
        'skill-pattern': "url('dist/images/skill-background.png')",
      }
    },
  },
  plugins: [],
}

