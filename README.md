# The Book of Isaiah — Interactive Study App

A deep, interactive study app for the Book of Isaiah combining seminary-level scholarship with pastoral warmth and psychological precision. Built for classroom use, designed for the soul.

**Translation:** NRSV (New Revised Standard Version)

---

## What This Is

Isaiah is sixty-six chapters of poetry, prophecy, and promise — and most study tools treat it like a textbook. This app treats it like what it is: a living argument between God and God's people, written by one of the greatest poets in human history.

Each chapter is explored through three study modules:

- **The Big Picture** — Historical context, literary overview, and five expert perspectives that help you enter the text from different angles
- **The Framework** — Chiastic structures, poetic devices, and the architectural genius of Hebrew poetry
- **Verse by Verse** — Scripture text with Hebrew keywords, cross-references, common misreadings, and pastoral commentary

Every module ends with a **Soul Reflection** — a scenario drawn from the chapter's themes, with seven possible responses. Each response receives a thoughtful, personalized insight. No response is wrong. All are treated with equal dignity.

---

## Current State

**Phase 1 MVP — Section 1 complete:**
- Book Overview landing page with all five sub-books of Isaiah
- Section Grid with instructor-controlled class progress marker
- Section 1: *The Courtroom* (Isaiah 1) — fully built with all three modules
- Sections 2–7 display as "Coming Soon" placeholders

---

## The Five Sub-Books of Isaiah

| # | Name | Chapters | Central Question |
|---|------|----------|-----------------|
| I | The Book of Judgment | 1–12 | *Will you trust the Holy One or your own arrangements?* |
| II | The Book of the Nations | 13–27 | *Is your God big enough to govern all of history?* |
| III | The Book of Woes | 28–35 | *What are you leaning on — and will it hold?* |
| IV | The Historical Bridge | 36–39 | *Can you trust God in victory as well as in crisis?* |
| V | The Book of Comfort | 40–66 | *Will you let God comfort you — and become a comforter?* |

---

## Design Philosophy

### Color = Meaning

Every color in the app conveys interpretive information. Nothing is decorative.

**Four Interpretive Threads** trace through the entire book:

| Thread | Color | Question It Answers |
|--------|-------|-------------------|
| Exodus | Blue | *Has God forgotten me?* — Your crisis has a precedent. |
| Zion/Eden | Green | *Is this all there is?* — Your longing for wholeness is orientation toward home. |
| Messiah | Gold | *Is it all up to me?* — Someone else carries this. |
| Hope | Amber | *Is it too late for me?* — The stump sprouts. Always. |

**Five Entering-the-Text Perspectives** offer different lenses:

| Perspective | Color | Label |
|-------------|-------|-------|
| Spiritual Director | Violet | For Your Soul |
| Pastoral Director | Rose | For Your Daily Walk |
| Psychologist | Teal | What You Might Be Feeling |
| Theologian | Slate | The Deeper Pattern |
| Historian | Bronze | The World Behind the Text |

### Writing Style

All soul reflection insights and pastoral commentary follow the [Homiletic Style Guide](HOMILETIC_STYLE_GUIDE.md) — a reference document built on 17 cadence tools drawn from biblical authors (Isaiah, Psalms, Paul, Ecclesiastes, Jesus, Jeremiah). The goal: every paragraph should sound like it was written by a person who has been in the room with the reader, not by someone diagnosing them from behind glass.

Key principles:
- Concrete before abstract — image first, concept second
- Direct address — "you," not "one" or "the reader"
- Varied sentence length — no metronomic rhythm
- No two consecutive insights use the same cadence tool
- Leave the door open rather than closing the case

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS (CDN) with glass-panel aesthetic |
| Fonts | Crimson Pro (scripture), Inter (UI) |
| Icons | lucide-react |
| Content | Static data files — no backend, no database, no AI API |
| Deployment | Static (Vite build) |

---

## Project Structure

```
src/
├── main.tsx                # Entry point
├── App.tsx                 # View state navigation (overview → sections → study)
├── types.ts                # All TypeScript interfaces
├── colors.ts               # Functional color system constants
├── components/
│   ├── BookOverview.tsx     # Five sub-books landing page
│   ├── SectionGrid.tsx      # Section cards with class progress marker
│   ├── StudyView.tsx        # Module tabs (Big Picture / Framework / Verse by Verse)
│   ├── BigPictureView.tsx   # Historical context, perspectives, themes
│   ├── FrameworkView.tsx    # Chiastic structure, poetic devices
│   ├── VerseByVerseView.tsx # Scripture text, keywords, cross-refs, misreadings
│   ├── SoulReflection.tsx   # 7-option emotional reflection panels
│   ├── ImageGallery.tsx     # PNG/SVG/PDF gallery with lightbox
│   ├── WordStudyModal.tsx   # Hebrew keyword deep dive modal
│   ├── ThemeTracker.tsx     # Interpretive thread badges
│   └── GenreBadge.tsx       # Literary genre identification
└── data/
    ├── book-overview.ts     # Five sub-books metadata
    ├── class-progress.ts    # Instructor-controlled class position
    ├── sections-index.ts    # Section registry
    └── isaiah-1.ts          # Section 1: The Courtroom (Isaiah 1)

public/
└── images/                  # Instructor uploads organized by section
    ├── section-1/
    ├── section-2/
    └── ...

HOMILETIC_STYLE_GUIDE.md     # Writing style reference (17 cadence tools)
```

---

## Getting Started

**Prerequisites:** Node.js (v18+)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## For Instructors

### Moving the Class Progress Marker

Open `src/data/class-progress.ts` and update the section number:

```typescript
export const classProgress: ClassProgress = {
  currentSection: 2,           // Move to the current section
  currentModule: 'big_picture', // Which module students should start with
  lastUpdated: '2026-02-15',
  instructorNote: 'This week: The Song of the Vineyard',
};
```

Rebuild and redeploy. Students will see the marker on the section grid.

### Adding Images and Infographics

1. Drop PNG, SVG, or PDF files into `public/images/section-N/`
2. Add entries to the section's `images` array in the data file:

```typescript
images: [
  { src: '/images/section-1/chiasm-diagram.png', alt: 'Chiastic structure of Isaiah 1', caption: 'The mirror structure' },
]
```

3. Rebuild and redeploy

### Adding New Sections

1. Create a new data file: `src/data/isaiah-2.ts`
2. Follow the `Section` interface from `src/types.ts`
3. Import and register in `src/data/sections-index.ts`
4. Update `class-progress.ts` to move the class marker
5. Rebuild and redeploy

---

## Key Features

- **Genre Badges** — Each section identifies its literary genre (covenant lawsuit, woe oracle, love song, etc.) so readers know what kind of text they're in
- **Hebrew Word Studies** — Tap any highlighted keyword for a modal with the Hebrew word, transliteration, definition, and significance in Isaiah
- **Cross-References** — "Builds On" (backward) and "Points Toward" (forward) links connecting Isaiah to the rest of scripture
- **Common Misreadings** — Gentle corrections of frequent misinterpretations, with explanations of why the distinction matters
- **Poetic Devices** — Synonymous parallelism, antithetic parallelism, chiasm, inclusio, wordplay — Isaiah is poetry, and the app treats it that way
- **Prayer Prompts** — Each section closes with a prayer prompt and suggested physical posture
- **Image Gallery** — Lightbox gallery supporting PNG, SVG, and PDF for instructor-uploaded diagrams and infographics

---

## License

This project contains original scholarly and pastoral content. All rights reserved.
