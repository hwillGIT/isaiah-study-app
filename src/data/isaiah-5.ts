import { Section } from '../types';
import { registerSection } from './sections-index';

export const isaiah5: Section = {
  id: 5,
  title: 'The Throne Room',
  subtitle: 'Holy, Holy, Holy',
  chapters: 'Chapter 6',
  emotionalArc: 'Terror → cleansing → commission',
  colorClass: 'yellow',
  accentClass: 'border-yellow-500',
  glowClass: 'shadow-yellow-500/20',
  gradientClass: 'from-yellow-950 via-gray-900 to-gray-950',

  genre: {
    genre: 'throne_vision',
    label: 'Throne Vision / Call Narrative',
    description: 'The throne vision is a prophetic genre in which God is revealed seated on a heavenly throne, surrounded by the divine council. It follows a specific pattern: theophany, the prophet\'s response of terror and unworthiness, divine cleansing, and commission. Isaiah 6 is the definitive example of this genre in the Hebrew Bible — the template against which all other call narratives are measured. Unlike a simple "call story" where God taps someone on the shoulder, the throne vision insists that the prophet first be undone by the holiness of God before being rebuilt for service. The genre communicates a foundational truth: no one volunteers for this work from a position of strength. The messenger must first be shattered and remade.',
  },

  historicalContext: {
    period: '740 BC — "In the Year That King Uzziah Died"',
    politicalSituation: 'Uzziah reigned for fifty-two years — the longest and most prosperous reign since Solomon. Under his leadership, Judah expanded its borders, fortified its cities, modernized its military, and enjoyed economic stability. But Uzziah\'s pride led him to enter the temple and burn incense — a priestly function — and God struck him with leprosy (2 Chronicles 26:16-21). He spent his final years quarantined, ruling through his son Jotham as regent. When Uzziah finally died around 740 BC, the earthly throne stood empty in a way that felt existential, not merely political. To the northeast, Assyria under Tiglath-pileser III was consolidating an empire that would soon swallow the Northern Kingdom whole. Isaiah\'s vision occurs in this precise gap: the earthly throne vacant, the foreign threat rising, the nation\'s future uncertain. And into that vacuum, Isaiah sees another throne — not empty, but overwhelmingly full.',
    keyFigures: [
      'Uzziah (fifty-two-year king struck with leprosy for usurping priestly authority — 2 Chronicles 26)',
      'Isaiah (prophet called in the throne room, undone and remade)',
      'The seraphim (burning ones — celestial beings who guard the divine holiness and mediate cleansing)',
    ],
    whyItMatters: 'When the structures you relied on collapse — the leader you trusted, the institution you served, the certainty you built your life around — what fills the vacuum? Isaiah 6 insists that the answer is not a better strategy or a stronger leader but an encounter with the Holy that is both terrifying and transformative. The chapter does not offer comfort from a distance. It pulls you into the throne room and asks: what happens to your carefully constructed identity when you stand in the presence of the one who is utterly other?',
  },

  themes: [
    {
      theme: 'exodus',
      active: true,
      connection: 'Moses at the burning bush (Exodus 3) is the closest parallel: fire, holy ground, the prophet\'s protest of unworthiness ("Who am I that I should go?"), and a divine commission to speak to a resistant audience. Both Moses and Isaiah encounter God through fire. Both are unmade by the encounter. Both are sent to people who will not listen. The seraphim — "burning ones" — are the living equivalent of the bush that burns but is not consumed.',
    },
    {
      theme: 'zion_eden',
      active: true,
      connection: 'The temple in Isaiah\'s vision is the meeting point of heaven and earth — the threshold where the created order touches the uncreated. The shaking of the foundations echoes Sinai (Exodus 19:18), where the mountain trembled at God\'s descent. The smoke filling the temple recalls the cloud of glory that filled the tabernacle (Exodus 40:34-35). The temple is not merely a building; it is Eden\'s gate, Sinai\'s peak, and heaven\'s floor all compressed into a single space.',
    },
    {
      theme: 'messiah',
      active: true,
      connection: 'Isaiah\'s response — "Here am I; send me!" — is the first portrait of the willing servant. The one who has been cleansed by fire now offers to carry the message, even knowing the audience will not hear. This voluntary suffering foreshadows the Suffering Servant of Isaiah 52-53, who will bear the people\'s iniquity willingly. The pattern is established here: the servant does not serve from a position of power but from a place of being undone and rebuilt.',
    },
    {
      theme: 'hope',
      active: true,
      connection: 'The coal from the altar touches Isaiah\'s lips and the seraph declares: "Your guilt has departed and your sin is blotted out." Before the commission, before the devastating message of hardening, there is cleansing. The mechanism of grace precedes the call to service. And at the chapter\'s end, after the devastation — cities without inhabitants, houses without people, land utterly desolate — a stump remains. The holy seed. The remnant hope that refuses to die even when everything above the soil has been cut down.',
    },
  ],

  bigPicture: {
    literaryContext: 'Isaiah 6 is the hinge on which the first twelve chapters turn. Chapters 1-5 build an overwhelming case: the nation is rebellious (ch.1), its future is both glorious and catastrophic (ch.2-4), and the vineyard that should have produced justice has yielded only bloodshed (ch.5). The reader reaches chapter 6 with a question pressing against the text like a fist: Who will speak for God when every earthly authority has failed? The answer is not a program or a policy but a person — shattered, cleansed, and sent. The call narrative of chapter 6 authorizes everything that follows: every oracle of judgment, every whisper of hope, every devastating word that Isaiah will speak from chapter 7 onward flows from the throne room commission. The chapter also functions as a literary reset: after five chapters of accusation aimed at the people, chapter 6 turns the lens inward. The prophet must face the same holiness before speaking it to others. The one who will pronounce "woe" upon the nations (ch.5) must first pronounce it upon himself.',

    perspectives: [
      {
        role: 'Spiritual Director',
        text: 'Notice the sequence: vision, then devastation, then cleansing, then commission. The order is not negotiable. Isaiah does not volunteer for service and then gradually grow into holiness. The holiness comes first — and it undoes him before it rebuilds him. In the contemplative tradition, this is the pattern of transformation: you cannot be sent until you have been unmade. The mystics called it purgation before illumination. The desert fathers called it kenosis — self-emptying. Isaiah calls it "Woe is me! I am lost!" The question for your own life is not whether you are willing to serve — it is whether you are willing to be undone first. Willingness to serve is common. Willingness to be shattered is rare.',
      },
      {
        role: 'Pastoral Director',
        text: 'Every pastor, every leader, every person in ministry arrives at this chapter with a specific vulnerability: the temptation to skip from calling to commission without passing through the fire. You heard a call. You responded. You went to seminary, got ordained, took the position. But somewhere between the burning bush and the burning coal, you learned to manage holiness rather than be consumed by it. Isaiah 6 will not let you do that. The prophet who will spend decades speaking hard truth to resistant people is first reduced to a single cry: "I am a man of unclean lips." Not "I am unqualified" — that would be false modesty. "I am unclean." The ministry that flows from this chapter is not built on competence. It is built on the memory of being undone and the gratitude of being put back together.',
      },
      {
        role: 'Psychologist',
        text: 'The encounter in Isaiah 6 follows a pattern that trauma researchers would recognize: overwhelming stimulus, the collapse of the constructed self, a transformative intervention, and re-engagement with a new identity. Isaiah\'s cry — "Woe is me! I am lost!" — is not theatrical humility. The Hebrew nidmeti can mean "I am destroyed, I am cut off, I am silenced." The constructed self — prophet, Israelite, man of standing — disintegrates in the presence of absolute holiness. What follows is not self-help or gradual recovery but an external act of grace: someone else brings the coal, someone else speaks the absolution. The rebuilding of identity after such an encounter is never a return to what was. Isaiah leaves the throne room as someone else — not improved but fundamentally reconstituted.',
      },
      {
        role: 'Theologian',
        text: 'The trisagion — "Holy, holy, holy" — is the only attribute of God repeated three times in succession anywhere in the Hebrew Bible. Not "loving, loving, loving" or "just, just, just" — though God is both. Holiness is the attribute that contains and grounds all the others. The Hebrew qadosh means "set apart, utterly other, categorically different." The threefold repetition is the Hebrew superlative of superlatives: not merely holy, not even most holy, but holy beyond the capacity of language to express. The theological weight of this chapter rests on a single claim: the God who fills the temple with glory is not a magnified version of anything in creation. God is other — and encounter with that otherness is simultaneously the most terrifying and the most liberating experience available to a human being.',
      },
      {
        role: 'Historian',
        text: 'Uzziah\'s death in 740 BC marks a geopolitical inflection point. For half a century, Judah had enjoyed stability under a single king. Now the throne passes to Jotham, then quickly to Ahaz — a king who will panic before the Syro-Ephraimite coalition and seek alliance with Assyria rather than trust God (ch.7). The Northern Kingdom of Israel has perhaps twenty years left before Samaria falls to Sargon II in 722 BC. Egypt is in decline. The entire ancient Near Eastern order is being reshuffled. Isaiah receives his commission at the precise moment when political certainty ends — and his message will be, devastatingly, that the people will hear but not understand. The prophet is sent into a historical moment that demands clarity, carrying a message that guarantees confusion. The irony is not accidental; it is the point.',
      },
    ],

    soulReflection: {
      scenario: 'You walk into the room expecting the usual. The liturgy you know, the hymns you\'ve memorized, the sermon you can half-predict. And then something shifts. The air changes. The familiar words crack open and behind them is something vast and burning and utterly alive. You are not observing worship anymore — you are inside it, and it is inside you, and you realize with a jolt of terror that the God you have been managing with your theology and your devotional habits is not manageable at all. The hem of the robe fills the temple. The foundations shake. The smoke rises. And you hear yourself say — not as a theological statement but as a cry torn from the deepest part of you — "I am undone." What happens next?',
      options: [
        {
          text: 'I want to run. Every instinct says leave the room, close the book, turn on a podcast — anything to break the intensity of this moment.',
          insight: 'The flight instinct is not cowardice. It is your nervous system recognizing something your theology has been domesticating for years: the God who loves you is also the God who is wholly other, and proximity to that otherness is physiologically overwhelming. Moses hid his face. The elders of Israel were terrified they would die. Peter fell to his knees and said "Go away from me." The instinct to flee is the body\'s honest confession that it has encountered something it cannot contain. But notice — in every one of those stories, the person who wanted to run was the person God wanted to send. The door is behind you. You are free to leave. But the coal is already in the seraph\'s tongs.',
        },
        {
          text: 'I feel tears rising, but I don\'t know why. Not guilt exactly. Not joy. Something underneath both of those.',
          insight: 'There is a grief that has no name in English — the grief of recognizing how far you have wandered from something you forgot you were looking for. Not moral failure, exactly. Distance. The slow drift between who you were when faith was alive and who you have become now that it is managed. These tears are not about sin the way a checklist would define it. They are about homesickness — the ache of standing suddenly close to a home you didn\'t know you\'d left. Isaiah\'s cry was not a confession of specific wrongs. It was the involuntary response of a human soul recognizing the gap between itself and glory. Let the tears fall. They are finding their way back.',
        },
        {
          text: 'Something in me goes very quiet. Not peaceful — stunned. Like the moment after a car accident before the noise begins.',
          insight: 'Silence before the holy is its own language. The seraphim cover their faces, cover their feet — even celestial beings cannot gaze directly at what fills that throne. Your stillness is not emptiness; it is capacity. The loud self — the one with opinions, plans, defenses — has been temporarily silenced by something too large for commentary. Do not rush to fill the quiet with interpretation. The silence itself is the encounter. When Isaiah finally speaks, his first word is "woe" — a funeral cry. The silence before the cry is the space where the old self dies and the new one has not yet been named.',
        },
        {
          text: 'My first thought is: I\'m not worthy to be here. I don\'t belong in this room. I should not have seen this.',
          insight: 'You are right. You don\'t belong here. Neither did Isaiah. Neither did Moses. Neither did any human being who has ever stood at the boundary between the created and the uncreated. And that is precisely the point. The throne vision is not a reward for spiritual achievement — it is an interruption of ordinary life by extraordinary holiness. You did not earn your way in; you were brought. The unworthiness you feel is not a disqualification. It is the prerequisite. Only the person who knows they do not belong can receive the coal that makes belonging possible. The seraph does not say "you are worthy." The seraph says "your guilt has departed." The difference is everything.',
        },
        {
          text: 'I feel a strange pull — like I want to move closer, not farther away. The terror and the attraction are happening at the same time.',
          insight: 'Rudolf Otto called it the mysterium tremendum et fascinans — the mystery that simultaneously repels and attracts. You tremble and you lean in. You want to hide your face and you cannot look away. This paradox is not a sign of confusion; it is the signature of genuine encounter with the Holy. Fear alone would drive you out. Attraction alone would domesticate the experience into something comfortable. But fear and attraction together — that is the specific emotional register of standing before the living God. The seraphim model it: they cover their faces (they cannot look) and they cover their feet (they dare not presume) and they fly (they move toward). Stay in the paradox. It is the most honest place you have been in years.',
        },
        {
          text: 'Honestly? I feel nothing. I read the words and they are beautiful, but the throne room feels like someone else\'s experience, not mine.',
          insight: 'The distance you feel may be the most important data in this entire exercise. Not because numbness is failure — but because it reveals something about the expectations you carry into sacred texts. You have perhaps heard "Holy, holy, holy" so many times that it has become wallpaper. The trisagion that shook foundations has been set to organ music and printed in hymnals and repeated until it no longer shakes anything. That is not your fault. But it is your situation. And the question is whether you are willing to sit with the text long enough for the familiarity to crack — to read it not as liturgy but as reportage. A man walked into the temple. The building shook. Smoke filled the room. He screamed. Something flew toward him with fire. Start there. Not with the theology. With the scene.',
        },
        {
          text: 'I hear the question — "Whom shall I send?" — and something in me rises before I can stop it. I want to say yes before I know what I\'m agreeing to.',
          insight: 'Pay attention to the speed of that response. Isaiah\'s "Here am I; send me!" comes before the content of the commission is revealed — and the content, when it arrives, is devastating: preach and they will not hear, speak and they will not understand. The willingness that rises in you is genuine, and it matters. But the throne room will not let you volunteer without knowing the cost. The impulse to say yes is beautiful. The question that follows — "How long, O Lord?" — is where the beauty meets the ground. Stay with both. The yes without the cost is enthusiasm. The yes after hearing the cost is obedience. The space between them is where your calling lives.',
        },
      ],
    },
  },

  framework: {
    structure: [
      {
        label: 'A',
        reference: 'v.1-4',
        content: 'Theophany — The vision of God enthroned, seraphim crying "Holy, holy, holy," the temple filled with smoke',
        pairId: 'A',
        indent: 0,
        connection: 'The chapter opens with overwhelming divine presence: God on a throne, seraphim in perpetual worship, the building itself shaking. This is not a gentle invitation but an eruption of holiness into human space. The theophany establishes the context for everything that follows — every response, every cleansing, every commission flows from this encounter with the utterly other.',
      },
      {
        label: 'B',
        reference: 'v.5',
        content: 'Response of unworthiness — "Woe is me! I am lost, for I am a man of unclean lips"',
        pairId: 'B',
        indent: 1,
        connection: 'The prophet\'s response is not careful theology but raw, involuntary confession. He does not list specific sins — he names a condition. "Unclean lips" is both personal (his own speech) and communal ("among a people of unclean lips"). The individual and the community are implicated together. This pairs with the commission in B\' (v.8): the lips that were unclean are the same lips that will speak "Here am I."',
      },
      {
        label: 'C',
        reference: 'v.6-7',
        content: 'Cleansing — The seraph brings a live coal from the altar; guilt departed, sin blotted out',
        indent: 2,
        connection: 'The center of the chapter\'s emotional arc: the point of transformation. The coal from the altar is not symbolic — it is a burning stone pressed against human lips by a celestial being. The pain is not described but implied. The declaration that follows — "your guilt has departed and your sin is blotted out" — is pronounced by the seraph, not earned by the prophet. Grace is external, initiated by another, and physically transformative.',
      },
      {
        label: 'B\'',
        reference: 'v.8',
        content: 'Commission accepted — "Whom shall I send?" / "Here am I; send me!"',
        pairId: 'B',
        indent: 1,
        connection: 'Paired with B (v.5): the lips that cried "Woe is me" now cry "Send me." The transformation is complete — from self-pronounced destruction to voluntary commission. Notice the divine question uses the first person plural ("Whom shall I send, and who will go for us?"), echoing the heavenly council language of Genesis 1:26 and 1 Kings 22:19-22. Isaiah is not merely receiving a personal calling; he is entering the divine deliberation.',
      },
      {
        label: 'A\'',
        reference: 'v.9-13',
        content: 'The devastating commission — preach but they will not hear; the land made desolate; the holy seed in the stump',
        pairId: 'A',
        indent: 0,
        connection: 'Paired with A (v.1-4): the glory that filled the temple now sends a message the people cannot receive. The theophany that opened the chapter leads to a commission that is, on its surface, a guarantee of failure. But the final verse cracks the devastation open: the stump that remains after the felling contains the holy seed. The chapter that began with overwhelming presence ends with stubborn hope buried in apparent destruction.',
      },
    ],

    poeticDevices: [
      {
        type: 'wordplay',
        verses: 'v.3',
        explanation: 'The trisagion — "Holy, holy, holy" (qadosh, qadosh, qadosh) — is the only divine attribute repeated three times in the Hebrew Bible. In Hebrew, repetition is the mechanism of emphasis: saying something twice indicates intensity; saying it three times indicates the absolute superlative. This is not merely "very holy" but holiness raised to the highest power language can express. The antiphonal form (one seraph calling to another) transforms the declaration from statement into liturgy — the first worship song in Scripture performed by non-human voices.',
      },
      {
        type: 'synonymous',
        verses: 'v.9-10',
        explanation: 'The hardening commission uses synonymous parallelism with devastating effect: "Keep listening, but do not comprehend; keep looking, but do not understand." Hearing and seeing are paired, and both are negated. Then the logic inverts: "Make the mind of this people dull, and stop their ears, and shut their eyes." The parallelism is threefold (mind/ears/eyes), and the irony is total — the prophet is sent to speak so that the people will NOT understand. The form mirrors the content: the more you hear, the less you comprehend.',
      },
      {
        type: 'inclusio',
        verses: 'v.1-4, v.13',
        explanation: 'The chapter opens with fire (the seraphim are "burning ones," the coal from the altar) and smoke (the temple fills with smoke). It closes with destruction that levels cities and empties the land — but from the stump, a holy seed. Fire and smoke bookend the chapter, but the final image is organic: not flame but a seed. The inclusio transforms the meaning of the fire: it is not merely destructive but regenerative. What burns also purifies. What fells the tree also reveals the seed that was hidden in its core.',
      },
      {
        type: 'chiasm',
        verses: 'v.5-8',
        explanation: 'The central movement of the chapter follows a chiastic pattern: Unclean lips (v.5a) → among an unclean people (v.5b) → coal touches lips (v.6-7) → divine question (v.8a) → "Here am I" (v.8b). The movement from communal uncleanness inward to personal confession, then outward through cleansing to commission, mirrors the architecture of the temple itself — from the outer courts inward to the Holy of Holies, then back out to the world. Isaiah enters the presence devastated and exits commissioned.',
      },
    ],

    soulReflection: {
      scenario: 'You are looking at the structure of Isaiah 6 and you notice the pattern: vision, collapse, cleansing, commission, devastating assignment, remnant hope. It is not random. It is a sequence — and the sequence is not optional. You cannot skip from step one to step four. You cannot volunteer for the commission without passing through the collapse. The structure insists: before you can be sent, you must be undone. Before the coal touches your lips, you must cry out that your lips are unclean. The architecture of the text mirrors the architecture of transformation. What does that pattern expose in your own journey?',
      options: [
        {
          text: 'I realize I\'ve been trying to skip straight to the commission. "Here am I, send me" is the part I love. The "Woe is me, I am lost" part — I\'d rather not.',
          insight: 'The volunteer who has never been undone. The servant who has never screamed. The leader who built a ministry on competence rather than collapse. It is a recognizable portrait, and it is not a small thing to see yourself in it. But notice what the structure reveals: the commission that skips the collapse produces a different kind of messenger — one who speaks from strength rather than from the memory of being shattered. And the audience can tell the difference. A word spoken by someone who has been through the fire carries a resonance that competence alone cannot produce. The question is not whether your service has been genuine. The question is whether you have ever let holiness dismantle you before sending you.',
        },
        {
          text: 'I\'m stuck at the collapse. I\'ve been in the "Woe is me" for a long time, and I can\'t seem to get to the coal.',
          insight: 'Stay. The structure does not say how long each stage lasts. The collapse is not a single moment for everyone — for some, it is a season. A long, disorienting season where the old self has crumbled and the new one has not yet appeared. But look at the text again. Isaiah did not bring the coal to himself. He did not perform a ritual, recite a formula, or work his way to purification. He lay on the ground, undone, and someone flew to him. The coal is initiated from outside. If you are waiting for the coal, you are in the right posture. Flat on the ground, unable to save yourself, is exactly where the seraph knows to find you.',
        },
        {
          text: 'The "How long?" at the end hits me hardest. Isaiah asks how long the devastating commission will last. God\'s answer is essentially: until everything is destroyed. That feels unbearable.',
          insight: 'You wanted God to say "not long." A season, maybe two. A difficult year and then the breakthrough. Instead: "Until cities lie waste without inhabitant, and houses without people, and the land is utterly desolate." That is not an answer designed to encourage. It is an answer designed to strip away every false hope so that only the true one remains. And the true one is a single word buried in the chapter\'s final verse: seed. The holy seed in the stump. After the cities are empty and the land is waste, something remains. Not much. Not a forest. A seed. If that feels unbearable, perhaps it is because you are being asked to trust a hope that is too small for your expectations and too stubborn for your despair.',
        },
        {
          text: 'What strikes me is the shift from individual to communal. Isaiah says "I am a man of unclean lips AND I live among a people of unclean lips." He can\'t separate his own condition from his community\'s.',
          insight: 'In a culture built on individual salvation and personal relationship with God, this is the word that cuts. Isaiah does not say "I am clean but my people are dirty" — and he does not say "we are all unclean" as a theological abstraction. He names both in the same breath because both are true in the same moment. Your uncleanness and your community\'s uncleanness are not separate conditions — they share a root system. The coal that touches Isaiah\'s lips cleanses him, but the commission that follows sends him back to the unclean community. Cleansing is personal. Mission is communal. And the structure will not let you have one without the other.',
        },
        {
          text: 'I notice that the cleansing is painful. A live coal pressed against the lips. That is not gentle. Grace, in this text, involves fire.',
          insight: 'We have been taught that grace is soft. A warm embrace, a gentle whisper, a quiet reassurance that everything is okay. And sometimes it is. But the grace of Isaiah 6 is a burning stone held in tongs by a six-winged being who presses it against your mouth while you lie shattered on the floor. The seraph does not ask permission. The coal does not wait for readiness. Grace, in this chapter, is an act of violence against the thing that is killing you — the guilt, the shame, the uncleanness that separates you from the Holy. If your experience of grace has only ever been comfortable, this text invites you to consider that some wounds require cauterization, not bandages.',
        },
        {
          text: 'The antiphonal form — the seraphim calling back and forth to each other — makes the worship feel cosmic, not personal. Like I stumbled into something that was already happening without me.',
          insight: 'Because you did. The trisagion was not waiting for Isaiah\'s arrival. The seraphim were not performing for his benefit. The worship was underway — has always been underway — and Isaiah walked into the middle of it. This reframes everything you think about worship. You do not initiate it; you join it. You do not create the conditions for encounter; you stumble into an encounter that predates your awareness of it. The worship in the throne room is not a response to human need — it is the continuous reality of heaven, and occasionally, by grace or catastrophe, a human being is allowed to hear it. The antiphonal form reminds you: this is bigger than your story. And being small inside something vast is not insignificance. It is relief.',
        },
        {
          text: 'The stump at the end. After all the destruction, a stump with a holy seed. That image won\'t let me go.',
          insight: 'A tree felled to its stump looks dead. No branches, no leaves, no shade, no fruit — just a scarred circle of wood at ground level, easy to miss, easy to dismiss. And inside it, invisible to everyone who passes by, the genetic code for an entire forest. The holy seed. This is how hope survives in Isaiah: not as triumphant growth but as hidden life inside apparent death. The stump is not a metaphor for optimism — it is a metaphor for the kind of hope that exists only after everything optimistic has been destroyed. If you are in a season where everything visible has been cut down, the text does not ask you to pretend the tree is still standing. It asks you to trust the seed. That is harder. And it is enough.',
        },
      ],
    },
  },

  verseByVerse: {
    verses: [
      {
        verseNumber: '6:1',
        text: 'In the year that King Uzziah died, I saw the Lord sitting on a throne, high and lofty; and the hem of his robe filled the temple.',
        keywords: [
          {
            word: 'the Lord',
            hebrew: 'אֲדֹנָי',
            transliteration: 'Adonai',
            definition: 'Lord, Sovereign, Master — the title used when the divine name YHWH is too sacred to pronounce',
            significance: 'Isaiah sees Adonai — not merely a vision of glory but the Sovereign seated on the throne. The earthly throne is empty (Uzziah has died), but the heavenly throne is overwhelmingly occupied. The word choice is deliberate: Adonai emphasizes sovereignty and lordship at the precise moment when earthly sovereignty has collapsed. John 12:41 will later identify this vision as a vision of Christ\'s glory.',
          },
        ],
        notes: 'The opening verse does three things simultaneously: it dates the vision to a specific political crisis (Uzziah\'s death), it places Isaiah inside the temple, and it reveals the heavenly reality behind the earthly architecture. The "hem of his robe" (shulav) filling the temple inverts the normal proportions — the God who dwells in the temple is so vast that even the garment\'s edge overwhelms the space. The reader is being told: the building you thought contained God is itself contained by God.',
      },
      {
        verseNumber: '6:2',
        text: 'Seraphs were in attendance above him; each had six wings: with two they covered their faces, and with two they covered their feet, and with two they flew.',
        keywords: [
          {
            word: 'seraphim',
            hebrew: 'שְׂרָפִים',
            transliteration: 'seraphim',
            definition: 'Burning ones — celestial beings associated with fire and divine holiness',
            significance: 'The word saraph means "to burn." These are not gentle angels but burning creatures — living fire in the presence of the Holy. They appear nowhere else in the Hebrew Bible in this form. Their six wings serve three functions: covering the face (they cannot gaze directly at God), covering the feet (a euphemism for modesty before the Holy — even celestial beings cannot presume full exposure), and flying (movement, service, readiness). Two-thirds of their wings are devoted to reverence. Only one-third to action. The proportion is instructive.',
          },
        ],
        notes: 'The seraphim are "above" (or "in attendance upon") God — not seated but hovering, perpetually in motion. Their self-covering is not shame but awe: even beings made of fire cannot withstand the unmediated holiness of God. "Feet" in Hebrew often serves as a euphemism for the body\'s private parts, suggesting a total modesty before the divine presence. The description emphasizes that proximity to holiness demands not less reverence but more.',
      },
      {
        verseNumber: '6:3',
        text: 'And one called to another and said: "Holy, holy, holy is the LORD of hosts; the whole earth is full of his glory."',
        keywords: [
          {
            word: 'holy',
            hebrew: 'קָדוֹשׁ',
            transliteration: 'qadosh',
            definition: 'Set apart, utterly other, categorically distinct from all created things',
            significance: 'The threefold repetition — the trisagion — is the Hebrew superlative raised to the highest possible degree. It is the only divine attribute so repeated in the entire Hebrew Bible. Qadosh does not primarily mean "morally pure" (though it includes that); it means "other" — categorically unlike anything in creation. The theological weight is immense: the God of Israel is not a bigger version of anything. God is other. The trisagion will be echoed in Revelation 4:8, where the living creatures around the heavenly throne repeat it "day and night without ceasing."',
          },
          {
            word: 'glory',
            hebrew: 'כָּבוֹד',
            transliteration: 'kavod',
            definition: 'Weight, heaviness, glory — the tangible, weighty presence of God',
            significance: 'Kavod literally means "heaviness" or "weight." The glory of God is not ethereal but massive — something that fills space, displaces air, shakes foundations. When the seraphim declare that "the whole earth is full of his glory," they are making a claim that extends the throne room to the entire created order: the same weight that fills the temple fills the cosmos. There is no secular space. There is no place where kavod is absent — only places where it is unrecognized.',
          },
        ],
        poeticDevices: [
          {
            type: 'wordplay',
            verses: 'v.3',
            explanation: 'The antiphonal form — "one called to another" — creates a liturgical responsory. The seraphim are not making a statement; they are performing worship. The call-and-response pattern establishes the trisagion as dialogue, not monologue — a living, dynamic declaration that requires more than one voice to carry. This form will shape Jewish and Christian liturgy for three thousand years.',
          },
        ],
      },
      {
        verseNumber: '6:4',
        text: 'The pivots on the thresholds shook at the voices of those who called, and the house filled with smoke.',
        notes: 'The physical structure of the temple responds to the seraphic worship: the thresholds shake, the building fills with smoke. The shaking echoes Sinai (Exodus 19:18), where the mountain trembled at God\'s descent. The smoke recalls the cloud that filled the tabernacle when the glory of the LORD settled upon it (Exodus 40:34-35). Isaiah is experiencing a Sinai event inside the Jerusalem temple — the boundary between heaven and earth has become dangerously thin. The pivots (ammot) are the socket-stones in which the doors turn; when these shake, the entire structural integrity of the building is in question. The house of God is barely containing the God of the house.',
      },
      {
        verseNumber: '6:5',
        text: 'And I said: "Woe is me! I am lost, for I am a man of unclean lips, and I live among a people of unclean lips; yet my eyes have seen the King, the LORD of hosts!"',
        keywords: [
          {
            word: 'woe',
            hebrew: 'אוֹי',
            transliteration: 'oy',
            definition: 'A cry of anguish, distress, or lamentation — often used to announce a funeral or pronounce judgment',
            significance: 'Isaiah has just spent five chapters pronouncing "woe" upon others (the woe oracles of chapter 5). Now the woe falls on himself. The same word of judgment the prophet wielded against the nation is the first word that erupts from his own mouth in the presence of holiness. The prophet who diagnosed others is now the patient. The accusation he carried has turned inward. This is not false humility — it is the involuntary response of a finite being encountering the Infinite.',
          },
          {
            word: 'unclean',
            hebrew: 'טָמֵא',
            transliteration: 'tame',
            definition: 'Ritually impure, contaminated, unfit to enter the divine presence',
            significance: 'Tame is a priestly/cultic term — it describes the condition of being unfit for the presence of the Holy. Isaiah\'s self-diagnosis is specific: "unclean lips." Not unclean hands (actions) or unclean heart (motives) but lips — the organ of speech. The prophet whose vocation is to speak for God recognizes that his instrument is contaminated. And the contamination is not merely personal: he lives "among a people of unclean lips." The communal and the individual are fused.',
          },
          {
            word: 'lost',
            hebrew: 'נִדְמֵיתִי',
            transliteration: 'nidmeti',
            definition: 'I am destroyed, I am cut off, I am silenced, I am undone',
            significance: 'The Hebrew nidmeti carries connotations of being annihilated, cut down, or reduced to silence. Some translations render it "I am ruined" or "I am undone." The word suggests not merely feeling unworthy but experiencing actual disintegration — the constructed self coming apart in the presence of absolute holiness. Isaiah does not merely feel bad; he feels destroyed. The old self cannot survive this encounter. What comes next must be built from different materials.',
          },
        ],
        notes: 'This verse is the emotional center of the chapter. Isaiah\'s cry combines three elements: self-recognition ("I am a man of unclean lips"), communal identification ("I live among a people of unclean lips"), and the cause of his terror ("my eyes have seen the King"). Seeing God is, in the Hebrew tradition, supposed to be lethal (Exodus 33:20: "no one shall see me and live"). Isaiah\'s "Woe is me!" is therefore not merely an expression of unworthiness but a conviction that he is about to die. The fact that he survives — and the mechanism by which he survives — is the hinge of the chapter.',
      },
      {
        verseNumber: '6:6',
        text: 'Then one of the seraphs flew to me, holding a live coal that had been taken from the altar with a pair of tongs.',
        keywords: [
          {
            word: 'coal',
            hebrew: 'רִצְפָּה',
            transliteration: 'ritspah',
            definition: 'A glowing stone, a hot coal — a heated stone from the altar of sacrifice',
            significance: 'The ritspah is not a metaphor; it is a burning stone taken from the altar where sacrifices are consumed. The coal carries the fire of the altar — the fire that atones, that consumes the offering, that mediates between the human and the divine. The fact that it comes from the altar connects Isaiah\'s cleansing directly to the sacrificial system: his purification is accomplished by the same fire that accepts the people\'s offerings. Grace is not separate from sacrifice; it flows through it.',
          },
        ],
        notes: 'The seraph uses tongs — even a burning celestial being does not handle the altar\'s coal with bare hands. The coal is taken from the altar, the place of sacrifice and atonement. Isaiah is not cleansing himself; he is being cleansed by an act initiated from the heavenly realm, mediated through the sacrificial system. The flight of the seraph "to me" is an act of grace in motion — the divine coming to the shattered human, not waiting for the human to find the divine.',
      },
      {
        verseNumber: '6:7',
        text: 'The seraph touched my mouth with it and said: "Now that this has touched your lips, your guilt has departed and your sin is blotted out."',
        keywords: [
          {
            word: 'blotted out',
            hebrew: 'כֻּפָּר',
            transliteration: 'kuppar',
            definition: 'To cover, to atone, to wipe clean, to make expiation',
            significance: 'Kuppar (from the root kaphar) is the verb of atonement — the same root that gives us Yom Kippur, the Day of Atonement. It means to cover over, to expiate, to remove the barrier between the holy and the profane. The passive form here is crucial: Isaiah\'s sin "is blotted out" — he does not blot it out himself. The atonement is performed upon him, not by him. The mechanism of grace is external, initiated by another, accomplished through fire, and declared by a celestial voice. Isaiah is the recipient, not the agent.',
          },
        ],
        notes: 'The seraph\'s declaration has two parts: "your guilt has departed" (the removal of culpability) and "your sin is blotted out" (the erasure of the barrier). Both are accomplished by the coal\'s touch — a single act of painful grace that accomplishes what no human effort could achieve. The lips that were "unclean" (v.5) are now purified by fire. The instrument that was contaminated has been cauterized and restored. Isaiah can now speak — and the next words from his mouth will be the most consequential of his life.',
      },
      {
        verseNumber: '6:8',
        text: 'Then I heard the voice of the Lord saying, "Whom shall I send, and who will go for us?" And I said, "Here am I; send me!"',
        keywords: [
          {
            word: 'send',
            hebrew: 'שָׁלַח',
            transliteration: 'shalach',
            definition: 'To send, to dispatch, to commission with authority',
            significance: 'Shalach is the verb of prophetic commissioning — it implies being sent with delegated authority to speak on behalf of the sender. The same verb appears in Exodus 3:10 when God sends Moses to Pharaoh. Isaiah\'s "Send me!" (shelacheni) is the voluntary acceptance of this delegated authority — the prophet offers to carry a message he has not yet heard. The willingness precedes the content. The "us" in "who will go for us?" echoes the divine plural of Genesis 1:26 and the heavenly council of 1 Kings 22, placing Isaiah\'s call within the cosmic deliberation of God and the celestial court.',
          },
        ],
        notes: 'The structure of this verse is devastatingly simple. God asks a question into the heavenly council. Isaiah answers. The response — hinneni, "Here am I" — echoes Abraham (Genesis 22:1), Moses (Exodus 3:4), and Samuel (1 Samuel 3:4). It is the word of availability, of surrendered autonomy, of placing oneself at the disposal of the One who calls. Isaiah does not ask what the message will be, where he will go, or what it will cost. He volunteers before the briefing. The content of the commission, when it comes, will make this moment either the bravest or the most reckless act of faith in prophetic literature.',
      },
      {
        verseNumber: '6:9',
        text: 'And he said, "Go and say to this people: \'Keep listening, but do not comprehend; keep looking, but do not understand.\'',
        keywords: [
          {
            word: 'comprehend',
            hebrew: 'בִּין',
            transliteration: 'bin',
            definition: 'To understand, to discern, to perceive with insight',
            significance: 'Bin is not mere hearing but the deeper act of understanding — grasping the significance of what is heard. The devastating commission uses bin in its negated form: they will hear the words but the meaning will not penetrate. Jesus quotes this verse in Matthew 13:14-15 to explain why he teaches in parables — the same dynamic of hearing without comprehension persists across the centuries. The irony is total: the prophet is sent to speak so that the people will NOT understand. The medium carries the message, but the message will not arrive.',
          },
        ],
        notes: 'The commission is the most disturbing in prophetic literature. Isaiah is not sent to convert but to confirm a hardening already underway. The imperative verbs create a paradox: "Keep listening" is a command to continue hearing, but "do not comprehend" negates the purpose of hearing. The prophet is sent to speak words that will function as a sealing of the people\'s refusal. This is not God arbitrarily blinding the people but God confirming the blindness they have chosen. Jesus will cite these exact words in Matthew 13:14-15, Mark 4:12, Luke 8:10, John 12:40, and Paul will cite them in Acts 28:26-27 — making this the most-quoted Old Testament passage in the New Testament.',
      },
      {
        verseNumber: '6:10',
        text: 'Make the mind of this people dull, and stop their ears, and shut their eyes, so that they may not look with their eyes, and listen with their ears, and comprehend with their minds, and turn and be healed."',
        keywords: [
          {
            word: 'turn',
            hebrew: 'שׁוּב',
            transliteration: 'shuv',
            definition: 'To return, to turn back, to repent — the fundamental verb of biblical repentance',
            significance: 'Shuv is the Bible\'s primary word for repentance — not merely feeling sorry but physically turning around, changing direction, returning to the path. The devastating irony of v.10 is that the hardening is designed to prevent shuv — to prevent the very turning that would bring healing. The implication is that the people\'s refusal has reached a point where further exposure to truth no longer softens but hardens. The window for easy return has closed. What remains is the long, devastating road through judgment to the stump of v.13.',
          },
        ],
        notes: 'The threefold shutting — mind, ears, eyes — systematically closes every avenue of reception. The purpose clause ("so that they may not...turn and be healed") is the hardest line in the chapter: God instructs the prophet to ensure the people do NOT repent. This is not divine cruelty but the judicial consequence of prolonged refusal. The people have so consistently rejected the prophetic word that further proclamation now functions as judgment rather than invitation. The verb "healed" (rapha) appears at the end like a door closing — the healing is available but the pathway to it has been sealed by the people\'s own resistance.',
      },
      {
        verseNumber: '6:11',
        text: 'Then I said, "How long, O Lord?" And he said: "Until cities lie waste without inhabitant, and houses without people, and the land is utterly desolate;"',
        notes: 'Isaiah\'s response — "How long?" — is the cry of every prophet, every intercessor, every person who carries a burden they did not choose. It is not a request for information but a plea for mercy. And the answer offers none of the comfort the question sought. "Until" — not "for a little while" or "until they repent" but "until cities lie waste." The desolation described is comprehensive: cities, houses, land. The structures of civilization, the intimacy of home, the productivity of the earth — all emptied. This is the total reversal of the covenant blessings promised in Deuteronomy.',
      },
      {
        verseNumber: '6:12',
        text: 'until the LORD sends everyone far away, and vast is the emptiness in the midst of the land.',
        notes: 'The exile is anticipated here — "sends everyone far away" foreshadows the Babylonian deportation that will come in 586 BC, more than 150 years after Isaiah\'s call. The word for "emptiness" (azuvah) carries connotations of abandonment and desolation. The "midst of the land" — the very center of the promised inheritance — will be hollow. The covenant land that was meant to be the garden of God\'s dwelling will become a wasteland. The severity of the judgment matches the severity of the refusal.',
      },
      {
        verseNumber: '6:13',
        text: 'Even if a tenth part remain in it, it will be burned again, like a terebinth or an oak whose stump remains standing when it is felled. The holy seed is its stump.',
        keywords: [
          {
            word: 'stump',
            hebrew: 'מַצֶּבֶת',
            transliteration: 'matsevet',
            definition: 'A stump, a standing stock, what remains when a tree is cut down',
            significance: 'The matsevet is what remains after everything visible has been destroyed. A felled tree looks dead — but the stump holds the root system that can regenerate. This image becomes the theological foundation of Isaiah\'s remnant theology: even total devastation cannot destroy the life hidden in the root. The "holy seed" (zera qodesh) within the stump connects directly to the messianic "shoot from the stump of Jesse" in Isaiah 11:1. The seed that survives the felling is the carrier of all future hope.',
          },
          {
            word: 'holy seed',
            hebrew: 'זֶרַע קֹדֶשׁ',
            transliteration: 'zera qodesh',
            definition: 'The sacred seed, the consecrated offspring, the remnant that carries the covenant forward',
            significance: 'Zera qodesh combines two of Isaiah\'s most important concepts: "seed" (the biological carrier of promise, echoing Genesis 3:15 and the Abrahamic covenant) and "holy" (qodesh — the same root as the trisagion in v.3). The holiness that fills the temple in v.3 is now compressed into a seed hidden in a stump. The macro becomes micro. The glory that filled the whole earth is now preserved in what looks like death. This is perhaps the most counterintuitive image of hope in the Hebrew Bible: the holy is hidden in the destroyed.',
          },
        ],
        notes: 'The final verse is the most theologically dense sentence in the chapter. Even a surviving tenth will be burned again — the judgment is relentless. But the last five words reverse the trajectory: "The holy seed is its stump." After the felling, after the burning, after the exile, after the emptying — a seed remains. Not a forest, not a garden, not even a sapling. A seed. The remnant theology that will sustain Israel through exile, through Babylon, through every subsequent catastrophe, is rooted in this verse. Isaiah 11:1 will return to this image: "A shoot shall come out from the stump of Jesse." The tree of David\'s line will be felled, but the stump holds the messianic promise.',
      },
    ],

    buildsOn: [
      {
        sourceRef: 'Exodus 3:1-6',
        label: 'Moses and the Burning Bush — The Parallel Call Narrative',
        connection: 'Both Moses and Isaiah encounter God through fire. Both are overwhelmed — Moses hides his face; Isaiah cries "Woe is me!" Both are commissioned to speak to a resistant people. Both protest their inadequacy (Moses: "Who am I?"; Isaiah: "I am a man of unclean lips"). The burning bush that is not consumed anticipates the seraphim — burning ones who attend the Holy without being destroyed. The call narrative pattern established at the bush is perfected in the throne room.',
      },
      {
        sourceRef: '1 Kings 22:19-23',
        label: 'Micaiah\'s Vision of the Heavenly Council',
        connection: 'Micaiah sees the LORD seated on the throne with the host of heaven standing beside — the same heavenly court scene that Isaiah enters. In both visions, God asks "Who?" (1 Kings 22:20: "Who will entice Ahab?"; Isaiah 6:8: "Whom shall I send?"). Both commissions involve a message of deception/hardening. The heavenly council is the deliberative body from which prophetic authority flows; Isaiah\'s commission is legitimized by his participation in this council.',
      },
      {
        sourceRef: 'Exodus 33:18-23',
        label: 'Moses and the Glory of God',
        connection: 'Moses asks to see God\'s glory (kavod) and is told "you cannot see my face; for no one shall see me and live." Moses is placed in the cleft of the rock and sees only God\'s back. Isaiah, by contrast, sees the Lord (Adonai) seated on the throne — and his immediate response is the conviction that he will die ("I am lost!"). The protection Moses received (the cleft, the covering hand) is absent for Isaiah. What saves him is not shielding from the glory but cleansing by the coal — a new mechanism of survival in the presence of the Holy.',
      },
      {
        sourceRef: 'Exodus 19:16-19',
        label: 'The Sinai Theophany — Smoke, Fire, and Shaking',
        connection: 'At Sinai, the mountain shakes, smoke rises, and God descends in fire. In Isaiah 6, the temple thresholds shake, smoke fills the house, and the seraphim ("burning ones") attend the throne. Isaiah\'s temple experience is a Sinai event relocated to Jerusalem — the same terrifying holiness that descended on the mountain now fills the sanctuary. The continuity insists: the God of the exodus and the God of the temple are the same, and proximity to that God remains as dangerous as it was at Sinai.',
      },
    ],

    pointsToward: [
      {
        targetRef: 'Isaiah 52:13-53:12',
        targetBook: 'isaiah',
        label: 'The Suffering Servant — The Willing One Who Bears the Commission\'s Cost',
        connection: 'Isaiah\'s "Here am I; send me!" is the first portrait of the willing servant — the one who accepts a mission knowing it will involve suffering and rejection. The Suffering Servant of Isaiah 53 completes the pattern: sent to a people who will not listen (53:1: "Who has believed what we have heard?"), bearing their iniquity (53:4-6), and through that bearing, accomplishing the atonement that the coal in chapter 6 only previewed. The coal cleansed one man\'s lips; the Servant\'s suffering cleanses the many.',
      },
      {
        targetRef: 'John 12:41',
        targetBook: 'nt',
        label: 'John Identifies Isaiah\'s Vision as a Vision of Christ',
        connection: 'After quoting Isaiah 6:10, John writes: "Isaiah said this because he saw his glory and spoke about him." The Fourth Gospel identifies the one seated on the throne in Isaiah\'s vision as the pre-incarnate Christ. The glory (kavod/doxa) that filled the temple is, for John, the glory of the Word who will become flesh. Isaiah\'s throne room encounter becomes, in the New Testament\'s reading, the earliest portrait of the one who will later say "Before Abraham was, I am."',
      },
      {
        targetRef: 'Acts 28:26-27',
        targetBook: 'nt',
        label: 'Paul Quotes the Hardening Commission at the End of Acts',
        connection: 'In the final scene of Acts, Paul quotes Isaiah 6:9-10 to explain the Jewish rejection of the gospel and the turning to the Gentiles. The devastating commission given to Isaiah — preach but they will not hear — is, for Paul, still operative seven centuries later. The hardening that began in the throne room extends through Israel\'s history and into the apostolic era. But Paul\'s use also implies that the remnant hope of v.13 remains: the stump still holds its seed.',
      },
      {
        targetRef: 'Revelation 4:8',
        targetBook: 'revelation',
        label: 'The Trisagion in the Heavenly Throne Room',
        connection: 'The four living creatures around the throne in Revelation 4 echo the seraphim of Isaiah 6, crying "Holy, holy, holy, the Lord God the Almighty, who was and is and is to come." The trisagion that Isaiah heard in the Jerusalem temple is revealed to be the permanent liturgy of heaven — not a historical event but an eternal reality. What Isaiah glimpsed once, the book of Revelation presents as the unceasing worship that underlies all of creation.',
      },
      {
        targetRef: 'Matthew 13:14-15',
        targetBook: 'nt',
        label: 'Jesus Quotes the Hardening to Explain Parabolic Teaching',
        connection: 'Jesus quotes Isaiah 6:9-10 to explain why he teaches in parables: "You will indeed listen, but never understand." The irony is multilayered — parables are stories designed to reveal truth, but Jesus says they also conceal it from those who refuse to see. The hardening commission of Isaiah 6 becomes, in Jesus\' hands, a commentary on the nature of revelation itself: truth offered in a form that the willing can receive and the resistant can refuse. The hearing-without-understanding dynamic is not a failure of communication but a feature of it.',
      },
      {
        targetRef: 'Isaiah 11:1',
        targetBook: 'isaiah',
        label: 'The Shoot from the Stump of Jesse',
        connection: 'The "holy seed" in the stump of Isaiah 6:13 germinates in Isaiah 11:1: "A shoot shall come out from the stump of Jesse, and a branch shall grow out of his roots." The stump image planted at the end of the call narrative bears fruit five chapters later in the messianic prophecy. The connection is organic and deliberate: the hope that survived the felling of the tree is the hope that produces the anointed king. The seed hidden in chapter 6 becomes the shoot visible in chapter 11.',
      },
    ],

    emotionalJourney: 'The emotional arc of Isaiah 6 is unlike anything else in prophetic literature. It begins with awe — the overwhelm of a theophany so massive that the building itself cannot contain it. Awe gives way to terror as Isaiah recognizes the unbridgeable gap between the Holy and himself. Terror collapses into despair: "I am lost." Then, without warning, the despair is interrupted by grace — painful, physical, initiated by another. The coal burns and the voice declares freedom. From freedom comes willingness: "Send me." And willingness walks straight into the most devastating commission imaginable: speak, but they will not hear. The emotional journey ends not in triumph but in the ache of "How long?" — and the fragile, almost invisible hope of a seed in a stump. The reader who tracks the full emotional arc will feel whiplash: awe, terror, despair, grace, willingness, devastation, hope. This is not a chapter that leaves you where it found you.',

    misreadings: [
      {
        misreading: 'Reading "Here am I; send me!" as a model for enthusiastic volunteerism — the eager hand raised in a missions conference',
        correction: 'Isaiah\'s volunteering occurs after he has been utterly destroyed and supernaturally rebuilt. His "send me" is not the confidence of a willing volunteer but the availability of a man who has been shattered and reassembled. He volunteers before hearing the content of the commission — and the content, when it comes, is devastating. Reading this as a model for cheerful ministry recruitment strips the text of its terror, its cost, and its theological weight. The throne room is not a career fair.',
        whyItMatters: 'When churches use "Here am I; send me!" as a recruitment slogan, they invite people into service without the preparatory devastation that the text insists upon. The result is ministry built on enthusiasm rather than on the memory of being undone — and enthusiasm without devastation produces volunteers who quit when the commission turns hard. The text\'s sequence is non-negotiable: you must be destroyed before you are sent.',
      },
      {
        misreading: 'Reading the hardening commission (v.9-10) as God deliberately making people unable to respond — as if God arbitrarily blinds the willing',
        correction: 'The hardening in Isaiah 6 is judicial, not arbitrary. It confirms a condition the people have already chosen. Five chapters of accusation precede this commission — the people have already refused to hear (ch.1), already rejected the prophetic word, already chosen injustice over justice. The hardening is the consequence of prolonged refusal, not its cause. God does not blind the willing; God confirms the blindness the unwilling have cultivated. The distinction matters enormously for understanding divine justice.',
        whyItMatters: 'Misreading the hardening as arbitrary cruelty makes God into a manipulator who rigs the game. The text presents something far more sobering: a people who have so consistently refused to listen that further listening now deepens the refusal. This is a warning about the cumulative effect of spiritual resistance — not a portrait of a God who prevents repentance for sport.',
      },
      {
        misreading: 'Reading Isaiah 6 as the chronological beginning of Isaiah\'s ministry — as if he had no prophetic activity before this vision',
        correction: 'Isaiah 6 is placed after chapters 1-5, not before them. Many scholars argue that Isaiah was already active as a prophet before the throne room vision. The literary placement is deliberate: the call narrative is not a prologue but a hinge. Chapters 1-5 establish the crisis; chapter 6 authorizes the response. The vision does not launch Isaiah\'s career — it deepens and redefines it. The prophet who has been speaking for God now speaks as one who has seen God.',
        whyItMatters: 'Placing the call narrative first (as a biographical origin story) reduces it to personal testimony. Placing it where Isaiah placed it — after the crisis and before the commission — makes it function architecturally: it answers the question raised by chapters 1-5 ("Who will speak?") and grounds everything that follows in the authority of the throne room. The placement is theological, not chronological.',
      },
      {
        misreading: 'Reading the seraphim as angels in the popular sense — gentle, luminous, comforting figures',
        correction: 'The seraphim are burning ones — creatures of fire whose name derives from the Hebrew verb "to burn." They are not comforting presences but awesome, terrifying beings who attend the divine holiness with their faces covered and their bodies veiled. Their function is not to comfort Isaiah but to declare holiness and mediate cleansing through a burning coal pressed against human flesh. The popular image of angels as gentle helpers has no basis in this text. These are creatures that carry fire.',
        whyItMatters: 'Domesticating the seraphim domesticates the holiness they serve. If the attendants of the throne are comfortable, the throne becomes comfortable — and a comfortable throne room produces no "Woe is me!" When the seraphim are restored to their terrifying biblical identity, the holiness of God regains the weight that shakes foundations.',
      },
    ],

    soWhatNowWhat: {
      whatDoesThisMean: 'Isaiah 6 reveals that the God who commissions also first consumes — that genuine calling passes through an encounter with holiness so overwhelming that it dismantles the person before rebuilding them for service. The chapter insists on a sequence: theophany before commission, collapse before sending, grace before assignment. It also delivers a devastating truth about the nature of prophetic ministry: the message may not be received. The prophet may speak faithfully for decades and the audience may harden rather than soften. And yet — in the ruins, in the stump, in what looks like total failure — a holy seed remains.',
      soWhat: 'If you have been serving without ever being undone, the throne room invites you into a terrifying and necessary encounter. If you have been speaking truth and no one is listening, the chapter says you are in good company — and the measure of faithfulness is not audience response but the integrity of the message. If everything you built has been cut down and all that remains is a stump, the text insists that the stump is not the end of the story. The holy seed is hidden in what looks like death.',
      nowWhat: 'Before seeking a new commission, ask whether you have let the old one shatter you. Before volunteering for the next ministry assignment, stand in the throne room long enough to hear the trisagion and feel the foundations shake. Before despairing over a message that seems to go unheard, look at the stump. The seed is still there. Your work this week is not to produce fruit — it is to trust the seed. And if the coal comes — if grace arrives as fire rather than comfort — do not flinch. The lips that burn are the lips that can finally speak.',
    },

    soulReflection: {
      scenario: 'You have read the whole chapter now. You have watched Isaiah enter the temple, see the throne, hear the trisagion, collapse, receive the coal, volunteer, and then hear the most devastating commission in prophetic literature: preach, but they will not understand. You have followed him to the final question — "How long?" — and heard the answer that offers no comfort except five words at the very end: "The holy seed is its stump." The entire arc sits in front of you. Where in this chapter did you feel the text reach for you — and did you let it make contact?',
      options: [
        {
          text: 'The trisagion stopped me. "Holy, holy, holy." I\'ve sung it a hundred times and never once felt the foundations shake.',
          insight: 'A hundred repetitions and the word has become furniture — background music in a worship service, three syllables that decorate a hymn. But Isaiah did not sing it. He heard it. Heard it the way you hear thunder when it cracks directly overhead — not a sound you interpret but a sound that enters your body before your mind can process it. The thresholds shook. The building filled with smoke. What would it take for the word to land on you with that weight again? Perhaps this: stop singing it for a month. Let the silence do its work. And then, when you hear it again — in a service, in a reading, in the quiet of an early morning — notice whether your body responds before your theology does. Holiness that shakes foundations does not need your understanding. It needs your attention.',
        },
        {
          text: 'I keep coming back to the coal. Grace as a burning stone pressed against the mouth. That\'s not the grace I was taught.',
          insight: 'The grace you were taught comes in soft packaging — a warm feeling, an assurance whispered during prayer, a verse on a bookmark. And sometimes grace does arrive that way. But sometimes what needs to be healed cannot be healed gently. The uncleanness on Isaiah\'s lips was not a surface stain; it was a contamination that disqualified him from the very work he was made for. A gentle word would not have been enough. Only fire. Only a burning stone carried by a celestial being who did not ask permission before pressing it to the prophet\'s mouth. If you are carrying something that comfort cannot reach — a guilt that affirmations bounce off, a shame that prayers seem to circle around without touching — perhaps the grace you need is not softer than what you\'ve received. Perhaps it is hotter.',
        },
        {
          text: 'The "How long?" broke me. I\'ve been asking that question for years, and the answer never gets easier.',
          insight: 'How long will the marriage feel empty? How long will the depression cycle? How long will the ministry produce nothing visible? How long will the prayers go up without any sign they are heard? You carry this question the way Isaiah carried it — not as intellectual curiosity but as a weight against your chest. And the answer in Isaiah 6 is not the one you wanted. Until the cities are empty. Until the houses are vacant. Until the land is desolate. But stay with the answer long enough to reach its final clause. The holy seed is its stump. The answer to "how long?" is not "soon." It is "until everything false has been stripped away and only what is indestructible remains." That is cold comfort. But it is not no comfort. The seed is there. Even now.',
        },
        {
          text: 'I\'m haunted by the hardening. The idea that hearing God\'s word could make you less responsive, not more. That frightens me.',
          insight: 'It should. The hardening commission is the most frightening verse in prophetic literature because it describes a real phenomenon: the word of God, heard repeatedly without response, eventually calcifies the very capacity to respond. Not because the word loses power but because the hearer builds thicker and thicker walls against it. Each Sunday sermon absorbed without action adds another layer. Each devotional read without consequence builds the insulation higher. You are frightened because you recognize the mechanism — and you are wondering how much insulation you have already built. That fear is not a problem. It is a sign that the mechanism has not completed its work. The person who can no longer be frightened by this text is the person the text is describing. Your fear means the ears are still open. Keep them that way.',
        },
        {
          text: 'What I notice is that Isaiah volunteers before he knows the assignment. He says "send me" without knowing what "sent" will mean.',
          insight: 'Every significant yes in your life was spoken before you knew the cost. The marriage vow before the third year of counseling. The parenting commitment before the 2 a.m. fevers. The ministry acceptance before the board meeting that broke your heart. Isaiah says "send me" in the glow of cleansing, in the relief of guilt departed, in the euphoria of being rebuilt after collapse — and then the content arrives and it is a gut punch. Preach, but they will not hear. There is no version of genuine calling that comes with the full briefing in advance. The trust is not in the assignment. The trust is in the one who assigns. And the question is never "do I know what this will cost?" The question is "do I trust the voice that said \'your guilt has departed\' enough to walk into whatever comes next?"',
        },
        {
          text: 'Honestly, I identify more with the people who can\'t hear than with Isaiah who is sent. I\'m the one with dull ears and shut eyes.',
          insight: 'That confession — if you meant it — just blew a hole through the insulation. The person fully described by verses 9-10 does not recognize themselves in the description. The dull mind does not know it is dull. The shut eyes do not know they are shut. But you see it. You named it. Which means the hardening is not complete, and the naming itself is the first crack in the wall. Isaiah was sent to a people who could not hear — but you just heard. You heard the text describe a condition and you recognized yourself in it. That recognition is not part of the hardening; it is the evidence that something in you is still responsive. Do not let this moment pass without acting on it. The crack in the wall will not stay open on its own. What is one thing you have been hearing and not doing? Do it this week. Not because doing earns you something, but because the ear that can still hear deserves to be honored.',
        },
        {
          text: 'The stump. I keep coming back to the stump. Everything else is devastation, and then — five words. "The holy seed is its stump." That\'s all the hope there is.',
          insight: 'That is all the hope there is. And it is enough. Not enough to be comfortable. Not enough to build a motivational poster. Not enough to preach a sermon that sends people home feeling good. But enough to survive the felling. Enough to hold the genetic code for everything that will grow after the devastation has run its course. You are drawn to the stump because you have lived in a season where everything above the soil was cut down — the plans, the expectations, the structures you built your life around. And you are looking at what remains and it does not look like much. Five words. A seed in dead wood. But the forests of the future are hidden in that seed, and the God who hid them there is the same God who said "holy, holy, holy" when the temple shook. Trust the seed. Not because you can see the forest. Because the one who planted it can.',
        },
      ],
    },

    prayerPrompt: {
      prompt: 'Holy God — the God whose hem fills the temple, whose glory fills the earth, whose holiness shakes the foundations of everything I thought was solid — I come as Isaiah came. Not with confidence but with the raw truth: I am a person of unclean lips, living among a people of unclean lips, and I do not know how to stand in your presence without being undone. If the coal must come, let it come. If the burning is the grace, then let it burn. Cleanse what I cannot cleanse myself. Speak what I cannot speak on my own. And if you ask "Whom shall I send?" — give me the courage to answer before I know the cost. I do not ask to understand the commission. I ask only to trust the voice that gives it. Holy, holy, holy. Here am I.',
      posture: 'If you are able, stand. Not in confidence but in availability — the posture of one who has been knocked down and gotten back up, not because the ground was comfortable but because a voice called. Let your hands hang open at your sides, palms forward — the posture of surrender, of receiving, of a person who has stopped managing the encounter and is simply present. If standing feels like too much, kneel. The prophet who cried "Woe is me" was almost certainly on the ground. There is no shame in meeting God from your knees. Either way, stay. Do not leave the room before the coal arrives.',
    },

    crossReferences: [
      {
        isaiahRef: 'Isaiah 6:3',
        ntRef: 'Revelation 4:8',
        connection: 'The trisagion of the seraphim — "Holy, holy, holy is the LORD of hosts" — is echoed by the four living creatures around the throne in Revelation: "Holy, holy, holy, the Lord God the Almighty." What Isaiah witnessed in the Jerusalem temple, John witnesses in the heavenly throne room. The worship is continuous, transcending time and space — the same declaration, the same holiness, the same cosmic weight.',
      },
      {
        isaiahRef: 'Isaiah 6:9-10',
        ntRef: 'Matthew 13:14-15',
        connection: 'Jesus quotes Isaiah\'s hardening commission to explain his use of parables: "You will indeed listen, but never understand, and you will indeed look, but never perceive." The dynamic of hearing-without-comprehending that Isaiah was commissioned to produce is, according to Jesus, still operative in his own ministry. The parable simultaneously reveals and conceals — the same word that opens one heart hardens another.',
      },
      {
        isaiahRef: 'Isaiah 6:9-10',
        ntRef: 'John 12:39-41',
        connection: 'John quotes the hardening commission and then adds the interpretive key: "Isaiah said this because he saw his glory and spoke about him." The "him" is Christ. For John, the glory (kavod/doxa) that filled the temple in Isaiah\'s vision was the pre-incarnate glory of the Word who would become flesh. The throne room vision becomes, in John\'s reading, a Christophany — an appearance of Christ before the incarnation.',
      },
      {
        isaiahRef: 'Isaiah 6:9-10',
        ntRef: 'Acts 28:26-27',
        connection: 'In the final scene of Acts, Paul quotes Isaiah 6:9-10 to the Jewish leaders in Rome, explaining the rejection of the gospel and the turning to the Gentiles. The passage that commissioned Isaiah to preach to unhearing ears now commissions the apostolic mission to the nations. The hardening is not the end of the story but the mechanism by which the message reaches a wider audience.',
      },
      {
        isaiahRef: 'Isaiah 6:8',
        ntRef: 'Romans 10:15',
        connection: 'Paul asks "How are they to proclaim him unless they are sent?" — using the language of prophetic commissioning (shalach/apostello) that originates in passages like Isaiah 6:8. The sent-ness of the apostolic mission is grounded in the same divine initiative that sent Isaiah from the throne room. The "sending" in both cases is not human initiative but divine commission accepted by human willingness.',
      },
      {
        isaiahRef: 'Isaiah 6:1',
        ntRef: 'John 12:41',
        connection: 'John explicitly identifies the Lord whom Isaiah saw on the throne as Christ: "Isaiah said this because he saw his glory." The one whose "robe filled the temple" is, for the Fourth Gospel, the same one who "became flesh and lived among us, and we have seen his glory" (John 1:14). The glory moves from the throne room to the manger — from the hem that fills the temple to the body that walks among fishermen.',
      },
    ],
  },
};

registerSection(isaiah5);
