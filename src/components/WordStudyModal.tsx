import React from 'react';
import { KeywordInsight } from '../types';
import { contentColors } from '../colors';
import { X } from 'lucide-react';

interface WordStudyModalProps {
  keyword: KeywordInsight;
  onClose: () => void;
}

export default function WordStudyModal({ keyword, onClose }: WordStudyModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="glass-panel rounded-2xl max-w-lg w-full p-6 border border-yellow-600/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="text-4xl font-serif-display text-yellow-200 mb-2">{keyword.hebrew}</div>
          <div className="text-yellow-400/80 text-sm italic">{keyword.transliteration}</div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-yellow-500/70 mb-1">English</div>
            <div className="text-lg text-white font-medium">{keyword.word}</div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-yellow-500/70 mb-1">Definition</div>
            <div className="text-gray-300">{keyword.definition}</div>
          </div>

          <div className={`${contentColors.keywords} rounded-lg p-4 border`}>
            <div className="text-xs uppercase tracking-wider text-yellow-500/70 mb-1">Significance</div>
            <div className="text-yellow-100">{keyword.significance}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
