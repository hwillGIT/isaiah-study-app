# The Book of Isaiah — Study App

## Overview
A deep, interactive study app for the Book of Isaiah (chapters 1-27) combining seminary-level scholarship with pastoral warmth and psychological precision. Pre-written static content. No AI dependency. Beautiful glass-panel UI with a functional color system.

**Translation:** NIV 2011 (New International Version)  
**GitHub:** https://github.com/hwillGIT/isaiah-study-app

## Current State
- Phase 1 COMPLETE: Book of Judgment (Isaiah 1-12) — 7 sections fully built
- Phase 2 COMPLETE: Book of the Nations (Isaiah 13-27) — 7 sections fully built
- Book Overview landing with 5 sub-books (2 active, 3 coming soon)
- Section Grid with class progress marker (instructor-controlled, currently set to Section 7)
- Full UI/UX polish: breadcrumb navigation, collapsible sidebar, scroll progress, back-to-top, animated transitions, mini TOC, localStorage progress memory

## All 14 Sections

### Book of Judgment (Chapters 1-12)
1. **The Courtroom** (Ch.1) — Covenant Lawsuit — red
2. **The Mountain and the Abyss** (Ch.2) — Vision Oracle — slate
3. **The Stripping and the Canopy** (Chs.3-4) — Woe Oracle — amber
4. **The Vineyard Song** (Ch.5) — Love Song Turned Lament — purple
5. **The Throne Room** (Ch.6) — Throne Vision / Call Narrative — yellow
6. **The Immanuel Cycle** (Chs.7-9) — Sign Oracle — blue
7. **The Stump and the Song** (Chs.10-12) — Salvation Hymn — green

### Book of the Nations (Chapters 13-27)
8. **The Fallen Morning Star** (Chs.13-14) — Taunt Song — crimson
9. **The Weeping Fields** (Chs.15-16) — Lament Oracle — teal
10. **The Fading Garland** (Chs.17-18) — Warning Oracle — orange
11. **The Altar Among Enemies** (Chs.19-20) — Transformation Oracle — emerald
12. **The Valley of Vision** (Chs.21-22) — Burden Oracle — indigo
13. **The Merchant Queen** (Ch.23) — Trade Lament — rose
14. **The Little Apocalypse** (Chs.24-27) — Apocalyptic Hymn — violet

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
├── main.tsx              # Entry point (imports all 14 data files)
├── App.tsx               # View state navigation + localStorage progress + layout
├── types.ts              # All TypeScript interfaces
├── colors.ts             # Functional color system constants
├── components/
│   ├── BookOverview.tsx   # 5 sub-books landing page
│   ├── SectionGrid.tsx    # 14 sections with class progress
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
    ├── isaiah-1.ts        # Section 1: The Courtroom (Chapter 1)
    ├── isaiah-2.ts        # Section 2: The Mountain and the Abyss (Chapter 2)
    ├── isaiah-3.ts        # Section 3: The Stripping and the Canopy (Chapters 3-4)
    ├── isaiah-4.ts        # Section 4: The Vineyard Song (Chapter 5)
    ├── isaiah-5.ts        # Section 5: The Throne Room (Chapter 6)
    ├── isaiah-6.ts        # Section 6: The Immanuel Cycle (Chapters 7-9)
    ├── isaiah-7.ts        # Section 7: The Stump and the Song (Chapters 10-12)
    ├── isaiah-8.ts        # Section 8: The Fallen Morning Star (Chapters 13-14)
    ├── isaiah-9.ts        # Section 9: The Weeping Fields (Chapters 15-16)
    ├── isaiah-10.ts       # Section 10: The Fading Garland (Chapters 17-18)
    ├── isaiah-11.ts       # Section 11: The Altar Among Enemies (Chapters 19-20)
    ├── isaiah-12.ts       # Section 12: The Valley of Vision (Chapters 21-22)
    ├── isaiah-13.ts       # Section 13: The Merchant Queen (Chapter 23)
    └── isaiah-14.ts       # Section 14: The Little Apocalypse (Chapters 24-27)
public/
└── images/               # Instructor uploads (organized by section)
    ├── section-1/
    ├── section-2/
    └── ...
```

## Key Design Decisions
- **Color = Meaning:** Threads (blue/green/gold/amber), Lenses (violet/rose/teal/slate/bronze)
- **Five Expert Lenses:** Spiritual Director, Pastoral Director, Psychologist, Theologian, Historian
- **Four Interpretive Threads:** Exodus, Zion/Eden, Messiah, Hope
- **Soul Reflections:** 7 options per section, all treated with equal dignity
- **Class Progress:** Instructor updates currentSection in class-progress.ts and republishes
- **Image Gallery:** Supports PDF, SVG, PNG — instructor drops files in public/images/section-N/
- **So What / Now What:** Short question-driven prompts (1-2 sentences), not explanations
- **"A Moment to Pray":** Reader-centered prayer heading (not "Prayer Prompt")

## UI/UX Features
- **Breadcrumb Navigation:** Sticky bar showing full path (Isaiah > Sub-Book > Section > Module), each segment clickable
- **Collapsible Sidebar:** Desktop: narrow with expand-on-hover; Mobile: hamburger slide-out overlay
- **Page Transitions:** framer-motion AnimatePresence fade+slide between views and module tabs
- **Animated Tab Indicator:** Smooth sliding pill using framer-motion layoutId
- **Smooth Accordions:** All expandable sections animate height smoothly via AnimatedCollapse
- **Scroll Progress Bar:** Thin colored bar at page top showing scroll position, section-color-coded
- **Back to Top Button:** Floating glass button appears on scroll, smooth-scrolls up
- **Mini Table of Contents:** Sticky horizontal nav in Verse by Verse view with IntersectionObserver active highlighting, scrollable with visible scrollbar
- **Hover Effects:** Subtle glow/lift on sub-book cards, section cards, perspective panels
- **Soul Reflection Reveal:** Insights fade and slide in instead of snapping
- **Reading Progress Memory:** localStorage persists view/section/module, restores on page load

## User Preferences
- NIV 2011 translation
- Seminary-level scholarship with pastoral warmth
- Functional color system where every color conveys meaning
- "Builds On" (back-references) and "Points Toward" (forward-references) for cross-references
- Hebrew poetic devices highlighted — Isaiah is poetry, not prose
- 7 Soul Reflection options (not 5) for broader emotional range
- Short, question-driven "So What / Now What" sections (not mini-essays)
- Reader-centered language ("A Moment to Pray" not "Prayer Prompt")

## Writing Style
- All soul reflection insights and pastoral commentary follow the Homiletic Style Guide (HOMILETIC_STYLE_GUIDE.md)
- 17 cadence tools drawn from biblical authors (Isaiah, Psalms, Paul, Ecclesiastes, Jesus, Jeremiah)
- Anti-patterns to avoid: "This is..." openers, uniform sentence length, naming before showing, academic throat-clearing
- Rotation principle: no two consecutive insights should use the same cadence tool

## Genre Types
Phase 1: covenant_lawsuit, vision_oracle, woe_oracle, love_song_lament, throne_vision, sign_oracle, salvation_hymn
Phase 2: taunt_song, lament_oracle, warning_oracle, transformation_oracle, burden_oracle, trade_lament, apocalyptic_hymn

## How to Add New Content
1. Create new data file in src/data/ (e.g., isaiah-15.ts)
2. Import in src/main.tsx
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

## Phase History
- **Phase 1** (complete): Book of Judgment, Isaiah 1-12, 7 sections
- **Phase 2** (complete): Book of the Nations, Isaiah 13-27, 7 sections
- **Phase 3** (future): Book of Woes, Isaiah 28-35
- **Phase 4** (future): The Historical Bridge, Isaiah 36-39
- **Phase 5** (future): Book of Comfort, Isaiah 40-66
