# The Book of Isaiah — Study App

## Overview
A deep, interactive study app for the Book of Isaiah (starting with chapters 1-12) combining seminary-level scholarship with pastoral warmth and psychological precision. Pre-written static content. No AI dependency. Beautiful glass-panel UI with a functional color system.

**Translation:** NRSV (New Revised Standard Version)  
**GitHub:** https://github.com/hwillGIT/isaiah-study-app

## Current State
- Phase 1 MVP: Section 1 (Isaiah 1 - "The Courtroom") fully built with all three modules
- Book Overview landing with 5 sub-books
- Section Grid with class progress marker (instructor-controlled)
- Sections 2-7 show as "Coming Soon" placeholders
- Full UI/UX polish: breadcrumb navigation, collapsible sidebar, scroll progress, back-to-top, animated transitions, mini TOC, localStorage progress memory

## Architecture
- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS (CDN) with glass-panel aesthetic
- **Animations:** framer-motion (page transitions, accordion, tab indicators, soul reflection reveals)
- **Fonts:** Crimson Pro (scripture), Inter (UI)
- **Icons:** lucide-react
- **Content:** Static data files in src/data/
- **No backend, no database, no AI API**

## Project Structure
```
src/
├── main.tsx              # Entry point
├── App.tsx               # View state navigation + localStorage progress + layout
├── types.ts              # All TypeScript interfaces
├── colors.ts             # Functional color system constants
├── components/
│   ├── BookOverview.tsx   # 5 sub-books landing page
│   ├── SectionGrid.tsx    # 7 sections with class progress
│   ├── StudyView.tsx      # Module tabs with animated indicator + sidebar layout
│   ├── BigPictureView.tsx # Historical context, perspectives, themes
│   ├── FrameworkView.tsx  # Chiastic structure, poetic devices
│   ├── VerseByVerseView.tsx # Scripture text, keywords, cross-refs, mini TOC
│   ├── SoulReflection.tsx # 7-option emotional reflection with reveal animation
│   ├── ImageGallery.tsx   # PNG/SVG/PDF gallery with lightbox (instructor uploads)
│   ├── WordStudyModal.tsx # Hebrew keyword deep dive modal
│   ├── ThemeTracker.tsx   # 4 interpretive thread badges
│   ├── GenreBadge.tsx     # Literary genre identification
│   ├── Breadcrumb.tsx     # Sticky breadcrumb navigation bar
│   ├── Sidebar.tsx        # Collapsible section sidebar (desktop + mobile)
│   ├── ScrollProgress.tsx # Thin scroll progress bar at top
│   ├── BackToTop.tsx      # Floating back-to-top button
│   └── AnimatedCollapse.tsx # Reusable smooth accordion animation
└── data/
    ├── book-overview.ts   # 5 sub-books metadata
    ├── class-progress.ts  # Instructor-controlled class position
    ├── sections-index.ts  # Section registry
    └── isaiah-1.ts        # Section 1: The Courtroom (Chapter 1)
public/
└── images/               # Instructor uploads (organized by section)
    ├── section-1/
    ├── section-2/
    └── ...
```

## Key Design Decisions
- **Color = Meaning:** Threads (blue/green/gold/amber), Lenses (violet/rose/teal/slate/bronze)
- **Three Expert Lenses:** Spiritual Director, Pastoral Director, Psychologist
- **Four Interpretive Threads:** Exodus, Zion/Eden, Messiah, Hope
- **Soul Reflections:** 7 options per section, all treated with equal dignity
- **Class Progress:** Instructor updates currentSection in class-progress.ts and republishes
- **Image Gallery:** Supports PDF, SVG, PNG — instructor drops files in public/images/section-N/

## UI/UX Features
- **Breadcrumb Navigation:** Sticky bar showing full path (Isaiah > Book of Judgment > Section > Module), each segment clickable
- **Collapsible Sidebar:** Desktop: narrow with expand-on-hover; Mobile: hamburger slide-out overlay
- **Page Transitions:** framer-motion AnimatePresence fade+slide between views and module tabs
- **Animated Tab Indicator:** Smooth sliding pill using framer-motion layoutId
- **Smooth Accordions:** All expandable sections animate height smoothly via AnimatedCollapse
- **Scroll Progress Bar:** Thin colored bar at page top showing scroll position, section-color-coded
- **Back to Top Button:** Floating glass button appears on scroll, smooth-scrolls up
- **Mini Table of Contents:** Sticky horizontal nav in Verse by Verse view with IntersectionObserver active highlighting
- **Hover Effects:** Subtle glow/lift on sub-book cards, section cards, perspective panels
- **Soul Reflection Reveal:** Insights fade and slide in instead of snapping
- **Reading Progress Memory:** localStorage persists view/section/module, restores on page load

## User Preferences
- NRSV translation
- Seminary-level scholarship with pastoral warmth
- Functional color system where every color conveys meaning
- "Builds On" (back-references) and "Points Toward" (forward-references) for cross-references
- Hebrew poetic devices highlighted — Isaiah is poetry, not prose
- 7 Soul Reflection options (not 5) for broader emotional range

## Writing Style
- All soul reflection insights and pastoral commentary follow the Homiletic Style Guide (HOMILETIC_STYLE_GUIDE.md)
- 17 cadence tools drawn from biblical authors (Isaiah, Psalms, Paul, Ecclesiastes, Jesus, Jeremiah)
- Anti-patterns to avoid: "This is..." openers, uniform sentence length, naming before showing, academic throat-clearing
- Rotation principle: no two consecutive insights should use the same cadence tool

## How to Add New Content
1. Create new data file in src/data/ (e.g., isaiah-2.ts)
2. Import and register in src/main.tsx
3. Follow the Section interface from types.ts
4. Update class-progress.ts to move the class marker

## How to Add Images/Infographics
1. Drop PNG, SVG, or PDF files into public/images/section-N/
2. Add entries to the section's `images` array in the data file
3. Rebuild and republish

## Technical Notes
- HMR disabled to prevent refresh loops — manual refresh required
- GitHub push requires manual shell command: `git push origin main`
- Tailwind CSS via CDN (not PostCSS build)

## Deployment
- Static deployment (Vite build)
- Build: `npm run build`
- Output: `dist/`
