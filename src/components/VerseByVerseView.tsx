import React, { useState, useEffect, useRef } from 'react';
import { Section, KeywordInsight, BackReference, ForwardReference, Misreading, CrossReference } from '../types';
import { contentColors } from '../colors';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import WordStudyModal from './WordStudyModal';
import ImageGallery from './ImageGallery';
import SoulReflection from './SoulReflection';
import AnimatedCollapse from './AnimatedCollapse';

interface VerseByVerseViewProps {
  section: Section;
}

const tocSections = [
  { id: 'section-scripture', label: 'Scripture' },
  { id: 'section-builds-on', label: 'Builds On' },
  { id: 'section-points-toward', label: 'Points Toward' },
  { id: 'section-emotional', label: 'Emotional Journey' },
  { id: 'section-misreadings', label: 'Misreadings' },
  { id: 'section-so-what', label: 'So What / Now What' },
  { id: 'section-cross-refs', label: 'Cross References' },
  { id: 'section-soul-reflection', label: 'Soul Reflection' },
  { id: 'section-prayer', label: 'Prayer Prompt' },
];

export default function VerseByVerseView({ section }: VerseByVerseViewProps) {
  const [selectedKeyword, setSelectedKeyword] = useState<KeywordInsight | null>(null);
  const [expandedBuildsOn, setExpandedBuildsOn] = useState<number | null>(null);
  const [expandedPointsToward, setExpandedPointsToward] = useState<number | null>(null);
  const [expandedMisreadings, setExpandedMisreadings] = useState<number | null>(null);
  const [showBuildsOn, setShowBuildsOn] = useState(true);
  const [showPointsToward, setShowPointsToward] = useState(true);
  const [expandedCrossRefs, setExpandedCrossRefs] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('section-scripture');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { verseByVerse, images } = section;

  return (
    <div className="space-y-8">
      <div
        ref={navRef}
        className="sticky top-16 z-20 glass-panel rounded-xl px-3 py-2 overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-2 min-w-max">
          {tocSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeSection === id
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div id="section-scripture" className={`${contentColors.scripture} rounded-xl p-6 border space-y-4`}>
        {verseByVerse.verses.map((verse, i) => (
          <div key={i} className="space-y-2">
            <p className="scripture-text text-lg leading-relaxed text-gray-200">
              <sup className="text-amber-400/70 text-xs font-sans mr-1">{verse.verseNumber}</sup>
              {verse.text}
            </p>

            {verse.poeticDevices && verse.poeticDevices.length > 0 && (
              <div className="flex flex-wrap gap-1 ml-4">
                {verse.poeticDevices.map((device, j) => (
                  <span
                    key={j}
                    className="text-xs bg-violet-900/30 text-violet-300 px-2 py-0.5 rounded-full"
                    title={device.explanation}
                  >
                    {device.type.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            )}

            {verse.keywords && verse.keywords.length > 0 && (
              <div className="flex flex-wrap gap-2 ml-4">
                {verse.keywords.map((kw, j) => (
                  <button
                    key={j}
                    onClick={() => setSelectedKeyword(kw)}
                    className={`${contentColors.keywords} text-xs px-3 py-1 rounded-full border cursor-pointer hover:brightness-125 transition-all`}
                  >
                    {kw.word} ({kw.hebrew})
                  </button>
                ))}
              </div>
            )}

            {verse.notes && (
              <p className="text-sm text-gray-400 ml-4 italic">{verse.notes}</p>
            )}
          </div>
        ))}
      </div>

      {verseByVerse.buildsOn.length > 0 && (
        <div id="section-builds-on" className={`${contentColors.buildsOn} border-l-4 rounded-r-xl overflow-hidden`}>
          <button
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            onClick={() => setShowBuildsOn(!showBuildsOn)}
          >
            <h3 className="text-lg font-semibold text-amber-200">Builds On</h3>
            {showBuildsOn ? <ChevronUp className="text-amber-400" size={18} /> : <ChevronDown className="text-amber-400" size={18} />}
          </button>
          <AnimatedCollapse isOpen={showBuildsOn}>
            <div className="px-5 pb-5 space-y-3">
              {verseByVerse.buildsOn.map((ref: BackReference, i: number) => (
                <div
                  key={i}
                  className="glass-panel rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setExpandedBuildsOn(expandedBuildsOn === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-3">
                    <div>
                      <span className="text-sm font-medium text-amber-300">{ref.sourceRef}</span>
                      <span className="text-sm text-gray-400 ml-2">— {ref.label}</span>
                    </div>
                    {expandedBuildsOn === i ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </div>
                  <AnimatedCollapse isOpen={expandedBuildsOn === i}>
                    <div className="px-3 pb-3 pt-1 border-t border-amber-700/20">
                      <p className="text-sm text-gray-300">{ref.connection}</p>
                    </div>
                  </AnimatedCollapse>
                </div>
              ))}
            </div>
          </AnimatedCollapse>
        </div>
      )}

      {verseByVerse.pointsToward.length > 0 && (
        <div id="section-points-toward" className={`${contentColors.pointsToward} border-l-4 rounded-r-xl overflow-hidden`}>
          <button
            className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            onClick={() => setShowPointsToward(!showPointsToward)}
          >
            <h3 className="text-lg font-semibold text-amber-100">Points Toward</h3>
            {showPointsToward ? <ChevronUp className="text-amber-300" size={18} /> : <ChevronDown className="text-amber-300" size={18} />}
          </button>
          <AnimatedCollapse isOpen={showPointsToward}>
            <div className="px-5 pb-5 space-y-3">
              {verseByVerse.pointsToward.map((ref: ForwardReference, i: number) => (
                <div
                  key={i}
                  className="glass-panel rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setExpandedPointsToward(expandedPointsToward === i ? null : i)}
                >
                  <div className="flex items-center justify-between p-3">
                    <div>
                      <span className="text-sm font-medium text-amber-200">{ref.targetRef}</span>
                      <span className="text-sm text-gray-400 ml-2">— {ref.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 capitalize">{ref.targetBook}</span>
                      {expandedPointsToward === i ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                    </div>
                  </div>
                  <AnimatedCollapse isOpen={expandedPointsToward === i}>
                    <div className="px-3 pb-3 pt-1 border-t border-amber-600/20">
                      <p className="text-sm text-gray-300">{ref.connection}</p>
                    </div>
                  </AnimatedCollapse>
                </div>
              ))}
            </div>
          </AnimatedCollapse>
        </div>
      )}

      {verseByVerse.emotionalJourney && (
        <div id="section-emotional" className={`${contentColors.emotional} border-l-4 glass-panel rounded-r-xl p-6`}>
          <h3 className="text-lg font-semibold text-teal-300 mb-3">Emotional Journey</h3>
          <p className="text-gray-300 leading-relaxed">{verseByVerse.emotionalJourney}</p>
        </div>
      )}

      {verseByVerse.misreadings.length > 0 && (
        <div id="section-misreadings" className={`${contentColors.misreadings} border-l-4 glass-panel rounded-r-xl p-6 space-y-4`}>
          <h3 className="text-lg font-semibold text-orange-300">Common Misreadings</h3>
          {verseByVerse.misreadings.map((mr: Misreading, i: number) => (
            <div
              key={i}
              className="glass-panel rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setExpandedMisreadings(expandedMisreadings === i ? null : i)}
            >
              <div className="flex items-center justify-between p-4">
                <p className="text-sm text-orange-200 font-medium">"{mr.misreading}"</p>
                {expandedMisreadings === i ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </div>
              <AnimatedCollapse isOpen={expandedMisreadings === i}>
                <div className="px-4 pb-4 space-y-2 border-t border-orange-500/20 pt-3">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-orange-500/70 mb-1">Actually</div>
                    <p className="text-sm text-gray-300">{mr.correction}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-orange-500/70 mb-1">Why It Matters</div>
                    <p className="text-sm text-gray-300">{mr.whyItMatters}</p>
                  </div>
                </div>
              </AnimatedCollapse>
            </div>
          ))}
        </div>
      )}

      <div id="section-so-what">
        <h3 className="text-lg font-semibold text-gray-200 mb-4">So What / Now What</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-panel rounded-xl p-5 border-t-2 border-slate-400">
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-2">What Does This Mean?</div>
            <p className="text-sm text-gray-300">{verseByVerse.soWhatNowWhat.whatDoesThisMean}</p>
          </div>
          <div className="glass-panel rounded-xl p-5 border-t-2 border-rose-400">
            <div className="text-xs uppercase tracking-wider text-rose-400 mb-2">So What?</div>
            <p className="text-sm text-gray-300">{verseByVerse.soWhatNowWhat.soWhat}</p>
          </div>
          <div className="glass-panel rounded-xl p-5 border-t-2 border-amber-400">
            <div className="text-xs uppercase tracking-wider text-amber-400 mb-2">Now What?</div>
            <p className="text-sm text-gray-300">{verseByVerse.soWhatNowWhat.nowWhat}</p>
          </div>
        </div>
      </div>

      {verseByVerse.crossReferences.length > 0 && (
        <div id="section-cross-refs" className="glass-panel rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2">
            <ExternalLink className="text-blue-400" size={18} />
            <h3 className="text-lg font-semibold text-gray-200">Cross References & NT Echoes</h3>
          </div>
          <div className="space-y-3">
            {verseByVerse.crossReferences.map((ref: CrossReference, i: number) => (
              <div
                key={i}
                className="glass-panel rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setExpandedCrossRefs(expandedCrossRefs === i ? null : i)}
              >
                <div className="flex items-center justify-between p-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-blue-300">{ref.isaiahRef}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-sm font-medium text-green-300">{ref.ntRef}</span>
                  </div>
                  {expandedCrossRefs === i ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                </div>
                <AnimatedCollapse isOpen={expandedCrossRefs === i}>
                  <div className="px-3 pb-3 pt-1 border-t border-blue-500/20">
                    <p className="text-sm text-gray-300">{ref.connection}</p>
                  </div>
                </AnimatedCollapse>
              </div>
            ))}
          </div>
        </div>
      )}

      {images && <ImageGallery images={images} />}

      <div id="section-soul-reflection">
        <SoulReflection reflection={verseByVerse.soulReflection} />
      </div>

      <div id="section-prayer" className={`${contentColors.prayerPrompt} border-l-4 rounded-r-xl p-8 space-y-4`}>
        <h3 className="text-lg font-semibold text-violet-300">Prayer Prompt</h3>
        <p className="text-gray-200 leading-relaxed scripture-text text-lg italic">
          {verseByVerse.prayerPrompt.prompt}
        </p>
        {verseByVerse.prayerPrompt.posture && (
          <p className="text-sm text-violet-300/70 italic">
            Suggested posture: {verseByVerse.prayerPrompt.posture}
          </p>
        )}
      </div>

      {selectedKeyword && (
        <WordStudyModal
          keyword={selectedKeyword}
          onClose={() => setSelectedKeyword(null)}
        />
      )}
    </div>
  );
}
