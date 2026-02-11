import React, { useState } from 'react';
import { Section } from '../types';
import { lensColors } from '../colors';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ThemeTracker from './ThemeTracker';
import ImageGallery from './ImageGallery';
import SoulReflection from './SoulReflection';

interface BigPictureViewProps {
  section: Section;
}

export default function BigPictureView({ section }: BigPictureViewProps) {
  const [contextOpen, setContextOpen] = useState(true);

  const { historicalContext, bigPicture, themes, images } = section;

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-xl border-l-4 border-amber-700 overflow-hidden">
        <button
          className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
          onClick={() => setContextOpen(!contextOpen)}
        >
          <div>
            <h3 className="text-lg font-semibold text-amber-200">Historical Context</h3>
            <p className="text-sm text-amber-400/70">{historicalContext.period}</p>
          </div>
          {contextOpen ? (
            <ChevronUp className="text-amber-400" size={20} />
          ) : (
            <ChevronDown className="text-amber-400" size={20} />
          )}
        </button>
        {contextOpen && (
          <div className="px-5 pb-5 space-y-3 border-t border-amber-700/30 pt-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-500/70 mb-1">Political Situation</div>
              <p className="text-gray-300 text-sm">{historicalContext.politicalSituation}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-500/70 mb-1">Key Figures</div>
              <div className="flex flex-wrap gap-2">
                {historicalContext.keyFigures.map((fig, i) => (
                  <span key={i} className="text-xs bg-amber-900/30 text-amber-200 px-2 py-1 rounded-full">
                    {fig}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-500/70 mb-1">Why It Matters</div>
              <p className="text-gray-300 text-sm">{historicalContext.whyItMatters}</p>
            </div>
          </div>
        )}
      </div>

      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-3">Literary Context</h3>
        <p className="text-gray-300 leading-relaxed">{bigPicture.literaryContext}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-200">Entering the Text</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bigPicture.perspectives.map((perspective, i) => {
            const colors = lensColors[perspective.role];
            return (
              <div
                key={i}
                className={`glass-panel rounded-xl p-5 border-l-4 ${colors.border}`}
              >
                <div className={`text-sm font-medium ${colors.icon} mb-2`}>
                  {colors.label}
                </div>
                <p className={`text-sm ${colors.text} leading-relaxed`}>{perspective.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Theme Threads</h3>
        <ThemeTracker themes={themes} />
      </div>

      {images && <ImageGallery images={images} />}

      <SoulReflection reflection={bigPicture.soulReflection} />
    </div>
  );
}
