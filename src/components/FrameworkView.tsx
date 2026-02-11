import React from 'react';
import { Section } from '../types';
import ImageGallery from './ImageGallery';
import SoulReflection from './SoulReflection';

interface FrameworkViewProps {
  section: Section;
}

const pairColors: Record<string, string> = {
  A: 'border-red-400 text-red-300',
  B: 'border-blue-400 text-blue-300',
  C: 'border-emerald-400 text-emerald-300',
  D: 'border-yellow-400 text-yellow-300',
  E: 'border-purple-400 text-purple-300',
  F: 'border-pink-400 text-pink-300',
  G: 'border-cyan-400 text-cyan-300',
  X: 'border-amber-400 text-amber-200',
};

function getPairColor(pairId?: string) {
  if (!pairId) return 'border-gray-600 text-gray-300';
  const letter = pairId.replace(/['′]/g, '').charAt(0).toUpperCase();
  return pairColors[letter] || 'border-gray-500 text-gray-300';
}

export default function FrameworkView({ section }: FrameworkViewProps) {
  const { framework, images } = section;

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">Poetic Structure</h3>
        <div className="space-y-2">
          {framework.structure.map((line, i) => {
            const color = getPairColor(line.pairId);
            return (
              <div
                key={i}
                className={`flex items-start gap-3 border-l-2 ${color} rounded-r-lg py-2 px-3 hover:bg-white/5 transition-colors`}
                style={{ marginLeft: `${line.indent * 24}px` }}
              >
                <div className="flex-shrink-0">
                  {line.pairId && (
                    <span className={`text-xs font-mono font-bold ${color.split(' ')[1]}`}>
                      {line.pairId}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-gray-500 font-mono">{line.reference}</span>
                    <span className="text-sm font-medium text-gray-200">{line.label}</span>
                  </div>
                  <p className="text-sm text-gray-400">{line.content}</p>
                  {line.connection && (
                    <p className="text-xs text-gray-500 mt-1 italic">{line.connection}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {framework.poeticDevices.length > 0 && (
        <div className="glass-panel rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-4">Poetic Devices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {framework.poeticDevices.map((device, i) => (
              <div key={i} className="glass-panel rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-violet-900/40 text-violet-300 px-2 py-0.5 rounded-full capitalize">
                    {device.type.replace(/_/g, ' ')}
                  </span>
                  <span className="text-xs text-gray-500">{device.verses}</span>
                </div>
                <p className="text-sm text-gray-300">{device.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {images && <ImageGallery images={images} />}

      <SoulReflection reflection={framework.soulReflection} />
    </div>
  );
}
