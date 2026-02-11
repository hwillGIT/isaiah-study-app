import { Section } from '../types';
import { registerSection } from './sections-index';

export const isaiah4: Section = {
  id: 4,
  title: 'The Vineyard Song',
  subtitle: 'The Heartbreak of God',
  chapters: 'Chapter 5',
  emotionalArc: 'Tenderness → betrayal → fury',
  colorClass: 'purple',
  accentClass: 'border-purple-500',
  glowClass: 'shadow-purple-500/20',
  gradientClass: 'from-purple-950 via-gray-900 to-gray-950',

  genre: {
    genre: 'love_song',
    label: 'Love Song Turned Lament',
    description: 'Isaiah 5 begins as a love song — the prophet singing on behalf of a beloved about a vineyard. The audience expects a wedding ballad or a harvest celebration. But midway through, the genre shatters: the beloved turns out to be God, the vineyard turns out to be Israel, and the love song becomes a lawsuit. The pivot is devastating because the audience has already sympathized with the vineyard owner before they realize they are the failed vineyard. No other passage in Scripture genre-bends quite like this — a love song that becomes a legal indictment within seven verses.',
  },

  historicalContext: {
    period: '740–700 BC — Prosperity Masking Moral Decay',
    politicalSituation: 'Isaiah speaks during the final decades of Judah\'s prosperity, a period when the economy is booming but the moral infrastructure is rotting. Land consolidation is accelerating: wealthy landowners absorb family farms through debt manipulation and legal corruption, creating vast estates while the original owners become tenants on their own inheritance. The six woes of Isaiah 5:8-23 target specific, documented social injustices — not vague spiritual failures but concrete abuses: land-grabbing (v.8), all-day drinking parties among the elite (v.11-12), moral inversion where evil is called good (v.20), and bribery that perverts the courts (v.23). Assyria looms to the northeast, but the ruling class is too drunk on its own prosperity to notice. The vineyard metaphor captures precisely this situation: a land blessed with every advantage, producing nothing but the sour fruit of injustice.',
    keyFigures: [
      'The landed aristocracy — joining "house to house" and "field to field" until the poor have nowhere to live',
      'The exploited farmers — families losing ancestral land allotments that God assigned at the conquest',
      'The court prophets and judges — those who "acquit the guilty for a bribe" and "deprive the innocent of their rights"',
    ],
    whyItMatters: 'The vineyard metaphor would have been immediately recognized: Israel as God\'s vineyard is rooted in the exodus tradition (Psalm 80:8-16). Every Israelite knew they were the planted people, settled in a land prepared by God. The specificity of the six woes makes this chapter uncomfortably contemporary — land-grabbing, substance abuse, moral relativism, and corrupt courts are not ancient problems. They are Tuesday\'s news cycle. Isaiah 5 asks the question every prosperous religious community must face: what fruit is your privileged soil actually producing?',
  },

  themes: [
    {
      theme: 'exodus',
      active: true,
      connection: 'The vineyard song is an exodus retelling in agricultural metaphor. God dug up the ground (rescued from Egypt), cleared it of stones (drove out the Canaanites), planted choice vines (settled the tribes), built a watchtower (established the temple and kingship), and hewed a wine vat (prepared for the harvest of righteousness). Every action in vv.1-2 parallels a stage of the exodus-to-settlement narrative. The wild grapes are what happened after the planting — the generation that forgot the liberation.',
    },
    {
      theme: 'zion_eden',
      active: true,
      connection: 'The vineyard IS the Eden-in-miniature that God created for Israel. A fertile hill, carefully prepared soil, choice plantings, a protective enclosure — this is the Garden replayed in covenantal terms. And the wild grapes are the Fall replayed: given every advantage, every provision, every protection, the vineyard produced the opposite of what was intended. The removal of the hedge (v.5) is an expulsion from Eden — the protective boundary withdrawn, the cultivated space returned to chaos. Thorns and briers reclaim the garden, just as in Genesis 3:18.',
    },
    {
      theme: 'messiah',
      active: false,
      connection: 'The vineyard has an absent caretaker. God planted, tended, protected — and then asked, "What more could I have done?" (v.4). The question hangs: who will tend this vineyard now that the owner has withdrawn? The vacancy is palpable. The woes that follow describe a leaderless society — no one enforcing justice, no one modeling righteousness, no one standing between the powerful and the powerless. The messianic thread is present precisely in its absence: the vineyard needs a keeper who will succeed where the current tenants have failed.',
    },
    {
      theme: 'hope',
      active: true,
      connection: 'The woes are diagnostic, not terminal. Each woe identifies a specific pathology — land-grabbing, drunkenness, moral inversion, self-congratulation, bribery — and the specificity itself implies remedy. If these are the diseases, then their reversal is the cure. The vineyard is not uprooted but abandoned to wildness; the implication is that it could, in theory, be reclaimed. And the question of verse 4 — "What more was there to do?" — is a question that awaits an answer. The rest of Isaiah will provide one.',
    },
  ],

  bigPicture: {
    literaryContext: 'Isaiah 5 stands as the emotional center of the book\'s opening movement (chapters 1-5) and the bridge to its most transformative moment (chapter 6). The covenant lawsuit of chapter 1 established the legal framework — God as prosecutor, Israel as defendant. Chapters 2-4 developed the evidence: idolatry, pride, injustice, the failure of leadership. Now chapter 5 gathers all of this into a single devastating image: a vineyard that received everything and produced nothing. The love song form is the key — Isaiah does not deliver another legal brief. Instead, the prophet sings. The audience is drawn in by beauty before they are struck by truth. By the time they realize the vineyard is them, they have already agreed with the owner\'s verdict. This is prophetic genius: the listener convicts themselves. And then the woes cascade — six specific indictments that name what the "wild grapes" actually look like in the streets of Jerusalem. The chapter closes with the distant thunder of an army God is summoning, and the reader stands at the edge of chapter 6, where Isaiah will see the throne and hear the question that changes everything: "Whom shall I send?" The vineyard song creates the emotional necessity for that question. Someone must go. The vineyard is dying.',

    perspectives: [
      {
        role: 'Spiritual Director',
        text: 'Pay attention to the structure of love and betrayal in this chapter. God does not begin with accusation but with a song — the voice of a lover describing, with evident tenderness, the care lavished on the beloved. Every stone cleared, every vine selected, every wall built by hand. This is not obligation language. This is courtship language. And the betrayal that follows is not a violation of contract but a wound to love. When you examine your own spiritual life, notice whether you have reduced your relationship with God to a contract — expectations met, obligations fulfilled — or whether you can still hear the love song underneath the law. The vineyard owner is not angry because the investment failed. The vineyard owner is heartbroken because the love was real.',
      },
      {
        role: 'Pastoral Director',
        text: 'The six woes of Isaiah 5 are not abstract theological categories. They are a pastoral diagnosis of a specific community — and they describe every prosperous congregation you have ever served. The family that keeps acquiring property while their neighbors cannot make rent (v.8). The board member who hosts lavish dinner parties but has never visited the food pantry (v.11-12). The church leader who has learned to call their ambition "vision" and their control "discernment" (v.20). The donor whose generosity buys them influence over who gets helped and who gets overlooked (v.23). These are the wild grapes. They grow in every church where prosperity and piety coexist without accountability. The pastoral question is not "does this happen here?" — it is "which woe is mine?"',
      },
      {
        role: 'Psychologist',
        text: 'The vineyard song enacts a remarkable psychological maneuver. By beginning in third person — "my beloved had a vineyard" — Isaiah bypasses the listener\'s defenses entirely. The audience evaluates the vineyard owner\'s situation with sympathy and objectivity. Of course the owner is justified. Of course the vineyard that produced wild grapes should be abandoned. The verdict feels obvious, even righteous. And then the pivot: "the vineyard of the LORD of hosts is the house of Israel." The audience is the vineyard. They have just pronounced judgment on themselves. Nathan used this same technique with David — the parable of the ewe lamb — and it works because self-deception cannot survive the moment of recognition. The psychological power of the vineyard song is that it creates a space where the listener encounters truth they would have rejected if it had been delivered directly.',
      },
      {
        role: 'Theologian',
        text: 'The theological weight of verse 4 is staggering: "What more was there to do for my vineyard that I have not done in it?" This is not a rhetorical question but a genuine divine inquiry — and it raises the most difficult theological issue in the entire Hebrew Bible: the sovereignty of God meeting the freedom of human response. God did everything. The vineyard still failed. The answer to "what more?" will unfold across sixty-one more chapters: what more is a servant who suffers (ch. 53), a new exodus (ch. 43), a new covenant written on transformed hearts (ch. 59), a new heaven and a new earth (ch. 65). But in chapter 5, the question stands unanswered, and the silence is the theological engine that drives the rest of the book. The vineyard\'s failure is not God\'s failure — it is the mystery of creaturely freedom refusing the love that gave it everything.',
      },
      {
        role: 'Historian',
        text: 'Walk through the Judean hill country in the eighth century BC and you would see the vineyard economy that provides Isaiah\'s metaphor. Terraced hillsides, watchtowers overlooking the harvest, stone walls protecting the vines from animals and thieves, hewn limestone wine vats where the grapes were pressed. Every detail in vv.1-2 is archaeologically attested. But now overlay the social reality: the ancestral land allotments that Moses and Joshua distributed were being systematically absorbed by wealthy landowners. The jubilee laws of Leviticus 25 — designed to prevent permanent land consolidation — were being ignored. The woe of verse 8 ("joining house to house, adding field to field") describes a documented economic pattern: debt slavery and foreclosure turning independent farmers into landless laborers. The vineyard song is not merely a spiritual metaphor. It is an economic indictment of an agrarian society that has betrayed its founding charter.',
      },
    ],

    soulReflection: {
      scenario: 'Someone sings you a love song. Not to you — about someone else\'s beloved. A farmer who found a perfect hillside, cleared it stone by stone, planted the choicest vines, built a watchtower to guard the harvest, carved a wine vat in anticipation of the vintage. You listen, moved by the tenderness of it — the hours of labor, the evident love poured into this small piece of earth. You find yourself rooting for the harvest. And then the singer tells you: the vineyard produced wild grapes. Sour, bitter, worthless fruit. Your heart breaks for the farmer. The singer pauses. Looks at you. And you realize — slowly, then all at once — that you are the vineyard. The love song was about you. Every stone cleared was a prayer answered on your behalf. Every vine planted was an opportunity you were given. The watchtower was the protection you took for granted. What do you do with the realization that you are the failed vineyard of someone who loved you with everything?',
      options: [
        {
          text: 'My throat tightens. I want to argue — I\'ve produced SOME good fruit. Not everything is wild grapes. Doesn\'t the good count?',
          insight: 'The impulse to defend, to produce the evidence file of your good moments — notice where it comes from. Not from confidence but from the sudden fear that the ledger won\'t balance. You want to show the vineyard owner the few good clusters hidden among the thorns: the genuine prayers, the real sacrifices, the Tuesday afternoon when you actually meant it. And those clusters may be real. But the vineyard owner\'s question was not "did you produce any fruit?" The question was: given everything I provided — the soil, the rain, the wall, the watchtower, the years of patient tending — is this all? The pain is not that you failed completely. The pain is the gap between what was given and what was grown.',
        },
        {
          text: 'Something in me goes quiet. I recognize myself. The advantages I\'ve been given and the fruit I haven\'t produced — I know exactly what the wild grapes are.',
          insight: 'You could name them right now. The specific opportunities you squandered, the particular gifts you hoarded, the precise moment when gratitude curdled into entitlement. The quietness you feel is not numbness — it is recognition, and recognition is the doorway the vineyard song was designed to open. The audience in Isaiah\'s day would have felt this same hush: the moment between hearing "the vineyard produced wild grapes" and hearing "the vineyard of the LORD is the house of Israel." In that pause, everything shifts. You are no longer evaluating someone else\'s story. You are standing in your own. Stay in the quiet. Let the recognition do its slow, honest work.',
        },
        {
          text: 'I feel anger — not at God, but at myself. How did I waste this? How did I take so much and produce so little?',
          insight: 'The anger turned inward, the fist clenching against your own chest — feel it, but do not let it become the whole story. Self-directed fury can masquerade as repentance while actually being another form of pride: I should have been better, I was supposed to get this right, how could someone like me fail this badly? But the vineyard owner\'s tone in verse 4 is not fury. It is bewilderment. Grief. "What more was there to do?" The one who planted you is not raging. Let your anger sit next to that grief and see which voice sounds more like love. The path forward is not self-punishment. It is turning toward the farmer who is still, even now, asking the question — which means the farmer has not walked away.',
        },
        {
          text: 'I feel nothing. Maybe I\'ve heard too many sermons about God\'s disappointment. Maybe the metaphor doesn\'t land anymore.',
          insight: 'The vineyard that stops responding to rain is not dead — it is dormant. And dormancy is not the same as death, though from the outside they look identical. The numbness you describe may be the soul\'s way of protecting itself from one more round of guilt that goes nowhere. You have heard "God is disappointed in you" enough times that the words have lost their edge. But notice: Isaiah did not deliver this as a sermon. Isaiah sang it. A love song. Not another lecture from the pulpit but a melody designed to bypass the exact defenses you have built against religious guilt. What if the numbness is not your permanent condition but a callus that formed over a wound that has never been properly treated? The song is not asking for your guilt. It is asking for your attention.',
        },
        {
          text: 'I\'m struck by the question: "What more was there to do?" If God is asking that, then this isn\'t just disappointment — it\'s bewilderment. God is confused by my failure.',
          insight: 'Sit with the theological vertigo of that for a moment. The God who knows the end from the beginning, who counts the stars and calls them by name, stands before a hillside of sour grapes and asks a question without an obvious answer. "What more was there to do?" is not a rhetorical flourish — it is the sound of love encountering a mystery it did not create. You expected anger. You braced for punishment. But bewilderment? That is harder to absorb than fury, because fury you can resist and punishment you can endure, but the honest confusion of someone who gave you everything and watches you choose less — that has no defense against it except honesty. What would you say to the farmer, standing on that hillside, waiting for your answer?',
        },
        {
          text: 'I keep thinking about the wall being removed. The hedge taken away. That\'s the part that frightens me — not the accusation but the consequences. God stepping back.',
          insight: 'The wall was not a cage. It was a garden boundary — the difference between cultivated space and wilderness, between a place where fruit can grow and the chaos outside. When you fear the removal of the hedge, you are fearing something precise: not punishment imposed but protection withdrawn. The wild animals that will trample, the thorns that will overgrow — these are not sent by God. They are what happens when God\'s tending presence is no longer standing between you and the entropy that waits at every boundary. And this is the chapter\'s most terrifying move: the worst consequence is not active destruction but passive withdrawal. "I will make it a waste." Not "I will destroy it" but "I will stop protecting it." If that distinction frightens you, it should. It means the good in your life that you attributed to luck or effort was, all along, the wall.',
        },
        {
          text: 'I want to go back to the beginning of the song — before the failure. I want to remember what it felt like to be planted with such care.',
          insight: 'Then go back. Read verses 1-2 again, slowly, and let each verb land: dug, cleared, planted, built, hewed. Each one is an act of love that preceded your awareness of it — the prayers of parents you never heard, the providences you never noticed, the doors that opened before you knew to knock. The song begins in tenderness for a reason. Before the wild grapes, before the woes, before the army summoned from the ends of the earth — there was a farmer on a hillside, choosing stones one at a time, planting vines one by one, building a wall with bare hands. You were loved before you failed. And the song, for all its grief, never stops being a love song. Even the removal of the hedge is the action of an owner, not an indifferent stranger. Go back to the beginning. Remember being planted. Let that memory do what accusation alone cannot.',
        },
      ],
    },
  },

  framework: {
    structure: [
      {
        label: 'A',
        reference: 'vv.1-2',
        content: 'The Love Song — the beloved\'s vineyard planted with extravagant care',
        pairId: 'A',
        indent: 0,
        connection: 'The chapter opens as a love song sung by a friend (Isaiah) about the beloved (God) and the vineyard (Israel). The third-person voice is deliberate: the audience is meant to listen sympathetically, to side with the vineyard owner, before they discover they are the failed vineyard. Every action — digging, clearing, planting, building, hewing — parallels a stage of God\'s care for Israel from exodus to settlement.',
      },
      {
        label: 'B',
        reference: 'vv.3-4',
        content: 'The Appeal — "Judge between me and my vineyard. What more was there to do?"',
        pairId: 'B',
        indent: 1,
        connection: 'The love song pivots to a legal appeal: the vineyard owner asks the audience to render judgment. The question of verse 4 — "What more was there to do?" — is the emotional and theological hinge. Paired with B\' (vv.24-25), where God\'s response to the vineyard\'s failure arrives as consuming fire and outstretched hand.',
      },
      {
        label: 'C',
        reference: 'vv.5-6',
        content: 'The Verdict — the hedge removed, the wall broken, the vineyard made a wasteland',
        pairId: 'C',
        indent: 2,
        connection: 'God announces the sentence: protection withdrawn, cultivation ceased, the vineyard returned to wilderness. This is not active destruction but deliberate neglect — the most devastating form of judgment. Paired with C\' (vv.26-30), where the consequences expand from vineyard to nation: God whistles for foreign armies.',
      },
      {
        label: 'D',
        reference: 'v.7',
        content: 'THE REVEAL — "The vineyard of the LORD of hosts is the house of Israel"',
        indent: 3,
        connection: 'The chiastic center and the chapter\'s most devastating moment. The audience, which has been judging the vineyard from the outside, discovers they are the vineyard. The wordplay seals it: God expected mishpat (justice) but found mispach (bloodshed); expected tsedaqah (righteousness) but heard tse\'aqah (the outcry of the oppressed). The Hebrew pun makes the indictment unforgettable — what God wanted and what God got differ by a single consonant.',
      },
      {
        label: 'C\'',
        reference: 'vv.8-23',
        content: 'The Six Woes — specific indictments naming the "wild grapes"',
        pairId: 'C',
        indent: 2,
        connection: 'Paired with C (vv.5-6): the abstract "wild grapes" are now named concretely. Six woes identify the specific injustices: land-grabbing (v.8), drunken revelry (v.11), defiant sin (v.18), moral inversion (v.20), arrogant self-sufficiency (v.21), and corrupt justice (v.22-23). Each woe is a wild grape examined under the light.',
      },
      {
        label: 'B\'',
        reference: 'vv.24-25',
        content: 'The Consequence — fire consumes the stubble; God\'s hand stretched out',
        pairId: 'B',
        indent: 1,
        connection: 'Paired with B (vv.3-4): the question "what more was there to do?" receives its answer — nothing more, so judgment arrives. The fire imagery (root as rottenness, blossom as dust) directly answers the vineyard\'s failure to produce fruit. God\'s anger is kindled, and the outstretched hand — which in the exodus narrative saved Israel — is now turned against them.',
      },
      {
        label: 'A\'',
        reference: 'vv.26-30',
        content: 'The Army Summoned — God whistles for a nation from far away',
        pairId: 'A',
        indent: 0,
        connection: 'Paired with A (vv.1-2): the song that began with a farmer planting a vineyard ends with a sovereign summoning an army. The tenderness of the opening gives way to the terrible efficiency of the close: an army that does not stumble, does not sleep, whose arrows are sharp and horses\' hooves like flint. The love song has become a war song. What began on a fertile hillside ends in darkness and distress.',
      },
    ],

    poeticDevices: [
      {
        type: 'wordplay',
        verses: 'v.7',
        explanation: 'The most celebrated wordplay in the Hebrew Bible. God expected mishpat (justice, מִשְׁפָּט) but found mispach (bloodshed, מִשְׂפָּח); expected tsedaqah (righteousness, צְדָקָה) but heard tse\'aqah (outcry, צְעָקָה). In Hebrew, each pair differs by a single consonant — the sounds are almost identical, but the meanings are opposite. The effect is like hearing "right" and getting "blight," or expecting "just" and finding "dust." The near-homophony is devastating: what God wanted and what God got are separated by the thinnest possible margin, yet the distance between them is infinite.',
      },
      {
        type: 'chiasm',
        verses: 'vv.1-7',
        explanation: 'The vineyard song itself is a miniature chiasm. It begins in third person (the singer describing the beloved\'s vineyard, vv.1-2), moves to second person (the vineyard owner addressing the audience directly, vv.3-4), announces the sentence (vv.5-6), and then reveals the identity of the vineyard in v.7. The movement from third to first person to direct address is a tightening spiral — the audience is drawn closer and closer until they cannot escape the identification.',
      },
      {
        type: 'antithetic',
        verses: 'vv.20-21',
        explanation: 'The woe against moral inversion uses antithetic parallelism pushed to its extreme: evil/good, darkness/light, bitter/sweet — three pairs of absolute opposites. The structure itself performs the content: the reversal of moral categories is enacted in the reversed word order. Those who call evil good are doing linguistically what they do morally — inverting the created order, turning the world upside down.',
      },
      {
        type: 'inclusio',
        verses: 'vv.1-2, vv.26-30',
        explanation: 'The chapter opens with a farmer carefully tending a vineyard on a fertile hill and closes with an army sweeping across the land like the roaring of the sea. The envelope structure traces the emotional arc from tenderness to terror, from agricultural intimacy to military devastation. The same God who dug and planted now whistles and summons. The inclusio forces the reader to hold both realities: the God of the vineyard is the God of the armies, and both actions flow from the same wounded love.',
      },
    ],

    soulReflection: {
      scenario: 'You are looking at the structure — the love song that becomes a lawsuit, the reveal at the center, the six woes that unpack what went wrong, the army summoned at the end. You notice the architecture: the tenderness at the beginning and the terror at the end are not two different moods of God but two expressions of the same love. A love that planted and tended, and a love that cannot tolerate the betrayal of what was planted. The structure is not random — it is designed to move you from sympathy to self-recognition to confrontation. You sided with the farmer. You agreed with the verdict. And then you discovered you were the vineyard. Now what?',
      options: [
        {
          text: 'I feel manipulated. The song tricked me into condemning myself. That doesn\'t feel fair.',
          insight: 'Nathan stood before David with a story about a rich man stealing a poor man\'s lamb. David was furious — "the man who did this deserves to die!" And Nathan said: "You are the man." Was David manipulated? Or was the story the only way past defenses that would have blocked any direct accusation? The vineyard song works the same way. Your defenses are sophisticated — they have to be, because you have been maintaining them for years. A direct indictment you would have parried. But a love song? You walked right in. The discomfort you feel is not the sting of manipulation. It is the sting of recognition. And recognition, however it arrives, is the beginning of honesty.',
        },
        {
          text: 'I\'m drawn to the woes. They\'re so specific — land-grabbing, drunkenness, calling evil good. I can see these in my own world.',
          insight: 'Which one stopped you? Not which one you can identify in the abstract — which one made your stomach clench? The specificity is the point. Isaiah does not say "you have sinned." Isaiah says "you join house to house and add field to field." The generality of "sin" is easy to acknowledge and impossible to address. But "you acquired that second property while your neighbor was losing theirs" — that has an address. The woes are not a menu of ancient vices. They are a diagnostic tool. And the one that makes you most uncomfortable is the one the chapter is pressing against. Name it. Not to anyone else. Just to yourself. The diagnosis precedes the healing.',
        },
        {
          text: 'The wordplay in verse 7 — justice/bloodshed, righteousness/outcry — keeps echoing. The difference is so small and so total.',
          insight: 'One consonant. In Hebrew, mishpat and mispach are nearly indistinguishable to the ear — and that is the entire theological point. The distance between justice and bloodshed is not a canyon. It is a hair\'s breadth. The person who meant to build a just society and the person who built an exploitative one may have started from the same place, with the same intentions, using the same vocabulary. The drift was imperceptible. The arrival was catastrophic. What does it mean for you that the difference between what God expected and what God got is separated by a single sound? It means the examination is not about your grand failures. It is about your small drifts — the places where mishpat quietly, gradually, syllable by syllable, became mispach.',
        },
        {
          text: 'I keep returning to the opening — the farmer clearing stones, planting choice vines. Before everything went wrong, there was so much love.',
          insight: 'You are not avoiding the judgment. You are finding its source. The woes are devastating because of what came before them — not despite it. Every stone cleared is an act of love that makes the wild grapes more inexplicable. Every vine planted is a hope that makes the failure more grievous. To feel the tenderness of the opening is to understand why the judgment of the ending is not cruelty but heartbreak. And it is to understand something about your own story: before the wild grapes, before the drift, before the woes you recognize in yourself — you were planted. Someone cleared the ground for you. Let the tenderness do its own kind of confrontation. It is gentler than the woes but no less searching.',
        },
        {
          text: 'I notice the progression: love song → verdict → woes → army. It only gets worse. Is there any hope here at all?',
          insight: 'Turn the page. Chapter 6 opens with Isaiah in the temple seeing the throne, hearing the seraphim, falling undone — and then the coal touches his lips and the question comes: "Whom shall I send?" The vineyard song is not the last word. It is the question that creates the need for the next answer. The darkest moment in a symphony is not the end — it is the passage that makes the resolution possible. But you are right to feel the weight. The chapter does not offer cheap comfort. The army at the end is real, the darkness is real, the growling like the sea is real. Hope in Isaiah is never a shortcut past the suffering. It is the voice that speaks on the other side of it. You have not reached the other side yet. Keep reading.',
        },
        {
          text: 'The removal of the hedge frightens me more than the woes. Not active punishment — just God stepping back. Letting the wilderness in.',
          insight: 'You have identified the chapter\'s most terrifying theological move. The worst thing God does is not send fire or armies — it is stop tending. "I will remove its hedge... break down its wall... I will not prune it or hoe it." The vines are not ripped out. They are simply left alone. And what follows — briers, thorns, drought, darkness — is not inflicted but permitted. The ordered world returning to chaos when the ordering presence withdraws. If that distinction lands in your chest rather than your head, you have understood something the comfortable rarely grasp: the good in your life is not the natural state of things. It is tended. And the one tending it is the same one this chapter describes on a hillside, asking what more there was to do.',
        },
        {
          text: 'I am the vineyard. I know it. I don\'t need more time to process that. I need to know what to do now.',
          insight: 'Read the woes. Not as accusations but as an examination of conscience. Which house did you join to which house? Where did you call bitter sweet because the truth was inconvenient? Whose outcry did you drown with your music? Then do the simplest, hardest thing the chapter implies: produce the fruit that was expected. Not in general. Not as a resolution. One act of mishpat where mispach has been growing. One gesture of tsedaqah in the direction of someone whose tse\'aqah you have been ignoring. The vineyard is not asked to become a different vineyard. It is asked to produce the grapes it was planted to grow. You already know which ones.',
        },
      ],
    },
  },

  verseByVerse: {
    verses: [
      {
        verseNumber: '5:1',
        text: 'Let me sing for my beloved my love-song concerning his vineyard: My beloved had a vineyard on a very fertile hill.',
        keywords: [
          {
            word: 'beloved',
            hebrew: 'יָדִיד',
            transliteration: 'yadid',
            definition: 'Beloved, dear one, a term of intimate affection',
            significance: 'The song opens with the language of romantic love — yadid is used in Song of Songs and in Psalm 45 (a royal wedding psalm). By beginning with this word, Isaiah frames the entire relationship between God and Israel as a love story, not a legal contract. The audience would have expected a wedding song or a celebration of harvest. The genre deception is essential: love is the frame within which the betrayal will land.',
          },
          {
            word: 'vineyard',
            hebrew: 'כֶּרֶם',
            transliteration: 'kerem',
            definition: 'A vineyard, a cultivated plot of grapevines',
            significance: 'The vineyard as a metaphor for Israel was already established in Israelite consciousness (cf. Psalm 80:8-16). A vineyard requires more sustained investment than any other crop — years of preparation before the first harvest. The metaphor implies patient, long-term love, not a transactional arrangement. Every Israelite hearing this song would have understood: this vineyard is us.',
          },
        ],
      },
      {
        verseNumber: '5:2',
        text: 'He dug it and cleared it of stones, and planted it with choice vines; he built a watchtower in the midst of it, and hewed out a wine vat in it; he expected it to yield grapes, but it yielded wild grapes.',
        keywords: [
          {
            word: 'wild grapes',
            hebrew: 'בְּאֻשִׁים',
            transliteration: 'be\'ushim',
            definition: 'Wild grapes, stinking or worthless berries — possibly poisonous',
            significance: 'The word be\'ushim appears only here in the Hebrew Bible. Its root suggests something stinking or putrid — not merely sour grapes but offensive, possibly toxic fruit. The vineyard did not simply fail to produce; it produced something actively repulsive. The rarity of the word forces the reader to pause: this is not ordinary failure. It is a corruption of the very capacity for fruitfulness.',
          },
        ],
        poeticDevices: [
          {
            type: 'antithetic',
            verses: 'v.2',
            explanation: 'The verse builds expectation through a sequence of careful actions — dug, cleared, planted, built, hewed — and then shatters it with the final clause: "but it yielded wild grapes." Five verbs of preparation meet one verb of failure. The ratio itself is the tragedy: so much investment, so little return. The antithesis is not between two parallel lines but between the entire buildup and the devastating reversal.',
          },
        ],
      },
      {
        verseNumber: '5:3',
        text: 'And now, inhabitants of Jerusalem and people of Judah, judge between me and my vineyard.',
        notes: 'The shift to direct address — "inhabitants of Jerusalem and people of Judah" — subtly changes the genre from song to courtroom. The audience is being appointed as jury. They do not yet know they are also the defendant. The phrase "judge between me" echoes legal proceedings in Deuteronomy and Genesis (31:53). The audience is being asked to render a verdict on their own case without knowing it.',
      },
      {
        verseNumber: '5:4',
        text: 'What more was there to do for my vineyard that I have not done in it? When I expected it to yield grapes, why did it yield wild grapes?',
        notes: 'The theological weight of this question is extraordinary. God — the one who knows all things — asks a question without an evident answer. This is not rhetorical posturing but a genuine expression of divine bewilderment, perhaps even grief. The question will echo through the entire book of Isaiah: what more can God do when love has been exhausted and the vineyard still produces poison? The answer, which will take sixty-one more chapters to unfold, is the servant of chapter 53.',
      },
      {
        verseNumber: '5:5',
        text: 'And now I will tell you what I will do to my vineyard. I will remove its hedge, and it shall be devoured; I will break down its wall, and it shall be trampled down.',
        notes: 'The sentence is announced in first person — the vineyard owner speaks directly for the first time. The two protective structures — hedge (mesukah) and wall (gader) — represent the covenant protections God placed around Israel: the law, the prophets, the temple, the land. Their removal does not mean God attacks the vineyard; it means God ceases to protect it. The external threats (devoured, trampled) were always there; the wall was what held them back.',
      },
      {
        verseNumber: '5:6',
        text: 'I will make it a waste; it shall not be pruned or hoed, and it shall be overgrown with briers and thorns; I will also command the clouds that they rain no rain upon it.',
        keywords: [
          {
            word: 'briers and thorns',
            hebrew: 'שָׁמִיר וָשַׁיִת',
            transliteration: 'shamir vashayit',
            definition: 'Thorns and briers — wild, aggressive plant growth that overtakes cultivated land',
            significance: 'The phrase shamir vashayit appears seven times in Isaiah and becomes a signature image of desolation. It directly echoes Genesis 3:18, where the ground cursed after Adam\'s sin produces "thorns and thistles." The vineyard that was meant to be a new Eden reverts to the post-Fall landscape. Thorns are the botanical sign that the garden has been lost.',
          },
        ],
        notes: 'The command over clouds is the moment the audience should realize this is no ordinary farmer. Only God commands the rain. The genre shift from love song to divine oracle is now complete, though the full identification does not come until verse 7. The withholding of rain reverses the exodus promise of Deuteronomy 11:14: "I will give the rain for your land in its season."',
      },
      {
        verseNumber: '5:7',
        text: 'For the vineyard of the LORD of hosts is the house of Israel, and the people of Judah are his pleasant planting; he expected justice, but saw bloodshed; righteousness, but heard a cry!',
        keywords: [
          {
            word: 'justice / bloodshed',
            hebrew: 'מִשְׁפָּט / מִשְׂפָּח',
            transliteration: 'mishpat / mispach',
            definition: 'Justice (right governance) vs. bloodshed (violent oppression)',
            significance: 'The most famous wordplay in the Hebrew Bible. Mishpat (justice) and mispach (bloodshed) differ by a single Hebrew consonant — the shift from shin (שׁ) to sin (שׂ) and from tet (ט) to chet (ח). To a Hebrew ear, the words are nearly identical in sound but polar opposites in meaning. The pun encapsulates the entire tragedy of Israel: what they built sounded like justice but was actually violence. The near-homophony suggests the corruption was imperceptible — it happened syllable by syllable.',
          },
          {
            word: 'righteousness / outcry',
            hebrew: 'צְדָקָה / צְעָקָה',
            transliteration: 'tsedaqah / tse\'aqah',
            definition: 'Righteousness (covenant fidelity) vs. outcry (the scream of the oppressed)',
            significance: 'The second wordplay pair in verse 7. Tsedaqah (righteousness) and tse\'aqah (outcry) share three consonants — the shift from dalet (ד) to ayin (ע) transforms covenant faithfulness into the scream of its victims. The cry (tse\'aqah) is the same word used in Exodus 3:7 for Israel\'s cry under Egyptian oppression. The devastating implication: Israel has become Egypt. The liberated have become the oppressors. The cry that once moved God to act on their behalf now rises against them.',
          },
        ],
        poeticDevices: [
          {
            type: 'wordplay',
            verses: 'v.7',
            explanation: 'The double wordplay — mishpat/mispach and tsedaqah/tse\'aqah — is the poetic and theological climax of the chapter. The near-identical sounds make the moral distance unbearable: what God wanted and what God got are separated by the thinnest possible acoustic margin, yet the gap between them contains an entire nation\'s worth of suffering. The pun would have been heard before it was understood — the audience catching the sound-play before grasping its meaning, a moment of delight turning to horror.',
          },
        ],
      },
      {
        verseNumber: '5:8',
        text: 'Ah, you who join house to house, who add field to field, until there is no more room, and you are left to live alone in the midst of the land!',
        keywords: [
          {
            word: 'woe',
            hebrew: 'הוֹי',
            transliteration: 'hoy',
            definition: 'Woe, alas — a cry of grief used in funeral laments',
            significance: 'Hoy is not primarily a word of anger but of mourning. It is the sound made at a funeral — the prophetic woe is a lament for the living dead, people who are already lost though they do not know it yet. Each woe is a eulogy delivered prematurely: Isaiah mourns the fate of those who are still choosing the path that leads to it.',
          },
        ],
        notes: 'The first woe targets land consolidation — the systematic absorption of small family farms by wealthy landowners. The Levitical land laws (Leviticus 25) were designed to prevent exactly this: ancestral land was to remain in the family, with jubilee provisions for restoration. "Until there is no more room" describes a monopolistic economy where the rich own everything and the poor have nowhere to stand. The ironic consequence: the land-grabber ends up "alone in the midst of the land" — master of an empty kingdom.',
      },
      {
        verseNumber: '5:9',
        text: 'The LORD of hosts has sworn in my hearing: Surely many houses shall be desolate, large and beautiful houses, without inhabitant.',
        notes: 'The punishment fits the crime with poetic precision: those who accumulated houses will watch them stand empty. The "large and beautiful houses" built on injustice become monuments to judgment. The prophetic oath formula — "the LORD of hosts has sworn in my hearing" — gives this the weight of divine decree, not human prediction.',
      },
      {
        verseNumber: '5:10',
        text: 'For ten acres of vineyard shall yield but one bath, and a homer of seed shall yield a mere ephah.',
        notes: 'The agricultural math is devastating: a bath is approximately six gallons — so ten acres of vineyard (an enormous plot) produce only six gallons of wine. A homer of seed (about six and a half bushels) yields one ephah (about two-thirds of a bushel) — a tenfold loss. The land itself rebels against those who stole it. The fertility that the land-grabbers sought is withdrawn; their vast estates produce almost nothing.',
      },
      {
        verseNumber: '5:11',
        text: 'Ah, you who rise early in the morning in pursuit of strong drink, who linger in the evening to be inflamed by wine,',
        notes: 'The second woe: all-day drinking, from morning to night. "Rising early" for strong drink inverts the pattern of rising early for prayer or work — the pursuit of intoxication has replaced the pursuit of God. The word "inflamed" (dalaq) suggests not casual drinking but a burning, consuming thirst. This is addiction described in prophetic language: the entire day organized around consumption.',
      },
      {
        verseNumber: '5:12',
        text: 'whose feasts are accompanied by lyre and harp, tambourine and flute and wine, but who do not regard the deeds of the LORD, or see the work of his hands!',
        keywords: [
          {
            word: 'regard',
            hebrew: 'נָבַט',
            transliteration: 'navat',
            definition: 'To look at with attention, to consider, to regard with understanding',
            significance: 'The failure is not ignorance but inattention. Navat implies the capacity to see but the refusal to look. The feasters have music, wine, entertainment — everything to fill the senses — and precisely this sensory overload prevents them from perceiving what God is doing in history. Their parties are not just indulgent; they are an anesthetic against prophetic awareness. The music drowns out the cry (tse\'aqah) of verse 7.',
          },
        ],
      },
      {
        verseNumber: '5:13',
        text: 'Therefore my people go into exile without knowledge; their honored ones are dying of hunger, and their multitude is parched with thirst.',
        notes: 'The consequence of not "regarding the deeds of the LORD" is exile — and the bitter irony is that it comes "without knowledge." The same people who refused to look will be forced to see. "Honored ones dying of hunger" and "multitude parched with thirst" reverses their feasting: those who drank all day will die of thirst. Those who ate lavishly will starve.',
      },
      {
        verseNumber: '5:14',
        text: 'Therefore Sheol has enlarged its appetite and opened its mouth beyond measure; the nobility of Jerusalem and her multitude go down, her throng and all who exult in her.',
        notes: 'Sheol — the realm of the dead — personified as a creature with an insatiable mouth. The image is terrifying: death itself expanding to swallow Jerusalem whole. The "nobility" and "multitude" and "throng" — every social class — descend together. The party ends in the grave. The excess of verse 11-12 is answered by the excess of Sheol\'s appetite.',
      },
      {
        verseNumber: '5:15',
        text: 'People are bowed down, everyone is brought low, and the eyes of the haughty are humbled.',
        notes: 'A brief interlude of reversal: the proud brought low, the haughty humbled. The "eyes of the haughty" connect to the theme of failed sight — those who refused to "regard" God\'s deeds (v.12) will have their eyes forced downward. The humbling is both physical (bowed in defeat) and spiritual (confronted with the reality they refused to see).',
      },
      {
        verseNumber: '5:16',
        text: 'But the LORD of hosts is exalted by justice, and the Holy God shows himself holy by righteousness.',
        keywords: [
          {
            word: 'exalted',
            hebrew: 'גָּבַהּ',
            transliteration: 'gavah',
            definition: 'To be high, exalted, lifted up',
            significance: 'While the haughty are brought low (v.15), God is exalted — but not through power displays or military conquest. God is exalted by mishpat (justice) and shows holiness through tsedaqah (righteousness). These are the exact words from the devastating wordplay of verse 7. What Israel failed to produce, God achieves through judgment itself. The justice Israel refused to practice becomes the justice that judges them.',
          },
        ],
      },
      {
        verseNumber: '5:17',
        text: 'Then the lambs shall graze as in their pasture, and fatlings and kids shall feed among the ruins.',
        notes: 'A haunting pastoral image amid the wreckage: animals grazing where mansions once stood. The "ruins" are the great houses of verse 8-9 — now reduced to pastureland. The lambs who graze there are a silent commentary on the reversal: the poor and simple inherit the spaces the powerful hoarded. There is an eerie peace in this image — beauty growing in the rubble of greed.',
      },
      {
        verseNumber: '5:18',
        text: 'Ah, you who drag iniquity along with cords of falsehood, who drag sin along as with cart ropes,',
        notes: 'The third woe: those who actively haul sin toward themselves, not passively falling into it but deliberately pulling it closer with "cords of falsehood." The metaphor is agricultural — like oxen dragging a heavy cart — suggesting both effort and stubbornness. These sinners are not weak but strong; their wickedness requires the exertion of draft animals. Sin here is not a stumble but a project.',
      },
      {
        verseNumber: '5:19',
        text: 'who say, "Let him make haste, let him speed his work, that we may see it; let the plan of the Holy One of Israel hasten to fulfillment, that we may know it!"',
        notes: 'The defiance becomes explicit: the sinners taunt God to act, daring divine judgment as proof of divine existence. "Let him make haste" is the language of mockery — a dare thrown at heaven by those who believe they are untouchable. This is not atheism but something worse: a belief in God combined with contempt for God\'s power. They know the Holy One of Israel but are confident the Holy One will not act.',
      },
      {
        verseNumber: '5:20',
        text: 'Ah, you who call evil good and good evil, who put darkness for light and light for darkness, who put bitter for sweet and sweet for bitter!',
        notes: 'The fourth woe: moral inversion. Three pairs of opposites — evil/good, darkness/light, bitter/sweet — systematically reversed. This is not confusion but deliberate redefinition: the powerful have the authority to rename reality, to declare oppression "prosperity" and exploitation "opportunity." The three sense-domains (moral, visual, gustatory) suggest that the inversion is total — affecting judgment, perception, and taste. Nothing can be trusted when the labels have been switched.',
      },
      {
        verseNumber: '5:21',
        text: 'Ah, you who are wise in your own eyes, and shrewd in your own sight!',
        notes: 'The fifth woe: self-congratulatory wisdom. The briefest of the six woes, and the most cutting. "Wise in your own eyes" is a phrase borrowed from Proverbs (3:7, 26:12) where it consistently describes the fool who has mistaken self-confidence for understanding. The repetition — "your own eyes... your own sight" — doubles the reflexive, emphasizing that these people have created a closed loop of self-validation. They consult only themselves and are always satisfied with the answer.',
      },
      {
        verseNumber: '5:22',
        text: 'Ah, you who are heroes in drinking wine and valiant at mixing drink,',
        notes: 'The sixth woe returns to drinking, forming a frame with the second woe (v.11). But now the drinkers are called "heroes" (gibborim) — a word used for mighty warriors. The sarcasm is withering: these are warriors whose only battlefield is the banquet hall, champions whose victories are measured in cups. The word "valiant" (anshei chayil) is used of Ruth (3:11) and of the ideal woman of Proverbs 31. Applied to professional drinkers, it becomes a devastating mockery of perverted virtue.',
      },
      {
        verseNumber: '5:23',
        text: 'who acquit the guilty for a bribe, and deprive the innocent of their rights!',
        notes: 'The climax of the woes: judicial corruption. The "heroes" of verse 22 are revealed to be judges — men who drink on the job and sell verdicts to the highest bidder. The innocent lose their rights (tsedaqah — the same word from the wordplay of v.7). The entire system of justice — the very thing the vineyard was planted to produce — has been weaponized against those it was designed to protect. This is the fullest expression of the wild grapes: the structure meant to produce justice now manufactures injustice.',
      },
      {
        verseNumber: '5:24',
        text: 'Therefore, as the tongue of fire devours the stubble, and as dry grass sinks down in the flame, so their root will become rottenness, and their blossom go up like dust; for they have rejected the instruction of the LORD of hosts, and have despised the word of the Holy One of Israel.',
        keywords: [
          {
            word: 'instruction',
            hebrew: 'תּוֹרָה',
            transliteration: 'torah',
            definition: 'Teaching, instruction, law — the comprehensive guidance of God',
            significance: 'Torah here is not merely "the Law" in a legal sense but the total instruction of God — the direction, teaching, and guidance that shapes a covenantal community. To reject torah is not simply to break rules but to refuse the formation God intended. The vineyard rejected the very cultivation that would have produced good fruit. The instruction was not a burden but the condition of fruitfulness.',
          },
        ],
      },
      {
        verseNumber: '5:25',
        text: 'Therefore the anger of the LORD was kindled against his people, and he stretched out his hand against them and struck them; the mountains quaked, and their corpses were like refuse in the streets. For all this his anger has not turned away, and his hand is stretched out still.',
        notes: 'The refrain "his hand is stretched out still" will recur in Isaiah 9:12, 17, 21 and 10:4 — becoming a drumbeat of unrelenting judgment. The outstretched hand is a deliberate inversion of the exodus motif: God\'s "outstretched arm" (Deuteronomy 4:34) delivered Israel from Egypt. The same hand that saved now strikes. The mountains quaking signals cosmic-level disruption — the created order responding to the covenant breach.',
      },
      {
        verseNumber: '5:26',
        text: 'He will raise a signal for a nation far away, and whistle for a people at the ends of the earth; here they come, swiftly, speedily!',
        notes: 'God whistles for Assyria the way a shepherd whistles for a dog or a beekeeper whistles for bees. The casualness is terrifying: the most feared military power in the world is at God\'s beck and call, summoned with a whistle. "A nation far away" — the Assyrians — arrive "swiftly, speedily," answering the mockers of verse 19 who dared God to "make haste." God hastens — but not the way they expected.',
      },
      {
        verseNumber: '5:27',
        text: 'None of them is weary, none stumbles, none slumbers or sleeps, not a loincloth is loose, not a sandal-thong broken;',
        notes: 'The description of the approaching army emphasizes superhuman endurance: no fatigue, no stumbling, no sleep, not even a loose garment. This is the anti-party — compared to the drunken heroes of verse 22 who can barely stand, this army is perfectly disciplined. The contrast is devastatingly ironic: Israel\'s "warriors" drink; God\'s warriors do not even sleep.',
      },
      {
        verseNumber: '5:28',
        text: 'their arrows are sharp, all their bows bent, their horses\' hoofs seem like flint, and their wheels like the whirlwind.',
        notes: 'The military description continues with escalating intensity: sharp arrows, bent bows (always ready), horses\' hooves like flint (sparking, unstoppable), chariot wheels like a whirlwind. Every image communicates the same message: this force cannot be resisted. The poetry makes the army almost beautiful in its terrible efficiency — an aesthetic that intensifies the horror.',
      },
      {
        verseNumber: '5:29',
        text: 'Their roaring is like a lion, like young lions they roar; they growl and seize their prey, they carry it off, and no one can rescue.',
        notes: 'The lion metaphor completes the picture: the army is not merely military but predatory. Lions roar before they strike — the sound itself is a weapon, paralyzing the prey before the teeth close. "No one can rescue" echoes the legal language of the woes: just as the corrupt judges deprived the innocent of their rights (v.23), now no advocate can deliver the nation from the consequences of its own injustice.',
      },
      {
        verseNumber: '5:30',
        text: 'They will roar over it on that day, like the roaring of the sea. And if one looks to the land — only darkness and distress; and the light grows dark with clouds.',
        notes: 'The chapter closes in total darkness — the light itself extinguished. "Darkness and distress" reverse the creation narrative: where God said "Let there be light," the chapter ends with light becoming dark. The sea roaring evokes primordial chaos — the formless void of Genesis 1:2 before God spoke order into existence. The vineyard that was a new Eden has returned to pre-creation chaos. The love song that began on a sunlit hillside ends in the darkness of the deep.',
      },
    ],

    buildsOn: [
      {
        sourceRef: 'Psalm 80:8-16',
        label: 'The Vine Transplanted from Egypt',
        connection: 'Psalm 80 provides the direct theological background for the vineyard metaphor: "You brought a vine out of Egypt; you drove out the nations and planted it. You cleared the ground for it; it took deep root and filled the land." Isaiah 5 takes this established image — the vine brought from Egypt and planted in the land — and asks the devastating follow-up question: what happened to the vine? The psalm is prayer; the song is indictment. The same vineyard, examined from opposite angles.',
      },
      {
        sourceRef: 'Genesis 2-3',
        label: 'Eden — The Original Cultivated Garden',
        connection: 'The vineyard on a fertile hill recapitulates Eden: a prepared space, choice plantings, divine cultivation, protective boundaries. And the wild grapes replay the Fall: given everything, the garden produces the opposite of what was intended. The thorns and briers of verse 6 directly echo Genesis 3:18 — the curse that turns the garden to wilderness. Isaiah is telling the story of the Fall in covenantal terms: Israel had a second Eden and lost it the same way.',
      },
      {
        sourceRef: 'Deuteronomy 32:32-33',
        label: 'The Vine of Sodom',
        connection: 'Moses warned that Israel could become like "the vine of Sodom and the fields of Gomorrah; their grapes are grapes of poison, their clusters are bitter." Isaiah 5 shows the warning fulfilled: the choice vines (soreq) planted by God have produced be\'ushim (wild, stinking grapes). The trajectory from Deuteronomy\'s warning to Isaiah\'s diagnosis spans centuries but traces a single theme: the vineyard can become the anti-vineyard, the garden can become Sodom.',
      },
      {
        sourceRef: 'Amos 5:10-13',
        label: 'The Northern Kingdom\'s Parallel Woes',
        connection: 'Amos, Isaiah\'s near-contemporary prophesying to the Northern Kingdom, delivers parallel indictments: "You trample on the poor and take from them levies of grain; you have built houses of hewn stone, but you shall not live in them; you have planted pleasant vineyards, but you shall not drink their wine." The same social injustices — land seizure, exploitation of the poor, the ironic reversal of building and planting for nothing — appear in both prophets, confirming that the diagnosis is systemic, not local.',
      },
    ],

    pointsToward: [
      {
        targetRef: 'Matthew 21:33-46',
        targetBook: 'nt',
        label: 'The Parable of the Wicked Tenants',
        connection: 'Jesus retells the vineyard song with a crucial addition: the owner sends servants (prophets) and finally a son (the Messiah). The tenants kill the son, and the vineyard is given to others. Jesus explicitly draws on Isaiah 5 — the same vineyard, the same beloved owner, the same failure to produce fruit — but extends the narrative to answer Isaiah\'s unanswered question: "What more was there to do?" God sent the Son. The absence of a caretaker in Isaiah 5 is filled by the presence of Christ in Matthew 21.',
      },
      {
        targetRef: 'Mark 12:1-12',
        targetBook: 'nt',
        label: 'The Vineyard Parable in Mark — Isaiah Quoted Directly',
        connection: 'Mark\'s version of the parable explicitly quotes Isaiah 5: "A man planted a vineyard, put a fence around it, dug a pit for the wine press, and built a watchtower." Every detail matches — the fence/hedge, the wine press/vat, the watchtower. Mark\'s audience, steeped in Isaiah, would have heard the echo immediately. The parable is not an original story but a sequel: Isaiah asked what more could be done; Jesus shows what more was done — and what it cost.',
      },
      {
        targetRef: 'John 15:1-8',
        targetBook: 'nt',
        label: '"I Am the True Vine" — The Vineyard Restored',
        connection: 'Jesus declares "I am the true vine, and my Father is the vinegrower." The language directly answers Isaiah 5: where Israel was the failed vineyard, Jesus is the true vine — the one who actually produces the fruit God expected. The pruning, abiding, and fruit-bearing language of John 15 is the restoration of what Isaiah 5 lamented. The vine that was planted in choice soil and produced wild grapes is replaced by a vine that produces fruit that remains.',
      },
      {
        targetRef: 'Romans 9:27-29',
        targetBook: 'nt',
        label: 'Paul and the Remnant — Isaiah\'s Vineyard Theology',
        connection: 'Paul draws on Isaiah\'s remnant theology — the idea that even when the vineyard fails, a stump remains (cf. Isaiah 6:13). The vineyard is not uprooted entirely; a remnant is preserved. Paul applies this to the mystery of Israel\'s partial hardening and the inclusion of the Gentiles: the vineyard\'s scope has expanded, but the farmer is the same, and the expectation of fruit has not changed.',
      },
      {
        targetRef: 'Revelation 14:17-20',
        targetBook: 'revelation',
        label: 'The Final Vintage — The Winepress of God\'s Wrath',
        connection: 'The vineyard imagery reaches its apocalyptic conclusion in Revelation: an angel swings a sickle, gathers the "vine of the earth," and throws it into "the great wine press of the wrath of God." The wine vat that God hewed in Isaiah 5:2 in anticipation of a joyful harvest becomes the winepress of judgment. The image has traveled from hope (Isaiah 5:2) through failure (Isaiah 5:4) to eschatological reckoning (Revelation 14). The vintage God planted for becomes the vintage God judges.',
      },
    ],

    emotionalJourney: 'Isaiah 5 is engineered to betray the listener\'s sympathy. It begins in tenderness — a love song, a farmer on a hillside, every detail of care lavished with evident affection. The audience leans in, charmed by the music, moved by the lover\'s devotion. The first emotional register is warmth, attraction, the pleasure of hearing a beautiful song well sung. Then comes the failure: wild grapes. The emotion shifts to sympathy — the audience feels for the farmer, indignant on the farmer\'s behalf. How could the vineyard fail after all that care? The question of verse 4 deepens the sympathy to bewilderment: "What more was there to do?" And then the pivot of verse 7 — "the vineyard of the LORD of hosts is the house of Israel" — and the emotional ground collapses. Sympathy becomes self-recognition. Indignation becomes shame. The verdict they rendered against the vineyard was rendered against themselves. The six woes that follow do not allow recovery — each one is a specific accusation that tightens the noose: land-grabbing, drunkenness, defiance, moral inversion, arrogance, corruption. The emotions stack: shame, exposure, the sickening recognition of seeing your own sins named in prophetic verse. And then the closing movement — the army summoned, the lion roaring, the land darkened — moves from shame to dread. The chapter does not resolve. It ends in darkness. The reader is left standing at the edge of chapter 6, emotionally devastated, desperate for something — a throne, a voice, a coal, a commission. The vineyard song creates the emotional vacancy that chapter 6 will fill.',

    misreadings: [
      {
        misreading: 'The vineyard song is just a parable about ancient Israel',
        correction: 'The vineyard song is a genre-bending prophetic device designed to make the listener convict themselves before they know they are the defendant. It is not merely a story about Israel but a participatory experience: you are meant to side with the farmer, agree with the verdict, and then discover you are the vineyard. If you read it as "about them," you have successfully avoided the trap Isaiah set — which means you have missed the entire point.',
        whyItMatters: 'The power of the vineyard song depends on self-identification. Every generation of readers — not just ancient Israel — is meant to hear the love song, sympathize with the owner, and then feel the shock of recognition. If the song is safely historical, it becomes an interesting literary artifact. If it is a mirror, it becomes a confrontation with the gap between what you have been given and what you have produced.',
      },
      {
        misreading: 'God destroys the vineyard out of anger',
        correction: 'God does not destroy the vineyard — God stops protecting it. The sentence in vv.5-6 is entirely passive: remove the hedge, break the wall, cease pruning, withhold rain. The vineyard is not burned or uprooted; it is abandoned to the wilderness that was always pressing in from outside. The judgment is withdrawal, not attack.',
        whyItMatters: 'The distinction between active destruction and withdrawn protection changes everything about how we understand divine judgment. If God destroys, the response is fear. If God withdraws, the response is grief — and the recognition that every good thing in your life was being actively sustained, not merely existing on its own. The wild animals, the thorns, the drought are not sent by God. They are what happens when God steps back.',
      },
      {
        misreading: 'The woes are about personal sins',
        correction: 'The six woes target systemic injustice — structural sins embedded in economic, legal, and cultural institutions. Land consolidation (v.8), elite drinking culture (v.11), public moral inversion (v.20), and judicial corruption (v.22-23) are not individual failings but social systems. Isaiah is not condemning private vices; Isaiah is indicting an entire civilization\'s structures of power.',
        whyItMatters: 'Reducing the woes to personal morality allows the reader to ask "am I guilty of this specific sin?" and often answer "no" — thereby avoiding the chapter\'s real challenge. But if the woes describe systems you participate in, benefit from, or fail to resist, the question changes from "am I guilty?" to "am I complicit?" That is a harder and more honest question.',
      },
      {
        misreading: 'The chapter is all judgment with no hope',
        correction: 'The hope in Isaiah 5 is structural rather than explicit. The vineyard is abandoned but not uprooted — the roots remain. The woes diagnose specific problems, and specific diagnoses imply specific cures. And the chapter\'s placement before Isaiah 6 — the throne vision, the coal of cleansing, the commissioning — means the darkness of 5:30 is designed to make the light of 6:1 more blinding. The despair is real, but it is penultimate, not final.',
        whyItMatters: 'Reading the chapter as hopeless misses Isaiah\'s literary strategy. The darkness at the end of chapter 5 is not the conclusion of the story but the dramatic setup for what comes next. Just as the vineyard song draws you in through beauty before confronting you with truth, the book draws you through darkness before overwhelming you with glory. The despair of chapter 5 is the canvas on which chapter 6 will paint.',
      },
    ],

    soWhatNowWhat: {
      whatDoesThisMean: 'Isaiah 5 reveals that the gap between what God gave and what God\'s people produced is not a minor disappointment but a heartbreak at the center of the divine-human relationship. The vineyard received everything — the best soil, the choicest vines, a watchtower, a wine vat, years of patient tending — and produced wild grapes. The woes that follow are not random punishments but the specific identification of what "wild grapes" look like when they grow in a prosperous religious community: economic exploitation, addiction to comfort, moral inversion, arrogant self-sufficiency, and corrupt justice. The chapter forces the question: given everything you have been given — every advantage, every grace, every second chance — what fruit are you actually producing?',
      soWhat: 'The vineyard metaphor applies to anyone who has received disproportionate blessing — educational opportunity, spiritual formation, economic security, relational richness — and must account for what that blessing has produced. The question is not "are you grateful?" (gratitude is easy to perform) but "what has grown in the soil of your privilege?" The six woes provide a specific examination: Am I accumulating resources while others go without (v.8)? Am I anesthetizing myself with pleasure instead of attending to God\'s work in the world (v.11-12)? Am I calling my compromises "wisdom" and my comfort "blessing" (v.20)? Am I so certain of my own rightness that I have stopped listening (v.21)? The discomfort of honest answers is the chapter doing its work.',
      nowWhat: 'Choose one woe — the one that made you most uncomfortable — and sit with it for a week. Not to wallow in guilt but to examine honestly whether that particular wild grape has been growing in the soil of your life. Then take one concrete action that moves you from mispach toward mishpat, from tse\'aqah toward tsedaqah. It might be returning something you have accumulated to someone who needs it. It might be choosing sobriety — literal or metaphorical — over anesthesia. It might be naming something you have been calling "good" that you know is "evil." The vineyard is not asked to transplant itself. It is asked to produce the fruit it was planted to grow. Start with one cluster.',
    },

    crossReferences: [
      {
        isaiahRef: 'Isaiah 5:1-7',
        ntRef: 'Matthew 21:33-44',
        connection: 'Jesus\' parable of the wicked tenants is a direct sequel to Isaiah\'s vineyard song. The same vineyard (with fence, wine press, and watchtower explicitly echoing Isaiah), the same owner, the same failure. But Jesus adds what Isaiah left implicit: the owner sends servants (the prophets) and finally a son (Christ). The tenants kill the son, and the vineyard is given to "a people that produces the fruits of the kingdom." The question Isaiah could not answer — "what more was there to do?" — receives its answer: send the Son.',
      },
      {
        isaiahRef: 'Isaiah 5:7',
        ntRef: 'John 15:1-8',
        connection: 'Jesus\' declaration "I am the true vine" directly addresses the failed vineyard of Isaiah 5. Where Israel was planted as a choice vine and produced wild grapes, Jesus is the true vine that produces genuine fruit. The command to "abide in me" is the answer to the vineyard\'s failure: fruitfulness comes not from the soil alone but from ongoing connection to the vine. The pruning language of John 15 echoes the withdrawal of pruning in Isaiah 5:6 — but now the pruning is restorative, not punitive.',
      },
      {
        isaiahRef: 'Isaiah 5:8',
        ntRef: 'Luke 12:16-21',
        connection: 'The parable of the rich fool — who tore down his barns to build bigger ones — is the New Testament equivalent of Isaiah\'s first woe against those who "join house to house, add field to field." Both texts target the accumulation of resources beyond need while others go without. Both end with the same verdict: the accumulator loses everything. "This very night your life is being demanded of you" echoes the desolate houses of Isaiah 5:9.',
      },
      {
        isaiahRef: 'Isaiah 5:20',
        ntRef: 'Romans 1:18-25',
        connection: 'Paul\'s description of those who "exchanged the truth about God for a lie" and "exchanged the glory of the immortal God for images" echoes Isaiah\'s woe against those who call evil good and good evil. The moral inversion Isaiah describes in the context of Judah, Paul universalizes: the suppression of truth, the deliberate confusion of categories, the worship of created things rather than the Creator. Both texts insist that moral inversion is not confusion but choice — a deliberate exchange, not an innocent mistake.',
      },
      {
        isaiahRef: 'Isaiah 5:24',
        ntRef: 'Hebrews 6:7-8',
        connection: 'The writer of Hebrews draws directly on vineyard theology: "Ground that drinks up the rain falling on it repeatedly and produces a crop useful to those for whom it is cultivated receives a blessing from God. But if it produces thorns and thistles, it is worthless and on the verge of being cursed; its end is to be burned over." The language parallels Isaiah 5 precisely: blessed ground, expected fruit, thorns instead, fire as consequence. The vineyard tradition carries into the New Testament with undiminished force.',
      },
      {
        isaiahRef: 'Isaiah 5:26-30',
        ntRef: 'Matthew 24:27-31',
        connection: 'Jesus\' description of the coming of the Son of Man echoes the cosmic military imagery that closes Isaiah 5: armies gathering, speed and inevitability, darkness over the land. The "signal raised for a nation far away" in Isaiah becomes the "sign of the Son of Man" in Matthew. Both passages end with an inescapable arrival — one in judgment, one in redemption — and both use the language of cosmic disturbance to signal that ordinary history has been interrupted by something ultimate.',
      },
    ],

    soulReflection: {
      scenario: 'You have read the entire chapter. The love song. The wild grapes. The reveal. The six woes — each one naming something specific, something you recognize. The army summoned with a whistle. The darkness at the end. You have sat with thirty verses and now you sit with yourself. The vineyard owner\'s question hangs in the air: "What more was there to do for my vineyard that I have not done in it?" The question is addressed to you — to the soil you were given, the vines that were planted in you, the watchtower built over your life, the wine vat carved in anticipation of a harvest that has not come. What are you left holding?',
      options: [
        {
          text: 'The question in verse 4 won\'t let me go. "What more was there to do?" I don\'t have an answer. There is no answer. That\'s what makes it devastating.',
          insight: 'You are standing in the silence between the question and the answer that will take sixty-one chapters to arrive. "What more was there to do?" is the sound of love reaching its limit — not its end, but its limit. Every prayer answered, every second chance given, every morning mercy that arrived before you asked for it — and still the wild grapes. The question is not accusation. It is the genuine bewilderment of a lover who gave everything and received back something unrecognizable. And the fact that you have no answer is not a failure of theology. It is the appropriate human response to a divine grief that exceeds our capacity to explain. Hold the silence. The answer is coming — but not yet. Not in this chapter.',
        },
        {
          text: 'I know which woe is mine. I\'ve known since I read it. I just don\'t want to say it out loud.',
          insight: 'Then don\'t say it to anyone else. Say it to yourself. In the quiet, with no audience, name the woe: the house you joined to the house, the field you added to the field. The evening you lingered over your comfort while the work of God went unnoticed. The time you called bitter sweet because the truth was too expensive. The moment you were so sure of your own wisdom that you stopped listening. Name it — not as a confession to be performed but as a diagnosis to be treated. The woes are not a sentencing hearing. They are a medical exam. And the one that makes you flinch is the one the physician is pressing on. The tenderness is not accidental. It means the wound is still alive, which means the healing has not been foreclosed.',
        },
        {
          text: 'I\'m angry at the people in the woes — the land-grabbers, the corrupt judges, the ones who call evil good. I see them everywhere.',
          insight: 'The anger is appropriate — and it is dangerous. Appropriate because the injustices Isaiah names are real, specific, and ongoing. Dangerous because the vineyard song was specifically designed to prevent exactly this response. Remember: the audience sided with the farmer too. They were indignant on the farmer\'s behalf. And then they discovered they were the vineyard. Your anger at the unjust is the same anger the original audience felt — right up until the moment of recognition. So hold the anger, but turn it: before you look outward at the land-grabbers and the corrupt, look inward at the soil of your own life. Which woe has your address on it? The prophetic tradition insists that the examination begin at home.',
        },
        {
          text: 'I feel grief — not guilt, but grief. For the fruit I could have produced and didn\'t. For the harvest that never came.',
          insight: 'Grief and guilt arrive in the same room but they are not the same visitor. Guilt says: you failed, and you should have known better. Grief says: something beautiful was possible, and it was lost. The distinction matters because guilt produces either self-punishment or defensive justification — both of which are about you. Grief produces tenderness — toward the farmer who planted, toward the vineyard that failed, toward the loss that neither can undo. If what you feel is grief rather than guilt, you are closer to the heart of verse 4 than you know. The farmer\'s question — "what more was there to do?" — is not an angry demand. It is a lament. And your grief is the first fruit the vineyard has produced that actually matches the farmer\'s own.',
        },
        {
          text: 'I\'m thinking about the people whose cry (tse\'aqah) I have ignored. The outcry I drowned with my own music.',
          insight: 'You heard it. Beneath the harp and the lyre and the tambourine of your comfortable life — behind the podcast and the streaming service and the carefully curated social media feed — there was a cry. There is a cry. And the chapter says God heard it even when you did not. Tse\'aqah — the same word used for Israel\'s cry in Egypt, the cry that moved God to send Moses. Somewhere in your orbit, someone is crying out, and the noise of your abundance has made it inaudible. The chapter is not asking you to feel bad about your music. It is asking you to turn the volume down long enough to hear what God hears. One cry. One name. One person whose tse\'aqah has been waiting for someone to stop and listen. Do you know who it is? You might.',
        },
        {
          text: 'The darkness at the end — verse 30 — is where I am. I don\'t see light. The chapter offers no resolution and that feels honest.',
          insight: 'The chapter ends in darkness because the chapter is not the end of the story. Isaiah placed this midnight at exactly the right location: after the vineyard song, after the woes, after the army — and immediately before the throne room of chapter 6, where light will be so overwhelming that even the seraphim cover their faces. You are in the darkness between chapters. And the fact that you can name it as darkness — that you have not pretended it is light or called it something easier — is itself a kind of integrity the chapter would honor. The people of verse 20 called darkness light. You are not doing that. Stay in the honest dark. The next chapter begins with a throne, a voice, and a coal. You are closer to it than you think.',
        },
        {
          text: 'I want to go back to verse 1. I want to hear the love song again. Before the wild grapes, before the woes — I want to remember being loved.',
          insight: 'Go back. Read it again: "My beloved had a vineyard on a very fertile hill. He dug it and cleared it of stones, and planted it with choice vines." Let each verb fall slowly. Dug. Cleared. Planted. Built. Hewed. Five acts of love that preceded your first breath of awareness. The song never stops being a love song — even the judgment is the action of an owner, not a stranger; even the woes are the grief of a lover, not the irritation of an investor. The vineyard was not a business venture. It was a labor of love. And the love that planted you has not stopped because the harvest disappointed. The farmer is still standing on the hillside. The question — "what more was there to do?" — is not the end of the relationship. It is the beginning of the next chapter. And you, wanting to hear the love song again, have already begun to produce the one fruit the farmer most wanted: a heart that turns back toward the one who planted it.',
        },
      ],
    },

    prayerPrompt: {
      prompt: 'Stand on the hillside with the farmer. Look at the vineyard — your vineyard, the one planted with such care. Name the wild grapes honestly: the specific places where what was given has not become what was expected. Then turn to the farmer and answer the question: "What more was there to do?" You have no answer — but you have your presence. Stay. Let the silence between the question and the answer become the space where honesty begins.',
      posture: 'Palms open and upward — the posture of a vineyard receiving rain',
    },
  },

  images: [],
};

registerSection(isaiah4);
