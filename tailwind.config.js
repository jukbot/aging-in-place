const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.{jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Prompt', ...defaultTheme.fontFamily.sans],
      chonburi: ['Chonburi', ...defaultTheme.fontFamily.serif],
    },
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        darkgreen: 'var(--color-darkgreen)',
        base: 'var(--color-base)',
        amber: 'var(--color-amber)',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      maxWidth: {
        0: '0',
        '1/4': '25%',
        '1/3': '33.33%',
        '1/2': '50%',
        '3/4': '75%',
        290: '290px',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        prose: '65ch',
        ...defaultTheme.maxWidth,
      },
      boxShadow: {
        dark: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: () => ({
        'hero-landing': "url('/images/landing/body.svg')",
      }),
    },
  },
  variants: {},
  // https://tailwindcss.com/docs/plugins
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
  ],
}
