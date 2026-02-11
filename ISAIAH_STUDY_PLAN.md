# The Book of Isaiah — Study App Plan

## Vision
A deep, interactive study app for the Book of Isaiah (starting with chapters 1-12) using the same beautiful glass-panel design as the James Study App. Pre-written static content with no AI dependency.

---

## The Five Sub-Books of Isaiah

| # | Name | Chapters | Central Question |
|---|------|----------|-----------------|
| I | **The Book of Judgment** ("The Reckoning") | 1–12 | Will you trust the Holy One or your own arrangements? |
| II | **The Book of the Nations** ("The Reckoning Widens") | 13–27 | Is your God big enough to govern all of history? |
| III | **The Book of Woes** ("The Folly of False Alliances") | 28–35 | What are you leaning on — and will it hold? |
| IV | **The Historical Bridge** ("The Hinge") | 36–39 | Can you trust God in victory as well as in crisis? |
| V | **The Book of Comfort** ("The Homecoming") | 40–66 | Will you let God comfort you — and become a comforter? |

---

## Phase 1 Scope: The Book of Judgment (Chapters 1–12)

### Seven Study Sections

| # | Section | Chapters | Title | Emotional Arc |
|---|---------|----------|-------|---------------|
| 1 | The Courtroom | 1 | "The Great Accusation" | Denial → exposure → open door |
| 2 | The Mountain and the Abyss | 2 | "Two Visions" | Awe → terror → disorientation |
| 3 | The Stripping and the Canopy | 3–4 | "Stripped to Be Clothed" | Loss → grief → re-covering |
| 4 | The Vineyard Song | 5 | "The Heartbreak of God" | Tenderness → betrayal → fury |
| 5 | The Throne Room | 6 | "Undone and Remade" | Terror → disintegration → purification → commission |
| 6 | The Immanuel Cycle | 7–9 | "God With Us in the Dark" | Fear → refusal → sign → blazing light |
| 7 | The Stump and the Song | 10–12 | "What Grows from Ruin" | Devastation → shoot → restoration → eruption of joy |

---

## Three Expert Lenses (Woven into Every Section)

### 1. The Wise Spiritual Director
- Notices movements of consolation and desolation in the soul
- Asks: "Where is God meeting you in this text?"
- Attentive to resistance, invitation, desire, avoidance

### 2. The Wise Pastoral Director
- Connects the text to real life: calling, relationships, community, justice
- Asks: "How does this change how you handle what's in front of you?"
- Speaks to the leader, the parent, the friend, the person in crisis

### 3. The Wise Psychologist
- Names precise emotions (not "sad" but "desolation," "anticipatory grief," "holy dread")
- Tracks the emotional journey through the poetry: imagination → emotion → cognition
- Informed by the Chart of Emotions
- Sees how Isaiah's poetry is designed to move the reader through specific feeling-landscapes

---

## Four Interpretive Threads (Tracked Across Every Section)

| Thread | Question It Answers | What It Means for Faith |
|--------|-------------------|----------------------|
| **Exodus** | "Has God forgotten me?" | He has done this before. Your crisis has a precedent. |
| **Zion/Eden** | "Is this all there is?" | Your longing for wholeness is not dysfunction — it is orientation toward home. |
| **Messiah** | "Is it all up to me?" | Someone else carries this. The weight is on His shoulders. |
| **Hope** | "Is it too late for me?" | The stump sprouts. Always. Your worst chapter is not your last. |

---

## Content Structure Per Section

Each of the 7 sections contains 3 modules:

### Module 1: The Big Picture
- Historical/literary context
- Three expert perspectives (Spiritual Director, Pastoral Director, Psychologist)
- Four-thread tracker (which themes are active)
- Reflection prompt with 5 options (all treated with equal dignity, three-lens insights)

### Module 2: The Framework
- Chiastic / poetic structure analysis
- How the passage is architecturally designed
- Structural lines with theological connections
- Reflection prompt with 5 options

### Module 3: Verse by Verse Deep Dive
- Hebrew keyword analysis
- Theological insight per verse cluster
- The Emotional Journey — how the text moves the reader
- 5 Common Misreadings with gentle corrections
- "So What / Now What" panel:
  - What does this mean? (theological)
  - So what? (personal — how does this speak to my life?)
  - Now what? (response — what does faithful action look like?)
- Reflection prompt with 5 options

---

## Enhanced Data Types (vs. James App)

### New: Misreading
```
{
  misreading: string,     // What people commonly think
  correction: string,     // What the text actually means
  why_it_matters: string  // Why the difference matters for faith
}
```

### New: ThemeMarker
```
{
  theme: 'exodus' | 'zion_eden' | 'messiah' | 'hope',
  active: boolean,
  connection: string  // How this theme shows up in this section
}
```

### New: SoWhatNowWhat
```
{
  what_does_this_mean: string,   // Theological meaning
  so_what: string,               // Personal meaning
  now_what: string               // Faithful response
}
```

### Enhanced: ReflectionOption
```
{
  text: string,    // The reader's response
  insight: string  // Three-lens insight (no probability markers, all equally dignified)
}
```

### Enhanced: PerspectiveItem
```
{
  role: 'Spiritual Director' | 'Pastoral Director' | 'Psychologist' | 'Theologian' | 'Historian',
  text: string
}
```

---

## Build Phases

### Phase 1: Scaffold & UI (Task 1-2)
- Set up clean folder structure
- Create enhanced TypeScript data types
- Build UI components for new features:
  - Four-thread tracker badges
  - Misreadings panel
  - So What / Now What panel
  - Emotional Journey section
  - Three-lens perspective rendering
- Book Overview landing page (all 5 sub-books)

### Phase 2: Content — Isaiah 1–4 (Task 3)
- Section 1: The Courtroom (ch. 1)
- Section 2: The Mountain and the Abyss (ch. 2)
- Section 3: The Stripping and the Canopy (ch. 3–4)

### Phase 3: Content — Isaiah 5–6 (Task 4)
- Section 4: The Vineyard Song (ch. 5)
- Section 5: The Throne Room (ch. 6)

### Phase 4: Content — Isaiah 7–12 (Task 5)
- Section 6: The Immanuel Cycle (ch. 7–9)
- Section 7: The Stump and the Song (ch. 10–12)

### Phase 5: Polish & Publish (Task 6)
- Test all interactions
- Configure deployment
- Verify build

---

## Folder Structure

```
/
├── src/
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   ├── types.ts                 # All TypeScript interfaces
│   ├── components/
│   │   ├── BookOverview.tsx      # Landing page — 5 sub-books
│   │   ├── ChapterSelect.tsx    # Section selection for active sub-book
│   │   ├── StudyView.tsx        # Main study reading view
│   │   ├── ModuleNav.tsx        # Big Picture / Framework / Verse by Verse tabs
│   │   ├── StructureView.tsx    # Chiastic structure display
│   │   ├── VerseStudy.tsx       # Verse-by-verse with keywords
│   │   ├── ReflectionPanel.tsx  # 5-option reflection prompts
│   │   ├── MisreadingsPanel.tsx # 5 common misreadings
│   │   ├── ThemeTracker.tsx     # Four-thread visual tracker
│   │   ├── PerspectivePanel.tsx # Three-lens expert insights
│   │   ├── SoWhatPanel.tsx      # So What / Now What
│   │   └── EmotionalJourney.tsx # Psychologist's emotional arc
│   └── data/
│       ├── book-overview.ts     # 5 sub-books metadata
│       ├── isaiah-1.ts          # Section 1: The Courtroom
│       ├── isaiah-2.ts          # Section 2: The Mountain and the Abyss
│       ├── isaiah-3-4.ts        # Section 3: The Stripping and the Canopy
│       ├── isaiah-5.ts          # Section 4: The Vineyard Song
│       ├── isaiah-6.ts          # Section 5: The Throne Room
│       ├── isaiah-7-9.ts        # Section 6: The Immanuel Cycle
│       └── isaiah-10-12.ts      # Section 7: The Stump and the Song
├── index.html
├── index.css
├── vite.config.ts
├── tsconfig.json
├── package.json
└── ISAIAH_STUDY_PLAN.md
```

---

## Design Notes
- Same dark glass-panel aesthetic as James app
- Tailwind CSS for styling
- Color theme: Deep purples, golds, and crimsons (prophetic, royal, sacrificial)
- Each sub-book gets its own color palette
- Each of the 7 sections gets a unique icon
- Responsive design for mobile reading
- No AI API dependency — all content pre-written
- Static deployment for cost efficiency
