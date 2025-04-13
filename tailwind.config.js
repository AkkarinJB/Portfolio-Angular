// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        title: 'var(--color-title)',
        base: 'var(--color-base)',
      },
    },
  },
})
