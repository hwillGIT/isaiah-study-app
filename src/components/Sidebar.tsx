import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

interface SectionMeta {
  id: number;
  title: string;
  chapters: string;
  color: string;
}

interface SidebarProps {
  sections: SectionMeta[];
  currentSectionId: number;
  onSelectSection: (id: number) => void;
}

const sidebarColors: Record<string, { bg: string; border: string; text: string; dot: string; activeBg: string }> = {
  red: { bg: 'bg-red-500/10', border: 'border-red-500/40', text: 'text-red-400', dot: 'bg-red-500', activeBg: 'bg-red-500/20' },
  slate: { bg: 'bg-slate-500/10', border: 'border-slate-400/40', text: 'text-slate-300', dot: 'bg-slate-400', activeBg: 'bg-slate-500/20' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/40', text: 'text-amber-400', dot: 'bg-amber-500', activeBg: 'bg-amber-500/20' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/40', text: 'text-purple-400', dot: 'bg-purple-500', activeBg: 'bg-purple-500/20' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-300/40', text: 'text-yellow-300', dot: 'bg-yellow-400', activeBg: 'bg-yellow-500/20' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-400/40', text: 'text-blue-400', dot: 'bg-blue-500', activeBg: 'bg-blue-500/20' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/40', text: 'text-green-400', dot: 'bg-green-500', activeBg: 'bg-green-500/20' },
};

function DesktopSidebar({ sections, currentSectionId, onSelectSection }: SidebarProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="hidden lg:flex fixed left-0 top-0 h-full z-30"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <motion.div
        className="h-full bg-gray-950/80 backdrop-blur-xl border-r border-white/10 flex flex-col py-20 overflow-y-auto"
        animate={{ width: expanded ? 240 : 56 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        {sections.map((section) => {
          const isActive = section.id === currentSectionId;
          const colors = sidebarColors[section.color] || sidebarColors.red;

          return (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className={`flex items-center gap-3 px-4 py-3 transition-all cursor-pointer text-left group ${
                isActive
                  ? `${colors.activeBg} border-r-2 ${colors.border}`
                  : 'hover:bg-white/5 border-r-2 border-transparent'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  isActive
                    ? `${colors.dot} text-white`
                    : 'bg-white/10 text-gray-400 group-hover:bg-white/20'
                }`}
              >
                {section.id}
              </div>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    <div className={`text-sm font-medium ${isActive ? colors.text : 'text-gray-300'}`}>
                      {section.title}
                    </div>
                    <div className="text-xs text-gray-500">{section.chapters}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}

function MobileSidebar({ sections, currentSectionId, onSelectSection }: SidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed left-3 top-20 z-40 bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-lg p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
        aria-label="Open section menu"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed left-0 top-0 h-full w-72 bg-gray-950/95 backdrop-blur-xl border-r border-white/10 z-50 flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Sections</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-2">
                {sections.map((section) => {
                  const isActive = section.id === currentSectionId;
                  const colors = sidebarColors[section.color] || sidebarColors.red;

                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        onSelectSection(section.id);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-all cursor-pointer text-left ${
                        isActive
                          ? `${colors.activeBg} border-l-3 ${colors.border}`
                          : 'hover:bg-white/5 border-l-3 border-transparent'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                          isActive
                            ? `${colors.dot} text-white`
                            : 'bg-white/10 text-gray-400'
                        }`}
                      >
                        {section.id}
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${isActive ? colors.text : 'text-gray-300'}`}>
                          {section.title}
                        </div>
                        <div className="text-xs text-gray-500">{section.chapters}</div>
                      </div>
                      {isActive && (
                        <ChevronRight size={14} className={`ml-auto ${colors.text}`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Sidebar(props: SidebarProps) {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
}
