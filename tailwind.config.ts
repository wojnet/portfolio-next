import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "color-1": "var(--c1)",
        "color-2": "var(--c2)",
        "color-3": "var(--c3)",
        "color-4": "var(--c4)",
        "color-5": "var(--c5)",
        "background-color": "var(--background-color)",
        "background-color-05": "var(--background-color-05)",
        "gray-text": "var(--grayText)",
        "gray": "var(--gray)",
        "cyan": "var(--cyan)",
        "text-color": "var(--text)"
      },
      keyframes: {
        cursor: {
          "0%, 30%, 80%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        }
      }
    },
  },
  plugins: [],
}
export default config
