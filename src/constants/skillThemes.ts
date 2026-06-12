export const skillThemes = {
  cyan: {
    container: 'border-cyan-500/40 bg-cyan-500/10',
    icon: 'text-cyan-400',
  },

  amber: {
    container: 'border-amber-500/40 bg-amber-500/10',
    icon: 'text-amber-400',
  },

  pink: {
    container: 'border-pink-500/40 bg-pink-500/10',
    icon: 'text-pink-400',
  },

  purple: {
    container: 'border-purple-500/40 bg-purple-500/10',
    icon: 'text-purple-400',
  },

  orange: {
    container: 'border-orange-500/40 bg-orange-500/10',
    icon: 'text-orange-400',
  },

  emerald: {
    container: 'border-emerald-500/40 bg-emerald-500/10',
    icon: 'text-emerald-400',
  },

  red: {
    container: 'border-red-500/40 bg-red-500/10',
    icon: 'text-red-400',
  },

  sky: {
    container: 'border-sky-500/40 bg-sky-500/10',
    icon: 'text-sky-400',
  },

  lime: {
    container: 'border-lime-500/40 bg-lime-500/10',
    icon: 'text-lime-400',
  },

  indigo: {
    container: 'border-indigo-500/40 bg-indigo-500/10',
    icon: 'text-indigo-400',
  },
}

export type ThemeColor = keyof typeof skillThemes;