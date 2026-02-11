import React, { useState } from 'react';
import { SoulReflection as SoulReflectionType } from '../types';
import { contentColors } from '../colors';
import { Heart } from 'lucide-react';

interface SoulReflectionProps {
  reflection: SoulReflectionType;
}

export default function SoulReflection({ reflection }: SoulReflectionProps) {
  const [expandedOption, setExpandedOption] = useState<number | null>(null);

  return (
    <div className={`${contentColors.reflection} border-l-4 rounded-r-xl p-6 space-y-6`}>
      <div className="flex items-center gap-3">
        <Heart className="text-rose-400" size={22} />
        <h3 className="text-lg font-semibold text-rose-300">Soul Reflection</h3>
      </div>

      <p className="text-gray-300 italic text-base leading-relaxed scripture-text">
        {reflection.scenario}
      </p>

      <div className="space-y-4">
        {reflection.options.map((option, i) => (
          <div
            key={i}
            className="glass-panel rounded-xl border-l-2 border-rose-400/50 overflow-hidden cursor-pointer transition-all hover:border-rose-400"
            onClick={() => setExpandedOption(expandedOption === i ? null : i)}
          >
            <div className="p-4">
              <p className="text-gray-200 italic">"{option.text}"</p>
            </div>
            {expandedOption === i && (
              <div className="px-5 pb-5 pt-2 bg-rose-900/10 border-t border-rose-400/10">
                <p className="text-gray-300 text-sm leading-relaxed">{option.insight}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
