import React from 'react';
import { classProgress } from '../data/class-progress';
import { ArrowLeft } from 'lucide-react';

interface SectionGridProps {
  onSelectSection: (id: number) => void;
  onBack: () => void;
}

const sectionMeta = [
  { id: 1, title: 'The Courtroom', subtitle: 'The Great Accusation', chapters: 'Chapter 1', emotionalArc: 'Denial → exposure → open door', genre: 'Covenant Lawsuit', color: 'red' },
  { id: 2, title: 'The Mountain and the Abyss', subtitle: 'Two Visions', chapters: 'Chapter 2', emotionalArc: 'Awe → terror → disorientation', genre: 'Vision Oracle', color: 'slate' },
  { id: 3, title: 'The Stripping and the Canopy', subtitle: 'Stripped to Be Clothed', chapters: 'Chapters 3–4', emotionalArc: 'Loss → grief → re-covering', genre: 'Woe Oracle', color: 'amber' },
  { id: 4, title: 'The Vineyard Song', subtitle: 'The Heartbreak of God', chapters: 'Chapter 5', emotionalArc: 'Tenderness → betrayal → fury', genre: 'Love Song', color: 'purple' },
  { id: 5, title: 'The Throne Room', subtitle: 'Undone and Remade', chapters: 'Chapter 6', emotionalArc: 'Terror → disintegration → purification → commission', genre: 'Throne Vision', color: 'yellow' },
  { id: 6, title: 'The Immanuel Cycle', subtitle: 'God With Us in the Dark', chapters: 'Chapters 7–9', emotionalArc: 'Fear → refusal → sign → blazing light', genre: 'Sign Oracle', color: 'blue' },
  { id: 7, title: 'The Stump and the Song', subtitle: 'What Grows from Ruin', chapters: 'Chapters 10–12', emotionalArc: 'Devastation → shoot → restoration → eruption of joy', genre: 'Salvation Hymn', color: 'green' },
];

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string; glow: string }> = {
  red: { border: 'border-red-500', bg: 'bg-red-900/30', text: 'text-red-300', badge: 'bg-red-900/40 text-red-300', glow: 'shadow-red-500/30' },
  slate: { border: 'border-slate-300', bg: 'bg-slate-800/30', text: 'text-slate-300', badge: 'bg-slate-800/40 text-slate-300', glow: 'shadow-slate-300/30' },
  amber: { border: 'border-amber-500', bg: 'bg-amber-900/30', text: 'text-amber-300', badge: 'bg-amber-900/40 text-amber-300', glow: 'shadow-amber-500/30' },
  purple: { border: 'border-purple-500', bg: 'bg-purple-900/30', text: 'text-purple-300', badge: 'bg-purple-900/40 text-purple-300', glow: 'shadow-purple-500/30' },
  yellow: { border: 'border-yellow-300', bg: 'bg-yellow-900/30', text: 'text-yellow-200', badge: 'bg-yellow-900/40 text-yellow-200', glow: 'shadow-yellow-300/30' },
  blue: { border: 'border-blue-400', bg: 'bg-blue-900/30', text: 'text-blue-300', badge: 'bg-blue-900/40 text-blue-300', glow: 'shadow-blue-400/30' },
  green: { border: 'border-green-500', bg: 'bg-green-900/30', text: 'text-green-300', badge: 'bg-green-900/40 text-green-300', glow: 'shadow-green-500/30' },
};

export default function SectionGrid({ onSelectSection, onBack }: SectionGridProps) {
  const { currentSection, instructorNote } = classProgress;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back</span>
        </button>
        <div>
          <h1 className="font-serif-display text-4xl font-bold text-white">The Book of Judgment</h1>
          <p className="text-gray-400 mt-1">Chapters 1–12</p>
        </div>
      </div>

      {instructorNote && (
        <div className="glass-panel rounded-xl p-4 border-l-4 border-amber-500/50">
          <p className="text-sm text-amber-200/80">{instructorNote}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sectionMeta.map((sec) => {
          const colors = colorMap[sec.color];
          const isCompleted = sec.id < currentSection;
          const isCurrent = sec.id === currentSection;
          const isUpcoming = sec.id > currentSection;

          return (
            <div
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`glass-panel rounded-2xl p-6 cursor-pointer transition-all duration-300 border-l-4 ${colors.border} ${
                isCurrent ? `animate-glow shadow-lg ${colors.glow}` : ''
              } ${isUpcoming ? 'opacity-70' : ''} hover:scale-[1.01] hover:opacity-100 hover:shadow-lg ${colors.glow}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`text-2xl font-bold ${colors.text}`}>{sec.id}</span>
                  {isCompleted && (
                    <span className="text-xs bg-green-900/40 text-green-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                      ✓ Completed
                    </span>
                  )}
                  {isCurrent && (
                    <span className={`text-xs ${colors.badge} px-2 py-0.5 rounded-full`}>
                      Currently Studying
                    </span>
                  )}
                  {isUpcoming && (
                    <span className="text-xs bg-gray-700/40 text-gray-400 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <span className="text-xs bg-gray-700/40 text-gray-400 px-2 py-0.5 rounded-full">
                  {sec.genre}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">{sec.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{sec.subtitle}</p>
              <p className="text-xs text-gray-500 mb-2">{sec.chapters}</p>
              <p className="text-sm text-gray-400 italic">{sec.emotionalArc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
