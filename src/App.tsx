import React, { useState } from 'react';
import { AppView } from './types';
import BookOverview from './components/BookOverview';
import SectionGrid from './components/SectionGrid';
import StudyView from './components/StudyView';

export default function App() {
  const [view, setView] = useState<AppView>('overview');
  const [selectedSection, setSelectedSection] = useState<number>(1);
  const [selectedModule, setSelectedModule] = useState<'big_picture' | 'framework' | 'verse_by_verse'>('big_picture');

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

  return (
    <div className="min-h-screen">
      {view === 'overview' && (
        <BookOverview onSelectSubBook={handleSelectSubBook} />
      )}
      {view === 'sections' && (
        <SectionGrid
          onSelectSection={handleSelectSection}
          onBack={handleBack}
        />
      )}
      {view === 'study' && (
        <StudyView
          sectionId={selectedSection}
          selectedModule={selectedModule}
          onModuleChange={setSelectedModule}
          onBack={handleBack}
        />
      )}
    </div>
  );
}
