import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';
import { getSection } from '../data/sections-index';
import { ArrowLeft, BookOpen, Sparkles, Scroll } from 'lucide-react';
import GenreBadge from './GenreBadge';
import BigPictureView from './BigPictureView';
import FrameworkView from './FrameworkView';
import VerseByVerseView from './VerseByVerseView';
import Sidebar from './Sidebar';

interface StudyViewProps {
  sectionId: number;
  selectedModule: 'big_picture' | 'framework' | 'verse_by_verse';
  onModuleChange: (m: 'big_picture' | 'framework' | 'verse_by_verse') => void;
  onBack: () => void;
  onSelectSection: (id: number) => void;
}

const sectionMeta = [
  { id: 1, title: 'The Courtroom', subtitle: 'The Great Accusation', chapters: 'Chapter 1', color: 'red' },
  { id: 2, title: 'The Mountain and the Abyss', subtitle: 'Two Visions', chapters: 'Chapter 2', color: 'slate' },
  { id: 3, title: 'The Stripping and the Canopy', subtitle: 'Stripped to Be Clothed', chapters: 'Chapters 3–4', color: 'amber' },
  { id: 4, title: 'The Vineyard Song', subtitle: 'The Heartbreak of God', chapters: 'Chapter 5', color: 'purple' },
  { id: 5, title: 'The Throne Room', subtitle: 'Undone and Remade', chapters: 'Chapter 6', color: 'yellow' },
  { id: 6, title: 'The Immanuel Cycle', subtitle: 'God With Us in the Dark', chapters: 'Chapters 7–9', color: 'blue' },
  { id: 7, title: 'The Stump and the Song', subtitle: 'What Grows from Ruin', chapters: 'Chapters 10–12', color: 'green' },
];

const colorAccents: Record<string, { border: string; text: string; bg: string; activeBg: string }> = {
  red: { border: 'border-red-500', text: 'text-red-400', bg: 'bg-red-900/20', activeBg: 'bg-red-500/20 border-red-500' },
  slate: { border: 'border-slate-300', text: 'text-slate-300', bg: 'bg-slate-800/20', activeBg: 'bg-slate-500/20 border-slate-300' },
  amber: { border: 'border-amber-500', text: 'text-amber-400', bg: 'bg-amber-900/20', activeBg: 'bg-amber-500/20 border-amber-500' },
  purple: { border: 'border-purple-500', text: 'text-purple-400', bg: 'bg-purple-900/20', activeBg: 'bg-purple-500/20 border-purple-500' },
  yellow: { border: 'border-yellow-300', text: 'text-yellow-300', bg: 'bg-yellow-900/20', activeBg: 'bg-yellow-500/20 border-yellow-300' },
  blue: { border: 'border-blue-400', text: 'text-blue-400', bg: 'bg-blue-900/20', activeBg: 'bg-blue-500/20 border-blue-400' },
  green: { border: 'border-green-500', text: 'text-green-400', bg: 'bg-green-900/20', activeBg: 'bg-green-500/20 border-green-500' },
};

const tabs = [
  { key: 'big_picture' as const, label: 'Big Picture', icon: BookOpen },
  { key: 'framework' as const, label: 'Framework', icon: Sparkles },
  { key: 'verse_by_verse' as const, label: 'Verse by Verse', icon: Scroll },
];

const sidebarSections = sectionMeta.map(({ id, title, chapters, color }) => ({ id, title, chapters, color }));

export default function StudyView({ sectionId, selectedModule, onModuleChange, onBack, onSelectSection }: StudyViewProps) {
  const section: Section | null = getSection(sectionId);
  const meta = sectionMeta.find((s) => s.id === sectionId);
  const accent = colorAccents[meta?.color || 'red'];

  if (!section) {
    return (
      <div className="relative">
        <Sidebar sections={sidebarSections} currentSectionId={sectionId} onSelectSection={onSelectSection} />
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 lg:ml-14">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to sections</span>
          </button>

          <div className="text-center py-20 space-y-6">
            <div className="text-6xl mb-4">📜</div>
            <h2 className="font-serif-display text-3xl font-bold text-white">
              {meta?.title || 'Section'}
            </h2>
            <p className="text-gray-400">{meta?.subtitle}</p>
            <p className="text-gray-500">{meta?.chapters}</p>
            <div className={`inline-block ${accent.bg} ${accent.text} px-4 py-2 rounded-full text-sm border ${accent.border}`}>
              Content Coming Soon
            </div>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              This section's deep-dive content is being prepared. Check back soon for the full study experience.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Sidebar sections={sidebarSections} currentSectionId={sectionId} onSelectSection={onSelectSection} />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 lg:ml-14">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1 className="font-serif-display text-2xl md:text-3xl font-bold text-white">
                {section.title}
              </h1>
              <p className="text-sm text-gray-400">{section.chapters}</p>
            </div>
          </div>
          <GenreBadge genre={section.genre} />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 relative">
          {tabs.map((tab) => {
            const isActive = selectedModule === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => onModuleChange(tab.key)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? `border-transparent ${accent.text}`
                    : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className={`absolute inset-0 rounded-xl ${accent.activeBg}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedModule}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {selectedModule === 'big_picture' && <BigPictureView section={section} />}
            {selectedModule === 'framework' && <FrameworkView section={section} />}
            {selectedModule === 'verse_by_verse' && <VerseByVerseView section={section} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
