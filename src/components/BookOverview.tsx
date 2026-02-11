import React from 'react';
import { subBooks } from '../data/book-overview';
import { BookOpen } from 'lucide-react';

interface BookOverviewProps {
  onSelectSubBook: () => void;
}

const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];

const glowColors: Record<string, string> = {
  'from-red-800': 'hover:shadow-red-500/20',
  'from-slate-600': 'hover:shadow-slate-400/20',
  'from-amber-800': 'hover:shadow-amber-500/20',
  'from-gray-600': 'hover:shadow-gray-400/20',
  'from-indigo-900': 'hover:shadow-indigo-500/20',
};

function getGlowClass(colorFrom: string): string {
  return glowColors[colorFrom] || 'hover:shadow-white/10';
}

export default function BookOverview({ onSelectSubBook }: BookOverviewProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <BookOpen className="text-amber-400" size={28} />
        </div>
        <h1 className="font-serif-display text-5xl md:text-6xl font-bold text-white">
          The Book of Isaiah
        </h1>
        <p className="text-xl text-gray-400 italic">
          When everything you trusted falls apart, what remains?
        </p>
        <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
          Isaiah is not one book — it is five. Five movements, five crises, five invitations.
          From courtroom to comfort, from judgment to joy, the prophet traces a single question
          across 66 chapters: Will you trust the Holy One of Israel?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subBooks.map((book, i) => {
          const isAvailable = book.available;
          const glow = getGlowClass(book.colorFrom);

          return (
            <div
              key={book.id}
              onClick={() => isAvailable && onSelectSubBook()}
              className={`glass-panel rounded-2xl overflow-hidden transition-all duration-300 ${
                isAvailable
                  ? `cursor-pointer hover:shadow-lg ${glow} hover:scale-[1.02]`
                  : 'opacity-60 cursor-default'
              } ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${book.colorFrom} ${book.colorTo}`} />
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 tracking-widest">
                    {romanNumerals[i]}
                  </span>
                  {!isAvailable && (
                    <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-0.5 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">{book.name}</h2>
                  <p className="text-sm text-gray-400">{book.subtitle}</p>
                </div>
                <p className="text-xs text-gray-500">Chapters {book.chapters}</p>
                <p className="text-sm text-gray-300 italic">"{book.centralQuestion}"</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
