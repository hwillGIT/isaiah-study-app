import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppView } from './types';
import BookOverview from './components/BookOverview';
import SectionGrid from './components/SectionGrid';
import StudyView from './components/StudyView';
import Breadcrumb from './components/Breadcrumb';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

const STORAGE_KEY = 'isaiah-study-progress';

const validViews: AppView[] = ['overview', 'sections', 'study'];
const validModules = ['big_picture', 'framework', 'verse_by_verse'] as const;

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && typeof data === 'object') {
        const view = validViews.includes(data.view) ? data.view : 'overview';
        const selectedSection = typeof data.selectedSection === 'number' && data.selectedSection >= 1 && data.selectedSection <= 7 ? data.selectedSection : 1;
        const selectedModule = (validModules as readonly string[]).includes(data.selectedModule) ? data.selectedModule : 'big_picture';
        return { view, selectedSection, selectedModule } as {
          view: AppView;
          selectedSection: number;
          selectedModule: 'big_picture' | 'framework' | 'verse_by_verse';
        };
      }
    }
  } catch {}
  return null;
}

export default function App() {
  const saved = loadProgress();
  const [view, setView] = useState<AppView>(saved?.view || 'overview');
  const [selectedSection, setSelectedSection] = useState<number>(saved?.selectedSection || 1);
  const [selectedModule, setSelectedModule] = useState<'big_picture' | 'framework' | 'verse_by_verse'>(saved?.selectedModule || 'big_picture');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ view, selectedSection, selectedModule }));
  }, [view, selectedSection, selectedModule]);

  const handleSelectSubBook = () => {
    setView('sections');
  };

  const handleSelectSection = (sectionId: number) => {
    setSelectedSection(sectionId);
    setSelectedModule('big_picture');
    setView('study');
  };

  const handleBack = () => {
    if (view === 'study') {
      setView('sections');
    } else if (view === 'sections') {
      setView('overview');
    }
  };

  const handleBreadcrumbNavigate = (targetView: AppView) => {
    setView(targetView);
  };

  return (
    <div className="min-h-screen">
      <ScrollProgress view={view} selectedSection={selectedSection} />
      <Breadcrumb
        view={view}
        selectedSection={selectedSection}
        selectedModule={selectedModule}
        onNavigate={handleBreadcrumbNavigate}
      />
      <AnimatePresence mode="wait">
        {view === 'overview' && (
          <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <BookOverview onSelectSubBook={handleSelectSubBook} />
          </motion.div>
        )}
        {view === 'sections' && (
          <motion.div key="sections" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <SectionGrid
              onSelectSection={handleSelectSection}
              onBack={handleBack}
            />
          </motion.div>
        )}
        {view === 'study' && (
          <motion.div key="study" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <StudyView
              sectionId={selectedSection}
              selectedModule={selectedModule}
              onModuleChange={setSelectedModule}
              onBack={handleBack}
              onSelectSection={handleSelectSection}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <BackToTop />
    </div>
  );
}
