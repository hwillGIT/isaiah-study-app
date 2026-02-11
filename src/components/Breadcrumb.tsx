import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AppView } from '../types';

const sectionMeta = [
  { id: 1, title: 'The Courtroom' },
  { id: 2, title: 'The Mountain and the Abyss' },
  { id: 3, title: 'The Stripping and the Canopy' },
  { id: 4, title: 'The Vineyard Song' },
  { id: 5, title: 'The Throne Room' },
  { id: 6, title: 'The Immanuel Cycle' },
  { id: 7, title: 'The Stump and the Song' },
];

const moduleLabels: Record<string, string> = {
  big_picture: 'Big Picture',
  framework: 'Framework',
  verse_by_verse: 'Verse by Verse',
};

interface BreadcrumbProps {
  view: AppView;
  selectedSection: number;
  selectedModule: 'big_picture' | 'framework' | 'verse_by_verse';
  onNavigate: (view: AppView) => void;
}

export default function Breadcrumb({ view, selectedSection, selectedModule, onNavigate }: BreadcrumbProps) {
  const crumbs: { label: string; action?: () => void }[] = [];

  crumbs.push({
    label: 'The Book of Isaiah',
    action: view !== 'overview' ? () => onNavigate('overview') : undefined,
  });

  if (view === 'sections' || view === 'study') {
    crumbs.push({
      label: 'Book of Judgment',
      action: view !== 'sections' ? () => onNavigate('sections') : undefined,
    });
  }

  if (view === 'study') {
    const meta = sectionMeta.find((s) => s.id === selectedSection);
    crumbs.push({ label: meta?.title || `Section ${selectedSection}` });
    crumbs.push({ label: moduleLabels[selectedModule] || selectedModule });
  }

  return (
    <nav className="sticky top-0 z-40 glass-panel border-b border-white/10 border-t-0 border-l-0 border-r-0">
      <div className="max-w-4xl mx-auto px-4 py-2.5">
        <ol className="flex items-center gap-1 text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1 min-w-0">
              {i > 0 && <ChevronRight size={14} className="text-gray-600 flex-shrink-0" />}
              {crumb.action ? (
                <button
                  onClick={crumb.action}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer truncate max-w-[140px] sm:max-w-none"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-gray-200 truncate max-w-[140px] sm:max-w-none">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
