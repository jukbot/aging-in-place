import defaultTheme from 'windicss/defaultTheme'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./index.html', './src/**/*.{jsx,tsx}'],
  },
  safelist: [],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        base: 'var(--color-base)',
        warning: 'var(--color-warning)',
        disabled: 'var(--color-disabled)',
      },
      fontFamily: {
        sans: ['Prompt', 'sans-serif'],
        chonburi: ['Chonburi', 'serif'],
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        dark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      // https://windicss.org/utilities/backgrounds.html#background-image
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('@windicss/animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    require('tailwindcss-debug-screens'),
  ],
})
