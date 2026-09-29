/* Deep Roots — Year 2: days 366–730
   One object per day, in order (array position = day number within the whole plan).
   Fields:
     ref    passage title shown on the day (e.g. "Genesis 2")
     tag    track label: "Old Testament" | "New Testament" | "Psalms & Wisdom" | "Rest day"
     v      array of verse strings (bundled text)   — OR —
     api    bible-api.com passage id (e.g. "genesis+2"), fetched and cached
     rest   1 for a rest/review day (no passage)
     nug    nuggets: [{h: heading, b: body}]
     steps  study steps: {id, t: title, m: time, xr: optional cross-refs, qs: [{th: thought, q: question}]}
   The shared "Today's takeaway" step is added automatically by index.html. */

// Days 366–730 go here, same format as data-year1.js.
const YEAR2=[
// Day 366
{
 "ref": "Deuteronomy 5",
 "tag": "Old Testament",
 "api": "deuteronomy+5",
 "sum": [
  "Moses gathers all Israel and rehearses the covenant made at Horeb, reminding this new generation that it was made not with their fathers alone but with them, alive this day, and that the LORD spoke to them face to face out of the fire on the mountain.",
  "He recites the ten commandments essentially as first given, though here the sabbath command is grounded not in creation but in Israel's own deliverance from slavery in Egypt.",
  "He recalls the people's terror at hearing God's voice directly, their plea that Moses stand between them and God, and God's own approval of their request, wishing only that such a heart to fear him would remain in them always.",
  "The chapter closes with God instructing Moses to send the people back to their tents while he alone remains to receive the rest of the commandments, statutes, and judgments to teach them, so that Israel might live and go in and possess the land."
 ],
 "nug": [
  {
   "h": "A covenant deliberately renewed for those who were not yet born",
   "b": "\"The LORD made not this covenant with our fathers, but with us, even us, who are all of us here alive this day\" (v. 3) has Moses insisting, against the plain fact that most of his hearers were children or unborn at Horeb, that the covenant is genuinely theirs and not merely inherited history."
  },
  {
   "h": "A different reason given for the very same commandment",
   "b": "Where Exodus 20 grounds the sabbath in God's own rest at creation, here Moses says \"remember that thou wast a servant in the land of Egypt... therefore the LORD thy God commanded thee to keep the sabbath day\" (v. 15) — the same rest now tied explicitly to the memory of forced, unrelenting labour."
  },
  {
   "h": "A people asking for a mediator, and God calling it well said",
   "b": "After the people beg, \"Go thou near, and hear all that the LORD our God shall say... and we will hear it, and do it\" (v. 27), the LORD's own verdict follows: \"They have well said all that they have spoken\" (v. 28) — their fear of direct encounter treated not as failure but as right instinct."
  },
  {
   "h": "A longing voiced by God himself for his people's hearts",
   "b": "\"O that there were such an heart in them, that they would fear me, and keep all my commandments always\" (v. 29) has the LORD expressing something close to wistfulness — obedience desired not as bare compliance but as the fruit of a heart rightly shaped."
  },
  {
   "h": "A command followed by its own stated purpose",
   "b": "\"Ye shall walk in all the ways which the LORD your God hath commanded you, that ye may live, and that it may be well with you, and that ye may prolong your days\" (v. 33) frames obedience throughout not as arbitrary rule-keeping but as the path toward the people's own flourishing in the land."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 20:1-17 · Hebrews 12:18-21",
   "qs": [
    {
     "th": "The ten commandments given here in Deuteronomy 5 closely repeat Exodus 20:1-17, yet the sabbath command's reasoning has shifted from creation-rest to Egypt-deliverance, and Hebrews 12:18-21 later recalls this very scene of terror at the mountain as something New Testament believers have not come to in the same way.",
     "q": "Read Exodus 20:1-17 and Hebrews 12:18-21 alongside today's chapter. What does the shift in the sabbath's stated reason, and the writer of Hebrews' later contrast, suggest about how the same law can be remembered differently across time without ceasing to be true?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The LORD made not this covenant with our fathers, but with us, even us, who are all of us here alive this day\" (v. 3) insists that inherited faith still has to become genuinely one's own.",
     "q": "Where in your own life has something you first received secondhand — from parents, teachers, or tradition — become something you would now describe as truly your own?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God himself wished for a heart in his people \"that they would fear me, and keep all my commandments always\" (v. 29), a longing aimed at the heart rather than mere outward behaviour.",
     "q": "Where might the Holy Spirit be inviting you, today, toward obedience that grows from the heart rather than from habit or obligation alone?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Israel heard God's voice \"out of the midst of the fire\" (v. 24) and knew, unmistakably, that they had heard the living God speak.",
     "q": "Spend a few minutes simply adoring God for who he is — the God who speaks, who is near, and whose voice this people once heard directly from the mountain."
    }
   ]
  }
 ]
},
// Day 367
{
 "ref": "Psalm 93",
 "tag": "Psalms & Wisdom",
 "api": "psalms+93",
 "sum": [
  "This short psalm opens by declaring that the LORD reigneth, clothed with majesty and strength, and that the world he has established cannot be moved.",
  "It reaches back to affirm that God's throne has been established of old, and that he himself is from everlasting.",
  "The psalm then pictures the floods lifting up their voice and their waves, yet insists that the LORD on high is mightier than the noise of many waters, even the mighty waves of the sea.",
  "It closes by turning from cosmic imagery to God's own reliable word, declaring his testimonies very sure, and holiness fitting for his house forever."
 ],
 "nug": [
  {
   "h": "A kingship announced before anything else is said",
   "b": "\"The LORD reigneth, he is clothed with majesty\" (v. 1) opens the psalm with no preamble at all — before any request or complaint, the single fact that governs everything else in the psalm is simply stated first."
  },
  {
   "h": "A world's stability tied directly to God's reign",
   "b": "\"The world also is stablished, that it cannot be moved\" (v. 1) grounds the earth's very steadiness not in its own nature but in the fact that the LORD who reigns over it cannot himself be shaken."
  },
  {
   "h": "A throne older than the psalm can even measure",
   "b": "\"Thy throne is established of old: thou art from everlasting\" (v. 2) reaches for a timescale beyond ordinary description, pairing God's throne with his own eternal existence rather than treating his rule as something recently begun."
  },
  {
   "h": "Chaos given a voice, and still found wanting",
   "b": "\"The floods have lifted up, O LORD, the floods have lifted up their voice; the floods lift up their waves\" (v. 3) grants the sea's roar real force and repetition — yet the very next verse answers it: \"The LORD on high is mightier than the noise of many waters\" (v. 4)."
  },
  {
   "h": "A psalm about the sea that ends at God's own house",
   "b": "\"Thy testimonies are very sure: holiness becometh thine house, O LORD, for ever\" (v. 5) shifts, in its final line, from the roaring sea to the quiet reliability of God's own word and the fitting holiness of the place where he dwells."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 1:2-10 · Mark 4:39-41",
   "qs": [
    {
     "th": "This psalm's picture of the LORD as mightier than the sea's mighty waves (v. 3-4) echoes God's original ordering of the waters in Genesis 1, and finds a strikingly direct fulfilment when Jesus himself rebukes the sea and it obeys him in Mark 4.",
     "q": "Read Genesis 1:2-10 and Mark 4:39-41 alongside this psalm. How does seeing Jesus command the very waves this psalm describes change the way you read verse 4?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The LORD on high is mightier than the noise of many waters\" (v. 4) sets God's quiet strength directly against whatever is loudest and most overwhelming.",
     "q": "What in your own life currently feels like a flood lifting up its voice, and what would it look like this week to remember that God is mightier than its noise?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm closes not with more noise but with quiet certainty: \"Thy testimonies are very sure\" (v. 5).",
     "q": "Where might the Holy Spirit be inviting you to trade anxious noise for quiet confidence in what God has already said?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The world also is stablished, that it cannot be moved\" (v. 1) rests entirely on God's steadiness, not our own.",
     "q": "Confess to God any place where you have been trying to hold something steady by your own strength instead of resting in his."
    }
   ]
  }
 ]
},
// Day 368
{
 "ref": "Deuteronomy 6",
 "tag": "Old Testament",
 "api": "deuteronomy+6",
 "sum": [
  "Moses gives the people the commandments, statutes, and judgments they are to do in the land, so that they, their children, and their children's children might fear the LORD all the days of their life and that their days might be prolonged.",
  "He delivers the great Shema, calling Israel to hear that the LORD their God is one LORD, and to love him with all their heart, soul, and might.",
  "He commands that these words be kept in the heart and taught diligently to children, spoken of constantly at home, on the road, lying down, and rising up, and even bound as signs and written on doorposts and gates.",
  "He warns that once settled in a good land they did not build, filled with houses, wells, vineyards, and olive trees they did not plant, Israel must beware lest they forget the LORD who brought them out of the house of bondage in Egypt."
 ],
 "nug": [
  {
   "h": "A single command holding the whole life of a nation",
   "b": "\"Hear, O Israel: The LORD our God is one LORD: And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might\" (v. 4-5) sets down, in one breath, both a theological claim about God's oneness and the total, undivided love that claim demands."
  },
  {
   "h": "Faith meant to fill ordinary moments rather than special ones",
   "b": "\"Thou shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up\" (v. 7) locates the teaching of God's words not in formal instruction alone but in the whole unremarkable rhythm of a day."
  },
  {
   "h": "A warning aimed specifically at prosperity, not hardship",
   "b": "\"When thou hast eaten and art full... Then beware lest thou forget the LORD\" (v. 11-12) names the danger not as scarcity but as abundance — houses, wells, and vineyards Israel did not build, dig, or plant, received as sheer gift and easily mistaken for self-made security."
  },
  {
   "h": "A specific, named test God's people had already failed once",
   "b": "\"Ye shall not tempt the LORD your God, as ye tempted him in Massah\" (v. 16) recalls, by name, a particular earlier failure — demanding proof of God's presence rather than trusting what he had already shown."
  },
  {
   "h": "An anticipated question answered before it's even asked",
   "b": "\"When thy son asketh thee in time to come, saying, What mean the testimonies... then thou shalt say unto thy son, We were Pharaoh's bondmen in Egypt; and the LORD brought us out\" (v. 20-21) has Moses scripting, in advance, exactly how this story is meant to be told to a child who was not there."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Mark 12:29-30 · Deuteronomy 8:12-14",
   "qs": [
    {
     "th": "The Shema of verses 4-5 is quoted almost word for word by Jesus himself as the first and great commandment in Mark 12:29-30, and the warning about forgetting God in prosperity here (v. 10-12) is echoed and expanded just two chapters later in Deuteronomy 8:12-14.",
     "q": "Read Mark 12:29-30 alongside verses 4-5 today. Why might Jesus, centuries later, still reach for this exact verse when asked to name the single greatest commandment?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt talk of them... when thou sittest in thine house, and when thou walkest by the way\" (v. 7) locates real teaching in ordinary, unplanned moments rather than only formal ones.",
     "q": "What ordinary moment in your own week — a car ride, a meal, a walk — could become a small, natural place to talk about faith with someone you love?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The warning here is aimed specifically at forgetting God once life is full and comfortable rather than difficult (v. 10-12).",
     "q": "Where might the Holy Spirit be prompting you to notice comfort or ease that has quietly let your dependence on God slip?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The land Israel is about to receive includes \"great and goodly cities, which thou buildedst not... wells digged, which thou diggedst not\" (v. 10-11) — entirely undeserved gift.",
     "q": "Give thanks today for specific good things in your own life that you did not build, earn, or plant yourself."
    }
   ]
  }
 ]
},
// Day 369
{
 "ref": "Luke 9",
 "tag": "New Testament",
 "api": "luke+9",
 "sum": [
  "Jesus sends out the twelve with power and authority over devils and to heal, and shortly after miraculously feeds a crowd of about five thousand from five loaves and two fishes.",
  "Peter confesses Jesus as the Christ of God, and Jesus responds by foretelling his own suffering, death, and resurrection, and by calling any who would follow him to deny themselves and take up their cross daily.",
  "Jesus is transfigured on the mountain before Peter, James, and John, his countenance altered and raiment glistering white, and a voice from the cloud declares him God's beloved Son and commands the disciples to hear him.",
  "Coming down the mountain, Jesus heals a boy the disciples could not deliver from an unclean spirit, and the chapter closes with a dispute among the disciples over who is greatest and several would-be followers meeting Jesus' sobering demands for total commitment."
 ],
 "nug": [
  {
   "h": "An impossible task handed to ordinary hands",
   "b": "\"Give ye them to eat\" (v. 13) has Jesus placing responsibility for feeding a crowd of thousands squarely on the disciples themselves, who can only answer, \"We have no more but five loaves and two fishes\" (v. 13) — the miracle beginning with their admitted insufficiency, not their sufficiency."
  },
  {
   "h": "A confession that changes everything that follows",
   "b": "\"Peter answering said, The Christ of God\" (v. 20) is the single sentence around which the whole chapter turns — immediately after it, Jesus begins speaking openly, for the first time, of his coming suffering and death."
  },
  {
   "h": "A daily cross rather than a single dramatic one",
   "b": "\"If any man will come after me, let him deny himself, and take up his cross daily, and follow me\" (v. 23) adds a word — daily — that Matthew and Mark's parallel accounts don't include, turning discipleship from one heroic moment into an ordinary, repeated choice."
  },
  {
   "h": "A mountaintop instinct to stay, quickly corrected",
   "b": "Peter's suggestion, \"Master, it is good for us to be here: and let us make three tabernacles\" (v. 33), is met almost immediately by a cloud and a voice: \"This is my beloved Son: hear him\" (v. 35) — the moment's glory not meant to be captured, but heard and obeyed."
  },
  {
   "h": "Greatness relocated to the very people easiest to overlook",
   "b": "After the disciples argue over \"which of them should be greatest\" (v. 46), Jesus sets a child beside him and answers, \"he that is least among you all, the same shall be great\" (v. 48) — status measured by the opposite standard the disciples were using."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 34:29-35 · Isaiah 53:3-5",
   "qs": [
    {
     "th": "The transfiguration's shining face (v. 29) recalls Moses' own face shining after meeting with God on the mountain in Exodus 34, while Jesus' first open prediction of suffering and rejection in this same chapter (v. 22) echoes the suffering servant described centuries earlier in Isaiah 53.",
     "q": "Read Exodus 34:29-35 and Isaiah 53:3-5 alongside today's chapter. Why might glory and suffering sit this close together in a single chapter of Luke's account of Jesus?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus calls his followers to take up their cross \"daily\" (v. 23), not as one dramatic act but as a repeated, ordinary choice.",
     "q": "What would taking up your cross daily look like this week, in the small, unremarkable choices rather than a single grand gesture?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"This is my beloved Son: hear him\" (v. 35) is the Father's own instruction at the moment of greatest glory — not marvel, but listen.",
     "q": "Where might the Holy Spirit be asking you simply to listen to Jesus today, rather than seeking a more dramatic experience of him?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The disciples could not cast the unclean spirit out of the boy, and his father cried, \"Master, I beseech thee, look upon my son: for he is mine only child\" (v. 38).",
     "q": "Bring before God today someone in your own life who needs the kind of desperate, specific intercession this father brought for his son."
    }
   ]
  }
 ]
},
// Day 370
{
 "ref": "Psalm 94",
 "tag": "Psalms & Wisdom",
 "api": "psalms+94",
 "sum": [
  "The psalm opens with an urgent appeal to the God of vengeance to show himself and rise up to judge the earth, rendering a reward to the proud.",
  "It describes the wicked oppressing widows, strangers, and the fatherless, and foolishly assuming that the LORD neither sees nor understands their deeds.",
  "The psalmist answers this folly directly, insisting that he who planted the ear must surely hear, and he who formed the eye must surely see, and declares that the LORD knows the thoughts of man, that they are vanity.",
  "The psalm turns to comfort, declaring the man blessed whom the LORD chastens and teaches, affirming that the LORD will not forsake his people, and closing with confidence that the LORD has been the psalmist's defence and refuge amid many anxious thoughts."
 ],
 "nug": [
  {
   "h": "A prayer that names God by a title rarely used elsewhere",
   "b": "\"O LORD God, to whom vengeance belongeth; O God, to whom vengeance belongeth, shew thyself\" (v. 1) addresses God directly by the very attribute the psalmist most needs right now — repeated twice, as if the psalmist needs to say it again to believe it."
  },
  {
   "h": "A folly answered with plain, almost obvious logic",
   "b": "\"He that planted the ear, shall he not hear? he that formed the eye, shall he not see?\" (v. 9) meets the wicked's assumption that God pays no attention with a simple argument from God's own workmanship — the maker of perception cannot himself lack it."
  },
  {
   "h": "Discipline described as a form of blessing",
   "b": "\"Blessed is the man whom thou chastenest, O LORD, and teachest him out of thy law\" (v. 12) names something most people would never instinctively call blessed, and calls it so anyway — correction reframed as evidence of God's teaching care rather than his displeasure."
  },
  {
   "h": "A promise stated as settled fact rather than hope",
   "b": "\"For the LORD will not cast off his people, neither will he forsake his inheritance\" (v. 14) moves from complaint to flat certainty mid-psalm, without any new evidence having been given — trust asserted simply because of who God has already shown himself to be."
  },
  {
   "h": "Comfort found precisely inside a multitude of anxious thoughts",
   "b": "\"In the multitude of my thoughts within me thy comforts delight my soul\" (v. 19) doesn't claim the anxious thoughts have stopped — only that God's comfort has found its way in among them, delighting the soul even while the thoughts remain many."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 12:5-11 · Romans 12:19",
   "qs": [
    {
     "th": "The psalmist's confidence that God will avenge wrong (v. 1-2) anticipates Paul's own instruction not to avenge ourselves but to leave room for God's wrath in Romans 12:19, while the psalm's description of blessed chastening (v. 12) is picked up and expanded at length in Hebrews 12:5-11.",
     "q": "Read Romans 12:19 and Hebrews 12:5-11 alongside today's psalm. How do these two connections together change the way you might respond both to being wronged and to being corrected?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"In the multitude of my thoughts within me thy comforts delight my soul\" (v. 19) doesn't wait for anxious thoughts to disappear before finding comfort.",
     "q": "Where in your own current multitude of anxious thoughts might you look, this week, for God's comfort to arrive even before the thoughts themselves quiet down?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Blessed is the man whom thou chastenest, O LORD, and teachest him out of thy law\" (v. 12) reframes correction as a form of teaching care.",
     "q": "Where might the Holy Spirit currently be teaching you through something that felt, at first, only like correction or difficulty?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening / silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The LORD is my defence; and my God is the rock of my refuge\" (v. 22) closes the psalm in settled quiet after its urgent opening cry.",
     "q": "Sit quietly for a few minutes, letting this closing confidence settle over whatever unresolved concern brought you to prayer today."
    }
   ]
  }
 ]
},
// Day 371
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A new year of reading beginning without ceremony",
   "b": "This week quietly opened a second year of daily reading with Deuteronomy 5's plain reminder that the covenant was made \"with us, even us, who are all of us here alive this day\" (Deuteronomy 5:3) — no fanfare, simply the same steady rhythm continuing exactly as before."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 5's renewed ten commandments and the people's own request for a mediator, Psalm 93's picture of the LORD mightier than the sea's mighty waves, Deuteronomy 6's great Shema and its call to teach children in the ordinary moments of the day, Luke 9's feeding of the five thousand, Peter's confession, and the transfiguration on the mountain, and Psalm 94's turn from an urgent cry for justice to quiet confidence in God as refuge.",
     "q": "Which moment from the week most challenged you — the call to \"love the LORD thy God with all thine heart, and with all thy soul, and with all thy might\" (Deuteronomy 6:5), or Jesus' call to \"take up his cross daily\" (Luke 9:23) — and why?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"The LORD is my defence; and my God is the rock of my refuge\" (Psalm 94:22) closed this week's reading in settled quiet.",
     "q": "Sit quietly for a few minutes and let that same quiet confidence settle over whatever you're carrying into the week ahead."
    }
   ]
  }
 ]
},
// Day 372
{
 "ref": "Deuteronomy 7",
 "tag": "Old Testament",
 "api": "deuteronomy+7",
 "sum": [
  "Moses warns Israel that when the LORD brings them into the land and casts out seven nations greater and mightier than themselves, they must utterly destroy them, make no covenant with them, and show them no mercy.",
  "He forbids intermarriage with these nations, warning that such marriages would turn Israel's children away from following the LORD to serve other gods, and commands that their altars, images, and groves be broken down and burned.",
  "He explains that Israel was not chosen for its size, since it was the fewest of all peoples, but simply because the LORD loved them and kept the oath sworn to their fathers, and he identifies the LORD as the faithful God who keeps covenant to a thousand generations.",
  "Moses reassures the people not to fear these nations despite their numbers, recalling what the LORD did to Pharaoh and Egypt, and promising that God will drive out the nations little by little, so that the land is not left desolate too quickly."
 ],
 "nug": [
  {
   "h": "A choice explained by explicitly ruling out the obvious reason",
   "b": "\"The LORD did not set his love upon you, nor choose you, because ye were more in number than any people; for ye were the fewest of all people\" (v. 7) rules out the very explanation anyone might expect, leaving only love and a kept oath as the actual reasons for Israel's election."
  },
  {
   "h": "Faithfulness given a number almost too large to picture",
   "b": "\"The faithful God, which keepeth covenant and mercy with them that love him and keep his commandments to a thousand generations\" (v. 9) stretches God's reliability across a span of time no single generation could ever witness for itself."
  },
  {
   "h": "A danger named specifically through family ties, not distant threat",
   "b": "\"Neither shalt thou make marriages with them... For they will turn away thy son from following me, that they may serve other gods\" (v. 3-4) locates the real danger not in open warfare but in the quiet, intimate influence of household and family."
  },
  {
   "h": "Courage grounded in remembered history, not present strength",
   "b": "\"Thou shalt not be afraid of them: but shalt well remember what the LORD thy God did unto Pharaoh, and unto all Egypt\" (v. 18) answers present fear not with a promise about the future alone but with a specific, already-witnessed act from the past."
  },
  {
   "h": "A conquest paced deliberately, not all at once",
   "b": "\"The LORD thy God will put out those nations before thee by little and little: thou mayest not consume them at once, lest the beasts of the field increase upon thee\" (v. 22) shows even divine victory given a measured, practical pace rather than instant completion."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 9:4-6 · Ephesians 1:4-5",
   "qs": [
    {
     "th": "Israel's election here is explicitly grounded in God's own love and oath rather than any merit of their own (v. 7-8), a point Moses will drive home even more bluntly two chapters from now in Deuteronomy 9:4-6, and one that Paul echoes when describing believers as chosen in Christ before the foundation of the world in Ephesians 1:4-5.",
     "q": "Read Deuteronomy 9:4-6 and Ephesians 1:4-5 alongside today's chapter. How does being chosen for reasons entirely outside your own merit or size change the way you might carry that identity?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The LORD thy God will put out those nations before thee by little and little\" (v. 22) shows even God's own victories unfolding gradually rather than instantly.",
     "q": "Where in your own life are you waiting for something to happen all at once that God may actually be doing little by little?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The real danger named in this chapter comes through close, familiar relationships rather than distant, obvious threats (v. 3-4).",
     "q": "Where might the Holy Spirit be prompting you to examine a close relationship or influence you haven't thought to question?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Israel is warned against being drawn, quietly and gradually, toward gods that are not the LORD (v. 4).",
     "q": "Confess to God anything in your own life that has quietly begun competing for the place that belongs to him alone."
    }
   ]
  }
 ]
},
// Day 373
{
 "ref": "Deuteronomy 8",
 "tag": "Old Testament",
 "api": "deuteronomy+8",
 "sum": [
  "Moses instructs Israel to remember the whole forty years of wilderness wandering, during which God humbled them, tested them, let them hunger, and then fed them with manna, a food neither they nor their fathers had known.",
  "He explains the purpose of this testing was to teach Israel that man does not live by bread alone but by every word that proceeds from the mouth of the LORD, and notes that their clothing did not wear out nor their feet swell across those forty years.",
  "He describes the good land they are entering, one of wheat, barley, vines, fig trees, pomegranates, olive oil, and honey, where they will eat bread without scarceness and lack nothing, and calls them to bless the LORD for it.",
  "He warns urgently against the danger of forgetting God once settled and prosperous, against saying in the heart, My power and the might of mine hand hath gotten me this wealth, and reminds them it is the LORD who gives power to get wealth, in order to establish his covenant."
 ],
 "nug": [
  {
   "h": "Hunger used deliberately, before being relieved",
   "b": "\"He... suffered thee to hunger, and fed thee with manna\" (v. 3) has the hardship itself named as intentional, not incidental — the hunger allowed to be felt fully before the provision arrived, so that the provision's source could not be mistaken."
  },
  {
   "h": "A truth about bread that reaches far beyond bread",
   "b": "\"Man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD doth man live\" (v. 3) turns forty years of literal, physical feeding into a lesson about a hunger no amount of bread could ever satisfy."
  },
  {
   "h": "An unglamorous miracle easy to overlook",
   "b": "\"Thy raiment waxed not old upon thee, neither did thy foot swell, these forty years\" (v. 4) names a sustained, ordinary preservation across four decades — not dramatic in the moment, yet remarkable when finally counted up."
  },
  {
   "h": "Fullness identified as the actual danger, not scarcity",
   "b": "\"When thou hast eaten and art full... Beware that thou forget not the LORD thy God\" (v. 10-11) locates the real spiritual risk precisely at the point of satisfaction and comfort, not at the point of need."
  },
  {
   "h": "A claim to self-made wealth explicitly forbidden in advance",
   "b": "\"Thou say in thine heart, My power and the might of mine hand hath gotten me this wealth. But thou shalt remember the LORD thy God: for it is he that giveth thee power to get wealth\" (v. 17-18) names the exact sentence Israel must never let itself say, and supplies the corrective thought to replace it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 4:1-4 · Proverbs 30:8-9",
   "qs": [
    {
     "th": "Jesus himself quotes verse 3 word for word when tempted in the wilderness to turn stones into bread in Matthew 4:1-4, and Agur's prayer in Proverbs 30:8-9 asks specifically to be given neither poverty nor riches, for fear that riches would lead to exactly the forgetting this chapter warns against.",
     "q": "Read Matthew 4:1-4 and Proverbs 30:8-9 alongside today's chapter. What do these two very different moments — one temptation resisted, one prayer offered in advance — suggest about guarding against the danger this chapter names?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"When thou hast eaten and art full... Beware that thou forget not the LORD thy God\" (v. 10-11) names comfort, not hardship, as the greater spiritual danger.",
     "q": "Where in your own life has comfort or sufficiency made it easier, rather than harder, to forget your dependence on God?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Man doth not live by bread only, but by every word that proceedeth out of the mouth of the LORD\" (v. 3) points to a hunger deeper than the physical.",
     "q": "Where might the Holy Spirit be pointing today to a hunger in you that only God's own word can actually satisfy?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The land promised is described in rich, specific detail — \"wheat, and barley, and vines, and fig trees, and pomegranates; a land of oil olive, and honey\" (v. 8).",
     "q": "Give thanks today for specific, tangible good things God has provided in your own life, naming them as particularly as this verse names its land."
    }
   ]
  }
 ]
},
// Day 374
{
 "ref": "Psalm 96",
 "tag": "Psalms & Wisdom",
 "api": "psalms+96",
 "sum": [
  "The psalm calls all the earth to sing unto the LORD a new song, to bless his name, and to show forth his salvation from day to day.",
  "It commands God's glory and wonders to be declared among the nations and all peoples, since the LORD is great and greatly to be praised, while the gods of the peoples are mere idols, though the LORD made the heavens.",
  "It calls the families of the peoples to give unto the LORD glory and strength, to bring an offering, and to worship him in the beauty of holiness, and declares that he shall judge the world with righteousness and the people with his truth.",
  "The psalm closes by summoning creation itself to rejoice, the heavens, the earth, the sea, the field, and the trees of the wood, all invited to be glad before the LORD as he comes to judge the earth."
 ],
 "nug": [
  {
   "h": "A song called new though the God being sung of is not",
   "b": "\"O sing unto the LORD a new song: sing unto the LORD, all the earth\" (v. 1) calls for freshness in worship of a God whose character never changes — the newness belonging to the song, not to who is being praised."
  },
  {
   "h": "Praise assigned deliberately beyond Israel's own borders",
   "b": "\"Declare his glory among the heathen, his wonders among all people\" (v. 3) sends worship of the LORD outward, to nations who had no part in Israel's own history, well before any New Testament command to make disciples of all nations."
  },
  {
   "h": "A blunt verdict on every rival claim to worship",
   "b": "\"All the gods of the nations are idols: but the LORD made the heavens\" (v. 5) offers no lengthy argument, only a stark contrast — the difference between something made and the one who made everything."
  },
  {
   "h": "Worship required from ordinary households, not only priests",
   "b": "\"Give unto the LORD, O ye kindreds of the people, give unto the LORD glory and strength\" (v. 7) addresses whole family groups directly, expecting worship from the household level, not from religious specialists alone."
  },
  {
   "h": "All creation summoned to a single celebration",
   "b": "\"Let the heavens rejoice, and let the earth be glad; let the sea roar... let the field be joyful... then shall all the trees of the wood rejoice\" (v. 11-12) draws sky, land, sea, field, and forest all into one shared act of praise, as if the whole created order has been waiting for this."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Revelation 5:9-10 · Matthew 28:18-19",
   "qs": [
    {
     "th": "The psalm's call to declare God's glory \"among the heathen... among all people\" (v. 3) anticipates both the Great Commission's send to all nations in Matthew 28:18-19 and the vision in Revelation 5:9-10 of a redeemed multitude gathered out of every kindred, tongue, and nation.",
     "q": "Read Matthew 28:18-19 and Revelation 5:9-10 alongside today's psalm. How does seeing this ancient call to the nations fulfilled centuries later change the way you read verse 3?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Sing unto the LORD, bless his name; shew forth his salvation from day to day\" (v. 2) calls for praise renewed daily, not only on special occasions.",
     "q": "What would it look like for you to actually shew forth God's goodness from day to day this week, in ordinary conversation rather than only in formal worship?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"All the gods of the nations are idols: but the LORD made the heavens\" (v. 5) draws a sharp line between the true God and every substitute.",
     "q": "Where might the Holy Spirit be showing you a quiet substitute for God that has been claiming worship it was never entitled to?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm summons the \"kindreds of the people\" (v. 7) and \"all the earth\" (v. 1) to worship the LORD.",
     "q": "Intercede today for people and nations far from your own who have not yet come to declare God's glory as this psalm calls them to."
    }
   ]
  }
 ]
},
// Day 375
{
 "ref": "Deuteronomy 9",
 "tag": "Old Testament",
 "api": "deuteronomy+9",
 "sum": [
  "Moses warns Israel, as they prepare to cross Jordan against nations greater and mightier than themselves, not to imagine that the LORD is bringing them in because of their own righteousness, since it is for the wickedness of these nations that God drives them out, and because Israel is in fact a stiffnecked people.",
  "He recounts at length how, even while he was on the mountain receiving the tablets of stone, the people had already corrupted themselves and made a molten calf, provoking the LORD to threaten their destruction.",
  "Moses recalls his own desperate intercession, falling down before the LORD forty days and nights, and his angry destruction of the golden calf, grinding it very small and casting its dust into the brook.",
  "He closes by reminding Israel of repeated provocations, at Taberah, Massah, Kibroth-hattaavah, and Kadesh-barnea, summarizing bluntly that they have been rebellious against the LORD from the very day he first knew them."
 ],
 "nug": [
  {
   "h": "A reason for victory explicitly not credited to Israel",
   "b": "\"Speak not thou in thine heart... saying, For my righteousness the LORD hath brought me in to possess this land: but for the wickedness of these nations the LORD doth drive them out\" (v. 4) removes any ground for pride before Israel has even entered, replacing self-congratulation with a sober correction."
  },
  {
   "h": "A blunt label applied without softening",
   "b": "\"Understand therefore, that the LORD thy God giveth thee not this good land to possess it for thy righteousness; for thou art a stiffnecked people\" (v. 6) states the people's character as flatly as possible, immediately after promising them the land — grace and honest assessment given in the very same breath."
  },
  {
   "h": "A sin recalled in painful, specific detail",
   "b": "\"Ye had sinned against the LORD your God, and had made you a molten calf, and had turned aside quickly out of the way which the LORD had commanded you\" (v. 16) has Moses naming the failure precisely, not vaguely — quickly, and out of the very way just commanded."
  },
  {
   "h": "Intercession measured not in minutes but in weeks",
   "b": "\"I fell down before the LORD, as at the first, forty days and forty nights: I did neither eat bread, nor drink water\" (v. 18) shows the cost of standing between a sinning people and God's anger — sustained, total, and physically exhausting."
  },
  {
   "h": "A rebellion summarized as constant rather than occasional",
   "b": "\"Ye have been rebellious against the LORD from the day that I knew you\" (v. 24) closes the chapter's catalogue of failures with a single sweeping verdict, covering the entire relationship rather than any one incident."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 32:19-20 · Romans 3:20-24",
   "qs": [
    {
     "th": "Moses' retelling here of the golden calf's destruction closely follows Exodus 32:19-20, though now recalled decades later to a new generation as a warning rather than as it happened, and Israel's own inability to claim righteousness as the basis for God's favour (v. 4-6) anticipates Paul's later argument in Romans 3:20-24 that no one is justified by their own works.",
     "q": "Read Exodus 32:19-20 and Romans 3:20-24 alongside today's chapter. How does Israel's stiffnecked history here shape the way you understand grace received apart from earned righteousness?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses interceded \"forty days and forty nights\" for a people who did not ask him to and may not even have known he was doing it (v. 18).",
     "q": "Who in your own life might need this kind of sustained, unseen intercession from you right now?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Speak not thou in thine heart... For my righteousness the LORD hath brought me in\" (v. 4) warns against a quiet, easy pride that can creep in even at the moment of blessing.",
     "q": "Where might the Holy Spirit be exposing a quiet assumption that you have earned or deserved a good thing God has actually given as gift?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening / silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Ye have been rebellious against the LORD from the day that I knew you\" (v. 24) is a hard sentence to sit with honestly.",
     "q": "Sit quietly for a few minutes and let this chapter's honesty about Israel's history invite honest reflection on your own, without rushing to explain it away."
    }
   ]
  }
 ]
},
// Day 376
{
 "ref": "Luke 10",
 "tag": "New Testament",
 "api": "luke+10",
 "sum": [
  "Jesus appoints seventy others and sends them out two by two ahead of him, telling them the harvest is great but the labourers few, and instructing them to travel light, offer peace, heal the sick, and pronounce judgment on towns that reject them.",
  "The seventy return with joy, reporting that even the devils were subject to them through Jesus' name, and Jesus responds that he beheld Satan as lightning fall from heaven, yet tells them to rejoice rather that their names are written in heaven.",
  "A lawyer tests Jesus by asking what he must do to inherit eternal life, and after he correctly names loving God and neighbour, he asks who his neighbour is, prompting Jesus to tell the parable of the good Samaritan who showed mercy to a wounded stranger while a priest and Levite passed by.",
  "Jesus visits the home of Martha and Mary, where Martha is cumbered with much serving while Mary sits at Jesus' feet listening to his word, and Jesus gently tells Martha that Mary has chosen the good part, which shall not be taken from her."
 ],
 "nug": [
  {
   "h": "A workforce described as too small before the work even begins",
   "b": "\"The harvest truly is great, but the labourers are few: pray ye therefore the Lord of the harvest, that he would send forth labourers into his harvest\" (v. 2) frames the mission's first need as prayer for more workers, not immediate strategy for the ones already sent."
  },
  {
   "h": "A moment of joy quietly redirected",
   "b": "When the seventy return rejoicing that even devils are subject to them, Jesus answers, \"Notwithstanding in this rejoice not, that the spirits are subject unto you; but rather rejoice, because your names are written in heaven\" (v. 20) — their success reframed toward a deeper, more secure ground for joy."
  },
  {
   "h": "A question asked to avoid its own obvious answer",
   "b": "The lawyer, \"willing to justify himself, said unto Jesus, And who is my neighbour?\" (v. 29) — a question whose real aim, Luke notes plainly, was self-justification rather than genuine inquiry."
  },
  {
   "h": "Mercy shown by the one least expected to show it",
   "b": "\"A certain Samaritan, as he journeyed, came where he was: and when he saw him, he had compassion on him\" (v. 33) has compassion arrive from the one figure in the story a first-century Jewish audience would least expect to be its hero."
  },
  {
   "h": "One thing named as needful among many good things offered",
   "b": "\"Martha, Martha, thou art careful and troubled about many things: But one thing is needful: and Mary hath chosen that good part, which shall not be taken away from her\" (v. 41-42) doesn't condemn Martha's serving, only names something Mary has rightly prioritized above it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 19:18 · Deuteronomy 6:5 · James 2:8",
   "qs": [
    {
     "th": "The lawyer's summary of the law in verse 27 combines Deuteronomy 6:5's command to love God with Leviticus 19:18's command to love neighbour, a pairing James later calls the royal law in James 2:8.",
     "q": "Read Leviticus 19:18, Deuteronomy 6:5, and James 2:8 alongside today's chapter. Why might Jesus let the lawyer name the answer himself rather than simply giving it to him, and what does the parable that follows add to a command the lawyer already knew?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Martha was \"cumbered about much serving\" (v. 40) with good, necessary tasks, yet Jesus points her toward something she was missing.",
     "q": "Where in your own life might busyness with good and necessary things be quietly crowding out the one thing that's actually needful?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The priest and Levite \"passed by on the other side\" (v. 31-32) of the wounded man, while the Samaritan stopped.",
     "q": "Where might the Holy Spirit be nudging you toward someone you've been tempted to pass by on the other side?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening / silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Mary... sat at Jesus' feet, and heard his word\" (v. 39), choosing stillness over activity in that moment.",
     "q": "Sit quietly for a few minutes today, following Mary's example, simply listening rather than doing or asking for anything."
    }
   ]
  }
 ]
},
// Day 377
{
 "ref": "Psalm 97",
 "tag": "Psalms & Wisdom",
 "api": "psalms+97",
 "sum": [
  "The psalm declares that the LORD reigneth, calling the earth to rejoice and the multitude of isles to be glad, while describing clouds and darkness round about him, with righteousness and judgment as the foundation of his throne.",
  "It pictures a fire going before him that burns up his enemies round about, his lightnings lighting the world so that the earth sees and trembles, and the hills melting like wax at the presence of the LORD.",
  "It declares the heavens to have declared his righteousness, all people to have seen his glory, and confounds all who worship graven images and boast of idols, while calling all gods to worship him.",
  "The psalm closes by calling those who love the LORD to hate evil, celebrating that light is sown for the righteous and gladness for the upright in heart, and calling the righteous to rejoice in the LORD and give thanks at the remembrance of his holiness."
 ],
 "nug": [
  {
   "h": "A reign celebrated before it is explained",
   "b": "\"The LORD reigneth; let the earth rejoice; let the multitude of isles be glad\" (v. 1) opens with a call to celebration that reaches even to distant, scattered isles, before the psalm has said anything else about what that reign involves."
  },
  {
   "h": "A throne built on something more than power",
   "b": "\"Righteousness and judgment are the habitation of his throne\" (v. 2) names not strength or majesty as the throne's actual foundation, but righteousness and justice — the character of the rule, not merely its authority."
  },
  {
   "h": "Even mountains given a reaction to God's presence",
   "b": "\"The hills melted like wax at the presence of the LORD, at the presence of the LORD of the whole earth\" (v. 5) pictures the most solid, immovable features of the landscape responding to God as if they were nothing more substantial than wax near flame."
  },
  {
   "h": "A confusion pronounced on every rival claim to worship",
   "b": "\"Confounded be all they that serve graven images, that boast themselves of idols\" (v. 7) turns from cosmic imagery to a direct verdict on those who trust in what human hands have made instead of the God who made the hills that melt before him."
  },
  {
   "h": "Light described as something planted, not merely switched on",
   "b": "\"Light is sown for the righteous, and gladness for the upright in heart\" (v. 11) uses the language of planting and eventual harvest rather than instant illumination — light and gladness pictured as something already growing, even before it is fully seen."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 19:16-18 · Habakkuk 3:3-6",
   "qs": [
    {
     "th": "This psalm's imagery of clouds, darkness, fire, and trembling hills at God's presence (v. 2-5) closely recalls the scene at Sinai in Exodus 19:16-18, and Habakkuk's own vision of God's coming in Habakkuk 3:3-6 uses strikingly similar language centuries later.",
     "q": "Read Exodus 19:16-18 and Habakkuk 3:3-6 alongside today's psalm. What does it suggest that this same set of images — cloud, fire, trembling earth — recurs across Scripture whenever God's presence is described?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Ye that love the LORD, hate evil\" (v. 10) links love for God directly to a genuine hatred of what is wrong, not merely tolerance of it.",
     "q": "Is there evil in your own life or habits that your love for God should be shaping you to hate more honestly than you currently do?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Light is sown for the righteous, and gladness for the upright in heart\" (v. 11) pictures gladness as something already planted, waiting to grow.",
     "q": "Where might the Holy Spirit already be growing gladness in you that you haven't yet noticed or named?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm calls the righteous to \"rejoice in the LORD... and give thanks at the remembrance of his holiness\" (v. 12).",
     "q": "Spend a few minutes simply adoring God for his holiness, letting this psalm's own closing words shape your prayer."
    }
   ]
  }
 ]
},
// Day 378
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A calf's destruction recalled in almost obsessive detail",
   "b": "Moses' account of grinding the golden calf \"very small, even until it was as small as dust\" (Deuteronomy 9:21) lingers over the idol's total, thorough destruction — as if no fragment of it could be allowed to remain."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 7's warning against compromise with the nations and its reminder that Israel was chosen for love rather than size, Deuteronomy 8's call to remember manna in the wilderness and beware forgetting God in prosperity, Psalm 96's summons to declare God's glory among all nations, Deuteronomy 9's honest retelling of the golden calf and Moses' forty-day intercession, Luke 10's sending of the seventy, the parable of the good Samaritan, and Mary and Martha, and Psalm 97's picture of the LORD's reign and righteous throne.",
     "q": "Which moment from the week most challenged you — Moses' warning not to say \"my power... hath gotten me this wealth\" (Deuteronomy 8:17), or the Samaritan's compassion for a stranger who \"passed by on the other side\" would have been so much easier (Luke 10:31-33)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"One thing is needful: and Mary hath chosen that good part, which shall not be taken away from her\" (Luke 10:42).",
     "q": "Sit quietly for a few minutes today, choosing, like Mary, simply to be still before God rather than to do anything further."
    }
   ]
  }
 ]
},
// Day 379
{
 "ref": "Deuteronomy 10",
 "tag": "Old Testament",
 "api": "deuteronomy+10",
 "sum": [
  "Moses recalls being commanded to hew two new tables of stone like the first, and to make an ark of wood, after which the LORD again wrote the ten commandments on the tables and Moses placed them in the ark he had made.",
  "He briefly recounts the journey onward, the death of Aaron and Eleazar's succession as priest, and the setting apart of the tribe of Levi to bear the ark, stand before the LORD, minister to him, and bless in his name, having no inheritance among their brethren.",
  "Moses recalls his own second forty-day intercession and the LORD's decision not to destroy Israel, then turns to press the people with a direct question about what the LORD their God actually requires of them.",
  "He calls Israel to circumcise the foreskin of their heart, describes the LORD as God of gods who shows no partiality, who executes justice for the fatherless and widow and loves the stranger, and commands Israel to love the stranger themselves, since they too were once strangers in Egypt."
 ],
 "nug": [
  {
   "h": "A question that gathers the whole law into one sentence",
   "b": "\"And now, Israel, what doth the LORD thy God require of thee, but to fear the LORD thy God, to walk in all his ways, and to love him, and to serve the LORD thy God with all thy heart and with all thy soul\" (v. 12) compresses everything Moses has been teaching into a single, direct question and answer."
  },
  {
   "h": "A surgical image applied to the heart rather than the body",
   "b": "\"Circumcise therefore the foreskin of your heart, and be no more stiffnecked\" (v. 16) takes a physical sign of the covenant and applies its language inward, demanding an inner change that no outward rite by itself could accomplish."
  },
  {
   "h": "Impartiality named as a defining feature of God himself",
   "b": "\"The LORD your God is God of gods, and Lord of lords, a great God, a mighty, and a terrible, which regardeth not persons, nor taketh reward\" (v. 17) places impartiality in the very same sentence as God's supreme greatness and power, as though the two belong together."
  },
  {
   "h": "Justice for the powerless described as something God actively does",
   "b": "\"He doth execute the judgment of the fatherless and widow, and loveth the stranger, in giving him food and raiment\" (v. 18) presents God not merely as sympathetic toward the vulnerable but as actively working justice and provision on their behalf."
  },
  {
   "h": "A command grounded in Israel's own remembered experience",
   "b": "\"Love ye therefore the stranger: for ye were strangers in the land of Egypt\" (v. 19) roots the command not in abstract principle but in Israel's own lived memory of what it felt like to be foreign and vulnerable themselves."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Micah 6:8 · Romans 2:28-29 · Jeremiah 4:4",
   "qs": [
    {
     "th": "Moses' summary question in verse 12 anticipates Micah's own famous summary of what the LORD requires in Micah 6:8, while the call to circumcise the heart (v. 16) is picked up again by Jeremiah in Jeremiah 4:4 and reframed by Paul as true circumcision of the heart in Romans 2:28-29.",
     "q": "Read Micah 6:8, Jeremiah 4:4, and Romans 2:28-29 alongside today's chapter. How does seeing this same call to inward transformation echoed across centuries of Scripture shape how seriously you take it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Love ye therefore the stranger: for ye were strangers in the land of Egypt\" (v. 19) grounds compassion in remembered personal experience.",
     "q": "What experience of your own — of feeling out of place, needy, or unwelcome — might God be inviting you to let shape how you treat someone in a similar position now?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Circumcise therefore the foreskin of your heart, and be no more stiffnecked\" (v. 16) calls for an inward change no outward ritual alone could produce.",
     "q": "Where might the Holy Spirit be asking to do inward work in you that mere outward compliance has never actually reached?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "God \"regardeth not persons, nor taketh reward\" (v. 17) and actively executes justice for the fatherless, widow, and stranger (v. 18).",
     "q": "Give thanks today for God's impartial justice and care for the vulnerable, naming specific ways you have seen or experienced it."
    }
   ]
  }
 ]
},
// Day 380
{
 "ref": "Deuteronomy 11",
 "tag": "Old Testament",
 "api": "deuteronomy+11",
 "sum": [
  "Moses calls Israel to love the LORD and keep his charge, statutes, judgments, and commandments always, appealing not to those who never saw God's mighty acts but to this very generation who had witnessed his works in Egypt and the wilderness with their own eyes.",
  "He contrasts the promised land with Egypt, describing it not as a land watered by foot like a garden of herbs but as a land of hills and valleys that drinks water of the rain of heaven, a land the eyes of the LORD are continually upon from the beginning of the year to its end.",
  "He renews the call to lay up these words in heart and soul, to teach them diligently to children, to speak of them constantly, and to bind and write them as signs, promising that obedience will bring rain in due season and abundant harvest while disobedience will shut up the heavens.",
  "The chapter closes by setting before Israel a blessing and a curse, the blessing if they obey and the curse if they turn aside, with the blessing to be pronounced on Mount Gerizim and the curse on Mount Ebal once they enter the land."
 ],
 "nug": [
  {
   "h": "An appeal made specifically to eyewitnesses, not secondhand hearers",
   "b": "\"I speak not with your children which have not known, and which have not seen the chastisement of the LORD your God... But your eyes have seen all the great acts of the LORD which he did\" (v. 2, 7) deliberately addresses this exact generation as people who witnessed these things themselves, sharpening their responsibility to respond."
  },
  {
   "h": "A land described by its dependence rather than its convenience",
   "b": "\"The land, whither ye go to possess it, is not as the land of Egypt... But the land, whither ye go to possess it, is a land of hills and valleys, and drinketh water of the rain of heaven\" (v. 10-11) trades Egypt's self-sufficient irrigation for a land that requires ongoing, trusting dependence on God for rain."
  },
  {
   "h": "A whole year's attention promised to a single land",
   "b": "\"A land which the LORD thy God careth for: the eyes of the LORD thy God are always upon it, from the beginning of the year even unto the end of the year\" (v. 12) describes not occasional divine attention but constant, year-round watchfulness over this particular place."
  },
  {
   "h": "Weather itself tied directly to covenant faithfulness",
   "b": "\"I will give you the rain of your land in his due season... that thou mayest gather in thy corn... take heed to yourselves, that... the LORD's wrath be kindled against you, and he shut up the heaven, that there be no rain\" (v. 14, 16-17) links Israel's obedience directly to something as ordinary and essential as seasonal rainfall."
  },
  {
   "h": "Two mountains chosen to make a choice visible and physical",
   "b": "\"Thou shalt put the blessing upon mount Gerizim, and the curse upon mount Ebal\" (v. 29) turns an abstract choice between obedience and disobedience into something Israel could literally stand between and see with their own eyes once they crossed into the land."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joshua 8:33-35 · Galatians 3:10-13",
   "qs": [
    {
     "th": "The blessing and curse set on Gerizim and Ebal here (v. 26-29) is literally carried out once Israel enters the land in Joshua 8:33-35, and Paul later draws directly on this same blessing-and-curse language when explaining redemption from the law's curse in Galatians 3:10-13.",
     "q": "Read Joshua 8:33-35 and Galatians 3:10-13 alongside today's chapter. How does tracing this blessing-and-curse pattern from Deuteronomy through Joshua to Galatians change how you understand what Christ has done?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Israel is reminded that \"your eyes have seen all the great acts of the LORD\" (v. 7), appealing to their own lived experience rather than secondhand report.",
     "q": "What have your own eyes actually seen of God's faithfulness in your life, and how might remembering it specifically strengthen your obedience today?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The land is described as one requiring ongoing, trusting dependence on rain from heaven rather than self-sufficient irrigation (v. 10-11).",
     "q": "Where might the Holy Spirit be inviting you into a similar posture of dependence, rather than relying on your own sufficiency?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The eyes of the LORD thy God are always upon it, from the beginning of the year even unto the end of the year\" (v. 12) describes God's constant attentive care.",
     "q": "Intercede today for someone whose situation feels far from settled, trusting that God's attentive care extends over the whole of their year, not just this moment."
    }
   ]
  }
 ]
},
// Day 381
{
 "ref": "Psalm 98",
 "tag": "Psalms & Wisdom",
 "api": "psalms+98",
 "sum": [
  "The psalm opens by calling for a new song to the LORD, since he has done marvellous things, his right hand and holy arm having gotten him the victory.",
  "It declares that the LORD has made known his salvation and openly shown his righteousness in the sight of the heathen, remembering his mercy and truth toward the house of Israel, so that all the ends of the earth have seen the salvation of God.",
  "It calls all the earth to make a joyful noise, to sing praise with the harp, trumpets, and cornet, and to make a joyful noise before the LORD, the King.",
  "The psalm closes by summoning the sea and all it contains, the world and those who dwell in it, to roar their praise, with floods clapping their hands and hills singing together before the LORD, who comes to judge the earth with righteousness and the people with equity."
 ],
 "nug": [
  {
   "h": "Victory credited to a specific, named strength",
   "b": "\"O sing unto the LORD a new song; for he hath done marvellous things: his right hand, and his holy arm, hath gotten him the victory\" (v. 1) attributes the victory not to circumstance or Israel's own effort but explicitly to God's own hand and arm."
  },
  {
   "h": "Salvation announced openly rather than kept private",
   "b": "\"The LORD hath made known his salvation: his righteousness hath he openly shewed in the sight of the heathen\" (v. 2) insists this salvation was never meant to stay hidden — shown deliberately where outside nations could see it."
  },
  {
   "h": "An orchestra of instruments assembled for one purpose",
   "b": "\"Sing unto the LORD with the harp; with the harp, and the voice of a psalm. With trumpets and sound of cornet make a joyful noise before the LORD, the King\" (v. 5-6) piles up instrument after instrument, as if ordinary singing alone couldn't hold the scale of praise called for."
  },
  {
   "h": "Nature given hands and a voice it doesn't literally have",
   "b": "\"Let the floods clap their hands: let the hills be joyful together\" (v. 8) hands physical actions to rivers and mountains, imagining all creation as capable participants in praise rather than a silent backdrop to it."
  },
  {
   "h": "Judgment placed inside a psalm otherwise full of celebration",
   "b": "\"He shall judge the world with righteousness, and the people with equity\" (v. 9) closes a psalm about marvellous salvation with the LORD's coming judgment, treating that judgment itself as good news worth singing about."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 52:10 · Luke 2:29-32",
   "qs": [
    {
     "th": "The psalm's declaration that \"all the ends of the earth have seen the salvation of our God\" (v. 3) closely echoes Isaiah 52:10, and Simeon later quotes this very theme almost directly when he holds the infant Jesus and speaks of a salvation prepared \"before the face of all people\" in Luke 2:29-32.",
     "q": "Read Isaiah 52:10 and Luke 2:29-32 alongside today's psalm. How does hearing Simeon's words echo this psalm's language change how you read verse 3?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The LORD hath made known his salvation: his righteousness hath he openly shewed\" (v. 2) describes salvation meant to be seen, not hidden.",
     "q": "Where in your own life has God's goodness been visible to others, whether or not you've thought to name it that way?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm calls for a joyful noise \"with the harp... with trumpets and sound of cornet\" (v. 5-6), full, unrestrained praise.",
     "q": "Where might the Holy Spirit be inviting you toward more genuine, less restrained joy in your praise today?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"He hath done marvellous things: his right hand, and his holy arm, hath gotten him the victory\" (v. 1) gives a simple, direct reason for adoration.",
     "q": "Spend a few minutes adoring God specifically for marvellous things he has done, naming them as this psalm does."
    }
   ]
  }
 ]
},
// Day 382
{
 "ref": "Deuteronomy 12",
 "tag": "Old Testament",
 "api": "deuteronomy+12",
 "sum": [
  "Moses commands Israel to utterly destroy every place where the nations they dispossess have served their gods, breaking down altars, images, and groves, and burning their graven images, so that even the names of those gods are destroyed.",
  "He forbids Israel from worshipping the LORD in the same scattered, self-directed way, insisting they must seek only the one place the LORD will choose out of all their tribes to put his name there, bringing their offerings and sacrifices only to that place.",
  "He contrasts this with the freedom to eat ordinary meat within their own gates as they desire, according to the blessing given them, while still forbidding the eating of blood, since the blood is the life and must not be eaten with the flesh.",
  "The chapter closes with a warning against being ensnared by inquiring how the nations served their gods in order to imitate it, and a firm command neither to add to nor diminish from what the LORD has commanded."
 ],
 "nug": [
  {
   "h": "Idolatry pursued to the point of erasing even the memory of names",
   "b": "\"Ye shall overthrow their altars... and destroy the names of them out of that place\" (v. 3) goes beyond destroying physical objects to eliminating even the names once associated with false worship, a thoroughness meant to leave nothing behind to tempt future generations."
  },
  {
   "h": "Worship deliberately centralized rather than left to individual preference",
   "b": "\"Ye shall not do after all the things that we do here this day, every man whatsoever is right in his own eyes\" (v. 8) names, almost in passing, the very danger the book of Judges will later describe at length — worship shaped by personal preference rather than God's own instruction."
  },
  {
   "h": "A single chosen place named as where God's own name would dwell",
   "b": "\"Unto the place which the LORD your God shall choose out of all your tribes to put his name there... thither thou shalt come\" (v. 5) ties Israel's worship to a specific location God himself would designate, not one Israel could pick for itself."
  },
  {
   "h": "A single, striking exception carved out of everyday freedom",
   "b": "\"Only be sure that thou eat not the blood: for the blood is the life; and thou mayest not eat the life with the flesh\" (v. 23) allows wide freedom in ordinary eating while marking blood as uniquely set apart, tied to the very concept of life itself."
  },
  {
   "h": "A command against both addition and subtraction",
   "b": "\"What thing soever I command you, observe to do it: thou shalt not add thereto, nor diminish from it\" (v. 32) guards God's instruction on both ends at once — neither padded with extra requirements nor quietly trimmed down."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Judges 17:6 · John 4:20-24 · Revelation 22:18-19",
   "qs": [
    {
     "th": "The warning against \"every man whatsoever is right in his own eyes\" (v. 8) is echoed almost word for word as the summary verdict on the whole era of Judges in Judges 17:6, while Jesus later tells the Samaritan woman that true worship will no longer depend on one physical place at all in John 4:20-24, and the closing warning against adding or diminishing (v. 32) is echoed in the very last words of Scripture in Revelation 22:18-19.",
     "q": "Read Judges 17:6, John 4:20-24, and Revelation 22:18-19 alongside today's chapter. How does tracing this single command — one chosen place for worship — across such different moments in Scripture shape your understanding of what changed, and what didn't, in Christ?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Ye shall not do... every man whatsoever is right in his own eyes\" (v. 8) warns against shaping worship purely by personal preference.",
     "q": "Where in your own spiritual life might personal preference have quietly taken the place of following what God has actually instructed?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt not add thereto, nor diminish from it\" (v. 32) calls for careful faithfulness to what God has actually said, in both directions.",
     "q": "Where might the Holy Spirit be showing you a place where you've either added unnecessary rules or quietly diminished something God actually asks?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter warns against being \"ensnared\" by inquiring after how other nations served their gods, in order to imitate it (v. 30).",
     "q": "Confess to God any place where you've been drawn to imitate the world's ways of finding meaning or satisfaction rather than his."
    }
   ]
  }
 ]
},
// Day 383
{
 "ref": "Luke 11",
 "tag": "New Testament",
 "api": "luke+11",
 "sum": [
  "When a disciple asks Jesus to teach them to pray as John taught his own disciples, Jesus gives them the Lord's Prayer, and follows it with the parable of the persistent friend at midnight and the promise that those who ask, seek, and knock will receive, especially the gift of the Holy Spirit.",
  "After Jesus casts out a devil that had made a man mute, some accuse him of casting out devils by Beelzebub, prompting Jesus to point out the absurdity of a kingdom divided against itself and to declare that if he casts out devils by the finger of God, the kingdom of God has come upon them.",
  "A crowd seeks a sign, and Jesus refuses to give one beyond the sign of Jonah, warning that this generation will be condemned by the men of Nineveh and the queen of the south, and teaching about the light of the body being the eye, and the danger of inward darkness.",
  "Dining with a Pharisee, Jesus is criticized for not washing before the meal, prompting a series of sharp woes against the Pharisees for their outward cleanliness and tithing of trivial herbs while neglecting judgment and the love of God, and against the lawyers for burdening people with loads they themselves would not touch."
 ],
 "nug": [
  {
   "h": "A prayer taught in answer to a direct, simple request",
   "b": "\"Lord, teach us to pray, as John also taught his disciples\" (v. 1) has one of Jesus' own disciples asking plainly for instruction, and receiving in reply the compact, enduring pattern known ever since as the Lord's Prayer."
  },
  {
   "h": "Persistence given as the reason an answer finally comes",
   "b": "\"Though he will not rise and give him, because he is his friend, yet because of his importunity he will rise and give him as many as he needeth\" (v. 8) credits sheer persistence, not friendship alone, for the request finally being granted — a surprisingly blunt picture of how prayer can work."
  },
  {
   "h": "The best gift named directly, without ambiguity",
   "b": "\"How much more shall your heavenly Father give the Holy Spirit to them that ask him?\" (v. 13) settles, in a single question, exactly what the best gift a good Father gives actually is — not merely good things in general, but the Spirit himself."
  },
  {
   "h": "An accusation answered with plain logic before anything else",
   "b": "\"Every kingdom divided against itself is brought to desolation... If Satan also be divided against himself, how shall his kingdom stand?\" (v. 17-18) meets a serious accusation not first with emotion but with a simple, exposing argument."
  },
  {
   "h": "Outward religion condemned for what it conveniently skips",
   "b": "\"Ye tithe mint and rue and all manner of herbs, and pass over judgment and the love of God: these ought ye to have done, and not to leave the other undone\" (v. 42) names precise, careful religious practice existing right alongside a complete neglect of justice and love — and insists both matter, not one instead of the other."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 6:9-13 · Jonah 3:5-10 · Isaiah 5:20-23",
   "qs": [
    {
     "th": "The Lord's Prayer here appears in a shorter form than Matthew's more familiar version in Matthew 6:9-13, and Jesus' reference to the sign of Jonah recalls Nineveh's genuine repentance in Jonah 3:5-10, held up as a rebuke to a generation that saw far more yet repented far less, echoing the woes against calling evil good and good evil in Isaiah 5:20-23.",
     "q": "Read Matthew 6:9-13 and Jonah 3:5-10 alongside today's chapter. What does the shorter form of the prayer here, and the comparison to Nineveh's repentance, add to how you understand both prayer and genuine repentance?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you\" (v. 9) calls for persistent, ongoing asking rather than a single request.",
     "q": "What have you perhaps stopped asking, seeking, or knocking for too soon, and what would it look like to bring it back to God with fresh persistence?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"How much more shall your heavenly Father give the Holy Spirit to them that ask him?\" (v. 13) names the Spirit himself as the gift most worth asking for.",
     "q": "What would it look like to ask, today, specifically and directly for more of the Holy Spirit's presence in your life?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening / silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The light of the body is the eye: therefore when thine eye is single, thy whole body also is full of light\" (v. 34) calls for a single-minded, undivided focus.",
     "q": "Sit quietly for a few minutes and ask God to show you where your own focus has become divided rather than single."
    }
   ]
  }
 ]
},
// Day 384
{
 "ref": "Psalm 99",
 "tag": "Psalms & Wisdom",
 "api": "psalms+99",
 "sum": [
  "The psalm opens declaring that the LORD reigneth, calling the people to tremble and the earth to be moved, since he sits between the cherubims, and declares him great in Zion and high above all people.",
  "It calls all to praise God's great and terrible name, since it is holy, and celebrates the King's strength as loving judgment, having established equity and executed judgment and righteousness in Jacob.",
  "It recalls Moses and Aaron among God's priests, and Samuel among those who called upon his name, remembering how they called upon the LORD and he answered them, speaking to them in the cloudy pillar, and how they kept his testimonies.",
  "The psalm closes by recalling that the LORD answered them and was a God who forgave them, though he also took vengeance on their inventions, and calls the people to exalt the LORD and worship at his holy hill, for the LORD our God is holy."
 ],
 "nug": [
  {
   "h": "A reaction demanded rather than merely invited",
   "b": "\"The LORD reigneth; let the people tremble: he sitteth between the cherubims; let the earth be moved\" (v. 1) doesn't gently suggest a response but commands trembling and moving as the only fitting reaction to this particular King's reign."
  },
  {
   "h": "Justice described as an expression of love, not its opposite",
   "b": "\"The king's strength also loveth judgment; thou dost establish equity, thou executest judgment and righteousness in Jacob\" (v. 4) pairs strength and love directly with judgment, refusing to treat justice as something cold set against the warmth of love."
  },
  {
   "h": "Three very different leaders named together for the same reason",
   "b": "\"Moses and Aaron among his priests, and Samuel among them that call upon his name; they called upon the LORD, and he answered them\" (v. 6) groups a lawgiver, a priest, and a prophet-judge together on a single shared basis — that they called, and God answered."
  },
  {
   "h": "Forgiveness and consequence held together without contradiction",
   "b": "\"Thou answeredst them, O LORD our God: thou wast a God that forgavest them, though thou tookest vengeance of their inventions\" (v. 8) refuses to soften either half — genuine forgiveness offered, and yet real consequence for what they had done, both true at once."
  },
  {
   "h": "A single word repeated three times as the psalm's final word",
   "b": "The psalm's closing insistence, \"for the LORD our God is holy\" (v. 9), echoes the same declaration already made in verses 3 and 5, holiness stated three times across one short psalm as though it cannot be said too often."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 33:9-11 · 1 Samuel 12:17-18 · Isaiah 6:3",
   "qs": [
    {
     "th": "Moses' own direct encounters with God \"in the cloudy pillar\" (v. 7) recall Exodus 33:9-11, Samuel's calling upon the LORD is recorded in 1 Samuel 12:17-18, and this psalm's threefold declaration of God's holiness (v. 3, 5, 9) anticipates the seraphim's own threefold cry in Isaiah 6:3.",
     "q": "Read Exodus 33:9-11, 1 Samuel 12:17-18, and Isaiah 6:3 alongside today's psalm. What connects these very different moments of calling upon God across Israel's history, and what does the psalm's repeated \"holy\" add to how you read them?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses, Aaron, and Samuel are remembered simply as people who \"called upon the LORD, and he answered them\" (v. 6).",
     "q": "What would it look like for you to call upon the LORD today with the same simple confidence this verse describes?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou wast a God that forgavest them, though thou tookest vengeance of their inventions\" (v. 8) holds forgiveness and real consequence together.",
     "q": "Where might the Holy Spirit be helping you hold both truths together in your own life — genuine forgiveness received, and honest reckoning with consequence?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Exalt the LORD our God, and worship at his holy hill; for the LORD our God is holy\" (v. 9) closes the psalm in pure thanksgiving and praise.",
     "q": "Give thanks today specifically for God's holiness, letting this psalm's repeated declaration shape your own words of gratitude."
    }
   ]
  }
 ]
},
// Day 385
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Three leaders grouped for one shared habit, not their office",
   "b": "\"Moses and Aaron among his priests, and Samuel among them that call upon his name; they called upon the LORD, and he answered them\" (Psalm 99:6) remembers three very different men by the one thing they had in common — not their titles, but that they called, and were answered."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 10's call to circumcise the heart and love the stranger, Deuteronomy 11's contrast between Egypt's self-sufficiency and the promised land's dependence on rain from heaven, Psalm 98's call for a new song and its picture of floods clapping their hands, Deuteronomy 12's command to worship only at the place God would choose and neither add to nor diminish from his word, Luke 11's teaching on prayer, the sign of Jonah, and the woes against the Pharisees and lawyers, and Psalm 99's threefold declaration that the LORD our God is holy.",
     "q": "Which moment from the week most challenged you — Jesus' teaching that \"how much more shall your heavenly Father give the Holy Spirit to them that ask him?\" (Luke 11:13), or the warning \"thou shalt not add thereto, nor diminish from it\" (Deuteronomy 12:32)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"Exalt the LORD our God, and worship at his holy hill; for the LORD our God is holy\" (Psalm 99:9) closed this week's reading in simple praise.",
     "q": "Sit quietly for a few minutes and let this same simple, settled praise be your own resting place today."
    }
   ]
  }
 ]
},
// Day 386
{
 "ref": "Deuteronomy 13",
 "tag": "Old Testament",
 "api": "deuteronomy+13",
 "sum": [
  "Moses warns Israel about prophets or dreamers who arise with signs and wonders that come to pass, yet who use those very signs to entice the people after other gods, insisting such a person must not be heeded because the LORD is testing whether Israel truly loves him.",
  "He warns that even the closest family members — a brother, son, daughter, or beloved wife, or a friend as dear as one's own soul — may secretly entice someone to serve other gods, and commands that such enticement be met with no pity, concealment, or mercy, but exposure and death.",
  "He addresses the case of an entire city led astray by worthless men who draw its inhabitants into idolatry, commanding a careful inquiry and, if the report proves true, the total destruction of the city, its inhabitants, and its cattle, with all the spoil burned and the city left an everlasting heap.",
  "The chapter closes by tying this severity to covenant loyalty — nothing of the cursed thing is to cling to Israel's hand, so that the LORD may turn from his fierce anger and show mercy, multiplying Israel as he swore to their fathers, provided they hearken to his voice and keep his commandments."
 ],
 "nug": [
  {
   "h": "A true sign paired with a false message still fails the test",
   "b": "\"The sign or the wonder come to pass, whereof he spake unto thee... Thou shalt not hearken unto the words of that prophet\" (v. 2-3) shows that a fulfilled miracle is not itself proof of God's approval — the content of the message is what must be weighed."
  },
  {
   "h": "Even the dearest relationships offer no exemption",
   "b": "\"Thy son, or thy daughter... or thy friend, which is as thine own soul, entice thee secretly\" (v. 6) names the closest possible bonds precisely because idolatry so often spreads through trusted love rather than strangers."
  },
  {
   "h": "The witness bears the first, direct weight of judgment",
   "b": "\"Thine hand shall be first upon him to put him to death, and afterwards the hand of all the people\" (v. 9) refuses anonymous accusation, forcing the one who names the sin to also own the consequence."
  },
  {
   "h": "A city's corruption traced to \"the children of Belial\"",
   "b": "\"Certain men, the children of Belial, are gone out from among you, and have withdrawn the inhabitants of their city\" (v. 13) uses a striking idiom for utter worthlessness to describe how corporate apostasy so often begins with a few."
  },
  {
   "h": "Judgment leaves a permanent, silent marker",
   "b": "\"It shall be an heap for ever; it shall not be built again\" (v. 16) makes the ruin itself a lasting testimony, a scar on the land meant to outlast the generation that caused it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 24:24-25 · Matthew 10:37 · 1 John 4:1",
   "qs": [
    {
     "th": "Jesus warns that false christs and false prophets \"shall shew great signs and wonders\" (Matthew 24:24), echoing today's warning almost exactly, while John urges believers to \"try the spirits whether they are of God\" (1 John 4:1) rather than trusting signs alone.",
     "q": "Read Matthew 24:24-25 and 1 John 4:1 alongside today's chapter. What does it look like, practically, to test a message rather than simply be impressed by what accompanies it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thy friend, which is as thine own soul, entice thee secretly\" (v. 6) names how easily a trusted relationship can quietly pull someone off course.",
     "q": "Is there a relationship in your life where love for the person has made it harder to notice, or name, a drift away from what God actually asks?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter insists that even a compelling sign must be weighed against whether it draws someone toward or away from the LORD (v. 2-3).",
     "q": "Where might the Holy Spirit be prompting you to test something appealing in your life right now — not just by how convincing it feels, but by where it actually leads?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter calls for no pity and no concealment toward enticement to idolatry (v. 8).",
     "q": "Confess to God any place where you have quietly tolerated or excused something pulling your heart's devotion away from him."
    }
   ]
  }
 ]
},
// Day 387
{
 "ref": "Deuteronomy 14",
 "tag": "Old Testament",
 "api": "deuteronomy+14",
 "sum": [
  "Moses forbids Israel from cutting themselves or making baldness between their eyes for the dead, grounding the command in their identity as children of the LORD and a holy people chosen out of all the nations of the earth.",
  "He lists the animals Israel may and may not eat — those that chew the cud and part the hoof are clean, while others such as the camel, hare, coney, and swine are named unclean and forbidden, along with rules distinguishing clean and unclean fish and birds, and a prohibition on eating anything that dies of itself.",
  "He commands, almost in passing amid these food laws, that a kid must never be seethed in its mother's milk, then turns to instruct Israel to tithe all the increase of their seed year by year, eating it before the LORD in the place he chooses so that they may learn to always fear him.",
  "Every third year the tithe is instead to be laid up within Israel's own gates, so that the Levite, the stranger, the fatherless, and the widow may come and eat and be satisfied, with the LORD's blessing promised on all the work of Israel's hand."
 ],
 "nug": [
  {
   "h": "Grief practices forbidden as a mark of covenant identity",
   "b": "\"Ye shall not cut yourselves, nor make any baldness between your eyes for the dead\" (v. 1) ties even the practice of mourning to Israel's distinct identity as \"the children of the LORD your God\" (v. 1)."
  },
  {
   "h": "Holiness given as the reason, not just the rule",
   "b": "\"Thou art an holy people unto the LORD thy God\" (v. 2, 21) is repeated as the basis for the entire food code, making diet a matter of identity rather than mere health regulation."
  },
  {
   "h": "A brief, enigmatic prohibition repeated three times in the Torah",
   "b": "\"Thou shalt not seethe a kid in his mother's milk\" (v. 21) closes the chapter's food laws with a single strange image, guarding even the boundary between an animal's nurture and its consumption."
  },
  {
   "h": "A tithe cycle built to feed the vulnerable by name",
   "b": "\"The Levite... and the stranger, and the fatherless, and the widow... shall come, and shall eat and be satisfied\" (v. 29) writes welfare directly into Israel's worship calendar, not as an afterthought but as its stated purpose."
  },
  {
   "h": "Eating before the LORD as a training in fear of him",
   "b": "\"That thou mayest learn to fear the LORD thy God always\" (v. 23) names the tithe's deeper aim — not merely funding worship, but shaping a lifelong posture of reverence."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 11:1-8 · Acts 10:9-15 · James 1:27",
   "qs": [
    {
     "th": "Leviticus 11 first laid out these same clean and unclean distinctions, while Peter's vision in Acts 10:9-15 later declares \"what God hath cleansed, that call not thou common,\" and James 1:27 names visiting the fatherless and widow as pure religion, echoing today's triennial tithe.",
     "q": "Read Leviticus 11:1-8, Acts 10:9-15, and James 1:27 alongside today's chapter. How does tracing this single thread — clean and unclean, then its fulfillment, then its enduring ethical heart — shape how you read food laws that no longer bind believers the same way?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The stranger, and the fatherless, and the widow... shall eat and be satisfied\" (v. 29) built care for the vulnerable into ordinary worship rhythms.",
     "q": "Where in your own giving or planning could care for someone vulnerable become a built-in rhythm rather than an occasional afterthought?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou art an holy people unto the LORD thy God\" (v. 2) grounds even ordinary daily choices in a larger identity.",
     "q": "Where might the Holy Spirit be inviting you to let your identity in God shape an everyday choice you don't usually think of as spiritual?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The tithe was eaten \"before the LORD... that thou mayest learn to fear the LORD thy God always\" (v. 23).",
     "q": "Give thanks for the provision in your own life, and let gratitude for it deepen your reverence for the one who gave it."
    }
   ]
  }
 ]
},
// Day 388
{
 "ref": "Psalm 101",
 "tag": "Psalms & Wisdom",
 "api": "psalms+101",
 "sum": [
  "David opens by resolving to sing of both mercy and judgment to the LORD, and commits to behaving himself wisely in a perfect way, asking when the LORD will come to him and promising to walk within his house with a perfect heart.",
  "He resolves to set no wicked thing before his eyes, to hate the work of those who turn aside, and to keep such a corrupted way from clinging to him, declaring that a froward heart will depart from him and that he will not know a wicked person.",
  "He vows to cut off whoever privily slanders his neighbour, and states plainly that he will not tolerate a proud look or a high look in those around him.",
  "He resolves instead to seek out the faithful of the land to dwell with him, refusing to let anyone who works deceit or tells lies remain in his house or stand before him, promising to destroy the wicked of the land early, cutting off all evildoers from the city of the LORD."
 ],
 "nug": [
  {
   "h": "Mercy and judgment sung together, not separately",
   "b": "\"I will sing of mercy and judgment: unto thee, O LORD, will I sing\" (v. 1) opens the psalm by holding two seemingly opposite themes in the same breath of worship."
  },
  {
   "h": "A resolve about what the eyes are allowed to rest on",
   "b": "\"I will set no wicked thing before mine eyes\" (v. 3) names a deliberate discipline over sight itself, long before it becomes a matter of action."
  },
  {
   "h": "Secret slander singled out for public consequence",
   "b": "\"Whoso privily slandereth his neighbour, him will I cut off\" (v. 5) targets a sin committed in private, refusing to let hidden cruelty escape simply because it is unseen."
  },
  {
   "h": "Companions chosen with the same deliberateness as enemies avoided",
   "b": "\"Mine eyes shall be upon the faithful of the land, that they may dwell with me\" (v. 6) shows a king actively curating who stays close, not merely reacting to who does not."
  },
  {
   "h": "The household held to the same standard as the throne",
   "b": "\"He that worketh deceit shall not dwell within my house\" (v. 7) extends the psalm's resolve from public rule into the ordinary, domestic sphere of daily life."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 15:1-5 · Job 31:1 · Proverbs 6:16-19",
   "qs": [
    {
     "th": "Psalm 15 asks the same question this psalm answers by resolve — who may dwell in the LORD's presence — while Job's covenant with his own eyes (Job 31:1) mirrors David's resolve in verse 3, and Proverbs 6:16-19 names a proud look and a lying tongue among the things the LORD hates.",
     "q": "Read Psalm 15:1-5, Job 31:1, and Proverbs 6:16-19 alongside today's psalm. What do these passages together suggest about the connection between what we allow ourselves to look at and who we allow ourselves to become?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I will set no wicked thing before mine eyes\" (v. 3) is a resolve about ordinary daily attention.",
     "q": "What would it look like this week to make a similar, specific resolve about what you allow before your own eyes?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "David resolves to \"behave myself wisely in a perfect way\" and asks, \"when wilt thou come unto me?\" (v. 2).",
     "q": "Where might the Holy Spirit be asking for a similar resolve from you — not perfection, but a deliberate turning toward wisdom in one area of your life?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I will sing of mercy and judgment: unto thee, O LORD, will I sing\" (v. 1) opens the psalm in worship before any resolve is made.",
     "q": "Spend a few minutes praising God for both his mercy and his justice, letting adoration come before any resolution of your own."
    }
   ]
  }
 ]
},
// Day 389
{
 "ref": "Deuteronomy 15",
 "tag": "Old Testament",
 "api": "deuteronomy+15",
 "sum": [
  "Moses commands that at the end of every seven years Israel must make a release, cancelling debts owed by a neighbour or brother, though a foreigner may still be required to pay, since the LORD promises to bless Israel abundantly in the land if they obey.",
  "He acknowledges that the poor will never cease out of the land, and on that very basis commands Israel to open their hand wide to their poor brother rather than harden their heart or shut their hand, warning against any wicked thought of withholding a loan simply because the release year draws near.",
  "He turns to the case of a Hebrew servant, commanding that in the seventh year such a servant must be let go free, and not sent away empty-handed but furnished liberally out of the flock, the floor, and the winepress, in remembrance that Israel itself was once a bondman in Egypt whom the LORD redeemed.",
  "The chapter closes by commanding that every firstling male born of the herd and flock be sanctified to the LORD, not put to work or shorn, but eaten yearly before the LORD in the chosen place, unless it has a blemish, in which case it may be eaten at home like any other meat, though never with the blood."
 ],
 "nug": [
  {
   "h": "A built-in economic reset every seven years",
   "b": "\"At the end of every seven years thou shalt make a release\" (v. 1) writes a recurring cancellation of debt directly into Israel's calendar, long before any single crisis forces the question."
  },
  {
   "h": "Realism about poverty paired with a command to generosity",
   "b": "\"The poor shall never cease out of the land: therefore I command thee... Thou shalt open thine hand wide unto thy brother\" (v. 11) refuses to let honest acknowledgment of ongoing need become an excuse for passivity."
  },
  {
   "h": "A warning aimed at the calculating heart, not just the closed fist",
   "b": "\"Beware that there be not a thought in thy wicked heart\" (v. 9) about withholding a loan near the release year exposes stinginess at the level of private reasoning, before any refusal is even spoken."
  },
  {
   "h": "Generosity extended beyond the moment of release itself",
   "b": "\"Thou shalt not let him go away empty... thou shalt furnish him liberally out of thy flock\" (v. 13-14) turns a freed servant's departure into an occasion for deliberate provision, not bare compliance."
  },
  {
   "h": "Firstborn animals set apart before any other use",
   "b": "\"Thou shalt sanctify unto the LORD thy God: thou shalt do no work with the firstling of thy bullock, nor shear the firstling of thy sheep\" (v. 19) claims the very first increase for God before it can be put to any other purpose."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 25:1-7 · Mark 14:7 · 2 Corinthians 9:6-7",
   "qs": [
    {
     "th": "Leviticus 25 lays out the wider sabbath and jubilee pattern this release year belongs to, Jesus later echoes \"the poor shall never cease out of the land\" almost word for word in Mark 14:7, and Paul commends the same open-handed spirit in 2 Corinthians 9:6-7.",
     "q": "Read Leviticus 25:1-7, Mark 14:7, and 2 Corinthians 9:6-7 alongside today's chapter. How does seeing this one command echoed across Scripture shape how you think about generosity that is planned rather than merely occasional?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Beware that there be not a thought in thy wicked heart\" (v. 9) warns against calculating stinginess before it ever becomes visible.",
     "q": "Where might a similar calculating thought be quietly shaping your own generosity, even before you act on it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt furnish him liberally out of thy flock\" (v. 14) goes beyond the bare minimum required.",
     "q": "Where might the Holy Spirit be nudging you toward liberality that goes beyond what is technically required of you?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The poor shall never cease out of the land: therefore I command thee... Thou shalt open thine hand wide\" (v. 11) names an ongoing need.",
     "q": "Bring before God someone you know who is in need right now, asking for both provision for them and an open hand from you."
    }
   ]
  }
 ]
},
// Day 390
{
 "ref": "Luke 12",
 "tag": "New Testament",
 "api": "luke+12",
 "sum": [
  "Jesus warns his disciples against the leaven of the Pharisees, which is hypocrisy, telling them not to fear those who can kill the body but rather to fear the one who has power to cast into hell, while reassuring them that not even a sparrow is forgotten before God and that the very hairs of their head are numbered.",
  "He teaches that whoever confesses him before men will be confessed before the angels of God, warns against blasphemy against the Holy Ghost, and tells them not to worry beforehand what to say when brought before rulers, since the Holy Ghost will teach them in that very hour.",
  "He tells the parable of the rich fool who plans to pull down his barns and build greater ones, only to be told that his soul will be required of him that very night, then teaches his disciples not to be anxious about food or clothing, pointing to the ravens that neither sow nor reap and the lilies that neither toil nor spin, and urging them to seek first the kingdom and lay up treasure in heaven, since where their treasure is, there their heart will be also.",
  "He calls his disciples to be like servants watching for their master's return with loins girded and lamps burning, warns that he has come to send fire on the earth and that his coming will bring division rather than automatic peace, and rebukes the crowds for being able to discern the weather yet failing to discern the present time."
 ],
 "nug": [
  {
   "h": "A small, hidden influence named for what it really is",
   "b": "\"Beware ye of the leaven of the Pharisees, which is hypocrisy\" (v. 1) identifies a quiet, spreading corruption rather than an obvious, isolated sin."
  },
  {
   "h": "Careful plans undone in a single night",
   "b": "\"Soul, thou hast much goods laid up for many years... this night thy soul shall be required of thee\" (v. 19-20) exposes the rich fool's confident planning as blind to the one variable he could not control."
  },
  {
   "h": "Creation itself offered as an argument against anxiety",
   "b": "\"Consider the ravens: for they neither sow nor reap... Consider the lilies how they grow\" (v. 24, 27) points not to human striving but to ordinary, unremarkable creatures as evidence of God's care."
  },
  {
   "h": "The heart described as following investment, not the reverse",
   "b": "\"For where your treasure is, there will your heart be also\" (v. 34) suggests that affection can be shaped by where resources are placed, not only the other way around."
  },
  {
   "h": "A startling self-description of Jesus's own mission",
   "b": "\"I am come to send fire on the earth; and what will I, if it be already kindled?\" (v. 49) presents Jesus's coming as deliberately disruptive, not merely comforting."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 6:25-34 · Matthew 10:28-31 · James 4:13-15",
   "qs": [
    {
     "th": "Matthew 6:25-34 records Jesus teaching this same call not to be anxious in almost identical words, Matthew 10:28-31 matches today's warning about sparrows and numbered hairs, and James 4:13-15 later echoes the rich fool's error of planning without reference to God.",
     "q": "Read Matthew 6:25-34, Matthew 10:28-31, and James 4:13-15 alongside today's chapter. What does the repetition of this teaching across the Gospels and epistles suggest about how central it is meant to be?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"For where your treasure is, there will your heart be also\" (v. 34) links affection to investment.",
     "q": "If someone traced your spending and time this past month, what would it suggest about where your treasure — and therefore your heart — actually lies?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus tells his disciples not to worry beforehand, \"for the Holy Ghost shall teach you in the same hour what ye ought to say\" (v. 12).",
     "q": "Is there a situation right now where you're trying to plan your way through anxiety instead of trusting the Spirit to meet you in the moment?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Let your loins be girded about, and your lights burning\" (v. 35) calls for watchful readiness rather than noise.",
     "q": "Sit quietly for a few minutes in watchful readiness, simply listening for whatever God might want to say to you today."
    }
   ]
  }
 ]
},
// Day 391
{
 "ref": "Psalm 102",
 "tag": "Psalms & Wisdom",
 "api": "psalms+102",
 "sum": [
  "The psalmist, identified as an afflicted one overwhelmed and pouring out his complaint before the LORD, cries out to be heard, pleading with God not to hide his face in the day of trouble, describing his days as consumed like smoke and his heart as smitten and withered like grass.",
  "He pictures himself as isolated and sleepless, like a pelican of the wilderness, an owl of the desert, or a sparrow alone upon the housetop, surrounded by enemies who reproach him daily and are sworn against him, his ashes eaten like bread and his drink mingled with tears because of the LORD's indignation.",
  "He turns from this lament to declare that the LORD shall endure forever, that his remembrance is unto all generations, and that he will arise and have mercy upon Zion because the set time to favour her has come, promising that the LORD will build up Zion and appear in his glory, regarding the prayer of the destitute.",
  "The psalm closes by contrasting the eternity of God with the perishing of creation itself — of old God laid the foundation of the earth and the heavens are the work of his hands, yet they shall perish and be changed like a garment, while God remains the same, his years having no end."
 ],
 "nug": [
  {
   "h": "An urgent plea not to be hidden from",
   "b": "\"Hide not thy face from me in the day when I am in trouble\" (v. 2) gives voice to the fear of unanswered prayer at the very moment help is needed most."
  },
  {
   "h": "Affliction described in vivid, physical images",
   "b": "\"My days are consumed like smoke... my heart is smitten, and withered like grass\" (v. 3-4) refuses to soften suffering into abstract language, choosing instead images anyone could picture."
  },
  {
   "h": "Solitary birds chosen to picture isolation",
   "b": "\"I am like a pelican of the wilderness... a sparrow alone upon the house top\" (v. 6-7) reaches for creatures known for being alone rather than merely saying \"I am lonely.\""
  },
  {
   "h": "A pivot from despair to a set, appointed time of favour",
   "b": "\"Thou shalt arise, and have mercy upon Zion: for the time to favour her, yea, the set time, is come\" (v. 13) turns the psalm's whole mood on the conviction that God's timing, though delayed, is not absent."
  },
  {
   "h": "Creation's decay set against God's changeless years",
   "b": "\"They shall perish, but thou shalt endure... thou art the same, and thy years shall have no end\" (v. 26-27) closes the psalm by anchoring a suffering individual's hope in nothing less than God's own eternity."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 1:10-12 · Psalm 90:1-2 · James 4:14",
   "qs": [
    {
     "th": "Hebrews 1:10-12 quotes this psalm's closing verses directly of Christ, applying its picture of unchanging eternity to the Son, while Psalm 90:1-2 and James 4:14 both set human frailty against God's everlasting nature in similar terms.",
     "q": "Read Hebrews 1:10-12, Psalm 90:1-2, and James 4:14 alongside today's psalm. How does knowing that the New Testament applies this psalm's eternity language to Jesus himself change how you read the psalmist's suffering?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"My days are consumed like smoke\" (v. 3) names a season of affliction honestly, without minimizing it.",
     "q": "Is there a season of your own life this description fits right now, and have you brought it to God as directly as the psalmist does?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The set time, is come\" (v. 13) suggests God's timing is deliberate even when it feels delayed.",
     "q": "Where might the Holy Spirit be asking you to trust his timing in something you've been waiting on?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalmist pours out raw complaint before God rather than hiding it (v. 1-2).",
     "q": "Bring to God, honestly and without polishing it, whatever burden or complaint you are currently carrying."
    }
   ]
  }
 ]
},
// Day 392
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A single verse holding smoke, grass, and eternity together",
   "b": "\"They shall perish, but thou shalt endure... thou art the same, and thy years shall have no end\" (Psalm 102:26-27) closed a week that moved from Israel's harshest warnings to an afflicted psalmist's raw complaint, and let both rest on the one thing that does not change."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 13's warning against prophets and even family members who entice toward idolatry, Deuteronomy 14's food laws and its triennial tithe for the Levite, stranger, fatherless, and widow, Psalm 101's resolve to set no wicked thing before his eyes, Deuteronomy 15's command to release debts and furnish freed servants liberally, Luke 12's parable of the rich fool and its call not to be anxious, and Psalm 102's cry of affliction turning to confidence in God's eternity.",
     "q": "Which moment from the week most challenged you — the rich fool's plans undone in a single night (Luke 12:19-20), or the command to \"open thine hand wide unto thy brother, to thy poor\" (Deuteronomy 15:11)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"Thou shalt arise, and have mercy upon Zion: for the time to favour her, yea, the set time, is come\" (Psalm 102:13) closed this week's reading with hope after lament.",
     "q": "Sit quietly for a few minutes and rest in the confidence that God's timing for you, too, is not absent even when it feels delayed."
    }
   ]
  }
 ]
},
// Day 393
{
 "ref": "Deuteronomy 16",
 "tag": "Old Testament",
 "api": "deuteronomy+16",
 "sum": [
  "Moses commands Israel to observe the month of Abib and keep the passover, eating unleavened bread for seven days — called the bread of affliction — in remembrance of their hasty departure from Egypt, and to bring their offerings only to the place the LORD chooses.",
  "He commands the Feast of Weeks to be kept seven weeks after the sickle is first put to the corn, with a freewill offering given according to the blessing received, and the Feast of Tabernacles to be kept seven days after the ingathering, with rejoicing commanded for all — sons, daughters, servants, the Levite, the stranger, the fatherless, and the widow.",
  "He commands that none appear before the LORD empty, each giving as he is able, and instructs Israel to appoint judges and officers in all their gates who will judge the people with just judgment, forbidding them to wrest judgment, respect persons, or take a bribe, since a gift blinds the eyes of the wise and perverts the words of the righteous.",
  "The chapter closes with the command to follow that which is altogether just, that Israel may live and inherit the land, and forbids planting any grove of trees near the altar of the LORD or setting up any image, things the LORD hates."
 ],
 "nug": [
  {
   "h": "Unleavened bread deliberately named a food of affliction",
   "b": "\"Thou shalt eat unleavened bread therewith, even the bread of affliction\" (v. 3) turns the festival meal itself into a yearly, tangible act of remembering hardship, not only deliverance."
  },
  {
   "h": "Giving proportioned to blessing rather than fixed by rule",
   "b": "\"Every man shall give as he is able, according to the blessing of the LORD thy God which he hath given thee\" (v. 17) ties the freewill offering directly to what each person has actually received."
  },
  {
   "h": "Worship expected to come with something in hand",
   "b": "\"They shall not appear before the LORD empty\" (v. 16) refuses to separate coming before God from bringing him something real."
  },
  {
   "h": "A triple safeguard built around the seat of judgment",
   "b": "\"Thou shalt not wrest judgment; thou shalt not respect persons, neither take a gift\" (v. 19) stacks three distinct protections against the ways justice most commonly gets bent."
  },
  {
   "h": "Justice tied directly to the nation's continued life in the land",
   "b": "\"That which is altogether just shalt thou follow, that thou mayest live, and inherit the land\" (v. 20) makes justice not an optional virtue but a condition of the covenant's promised future."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 12:14-20 · James 2:1-4 · Micah 6:8",
   "qs": [
    {
     "th": "Exodus 12:14-20 first establishes the Passover and unleavened bread Israel is commanded here to keep, James 2:1-4 warns against the very partiality forbidden in verse 19, and Micah 6:8 later summarizes the whole law's ethical heart as doing justly.",
     "q": "Read Exodus 12:14-20, James 2:1-4, and Micah 6:8 alongside today's chapter. What connects a festival calendar, a warning against favouritism, and a call to justice into a single, coherent picture of what it means to belong to God?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Every man shall give as he is able, according to the blessing of the LORD thy God\" (v. 17) ties giving to what has actually been received.",
     "q": "Does your own giving reflect what you have actually been given, or has it settled into a fixed habit disconnected from gratitude?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt not respect persons, neither take a gift\" (v. 19) warns against letting influence bend fairness.",
     "q": "Where might the Holy Spirit be showing you a place where you've quietly favoured someone, or something, in a way that isn't just?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The Feast of Tabernacles is commanded with the words \"thou shalt surely rejoice\" (v. 15).",
     "q": "Spend a few minutes in simple, glad praise, letting the command to rejoice shape your prayer today."
    }
   ]
  }
 ]
},
// Day 394
{
 "ref": "Deuteronomy 17",
 "tag": "Old Testament",
 "api": "deuteronomy+17",
 "sum": [
  "Moses forbids sacrificing to the LORD any bullock or sheep with a blemish, calling it an abomination, then addresses the case of a man or woman found serving other gods, commanding a diligent inquiry and requiring the testimony of two or three witnesses before anyone is put to death, with the witnesses' own hands first upon the accused.",
  "He instructs that any matter too hard for local judgment — controversies of judgment, cases of blood, or disputes within the gates — be brought to the priests and the judge at the place the LORD chooses, and that whoever acts presumptuously and refuses to hearken to their sentence must die, so that evil is put away from Israel.",
  "He gives instructions for a future king, commanding that he be chosen from among Israel's own brethren rather than a stranger, that he not multiply horses to himself or cause the people to return to Egypt to get them, and that he not multiply wives to himself, lest his heart turn away, nor greatly multiply silver and gold.",
  "The chapter closes with the command that the king write for himself a copy of the law in a book, reading it all the days of his life so that he may learn to fear the LORD, keep all his words, and not let his heart be lifted up above his brethren."
 ],
 "nug": [
  {
   "h": "Blemished offerings named an abomination, not a minor lapse",
   "b": "\"Thou shalt not sacrifice unto the LORD thy God any bullock, or sheep, wherein is blemish, or any evilfavouredness: for that is an abomination\" (v. 1) insists the quality of what is offered matters, not merely that an offering was made."
  },
  {
   "h": "A death sentence requiring more than one accuser",
   "b": "\"At the mouth of two witnesses, or three witnesses, shall he that is worthy of death be put to death\" (v. 6) builds a safeguard against a single, unverified accusation ending a life."
  },
  {
   "h": "Witnesses made to bear direct responsibility for their testimony",
   "b": "\"The hands of the witnesses shall be first upon him to put him to death\" (v. 7) refuses to let anyone accuse from a safe distance."
  },
  {
   "h": "A future king restrained from the very things that undo kings",
   "b": "\"He shall not multiply horses to himself... neither shall he multiply wives to himself... nor greatly multiply silver and gold\" (v. 16-17) names, centuries in advance, the exact pattern later kings would fail to resist."
  },
  {
   "h": "A daily discipline meant to keep a king humble",
   "b": "\"He shall write him a copy of this law... that he may learn to fear the LORD... that his heart be not lifted up above his brethren\" (v. 18-20) ties the king's ongoing reading of the law directly to guarding against pride."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Kings 11:1-4 · Matthew 18:16 · John 8:17",
   "qs": [
    {
     "th": "1 Kings 11:1-4 records Solomon breaking every one of the king's restrictions named here — multiplying horses, wives, and gold — while Matthew 18:16 and John 8:17 both carry forward the principle of two or three witnesses into New Testament practice.",
     "q": "Read 1 Kings 11:1-4, Matthew 18:16, and John 8:17 alongside today's chapter. What does it suggest that a law meant to protect a king from himself was later broken in precisely the ways it warned against?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The king was commanded to read the law daily \"that his heart be not lifted up above his brethren\" (v. 20).",
     "q": "What regular practice in your own life functions like this — something that keeps you humble rather than letting position or success quietly go to your head?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The king is warned against multiplying horses, wives, and silver and gold — good things pursued to excess (v. 16-17).",
     "q": "Is there a good thing in your own life the Holy Spirit might be asking you to hold more loosely, before it becomes an excess?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter sets high standards for judges and kings entrusted with authority over others (v. 9, 18-20).",
     "q": "Pray for leaders and those in authority over you, that they would be kept humble and just rather than corrupted by their position."
    }
   ]
  }
 ]
},
// Day 395
{
 "ref": "Psalm 105",
 "tag": "Psalms & Wisdom",
 "api": "psalms+105",
 "sum": [
  "The psalmist calls Israel to give thanks unto the LORD, call upon his name, make known his deeds among the people, and seek the LORD and his face evermore, remembering the marvellous works and judgments of his mouth.",
  "He recounts the covenant made with Abraham, confirmed to Isaac and Jacob as an everlasting covenant, then tells how Joseph was sold as a servant and laid in iron fetters until the king sent and loosed him and made him lord of his house and ruler of all his substance.",
  "He recounts how Israel came into Egypt and multiplied greatly, how the LORD sent Moses and Aaron and worked wonders and plagues against Egypt — darkness, blood, frogs, flies, hail, locusts, and the death of the firstborn — until Egypt was glad when Israel departed.",
  "He recounts how the LORD brought Israel out with silver and gold with not one feeble person among their tribes, spread a cloud for covering and fire for light, fed them with quails and manna, and opened the rock so that waters gushed out, closing with the declaration that he remembered his holy promise and Abraham his servant."
 ],
 "nug": [
  {
   "h": "A call to continuous, not occasional, seeking",
   "b": "\"Seek the LORD, and his strength: seek his face evermore\" (v. 4) frames devotion as an ongoing pursuit rather than a task completed once."
  },
  {
   "h": "Suffering endured until an appointed word arrived",
   "b": "\"Whose feet they hurt with fetters: he was laid in iron: Until the time that his word came\" (v. 18-19) recalls Joseph's affliction as bounded by a set moment of vindication, not open-ended."
  },
  {
   "h": "A striking detail of national strength at the exodus",
   "b": "\"There was not one feeble person among their tribes\" (v. 37) notes, almost in passing, a remarkable sign of God's provision amid a mass departure."
  },
  {
   "h": "Shade and light provided at the same time",
   "b": "\"He spread a cloud for a covering; and fire to give light in the night\" (v. 39) pictures God meeting two different needs — shelter by day, guidance by night — without Israel having to ask for either separately."
  },
  {
   "h": "An entire history retold around a single motive",
   "b": "\"For he remembered his holy promise, and Abraham his servant\" (v. 42) closes the psalm by tying every event just recounted back to one unbroken thread — God's promise-keeping."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 15:13-14 · Genesis 41:41-44 · Exodus 12:35-37",
   "qs": [
    {
     "th": "Genesis 15:13-14 records God foretelling Israel's bondage and eventual departure with great substance long before it happened, Genesis 41:41-44 describes Joseph's sudden exaltation, and Exodus 12:35-37 records the actual departure with silver, gold, and the multitude this psalm celebrates.",
     "q": "Read Genesis 15:13-14, Genesis 41:41-44, and Exodus 12:35-37 alongside today's psalm. How does seeing the original events alongside this later song of thanksgiving shape how you look back on promises fulfilled in your own life?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Until the time that his word came\" (v. 19) describes Joseph's long wait before vindication.",
     "q": "Is there a long-standing wait in your own life you need to entrust to God's timing, the way Joseph's suffering was bounded by an appointed word?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Seek the LORD, and his strength: seek his face evermore\" (v. 4) calls for continuous seeking.",
     "q": "Where might the Holy Spirit be inviting you into a more continuous, rather than occasional, pattern of seeking God?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The whole psalm is thanksgiving for God remembering \"his holy promise, and Abraham his servant\" (v. 42).",
     "q": "Give thanks for a specific promise or provision of God's you can trace through your own life, as this psalm traces Israel's."
    }
   ]
  }
 ]
},
// Day 396
{
 "ref": "Deuteronomy 18",
 "tag": "Old Testament",
 "api": "deuteronomy+18",
 "sum": [
  "Moses instructs that the Levites have no inheritance of land among their brethren, since the LORD himself is their inheritance, and lists the priest's due from the people's sacrifices as well as the firstfruits they are owed.",
  "He forbids Israel from any of the detestable practices of the nations — passing children through fire, divination, observing times, enchantment, witchcraft, charming, consulting familiar spirits, wizardry, or necromancy — declaring that the nations hearkened to such things but the LORD has not allowed Israel to do so.",
  "He promises instead that the LORD will raise up a Prophet from among Israel's own brethren, like Moses, to whom the people must hearken, since God will put his words in that Prophet's mouth and will himself require it of whoever refuses to listen.",
  "The chapter closes by giving Israel a test for prophets who speak presumptuously in the LORD's name — if the thing spoken does not come to pass, that is the sign the LORD did not speak it, and such a prophet is not to be feared."
 ],
 "nug": [
  {
   "h": "An inheritance defined by relationship, not land",
   "b": "\"The LORD is their inheritance, as he hath said unto them\" (v. 2) gives the Levites an identity rooted entirely in God himself rather than in territory."
  },
  {
   "h": "A comprehensive list culminating in necromancy",
   "b": "\"A charmer, or a consulter with familiar spirits, or a wizard, or a necromancer\" (v. 11) catalogues nearly every way people sought hidden knowledge apart from God, closing on the most extreme practice of all."
  },
  {
   "h": "A distinct calling explained by revelation, not superiority",
   "b": "\"These nations... hearkened unto observers of times, and unto diviners: but as for thee, the LORD thy God hath not suffered thee so to do\" (v. 14) grounds Israel's difference in what God has spoken, not in Israel's own merit."
  },
  {
   "h": "A promised Prophet who speaks only what he is given",
   "b": "\"I will put my words in his mouth; and he shall speak unto them all that I shall command him\" (v. 18) anticipates a coming figure whose authority rests entirely on faithfully relaying God's own word."
  },
  {
   "h": "A concrete, falsifiable test for false prophecy",
   "b": "\"If the thing follow not, nor come to pass, that is the thing which the LORD hath not spoken\" (v. 22) gives Israel a plain, checkable standard rather than leaving the question to guesswork."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 3:22-23 · John 5:46 · 1 Samuel 28:7-8",
   "qs": [
    {
     "th": "Peter directly applies today's promise of a coming Prophet to Jesus in Acts 3:22-23, Jesus himself says Moses \"wrote of me\" in John 5:46, and 1 Samuel 28:7-8 shows Saul later breaking the very prohibition against necromancy named in verse 11 by consulting the witch of Endor.",
     "q": "Read Acts 3:22-23, John 5:46, and 1 Samuel 28:7-8 alongside today's chapter. How does seeing both the fulfilled promise and the broken prohibition sharpen your sense of what it means to \"hearken\" to God's appointed voice?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter forbids seeking hidden knowledge through divination, charming, or consulting familiar spirits (v. 10-11).",
     "q": "Where, even in subtle or modern forms, might you be tempted to seek certainty or guidance apart from God rather than through him?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Unto him ye shall hearken\" (v. 15) calls for active listening to God's appointed voice.",
     "q": "What would it look like this week to actually hearken — not just hear, but obey — what the Holy Spirit is already saying to you?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The promised Prophet would \"speak unto them all that I shall command him\" (v. 18), a picture of complete attentiveness to God's word.",
     "q": "Sit quietly for a few minutes, simply listening, before asking God for anything at all."
    }
   ]
  }
 ]
},
// Day 397
{
 "ref": "Luke 13",
 "tag": "New Testament",
 "api": "luke+13",
 "sum": [
  "Jesus responds to news of Galileans killed by Pilate and eighteen killed when the tower of Siloam fell by insisting they were no worse sinners than anyone else, warning twice that all will likewise perish unless they repent, then tells the parable of a barren fig tree given one more year before it is cut down.",
  "He heals a woman who had been bent over by a spirit of infirmity for eighteen years on the sabbath, defending the act against the ruler of the synagogue by asking whether this daughter of Abraham ought not to be loosed from her bond on the sabbath day, then compares the kingdom of God to a mustard seed that grows into a great tree and to leaven hidden in three measures of meal.",
  "He teaches on the way toward Jerusalem that many will seek to enter the narrow door and not be able, warning that some who ate and drank in his presence and heard him teach will nonetheless be told, \"I know you not whence ye are,\" while others from east and west sit down in the kingdom of God.",
  "When warned that Herod, called \"that fox,\" seeks to kill him, Jesus presses on toward Jerusalem, then laments over the city that kills the prophets, longing to have gathered its children as a hen gathers her brood under her wings, though they would not."
 ],
 "nug": [
  {
   "h": "Tragedy refused as proof of others' greater guilt",
   "b": "\"Except ye repent, ye shall all likewise perish\" (v. 3, 5) is repeated twice, redirecting attention away from ranking sinners and toward each listener's own need."
  },
  {
   "h": "Patient mercy given one specific, limited extension",
   "b": "\"Lord, let it alone this year also, till I shall dig about it, and dung it\" (v. 8) pictures grace as real but not indefinite, marked by a set, generous window rather than an open-ended delay."
  },
  {
   "h": "The sabbath reframed as fitting for release, not just rest",
   "b": "\"Ought not this woman... be loosed from this bond on the sabbath day?\" (v. 16) argues that setting someone free is entirely consistent with, rather than opposed to, the day's purpose."
  },
  {
   "h": "Entry described as requiring effort, not assumed by proximity",
   "b": "\"Strive to enter in at the strait gate: for many... will seek to enter in, and shall not be able\" (v. 24) warns that nearness to Jesus's teaching is not the same as entry into his kingdom."
  },
  {
   "h": "A longing met with refusal, pictured in maternal imagery",
   "b": "\"How often would I have gathered thy children together, as a hen doth gather her brood under her wings, and ye would not!\" (v. 34) gives voice to God's desire for a people who would not be gathered."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 7:13-14 · Matthew 23:37 · Romans 2:4",
   "qs": [
    {
     "th": "Matthew 7:13-14 carries the same strait-gate image found in verse 24, Matthew 23:37 records this exact lament over Jerusalem almost word for word, and Romans 2:4 explains that it is the goodness of God, not merely warning, that leads people to repentance.",
     "q": "Read Matthew 7:13-14, Matthew 23:37, and Romans 2:4 alongside today's chapter. How do these passages together shape the balance between urgency and mercy in Jesus's call to repent?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The fig tree is given one more year of patient care before judgment (v. 8-9).",
     "q": "Where in your own life has God shown you this kind of patient extension, and how have you responded to it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Ought not this woman... be loosed from this bond\" (v. 16) reframes a rigid rule around compassion for a person in bondage.",
     "q": "Is there a place where the Holy Spirit might be asking you to prioritize compassion for someone over strict adherence to a rule or habit?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"How often would I have gathered thy children together... and ye would not!\" (v. 34) expresses God's longing for people who resist him.",
     "q": "Bring before God someone you know who has resisted him, asking that they would be gathered rather than continue to refuse."
    }
   ]
  }
 ]
},
// Day 398
{
 "ref": "Psalm 106",
 "tag": "Psalms & Wisdom",
 "api": "psalms+106",
 "sum": [
  "The psalmist opens in praise, declaring that the LORD is good and his mercy endures forever, before confessing that Israel — like their fathers — has sinned and committed iniquity, failing to understand God's wonders even at the Red Sea, which he nonetheless dried up to save them.",
  "He recounts Israel's repeated rebellions — the golden calf made at Horeb, where they changed their glory into the likeness of a grass-eating ox, the refusal to believe God's word and enter the pleasant land at Kadesh-barnea, and the joining to Baal-peor, where they ate sacrifices of the dead until Phinehas stood up and executed judgment and the plague was stayed.",
  "He recalls further failures — provoking Moses at the waters of Meribah so that he spoke unadvisedly, failing to destroy the nations as commanded and instead learning their works, intermarrying with them, serving their idols, and even sacrificing their own sons and daughters to devils, so that the land was polluted with blood.",
  "The psalm closes by describing the LORD's anger kindled against his people and their repeated deliverance and rebellion in the land, yet declares that he regarded their affliction when he heard their cry and remembered for them his covenant, repenting according to the multitude of his mercies, and calls on Israel to gather in thanks and glory in his praise."
 ],
 "nug": [
  {
   "h": "Praise and confession opened in the very same breath",
   "b": "\"O give thanks unto the LORD; for he is good: for his mercy endureth for ever\" (v. 1) begins a psalm that becomes an extended confession, framing honest failure within unwavering mercy."
  },
  {
   "h": "Glory traded for the likeness of a grass-eating ox",
   "b": "\"They changed their glory into the similitude of an ox that eateth grass\" (v. 20) gives a stark, almost embarrassing picture of what the golden calf actually amounted to."
  },
  {
   "h": "Unbelief named as the root cause of forfeited inheritance",
   "b": "\"They despised the pleasant land, they believed not his word\" (v. 24) traces Israel's failure at Kadesh-barnea back to a failure of trust, not merely of courage."
  },
  {
   "h": "One decisive act halting a national plague",
   "b": "\"Then stood up Phinehas, and executed judgment: and so the plague was stayed\" (v. 30) shows a single, immediate response averting widespread judgment."
  },
  {
   "h": "Mercy given the final word after a long list of failures",
   "b": "\"He regarded their affliction, when he heard their cry: And he remembered for them his covenant\" (v. 44-45) closes the psalm by letting compassion, not condemnation, have the last say."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 14:1-4 · Numbers 25:6-8 · 1 Corinthians 10:6-11",
   "qs": [
    {
     "th": "Numbers 14:1-4 records the actual rebellion at Kadesh-barnea this psalm recalls, Numbers 25:6-8 records Phinehas's act firsthand, and Paul explains in 1 Corinthians 10:6-11 that these very events \"happened unto them for ensamples\" and were written for later believers' instruction.",
     "q": "Read Numbers 14:1-4, Numbers 25:6-8, and 1 Corinthians 10:6-11 alongside today's psalm. What does Paul's use of these old failures as warnings for the church suggest about how you should read this psalm's confessions today?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"They despised the pleasant land, they believed not his word\" (v. 24) traces failure back to unbelief.",
     "q": "Is there a promise or provision of God you find yourself despising or doubting rather than trusting right now?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm recounts a pattern of forgetting God's works soon after experiencing them (v. 13).",
     "q": "Where might the Holy Spirit be reminding you of something God has already done that you've begun to forget or take for granted?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"We have sinned with our fathers, we have committed iniquity, we have done wickedly\" (v. 6) models honest, corporate confession.",
     "q": "Confess honestly to God any pattern of rebellion or forgetfulness this psalm has brought to mind in your own life."
    }
   ]
  }
 ]
},
// Day 399
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A whole psalm of failure resting on one closing mercy",
   "b": "\"He regarded their affliction, when he heard their cry: And he remembered for them his covenant\" (Psalm 106:44-45) let a week that moved through law, prophecy, and repeated rebellion end not in condemnation but in God's own remembering."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 16's three pilgrim feasts and command to pursue justice, Deuteronomy 17's laws for witnesses and for a future king, Psalm 105's thanksgiving for God's remembered promises to Abraham, Deuteronomy 18's promise of a coming Prophet like Moses, Luke 13's call to repent and its lament over Jerusalem, and Psalm 106's honest confession of Israel's repeated rebellion.",
     "q": "Which moment from the week most challenged you — the promised Prophet to whom Israel \"shall hearken\" (Deuteronomy 18:15), or the warning \"except ye repent, ye shall all likewise perish\" (Luke 13:3)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"He regarded their affliction, when he heard their cry: And he remembered for them his covenant\" (Psalm 106:44-45) closed this week's reading in mercy.",
     "q": "Sit quietly for a few minutes and rest in the knowledge that God remembers his covenant with you even amid your own failures."
    }
   ]
  }
 ]
},
// Day 400
{
 "ref": "Deuteronomy 19",
 "tag": "Old Testament",
 "api": "deuteronomy+19",
 "sum": [
  "Moses commands Israel to separate three cities of refuge once they possess the land, so that a manslayer who kills his neighbour unintentionally — such as an axe head slipping from its handle and killing a companion — may flee there and live, and instructs that three more cities be added if the LORD enlarges their border, so that innocent blood is not shed.",
  "He forbids this refuge to a premeditated murderer who hates his neighbour and lies in wait to kill him, commanding that the elders deliver such a man to the avenger of blood to die, with no pity shown, so that innocent blood is put away from Israel.",
  "He forbids removing a neighbour's landmark set by those of old time, and requires that no single witness rise up against a man for any sin, but that every matter be established at the mouth of two or three witnesses.",
  "The chapter closes with instructions for dealing with a false witness — judges are to make diligent inquisition, and if the witness is found false, he is to receive the very penalty he intended for his brother, so that others hear and fear, summarized as life for life, eye for eye, tooth for tooth, hand for hand, foot for foot."
 ],
 "nug": [
  {
   "h": "A law that distinguishes accident from hatred",
   "b": "\"Whoso killeth his neighbour ignorantly, whom he hated not in time past\" (v. 4) carefully separates unintentional killing from murder before any punishment is considered."
  },
  {
   "h": "An axe head grounding the law in ordinary life",
   "b": "The example of an axe head that \"slippeth from the helve, and lighteth upon his neighbour, that he die\" (v. 5) roots an abstract legal category in a scene anyone working with tools could picture."
  },
  {
   "h": "No pity extended to premeditated murder",
   "b": "\"Thine eye shall not pity him\" (v. 13) makes clear that refuge exists for the innocent, never as a loophole for the guilty."
  },
  {
   "h": "Ancient boundaries protected as a quiet form of theft",
   "b": "\"Thou shalt not remove thy neighbour's landmark, which they of old time have set\" (v. 14) guards against a slow, easily hidden way of stealing land."
  },
  {
   "h": "A false witness sentenced to the harm he intended",
   "b": "\"Then shall ye do unto him, as he had thought to have done unto his brother\" (v. 19) fits the punishment to the intended harm rather than to any actual outcome."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 35:9-15 · Hebrews 6:18 · Proverbs 22:28",
   "qs": [
    {
     "th": "Numbers 35:9-15 first establishes the cities of refuge this chapter expands, Hebrews 6:18 pictures believers who \"fled for refuge\" to lay hold of hope in Christ, and Proverbs 22:28 repeats the exact warning against removing an ancient landmark.",
     "q": "Read Numbers 35:9-15, Hebrews 6:18, and Proverbs 22:28 alongside today's chapter. How does the image of a physical city of refuge deepen your understanding of what it means to find refuge in Christ?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The law distinguishes carefully between unintentional harm and premeditated hatred (v. 4, 11-13).",
     "q": "Is there a way you tend to judge yourself or others by outcome alone, without pausing to consider intent the way this law does?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The requirement of two or three witnesses (v. 15) guards against hasty or unverified judgment.",
     "q": "Where might the Holy Spirit be asking you to slow down and verify before drawing a conclusion about someone?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The cities of refuge existed \"so that innocent blood be not shed in thy land\" (v. 10).",
     "q": "Give thanks for the refuge God has provided for you, and for the protection his justice offers to the innocent."
    }
   ]
  }
 ]
},
// Day 401
{
 "ref": "Deuteronomy 20",
 "tag": "Old Testament",
 "api": "deuteronomy+20",
 "sum": [
  "Moses instructs Israel that when they go out to battle and see horses, chariots, and a people more numerous than themselves, they are not to be afraid, for the LORD their God who brought them out of Egypt is with them, and commands a priest to exhort the army before the battle begins.",
  "The priest is to tell the people not to let their hearts faint or tremble, while officers announce exemptions for anyone who has built a new house not yet dedicated, planted a vineyard not yet eaten of, betrothed a wife not yet married, or who is simply fearful and fainthearted, lest his fear spread to his brethren.",
  "Moses instructs that before besieging a city, Israel must first proclaim peace to it; if it accepts, its people become tributaries, but if it refuses and fights, every male is to be smitten while the women, children, and cattle are taken as spoil — though the cities of the nations given as an inheritance are to be left with nothing that breathes.",
  "The chapter closes with a command that even in a long siege, Israel must not destroy the fruit trees of a city by cutting them down, since the tree of the field is man's life, though trees not used for food may be used to build siege works."
 ],
 "nug": [
  {
   "h": "Fear countered by remembering past deliverance",
   "b": "\"Be not afraid of them: for the LORD thy God is with thee, which brought thee up out of the land of Egypt\" (v. 1) grounds courage in a specific memory rather than a vague reassurance."
  },
  {
   "h": "A triple-stacked charge against fear before battle",
   "b": "\"Let not your hearts faint, fear not, and do not tremble, neither be ye terrified because of them\" (v. 3) piles up near-synonyms, as if fear needed to be addressed from every angle at once."
  },
  {
   "h": "Fear treated as contagious, and mercifully managed",
   "b": "\"What man is there that is fearful and fainthearted? let him go and return unto his house, lest his brethren's heart faint as well as his heart\" (v. 8) sends the fearful home not in shame but to protect the courage of others."
  },
  {
   "h": "Even the harshest law opens with an offer of peace",
   "b": "The command to \"proclaim peace unto it\" (v. 10) before any siege begins shows that war, in this law, is never the first resort."
  },
  {
   "h": "Environmental restraint built into the conduct of war",
   "b": "\"Thou shalt not destroy the trees thereof... for the tree of the field is man's life\" (v. 19) protects a future food source even in the midst of present conflict."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Judges 7:2-3 · 2 Chronicles 20:15 · Matthew 5:9",
   "qs": [
    {
     "th": "Judges 7:2-3 shows Gideon later applying this very exemption by sending the fearful home before battle, 2 Chronicles 20:15 declares that \"the battle is not yours, but God's,\" and Matthew 5:9 blesses the peacemakers, echoing this chapter's insistence on offering peace first.",
     "q": "Read Judges 7:2-3, 2 Chronicles 20:15, and Matthew 5:9 alongside today's chapter. What connects a law about warfare to Jesus's blessing on peacemakers?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Let not your hearts faint, fear not, and do not tremble\" (v. 3) addresses fear directly and repeatedly.",
     "q": "What situation in your own life could use this same repeated, deliberate charge against fear rather than a single quick reassurance?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The fearful soldier is sent home so his fear does not spread to others (v. 8).",
     "q": "Is there a fear you're carrying that the Holy Spirit might want to address before it quietly affects those around you?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The priest's role was to speak courage over the people before battle (v. 2-4).",
     "q": "Pray for someone you know who is facing a fearful situation right now, asking God to steady their heart the way the priest steadied Israel's."
    }
   ]
  }
 ]
},
// Day 402
{
 "ref": "Psalm 108",
 "tag": "Psalms & Wisdom",
 "api": "psalms+108",
 "sum": [
  "David declares that his heart is fixed and resolves to sing and give praise even with his glory, calling on the psaltery and harp to awake as he himself awakes early, promising to praise the LORD among the people and sing unto him among the nations.",
  "He declares that God's mercy is great above the heavens and his truth reaches unto the clouds, and prays that God be exalted above the heavens and his glory above all the earth, so that his beloved may be delivered.",
  "He recounts God speaking in his holiness, dividing Shechem and measuring out the valley of Succoth, claiming Gilead, Manasseh, and Ephraim as the strength of his head and Judah as his lawgiver, while naming Moab his washpot, casting his shoe over Edom, and shouting in triumph over Philistia.",
  "The psalm closes by asking who will bring him into the strong city and lead him into Edom, admitting that God alone can give help, since human help is vain, and declares that through God Israel will do valiantly, for he it is who will tread down their enemies."
 ],
 "nug": [
  {
   "h": "A settled resolve preceding the song itself",
   "b": "\"O God, my heart is fixed; I will sing and give praise, even with my glory\" (v. 1) shows praise following a prior decision of the heart, not a fluctuating mood."
  },
  {
   "h": "A deliberate discipline of early praise",
   "b": "\"Awake, psaltery and harp: I myself will awake early\" (v. 2) makes rising early to praise a chosen habit rather than something that simply happens."
  },
  {
   "h": "Vast imagery for the scale of God's character",
   "b": "\"Thy mercy is great above the heavens: and thy truth reacheth unto the clouds\" (v. 4) reaches for the sky itself to measure something that ultimately exceeds it."
  },
  {
   "h": "Startling, almost dismissive imagery of sovereignty over enemies",
   "b": "\"Moab is my washpot; over Edom will I cast out my shoe\" (v. 9) pictures hostile nations reduced to the status of ordinary household objects under God's rule."
  },
  {
   "h": "Human help named vain before divine help is claimed",
   "b": "\"Give us help from trouble: for vain is the help of man. Through God we shall do valiantly\" (v. 12-13) states plainly what all the preceding praise has been building toward."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 57:7-11 · Psalm 60:6-12 · Romans 8:31",
   "qs": [
    {
     "th": "This psalm is drawn almost entirely from Psalm 57:7-11 and Psalm 60:6-12, two earlier psalms David wrote in very different circumstances, now joined into one song, while Romans 8:31 asks the same question this psalm answers — if God is for us, who can be against us.",
     "q": "Read Psalm 57:7-11, Psalm 60:6-12, and Romans 8:31 alongside today's psalm. What might it mean that David combined two older songs from different seasons of his life into this one new psalm of confidence?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"O God, my heart is fixed\" (v. 1) describes a settled resolve rather than a passing feeling.",
     "q": "Is your own praise more often a fixed resolve or dependent on your mood in the moment — and what would it take to make it more the former?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I myself will awake early\" (v. 2) shows a deliberate choice to prioritize praise.",
     "q": "Where might the Holy Spirit be inviting you to build a more deliberate rhythm of praise into your day?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thy mercy is great above the heavens: and thy truth reacheth unto the clouds\" (v. 4).",
     "q": "Spend a few minutes praising God simply for the vastness of his mercy and truth, without asking for anything yet."
    }
   ]
  }
 ]
},
// Day 403
{
 "ref": "Deuteronomy 21",
 "tag": "Old Testament",
 "api": "deuteronomy+21",
 "sum": [
  "Moses instructs that if a slain body is found in a field with the killer unknown, the elders of the nearest city must take a heifer that has never been worked, break its neck in a rough, unplowed valley, and wash their hands over it, declaring that their hands did not shed the blood and pleading with the LORD to be merciful and not lay innocent blood to Israel's charge.",
  "He instructs that a man who takes a beautiful woman captive in war and desires her as a wife must bring her home, let her shave her head, pare her nails, and mourn her father and mother a full month before he may go in unto her, and if he no longer delights in her, he must let her go free rather than sell her for money, because he has humbled her.",
  "He instructs that a stubborn and rebellious son who will not obey his parents and is a glutton and a drunkard is to be brought before the elders at the gate and stoned by all the men of the city, so that Israel hears and fears and puts away such evil.",
  "The chapter closes with the instruction that if a man guilty of a capital crime is hanged on a tree, his body must not remain there overnight but must be buried the same day, since he that is hanged is accursed of God and the land must not be defiled."
 ],
 "nug": [
  {
   "h": "Communal responsibility taken seriously even without a known culprit",
   "b": "\"Our hands have not shed this blood, neither have our eyes seen it\" (v. 7) has the elders formally declare their innocence even for a crime committed by an unknown hand, refusing to let the matter simply pass unaddressed."
  },
  {
   "h": "An animal that has done no work standing in for a wasted life",
   "b": "The heifer required is one \"which hath not been wrought with, and which hath not drawn in the yoke\" (v. 3), an unused life offered in place of one unaccounted for."
  },
  {
   "h": "Grief given deliberate time even in wartime",
   "b": "The captive woman is granted \"a full month\" to \"bewail her father and her mother\" (v. 13) before anything further happens, a striking allowance of space for mourning."
  },
  {
   "h": "Dignity protected even after a relationship ends",
   "b": "\"Thou shalt not sell her at all for money, thou shalt not make merchandise of her, because thou hast humbled her\" (v. 14) refuses to let a woman be treated as property even once she is no longer wanted."
  },
  {
   "h": "A phrase later applied directly to the cross",
   "b": "\"He that is hanged is accursed of God\" (v. 23) becomes, centuries later, the exact language Paul uses to describe Christ's own death."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Galatians 3:13 · Numbers 35:33 · Exodus 20:12",
   "qs": [
    {
     "th": "Paul quotes verse 23 directly in Galatians 3:13, declaring that Christ \"hath redeemed us from the curse of the law, being made a curse for us,\" Numbers 35:33 explains why unresolved bloodshed defiles the land, and Exodus 20:12 underlies the honour due to parents that the rebellious son had refused.",
     "q": "Read Galatians 3:13, Numbers 35:33, and Exodus 20:12 alongside today's chapter. How does seeing Paul apply the curse of being \"hanged on a tree\" to Jesus change how you read this difficult law?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The captive woman was given \"a full month\" to grieve before anything further was required of her (v. 13).",
     "q": "Do you tend to give yourself, or others, real space to grieve a loss before moving forward, or do you rush past it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"He that is hanged is accursed of God\" (v. 23) points forward to Christ bearing a curse that was not his own.",
     "q": "Take a moment to let the Holy Spirit remind you what it cost for Christ to become a curse on your behalf."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The elders' hand-washing ritual involved a formal admission and plea for mercy over unresolved guilt (v. 7-8).",
     "q": "Bring before God anything unresolved in your own life that needs this same honest naming and plea for mercy."
    }
   ]
  }
 ]
},
// Day 404
{
 "ref": "Luke 14",
 "tag": "New Testament",
 "api": "luke+14",
 "sum": [
  "Jesus heals a man with dropsy on the sabbath in the house of a chief Pharisee, defending the act by asking which of them would not pull an ox or an ass out of a pit on the sabbath day, and no one is able to answer him.",
  "Noticing how guests chose the chief seats, he teaches that whoever is bidden to a wedding feast should sit down in the lowest room rather than the highest, since whoever exalts himself will be abased and whoever humbles himself will be exalted, and tells his host to invite the poor, maimed, lame, and blind rather than those who can repay him.",
  "He tells the parable of a certain man who made a great supper and invited many, only to have them excuse themselves over land, oxen, and a new marriage, so the master sends his servant to bring in the poor, maimed, halt, and blind, and finally to compel others to come in that his house may be filled.",
  "Turning to the great crowds following him, Jesus teaches the cost of discipleship — that whoever does not, by comparison, hate father, mother, and even his own life cannot be his disciple, that one must count the cost like a builder or a king before battle, and that a disciple must forsake all, closing with the warning that salt which has lost its savour is good for nothing."
 ],
 "nug": [
  {
   "h": "A practical question left unanswered",
   "b": "\"Which of you shall have an ass or an ox fallen into a pit, and will not straightway pull him out on the sabbath day?\" (v. 5) argues from common, everyday compassion straight into the sabbath healing no one present could dispute."
  },
  {
   "h": "A reversal principle drawn from ordinary table manners",
   "b": "\"Whosoever exalteth himself shall be abased; and he that humbleth himself shall be exalted\" (v. 11) turns simple wedding-feast seating etiquette into a statement about the whole shape of God's kingdom."
  },
  {
   "h": "Legitimate concerns becoming reasons for refusal",
   "b": "The excuses of newly bought land, five yoke of oxen, and a new marriage (v. 18-20) show ordinary, even reasonable commitments quietly displacing an invitation."
  },
  {
   "h": "Urgency behind an open invitation",
   "b": "\"Compel them to come in, that my house may be filled\" (v. 23) shows the master's determination to fill the table after the first guests refuse."
  },
  {
   "h": "A stark, total claim paired with a warning about uselessness",
   "b": "\"Whosoever he be of you that forsaketh not all that he hath, he cannot be my disciple\" (v. 33), followed immediately by the image of salt that has \"lost his savour\" (v. 34), presses the cost of following Jesus without softening it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 22:1-14 · Luke 9:23 · Proverbs 25:6-7",
   "qs": [
    {
     "th": "Matthew 22:1-14 records a parallel parable of a wedding feast met with excuses and refusal, Luke 9:23 records Jesus's earlier call to take up the cross daily, and Proverbs 25:6-7 already counselled not to take the highest room before a great man, the very wisdom Jesus builds on in verse 8-10.",
     "q": "Read Matthew 22:1-14, Luke 9:23, and Proverbs 25:6-7 alongside today's chapter. How does seeing this teaching repeated and rooted in older wisdom shape your sense of how seriously Jesus means the cost of discipleship?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The excuses in the parable were land, oxen, and marriage — ordinary, legitimate commitments (v. 18-20).",
     "q": "What ordinary, even legitimate commitment in your own life most often crowds out your response to God's invitation?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus calls his followers to \"count the cost\" before committing, like a builder or a king (v. 28-32).",
     "q": "Take a moment to honestly count the cost of following Jesus in your current season — what is he actually asking of you?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Whosoever he be of you that forsaketh not all that he hath, he cannot be my disciple\" (v. 33) is a weighty, total claim.",
     "q": "Sit quietly with this claim for a few minutes, simply listening for what God might want to say to you about it, without rushing to respond."
    }
   ]
  }
 ]
},
// Day 405
{
 "ref": "Psalm 109",
 "tag": "Psalms & Wisdom",
 "api": "psalms+109",
 "sum": [
  "David cries out for God not to hold his peace, describing enemies who have spoken against him with a lying tongue, compassed him about with hateful words, and fought against him without cause, rewarding his love with accusation and his good with evil.",
  "He prays a series of imprecations against a chief accuser — that his days be few and another take his office, that his children be fatherless and his wife a widow, and that none extend mercy to him — explaining that this man never remembered to show mercy but persecuted the poor and needy and the brokenhearted.",
  "He turns from these curses to plead with God directly, asking him to act for his name's sake because his mercy is good, describing himself as poor and needy with a heart wounded within him, passing away like a shadow and tossed about like a locust.",
  "The psalm closes with a vow to greatly praise the LORD with his mouth among the multitude, declaring confidence that God will stand at the right hand of the poor to save him from those who condemn his soul."
 ],
 "nug": [
  {
   "h": "Prayer chosen as the response to betrayal",
   "b": "\"For my love they are my adversaries: but I give myself unto prayer\" (v. 4) shows David turning to prayer — not silence, not retaliation — in the very act of naming his enemies' hostility."
  },
  {
   "h": "A verse later applied to Judas by name",
   "b": "\"Let his days be few; and let another take his office\" (v. 8) is the exact verse Peter quotes in Acts concerning the replacement of Judas."
  },
  {
   "h": "The psalm's pivot from the enemy's fate to God's own character",
   "b": "\"But do thou for me, O GOD the Lord, for thy name's sake: because thy mercy is good, deliver thou me\" (v. 21) shifts the entire prayer's ground from what the accuser deserves to who God is."
  },
  {
   "h": "A vulnerable self-description at the psalm's centre",
   "b": "\"I am poor and needy, and my heart is wounded within me\" (v. 22) drops the imprecatory language for a moment of plain, unguarded honesty."
  },
  {
   "h": "Confidence that God takes the defendant's side",
   "b": "\"He shall stand at the right hand of the poor, to save him from those that condemn his soul\" (v. 31) closes the psalm with assurance that God himself acts as advocate for the one being wrongly judged."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 1:20 · Romans 12:19 · Psalm 35:1",
   "qs": [
    {
     "th": "Peter quotes verse 8 directly in Acts 1:20 concerning the choosing of Judas's replacement, Romans 12:19 instructs believers to leave vengeance to God rather than repay evil themselves, and Psalm 35:1 offers a similar plea against unjust accusers.",
     "q": "Read Acts 1:20, Romans 12:19, and Psalm 35:1 alongside today's psalm. How does knowing this psalm is later applied to Judas shape how you understand David's harsh words against his accuser?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"For my love they are my adversaries: but I give myself unto prayer\" (v. 4) shows David praying rather than retaliating when wronged.",
     "q": "When someone has repaid your good with evil, is prayer usually your first response, or does it come only after other reactions have failed?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I am poor and needy, and my heart is wounded within me\" (v. 22) is a moment of raw honesty before God.",
     "q": "Is there a wound you've been guarding rather than bringing honestly before God, the way David does here?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "David ultimately leaves judgment of his accuser to God, asking instead for his own deliverance (v. 21, 31).",
     "q": "Bring before God any situation where you're tempted to seek justice yourself, and ask him instead to act on your behalf."
    }
   ]
  }
 ]
},
// Day 406
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A washpot and a shoe used to picture total sovereignty",
   "b": "\"Moab is my washpot; over Edom will I cast out my shoe\" (Psalm 108:9) closed a week that moved through refuge, warfare, and costly discipleship with a striking reminder that no hostile power lies outside God's rule."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 19's cities of refuge and law of witnesses, Deuteronomy 20's instructions for warfare and its exemptions for the fearful, Psalm 108's fixed heart of praise, Deuteronomy 21's rituals for unsolved murder and the rebellious son, Luke 14's teaching on humility and the cost of discipleship, and Psalm 109's imprecatory prayer turning to trust in God's mercy.",
     "q": "Which moment from the week most challenged you — the warning that \"whosoever he be of you that forsaketh not all that he hath, he cannot be my disciple\" (Luke 14:33), or the elders' plea \"lay not innocent blood unto thy people Israel's charge\" (Deuteronomy 21:8)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"He shall stand at the right hand of the poor, to save him from those that condemn his soul\" (Psalm 109:31) closed this week's reading in confidence.",
     "q": "Sit quietly for a few minutes and rest in the assurance that God stands ready to help you, whatever this week has stirred up."
    }
   ]
  }
 ]
},
// Day 407
{
 "ref": "Deuteronomy 22",
 "tag": "Old Testament",
 "api": "deuteronomy+22",
 "sum": [
  "Moses gives a series of laws about neighbourly responsibility — returning a neighbour's straying ox, sheep, or ass, or a lost garment, and helping a fallen animal back up rather than looking away.",
  "Further laws follow: letting a mother bird go free if her nest is found (taking only the young), building a parapet on a new roof so no one falls from it, not sowing a vineyard with mixed seed, not plowing with an ox and an ass together, not wearing a garment of mixed wool and linen, and making fringes on the four quarters of one's clothing.",
  "Laws address a bride's virginity being disputed after marriage, with tokens presented to the elders and penalties set depending on whether the accusation proves true or false.",
  "The chapter closes with penalties for adultery and rape, distinguishing cases in the city from cases in the open field, and forbids a man from marrying his father's wife."
 ],
 "nug": [
  {
   "h": "Loving your neighbour in the ordinary and the lost",
   "b": "\"Thou shalt not see the brother's ox or his sheep go astray, and hide thyself from them: thou shalt in any case bring them again unto thy brother\" (v. 1) makes ordinary honesty toward a neighbour's stray animal, or fallen ox, a matter of covenant obligation, not option."
  },
  {
   "h": "Mercy toward a mother bird",
   "b": "\"Thou shalt in any wise let the dam go, and take the young to thee; that it may be well with thee, and that thou mayest prolong thy days\" (v. 6-7) ties even this small kindness toward a nesting bird to Israel's own flourishing."
  },
  {
   "h": "A rail built before anyone falls",
   "b": "\"Thou shalt make a battlement for thy roof, that thou bring not blood upon thine house, if any man fall from thence\" (v. 8) turns basic home safety into bloodguilt prevention, a striking picture of preventive responsibility."
  },
  {
   "h": "Fringes as a wearable reminder",
   "b": "\"Thou shalt make thee fringes upon the four quarters of thy vesture\" (v. 12) gives Israel tassels meant to keep the law visibly, physically present in daily life."
  },
  {
   "h": "A society that verifies before it punishes",
   "b": "\"Then shall the father of the damsel, and her mother, take and bring forth the tokens of the damsel's virginity unto the elders\" (v. 15) shows evidence, not mere accusation, required before Israel's courts act."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 23:4-5 · Numbers 15:37-41 · Matthew 22:37-39",
   "qs": [
    {
     "th": "Exodus 23:4-5 gives the same command about a straying or fallen animal even when it belongs to an enemy, Numbers 15:37-41 explains the fringes as a reminder to look upon and remember all the commandments, and Matthew 22:37-39 sums up the whole law in love for God and neighbour.",
     "q": "Read Exodus 23:4-5, Numbers 15:37-41, and Matthew 22:37-39 alongside today's chapter. How do these small, practical laws about an ox, a roof, and a garment work out love of neighbour in ordinary daily choices?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt not see the brother's ox or his sheep go astray, and hide thyself from them\" (v. 1) forbids looking away from a neighbour's need.",
     "q": "Where in your own life are you most tempted to look away rather than get involved in a neighbour's trouble?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The fringes on the four quarters of the garment (v. 12) were meant as a constant, visible reminder of God's commands.",
     "q": "What everyday reminder might the Spirit be inviting you to build into your life this week?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt make a battlement for thy roof, that thou bring not blood upon thine house\" (v. 8) treats failure to prevent harm as real guilt.",
     "q": "Confess to God any place where you've quietly hidden yourself from a responsibility you knew was yours."
    }
   ]
  }
 ]
},
// Day 408
{
 "ref": "Deuteronomy 23",
 "tag": "Old Testament",
 "api": "deuteronomy+23",
 "sum": [
  "Moses sets out who may and may not enter the assembly of the LORD — eunuchs and those of illegitimate birth are excluded, as are Ammonites and Moabites to the tenth generation, while Edomites and Egyptians may be admitted in the third generation.",
  "Instructions follow for keeping the war camp holy and clean, including a place outside the camp for sanitation, grounded in the reminder that the LORD walks in the midst of the camp.",
  "Further laws forbid returning an escaped servant to his master, forbid cult prostitution among Israel's sons and daughters, and forbid charging interest to a fellow Israelite, though it is permitted with a foreigner.",
  "The chapter closes by commanding that vows made to the LORD be kept without delay, and permits eating a neighbour's grapes or standing corn by hand while passing through, but not carrying any away in a vessel or with a sickle."
 ],
 "nug": [
  {
   "h": "Who may enter the assembly",
   "b": "\"An Ammonite or Moabite shall not enter into the congregation of the LORD; even to their tenth generation shall they not enter\" (v. 3) sets a firm boundary that later Scripture will complicate in surprising ways."
  },
  {
   "h": "Holiness expected even in the war camp",
   "b": "\"For the LORD thy God walketh in the midst of thy camp... therefore shall thy camp be holy\" (v. 14) grounds even wartime sanitation rules in the reality of God's own presence among his people."
  },
  {
   "h": "Refuge for the escaped servant",
   "b": "\"Thou shalt not deliver unto his master the servant which is escaped from his master unto thee\" (v. 15) offers protection rather than return to someone fleeing bondage."
  },
  {
   "h": "Vows that must be kept",
   "b": "\"That which is gone out of thy lips thou shalt keep and perform\" (v. 23) holds spoken commitments to God to a high standard."
  },
  {
   "h": "A generous boundary between gleaning and stealing",
   "b": "\"When thou comest into thy neighbour's vineyard, then thou mayest eat grapes thy fill... but thou shalt not put any in thy vessel\" (v. 24) draws a clear, workable line between hospitality and theft."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Ruth 4:13-17 · Ecclesiastes 5:4-5 · Matthew 12:1",
   "qs": [
    {
     "th": "Ruth 4:13-17 shows a Moabite woman becoming King David's great-grandmother despite today's exclusion law, Ecclesiastes 5:4-5 warns it is better not to vow than to vow and not pay, and Matthew 12:1 shows Jesus's disciples plucking grain in a field much as this chapter permits.",
     "q": "Read Ruth 4:13-17, Ecclesiastes 5:4-5, and Matthew 12:1 alongside today's chapter. How does Ruth's story shape the way you read Israel's boundary lines here?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"That which is gone out of thy lips thou shalt keep and perform\" (v. 23) holds spoken vows to a high standard.",
     "q": "Is there a promise or commitment you've made to God or others that you've let slide?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"For the LORD thy God walketh in the midst of thy camp\" (v. 14) pictures God's presence among his ordinary, everyday people.",
     "q": "Where do you sense God walking in the midst of your ordinary life this week?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The law makes provision for the escaped servant, the poor gleaner, and even excluded nations in later generations (v. 15, 24).",
     "q": "Bring before God someone on the margins in your own community who needs welcome or provision."
    }
   ]
  }
 ]
},
// Day 409
{
 "ref": "Psalm 110",
 "tag": "Psalms & Wisdom",
 "api": "psalms+110",
 "sum": [
  "This short but weighty psalm opens with a divine oracle: \"The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.\"",
  "The LORD promises to send this ruler's strength out of Zion, that he will rule in the midst of his enemies with a willing people gathered to him in the beauty of holiness.",
  "The LORD swears, without changing his mind, that this ruler is \"a priest for ever after the order of Melchizedek.\"",
  "The psalm closes picturing this priest-king striking through kings, judging among the nations, and finally lifting up his head in triumph."
 ],
 "nug": [
  {
   "h": "An oracle Jesus applies to himself",
   "b": "\"The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool\" (v. 1) is the verse Jesus quotes to silence the Pharisees, asking how David's own Lord could also be David's son."
  },
  {
   "h": "A priesthood outside the Levitical line",
   "b": "\"Thou art a priest for ever after the order of Melchizedek\" (v. 4) becomes the foundation of a whole New Testament argument for Christ's unique, permanent priesthood."
  },
  {
   "h": "A king who conquers among his enemies",
   "b": "\"Rule thou in the midst of thine enemies\" (v. 2) pictures reign not after opposition ends but in the very midst of it."
  },
  {
   "h": "Willing service pictured at dawn",
   "b": "\"Thy people shall be willing in the day of thy power... thou hast the dew of thy youth\" (v. 3) paints fresh, willing devotion rather than reluctant compliance."
  },
  {
   "h": "Victory pictured in stark, ancient battle terms",
   "b": "\"He shall judge among the heathen... therefore shall he lift up the head\" (v. 6-7) closes the psalm with unmistakable confidence in final triumph."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 22:41-45 · Hebrews 5:6-10 · Acts 2:34-36",
   "qs": [
    {
     "th": "Matthew 22:41-45 records Jesus quoting verse 1 to question how the Messiah can be both David's son and David's Lord, Hebrews 5:6-10 builds Christ's priesthood directly on verse 4, and Acts 2:34-36 has Peter quote this psalm at Pentecost to prove Jesus is both Lord and Christ.",
     "q": "Read Matthew 22:41-45, Hebrews 5:6-10, and Acts 2:34-36 alongside today's psalm. How does seeing this short psalm quoted so often in the New Testament shape your sense of who Jesus is?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou art a priest for ever after the order of Melchizedek\" (v. 4) points to a priesthood that never ends.",
     "q": "What does it mean to you personally that Christ's priestly work on your behalf never needs repeating or renewing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thy people shall be willing in the day of thy power\" (v. 3) describes a people made willing, not merely compelled.",
     "q": "Ask the Spirit to search whether your obedience today comes from willingness or mere duty."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This short psalm pictures Christ enthroned at God's right hand, ruling and interceding as priest forever.",
     "q": "Spend a few minutes simply adoring Christ as the enthroned, reigning priest-king this psalm describes."
    }
   ]
  }
 ]
},
// Day 410
{
 "ref": "Deuteronomy 24",
 "tag": "Old Testament",
 "api": "deuteronomy+24",
 "sum": [
  "Moses gives the law behind the divorce certificate, later revisited by Jesus, and sets out a year's exemption from war and business for a newly married man so he may cheer up his wife.",
  "Further protections follow: a millstone may not be taken as a pledge since it is a man's livelihood, kidnapping a fellow Israelite to sell him is a capital offence, and Israel is warned to remember what happened to Miriam regarding leprosy.",
  "Laws govern fairness in taking pledges — not entering a house to fetch one, and returning a poor man's garment by sunset — and require that a hired servant be paid his wages the same day, since he is poor and sets his heart on it.",
  "The chapter closes by forbidding punishment of fathers for children's sins or children for fathers', insisting on justice for the stranger, fatherless, and widow, and commanding gleaning laws that leave the forgotten sheaf, olive boughs, and grape gleanings for those in need."
 ],
 "nug": [
  {
   "h": "The origin of the divorce certificate Jesus addresses",
   "b": "\"Then let him write her a bill of divorcement... and send her out of his house\" (v. 1) is the very provision Jesus revisits in Matthew 19, explaining it was given because of hardness of heart."
  },
  {
   "h": "A year given to cheer up a new wife",
   "b": "\"He shall be free at home one year, and shall cheer up his wife which he hath taken\" (v. 5)"
  },
  {
   "h": "A millstone too essential to pledge",
   "b": "\"No man shall take the nether or the upper millstone to pledge: for he taketh a man's life to pledge\" (v. 6)"
  },
  {
   "h": "A poor man's garment returned by sunset",
   "b": "\"Thou shalt deliver him the pledge again when the sun goeth down, that he may sleep in his own raiment, and bless thee\" (v. 13)"
  },
  {
   "h": "Same-day wages for the poor labourer",
   "b": "\"At his day thou shalt give him his hire, neither shall the sun go down upon it; for he is poor, and setteth his heart upon it\" (v. 15)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 19:3-9 · James 5:4 · Ruth 2:2-3",
   "qs": [
    {
     "th": "Matthew 19:3-9 shows Jesus revisiting the divorce provision of verse 1 and tracing it back to hardness of heart rather than God's original design, James 5:4 warns that wages kept back from labourers cry out to the Lord, and Ruth 2:2-3 shows the gleaning law of verses 19-21 lived out in Ruth's own story.",
     "q": "Read Matthew 19:3-9, James 5:4, and Ruth 2:2-3 alongside today's chapter. How does seeing these laws echoed later in Scripture change how you read them?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"At his day thou shalt give him his hire... for he is poor, and setteth his heart upon it\" (v. 15) insists on prompt fairness toward the vulnerable.",
     "q": "Is there someone you owe something to — money, an apology, a kindness — that you've been slow to give?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The law makes repeated provision for the stranger, fatherless, and widow through gleaning (v. 19-21).",
     "q": "Ask the Spirit to bring to mind someone vulnerable he wants you to notice and provide for this week."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Remember that thou wast a bondman in Egypt\" (v. 22) grounds Israel's justice for the vulnerable in gratitude for their own deliverance.",
     "q": "Thank God for a time he showed you mercy, and let that gratitude shape how you treat someone vulnerable today."
    }
   ]
  }
 ]
},
// Day 411
{
 "ref": "Luke 15",
 "tag": "New Testament",
 "api": "luke+15",
 "sum": [
  "As Pharisees and scribes murmur that Jesus receives sinners and eats with them, he tells the parable of the lost sheep — a shepherd leaves the ninety-nine to find the one, and there is more joy in heaven over one sinner that repents.",
  "He follows with the parable of the lost coin, a woman sweeping her house diligently until she finds it, then calling her friends and neighbours to rejoice with her.",
  "In the parable of the prodigal son, the younger son demands his inheritance, wastes it in riotous living, and is reduced to want in a famine, until he comes to himself and resolves to return to his father, who runs to meet him while he is yet a great way off and restores him with a robe, a ring, shoes, and a fatted calf.",
  "The elder brother refuses to join the celebration, and the father goes out to plead with him, explaining, \"this thy brother was dead, and is alive again; and was lost, and is found.\""
 ],
 "nug": [
  {
   "h": "Joy over one that repents",
   "b": "\"I say unto you, that likewise joy shall be in heaven over one sinner that repenteth, more than over ninety and nine just persons, which need no repentance\" (v. 7)"
  },
  {
   "h": "Diligent searching for what is lost",
   "b": "\"Doth not light a candle, and sweep the house, and seek diligently till she find it?\" (v. 8)"
  },
  {
   "h": "Coming to himself in the far country",
   "b": "\"And when he came to himself, he said... I will arise and go to my father\" (v. 17-18)"
  },
  {
   "h": "A father who runs",
   "b": "\"When he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him\" (v. 20)"
  },
  {
   "h": "The father's plea to the elder brother",
   "b": "\"This thy brother was dead, and is alive again; and was lost, and is found\" (v. 32)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 18:12-14 · Ezekiel 34:11-16 · Romans 5:8",
   "qs": [
    {
     "th": "Matthew 18:12-14 records Jesus's parallel parable of the lost sheep, Ezekiel 34:11-16 pictures God himself as the shepherd who seeks out his scattered sheep, and Romans 5:8 grounds this whole chapter's welcome in Christ dying for us while we were still sinners.",
     "q": "Read Matthew 18:12-14, Ezekiel 34:11-16, and Romans 5:8 alongside today's chapter. Which of the three pictures — sheep, coin, or son — speaks most directly to your own experience of being found?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"When he came to himself, he said... I will arise and go to my father\" (v. 17-18) marks the turning point of the whole parable.",
     "q": "Is there an area of your life where you need to 'come to yourself' and turn back toward God?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The elder brother stood outside, angry, while the father pleaded with him to come in and join the celebration (v. 28-32).",
     "q": "Ask the Spirit whether there's any resentment in you, like the elder brother's, that keeps you from sharing God's joy over someone else."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"This thy brother was dead, and is alive again; and was lost, and is found\" (v. 32) is the father's gentle plea to his elder son.",
     "q": "Sit quietly and listen for whether God is inviting you, like the elder brother, to simply come in and join his joy."
    }
   ]
  }
 ]
},
// Day 412
{
 "ref": "Psalm 113",
 "tag": "Psalms & Wisdom",
 "api": "psalms+113",
 "sum": [
  "This psalm opens the Hallel — praise, O servants of the LORD, praise his name from the rising of the sun to its going down.",
  "The LORD is high above all nations, his glory above the heavens, yet he humbles himself to behold the things in heaven and on earth.",
  "He raises the poor out of the dust and lifts the needy out of the dunghill, setting them among princes, even the princes of his people.",
  "He gives the barren woman a home, making her a joyful mother of children — the psalm closes as it began, with \"Praise ye the LORD.\""
 ],
 "nug": [
  {
   "h": "Praise stretched across the whole day and earth",
   "b": "\"From the rising of the sun unto the going down of the same the LORD's name is to be praised\" (v. 3)"
  },
  {
   "h": "A God high above yet stooping low",
   "b": "\"Who is like unto the LORD our God, who dwelleth on high, who humbleth himself to behold the things that are in heaven, and in the earth!\" (v. 5-6)"
  },
  {
   "h": "Lifting the lowest from the lowest place",
   "b": "\"He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill\" (v. 7)"
  },
  {
   "h": "A barren woman made a joyful mother",
   "b": "\"He maketh the barren woman to keep house, and to be a joyful mother of children\" (v. 9)"
  },
  {
   "h": "First of the songs sung at Passover",
   "b": "\"Praise ye the LORD. Praise, O ye servants of the LORD, praise the name of the LORD\" (v. 1) opens the Hallel psalms (113-118), the very songs Jesus and his disciples likely sang at the Last Supper."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 1:52-53 · 1 Samuel 2:8 · Matthew 26:30",
   "qs": [
    {
     "th": "Luke 1:52-53 echoes this psalm's language of lifting the humble and filling the hungry in Mary's own song, 1 Samuel 2:8 has Hannah praise God in almost identical words after her own barrenness was ended, and Matthew 26:30 notes Jesus and his disciples sang a hymn — likely from this very Hallel set — before going out to the Mount of Olives.",
     "q": "Read Luke 1:52-53, 1 Samuel 2:8, and Matthew 26:30 alongside today's psalm. How does it change this psalm to imagine Jesus singing it himself on the night before his death?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill\" (v. 7) describes God's specific attention to the lowest places.",
     "q": "Where in your life right now do you most need to trust that God lifts up the lowly?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Who humbleth himself to behold the things that are in heaven, and in the earth\" (v. 6) pictures God stooping to notice ordinary things.",
     "q": "Ask the Spirit to help you notice where God is quietly at work in your ordinary day today."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This psalm praises God's name \"from the rising of the sun unto the going down of the same\" (v. 3).",
     "q": "Thank God for specific ways he has lifted you up or provided for you, praising him across the whole shape of your day."
    }
   ]
  }
 ]
},
// Day 413
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A psalm of praise closing a week of law and grace",
   "b": "\"He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill\" (Psalm 113:7) closed a week that moved from Deuteronomy's careful laws of neighbourly care, through the priest-king of Psalm 110, to the father who runs to meet his returning son in Luke 15."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 22's laws of neighbourly responsibility, Deuteronomy 23's holiness within the camp, Psalm 110's oracle of the priest-king, Deuteronomy 24's protections for the poor and vulnerable, Luke 15's three parables of the lost, and Psalm 113's praise of the God who lifts the lowly.",
     "q": "Which moment from the week most challenged you — the father's plea \"this thy brother was dead, and is alive again\" (Luke 15:32), or the command not to \"hide thyself\" from a neighbour's need (Deuteronomy 22:1)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"He raiseth up the poor out of the dust, and lifteth the needy out of the dunghill\" (Psalm 113:7) closed this week's reading with praise.",
     "q": "Sit quietly for a few minutes and rest in the truth that God lifts up the lowly — including you."
    }
   ]
  }
 ]
},
// Day 414
{
 "ref": "Deuteronomy 25",
 "tag": "Old Testament",
 "api": "deuteronomy+25",
 "sum": [
  "Moses limits judicial beating to forty stripes, so that a punished brother should not seem vile in the eyes of the community, and forbids muzzling an ox while it treads out the corn.",
  "The levirate marriage law follows — a brother must marry his dead brother's childless widow to raise up his name, and if he refuses, the widow publicly removes his shoe and spits in his face before the elders.",
  "A case is given of a woman who grabs a man's private parts while trying to help her husband in a fight, for which her hand is to be cut off without pity.",
  "The chapter closes by requiring honest weights and measures, since dishonesty in them is an abomination to the LORD, and commands Israel to remember, and eventually blot out, Amalek for attacking the weak and faint stragglers from the rear when Israel came out of Egypt."
 ],
 "nug": [
  {
   "h": "A limit placed on punishment itself",
   "b": "\"Forty stripes he may give him, and not exceed: lest, if he should exceed, and beat him above these with many stripes, then thy brother should seem vile unto thee\" (v. 3)"
  },
  {
   "h": "An ox left free to eat while it works",
   "b": "\"Thou shalt not muzzle the ox when he treadeth out the corn\" (v. 4) — Paul later applies this principle to paying those who labour in ministry."
  },
  {
   "h": "Family duty made public when refused",
   "b": "\"His name shall be called in Israel, The house of him that hath his shoe loosed\" (v. 10)"
  },
  {
   "h": "Weights and measures called an abomination",
   "b": "\"Thou shalt not have in thy bag divers weights, a great and a small... For all that do such things, and all that do unrighteously, are an abomination unto the LORD thy God\" (v. 13,16)"
  },
  {
   "h": "A command to remember and to forget",
   "b": "\"Thou shalt blot out the remembrance of Amalek from under heaven; thou shalt not forget\" (v. 19) — remembering the attack in order to finally erase its memory."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 9:9-10 · Ruth 4:7-8 · 1 Samuel 15:2-3",
   "qs": [
    {
     "th": "1 Corinthians 9:9-10 has Paul apply the unmuzzled-ox law of verse 4 directly to paying those who preach the gospel, Ruth 4:7-8 shows the same shoe-removal custom used later to formalise a kinsman-redeemer transaction, and 1 Samuel 15:2-3 records God finally commanding Israel to deal with Amalek as this chapter anticipates.",
     "q": "Read 1 Corinthians 9:9-10, Ruth 4:7-8, and 1 Samuel 15:2-3 alongside today's chapter. How does seeing these customs and commands echoed later shape your sense of the law's ongoing relevance?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"All that do such things, and all that do unrighteously, are an abomination unto the LORD\" (v. 16) calls out dishonesty in ordinary transactions.",
     "q": "Where might you be tempted to use different standards for yourself than for others?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The law limits even a just punishment, so a guilty brother should not \"seem vile\" in the eyes of the community (v. 3).",
     "q": "Ask the Spirit whether there's someone you've written off as beyond dignity or mercy."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This chapter's penalties are severe, reflecting how seriously God takes justice, honesty, and family faithfulness.",
     "q": "Confess to God any place where your own honesty or fairness has fallen short this week."
    }
   ]
  }
 ]
},
// Day 415
{
 "ref": "Deuteronomy 26",
 "tag": "Old Testament",
 "api": "deuteronomy+26",
 "sum": [
  "Moses instructs Israel to bring a basket of firstfruits to the priest and recite a historical confession beginning, \"A Syrian ready to perish was my father, and he went down into Egypt.\"",
  "The confession continues through Israel's affliction in Egypt, the LORD's mighty deliverance, and the gift of the land, closing with rejoicing in every good thing the LORD has given.",
  "A third-year tithe is set aside for the Levite, the stranger, the fatherless, and the widow, accompanied by a solemn declaration before the LORD that it has been rightly given.",
  "The chapter closes with a mutual covenant formula — Israel has avouched the LORD to be their God and to walk in his ways, and the LORD has avouched Israel to be his peculiar people, high above all nations in praise, name, and honour."
 ],
 "nug": [
  {
   "h": "A confession rehearsed over a basket of firstfruits",
   "b": "\"A Syrian ready to perish was my father, and he went down into Egypt, and sojourned there with a few, and became there a nation, great, mighty, and populous\" (v. 5)"
  },
  {
   "h": "Deliverance remembered in the act of giving",
   "b": "\"The LORD brought us forth out of Egypt with a mighty hand, and with an outstretched arm... and he hath brought us into this place, and hath given us this land\" (v. 8-9)"
  },
  {
   "h": "Rejoicing commanded alongside giving",
   "b": "\"Thou shalt rejoice in every good thing which the LORD thy God hath given unto thee\" (v. 11)"
  },
  {
   "h": "A solemn declaration over the tithe",
   "b": "\"I have brought away the hallowed things out of mine house, and also have given them unto the Levite, and unto the stranger, to the fatherless, and to the widow\" (v. 13)"
  },
  {
   "h": "A mutual covenant formula",
   "b": "\"Thou hast avouched the LORD this day to be thy God... and the LORD hath avouched thee this day to be his peculiar people\" (v. 17-18)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 6:20-25 · Joshua 24:2-13 · 1 Peter 2:9",
   "qs": [
    {
     "th": "Deuteronomy 6:20-25 gives a similar historical confession to teach children, Joshua 24:2-13 has Joshua later rehearse the same story of deliverance at covenant renewal, and 1 Peter 2:9 picks up the language of a 'peculiar people' for the church.",
     "q": "Read Deuteronomy 6:20-25, Joshua 24:2-13, and 1 Peter 2:9 alongside today's chapter. How does rehearsing your own story of God's deliverance shape your gratitude the way this liturgy shaped Israel's?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thou shalt rejoice in every good thing which the LORD thy God hath given unto thee\" (v. 11) ties worship directly to gratitude for ordinary provision.",
     "q": "What good thing has God given you recently that you haven't paused to thank him for?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The tithe was set aside specifically for the Levite, the stranger, the fatherless, and the widow (v. 12-13).",
     "q": "Ask the Spirit to show you a concrete way to share what you have with someone in need this week."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The whole chapter is built around a confession that begins in near-destruction — \"A Syrian ready to perish was my father\" — and ends in gratitude (v. 5).",
     "q": "Retell your own story of God's deliverance to him in prayer, thanking him for each step along the way."
    }
   ]
  }
 ]
},
// Day 416
{
 "ref": "Psalm 114",
 "tag": "Psalms & Wisdom",
 "api": "psalms+114",
 "sum": [
  "This short, vivid psalm recalls the exodus: \"When Israel went out of Egypt, the house of Jacob from a people of strange language; Judah was his sanctuary, and Israel his dominion.\"",
  "The sea saw it and fled, and the Jordan was driven back, while the mountains skipped like rams and the little hills like lambs.",
  "The psalmist turns and asks the sea, the Jordan, and the mountains what troubled them into such motion.",
  "The psalm closes calling the whole earth to tremble at the presence of the God of Jacob, who turned the rock into a pool of water and flint into a fountain."
 ],
 "nug": [
  {
   "h": "A nation made God's own sanctuary",
   "b": "\"Judah was his sanctuary, and Israel his dominion\" (v. 2)"
  },
  {
   "h": "The sea itself pictured as fleeing",
   "b": "\"The sea saw it, and fled: Jordan was driven back\" (v. 3)"
  },
  {
   "h": "Mountains pictured leaping like young animals",
   "b": "\"The mountains skipped like rams, and the little hills like lambs\" (v. 4)"
  },
  {
   "h": "Creation itself questioned and commanded",
   "b": "\"Tremble, thou earth, at the presence of the Lord, at the presence of the God of Jacob\" (v. 7)"
  },
  {
   "h": "Water drawn from the most unlikely source",
   "b": "\"Which turned the rock into a standing water, the flint into a fountain of waters\" (v. 8)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 14:21-22 · Joshua 3:14-17 · 1 Corinthians 10:1-4",
   "qs": [
    {
     "th": "Exodus 14:21-22 records the actual crossing of the sea this psalm celebrates, Joshua 3:14-17 records the Jordan being driven back a generation later, and 1 Corinthians 10:1-4 has Paul point to the rock that gave water as a picture of Christ.",
     "q": "Read Exodus 14:21-22, Joshua 3:14-17, and 1 Corinthians 10:1-4 alongside today's psalm. How does this psalm's vivid, almost playful imagery change the way you picture these historical events?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm pictures even mountains and seas responding to God's presence with awe (v. 3-4, 7).",
     "q": "What in your own life needs to 'tremble' — that is, be brought back into proper awe of God?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Which turned the rock into a standing water, the flint into a fountain of waters\" (v. 8) recalls God's provision from the most unlikely source.",
     "q": "Ask the Spirit where he might want to bring provision or refreshment from a place in your life that feels as dry as flint."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This short psalm pictures the sea fleeing and mountains skipping like lambs at God's presence (v. 3-4).",
     "q": "Spend a few minutes simply adoring God for his power over creation, using this psalm's own vivid images."
    }
   ]
  }
 ]
},
// Day 417
{
 "ref": "Deuteronomy 27",
 "tag": "Old Testament",
 "api": "deuteronomy+27",
 "sum": [
  "Moses instructs Israel that on crossing the Jordan they are to set up great stones plastered with the words of the law on Mount Ebal.",
  "They are also to build an altar of unhewn stone, on which no tool has been lifted, and offer burnt and peace offerings, rejoicing there before the LORD.",
  "Six tribes are to stand on Mount Gerizim to bless the people and six on Mount Ebal to curse, while the Levites recite a series of curses aloud.",
  "Twelve curses are pronounced — against idolatry, dishonouring parents, moving a landmark, misleading the blind, perverting justice for the vulnerable, various sexual sins, secret murder, and taking a bribe to slay the innocent, ending with a curse on anyone who does not confirm all the words of the law — and to each the people answer, \"Amen.\""
 ],
 "nug": [
  {
   "h": "The law made visible in stone",
   "b": "\"Thou shalt write upon them all the words of this law\" (v. 3) — plastered stones meant the law itself would stand as public, permanent witness."
  },
  {
   "h": "An altar built without human tool",
   "b": "\"There shalt thou build an altar unto the LORD thy God, an altar of stones: thou shalt not lift up any iron tool upon them\" (v. 5-6)"
  },
  {
   "h": "Curses aimed at secret and hidden sins",
   "b": "\"Cursed be he that smiteth his neighbour secretly\" (v. 24) — several of the twelve curses target sins no human court could easily catch."
  },
  {
   "h": "The whole nation answering as one",
   "b": "\"And all the people shall answer and say, Amen\" (v. 15) — a nationwide, verbal amen repeated to every curse."
  },
  {
   "h": "A curse on half-hearted obedience",
   "b": "\"Cursed be he that confirmeth not all the words of this law to do them\" (v. 26) — Paul later quotes this very verse to show the law's demand for total obedience."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joshua 8:30-35 · Galatians 3:10 · Nehemiah 8:5-6",
   "qs": [
    {
     "th": "Joshua 8:30-35 records this exact ceremony carried out once Israel entered the land, Galatians 3:10 has Paul quote verse 26 to show that the law condemns anyone who does not keep all of it, and Nehemiah 8:5-6 records a later generation answering 'Amen, Amen' as the law was read aloud to them.",
     "q": "Read Joshua 8:30-35, Galatians 3:10, and Nehemiah 8:5-6 alongside today's chapter. How does Paul's use of verse 26 shape your understanding of why the law alone cannot save?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Several of the twelve curses target sins done secretly — striking a neighbour in secret, taking a bribe against the innocent (v. 24-25).",
     "q": "Is there anything in your own life you've kept hidden that God is inviting you to bring into the light?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The people were required to answer \"Amen\" aloud to each of the twelve curses, publicly agreeing with God's standard (v. 15-26).",
     "q": "Ask the Spirit to show you where you might be saying 'Amen' with your lips but not truly agreeing in your heart."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Cursed be he that confirmeth not all the words of this law to do them\" (v. 26) exposes how far short every person falls.",
     "q": "Confess before God the ways you fall short of his law, and thank him that in Christ this curse has been answered."
    }
   ]
  }
 ]
},
// Day 418
{
 "ref": "Luke 16",
 "tag": "New Testament",
 "api": "luke+16",
 "sum": [
  "Jesus tells the parable of the unjust steward, commended by his lord for his shrewdness, and teaches his hearers to \"make to yourselves friends of the mammon of unrighteousness.\"",
  "He teaches that no servant can serve two masters, that one cannot serve both God and mammon, and that faithfulness in small things reflects faithfulness in much, while the money-loving Pharisees deride him.",
  "Jesus notes that the law and the prophets were until John and the kingdom of God is now preached, and adds a brief word on divorce and adultery.",
  "He then tells of a rich man and a beggar named Lazarus who lay at his gate — after death Lazarus is carried to Abraham's bosom while the rich man is in torment, separated by a great gulf, and Abraham replies to his plea for his five brothers that if they will not hear Moses and the prophets, neither will they be persuaded though one rose from the dead."
 ],
 "nug": [
  {
   "h": "Shrewdness commended, though not dishonesty itself",
   "b": "\"The lord commended the unjust steward, because he had done wisely: for the children of this world are in their generation wiser than the children of light\" (v. 8)"
  },
  {
   "h": "A stark either/or about money",
   "b": "\"No servant can serve two masters... Ye cannot serve God and mammon\" (v. 13)"
  },
  {
   "h": "Small faithfulness tested before large",
   "b": "\"He that is faithful in that which is least is faithful also in much\" (v. 10)"
  },
  {
   "h": "A named beggar and an unnamed rich man",
   "b": "\"There was a certain rich man... And there was a certain beggar named Lazarus, which was laid at his gate, full of sores\" (v. 19-20)"
  },
  {
   "h": "A fixed gulf and a final appeal to Scripture",
   "b": "\"Between us and you there is a great gulf fixed... If they hear not Moses and the prophets, neither will they be persuaded, though one rose from the dead\" (v. 26, 31)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 6:24 · 1 Timothy 6:17-19 · John 11:43-44",
   "qs": [
    {
     "th": "Matthew 6:24 records Jesus giving the same mammon teaching in the Sermon on the Mount, 1 Timothy 6:17-19 instructs the rich to be generous rather than trust in uncertain riches, and John 11:43-44 shows Jesus actually raising a man from the dead — yet many still did not believe, just as Abraham warns in this chapter's closing line.",
     "q": "Read Matthew 6:24, 1 Timothy 6:17-19, and John 11:43-44 alongside today's chapter. How does knowing a real resurrection still didn't convince everyone shape how you read Abraham's final words?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"He that is faithful in that which is least is faithful also in much\" (v. 10) ties small, ordinary faithfulness to larger trust.",
     "q": "What small area of faithfulness — with money, time, or a responsibility — might God be testing you in right now?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The rich man knows Lazarus's name once in torment, yet seems never to have truly seen him while he lay at the gate (v. 20, 24).",
     "q": "Ask the Spirit to open your eyes to anyone in need who might be easy to walk past without truly seeing."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "The rich man's dying wish was that someone would warn his five brothers before it was too late (v. 27-28).",
     "q": "Bring before God by name anyone in your own life you long to see turn toward him."
    }
   ]
  }
 ]
},
// Day 419
{
 "ref": "Psalm 115",
 "tag": "Psalms & Wisdom",
 "api": "psalms+115",
 "sum": [
  "The psalm opens, \"Not unto us, O LORD, not unto us, but unto thy name give glory, for thy mercy, and for thy truth's sake.\"",
  "It mocks the idols of the nations, which have mouths but speak not and eyes but see not, warning that those who make them become like them.",
  "By contrast, \"our God is in the heavens: he hath done whatsoever he hath pleased,\" and the psalmist calls Israel, the house of Aaron, and all who fear the LORD to trust him, for he is their help and shield.",
  "The psalm closes with a promised blessing of increase and a settled commitment: \"the dead praise not the LORD... but we will bless the LORD from this time forth and for evermore.\""
 ],
 "nug": [
  {
   "h": "Glory redirected away from self",
   "b": "\"Not unto us, O LORD, not unto us, but unto thy name give glory, for thy mercy, and for thy truth's sake\" (v. 1)"
  },
  {
   "h": "Idols mocked for their lifelessness",
   "b": "\"They have mouths, but they speak not: eyes have they, but they see not... they that make them are like unto them; so is every one that trusteth in them\" (v. 5-8)"
  },
  {
   "h": "A threefold call to trust",
   "b": "\"O Israel, trust thou in the LORD... O house of Aaron, trust in the LORD... Ye that fear the LORD, trust in the LORD\" (v. 9-11)"
  },
  {
   "h": "A blessing promised to grow",
   "b": "\"The LORD shall increase you more and more, you and your children\" (v. 14)"
  },
  {
   "h": "Praise chosen as an ongoing commitment",
   "b": "\"The dead praise not the LORD... but we will bless the LORD from this time forth and for evermore. Praise the LORD\" (v. 17-18)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 44:9-20 · Psalm 135:15-18 · Romans 1:22-23",
   "qs": [
    {
     "th": "Isaiah 44:9-20 gives an even longer, more detailed mockery of idol-making, Psalm 135:15-18 repeats almost the same words about idols with mouths that cannot speak, and Romans 1:22-23 has Paul describe humanity exchanging God's glory for images resembling created things.",
     "q": "Read Isaiah 44:9-20, Psalm 135:15-18, and Romans 1:22-23 alongside today's psalm. What modern 'idols' might this psalm's warning — that we become like what we trust — apply to?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"They that make them are like unto them; so is every one that trusteth in them\" (v. 8) warns that what we trust shapes what we become.",
     "q": "What do you find yourself trusting in besides God, and how might it be shaping you?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm calls three separate groups — Israel, the house of Aaron, and those who fear the LORD — each to trust in him (v. 9-11).",
     "q": "Ask the Spirit to show you one specific area where you need to actively trust God today rather than default to worry."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Not unto us, O LORD, not unto us, but unto thy name give glory\" (v. 1) redirects all praise away from self.",
     "q": "Sit quietly for a few minutes, releasing any desire for your own credit, and simply let God's name be glorified."
    }
   ]
  }
 ]
},
// Day 420
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A settled commitment to praise closing the week",
   "b": "\"The dead praise not the LORD... but we will bless the LORD from this time forth and for evermore\" (Psalm 115:17-18) closed a week that moved from Deuteronomy's laws of fairness and firstfruits, through the exodus praise of Psalm 114, to Jesus's sobering parable of the rich man and Lazarus."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 25's laws of fairness and family duty, Deuteronomy 26's firstfruits liturgy and covenant formula, Psalm 114's vivid exodus praise, Deuteronomy 27's curses pronounced at Mount Ebal, Luke 16's parables of the unjust steward and the rich man and Lazarus, and Psalm 115's call to trust the living God rather than lifeless idols.",
     "q": "Which moment from the week most challenged you — the warning \"between us and you there is a great gulf fixed\" (Luke 16:26), or the curse \"cursed be he that confirmeth not all the words of this law to do them\" (Deuteronomy 27:26)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"We will bless the LORD from this time forth and for evermore\" (Psalm 115:18) closed this week's reading with a settled commitment to praise.",
     "q": "Sit quietly for a few minutes and simply rest in the decision to bless the LORD, whatever this week has brought."
    }
   ]
  }
 ]
},
// Day 421
{
 "ref": "Deuteronomy 28",
 "tag": "Old Testament",
 "api": "deuteronomy+28",
 "sum": [
  "Moses promises sweeping blessings for obedience — blessed in the city and the field, in basket and store, in coming in and going out — with enemies scattered and Israel established as the LORD's holy people.",
  "Further blessings promise rain in due season, a nation that lends rather than borrows, and a people who are the head and not the tail among the nations.",
  "The chapter then turns to extensive, escalating curses for disobedience, mirroring the blessings just given — disease, drought, defeat, and a siege so severe it drives the people to desperation.",
  "The curses grow heavier still, warning of captivity and scattering among the nations, closing with the sobering picture of the LORD bringing his people back into Egypt again — a genuine warning of covenant consequence, handled here with care rather than dwelt on for its own sake."
 ],
 "nug": [
  {
   "h": "Blessing pictured in the rhythms of daily life",
   "b": "\"Blessed shalt thou be in the city, and blessed shalt thou be in the field... Blessed shalt thou be when thou comest in, and blessed shalt thou be when thou goest out\" (v. 3, 6)"
  },
  {
   "h": "A people meant to lend, not borrow",
   "b": "\"Thou shalt lend unto many nations, and thou shalt not borrow... thou shalt be above only, and thou shalt not be beneath\" (v. 12-13)"
  },
  {
   "h": "A warning that mirrors every blessing",
   "b": "\"The LORD shall smite thee with a consumption, and with a fever... and with the sword\" (v. 22) — the curses that follow echo the very blessings just given, item for item."
  },
  {
   "h": "Covenant unfaithfulness named as the cause",
   "b": "\"Because thou servedst not the LORD thy God with joyfulness, and with gladness of heart, for the abundance of all things\" (v. 47) locates the root problem not in scarcity but in a joyless heart even amid plenty."
  },
  {
   "h": "A sober warning, not a final word",
   "b": "\"The LORD shall bring thee into Egypt again\" (v. 68) closes the chapter as a genuine warning of covenant consequence — one Deuteronomy 30, only a few days ahead, will answer with a promise of restoration."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 26:3-13 · Jeremiah 29:10-14 · Galatians 3:13-14",
   "qs": [
    {
     "th": "Leviticus 26:3-13 gives a parallel, earlier list of blessings and curses tied to covenant obedience, Jeremiah 29:10-14 promises restoration after the very exile this chapter warns of, and Galatians 3:13-14 has Paul explain that Christ redeemed us from the law's curse by becoming a curse for us.",
     "q": "Read Leviticus 26:3-13, Jeremiah 29:10-14, and Galatians 3:13-14 alongside today's chapter. How does knowing the rest of the story — exile, promised restoration, and Christ bearing the curse — change how you sit with this chapter's warnings?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Because thou servedst not the LORD thy God with joyfulness, and with gladness of heart, for the abundance of all things\" (v. 47) names joylessness, not just outward disobedience, as a root problem.",
     "q": "Even where your outward obedience looks fine, is there joylessness or half-heartedness God might want to address?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "This chapter's blessings touch the most ordinary parts of life — city and field, basket and store, coming in and going out (v. 3-6).",
     "q": "Ask the Spirit to help you notice and receive his blessing in the ordinary rhythms of your own day."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This chapter's warnings are severe, given because covenant unfaithfulness carries real consequences.",
     "q": "Confess honestly to God any half-heartedness in your own obedience, trusting his mercy rather than fear."
    }
   ]
  }
 ]
},
// Day 422
{
 "ref": "Deuteronomy 29",
 "tag": "Old Testament",
 "api": "deuteronomy+29",
 "sum": [
  "Moses leads Israel in a covenant renewal in the plains of Moab, in addition to the covenant made at Horeb, recounting what they themselves have seen — the plagues in Egypt and the wilderness provision in which their clothes did not wear out.",
  "He observes that even after all this, the LORD has not yet given them a heart to perceive, eyes to see, or ears to hear.",
  "Moses warns strongly against anyone whose heart secretly turns to worship other nations' gods, lest there be among them \"a root that beareth gall and wormwood,\" and against anyone who falsely reassures himself of peace while walking in his own stubborn imagination.",
  "He describes the desolation that would follow national apostasy, visible to later generations and other nations, and closes: \"The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law.\""
 ],
 "nug": [
  {
   "h": "Eyes that saw, but understanding not yet given",
   "b": "\"Yet the LORD hath not given you an heart to perceive, and eyes to see, and ears to hear, unto this day\" (v. 4) — even having witnessed God's wonders firsthand, true understanding is described as a gift still needed."
  },
  {
   "h": "Provision noticed in the smallest detail",
   "b": "\"Your clothes are not waxen old upon you, and thy shoe is not waxen old upon thy foot\" (v. 5)"
  },
  {
   "h": "A warning against secret, hidden apostasy",
   "b": "\"Lest there should be among you man, or woman... whose heart turneth away this day from the LORD our God... lest there should be among you a root that beareth gall and wormwood\" (v. 18)"
  },
  {
   "h": "Self-deceived false security exposed",
   "b": "\"He bless himself in his heart, saying, I shall have peace, though I walk in the imagination of mine heart\" (v. 19)"
  },
  {
   "h": "A line that trusts God with what he hasn't explained",
   "b": "\"The secret things belong unto the LORD our God: but those things which are revealed belong unto us and to our children for ever, that we may do all the words of this law\" (v. 29)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 12:15 · Jeremiah 5:21 · 1 Corinthians 4:5",
   "qs": [
    {
     "th": "Hebrews 12:15 directly echoes verse 18's 'root of bitterness' image, warning it can spring up and trouble many, Jeremiah 5:21 accuses Israel of the same eyes-that-do-not-see condition named here, and 1 Corinthians 4:5 reminds us that God will bring hidden things to light in his own time.",
     "q": "Read Hebrews 12:15, Jeremiah 5:21, and 1 Corinthians 4:5 alongside today's chapter. What does it look like practically to guard against a 'root of bitterness' in your own heart before it takes hold?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Your clothes are not waxen old upon you, and thy shoe is not waxen old upon thy foot\" (v. 5) notices God's provision in the smallest, easily overlooked details.",
     "q": "What small, easily overlooked provision of God might you have missed thanking him for?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter warns specifically against a heart that secretly turns away while outwardly remaining part of the community (v. 18-19).",
     "q": "Ask the Spirit to search your heart for any secret drift he wants to gently bring to light."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The secret things belong unto the LORD our God: but those things which are revealed belong unto us\" (v. 29) invites trust in what God has not explained.",
     "q": "Sit quietly with whatever remains unexplained in your own life, resting in trust rather than demanding answers."
    }
   ]
  }
 ]
},
// Day 423
{
 "ref": "Psalm 117",
 "tag": "Psalms & Wisdom",
 "api": "psalms+117",
 "sum": [
  "This is the shortest chapter in the entire Bible, just two verses long, yet it opens with one of Scripture's widest invitations: \"O praise the LORD, all ye nations: praise him, all ye people.\"",
  "Its single reason for that praise is given at once — \"his merciful kindness is great toward us\" — grounding universal praise in God's own steadfast, covenant love.",
  "The second half of that reason follows immediately: \"the truth of the LORD endureth for ever,\" adding his lasting faithfulness alongside his mercy.",
  "The psalm closes as briefly as it began, with \"Praise ye the LORD\" — a call later quoted by Paul as proof that Gentiles were always meant to praise God alongside Israel."
 ],
 "nug": [
  {
   "h": "The shortest chapter in the entire Bible",
   "b": "\"O praise the LORD, all ye nations: praise him, all ye people\" (v. 1) says everything it needs to in just two verses — the Bible's briefest chapter carries one of its widest invitations, reaching beyond Israel to every nation."
  },
  {
   "h": "A summons quoted to prove Gentile inclusion",
   "b": "Paul quotes this very verse in Romans 15:11 as biblical proof that Gentiles were always meant to glorify God alongside Israel, a two-verse psalm carrying weighty theological freight centuries later."
  },
  {
   "h": "Mercy and truth as the twin reasons for praise",
   "b": "\"His merciful kindness is great toward us, and the truth of the LORD endureth for ever\" (v. 2) grounds universal praise not in vague sentiment but in two concrete, covenant realities — steadfast love and enduring faithfulness."
  },
  {
   "h": "A psalm that trusts brevity to carry weight",
   "b": "The psalm needs no lengthy argument or long list of reasons; two lines are judged sufficient to summon \"all ye nations\" and \"all ye people\" into praise."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 15:8-11 · Psalm 100:1-5 · Revelation 7:9-10",
   "qs": [
    {
     "th": "Romans 15:8-11 has Paul quote this very psalm as evidence Gentiles were always included in God's plan of praise, Psalm 100 gives a longer psalm on the same theme of universal praise, and Revelation 7:9-10 pictures the final fulfilment — a multitude from every nation actually gathered in praise.",
     "q": "Read Romans 15:8-11, Psalm 100:1-5, and Revelation 7:9-10 alongside today's psalm. How does this shortest of all psalms connect to the Bible's largest vision of every nation praising God?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"His merciful kindness is great toward us, and the truth of the LORD endureth for ever\" (v. 2) names mercy and truth as the reason for praise.",
     "q": "Which of these two — God's mercy toward you or his enduring truth — do you find easiest to praise him for right now?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "This whole psalm is only two verses, yet loses nothing of its weight or invitation.",
     "q": "Ask the Spirit whether your own praise needs less striving and more simple, direct honesty like this psalm's."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"O praise the LORD, all ye nations: praise him, all ye people\" (v. 1) is a summons that needs no elaboration.",
     "q": "Spend a few minutes in simple, unhurried adoration, praising God with no other agenda."
    }
   ]
  }
 ]
},
// Day 424
{
 "ref": "Deuteronomy 30",
 "tag": "Old Testament",
 "api": "deuteronomy+30",
 "sum": [
  "Moses promises that even after the curses of exile, if Israel returns to the LORD with all their heart and soul, he will turn their captivity, have compassion, and gather them back from wherever they are scattered.",
  "The LORD will circumcise their heart and the heart of their children, to love him with all their heart and soul, that they may live.",
  "The command is described as neither too hard nor too far off — not in heaven, not beyond the sea, but very near, in their mouth and in their heart, that they may do it.",
  "Moses closes with the famous charge: \"I have set before thee this day life and good, and death and evil... therefore choose life,\" loving the LORD, obeying his voice, and cleaving to him, \"for he is thy life, and the length of thy days.\""
 ],
 "nug": [
  {
   "h": "A promised return after exile",
   "b": "\"The LORD thy God will turn thy captivity, and have compassion upon thee, and will return and gather thee from all the nations\" (v. 3)"
  },
  {
   "h": "A heart circumcised, not merely a law obeyed",
   "b": "\"The LORD thy God will circumcise thine heart, and the heart of thy seed, to love the LORD thy God with all thine heart, and with all thy soul, that thou mayest live\" (v. 6)"
  },
  {
   "h": "A command placed near, not distant",
   "b": "\"It is not in heaven... neither is it beyond the sea... but the word is very nigh unto thee, in thy mouth, and in thy heart, that thou mayest do it\" (v. 12-14)"
  },
  {
   "h": "A choice put starkly before the people",
   "b": "\"I have set before thee this day life and good, and death and evil... therefore choose life\" (v. 15, 19)"
  },
  {
   "h": "God named as life itself",
   "b": "\"He is thy life, and the length of thy days\" (v. 20)"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 10:6-8 · Ezekiel 36:26-27 · Joshua 24:15",
   "qs": [
    {
     "th": "Romans 10:6-8 has Paul quote verses 12-14 almost directly to describe the nearness of the word of faith in Christ, Ezekiel 36:26-27 promises the very heart-circumcision spoken of here through the gift of God's own Spirit, and Joshua 24:15 has Joshua later issue the same choose-life challenge to a new generation.",
     "q": "Read Romans 10:6-8, Ezekiel 36:26-27, and Joshua 24:15 alongside today's chapter. How does Paul's use of verses 12-14 shape how you understand the 'nearness' of God's word in your own life?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I have set before thee this day life and good, and death and evil... therefore choose life\" (v. 15, 19) puts a real choice before every reader.",
     "q": "What would choosing life look like concretely for you this week?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The LORD thy God will circumcise thine heart... to love the LORD thy God with all thine heart\" (v. 6) promises an inward change, not just outward compliance.",
     "q": "Ask the Spirit to search whether your obedience flows from a changed heart or from mere outward effort."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This chapter promises restoration and compassion even after Israel's failure and exile (v. 1-3).",
     "q": "Thank God for a specific time he restored or gathered you back after you had wandered."
    }
   ]
  }
 ]
},
// Day 425
{
 "ref": "Luke 17",
 "tag": "New Testament",
 "api": "luke+17",
 "sum": [
  "Jesus warns of the seriousness of causing little ones to stumble, and teaches his disciples to forgive a repentant brother again and again, even seven times in a day, prompting the apostles to ask, \"Lord, increase our faith,\" to which he answers with the image of faith as small as a mustard seed.",
  "He tells a brief parable of servants who, after doing all that was commanded, say only, \"We have done that which was our duty to do.\"",
  "Ten lepers cry out to Jesus for mercy and are healed, but only one returns to give thanks — a Samaritan — prompting Jesus to ask, \"Where are the nine?\" and to tell him, \"Thy faith hath made thee whole.\"",
  "Jesus teaches that the kingdom of God does not come with outward observation but is within — or among — his hearers, and describes the day of the Son of Man as sudden, like the days of Noah and of Lot, warning simply, \"Remember Lot's wife.\""
 ],
 "nug": [
  {
   "h": "A plea for more faith",
   "b": "\"The apostles said unto the Lord, Increase our faith\" (v. 5), met with the surprising reply that faith the size of a mustard seed could command a tree into the sea."
  },
  {
   "h": "Duty done without claim to merit",
   "b": "\"We are unprofitable servants: we have done that which was our duty to do\" (v. 10)"
  },
  {
   "h": "One returns; nine do not",
   "b": "\"Were there not ten cleansed? but where are the nine?... And he said unto him, Arise, go thy way: thy faith hath made thee whole\" (v. 17, 19) — and the one who returned was a Samaritan, an outsider by every expectation."
  },
  {
   "h": "The kingdom located inwardly, not observed",
   "b": "\"The kingdom of God cometh not with observation... the kingdom of God is within you\" (v. 20-21)"
  },
  {
   "h": "A warning wrapped in three words",
   "b": "\"Remember Lot's wife\" (v. 32) — the entire warning about looking back compressed into a single, memorable command."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 18:6-7 · Genesis 19:26 · 1 Thessalonians 5:2-3",
   "qs": [
    {
     "th": "Matthew 18:6-7 records a parallel warning about causing little ones to stumble, Genesis 19:26 is the actual account of Lot's wife looking back, and 1 Thessalonians 5:2-3 describes the day of the Lord coming suddenly, exactly as this chapter warns.",
     "q": "Read Matthew 18:6-7, Genesis 19:26, and 1 Thessalonians 5:2-3 alongside today's chapter. Why do you think Jesus reached for such a brief, sharp warning — 'Remember Lot's wife' — rather than a longer explanation?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Only one of the ten lepers healed returned to give thanks, and he was a Samaritan, an outsider (v. 15-18).",
     "q": "Is there a blessing you've received from God that you've never gone back to thank him for?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Lord, increase our faith\" (v. 5) was the apostles' own honest request when faced with Jesus's hard teaching.",
     "q": "Ask the Spirit to increase your own faith in whatever area feels hardest to trust God with right now."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus taught his followers to forgive a repentant brother again and again, \"seven times in a day\" (v. 4).",
     "q": "Bring before God anyone you're finding it hard to keep forgiving, and ask him to grow your capacity to forgive."
    }
   ]
  }
 ]
},
// Day 426
{
 "ref": "Psalm 119",
 "tag": "Psalms & Wisdom",
 "api": "psalms+119",
 "sum": [
  "This is the longest chapter in the entire Bible — 176 verses arranged as an acrostic poem, with twenty-two stanzas of eight lines each, one stanza for every letter of the Hebrew alphabet, every line within a stanza beginning with that letter.",
  "The psalm opens by blessing those who walk in the law of the LORD and seek him with their whole heart, and describes hiding God's word in the heart as protection against sin, delighting in his statutes as one would in great riches.",
  "Across its long span the psalmist moves through affliction, mockery from princes, and deep distress, yet returns again and again to the word as comfort, calling it sweeter than honey and a lamp lighting the very next step in the dark.",
  "The psalm closes not with triumphant mastery of the law but with humility — the psalmist likens himself to a lost sheep gone astray and asks God to come and seek him."
 ],
 "nug": [
  {
   "h": "An opening blessing on the undefiled",
   "b": "\"Blessed are the undefiled in the way, who walk in the law of the LORD\" (v. 1) opens 176 verses of meditation with a simple beatitude."
  },
  {
   "h": "God's word hidden as protection against sin",
   "b": "\"Thy word have I hid in mine heart, that I might not sin against thee\" (v. 11)"
  },
  {
   "h": "Understanding gained through meditation",
   "b": "\"I have more understanding than all my teachers: for thy testimonies are my meditation\" (v. 99)"
  },
  {
   "h": "Sweetness tasted, not just believed",
   "b": "\"How sweet are thy words unto my taste! yea, sweeter than honey to my mouth!\" (v. 103)"
  },
  {
   "h": "A lamp for just the next step",
   "b": "\"Thy word is a lamp unto my feet, and a light unto my path\" (v. 105)"
  },
  {
   "h": "An unshakeable peace promised",
   "b": "\"Great peace have they which love thy law: and nothing shall offend them\" (v. 165)"
  },
  {
   "h": "A humble, unfinished close",
   "b": "\"I have gone astray like a lost sheep; seek thy servant; for I do not forget thy commandments\" (v. 176) — after 176 verses of devotion, the psalm ends not in triumph but in a plea to be sought and found."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joshua 1:8 · Matthew 5:17-18 · Luke 15:4-6",
   "qs": [
    {
     "th": "Joshua 1:8 commands meditating on the law day and night in almost identical language to this psalm, Matthew 5:17-18 has Jesus affirm the enduring weight of the very law this psalm treasures, and Luke 15:4-6 pictures the shepherd going out after the one lost sheep, the image the psalmist reaches for in his own closing verse.",
     "q": "Read Joshua 1:8, Matthew 5:17-18, and Luke 15:4-6 alongside today's psalm. How does the psalm's closing image of a lost sheep change how you read all 176 verses that come before it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Thy word is a lamp unto my feet, and a light unto my path\" (v. 105) offers just enough light for the step in front of you, not the whole road.",
     "q": "Where in your life right now do you need just enough light for the next step, rather than the whole picture?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I have more understanding than all my teachers: for thy testimonies are my meditation\" (v. 99) credits slow, sustained meditation over formal learning.",
     "q": "Ask the Spirit to teach you something today, not through new information, but through unhurried meditation on his word."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "This vast psalm closes with the humble admission, \"I have gone astray like a lost sheep; seek thy servant\" (v. 176).",
     "q": "Sit quietly and simply ask God to seek you out in whatever way you've wandered, without rushing to explain or fix it yourself."
    }
   ]
  }
 ]
},
// Day 427
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A lost sheep's plea closing the longest psalm in Scripture",
   "b": "\"I have gone astray like a lost sheep; seek thy servant\" (Psalm 119:176) closed a week that moved through Deuteronomy's weighty blessings and curses, its promise of restoration and the call to choose life, and the ten lepers' lesson in gratitude."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through Deuteronomy 28's blessings and curses, Deuteronomy 29's warning against secret apostasy, Psalm 117's brief universal call to praise, Deuteronomy 30's promise of restoration and the choice of life, Luke 17's ten lepers and warnings about the day of the Son of Man, and Psalm 119's sweeping meditation on God's word.",
     "q": "Which moment from the week most challenged you — the command \"therefore choose life\" (Deuteronomy 30:19), or the question \"Where are the nine?\" (Luke 17:17)?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"Thy word is a lamp unto my feet, and a light unto my path\" (Psalm 119:105) closed this week's long meditation on Scripture.",
     "q": "Sit quietly for a few minutes and let this verse be enough light for whatever step is next in your life."
    }
   ]
  }
 ]
},
// Day 428
{
 "ref": "Deuteronomy 31",
 "tag": "Old Testament",
 "api": "deuteronomy+31",
 "sum": [
  "Moses, now one hundred and twenty years old, tells Israel that he can no longer lead them and that he will not cross the Jordan; the LORD himself will go before them, and Joshua will take up the task.",
  "Moses commissions Joshua publicly before all Israel, charging him to be strong and of good courage, and writes out the law, commanding that it be read to the whole nation every seventh year at the Feast of Tabernacles, so that even the children who have not known it may hear and learn to fear the LORD.",
  "The LORD tells Moses privately that after his death the people will turn away after foreign gods and break the covenant, and he instructs Moses and Joshua to write a song that will stand as a witness against Israel for that future day of unfaithfulness.",
  "Moses finishes writing the words of the law in a book and delivers it to the Levites, commanding that it be placed beside the ark of the covenant as a permanent witness."
 ],
 "nug": [
  {
   "h": "A charge to the nation",
   "b": "\"Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee\" (Deuteronomy 31:6). Moses roots Israel's courage not in their own strength but in God's unfailing presence."
  },
  {
   "h": "A charge to the successor",
   "b": "\"And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed\" (Deuteronomy 31:8). The same promise made to the nation is spoken directly over Joshua as he steps into leadership."
  },
  {
   "h": "A law read aloud to everyone",
   "b": "Moses commands that the law be read to all Israel every seventh year, \"that they may hear, and that they may learn, and fear the LORD your God, and observe to do all the words of this law\" (Deuteronomy 31:12). Even children too young to remember were to be gathered in, so faith would not skip a generation."
  },
  {
   "h": "A song as a witness",
   "b": "God tells Moses to write a song, for \"this song shall testify against them as a witness; for it shall not be forgotten out of the mouths of their seed\" (Deuteronomy 31:21). God prepares a witness against future unfaithfulness before that unfaithfulness even happens."
  },
  {
   "h": "The law beside the ark",
   "b": "\"Take this book of the law, and put it in the side of the ark of the covenant of the LORD your God, that it may be there for a witness against thee\" (Deuteronomy 31:26). The written word is placed at the very centre of Israel's worship."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joshua 1:5-9 · Hebrews 13:5-6 · 2 Timothy 4:6-8",
   "qs": [
    {
     "th": "Moses's charge to Joshua in Deuteronomy 31 is echoed word for word when the LORD speaks to Joshua directly, and Hebrews takes up the same promise for every believer, while Paul's farewell in 2 Timothy shows a leader finishing well and handing on the work.",
     "q": "Read these passages together — what do they teach you about how faith and courage are meant to be passed from one generation, or one leader, to the next?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses could no longer \"go out and come in\" and had to hand his task to another, trusting God to go with Joshua just as he had gone with him.",
     "q": "Is there a role, a responsibility, or a season you are being asked to let go of and hand to someone else — and how easily are you trusting God to go with them?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses commanded that the law be read aloud regularly so that even those who had not known it would come to fear the LORD and learn to obey.",
     "q": "Is the Spirit prompting you to build some rhythm of hearing and re-hearing God's word into your life, rather than trusting to memory alone?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses laid his hands on Joshua and spoke courage over him before the whole assembly.",
     "q": "Bring before God someone who is stepping into a role of leadership or responsibility — pray specifically that they would be strong and of good courage."
    }
   ]
  }
 ]
},
// Day 429
{
 "ref": "Deuteronomy 32",
 "tag": "Old Testament",
 "api": "deuteronomy+32",
 "sum": [
  "Moses recites the Song of Moses to all Israel, calling heaven and earth to witness and declaring God to be the Rock, \"his work is perfect: for all his ways are judgment: a God of truth and without iniquity, just and right is he.\"",
  "The song recounts God's tender care for Israel in the wilderness, finding them in a desert land, keeping them \"as the apple of his eye,\" and carrying them as an eagle bears its young on its wings.",
  "It then turns to Israel's coming rebellion — growing fat and complacent and forsaking the God who made them — and God's jealous anger, which he uses even foreign nations to provoke and discipline his own people.",
  "The song closes with God's ultimate vindication of his people, promising vengeance on their enemies and mercy for his servants, and the LORD then tells Moses to climb Mount Nebo to view the land he will not enter, because of his and Aaron's trespass at the waters of Meribah."
 ],
 "nug": [
  {
   "h": "The Rock, perfect in all his ways",
   "b": "\"He is the Rock, his work is perfect: for all his ways are judgment: a God of truth and without iniquity, just and right is he\" (Deuteronomy 32:4). Before recounting Israel's failure, the song first fixes the eyes on God's unshakeable faithfulness."
  },
  {
   "h": "Kept as the apple of his eye",
   "b": "\"He found him in a desert land... he led him about, he instructed him, he kept him as the apple of his eye\" (Deuteronomy 32:10). God's care for wandering Israel is described in the most intimate, protective terms."
  },
  {
   "h": "Carried like an eagle's young",
   "b": "\"As an eagle stirreth up her nest, fluttereth over her young, spreadeth abroad her wings, taketh them, beareth them on her wings\" (Deuteronomy 32:11). God does not merely lead his people; he carries them when they cannot yet fly."
  },
  {
   "h": "Jeshurun grew fat and kicked",
   "b": "\"But Jeshurun waxed fat, and kicked... then he forsook God which made him\" (Deuteronomy 32:15). Comfort and abundance, not hardship, are what finally turned Israel's heart away."
  },
  {
   "h": "Vengeance belongs to the LORD",
   "b": "\"To me belongeth vengeance, and recompence... for the LORD shall judge his people, and repent himself for his servants\" (Deuteronomy 32:35-36). Judgment on Israel's enemies and mercy for Israel are both held in God's own hands, not theirs."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 40:31 · Romans 12:19 · Hebrews 10:30-31",
   "qs": [
    {
     "th": "Isaiah picks up the eagle imagery of God's strength for the weary, and Paul and the writer of Hebrews both quote directly from this song when they teach that vengeance belongs to the Lord alone.",
     "q": "Read these alongside Deuteronomy 32 — how does it change the way you carry a grievance, knowing that God himself has claimed the right to judge?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Jeshurun waxed fat, and kicked... then he forsook God which made him\" — it was ease, not hardship, that led Israel astray.",
     "q": "Where in your own life has comfort or abundance quietly loosened your grip on God, more than difficulty ever has?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The song describes God finding, leading, instructing and keeping Israel \"as the apple of his eye.\"",
     "q": "Ask the Spirit to show you one place in your own story where you can now see God's careful, protective hand at work."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"He is the Rock, his work is perfect... a God of truth and without iniquity, just and right is he\" (Deuteronomy 32:4).",
     "q": "Spend this time simply praising God for his unshakeable faithfulness, using the images of Rock, eagle and shelter from this song as your words."
    }
   ]
  }
 ]
},
// Day 430
{
 "ref": "Psalm 120",
 "tag": "Psalms & Wisdom",
 "api": "psalms+120",
 "sum": [
  "This is the first of the fifteen \"Songs of Ascents\" (Psalms 120-134), sung by pilgrims as they went up to Jerusalem for the great feasts.",
  "The psalmist begins with testimony: \"In my distress I cried unto the LORD, and he heard me.\"",
  "He asks to be delivered from \"lying lips\" and \"a deceitful tongue,\" and pictures the fierce punishment fitting such deceit — sharp arrows and burning coals.",
  "He laments living among hostile, quarrelsome neighbours — \"Woe is me, that I sojourn in Mesech, that I dwell in the tents of Kedar\" — declaring, \"I am for peace: but when I speak, they are for war.\""
 ],
 "nug": [
  {
   "h": "A cry that was heard",
   "b": "\"In my distress I cried unto the LORD, and he heard me\" (Psalm 120:1). The whole pilgrim journey to Jerusalem begins not with arrival, but with a remembered answer to prayer."
  },
  {
   "h": "Delivered from deceit",
   "b": "\"Deliver my soul, O LORD, from lying lips, and from a deceitful tongue\" (Psalm 120:2). The psalmist names the specific wound he needs God to heal — not physical danger, but dishonest speech aimed at him."
  },
  {
   "h": "A stranger among strangers",
   "b": "\"Woe is me, that I sojourn in Mesech, that I dwell in the tents of Kedar!\" (Psalm 120:5). Mesech and Kedar stand for distant, hostile peoples — the psalmist feels like an exile surrounded by those who do not share his heart for peace."
  },
  {
   "h": "For peace, yet met with war",
   "b": "\"I am for peace: but when I speak, they are for war\" (Psalm 120:7). Even a genuine desire for peace does not guarantee it will be returned."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 34:12-13 · James 3:5-8 · Romans 12:18",
   "qs": [
    {
     "th": "Psalm 34 and James both warn how much damage a deceitful tongue can do, while Paul calls believers to live peaceably \"as much as lieth in you,\" even when others will not.",
     "q": "Read these passages together — what do they show you about guarding your own words, and about staying peaceable when others won't meet you there?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I am for peace: but when I speak, they are for war\" (Psalm 120:7).",
     "q": "Is there a relationship or situation right now where you genuinely want peace but keep meeting conflict instead — and how are you handling that?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalmist asks to be delivered specifically from \"lying lips, and from a deceitful tongue.\"",
     "q": "Ask the Spirit whether there is any dishonesty, even a small one, in your own speech that he wants to deal with today."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"In my distress I cried unto the LORD, and he heard me\" (Psalm 120:1).",
     "q": "Sit quietly before God with whatever distress you are carrying, and simply wait, trusting that he hears, without rushing to fill the silence with words."
    }
   ]
  }
 ]
},
// Day 431
{
 "ref": "Deuteronomy 33",
 "tag": "Old Testament",
 "api": "deuteronomy+33",
 "sum": [
  "This chapter records the blessing which \"Moses the man of God\" pronounced over the children of Israel before his death, echoing and renewing Jacob's blessing of his sons back in Genesis 49.",
  "Moses blesses the tribes one by one — Reuben, Judah, Levi (entrusted with the Thummim and Urim to teach Jacob God's judgments and law), Benjamin, called \"the beloved of the LORD,\" and Joseph, blessed with the precious things of heaven and earth.",
  "The remaining tribes are each given their own word, closing with a magnificent description of God himself as Israel's defender and dwelling place.",
  "\"The eternal God is thy refuge, and underneath are the everlasting arms,\" and the chapter ends by declaring Israel blessed above every other people: \"Happy art thou, O Israel: who is like unto thee, O people saved by the LORD.\""
 ],
 "nug": [
  {
   "h": "A blessing before death",
   "b": "\"And this is the blessing, wherewith Moses the man of God blessed the children of Israel before his death\" (Deuteronomy 33:1). Moses's very last recorded words to the nation are not warning but blessing."
  },
  {
   "h": "Levi's calling",
   "b": "Of Levi, Moses says God gave \"thy Thummim and thy Urim\" to \"be with thy holy one\" and that they \"shall teach Jacob thy judgments, and Israel thy law\" (Deuteronomy 33:8,10). The priestly tribe's task was to keep God's people instructed in his word."
  },
  {
   "h": "Beloved and kept safe",
   "b": "Of Benjamin: \"The beloved of the LORD shall dwell in safety by him; and the Lord shall cover him all the day long, and he shall dwell between his shoulders\" (Deuteronomy 33:12). The image is of a child carried securely, close to the heart."
  },
  {
   "h": "Underneath the everlasting arms",
   "b": "\"The eternal God is thy refuge, and underneath are the everlasting arms: and he shall thrust out the enemy from before thee\" (Deuteronomy 33:27). Whatever the nation would face ahead, its ultimate security rests in God himself, not in its own strength."
  },
  {
   "h": "A people saved by the LORD",
   "b": "\"Happy art thou, O Israel: who is like unto thee, O people saved by the LORD, the shield of thy help, and who is the sword of thy excellency!\" (Deuteronomy 33:29). Moses ends his life's work not on a note of law, but of joyful blessing."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 49:1-28 · Psalm 90:1 · Isaiah 40:11",
   "qs": [
    {
     "th": "Moses's blessing deliberately echoes the blessing Jacob gave the same twelve tribes generations earlier in Genesis 49, and Psalm 90 — also attributed to Moses — opens with the same idea of God as a dwelling place across generations.",
     "q": "Compare Jacob's and Moses's blessings — what has changed for these tribes between the two, and what has stayed the same about the God who blesses them?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"The eternal God is thy refuge, and underneath are the everlasting arms\" (Deuteronomy 33:27).",
     "q": "Where in your life right now do you most need to rest in the image of being held up by everlasting arms, rather than relying on your own strength?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Levi's calling was to \"teach Jacob thy judgments, and Israel thy law\" (Deuteronomy 33:10).",
     "q": "Ask the Spirit whether there is someone he wants you to teach, encourage, or simply point back to God's word this week."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Happy art thou, O Israel: who is like unto thee, O people saved by the LORD\" (Deuteronomy 33:29).",
     "q": "Give thanks to God for the specific ways he has been your refuge and your help, naming them one by one."
    }
   ]
  }
 ]
},
// Day 432
{
 "ref": "Luke 18",
 "tag": "New Testament",
 "api": "luke+18",
 "sum": [
  "Jesus tells the parable of the persistent widow and the unjust judge to teach that people \"ought always to pray, and not to faint,\" and the parable of the Pharisee and the publican praying in the temple, where the one who cries \"God be merciful to me a sinner\" goes home justified rather than the one who trusts in his own righteousness.",
  "Parents bring little children to Jesus for him to touch them, and though the disciples rebuke them, Jesus calls the children to himself, saying, \"Suffer little children to come unto me, and forbid them not: for of such is the kingdom of God.\"",
  "A rich young ruler asks what he must do to inherit eternal life; when told to sell all he has, distribute to the poor, and follow Jesus, he goes away sorrowful, prompting Jesus's teaching that it is easier for a camel to go through a needle's eye than for a rich man to enter the kingdom of God, and that \"the things which are impossible with men are possible with God.\"",
  "Jesus predicts his coming death and resurrection for the third time, though the disciples do not understand, and the chapter closes with the healing of a blind beggar near Jericho, who cries \"Jesus, thou Son of David, have mercy on me\" and is told, \"thy faith hath saved thee.\""
 ],
 "nug": [
  {
   "h": "Pray and do not give up",
   "b": "Jesus tells the parable of the unjust judge and the persistent widow \"to this end, that men ought always to pray, and not to faint\" (Luke 18:1). Persistent prayer is not about wearing God down, but about not losing heart."
  },
  {
   "h": "The tax collector's prayer",
   "b": "\"God be merciful to me a sinner... I tell you, this man went down to his house justified rather than the other\" (Luke 18:13-14). It is honest humility before God, not confident self-assessment, that leaves a person right with him."
  },
  {
   "h": "Of such is the kingdom",
   "b": "\"Suffer little children to come unto me, and forbid them not: for of such is the kingdom of God\" (Luke 18:16). Jesus welcomes those with nothing to offer but simple, dependent trust."
  },
  {
   "h": "Impossible with men, possible with God",
   "b": "After the rich young ruler turns away sorrowful, Jesus says, \"The things which are impossible with men are possible with God\" (Luke 18:27). Salvation was never going to be earned by anyone's wealth or effort — it is God's work from first to last."
  },
  {
   "h": "A cry that would not be silenced",
   "b": "The blind beggar \"cried, saying, Jesus, thou Son of David, have mercy on me,\" and though the crowd rebuked him, \"he cried so much the more\" (Luke 18:38-39). Jesus stopped, and told him, \"thy faith hath saved thee\" (Luke 18:42)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 19:16-26 · Mark 10:13-16 · Romans 3:23-24",
   "qs": [
    {
     "th": "Matthew and Mark tell parallel versions of the rich young ruler and the children being brought to Jesus, and Paul in Romans grounds the very truth this chapter dramatises — that no one is justified by their own works, only by grace.",
     "q": "Read these alongside Luke 18 — what do the different responses (the publican, the ruler, the children) show you about what it actually takes to enter the kingdom of God?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The rich young ruler \"was very sorrowful: for he was very rich,\" unwilling to let go of what he trusted in (Luke 18:23).",
     "q": "Is there anything in your own life you are holding onto so tightly that it would make you sorrowful to be asked to let it go for Jesus?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The Pharisee trusted in himself that he was righteous, while the publican simply cried out for mercy.",
     "q": "Ask the Spirit to show you honestly which posture is closer to your own prayers lately."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"God be merciful to me a sinner\" (Luke 18:13).",
     "q": "Make the publican's prayer your own — name honestly before God where you have trusted in yourself rather than in his mercy."
    }
   ]
  }
 ]
},
// Day 433
{
 "ref": "Psalm 122",
 "tag": "Psalms & Wisdom",
 "api": "psalms+122",
 "sum": [
  "Another of the Songs of Ascents, this psalm of David opens with a pilgrim's joy: \"I was glad when they said unto me, Let us go into the house of the LORD.\"",
  "The psalmist describes Jerusalem as \"a city that is compact together,\" the place to which the tribes go up to give thanks to the name of the LORD, and where the thrones of judgment, the thrones of the house of David, are set.",
  "He calls the pilgrims to pray for the peace of Jerusalem, promising that those who love the city will prosper.",
  "The psalm closes with a personal note: \"For my brethren and companions' sakes, I will now say, Peace be within thee,\" and for the sake of the house of the LORD, he will seek the city's good."
 ],
 "nug": [
  {
   "h": "Glad to go up",
   "b": "\"I was glad when they said unto me, Let us go into the house of the LORD\" (Psalm 122:1). Worship together with God's people begins as an invitation the psalmist is delighted to receive."
  },
  {
   "h": "A city joined together",
   "b": "\"Jerusalem is builded as a city that is compact together\" (Psalm 122:3). The image of a tightly-joined city pictures the unity God intends among his people."
  },
  {
   "h": "Thrones of judgment",
   "b": "\"For there are set thrones of judgment, the thrones of the house of David\" (Psalm 122:5). Jerusalem was not only a place of worship but the seat of righteous rule, pointing forward to David's greater Son."
  },
  {
   "h": "Pray for her peace",
   "b": "\"Pray for the peace of Jerusalem: they shall prosper that love thee\" (Psalm 122:6). Loving God's city and praying for its wellbeing are bound together."
  },
  {
   "h": "For my brethren's sakes",
   "b": "\"For my brethren and companions' sakes, I will now say, Peace be within thee\" (Psalm 122:8). The psalmist's love for the city is, at heart, love for the people within it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 84:1-2 · Hebrews 10:24-25 · Revelation 21:2",
   "qs": [
    {
     "th": "Psalm 84 shares the same longing to be in God's house, Hebrews urges believers not to forsake gathering together, and Revelation pictures a greater Jerusalem still to come.",
     "q": "Read these together — how do they shape the way you think about gathering with God's people, both now and in what is still to come?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"I was glad when they said unto me, Let us go into the house of the LORD\" (Psalm 122:1).",
     "q": "Would you honestly describe gladness as your usual feeling toward gathering with God's people — and if not, what has dimmed it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalmist prays for peace \"for my brethren and companions' sakes\" (Psalm 122:8).",
     "q": "Ask the Spirit to bring to mind a church, a community, or a group of believers he wants you to pray peace over today."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Pray for the peace of Jerusalem: they shall prosper that love thee\" (Psalm 122:6).",
     "q": "Thank God for the specific people and community he has placed you among, and ask for his peace to rest on them."
    }
   ]
  }
 ]
},
// Day 434
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "For my brethren's sakes",
   "b": "\"For my brethren and companions' sakes, I will now say, Peace be within thee\" (Psalm 122:8). This week closed with a pilgrim's love for God's people and God's city — a fitting note after tracing Moses's own final acts of love for the people he had led for forty years."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read Moses's final charge and song to Israel (Deuteronomy 31-32), his tribal blessings before death (Deuteronomy 33), a chapter of Jesus's teaching and healing in Luke 18, and two Songs of Ascents (Psalm 120 and 122).",
     "q": "Which moment challenged you more this week — Moses declaring \"Be strong and of a good courage... he will not fail thee, nor forsake thee\" (Deuteronomy 31:6), or the publican's cry, \"God be merciful to me a sinner\" (Luke 18:13)? Why?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"The eternal God is thy refuge, and underneath are the everlasting arms\" (Deuteronomy 33:27).",
     "q": "Sit quietly for a moment and simply let that promise settle over you before you move on."
    }
   ]
  }
 ]
},
// Day 435
{
 "ref": "Deuteronomy 34",
 "tag": "Old Testament",
 "api": "deuteronomy+34",
 "sum": [
  "The LORD leads Moses up Mount Nebo, to the top of Pisgah, and shows him the whole promised land — Gilead as far as Dan, Naphtali, Ephraim, Manasseh, all Judah to the western sea, the south, and the plain of Jericho, \"the city of palm trees,\" as far as Zoar.",
  "The LORD tells him, \"I have caused thee to see it with thine eyes, but thou shalt not go over thither,\" and Moses dies there in the land of Moab, at one hundred and twenty years old, \"his eye was not dim, nor his natural force abated.\"",
  "The LORD himself buries Moses in a valley in Moab, \"but no man knoweth of his sepulchre unto this day,\" and Israel weeps for him thirty days.",
  "Joshua, full of the spirit of wisdom because Moses had laid his hands on him, takes up the leadership of Israel, and the book closes with the tribute that never again did there arise a prophet in Israel like Moses, whom the LORD knew face to face — bringing the entire book of Deuteronomy, and the whole Torah from Genesis onward, to its close."
 ],
 "nug": [
  {
   "h": "Shown, but not entered",
   "b": "\"And the LORD said unto him, This is the land which I sware unto Abraham, unto Isaac, and unto Jacob... I have caused thee to see it with thine eyes, but thou shalt not go over thither\" (Deuteronomy 34:4). Moses receives the fulfilment of God's promise to the patriarchs only as sight, not as inheritance."
  },
  {
   "h": "Undimmed to the last",
   "b": "\"Moses was an hundred and twenty years old when he died: his eye was not dim, nor his natural force abated\" (Deuteronomy 34:7). Moses's strength did not fail with age — his life's work simply reached its appointed end."
  },
  {
   "h": "Buried by God himself",
   "b": "\"He buried him in a valley in the land of Moab... but no man knoweth of his sepulchre unto this day\" (Deuteronomy 34:6). No monument marks the grave of the man who led Israel out of Egypt — the LORD alone saw to his burial."
  },
  {
   "h": "A spirit of wisdom passed on",
   "b": "\"And Joshua the son of Nun was full of the spirit of wisdom; for Moses had laid his hands upon him\" (Deuteronomy 34:9). Leadership passes not by Joshua's own ambition, but through what Moses had already given him."
  },
  {
   "h": "A prophet without equal",
   "b": "\"And there arose not a prophet since in Israel like unto Moses, whom the LORD knew face to face\" (Deuteronomy 34:10). The whole Torah, from Genesis to Deuteronomy, closes on this singular tribute to the man through whom God gave his law."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 20:7-12 · Matthew 17:1-3 · Hebrews 3:1-6",
   "qs": [
    {
     "th": "Numbers explains why Moses himself could not enter the land, Matthew later shows Moses appearing with Elijah on the mount of transfiguration alongside Jesus, and Hebrews contrasts Moses the faithful servant with Christ the faithful Son over the house.",
     "q": "Read these together — how do they help you see Moses's story as pointing beyond itself, to someone greater still to come?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses was shown the promised land but did not get to enter it himself, having spent his life leading others toward it.",
     "q": "Is there work in your own life that you may not see completed or fully rewarded yourself — and how do you feel about that?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Joshua the son of Nun was full of the spirit of wisdom; for Moses had laid his hands upon him\" (Deuteronomy 34:9).",
     "q": "Ask the Spirit whether there is wisdom or experience he wants you to intentionally pass on to someone younger or newer in faith."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"There arose not a prophet since in Israel like unto Moses, whom the LORD knew face to face\" (Deuteronomy 34:10).",
     "q": "Give thanks to God for the whole sweep of Moses's story, from Genesis's promises to this closing chapter, and for what it has taught you across these two years of reading."
    }
   ]
  }
 ]
},
// Day 436
{
 "ref": "Joshua 1",
 "tag": "Old Testament",
 "api": "joshua+1",
 "sum": [
  "This is the opening chapter of a new book: after Moses's death, the LORD speaks directly to Joshua, commanding him to lead Israel across the Jordan and promising, \"every place that the sole of your foot shall tread upon, that have I given unto you, as I said unto Moses.\"",
  "God repeats the charge \"Be strong and of a good courage\" three times over, and commands Joshua to keep the book of the law always on his lips and in his meditation, \"that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.\"",
  "The LORD reassures Joshua, \"the LORD thy God is with thee whithersoever thou goest,\" and Joshua commands the officers to prepare the people, for within three days they will cross the Jordan into the land.",
  "The Reubenites, Gadites, and half-tribe of Manasseh, who had already received their inheritance east of the Jordan, pledge to go armed ahead of their brethren into the land as they had promised Moses, affirming, \"only the LORD thy God be with thee, as he was with Moses.\""
 ],
 "nug": [
  {
   "h": "Every place you tread",
   "b": "\"Every place that the sole of your foot shall tread upon, that have I given unto you, as I said unto Moses\" (Joshua 1:3). The promise given long ago to Moses is now handed on intact, with nothing lost in the transition."
  },
  {
   "h": "Be strong and of a good courage",
   "b": "God tells Joshua three times, \"Be strong and of a good courage\" (Joshua 1:6, 1:7, 1:9), the last time adding, \"be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.\" Courage here is not natural bravery but a command rooted in God's presence."
  },
  {
   "h": "Meditate day and night",
   "b": "\"This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success\" (Joshua 1:8). Success is tied directly to a constant, careful attention to God's word."
  },
  {
   "h": "As he was with Moses",
   "b": "The Reubenites and Gadites answer Joshua, \"only the LORD thy God be with thee, as he was with Moses\" (Joshua 1:17). The people's confidence rests not in Joshua's own credentials but in the same God who led their fathers."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 31:7-8 · Psalm 1:1-3 · Hebrews 13:5-6",
   "qs": [
    {
     "th": "Joshua 1 deliberately repeats the very words Moses spoke over Joshua in Deuteronomy 31, Psalm 1 pictures the blessed man who meditates on God's law day and night just as Joshua is told to, and Hebrews later quotes God's promise never to leave or forsake his people.",
     "q": "Read these passages together — what do they show you about the link between meditating on God's word and having courage to move forward?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night\" (Joshua 1:8).",
     "q": "How present is God's word in the actual rhythm of your days right now — and what would it look like to let it shape a decision you are facing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God tells Joshua three times to \"be strong and of a good courage\" as he faces an enormous task ahead.",
     "q": "Is there a task or step ahead of you right now where you need the Spirit to give you that same courage?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: intercession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest\" (Joshua 1:9).",
     "q": "Pray for someone you know who is facing a daunting new task or season, asking God to be as present with them as he was with Joshua."
    }
   ]
  }
 ]
},
// Day 437
{
 "ref": "Psalm 123",
 "tag": "Psalms & Wisdom",
 "api": "psalms+123",
 "sum": [
  "A short Song of Ascents that begins, \"Unto thee lift I up mine eyes, O thou that dwellest in the heavens.\"",
  "The psalmist compares Israel's watchful dependence on God's mercy to the eyes of servants fixed on their master's hand, and a maiden's eyes on the hand of her mistress.",
  "\"So our eyes wait upon the LORD our God, until that he have mercy upon us,\" he says, waiting expectantly for God to act.",
  "The psalm closes with an urgent plea for mercy, for the psalmist and his people are \"exceedingly filled with contempt,\" scorned by the proud and those who are at ease."
 ],
 "nug": [
  {
   "h": "Eyes lifted to heaven",
   "b": "\"Unto thee lift I up mine eyes, O thou that dwellest in the heavens\" (Psalm 123:1). The psalm opens by deliberately turning attention away from present trouble and up toward God."
  },
  {
   "h": "Like the eyes of a servant",
   "b": "\"Behold, as the eyes of servants look unto the hand of their masters, and as the eyes of a maiden unto the hand of her mistress; so our eyes wait upon the LORD our God, until that he have mercy upon us\" (Psalm 123:2). The image is of alert, attentive dependence, ready to respond the instant God moves."
  },
  {
   "h": "Filled with contempt",
   "b": "\"Our soul is exceedingly filled with the scorning of those that are at ease, and with the contempt of the proud\" (Psalm 123:4). The psalmist does not hide the sting of being mocked by those who feel secure and superior."
  },
  {
   "h": "Waiting until he has mercy",
   "b": "\"So our eyes wait upon the LORD our God, until that he have mercy upon us\" (Psalm 123:2). The waiting has a clear end in view — not endless uncertainty, but confident expectation of mercy."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 25:15 · Habakkuk 2:1 · 1 Peter 5:5-6",
   "qs": [
    {
     "th": "Psalm 25 uses the same picture of eyes ever toward the LORD, Habakkuk pictures a watchman waiting for God's answer, and Peter calls believers to humility under God's mighty hand.",
     "q": "Read these together — what do they teach you about the posture of watchful, humble dependence on God, especially when you feel looked down on by others?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Our soul is exceedingly filled with the scorning of those that are at ease, and with the contempt of the proud\" (Psalm 123:4).",
     "q": "Have you felt looked down on or dismissed recently — and where have you been turning for relief instead of lifting your eyes to God?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"As the eyes of servants look unto the hand of their masters... so our eyes wait upon the LORD our God\" (Psalm 123:2).",
     "q": "Take a moment to simply wait and watch — is the Spirit drawing your attention to something he wants you to notice or respond to right now?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening-silence",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"So our eyes wait upon the LORD our God, until that he have mercy upon us\" (Psalm 123:2).",
     "q": "Sit in quiet, watchful waiting before God, resisting the urge to fill the silence — simply keep your eyes lifted to him."
    }
   ]
  }
 ]
},
// Day 438
{
 "ref": "Joshua 2",
 "tag": "Old Testament",
 "api": "joshua+2",
 "sum": [
  "Joshua secretly sends two spies to view the land, especially Jericho, and they lodge at the house of a woman named Rahab.",
  "When the king of Jericho demands she hand over the men, Rahab has already hidden them under stalks of flax on her roof and sends the pursuers off on a false trail, then tells the spies, \"I know that the LORD hath given you the land... for the LORD your God, he is God in heaven above, and in earth beneath.\"",
  "She asks the spies to swear to deal kindly with her and her family when Israel takes the city, since she showed kindness to them; they agree, on condition that she bind a scarlet cord in her window as a sign and gather her whole family inside the house.",
  "Rahab lets the spies down by a cord through her window, built into the city wall, and advises them to hide in the mountains three days before returning to camp; they report back to Joshua, \"Truly the LORD hath delivered into our hands all the land; for even all the inhabitants of the country do faint because of us.\""
 ],
 "nug": [
  {
   "h": "The LORD hath given you the land",
   "b": "Rahab tells the spies, \"I know that the LORD hath given you the land, and that your terror is fallen upon us, and that all the inhabitants of the land faint because of you\" (Joshua 2:9). A Canaanite woman recognises what many of Israel's own generation had refused to believe forty years earlier."
  },
  {
   "h": "God in heaven and earth",
   "b": "\"For the LORD your God, he is God in heaven above, and in earth beneath\" (Joshua 2:11). Rahab's confession of faith is remarkably complete for someone with no covenant history of her own."
  },
  {
   "h": "A kindness asked in return",
   "b": "\"Now therefore, I pray you, swear unto me by the LORD, since I have shewed you kindness, that ye will also shew kindness unto my father's house\" (Joshua 2:12). Rahab risks everything on the spies' word being trustworthy."
  },
  {
   "h": "The scarlet cord",
   "b": "The spies tell her, \"thou shalt bind this line of scarlet thread in the window which thou didst let us down by\" (Joshua 2:18), the sign that would mark her house to be spared when the city fell."
  },
  {
   "h": "Faint because of us",
   "b": "The spies report to Joshua, \"Truly the LORD hath delivered into our hands all the land; for even all the inhabitants of the country do faint because of us\" (Joshua 2:24). What God had promised Moses forty years before is now confirmed by the enemy's own fear."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 11:31 · James 2:25 · Matthew 1:5",
   "qs": [
    {
     "th": "Hebrews and James both hold Rahab up as an example of faith proved by action, and Matthew's genealogy places her directly in the line leading to Jesus.",
     "q": "Read these together — what do they show you about how God can bring even an outsider with a very ordinary, imperfect past into the centre of his story?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Rahab risked her own safety on a bare promise from strangers, trusting that the God of Israel was real and powerful.",
     "q": "Is there a step of trust God is asking of you right now that feels risky, but that you sense is rooted in who he actually is?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Rahab, an outsider with no covenant background, still recognised and confessed the true God when she encountered evidence of his power.",
     "q": "Ask the Spirit whether there is someone in your life, seemingly far from faith, that he wants you to notice or speak to differently."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: confession",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Rahab had to abandon loyalty to her own city and king to align herself with the LORD and his people.",
     "q": "Is there any divided loyalty in your own life that you need to name honestly before God and let go of?"
    }
   ]
  }
 ]
},
// Day 439
{
 "ref": "Luke 19",
 "tag": "New Testament",
 "api": "luke+19",
 "sum": [
  "Zacchaeus, a rich chief tax collector too short to see over the crowd, climbs a sycamore tree to see Jesus, who calls him down by name and invites himself to stay at his house; Zacchaeus receives him joyfully and vows to give half his goods to the poor and restore fourfold anyone he has cheated, prompting Jesus to declare, \"This day is salvation come to this house... for the Son of man is come to seek and to save that which was lost.\"",
  "Jesus tells the parable of the ten pounds, given to servants to trade with while their master goes away to receive a kingdom, commending the faithful servant, \"well done, thou good servant: because thou hast been faithful in a very little,\" and rebuking the one who hid his pound out of fear.",
  "As Jesus approaches Jerusalem, he sends two disciples for a colt \"whereon yet never man sat,\" and rides in to shouts of \"Blessed be the King that cometh in the name of the Lord,\" and when the Pharisees object, replies that if the people were silent, \"the stones would immediately cry out.\"",
  "Jesus weeps over the city as he sees it, foreseeing its coming destruction \"because thou knewest not the time of thy visitation,\" and enters the temple to drive out the sellers, declaring, \"My house is the house of prayer: but ye have made it a den of thieves.\""
 ],
 "nug": [
  {
   "h": "Come down; I must abide at thy house",
   "b": "\"Zacchaeus, make haste, and come down; for to day I must abide at thy house\" (Luke 19:5). Jesus singles out the despised tax collector by name and invites himself in, before Zacchaeus has said a word."
  },
  {
   "h": "Seeking and saving the lost",
   "b": "\"For the Son of man is come to seek and to save that which was lost\" (Luke 19:10). Zacchaeus's changed life — repaying and giving generously — flows from being sought out first, not the other way around."
  },
  {
   "h": "Faithful in a very little",
   "b": "\"Well, thou good servant: because thou hast been faithful in a very little, have thou authority over ten cities\" (Luke 19:17). Small, faithful stewardship in the parable leads to far greater responsibility entrusted."
  },
  {
   "h": "The stones would cry out",
   "b": "As the crowd praises him entering Jerusalem, Jesus answers the objecting Pharisees, \"I tell you that, if these should hold their peace, the stones would immediately cry out\" (Luke 19:40). Some truths are too great to stay silent."
  },
  {
   "h": "A house of prayer made a den",
   "b": "\"My house is the house of prayer: but ye have made it a den of thieves\" (Luke 19:46). Jesus's anger in the temple is directed at what had displaced true worship, not at worship itself."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 15:1-7 · Matthew 25:14-23 · Zechariah 9:9",
   "qs": [
    {
     "th": "Luke 15 shows the same heart of Jesus seeking the lost, the parable of the talents in Matthew closely parallels the parable of the pounds here, and Zechariah's prophecy of the King coming humbly on a colt is fulfilled in Jesus's entry to Jerusalem.",
     "q": "Read these together — how does seeing the pattern across these passages deepen what you notice in Luke 19 about who Jesus seeks, and how he asks his people to be faithful while they wait for him?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Zacchaeus responded to being sought out by Jesus with immediate, costly generosity and restitution.",
     "q": "What would a genuine, costly response to grace look like in your own life right now — is there something you need to put right, or give away?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus wept over Jerusalem because it did not recognise \"the time of thy visitation\" (Luke 19:44).",
     "q": "Ask the Spirit whether there is something of God's presence or prompting in your life right now that you might be at risk of missing."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: thanksgiving",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"This day is salvation come to this house... for the Son of man is come to seek and to save that which was lost\" (Luke 19:9-10).",
     "q": "Thank Jesus specifically for the ways he has sought you out, even when you were not looking for him."
    }
   ]
  }
 ]
},
// Day 440
{
 "ref": "Psalm 124",
 "tag": "Psalms & Wisdom",
 "api": "psalms+124",
 "sum": [
  "Attributed to David, this Song of Ascents opens with a striking conditional: \"If it had not been the LORD who was on our side, now may Israel say... they had swallowed us up quick.\"",
  "The psalmist pictures the danger they escaped in vivid terms — a flood sweeping them away, \"the proud waters\" going over their soul.",
  "He then likens their deliverance to a bird escaped \"out of the snare of the fowlers: the snare is broken, and we are escaped.\"",
  "The psalm ends with the simple confession, \"Our help is in the name of the LORD, who made heaven and earth.\""
 ],
 "nug": [
  {
   "h": "If the LORD had not been on our side",
   "b": "\"If it had not been the LORD who was on our side, now may Israel say; If it had not been the LORD who was on our side, when men rose up against us: Then they had swallowed us up quick\" (Psalm 124:1-3). The psalm forces Israel to imagine, and be grateful for, the disaster that did not happen."
  },
  {
   "h": "The proud waters",
   "b": "\"Then the waters had overwhelmed us, the stream had gone over our soul: Then the proud waters had gone over our soul\" (Psalm 124:4-5). Danger is pictured as an overwhelming flood, utterly beyond the psalmist's own strength to resist."
  },
  {
   "h": "Escaped like a bird",
   "b": "\"Our soul is escaped as a bird out of the snare of the fowlers: the snare is broken, and we are escaped\" (Psalm 124:7). Deliverance is total — the trap itself is destroyed, not merely evaded."
  },
  {
   "h": "Our help is in the name of the LORD",
   "b": "\"Our help is in the name of the LORD, who made heaven and earth\" (Psalm 124:8). The psalm's closing confession ties the smallest personal rescue to the power of the Creator of all things."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 14:13-14 · Psalm 121:1-2 · 2 Corinthians 1:8-10",
   "qs": [
    {
     "th": "Exodus 14 recalls a real historical deliverance at the Red Sea, Psalm 121 makes the same declaration of help coming from the Maker of heaven and earth, and Paul describes a deliverance so great he despaired even of life, so that he would trust not in himself but in God.",
     "q": "Read these alongside Psalm 124 — how do they shape the way you look back at a difficulty you have already come through?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "\"If it had not been the LORD who was on our side... then they had swallowed us up quick\" (Psalm 124:1-3).",
     "q": "Is there a danger, disaster, or difficult season in your own life that you can now look back on and honestly say God alone brought you through?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Our soul is escaped as a bird out of the snare of the fowlers: the snare is broken, and we are escaped\" (Psalm 124:7).",
     "q": "Ask the Spirit whether there is a snare — a habit, a temptation, a fear — that you need him to break in your life right now."
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "\"Our help is in the name of the LORD, who made heaven and earth\" (Psalm 124:8).",
     "q": "Praise God simply for being the Maker of heaven and earth, and therefore fully able to help you in whatever you are facing."
    }
   ]
  }
 ]
},
// Day 441
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Our help is in the name of the LORD",
   "b": "\"Our help is in the name of the LORD, who made heaven and earth\" (Psalm 124:8). This week carried one of the biggest milestones in the whole reading plan — the death of Moses and the rise of Joshua — and closes fittingly on this confession of where all real help ultimately comes from."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the death of Moses and the close of the Pentateuch (Deuteronomy 34), the opening of the book of Joshua and Rahab's rescue of the spies (Joshua 1-2), Jesus and Zacchaeus in Jerusalem (Luke 19), and two more Songs of Ascents (Psalm 123 and 124). You have now read the entire Pentateuch, Genesis through Deuteronomy, across these two years.",
     "q": "Which moment challenged you more this week — God's charge to Joshua, \"Be strong and of a good courage... for the LORD thy God is with thee whithersoever thou goest\" (Joshua 1:9), or Rahab's confession, \"the LORD your God, he is God in heaven above, and in earth beneath\" (Joshua 2:11)? Why?"
    },
    {
     "th": "Most people naturally lean toward one or two of the five prayer forms you practised this week.",
     "q": "Which felt easiest and which hardest, and why do you think that is?"
    }
   ]
  },
  {
   "id": "rest",
   "t": "Rest",
   "m": "2 min",
   "qs": [
    {
     "th": "\"Our help is in the name of the LORD, who made heaven and earth\" (Psalm 124:8).",
     "q": "Sit quietly for a moment, and simply rest in that truth before you move on."
    }
   ]
  }
 ]
},
];
