export const threadColors = {
  exodus: { bg: 'bg-blue-900/30', border: 'border-blue-400', text: 'text-blue-300', dot: 'bg-blue-400', label: 'Exodus', description: '"Has God forgotten me?" — He has done this before. Your crisis has a precedent.' },
  zion_eden: { bg: 'bg-emerald-900/30', border: 'border-emerald-400', text: 'text-emerald-300', dot: 'bg-emerald-400', label: 'Zion/Eden', description: '"Is this all there is?" — Your longing for wholeness is orientation toward home.' },
  messiah: { bg: 'bg-yellow-900/30', border: 'border-yellow-400', text: 'text-yellow-300', dot: 'bg-yellow-400', label: 'Messiah', description: '"Is it all up to me?" — Someone else carries this. The weight is on His shoulders.' },
  hope: { bg: 'bg-amber-900/30', border: 'border-amber-400', text: 'text-amber-300', dot: 'bg-amber-400', label: 'Hope', description: '"Is it too late for me?" — The stump sprouts. Always. Your worst chapter is not your last.' },
} as const;

export const lensColors = {
  'Spiritual Director': { bg: 'bg-violet-900/20', border: 'border-violet-400/50', text: 'text-violet-300', icon: 'text-violet-400', label: 'Spiritual Director' },
  'Pastoral Director': { bg: 'bg-rose-900/20', border: 'border-rose-400/50', text: 'text-rose-300', icon: 'text-rose-400', label: 'Pastoral Director' },
  'Psychologist': { bg: 'bg-teal-900/20', border: 'border-teal-400/50', text: 'text-teal-300', icon: 'text-teal-400', label: 'Psychologist' },
  'Theologian': { bg: 'bg-slate-700/20', border: 'border-slate-400/50', text: 'text-slate-300', icon: 'text-slate-400', label: 'Theologian' },
  'Historian': { bg: 'bg-amber-900/20', border: 'border-amber-700/50', text: 'text-amber-200', icon: 'text-amber-500', label: 'Historian' },
} as const;

export const sectionThemes = [
  { id: 1, gradient: 'from-red-950 via-gray-900 to-gray-950', accent: 'border-red-500', glow: 'shadow-red-500/20', badge: 'bg-red-900/40 text-red-300', accentText: 'text-red-400' },
  { id: 2, gradient: 'from-slate-800 via-gray-900 to-gray-950', accent: 'border-slate-300', glow: 'shadow-slate-300/20', badge: 'bg-slate-800/40 text-slate-300', accentText: 'text-slate-300' },
  { id: 3, gradient: 'from-amber-950 via-gray-900 to-gray-950', accent: 'border-amber-500', glow: 'shadow-amber-500/20', badge: 'bg-amber-900/40 text-amber-300', accentText: 'text-amber-400' },
  { id: 4, gradient: 'from-purple-950 via-gray-900 to-gray-950', accent: 'border-purple-500', glow: 'shadow-purple-500/20', badge: 'bg-purple-900/40 text-purple-300', accentText: 'text-purple-400' },
  { id: 5, gradient: 'from-yellow-950 via-gray-900 to-gray-950', accent: 'border-yellow-300', glow: 'shadow-yellow-300/20', badge: 'bg-yellow-900/40 text-yellow-200', accentText: 'text-yellow-300' },
  { id: 6, gradient: 'from-blue-950 via-gray-900 to-gray-950', accent: 'border-blue-400', glow: 'shadow-blue-400/20', badge: 'bg-blue-900/40 text-blue-300', accentText: 'text-blue-400' },
  { id: 7, gradient: 'from-green-950 via-gray-900 to-gray-950', accent: 'border-green-500', glow: 'shadow-green-500/20', badge: 'bg-green-900/40 text-green-300', accentText: 'text-green-400' },
] as const;

export const contentColors = {
  scripture: 'bg-amber-50/5 border-amber-200/20',
  context: 'text-gray-300',
  keywords: 'bg-yellow-900/30 text-yellow-200 border-yellow-600/30',
  misreadings: 'border-l-orange-500',
  emotional: 'border-l-teal-400',
  prayerPrompt: 'border-l-violet-400 bg-violet-900/10',
  buildsOn: 'border-l-amber-700 bg-amber-900/10',
  pointsToward: 'border-l-amber-400 bg-amber-800/10',
  reflection: 'border-l-rose-400 bg-rose-900/10',
  genre: 'bg-gray-700/40 text-gray-300',
} as const;
