/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SFB', 'Switzer', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: 'rgb(230, 240, 255)',    // lightest blue
          100: 'rgb(204, 220, 255)',
          200: 'rgb(153, 183, 255)',
          300: 'rgb(102, 146, 255)',
          400: 'rgb(51, 110, 255)',
          500: 'rgb(0, 71, 186)',      // main blue
          600: 'rgb(0, 64, 167)',
          700: 'rgb(0, 54, 138)',
          800: 'rgb(0, 43, 109)',
          900: 'rgb(0, 33, 82)',       // darkest blue
        },
        accent: {
          50: '#f2f3f3',              // lightest gray
          100: '#e5e6e7',
          200: '#caced0',
          300: '#afb4b8',
          400: '#949aa0',
          500: '#53585a',             // main gray
          600: '#4b5052',
          700: '#3f4345',
          800: '#333638',
          900: '#282b2c',             // darkest gray
        },
        light: {
          50: '#ffffff',              // pure white
          100: '#f9f9f9',
          200: '#f2f2f2',
          300: '#ebebeb',
          400: '#e4e4e4',
          500: '#eeeeee',             // main light gray
          600: '#d6d6d6',
          700: '#bfbfbf',
          800: '#a8a8a8',
          900: '#919191',             // darker light gray
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}