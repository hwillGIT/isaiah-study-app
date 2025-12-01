import React, { useState, useEffect, useRef } from 'react'; 
import { createRoot } from 'react-dom/client';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  BrainCircuit,
  ArrowRight, 
  RefreshCw,
  Menu,
  X,
  Lightbulb,
  Quote,
  Layers,
  Glasses,
  MessageCircle,
  Bot,
  Heart,
  Feather,
  Sun,
  Moon,
  BookHeart,
  Stars,
  AlignCenter,
  Search,
  ScrollText,
  Droplets,
  Flame,
  Scale,
  HandHeart,
  CloudRain,
  Key,
  GitMerge,
  History,
  Landmark,
  LayoutDashboard,
  ArrowLeft,
  Globe,
  ScanSearch,
  Database,
  Wifi,
  WifiOff,
  CloudOff,
  Anchor,
  FileJson,
  ShieldCheck,
  ChevronLeft,
  ChevronDown,
  XCircle,
  Maximize2
} from 'lucide-react';

// --- Types ---

interface ReflectionOption {
  text: string;
  insight: string; 
}

interface ReflectionPrompt {
  scenario: string; 
  options: ReflectionOption[];
}

interface PerspectiveItem {
  role: string; 
  text: string;
}

interface StructuralLine {
  label: string; // e.g. "A", "B", "X"
  text: string;
  indent: number; // 0, 1, 2, etc.
  pairing?: string; // e.g. "A'" or empty if pivot
  theological_connection: string; // The insight revealed on click
}

interface KeywordInsight {
  word: string; // English representation
  original: string; // Greek/Hebrew
  insight: string; // Deep theological dive
}

interface VerseAnalysis {
  reference: string; // e.g. "Verse 14"
  text: string;
  keywords: KeywordInsight[];
}

interface KeyConcept {
  term: string;
  explanation: string;
}

interface ContentSection {
  type: 'context' | 'structure' | 'verse_study' | 'parable' | 'illumination' | 'communion';
  title: string;
  content: string; 
  perspectiveItems?: PerspectiveItem[];
  structuralLines?: StructuralLine[]; 
  verseAnalyses?: VerseAnalysis[];
  keyConcepts?: KeyConcept[]; 
}

interface Module {
  title: string;
  duration: string;
  level: 'The Big Picture' | 'The Framework' | 'Verse by Verse'; 
  sections: ContentSection[];
  reflections: ReflectionPrompt[];
}

interface Course {
  topic: string;
  scripture_reference: string; 
  title: string;
  description: string;
  modules: Module[];
  _source?: 'static' | 'ai' | 'cache';
  _version?: string;
}

interface ThemeColors {
  primary: string;     
  secondary: string;   
  accent: string;      
  gradient: string;    
  particle: string;    
  button: string;      
}

interface JamesChapter {
  id: number;
  title: string;
  subtitle: string;
  verseCount: number;
  icon: React.ReactNode;
  description: string;
  theme: ThemeColors;
}

// --- Constants ---

const JAMES_CHAPTERS: JamesChapter[] = [
  { 
    id: 1, 
    title: "The Crucible of Faith", 
    subtitle: "James 1", 
    verseCount: 27,
    icon: <Droplets className="w-6 h-6" />,
    description: "Trials, wisdom, and the mirror of the word.",
    theme: {
      primary: "text-cyan-300",
      secondary: "text-cyan-100",
      accent: "border-cyan-500/30",
      gradient: "from-cyan-900/20 to-blue-900/10",
      particle: "rgba(103, 232, 249, ",
      button: "from-cyan-500/20 to-blue-500/20"
    }
  },
  { 
    id: 2, 
    title: "Faith That Breeds Life", 
    subtitle: "James 2", 
    verseCount: 26,
    icon: <Scale className="w-6 h-6" />,
    description: "The sin of partiality and active works.",
    theme: {
      primary: "text-emerald-300",
      secondary: "text-emerald-100",
      accent: "border-emerald-500/30",
      gradient: "from-emerald-900/20 to-teal-900/10",
      particle: "rgba(110, 231, 183, ",
      button: "from-emerald-500/20 to-teal-500/20"
    }
  },
  { 
    id: 3, 
    title: "Taming the Tongue", 
    subtitle: "James 3", 
    verseCount: 18,
    icon: <Flame className="w-6 h-6" />,
    description: "The power of speech and wisdom from above.",
    theme: {
      primary: "text-orange-300",
      secondary: "text-orange-100",
      accent: "border-orange-500/30",
      gradient: "from-orange-900/20 to-red-900/10",
      particle: "rgba(253, 186, 116, ",
      button: "from-orange-500/20 to-red-500/20"
    }
  },
  { 
    id: 4, 
    title: "Surrender & Grace", 
    subtitle: "James 4", 
    verseCount: 17,
    icon: <HandHeart className="w-6 h-6" />,
    description: "Warring passions and humble submission.",
    theme: {
      primary: "text-rose-300",
      secondary: "text-rose-100",
      accent: "border-rose-500/30",
      gradient: "from-rose-900/20 to-pink-900/10",
      particle: "rgba(253, 164, 175, ",
      button: "from-rose-500/20 to-pink-500/20"
    }
  },
  { 
    id: 5, 
    title: "Patience & Restoration", 
    subtitle: "James 5", 
    verseCount: 20,
    icon: <CloudRain className="w-6 h-6" />,
    description: "Patience in suffering and the prayer of faith.",
    theme: {
      primary: "text-indigo-300",
      secondary: "text-indigo-100",
      accent: "border-indigo-500/30",
      gradient: "from-indigo-900/20 to-violet-900/10",
      particle: "rgba(165, 180, 252, ",
      button: "from-indigo-500/20 to-violet-500/20"
    }
  }
];

// --- STATIC CONTENT (THEOLOGICAL FILES) ---

const THEOLOGICAL_VERSION = "2.2.2-Chiasm-Refined";

const STATIC_COURSE_DATA: Record<number, Course> = {
  1: {
    topic: "James Chapter 1: The Crucible of Faith",
    scripture_reference: "James 1",
    title: "The Crucible of Faith",
    description: "A profound journey into the alchemy of trials, where testing produces the gold of endurance. We explore the nature of wisdom, the deception of temptation, and the mirror of the Royal Law.",
    _source: 'static',
    _version: THEOLOGICAL_VERSION,
    modules: [
      {
        title: "The Big Picture",
        duration: "15 min read",
        level: "The Big Picture",
        sections: [
           {
             type: "context",
             title: "The Brother of the Lord",
             content: "James, the brother of Jesus, writes not as a sibling claiming royalty, but as a 'bondservant' (doulos). This letter, likely the earliest New Testament writing (AD 45-48), addresses the Jewish Diaspora—believers scattered like seeds across the Roman world. It is the 'Proverbs of the New Testament', deeply Jewish, practical, and authoritative. It bridges the Sermon on the Mount with the gritty reality of persecution.",
             perspectiveItems: [
               { role: "Historian", text: "Written before the Jerusalem Council (AD 49), reflecting a primitive church structure." },
               { role: "Theologian", text: "Focuses on 'Ortho-praxy' (right action) as the inevitable fruit of 'Ortho-doxy' (right belief)." }
             ]
           }
        ],
        reflections: [
          {
            scenario: "James introduces himself simply as a 'servant' despite being the brother of Jesus. You are in a situation where you could leverage a connection, a title, or a past achievement to get ahead, but you are asked to wait in the back of the line. How does your internal world react?",
            options: [
              { 
                text: "My face feels hot. A physical wave of indignation rises up within me.", 
                insight: "This heat is a signal that your perceived value feels threatened. It is a natural, visceral defense. Devotionally, the invitation is to bring this 'heat' to the Altar. The Father sees your worth not in your connections or status, but in your adoption. You are safe even in obscurity." 
              },
              { 
                text: "\"Don't they know who I am?\" The thought screams in my mind before I can catch it.", 
                insight: "This internal monologue is the echo of the ego. It is human to want to be known. However, this moment offers a 'missed opportunity' if we only listen to the ego. The Spirit invites you to the freedom of anonymity, where your identity is so secure in Christ that it needs no introduction." 
              },
              { 
                text: "I instinctively reach for my phone to text someone who can pull strings.", 
                insight: "The impulse to control the outcome is strong and often rewarded in our world. Yet, James calls us to a different kind of power. This is an opportunity to practice 'holy waiting'—trusting that if God wants a door opened, He has the keys, and He doesn't need our manipulation to turn them." 
              },
              { 
                text: "I feel small and overlooked, like a child left out of a game. I want to hide.", 
                insight: "This tenderness reveals a deep desire for belonging. Jesus, the rejected cornerstone, sits with you in this feeling. Rather than withdrawing, let Him comfort the child within. You are not overlooked by the Eye that watches the sparrow." 
              },
              { 
                text: "I quietly take my place at the back, breathing out a prayer: \"Your will, not mine.\"", 
                insight: "This is the posture of the 'bondservant' (doulos). In this surrender, you find the paradox of the Kingdom: the way up is down. You are walking in the footsteps of James, who found his highest title not in being the Lord's brother, but in being His servant." 
              }
            ]
          }
        ]
      },
      {
        title: "The Framework",
        duration: "10 min read",
        level: "The Framework",
        sections: [
          {
             type: "structure",
             title: "Chiasm of the Tested Heart",
             content: "James 1 is not a random collection of proverbs; it is a carefully constructed chiasm (a mirror structure) designed to lead the believer inward. It begins with the external reality of 'Trials' (v2) and ends with the external evidence of 'Religion' (v27). However, the center of the structure (the pivot at v13-18) reveals the true battlefield: the human heart.",
             structuralLines: [
               { label: "A", text: "Trials & Joy (v2-4)", indent: 0, pairing: "A'", theological_connection: "The chapter opens with the call to interpret trials through joy; in A' that inner work shows up as outward 'pure religion' toward the vulnerable." },
               { label: "B", text: "Wisdom & Prayer (v5-8)", indent: 1, pairing: "B'", theological_connection: "Here we ask for wisdom in the storm; in B' that same wisdom is seen in a life that listens, receives, and actually does the implanted word." },
               { label: "C", text: "Poverty & Riches (v9-11)", indent: 2, pairing: "C'", theological_connection: "This first C exposes the fragility of status; in C' the unchanging Father of lights replaces fading wealth as the believer's true stability." },
               { label: "X", text: "The Source of Temptation (v13-18)", indent: 3, pairing: "", theological_connection: "At the pivot we learn that God sends good gifts, not temptation; the real battle is between our own desires and His life-giving word." },
               { label: "C'", text: "The Good Gift (v17-18)", indent: 2, pairing: "C", theological_connection: "This mirror to C shows that where riches wither, God's good gifts and new birth by the word create a different kind of wealth." },
               { label: "B'", text: "Hearing & Doing (v19-25)", indent: 1, pairing: "B", theological_connection: "Answering B, this section shows what 'asking for wisdom' produces: a life that is slow to speak and that turns hearing into obedient action." },
               { label: "A'", text: "Pure Religion (v26-27)", indent: 0, pairing: "A", theological_connection: "The closing A' makes the opening concrete: the faith that counts trials as joy now bridle the tongue and moves toward widows and orphans." }
             ]
          }
        ],
        reflections: [
          {
            scenario: "A sudden, unexpected financial or relational trial hits you on a Tuesday morning. It feels completely unmerited and unfair. What is the first movement of your soul?",
            options: [
               { 
                 text: "My chest tightens and I can't catch my breath. The world feels unsafe.", 
                 insight: "Fear is a physical response to uncertainty, and it is valid. It is not a lack of faith; it is a human limitation. The devotional invitation is to let your breath become a prayer: 'Abba, hold me.'" 
               },
               { 
                 text: "\"What did I do to deserve this?\" I scan my recent behavior for sin.", 
                 insight: "We often try to find a 'cause' to regain a sense of control. But as Jesus taught with the man born blind, not all suffering is punitive. The Spirit invites you to release the gavel." 
               },
               { 
                 text: "I go completely cold. I function on autopilot, shutting down my heart to survive.", 
                 insight: "Numbing is a shield, and sometimes we need it to survive the initial blow. But if we stay there, we miss the Comforter. The missed opportunity in numbness is that we might not weep." 
               },
               { 
                 text: "I want to throw something. It feels like God is asleep at the wheel.", 
                 insight: "The Psalms are full of this raw honesty. God is not intimidated by your anger. Bring it to Him. It is better to yell *at* God than to walk away *from* Him." 
               },
               { 
                 text: "\"If I get through this, I promise I'll serve more.\" I try to make a deal.", 
                 insight: "This reveals a transactional view of grace—thinking we can buy God's favor. But you cannot buy what is already free." 
               },
               { 
                 text: "I stop and ask: \"Okay Lord, this hurts. But what is this testing producing in me?\"", 
                 insight: "This question shifts the atmosphere. You are not denying the pain, but you are searching for the 'perfect work' of patience. You are allowing the trial to be a teacher rather than just a tormentor." 
               },
               { 
                 text: "Through tears, I whisper, \"You are still good.\" I cling to His character.", 
                 insight: "This is the 'sacrifice of praise.' It costs you something. This is the joy James speaks of—not a fleeting emotion, but a deep, anchored orientation of the soul toward the unshifting Father of Lights." 
               }
            ]
          }
        ]
      },
      {
        title: "Verse by Verse Deep Dive",
        duration: "Self-Paced",
        level: "Verse by Verse",
        sections: [
          {
            type: "verse_study",
            title: "I. The Anatomy of Trials (vv 1-4)",
            content: "James opens with a paradox that shocks the system. He commands us to 'count it all joy' when we meet trials. He does not say 'feel' joy, but 'reckon' it. The Christian looks at the raw data of suffering and interprets it through the lens of redemption. The trial is the crucible; 'steadfastness' is the gold.",
            verseAnalyses: [
              {
                reference: "James 1:1",
                text: "James, a servant of God and of the Lord Jesus Christ, To the twelve tribes in the Dispersion: Greetings.",
                keywords: [
                  { word: "Servant", original: "doulos", insight: "Bondslave. James does not claim authority through biology (brother of Jesus) but through submission. Total ownership by the Master." },
                  { word: "Dispersion", original: "diaspora", insight: "Scattered seed. Christians are not 'lost' in the world; they are sown there by God for a harvest." }
                ]
              },
              {
                reference: "James 1:2-4",
                text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.",
                keywords: [
                  { word: "Count", original: "hēgēsathe", insight: "An accounting term meaning to 'evaluate' or 'lead the mind'. It is a cognitive choice to re-assign value to pain." },
                  { word: "Various", original: "poikilos", insight: "Literally 'many-colored' or 'polka-dotted'. Trials come in as many shades as grace (1 Peter 4:10 uses the same word for God's grace)." },
                  { word: "Steadfastness", original: "hypomonē", insight: "Hypo (under) + monē (remain). The capacity to stay under the load without collapsing, transforming the weight into spiritual muscle." },
                  { word: "Perfect", original: "teleioi", insight: "Not flawless, but 'mature' or 'complete'. Having reached its intended end or purpose, like a fruit that is fully ripe." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "II. The Resource of Wisdom (vv 5-8)",
            content: "To survive the crushing weight of trials, we need perspective—'Wisdom'. This is not IQ; it is the ability to see the trial from God's vantage point. It is available on demand, provided we ask with a singular focus.",
            verseAnalyses: [
              {
                reference: "James 1:5-8",
                text: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him. But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind. For that person must not suppose that he will receive anything from the Lord; he is a double-minded man, unstable in all his ways.",
                keywords: [
                  { word: "Lacks", original: "leipetai", insight: "To fall short. In a trial, we often feel we are missing the 'equipment' to handle it. That feeling is the prerequisite for prayer." },
                  { word: "Generously", original: "haplōs", insight: "Simply, openly. God gives with a 'single' hand, unlike the 'double-minded' man." },
                  { word: "Doubting", original: "diakrinomenos", insight: "To be at variance with oneself. A divided loyalty—wanting God's help while keeping one foot in the world's solutions." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "III. The Perspective on Status (vv 9-11)",
            content: "Trials act as the great equalizer. They strip the rich of their false security and elevate the poor to their true dignity in Christ.",
            verseAnalyses: [
              {
                reference: "James 1:9-11",
                text: "Let the lowly brother boast in his exaltation, and the rich in his humiliation, because like a flower of the grass he will pass away. For the sun rises with its scorching heat and withers the grass; its flower falls, and its beauty perishes. So also will the rich man fade away in the midst of his pursuits.",
                keywords: [
                  { word: "Humiliation", original: "tapeinōsei", insight: "Lowliness. For the rich, losing earthly status is a spiritual promotion because it forces reliance on God." },
                  { word: "Wither", original: "exēranen", insight: "To dry up. A vivid picture of the Middle Eastern sun scorching vegetation. Wealth has no survival mechanism against mortality." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "IV. The Crown and The Source (vv 12-15)",
            content: "James moves from the external test to the internal temptation. God tests to prove us; our desires tempt to destroy us. The source of evil is not God, but the 'hook' of our own desire.",
            verseAnalyses: [
              {
                reference: "James 1:12",
                text: "Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him.",
                keywords: [
                  { word: "Stood the test", original: "dokimos", insight: "Approved. Like metal that has passed through fire and been certified as pure." },
                  { word: "Crown", original: "stephanon", insight: "The victory wreath awarded to athletes, not the diadem of kings. It is the prize of endurance." }
                ]
              },
              {
                reference: "James 1:13-15",
                text: "Let no one say when he is tempted, 'I am being tempted by God,' for God cannot be tempted with evil, and he himself tempts no one. But each person is tempted when he is lured and enticed by his own desire. Then desire when it has conceived gives birth to sin, and sin when it is fully grown brings forth death.",
                keywords: [
                  { word: "Lured", original: "exelkomenos", insight: "A hunting term. To be dragged out from safety by attraction." },
                  { word: "Enticed", original: "deleazomenos", insight: "A fishing term. To bait a hook. Temptation always hides the hook." },
                  { word: "Birth", original: "tiktei", insight: "Desire + Consent = Conception. The child is Sin; the grandchild is Death." }
                ]
              }
            ]
          },
           {
            type: "verse_study",
            title: "V. The Father of Lights (vv 16-18)",
            content: "In contrast to the shifting shadows of life and the birth of sin, God is the unchangeable source of good. His 'birth' brings life, not death.",
            verseAnalyses: [
              {
                reference: "James 1:16-18",
                text: "Do not be deceived, my beloved brothers. Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change. Of his own will he brought us forth by the word of truth, that we should be a kind of firstfruits of his creatures.",
                keywords: [
                  { word: "Father of lights", original: "patros tōn phōtōn", insight: "Creator of the heavenly bodies. Unlike the sun/moon which shift and cast shadows, God's character has no 'variation'." },
                  { word: "Brought us forth", original: "apekyēsen", insight: "To give birth. Contrast with v15 (sin brings forth death). God's Word generates new life." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "VI. Hearing and Doing (vv 19-27)",
            content: "The chapter concludes with the 'Mirror of the Word'. Hearing without doing is self-deception. True religion is defined by action: speech control and social compassion.",
            verseAnalyses: [
              {
                reference: "James 1:19-21",
                text: "Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God. Therefore put away all filthiness and rampant wickedness and receive with meekness the implanted word, which is able to save your souls.",
                keywords: [
                  { word: "Implanted", original: "emphyton", insight: "Rooted. The Word is a seed planted deep, capable of organic growth if weeds (filthiness) are removed." }
                ]
              },
              {
                reference: "James 1:22-25",
                text: "But be doers of the word, and not hearers only, deceiving yourselves. For if anyone is a hearer of the word and not a doer, he is like a man who looks intently at his natural face in a mirror. For he looks at himself and goes away and at once forgets what he was like. But the one who looks into the perfect law, the law of liberty, and perseveres, being no hearer who forgets but a doer who acts, he will be blessed in his doing.",
                keywords: [
                  { word: "Hearers", original: "akroatai", insight: "Auditors. Students who attended lectures but never joined the inner circle. Information without transformation." },
                  { word: "Looks", original: "katanoounti", insight: "To observe attentively. The man looks at his face, but immediately forgets. The 'doer' bends over (parakypsas) to examine the Law closely." }
                ]
              },
              {
                reference: "James 1:26-27",
                text: "If anyone thinks he is religious and does not bridle his tongue but deceives his heart, this person's religion is worthless. Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.",
                keywords: [
                  { word: "Bridle", original: "chalinagōgōn", insight: "To guide with a bit. A horse without a bridle is wild; religion without tongue-control is useless." },
                  { word: "Visit", original: "episkeptesthai", insight: "To look after, to care for. It implies going to them, entering their distress." }
                ]
              }
            ]
          }
        ],
        reflections: [
          {
            scenario: "You just finished studying James 1. The text says a 'hearer only' is like someone who sees a mess in the mirror and walks away without fixing it. What 'mess' in your life did this chapter reveal today?",
            options: [
              {
                text: "My tongue. I realized I am quick to speak and slow to listen.",
                insight: "The mirror works. Now, do the work. The next time you feel the urge to interrupt or correct, physically bite your tongue (gently) as a reminder of the Spirit's restraint."
              },
              {
                text: "My reaction to trials. I've been grumbling instead of counting it joy.",
                insight: "Confess the grumbling to the Father of Lights. Ask Him to replace the 'Why me?' with 'What are you forging in me?'"
              },
              {
                text: "My religion feels theoretical. I haven't actually helped anyone in need lately.",
                insight: "James is practical. Pick one person in distress today—a widow, an orphan, or a lonely neighbor—and do one tangible act of service. Break the paralysis of analysis."
              }
            ]
          }
        ]
      }
    ]
  },
  2: {
    topic: "James Chapter 2: Faith That Breeds Life",
    scripture_reference: "James 2",
    title: "Faith That Breeds Life",
    description: "James confronts the church on the sin of partiality and defines the organic relationship between faith and works. True faith is not merely intellectual assent; it is a living force that breathes through action.",
    _source: 'static',
    _version: THEOLOGICAL_VERSION,
    modules: [
      {
        title: "The Big Picture",
        duration: "15 min read",
        level: "The Big Picture",
        sections: [
           {
             type: "context",
             title: "The Royal Law",
             content: "In a Roman society strictly stratified by class, James drops a bombshell: partiality is sin. He calls the church to the 'Royal Law' of loving one's neighbor. This chapter dismantles the idea that we can hold faith in Christ while holding prejudice against His people. It then pivots to the famous 'Faith vs. Works' argument, which is not a contradiction of Paul, but a completion. Paul fights legalism (works *for* salvation); James fights antinomianism (faith *without* fruit).",
             perspectiveItems: [
               { role: "Sociologist", text: "Ancient assemblies (synagogues) were often the only place where slaves and masters sat together." },
               { role: "Theologian", text: "Faith is the root; Works are the fruit. You cannot have the root without the fruit appearing eventually." }
             ]
           }
        ],
        reflections: [
          {
            scenario: "Two people enter your gathering: one influential and stylish, the other awkward and needy. You feel a magnetic pull to the successful one.",
            options: [
              { 
                text: "I drift toward the influential person, thinking 'I can help them.'", 
                insight: "The Spirit invites you to see the 'needy' person not as a drain, but as a carrier of the Kingdom (v5)." 
              },
              { 
                text: "I feel guilty and ignore the successful person.", 
                insight: "Freedom isn't ignoring the rich; it's loving without agenda. See both as image-bearers." 
              },
              { 
                text: "I check my heart: 'Am I looking for what I can get?'", 
                insight: "This exposes covetousness. By shifting to giving, you break the power of status." 
              },
              { 
                text: "I spend the first 10 minutes with the person everyone else ignores.", 
                insight: "You are actively practicing the 'Royal Law', aligning yourself with God's heart for the poor." 
              }
            ]
          }
        ]
      },
      {
        title: "The Framework",
        duration: "12 min read",
        level: "The Framework",
        sections: [
          {
             type: "structure",
             title: "The Mirror of Action",
             content: "This chapter operates like a spiritual courtroom. It begins by exposing the 'Sin of Partiality' and ends by exposing 'Dead Faith'. The structure pivots on the 'Royal Law' of love.",
             structuralLines: [
               { 
                 label: "A", 
                 text: "Partiality Prohibited (v1-4)", 
                 indent: 0, 
                 pairing: "A'", 
                 theological_connection: "The outer frame opens with an assembly turned into a biased courtroom; in A' that same courtroom is revisited as Abraham and Rahab are 'judged' genuine by what their faith actually does, not by their appearance." 
               },
               { 
                 label: "B", 
                 text: "God's Choice of the Poor (v5-7)", 
                 indent: 1, 
                 pairing: "B'", 
                 theological_connection: "Here God’s preference for the poor unmasks how crooked our seating chart is; in B' James asks whether a faith that ignores naked, hungry believers can possibly be aligned with a God who chooses them." 
               },
               { 
                 label: "C", 
                 text: "The Royal Law (v8-13)", 
                 indent: 2, 
                 pairing: "", 
                 theological_connection: "At the center, the Royal Law and the 'law of liberty' reframe both the seating and the works debate: the real test is whether mercy, not status, governs our choices." 
               },
               { 
                 label: "B'", 
                 text: "Faith Without Works is Dead (v14-19)", 
                 indent: 1, 
                 pairing: "B", 
                 theological_connection: "This mirror to B presses the question: if God has chosen the poor, what does it say about our 'faith' when we send them away with words instead of bread?" 
               },
               { 
                 label: "A'", 
                 text: "Examples of Living Faith (v20-26)", 
                 indent: 0, 
                 pairing: "A", 
                 theological_connection: "Closing the frame, the stories of Abraham and Rahab replace the rich man’s seat with two unlikely figures whose actions show what an unprejudiced, living faith looks like in motion." 
               }
             ]
          }
        ],
        reflections: [
          {
            scenario: "You see a legitimate need (someone needs money or physical help) but you feel the internal resistance of being 'too busy', assuring yourself you are still a good person. How do you justify the inaction?",
            options: [
              {
                text: "\"I'll offer a quick prayer for them as I walk away.\"",
                insight: "This is spiritualizing your inaction. You are using prayer as a shield to protect your schedule. James challenges: 'What good is that?' Sometimes, YOU are the answer to the prayer."
              },
              {
                text: "\"Someone else with more resources or time will handle this.\"",
                insight: "This is the 'Bystander Effect' sanctified. We assume the Body of Christ is a machine that works without our part. But if the hand refuses to move, the body is paralyzed."
              },
              {
                text: "\"I give to the church budget, so I've done my part.\"",
                insight: "This is transactional thinking. You are treating charity as a tax rather than a lifestyle. The Royal Law requires proximity, not just payroll."
              },
              {
                text: "\"I honestly feel annoyed. Why is their crisis my emergency?\"",
                insight: "This honest irritability reveals an idol of comfort. The interruption is not the enemy; it is the test. God is interrupting your script with His reality."
              },
              {
                text: "I feel guilty, but I'm frozen. I don't know what to do, so I do nothing.",
                insight: "Guilt without action is a heavy burden. James doesn't want you to feel bad; he wants you to do good. Even a small, imperfect action breaks the paralysis."
              },
              {
                text: "\"I'll help, but I'm going to make sure they know it's a one-time thing.\"",
                insight: "This is charity with boundaries of steel. While wisdom is good, this defensiveness suggests you view people as liabilities rather than image-bearers."
              },
              {
                text: "I stop. I engage. I get my hands dirty. It messes up my day, but I feel alive.",
                insight: "This is the 'Living Faith' James speaks of. The inconvenience IS the worship. You are breathing."
              }
            ]
          }
        ]
      },
      {
        title: "Verse by Verse Deep Dive",
        duration: "Self-Paced",
        level: "Verse by Verse",
        sections: [
          {
            type: "verse_study",
            title: "I. The Sin of Partiality (vv 1-4)",
            content: "James exposes the contradiction of holding faith in the 'Lord of Glory' while favoring human glory. To judge by appearance is to become a corrupt judge.",
            verseAnalyses: [
              {
                reference: "James 2:1-4",
                text: "My brothers, show no partiality as you hold the faith in our Lord Jesus Christ, the Lord of glory. For if a man wearing a gold ring and fine clothing comes into your assembly, and a poor man in shabby clothing also comes in, and if you pay attention to the one who wears the fine clothing and say, 'You sit here in a good place,' while you say to the poor man, 'You stand over there,' or, 'Sit down at my feet,' have you not then made distinctions among yourselves and become judges with evil thoughts?",
                keywords: [
                  { word: "Partiality", original: "prosōpolēmpsia", insight: "Literally 'receiving the face'. Judging the book by the cover." },
                  { word: "Lord of Glory", original: "tēs doxēs", insight: "Jesus IS the Glory. Why be dazzled by a gold ring if you possess Him?" },
                  { word: "Distinctions", original: "diekrithēte", insight: "To waver or divide. You have become a judge with 'evil thoughts'—judging by net worth." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "II. The Logic of Election (vv 5-7)",
            content: "James appeals to their theology and experience. God chooses the poor; the rich oppress the church. Why honor the oppressors? This is an inversion of kingdom values.",
            verseAnalyses: [
              {
                reference: "James 2:5-7",
                text: "Listen, my beloved brothers, has not God chosen those who are poor in the world to be rich in faith and heirs of the kingdom, which he has promised to those who love him? But you have dishonored the poor man. Are not the rich the ones who oppress you, and the ones who drag you into court? Are they not the ones who blaspheme the honorable name by which you were called?",
                keywords: [
                  { word: "Chosen", original: "exelexato", insight: "Election. God's sovereign choice often bypasses human merit or status." },
                  { word: "Drag", original: "helkousin", insight: "To haul by force. The rich were literally dragging Christians to court for debts." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "III. The Royal Law (vv 8-13)",
            content: "Favoritism violates the supreme law of the Kingdom: Love. We are judged by the 'Law of Liberty', where mercy is the currency.",
            verseAnalyses: [
              {
                reference: "James 2:8-11",
                text: "If you really fulfill the royal law according to the Scripture, 'You shall love your neighbor as yourself,' you are doing well. But if you show partiality, you are committing sin and are convicted by the law as transgressors. For whoever keeps the whole law but fails in one point has become guilty of all of it. For he who said, 'Do not commit adultery,' also said, 'Do not murder.' If you do not commit adultery but do murder, you have become a transgressor of the law.",
                keywords: [
                  { word: "Royal", original: "basilikon", insight: "Belonging to the King. It is the supreme law that governs all others." },
                  { word: "Guilty of all", original: "enochos", insight: "The law is a glass pane; one rock shatters the whole thing. You cannot pick and choose obedience." }
                ]
              },
              {
                reference: "James 2:12-13",
                text: "So speak and so act as those who are to be judged under the law of liberty. For judgment is without mercy to one who has shown no mercy. Mercy triumphs over judgment.",
                keywords: [
                  { word: "Triumphs", original: "katakauchatai", insight: "Boasts over. Mercy stands over judgment like a victor." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "IV. The Faith-Works Principle (vv 14-17)",
            content: "The core thesis: Faith that does not produce works is not just weak, it is dead. It is a corpse. Words without warmth are empty.",
            verseAnalyses: [
              {
                reference: "James 2:14-17",
                text: "What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him? If a brother or sister is poorly clothed and lacking in daily food, and one of you says to them, 'Go in peace, be warmed and filled,' without giving them the things needed for the body, what good is that? So also faith by itself, if it does not have works, is dead.",
                keywords: [
                  { word: "Dead", original: "nekra", insight: "Inanimate. Without the breath of action, the body of faith has no life." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "V. The Demonic Orthodoxy (vv 18-20)",
            content: "James uses shock therapy. Even demons have correct theology (Monotheism), but it only produces fear, not love. Intellectual assent is not saving faith.",
            verseAnalyses: [
              {
                reference: "James 2:18-20",
                text: "But someone will say, 'You have faith and I have works.' Show me your faith apart from your works, and I will show you my faith by my works. You believe that God is one; you do well. Even the demons believe—and shudder! Do you want to be shown, you foolish person, that faith apart from works is useless?",
                keywords: [
                  { word: "Shudder", original: "phrissousin", insight: "To bristle. A physical reaction of terror. They know the truth but hate it." },
                  { word: "Useless", original: "argē", insight: "Idle, barren. Like a machine that is plugged in but produces nothing." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "VI. The Witnesses: Abraham & Rahab (vv 21-26)",
            content: "Two extremes—the Jewish Patriarch and the Gentile Harlot—united by one thing: their faith moved their bodies. Justification is vindicated by action.",
            verseAnalyses: [
              {
                reference: "James 2:21-24",
                text: "Was not Abraham our father justified by works when he offered up his son Isaac on the altar? You see that faith was active along with his works, and faith was completed by his works; and the Scripture was fulfilled that says, 'Abraham believed God, and it was counted to him as righteousness'—and he was called a friend of God. You see that a person is justified by works and not by faith alone.",
                keywords: [
                  { word: "Completed", original: "eteleiōthē", insight: "Brought to its goal. Faith reached its intended destination in the act of obedience." }
                ]
              },
              {
                reference: "James 2:25-26",
                text: "And in the same way was not also Rahab the prostitute justified by works when she received the messengers and sent them out by another way? For as the body apart from the spirit is dead, so also faith apart from works is dead.",
                keywords: [
                  { word: "Spirit", original: "pneumatos", insight: "Breath. Works are the breathing of the soul. Stop working, and faith suffocates." }
                ]
              }
            ]
          }
        ],
        reflections: [
           {
            scenario: "You are facing a situation where you 'believe' God can help, but you feel hesitant to actually step out and do something risky. James asks: Is your faith breathing?",
            options: [
              {
                text: "I've been waiting for a feeling before I act.",
                insight: "James reverses this. Sometimes the act (Abraham walking up the mountain) must precede the feeling. Movement jumpstarts the heart."
              },
              {
                text: "I realize my faith has been mostly in my head—agreeing with facts.",
                insight: "This is 'Demonic Orthodoxy' (v19). The invitation is to move from agreeing with God to obeying God. What is one physical thing you can do today to prove your faith?"
              }
            ]
          }
        ]
      }
    ]
  },
  3: {
    topic: "James Chapter 3: Taming the Tongue",
    scripture_reference: "James 3",
    title: "Taming the Tongue",
    description: "The tongue is a small rudder that steers the whole ship. James provides a masterclass on the power of speech and contrasts the jealousy of earthly wisdom with the peace of heavenly wisdom.",
    _source: 'static',
    _version: THEOLOGICAL_VERSION,
    modules: [
      {
        title: "The Big Picture",
        duration: "15 min read",
        level: "The Big Picture",
        sections: [
           {
             type: "context",
             title: "The Tiny Spark",
             content: "James 3 addresses those who aspire to be 'teachers'. Words create worlds. He moves from the specific chaos of the tongue to the source: the heart. If the tongue is the smoke, the wisdom of the heart is the fire.",
             perspectiveItems: [
               { role: "Metaphorical", text: "James uses 3 key metaphors: Bits (Guidance), Rudders (Influence), and Fire (Destruction)." }
             ]
           }
        ],
        reflections: [
          {
            scenario: "You are in a heated discussion. You have a clever, cutting retort ready.",
            options: [
              { 
                text: "I say it. Truth needs to be defended.", 
                insight: "This is 'Earthly Wisdom'—being right over being peaceable. Truth without love is noise." 
              },
              { 
                text: "I hold it back, but replay the argument in my head.", 
                insight: "You tamed the tongue, but not the heart. Release the need for vindication." 
              },
              { 
                text: "I swallow the words and choose silence.", 
                insight: "Silence is often the language of the Spirit. You are breaking the cycle of fire." 
              }
            ]
          }
        ]
      },
      {
        title: "The Framework",
        duration: "10 min read",
        level: "The Framework",
        sections: [
          {
             type: "structure",
             title: "The Tongue & The Wisdom",
             content: "The chapter is divided into two halves: The Problem (The Tongue, v1-12) and The Solution (True Wisdom, v13-18). The untamable tongue is a symptom of earthly wisdom.",
             structuralLines: [
               { 
                 label: "A", 
                 text: "Warning to Teachers (v1-2)", 
                 indent: 0, 
                 pairing: "A'", 
                 theological_connection: "The opening warns would-be teachers that words will be judged strictly; in A' we discover that the true test of a 'teacher' is not eloquence but the harvest of peace that flows from wisdom above." 
               },
               { 
                 label: "B", 
                 text: "Power of Small Things (v3-5)", 
                 indent: 1, 
                 pairing: "B'", 
                 theological_connection: "Bits and rudders show how tiny instruments quietly steer massive bodies; in B' the same tongue is shown absurdly trying to steer both blessing and cursing out of one spring." 
               },
               { 
                 label: "C", 
                 text: "Destructive Nature (v6-8)", 
                 indent: 2, 
                 pairing: "", 
                 theological_connection: "At the pivot we see the tongue as a fire lit from hell itself, explaining why human discipline alone cannot tame what is fundamentally fueled by a deeper spiritual source." 
               },
               { 
                 label: "B'", 
                 text: "Inconsistency (v9-12)", 
                 indent: 1, 
                 pairing: "B", 
                 theological_connection: "This mirror to B uses springs and trees to show that such double-speech is unnatural; the metaphors push us to ask which hidden source—fresh or bitter—is actually feeding our words." 
               },
               { 
                 label: "A'", 
                 text: "Two Wisdoms (v13-18)", 
                 indent: 0, 
                 pairing: "A", 
                 theological_connection: "Closing the frame, James redefines 'wise and understanding' teachers as those whose lives, not lectures, display meekness, purity, and peacemaking—words now governed by a different wisdom." 
               }
             ]
          }
        ],
        reflections: [
          {
            scenario: "You hear gossip about someone you dislike or disagree with. It seems to confirm your worst suspicions about them. What is the movement of your soul and tongue?",
            options: [
              {
                text: "My body leans in almost automatically; I feel a mix of tension and curiosity as the story unfolds.",
                insight: "This is the instinctive pull of the tongue James talks about—the 'small spark' that wants more fuel. Instead of scolding yourself, just notice it before God: 'Lord, this really draws me in. Help me pay attention to what I’m hungry for right now.' Naming the pull is the first cooling of the fire."
              },
              {
                text: "Inside I think, 'I knew it,' and feel a quiet satisfaction, even if I say nothing out loud.",
                insight: "That sense of satisfaction often sits on top of older wounds or disappointments with this person. You might bring that feeling directly to Jesus: 'It feels good to be right about them, but I don’t want to build my heart on their failure.' This shifts the focus from their story to your own healing."
              },
              {
                text: "I don’t repeat the story yet, but I file the details away in case I need them later.",
                insight: "Storing information can feel like protecting yourself—having evidence ready if conflict comes. James reminds us that the tongue can become 'a world of unrighteousness.' Ask gently: 'Lord, am I keeping this as a shield or a weapon? Show me how to be as wise as a serpent and as harmless as a dove.'"
              },
              {
                text: "I stay silent, but I listen all the way through because I don’t want to lose connection with the person talking.",
                insight: "You’re feeling the tug between belonging and integrity. Instead of despising that tension, you can pray inwardly, 'Spirit of wisdom, help me value this friendship without joining in harm.' That prayer keeps your heart soft while you discern your next step."
              },
              {
                text: "I feel a small check inside and quietly ask God, 'How do You see the person we’re talking about?'",
                insight: "This is where earthly wisdom starts giving way to wisdom from above. You’re inviting a different lens: not just 'Are these facts true?' but 'Does this conversation reflect Your heart?' That inner question already begins to bless the one who is absent."
              },
              {
                text: "I gently redirect: 'I’m not sure it’s fair to talk about them when they aren’t here. Maybe we could pray or talk with them directly if this is serious.'",
                insight: "Now you’re acting as a peacemaker. You’re not dramatic or condemning, but you are refusing to let your mouth become a torch. This is wisdom that is 'peaceable, gentle, open to reason'—it may create a quiet awkwardness, but it also creates a quiet safety."
              },
              {
                text: "Later, I bless them by name in prayer and ask God to clean up whatever damage my listening or speaking may have caused.",
                insight: "Here your tongue becomes an instrument of healing rather than harm. You are handing the person, the story, and your own reactions back to God. This is the path toward a 'harvest of righteousness sown in peace'—not by pretending the story isn’t messy, but by placing it in the hands of the true Judge and Physician."
              }
            ]
          }
        ]
      },
      {
        title: "Verse by Verse Deep Dive",
        duration: "Self-Paced",
        level: "Verse by Verse",
        sections: [
          {
            type: "verse_study",
            title: "I. The Warning to Teachers (vv 1-2)",
            content: "Teaching is dangerous. The more words we use, the more likely we are to stumble. Perfection in speech implies perfection in self-control.",
            verseAnalyses: [
              {
                reference: "James 3:1-2",
                text: "Not many of you should become teachers, my brothers, for you know that we who teach will be judged with greater strictness. For we all stumble in many ways. And if anyone does not stumble in what he says, he is a perfect man, able also to bridle his whole body.",
                keywords: [
                  { word: "Stumble", original: "ptaiomen", insight: "To trip up. James admits 'we' all stumble. He includes himself in the struggle." },
                  { word: "Perfect", original: "teleios", insight: "Mature. Control of the tongue is the master key to self-control." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "II. Small Things, Big Impact (vv 3-5)",
            content: "James uses disproportionate analogies. A horse is controlled by a bit; a ship by a rudder. The tongue is small but boasts of great things.",
            verseAnalyses: [
              {
                reference: "James 3:3-5",
                text: "If we put bits into the mouths of horses so that they obey us, we guide their whole bodies as well. Look at the ships also: though they are so large and are driven by strong winds, they are guided by a very small rudder wherever the will of the pilot directs. So also the tongue is a small member, yet it boasts of great things. How great a forest is set ablaze by such a small fire!",
                keywords: [
                  { word: "Rudder", original: "pēdaliou", insight: "The directing mechanism. The tongue steers the direction of our life (and the church)." },
                  { word: "Ablaze", original: "anaptei", insight: "To kindle up. One match can burn down a legacy." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "III. The Fire of Hell (vv 6-8)",
            content: "The tongue is not just a muscle; it is a 'world of unrighteousness'. It is the only beast mankind cannot tame.",
            verseAnalyses: [
              {
                reference: "James 3:6-8",
                text: "And the tongue is a fire, a world of unrighteousness. The tongue is set among our members, staining the whole body, setting on fire the entire course of life, and set on fire by hell. For every kind of beast and bird, of reptile and sea creature, can be tamed and has been tamed by mankind, but no human being can tame the tongue. It is a restless evil, full of deadly poison.",
                keywords: [
                  { word: "Hell", original: "geennēs", insight: "Gehenna. The trash heap outside Jerusalem that burned perpetually. Destructive speech is fueled by the demonic." },
                  { word: "Restless", original: "akatastaton", insight: "Unstable, like a staggering drunk. It cannot be pinned down." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "IV. Unnatural Inconsistency (vv 9-12)",
            content: "Nature is consistent—fig trees don't make olives. But humans are inconsistent, blessing God and cursing His image-bearers.",
            verseAnalyses: [
              {
                reference: "James 3:9-12",
                text: "With it we bless our Lord and Father, and with it we curse people who are made in the likeness of God. From the same mouth come blessing and cursing. My brothers, these things ought not to be so. Does a spring pour forth from the same opening both fresh and salt water? Can a fig tree, my brothers, bear olives, or a grapevine produce figs? Neither can a salt pond yield fresh water.",
                keywords: [
                  { word: "Likeness", original: "homoiōsin", insight: "Image. To curse a human is to curse the artwork of God. It is an attack on the Creator." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "V. Two Wisdoms (vv 13-18)",
            content: "James contrasts two sources of wisdom. Earthly wisdom is ambitious and divisive. Heavenly wisdom is pure and peaceable.",
            verseAnalyses: [
              {
                reference: "James 3:13-16",
                text: "Who is wise and understanding among you? By his good conduct let him show his works in the meekness of wisdom. But if you have bitter jealousy and selfish ambition in your hearts, do not boast and be false to the truth. This is not the wisdom that comes down from above, but is earthly, unspiritual, demonic. For where jealousy and selfish ambition exist, there will be disorder and every vile practice.",
                keywords: [
                  { word: "Earthly", original: "epigeios", insight: "Bound to the earth. Limited to horizontal perspective." },
                  { word: "Demonic", original: "daimoniōdēs", insight: "The ultimate source of division is not just human error, but spiritual malice." }
                ]
              },
              {
                reference: "James 3:17-18",
                text: "But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere. And a harvest of righteousness is sown in peace by those who make peace.",
                keywords: [
                  { word: "Open to reason", original: "eupeithēs", insight: "Willing to yield. Not stubborn. The ability to be persuaded is a mark of divinity." }
                ]
              }
            ]
          }
        ],
        reflections: [
          {
            scenario: "James says the 'Wisdom from Above' is open to reason (willing to yield). Think of a current disagreement. What would it look like to yield without compromising truth?",
            options: [
              {
                text: "It feels weak. I'm afraid I'll be walked over.",
                insight: "The Cross looked like weakness, but it was power. Yielding your 'right to be right' disarms the demonic spirit of contention."
              },
              {
                text: "I can admit where the other person is right.",
                insight: "This is the 'Peaceable' fruit of wisdom. Validating the other person's perspective builds a bridge that the truth can then travel across."
              }
            ]
          }
        ]
      }
    ]
  },
  4: {
    topic: "James Chapter 4: Surrender & Grace",
    scripture_reference: "James 4",
    title: "Surrender & Grace",
    description: "The cause of quarrels is internal passion. James calls for a radical surrender to God, resisting the devil, and humbling ourselves so He may exalt us.",
    _source: 'static',
    _version: THEOLOGICAL_VERSION,
    modules: [
      {
        title: "The Big Picture",
        duration: "15 min read",
        level: "The Big Picture",
        sections: [
           {
             type: "context",
             title: "The War Within",
             content: "Why do we fight? James traces conflict back to 'passions' (hedonē) warring within us. We want, we don't get, so we kill. The solution is not conflict resolution techniques, but repentance. 'Submit to God, resist the devil.' This chapter is a call to end the friendship with the world, which is hostility toward God.",
             perspectiveItems: [
               { role: "Psychological", text: "Conflict is rarely about the issue; it is about unmet desires/idols." }
             ]
           }
        ],
        reflections: [
          {
            scenario: "You are in a conflict where you know you are 90% right. The other person is being unreasonable.",
            options: [
              { 
                text: "I press my point until they concede.", 
                insight: "This fights the war with the world's weapons. You win the battle but lose the peace." 
              },
              { 
                text: "I humble myself and apologize for my 10%.", 
                insight: "God gives grace to the humble. This disarms the spiritual tension." 
              }
            ]
          }
        ]
      },
      {
        title: "The Framework",
        duration: "10 min read",
        level: "The Framework",
        sections: [
          {
             type: "structure",
             title: "Humility & Exaltation",
             content: "James structures this as a call to return. From the War of Passions to the Peace of Submission.",
             structuralLines: [
               { 
                 label: "A", 
                 text: "Source of Quarrels (v1-3)", 
                 indent: 0, 
                 pairing: "A'", 
                 theological_connection: "The outer frame begins with fights born from frustrated desires; in A' the same aggressive impulse shows up as judging a brother instead of submitting those desires to God." 
               },
               { 
                 label: "B", 
                 text: "Friendship with World (v4-5)", 
                 indent: 1, 
                 pairing: "B'", 
                 theological_connection: "Here 'friendship with the world' names our divided loyalty as spiritual adultery; in B' James spells out what breaking that affair looks like—submitting, resisting, drawing near, and letting God cleanse divided hearts." 
               },
               { 
                 label: "C", 
                 text: "The Cure: Grace (v6)", 
                 indent: 2, 
                 pairing: "", 
                 theological_connection: "At the center, 'God opposes the proud but gives grace to the humble' explains the whole movement: the only way out of the war with God, self, and others is to come down into humility." 
               },
               { 
                 label: "B'", 
                 text: "Submit & Resist (v7-10)", 
                 indent: 1, 
                 pairing: "B", 
                 theological_connection: "This mirror to B shows the positive side of ending friendship with the world: we realign under God, resist the devil’s pull, and let sorrow over sin open the door to exaltation." 
               },
               { 
                 label: "A'", 
                 text: "Do Not Judge (v11-12)", 
                 indent: 0, 
                 pairing: "A", 
                 theological_connection: "Closing the frame, James turns the energy of quarrels inward: instead of fighting people to get what we want, we’re confronted with our desire to sit in God’s place as judge." 
               }
             ]
          }
        ],
        reflections: [
          {
            scenario: "You are planning your next year—career, move, finances, or ministry. You feel capable and energized. James quietly asks: 'What is your life?' How do you relate to your plans and your future?",
            options: [
              {
                text: "When I start planning, my energy spikes; the more I map out, the more solid and powerful I feel.",
                insight: "Your body loves the feeling of control, and that’s understandable. Rather than shutting it down, you might pray, 'Thank You for the strength and opportunities I have. Show me where healthy initiative ends and anxious control begins.' That prayer keeps your drive but loosens its grip."
              },
              {
                text: "Deep down I think, 'If I hustle hard enough, I can make this happen exactly as I picture it.'",
                insight: "Effort is good; guaranteeing outcomes is a burden you were never asked to carry. James reminds you that life is a mist—real, precious, and not in your hands. You can begin to say, 'I will work diligently, but I release the illusion that I can force the future to obey me.'"
              },
              {
                text: "If any piece of the plan is uncertain, I feel tense and restless until I’ve tried to control every variable.",
                insight: "That tension often masks a quiet fear of being out of control or unprepared. Instead of condemning yourself, you can sit with God and say, 'I don’t like uncertainty. Teach my heart what it means that my times are in Your hands.' This moves you from frantic fixing to honest companionship with Him."
              },
              {
                text: "I avoid asking God what He wants, afraid He might redirect me or say 'no' to something I really desire.",
                insight: "This fear is not rebellion so much as attachment. A gentle next step is not to pretend you’re surrendered, but to admit, 'Lord, I’m afraid of Your answer.' James’ picture of God giving 'more grace' suggests that He would rather meet you in that fear than receive a performance of false piety."
              },
              {
                text: "I start saying, 'Lord, here is what I hope for. Please guide, block, or reshape this as You see fit,' even though I still feel attached to my preferences.",
                insight: "Now your planning session is turning into shared discernment. You’re still passionate, but you are inviting correction. This is what it looks like to 'submit yourselves therefore to God' while still being honest about your desires."
              },
              {
                text: "I seek wise counsel and hold my plans more loosely, acknowledging that I can’t see every angle or guarantee every outcome.",
                insight: "This is humility in practice: bringing others into the process and accepting limits. You are stepping out of the judge’s chair over your own life and letting God and community speak. In this space, 'If the Lord wills' becomes a calm orientation instead of a religious slogan."
              },
              {
                text: "In prayer I lay the year before God and say, 'This is what I long for. If You close doors, rearrange paths, or surprise me, I choose to trust that Your wisdom is kinder than my control.'",
                insight: "Here you are moving into a quieter, deeper trust. You still plan, you still act, but you are no longer living as though everything rests on you. That posture clears room in your soul for grace, so that if your plans change, your identity doesn’t have to shatter with them."
              }
            ]
          }
        ]
      },
      {
        title: "Verse by Verse Deep Dive",
        duration: "Self-Paced",
        level: "Verse by Verse",
        sections: [
          {
            type: "verse_study",
            title: "I. The Anatomy of Conflict (vv 1-3)",
            content: "Wars start in the heart. We fight others because we are at war with ourselves, driven by frustrated hedonism.",
            verseAnalyses: [
              {
                reference: "James 4:1-3",
                text: "What causes quarrels and what causes fights among you? Is it not this, that your passions are at war within you? You desire and do not have, so you murder. You covet and cannot obtain, so you fight and quarrel. You do not have, because you do not ask. You ask and do not receive, because you ask wrongly, to spend it on your passions.",
                keywords: [
                  { word: "Passions", original: "hēdonōn", insight: "Hedonism. Desires for pleasure that wage a military campaign (strateuomenōn) in our members." },
                  { word: "Murder", original: "phoneuete", insight: "Likely hyperbole for hatred (1 John 3:15), but shows the severity of unchecked desire." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "II. Spiritual Adultery (vv 4-6)",
            content: "James uses the language of the prophets (Hosea). To love the world system is to cheat on God. He is a jealous husband, but He offers more grace.",
            verseAnalyses: [
              {
                reference: "James 4:4-6",
                text: "You adulterous people! Do you not know that friendship with the world is enmity with God? Therefore whoever wishes to be a friend of the world makes himself an enemy of God. Or do you suppose it is to no purpose that the Scripture says, 'He yearns jealously over the spirit that he has made to dwell in us'? But he gives more grace. Therefore it says, 'God opposes the proud but gives grace to the humble.'",
                keywords: [
                  { word: "Enmity", original: "echthra", insight: "Hostility. You cannot be neutral. You are either a bride or an enemy." },
                  { word: "Jealously", original: "phthonon", insight: "God yearns for the Spirit He placed in us. His jealousy is protective zeal, not petty insecurity." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "III. The Path Down is Up (vv 7-10)",
            content: "The solution to conflict is humility. Ten rapid-fire imperatives command us to get low before God. This is the protocol of surrender.",
            verseAnalyses: [
              {
                reference: "James 4:7-10",
                text: "Submit yourselves therefore to God. Resist the devil, and he will flee from you. Draw near to God, and he will draw near to you. Cleanse your hands, you sinners, and purify your hearts, you double-minded. Be wretched and mourn and weep. Let your laughter be turned to mourning and your joy to gloom. Humble yourselves before the Lord, and he will exalt you.",
                keywords: [
                  { word: "Opposes", original: "antitassetai", insight: "To array in battle against. Pride makes God your opponent." },
                  { word: "Submit", original: "hypotagēte", insight: "Get under rank. A military term. Align yourself under God's authority." },
                  { word: "Draw near", original: "engisate", insight: "The promise of intimacy. If you move toward Him, He moves toward you." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "IV. Speaking Evil (vv 11-12)",
            content: "Slander is an attack on the Lawgiver. When we judge, we step into God's seat.",
            verseAnalyses: [
              {
                reference: "James 4:11-12",
                text: "Do not speak evil against one another, brothers. The one who speaks against a brother or judges his brother, speaks evil against the law and judges the law. But if you judge the law, you are not a doer of the law but a judge. There is only one lawgiver and judge, he who is able to save and to destroy. But who are you to judge your neighbor?",
                keywords: [
                  { word: "Judge", original: "krinōn", insight: "To stand over. Only God has the authority to destroy or save." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "V. Boasting About Tomorrow (vv 13-17)",
            content: "Presumption is practical atheism—living as if God does not control time. We are vapor.",
            verseAnalyses: [
              {
                reference: "James 4:13-17",
                text: "Come now, you who say, 'Today or tomorrow we will go into such and such a town and spend a year there and trade and make a profit'— yet you do not know what tomorrow will bring. What is your life? For you are a mist that appears for a little time and then vanishes. Instead you ought to say, 'If the Lord wills, we will live and do this or that.' As it is, you boast in your arrogance. All such boasting is evil. So whoever knows the right thing to do and fails to do it, for him it is sin.",
                keywords: [
                  { word: "Mist", original: "atmis", insight: "Vapor/Smoke. We are transient. Our plans must bow to His will." }
                ]
              }
            ]
          }
        ],
        reflections: [
          {
            scenario: "Identify an area in your life where you are currently saying 'I will' without adding 'If the Lord wills.' (A career move, a relationship goal, a financial plan).",
            options: [
              {
                text: "I feel anxious when I think about letting go of the wheel.",
                insight: "Anxiety reveals where we are trusting in our own control. Surrender feels like death, but it leads to the 'Grace to the Humble' (v6)."
              },
              {
                text: "I am willing to say, 'Lord, if you want to change this plan, I accept it.'",
                insight: "This is the sanity of the creature. You are aligning with reality. You are a mist, but you are HELD by the Eternal."
              }
            ]
          }
        ]
      }
    ]
  },
  5: {
    topic: "James Chapter 5: Patience & Restoration",
    scripture_reference: "James 5",
    title: "Patience & Restoration",
    description: "James concludes with a warning to the oppressive rich and a comfort to the suffering saints. The call is to patience—like a farmer—and to powerful, communal prayer.",
    _source: 'static',
    _version: THEOLOGICAL_VERSION,
    modules: [
      {
        title: "The Big Picture",
        duration: "15 min read",
        level: "The Big Picture",
        sections: [
           {
             type: "context",
             title: "The Coming Harvest",
             content: "The letter ends where it began: suffering. But now, the Judge is at the door. James rebukes the rich who hoard wealth and encourages the poor to wait like farmers for the 'precious fruit'. He emphasizes the power of community—confessing sins and praying for one another—as the mechanism of healing.",
             perspectiveItems: [
               { role: "Eschatological", text: "The 'Coming of the Lord' is the anchor for patience." }
             ]
           }
        ],
        reflections: [
          {
            scenario: "You have been waiting for a breakthrough—healing, provision, restoration—for years. Nothing is changing.",
            options: [
              { 
                text: "I give up hope. It hurts too much to expect good.", 
                insight: "This is despair. James points to the farmer who waits 'with patience' for the rain." 
              },
              { 
                text: "I establish my heart. I stand firm because the Lord is near.", 
                insight: "This is 'Makrothymia' (long-suffering). It is active strength, not passive resignation." 
              }
            ]
          }
        ]
      },
      {
        title: "The Framework",
        duration: "10 min read",
        level: "The Framework",
        sections: [
          {
             type: "structure",
             title: "Judgment & Healing",
             content: "The chapter moves from the roar of judgment to the whisper of prayer.",
             structuralLines: [
               { 
                 label: "A", 
                 text: "Woe to Rich Oppressors (v1-6)", 
                 indent: 0, 
                 pairing: "A'", 
                 theological_connection: "The frame opens with hoarded wealth crying out against the rich; in A' the community spends itself instead to bring a wanderer back, covering sin rather than fattening itself for judgment." 
               },
               { 
                 label: "B", 
                 text: "Call to Patience (v7-11)", 
                 indent: 1, 
                 pairing: "B'", 
                 theological_connection: "Patient farmers and suffering saints model a waiting that trusts God’s timing; in B' that same waiting turns into shared prayer and confession, so delay becomes intercession rather than bitterness." 
               },
               { 
                 label: "C", 
                 text: "Integrity of Speech (v12)", 
                 indent: 2, 
                 pairing: "", 
                 theological_connection: "At the center, simple 'yes' and 'no' link both sides: our words are not to be tools of exploitation (A) or empty vows (B), but honest speech that can carry real prayer and real promises." 
               },
               { 
                 label: "B'", 
                 text: "Call to Prayer (v13-18)", 
                 indent: 1, 
                 pairing: "B", 
                 theological_connection: "This mirror to B shows patience expressing itself as worship, lament, and healing prayer; instead of grumbling while we wait, we bring every season—suffering and cheer alike—into conversation with God." 
               },
               { 
                 label: "A'", 
                 text: "Restoring the Wanderer (v19-20)", 
                 indent: 0, 
                 pairing: "A", 
                 theological_connection: "Closing the frame, the focus shifts from the rich who crush the righteous to believers who go after the straying, using their strength not to exploit but to rescue and cover." 
               }
             ]
          }
        ],
        reflections: [
          {
            scenario: "James says, 'Confess your sins to one another and pray for one another, that you may be healed.' Imagine a specific, present struggle. What stirs in you when you consider naming it to a trusted believer and asking for prayer?",
            options: [
              {
                text: "My heart pounds, my throat tightens, and even picturing the conversation makes me want to change the subject.",
                insight: "Your body is telling the truth about how exposed confession feels. Rather than forcing yourself, you can start with this simple honesty before God: 'I’m scared to be seen.' That prayer is already a step out of hiding."
              },
              {
                text: "I imagine rejection: 'If they really knew this, they would respect me less or quietly pull away.'",
                insight: "That fear often has roots in real experiences or stories you’ve absorbed. Bringing it into words—'I’m afraid of being known and then discarded'—allows God to meet you there. You can then ask Him to lead you to someone who is both mature and gentle, instead of assuming no such person exists."
              },
              {
                text: "I think about sharing but quickly decide to offer a safer, cleaned-up version that hides the part I’m most ashamed of.",
                insight: "This 'edited confession' is a common halfway place. You’re testing whether honesty is survivable. You don’t have to despise this step; you can simply remain open to the Spirit nudging you, in time, toward a fuller telling with someone who has proven trustworthy."
              },
              {
                text: "In my mind I rehearse explanations and excuses so it won’t sound as serious when I talk about it.",
                insight: "Explanation is one way of protecting yourself from the weight of your own story. Instead of battling that tendency, you might pray, 'Lord, help me describe this simply—no dramatizing, no shrinking—just the real thing.' That kind of clarity makes room for real grace instead of vague comfort."
              },
              {
                text: "I sense a quiet nudge to choose one wise, gracious person and be more honest than I have been before.",
                insight: "That gentle nudge is worth paying attention to. Confession in James is not to everyone; it is within the family of faith. Ask, 'Who has both truth and tenderness?' and trust that God cares deeply about who hears your heart."
              },
              {
                text: "I decide to tell them plainly and ask, 'Would you pray with me about this and walk with me as I grow?'",
                insight: "Now you are stepping into the pattern James describes: confession joined with prayer. You’re inviting another to stand with you before God. This is not a performance of brokenness; it is opening a window so light and fresh air can reach the places that have stayed shut."
              },
              {
                text: "After sharing, I receive their prayer and choose to let God’s mercy, not my failure, define who I am going forward.",
                insight: "This is where healing deepens. Instead of clinging to shame as your truest story, you allow God’s compassion to speak the louder word. The sin is real, but it is no longer the center. In that place, confession becomes less about exposure and more about being gently brought back into wholeness."
              }
            ]
          }
        ]
      },
      {
        title: "Verse by Verse Deep Dive",
        duration: "Self-Paced",
        level: "Verse by Verse",
        sections: [
          {
            type: "verse_study",
            title: "I. The Corrosion of Wealth (vv 1-6)",
            content: "James delivers a blistering prophetic condemnation of the rich who hoard while laborers starve. Their wealth will testify against them in the last days.",
            verseAnalyses: [
              {
                reference: "James 5:1-6",
                text: "Come now, you rich, weep and howl for the miseries that are coming upon you. Your riches have rotted and your garments are moth-eaten. Your gold and silver have corroded, and their corrosion will be evidence against you and will eat your flesh like fire. You have laid up treasure in the last days. Behold, the wages of the laborers who mowed your fields, which you kept back by fraud, are crying out against you, and the cries of the harvesters have reached the ears of the Lord of hosts. You have lived on the earth in luxury and in self-indulgence. You have fattened your hearts in a day of slaughter. You have condemned and murdered the righteous person. He does not resist you.",
                keywords: [
                  { word: "Corroded", original: "katiōtai", insight: "Rusted through. Gold doesn't rust physically, but spiritually it rots when hoarded." },
                  { word: "Last days", original: "eschatais", insight: "Hoarding in the end times is madness. It's like stacking cash on a sinking ship." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "II. The Patience of the Farmer (vv 7-11)",
            content: "In contrast to the frantic hoarding of the rich, the believer is to wait. The metaphor is the farmer—dependent on rains he cannot control, and the prophets who spoke in the name of the Lord.",
            verseAnalyses: [
              {
                reference: "James 5:7-9",
                text: "Be patient, therefore, brothers, until the coming of the Lord. See how the farmer waits for the precious fruit of the earth, being patient about it, until it receives the early and the late rains. You also, be patient. Establish your hearts, for the coming of the Lord is at hand. Do not grumble against one another, brothers, so that you may not be judged; behold, the Judge is standing at the door.",
                keywords: [
                  { word: "Patience", original: "makrothymēsate", insight: "Long-tempered. Having a long fuse. Not exploding under pressure." },
                  { word: "Coming", original: "parousias", insight: "Presence/Arrival. The return of the King is the motive for endurance." }
                ]
              },
              {
                reference: "James 5:10-11",
                text: "As an example of suffering and patience, brothers, take the prophets who spoke in the name of the Lord. Behold, we consider those blessed who remained steadfast. You have heard of the steadfastness of Job, and you have seen the purpose of the Lord, how the Lord is compassionate and merciful.",
                keywords: [
                  { word: "Compassionate", original: "polysplanchnos", insight: "Multi-gutted. Extremely deeply moved in the bowels (seat of emotion). God feels our pain." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "III. Integrity (v 12)",
            content: "A brief interlude on truth. Suffering tempts us to make rash oaths. Integrity is simpler.",
            verseAnalyses: [
              {
                reference: "James 5:12",
                text: "But above all, my brothers, do not swear, either by heaven or by earth or by any other oath, but let your 'yes' be yes and your 'no' be no, so that you may not fall under condemnation.",
                keywords: [
                  { word: "Hypocrisy", original: "hypokrisin", insight: "Or 'judgment'. Double-talk leads to condemnation." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "IV. The Prayer of Faith (vv 13-18)",
            content: "The response to every season (suffering or cheer) is God-ward. Sickness triggers community intercession. Elijah proves that frail humans can pray mighty prayers.",
            verseAnalyses: [
              {
                reference: "James 5:13-15",
                text: "Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing praise. Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord. And the prayer of faith will save the one who is sick, and the Lord will raise him up. And if he has committed sins, he will be forgiven.",
                keywords: [
                  { word: "Save", original: "sōsei", insight: "Used for both physical healing and spiritual salvation. Wholeness." },
                  { word: "Anointing", original: "aleipsantes", insight: "Medicinal/Sacramental act. A tangible sign of the Spirit's presence." }
                ]
              },
              {
                reference: "James 5:16-18",
                text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working. Elijah was a man with a nature like ours, and he prayed fervently that it might not rain, and for three years and six months it did not rain on the earth. Then he prayed again, and heaven gave rain, and the earth bore its fruit.",
                keywords: [
                  { word: "Confess", original: "exomologeisthe", insight: "To agree openly. Secret sin loses its power when brought into the light of community." },
                  { word: "Effective", original: "energoumenē", insight: "Energized. Prayer is not passive; it is a working force." }
                ]
              }
            ]
          },
          {
            type: "verse_study",
            title: "V. The Rescue Mission (vv 19-20)",
            content: "The book ends abruptly with a call to rescue wanderers. We are our brother's keeper.",
            verseAnalyses: [
              {
                reference: "James 5:19-20",
                text: "My brothers, if anyone among you wanders from the truth and someone brings him back, let him know that whoever brings back a sinner from his wandering will save his soul from death and will cover a multitude of sins.",
                keywords: [
                  { word: "Wanders", original: "planēthē", insight: "To be led astray (planet). Passive voice—it happens gradually." },
                  { word: "Covers", original: "kalypsei", insight: "To hide/veil. Love covers a multitude of sins." }
                ]
              }
            ]
          }
        ],
        reflections: [
          {
            scenario: "James ends his letter with a call to bring back the wanderer. Who in your life has 'wandered from the truth'?",
            options: [
              {
                text: "I feel angry at them for leaving.",
                insight: "Anger drives them further away. James asks us to 'bring them back'—a gentle, restorative action, like finding a lost sheep."
              },
              {
                text: "I'm afraid to reach out because I don't know what to say.",
                insight: "You don't need a sermon. You just need presence. A simple text, a coffee, a reminder that they belong. Love covers a multitude of sins."
              }
            ]
          }
        ]
      }
    ]
  }
};

// --- COMPONENTS ---

const WordStudyModal = ({ data, onClose }: { data: KeywordInsight | null; onClose: () => void }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md p-6 rounded-2xl glass-panel border-t border-white/20 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-indigo-500/20 border border-indigo-500/30">
            <Search className="w-6 h-6 text-indigo-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{data.word}</h3>
            <p className="text-sm font-mono text-indigo-300">{data.original}</p>
          </div>
        </div>

        <div className="prose prose-invert">
          <p className="text-lg leading-relaxed text-gray-200">
            {data.insight}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-medium"
          >
            Close Insight
          </button>
        </div>
      </div>
    </div>
  );
};

const VerseComponent: React.FC<{ 
  analysis: VerseAnalysis; 
  onKeywordClick: (k: KeywordInsight) => void 
}> = ({ 
  analysis, 
  onKeywordClick 
}) => {
  return (
    <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold tracking-wider text-white/50 uppercase">{analysis.reference}</span>
      </div>
      <p className="text-xl font-serif leading-relaxed text-gray-200 mb-4">
        "{analysis.text}"
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {analysis.keywords.map((k, i) => (
          <button
            key={i}
            onClick={() => onKeywordClick(k)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 hover:border-indigo-400/50 transition-all group"
          >
            <Search className="w-3 h-3 text-indigo-400 group-hover:text-indigo-300" />
            <span className="text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
              {k.word} <span className="opacity-50 italic">({k.original})</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ReadingProgressBar = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScroll = scrollHeight - clientHeight;
      const currentProgress = (scrollTop / totalScroll) * 100;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <div className="absolute top-0 left-0 w-full h-1 z-50 bg-gray-800">
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const ReflectionCard: React.FC<{ prompt: ReflectionPrompt }> = ({ prompt }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="my-8 p-6 rounded-2xl glass-panel border-l-4 border-pink-500/50">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 rounded-full bg-pink-500/20 mt-1">
          <Heart className="w-6 h-6 text-pink-300" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-pink-200 mb-2">Soul Reflection</h3>
          <p className="text-gray-300 italic leading-relaxed">"{prompt.scenario}"</p>
        </div>
      </div>

      <div className="space-y-3">
        {prompt.options.map((opt, idx) => (
          <div key={idx} className="group">
            <button
              onClick={() => setSelected(selected === idx ? null : idx)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                selected === idx 
                  ? 'bg-pink-500/20 border-pink-500/50' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-200 font-medium">{opt.text}</span>
                {selected === idx ? (
                  <ChevronDown className="w-5 h-5 text-pink-300" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300" />
                )}
              </div>
            </button>
            
            {selected === idx && (
              <div className="mt-2 ml-4 pl-4 border-l-2 border-pink-500/30 animate-in slide-in-from-top-2">
                <p className="text-pink-100 py-2 leading-relaxed">
                  <Sparkles className="w-4 h-4 inline mr-2 text-pink-400" />
                  {opt.insight}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- VIEWS ---

const ChapterView = ({ onSelectChapter }: { onSelectChapter: (id: number) => void }) => {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      <header className="mb-16 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-900 mb-6 tracking-tight">
          THE EPISTLE OF JAMES
        </h1>
        <p className="text-xl text-blue-200/80 max-w-2xl mx-auto font-light">
          Wisdom for the scattered. Wholeness for the divided.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {JAMES_CHAPTERS.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter.id)}
            className="group relative h-80 rounded-3xl p-8 text-left transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${chapter.theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="absolute inset-0 glass-panel group-hover:bg-white/5 transition-colors duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className={`inline-flex p-3 rounded-2xl bg-white/5 border ${chapter.theme.accent} mb-6 text-white group-hover:scale-110 transition-transform duration-500`}>
                  {chapter.icon}
                </div>
                <h2 className={`text-3xl font-bold text-white mb-2 group-hover:${chapter.theme.primary} transition-colors`}>
                  {chapter.title}
                </h2>
                <p className={`text-sm font-bold uppercase tracking-widest ${chapter.theme.secondary} opacity-70`}>
                  {chapter.subtitle} • {chapter.verseCount} Verses
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors">
                  {chapter.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                  <span>Begin Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ModuleView = ({ 
  chapterId, 
  onBack 
}: { 
  chapterId: number; 
  onBack: () => void 
}) => {
  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [modalData, setModalData] = useState<KeywordInsight | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const course = STATIC_COURSE_DATA[chapterId];
  const activeModule = course.modules[activeModuleIdx];
  const chapterInfo = JAMES_CHAPTERS.find(c => c.id === chapterId);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeModuleIdx]);

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-gray-900">
      
      {/* Sidebar Navigation */}
      <div className="w-full md:w-80 bg-gray-950 border-r border-white/5 flex flex-col z-20">
        <div className="p-6 border-b border-white/5">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Library
          </button>
          <h2 className="text-xl font-bold text-white mb-1">{chapterInfo?.subtitle}</h2>
          <p className="text-sm text-gray-500">{course.title}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {course.modules.map((mod, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModuleIdx(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                activeModuleIdx === idx 
                  ? 'bg-white/10 border-white/20 shadow-lg' 
                  : 'bg-transparent border-transparent hover:bg-white/5 text-gray-400'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                activeModuleIdx === idx ? 'bg-white text-black' : 'bg-white/10'
              }`}>
                {idx + 1}
              </div>
              <div>
                <div className="font-medium text-sm">{mod.level}</div>
                <div className="text-xs opacity-60">{mod.duration}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative h-full overflow-hidden">
        <ReadingProgressBar containerRef={scrollContainerRef} />

        <div 
          ref={scrollContainerRef}
          className="h-full overflow-y-auto p-6 md:p-12 scroll-smooth"
        >
          <div className="max-w-3xl mx-auto pb-24">
            <div className="mb-12 animate-in slide-in-from-bottom-4 duration-700">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 inline-block">
                {activeModule.level}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {activeModule.title}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            {activeModule.sections.map((section, sIdx) => (
              <div key={sIdx} className="mb-16 animate-in fade-in duration-1000 delay-150">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-2 rounded-lg bg-white/5">
                      {section.type === 'context' && <Globe className="w-5 h-5 text-emerald-300" />}
                      {section.type === 'structure' && <LayoutDashboard className="w-5 h-5 text-blue-300" />}
                      {section.type === 'verse_study' && <ScrollText className="w-5 h-5 text-amber-300" />}
                   </div>
                   <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                </div>

                {section.content && (
                  <div className="prose prose-lg prose-invert mb-8 text-gray-300 leading-relaxed">
                    <p>{section.content}</p>
                  </div>
                )}

                {section.structuralLines && (
                  <div className="space-y-2 my-8 pl-4 border-l border-white/10">
                    {section.structuralLines.map((line, i) => (
                      <div 
                        key={i} 
                        className="relative group cursor-pointer"
                        style={{ marginLeft: `${line.indent * 24}px` }}
                      >
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors" />
                        <div className="p-3 rounded-lg group-hover:bg-white/5 transition-colors flex items-center justify-between">
                           <span className="font-mono text-blue-300 mr-3 text-sm">{line.label}</span>
                           <span className="flex-1 text-gray-300">{line.text}</span>
                           {line.pairing && <span className="text-xs text-gray-600 font-mono ml-2">Matches {line.pairing}</span>}
                        </div>
                        
                        <div className="hidden group-hover:block absolute left-full ml-4 top-0 w-72 p-4 glass-panel rounded-xl z-10 animate-in fade-in zoom-in-95">
                           <p className="text-sm text-blue-100">{line.theological_connection}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.verseAnalyses && (
                  <div className="space-y-6">
                    {section.verseAnalyses.map((analysis, vIdx) => (
                      <VerseComponent 
                        key={vIdx} 
                        analysis={analysis} 
                        onKeywordClick={setModalData}
                      />
                    ))}
                  </div>
                )}

                {section.perspectiveItems && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    {section.perspectiveItems.map((item, pIdx) => (
                      <div key={pIdx} className="p-5 rounded-2xl bg-white/5 border border-white/5">
                        <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">{item.role}</div>
                        <p className="text-sm text-gray-300 italic">"{item.text}"</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {activeModule.reflections.length > 0 && (
              <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 mb-8 flex items-center gap-3">
                  <BookHeart className="w-8 h-8" />
                  Internalize The Word
                </h3>
                {activeModule.reflections.map((prompt, idx) => (
                  <ReflectionCard key={idx} prompt={prompt} />
                ))}
              </div>
            )}
            
            <div className="mt-24 text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-400 text-sm">
                 <CheckCircle2 className="w-4 h-4 text-green-500" />
                 End of Module
               </div>
            </div>
          </div>
        </div>
      </div>

      {modalData && (
        <WordStudyModal 
          data={modalData} 
          onClose={() => setModalData(null)} 
        />
      )}
    </div>
  );
};

// --- APP ---

const App = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans selection:bg-blue-500/30">
      {selectedChapter ? (
        <ModuleView 
          chapterId={selectedChapter} 
          onBack={() => setSelectedChapter(null)} 
        />
      ) : (
        <ChapterView onSelectChapter={setSelectedChapter} />
      )}
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
