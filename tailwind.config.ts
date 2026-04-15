import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        n: {
          bg:       '#191919',
          surface:  '#202020',
          s2:       '#252525',
          hover:    '#2e2e2e',
          border:   '#363636',
          t1:       '#e2e2e2',
          t2:       '#9b9b9b',
          t3:       '#525252',
          accent:   '#7b8ce0',
        },
      },
    },
  },
  plugins: [],
}
export default config
