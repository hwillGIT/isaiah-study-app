export type AppView = 'overview' | 'sections' | 'study';

export interface SubBook {
  id: number;
  name: string;
  subtitle: string;
  chapters: string;
  centralQuestion: string;
  colorFrom: string;
  colorTo: string;
  available: boolean;
}

export interface Section {
  id: number;
  title: string;
  subtitle: string;
  chapters: string;
  emotionalArc: string;
  colorClass: string;
  accentClass: string;
  glowClass: string;
  gradientClass: string;
  genre: GenreTag;
  historicalContext: HistoricalContext;
  themes: ThemeMarker[];
  bigPicture: BigPictureModule;
  framework: FrameworkModule;
  verseByVerse: VerseByVerseModule;
  images?: SectionImage[];
}

export interface SectionImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BigPictureModule {
  literaryContext: string;
  perspectives: PerspectiveItem[];
  soulReflection: SoulReflection;
}

export interface FrameworkModule {
  structure: StructuralLine[];
  poeticDevices: PoeticDevice[];
  soulReflection: SoulReflection;
}

export interface VerseByVerseModule {
  verses: VerseAnalysis[];
  buildsOn: BackReference[];
  pointsToward: ForwardReference[];
  emotionalJourney: string;
  misreadings: Misreading[];
  soWhatNowWhat: SoWhatNowWhat;
  soulReflection: SoulReflection;
  prayerPrompt: PrayerPrompt;
  crossReferences: CrossReference[];
}

export interface VerseAnalysis {
  verseNumber: string;
  text: string;
  keywords?: KeywordInsight[];
  poeticDevices?: PoeticDevice[];
  notes?: string;
}

export interface KeywordInsight {
  word: string;
  hebrew: string;
  transliteration: string;
  definition: string;
  significance: string;
}

export interface PerspectiveItem {
  role: 'Spiritual Director' | 'Pastoral Director' | 'Psychologist' | 'Theologian' | 'Historian';
  text: string;
}

export interface StructuralLine {
  label: string;
  reference: string;
  content: string;
  pairId?: string;
  indent: number;
  connection?: string;
}

export interface SoulReflection {
  scenario: string;
  options: SoulReflectionOption[];
}

export interface SoulReflectionOption {
  text: string;
  insight: string;
}

export interface Misreading {
  misreading: string;
  correction: string;
  whyItMatters: string;
}

export interface ThemeMarker {
  theme: 'exodus' | 'zion_eden' | 'messiah' | 'hope';
  active: boolean;
  connection: string;
}

export interface SoWhatNowWhat {
  whatDoesThisMean: string;
  soWhat: string;
  nowWhat: string;
}

export interface CrossReference {
  isaiahRef: string;
  ntRef: string;
  connection: string;
}

export interface PoeticDevice {
  type: 'synonymous' | 'antithetic' | 'synthetic' | 'chiasm' | 'inclusio' | 'wordplay';
  verses: string;
  explanation: string;
}

export interface GenreTag {
  genre: 'covenant_lawsuit' | 'vision_oracle' | 'woe_oracle' | 'love_song' | 'throne_vision' | 'sign_oracle' | 'salvation_hymn';
  label: string;
  description: string;
}

export interface HistoricalContext {
  period: string;
  politicalSituation: string;
  keyFigures: string[];
  whyItMatters: string;
}

export interface TheologicalTerm {
  term: string;
  hebrew: string;
  transliteration: string;
  definition: string;
  isaiahUsage: string;
  crossBookDevelopment: string;
}

export interface PrayerPrompt {
  prompt: string;
  posture: string;
}

export interface BackReference {
  sourceRef: string;
  label: string;
  connection: string;
}

export interface ForwardReference {
  targetRef: string;
  targetBook: 'isaiah' | 'ot' | 'nt' | 'revelation';
  label: string;
  connection: string;
}

export interface ClassProgress {
  currentSection: number;
  currentModule: string;
  lastUpdated: string;
  instructorNote?: string;
}
