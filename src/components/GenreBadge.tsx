import React, { useState } from 'react';
import { GenreTag } from '../types';
import { contentColors } from '../colors';

interface GenreBadgeProps {
  genre: GenreTag;
}

export default function GenreBadge({ genre }: GenreBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className={`${contentColors.genre} text-xs px-3 py-1 rounded-full cursor-pointer transition-all hover:opacity-80`}
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {genre.label}
      </button>
      {showTooltip && (
        <div className="absolute z-50 top-full right-0 mt-2 w-64 p-3 rounded-lg glass-panel text-sm text-gray-300 shadow-xl">
          <div className="absolute bottom-full right-4 w-2 h-2 rotate-45 glass-panel -mb-1" />
          <div className="text-white font-medium mb-1">{genre.label}</div>
          <div>{genre.description}</div>
        </div>
      )}
    </div>
  );
}
