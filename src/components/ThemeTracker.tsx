import React, { useState } from 'react';
import { ThemeMarker } from '../types';
import { threadColors } from '../colors';

interface ThemeTrackerProps {
  themes: ThemeMarker[];
}

export default function ThemeTracker({ themes }: ThemeTrackerProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const allThreads: Array<ThemeMarker['theme']> = ['exodus', 'zion_eden', 'messiah', 'hope'];

  const getTheme = (thread: ThemeMarker['theme']) =>
    themes.find((t) => t.theme === thread);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {allThreads.map((thread) => {
          const marker = getTheme(thread);
          const colors = threadColors[thread];
          const isActive = marker?.active ?? false;

          return (
            <button
              key={thread}
              onClick={() => setExpanded(expanded === thread ? null : thread)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                isActive ? `${colors.bg} ${colors.text} ${colors.border} border` : 'opacity-40 bg-gray-800/50 text-gray-500 border border-gray-700'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isActive ? colors.dot : 'border border-gray-500'
                }`}
              />
              {colors.label}
            </button>
          );
        })}
      </div>
      {expanded && (
        <div className={`glass-panel rounded-lg p-4 text-sm ${threadColors[expanded as ThemeMarker['theme']].text} border-l-2 ${threadColors[expanded as ThemeMarker['theme']].border}`}>
          {getTheme(expanded as ThemeMarker['theme'])?.connection || threadColors[expanded as ThemeMarker['theme']].description}
        </div>
      )}
    </div>
  );
}
