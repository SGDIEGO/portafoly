import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      margin: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%'
      },
      spacing: {

      }
    },
  },
  plugins: [],
}
export default config
