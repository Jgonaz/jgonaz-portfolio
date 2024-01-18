import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1536px'
        }
      },
      spacing: {
        '22': '5.5rem'
      },
      colors: {
        jade: {
          '50': '#effef7',
          '75': '#e4fef3',
          '100': '#dafeef',
          '200': '#b8fadd',
          '300': '#81f4c3',
          '400': '#43e5a0',
          '500': '#1acd81',
          '600': '#0fa968',
          '700': '#108554',
          '800': '#126945',
          '900': '#11563a',
          '950': '#03301f'
        }
      }
    },
    screens: {
      xsm: '450px',
      // => @media (min-width: 450px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'mobile-landscape': {
        raw: '(max-width: 768px) and (orientation: landscape)'
      }
      // =>   @media only screen and (max-width: 768px) and (orientation: landscape) {
    }
  },
  plugins: []
}
export default config
