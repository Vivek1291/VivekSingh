import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Cyan
    'border-cyan-500/40',
    'bg-cyan-500/10',
    'text-cyan-400',

    // Amber
    'border-amber-500/40',
    'bg-amber-500/10',
    'text-amber-400',

    // Pink
    'border-pink-500/40',
    'bg-pink-500/10',
    'text-pink-400',

    // Purple
    'border-purple-500/40',
    'bg-purple-500/10',
    'text-purple-400',

    // Orange
    'border-orange-500/40',
    'bg-orange-500/10',
    'text-orange-400',

    // Emerald
    'border-emerald-500/40',
    'bg-emerald-500/10',
    'text-emerald-400',

    // Red
    'border-red-500/40',
    'bg-red-500/10',
    'text-red-400',

    // Sky
    'border-sky-500/40',
    'bg-sky-500/10',
    'text-sky-400',

    // Lime
    'border-lime-500/40',
    'bg-lime-500/10',
    'text-lime-400',

    // Indigo
    'border-indigo-500/40',
    'bg-indigo-500/10',
    'text-indigo-400',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        accent: '#10b981',
      },
    },
  },
  plugins: [],
} satisfies Config
