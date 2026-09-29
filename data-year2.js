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
];
