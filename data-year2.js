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
// Day 442
{
 "ref": "Joshua 3",
 "tag": "Old Testament",
 "api": "joshua+3",
 "sum": [
  "Israel breaks camp at Shittim and comes to the Jordan, where officers instruct the people to watch for the ark of the covenant, carried by the priests, and to follow it at a distance of about two thousand cubits, \"that ye may know the way by which ye must go: for ye have not passed this way heretofore.\"",
  "Joshua tells the people to sanctify themselves, for tomorrow \"the LORD will do wonders among you,\" and the priests are told to go ahead of the people and stand in the Jordan itself.",
  "The Jordan is at flood stage, overflowing all its banks, yet as soon as the priests' feet carrying the ark touch its edge, the waters coming down from upstream \"stood and rose up upon an heap\" far off at the city Adam, while the waters below flow away toward the salt sea.",
  "The whole nation passes over on dry ground right against Jericho, while the priests bearing the ark stand firm in the midst of the dry riverbed until every one of the people has finished crossing."
 ],
 "nug": [
  {
   "h": "A way you have not passed before",
   "b": "\"...for ye have not passed this way heretofore\" (Joshua 3:4). The people are told to keep their eyes on the ark going ahead of them into completely unfamiliar territory."
  },
  {
   "h": "Sanctify yourselves",
   "b": "\"Sanctify yourselves: for to morrow the LORD will do wonders among you\" (Joshua 3:5). Preparation of heart comes before the miracle, not after it."
  },
  {
   "h": "The waters rose up in an heap",
   "b": "\"...the waters which came down from above stood and rose up upon an heap\" (Joshua 3:16). The Jordan at full flood is stopped as decisively as the Red Sea was, echoing the exodus generation's deliverance for their children."
  },
  {
   "h": "Firm ground in the midst of the river",
   "b": "\"...the priests that bare the ark... stood firm on dry ground in the midst of Jordan... until all the people were passed clean over Jordan\" (Joshua 3:17). Those carrying the presence of God stand exposed in the riverbed the whole time everyone else crosses safely."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 14:21-22 · Hebrews 11:29 · Isaiah 43:2",
   "qs": [
    {
     "th": "Exodus recounts the Red Sea parting for the generation who left Egypt, Hebrews names that crossing as an act of faith, and Isaiah promises that when we pass through the waters God will be with us.",
     "q": "Read these alongside Joshua 3 — how does seeing the Jordan crossing as an echo of the Red Sea shape what you notice about God keeping his promises across a whole generation?"
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
     "th": "Joshua told the people to sanctify themselves before the LORD did wonders among them (Joshua 3:5).",
     "q": "Is there a step of preparation or obedience God is asking of you now, before you see him move in a situation you're facing?"
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
     "th": "The people were told to follow the ark \"for ye have not passed this way heretofore\" (Joshua 3:4).",
     "q": "Ask the Spirit whether there is an unfamiliar path ahead of you right now where you need to simply keep your eyes on him rather than on the way itself."
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
     "th": "\"...the waters which came down from above stood and rose up upon an heap\" (Joshua 3:16).",
     "q": "Praise God for his power to stop what seems immovable and to make a way where there was none."
    }
   ]
  }
 ]
},
// Day 443
{
 "ref": "Joshua 4",
 "tag": "Old Testament",
 "api": "joshua+4",
 "sum": [
  "Once the nation has crossed, the LORD commands Joshua to choose twelve men, one from each tribe, and have them take twelve stones out of the midst of the Jordan from the very place where the priests' feet stood.",
  "These stones are set up as a memorial at Gilgal where Israel camps that night, so that in future days \"when your children ask their fathers in time to come, saying, What mean ye by these stones?\" they will be told the story of how the Jordan was cut off before the ark of the covenant.",
  "Joshua also sets up twelve stones in the midst of the Jordan itself, and the priests come up out of the riverbed only once everyone and everything has finished crossing, at which point the waters of the Jordan immediately return to their place and overflow their banks as before.",
  "The chapter notes that the people passed over \"in haste,\" and that this day the LORD magnified Joshua in the sight of all Israel, \"that they might fear him, as they feared Moses.\""
 ],
 "nug": [
  {
   "h": "What mean ye by these stones?",
   "b": "\"...when your children ask their fathers in time to come, saying, What mean ye by these stones?\" (Joshua 4:21-22). The memorial exists specifically so that a future generation who did not see the miracle will still hear the story of it."
  },
  {
   "h": "That all the people of the earth might know",
   "b": "The stones are set up \"that all the people of the earth might know the hand of the LORD, that it is mighty\" (Joshua 4:24). The purpose of remembering is not private nostalgia but public testimony to who God is."
  },
  {
   "h": "The waters returned to their place",
   "b": "\"...the waters of Jordan returned unto their place, and flowed over all his banks, as they did before\" (Joshua 4:18). The miracle was precisely timed to the need of the moment, not a permanent change to the river."
  },
  {
   "h": "Magnified in the sight of all Israel",
   "b": "\"On that day the LORD magnified Joshua in the sight of all Israel; and they feared him, as they feared Moses\" (Joshua 4:14). God establishes Joshua's leadership publicly, through obedience rather than self-promotion."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 6:20-21 · Exodus 12:26-27 · Psalm 78:5-7",
   "qs": [
    {
     "th": "Deuteronomy and Exodus both describe children asking what a practice means and being told the story of God's deliverance, and Psalm 78 explains that God's works are told to each generation precisely so the next one will set its hope in him.",
     "q": "Read these alongside Joshua 4 — what has God done in your own life that is worth deliberately passing on to those who come after you?"
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
     "th": "The twelve stones were set up \"that all the people of the earth might know the hand of the LORD\" (Joshua 4:24).",
     "q": "What is one way you could turn a personal memory of God's faithfulness into something you actually tell someone else about?"
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
     "th": "Israel set up stones so a future generation would ask, and be told, what God had done (Joshua 4:21-22).",
     "q": "Ask the Spirit to bring to mind a specific answer to prayer or moment of provision you have let yourself forget."
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
     "th": "\"...that all the people of the earth might know the hand of the LORD, that it is mighty\" (Joshua 4:24).",
     "q": "Thank God for one specific thing he has done for you that you want your own household or friends to remember."
    }
   ]
  }
 ]
},
// Day 444
{
 "ref": "Psalm 125",
 "tag": "Psalms & Wisdom",
 "api": "psalms+125",
 "sum": [
  "A Song of Ascents opens with a declaration of security: \"They that trust in the LORD shall be as mount Zion, which cannot be removed, but abideth for ever.\"",
  "As the mountains stand round about Jerusalem, so the psalmist says \"the LORD is round about his people from henceforth even for ever,\" surrounding them as a permanent guard.",
  "The rod of the wicked shall not rest upon the land allotted to the righteous, \"lest the righteous put forth their hands unto iniquity,\" suggesting that prolonged oppression can tempt even the faithful toward wrongdoing.",
  "The psalm closes with a prayer for those who are good and upright in heart, and a warning against those who turn aside to crooked ways, ending with the benediction, \"Peace shall be upon Israel.\""
 ],
 "nug": [
  {
   "h": "As mount Zion, which cannot be removed",
   "b": "\"They that trust in the LORD shall be as mount Zion, which cannot be removed, but abideth for ever\" (Psalm 125:1). Trust in the LORD is likened to the most stable, immovable thing the psalmist knows."
  },
  {
   "h": "The LORD is round about his people",
   "b": "\"As the mountains are round about Jerusalem, so the LORD is round about his people from henceforth even for ever\" (Psalm 125:2). God's protection is pictured as complete surrounding, not a single line of defence."
  },
  {
   "h": "Lest the righteous put forth their hands unto iniquity",
   "b": "\"For the rod of the wicked shall not rest upon the lot of the righteous; lest the righteous put forth their hands unto iniquity\" (Psalm 125:3). Even good people can be worn down by prolonged pressure into compromise."
  },
  {
   "h": "Peace shall be upon Israel",
   "b": "\"Do good, O LORD, unto those that be good, and to them that are upright in their hearts... Peace shall be upon Israel\" (Psalm 125:4-5). The psalm closes by praying for the community's good, not just the individual's."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 46:1-3 · Matthew 6:13 · Romans 12:21",
   "qs": [
    {
     "th": "Psalm 46 pictures God as a refuge even when the earth is moved, Jesus teaches his disciples to pray to be delivered from temptation, and Paul urges believers not to be overcome by evil but to overcome evil with good.",
     "q": "Read these alongside Psalm 125 — how do they help you think about staying faithful under pressure without being worn down into compromise?"
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
     "th": "The psalm warns that sustained pressure from the wicked can lead \"the righteous\" to \"put forth their hands unto iniquity\" (Psalm 125:3).",
     "q": "Where in your life right now might ongoing pressure or frustration be tempting you toward a compromise you wouldn't normally consider?"
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
     "th": "\"They that trust in the LORD shall be as mount Zion, which cannot be removed\" (Psalm 125:1).",
     "q": "Ask the Spirit to show you where your trust feels shaky right now, and to steady it."
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
     "th": "\"...lest the righteous put forth their hands unto iniquity\" (Psalm 125:3).",
     "q": "Confess to God any place where pressure or weariness has led you to compromise, and ask him to steady your hands again."
    }
   ]
  }
 ]
},
// Day 445
{
 "ref": "Joshua 5",
 "tag": "Old Testament",
 "api": "joshua+5",
 "sum": [
  "News of the Jordan's drying up reaches the kings of the Amorites and Canaanites, and their hearts melt with fear at what the LORD has done for Israel.",
  "Joshua circumcises the new generation born in the wilderness at Gilgal, since none of them had been circumcised on the journey, and the LORD says \"This day have I rolled away the reproach of Egypt from off you,\" giving Gilgal its name.",
  "Israel keeps the Passover on the plains of Jericho, eats of the old corn of the land the very next day, and the manna ceases, \"neither had the children of Israel manna any more,\" as they now eat the produce of Canaan.",
  "Near Jericho, Joshua meets a man with a drawn sword who identifies himself as \"captain of the host of the LORD,\" and Joshua falls on his face and worships, told to remove his shoe, \"for the place whereon thou standest is holy,\" echoing Moses at the burning bush."
 ],
 "nug": [
  {
   "h": "The reproach of Egypt rolled away",
   "b": "\"This day have I rolled away the reproach of Egypt from off you\" (Joshua 5:9). A whole generation's identity is renewed through obedience before they take a single step in battle."
  },
  {
   "h": "The manna ceased",
   "b": "\"...the manna ceased on the morrow after they had eaten of the old corn of the land; neither had the children of Israel manna any more\" (Joshua 5:12). Provision changes shape once the people enter the land it was always leading them toward."
  },
  {
   "h": "Art thou for us, or for our adversaries?",
   "b": "Joshua asks the man with the drawn sword whether he is for Israel or for their enemies, and the answer is simply \"Nay; but as captain of the host of the LORD am I now come\" (Joshua 5:13-14). God's presence is not there to be recruited to one side — Joshua must submit to him, not the reverse."
  },
  {
   "h": "Loose thy shoe from off thy foot",
   "b": "\"Loose thy shoe from off thy foot; for the place whereon thou standest is holy\" (Joshua 5:15). Before Joshua leads Israel into battle, he is first brought low in worship, just as Moses was at the burning bush."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 3:4-5 · Exodus 16:35 · Colossians 2:11",
   "qs": [
    {
     "th": "Exodus 3 records Moses being told to remove his shoe at holy ground, Exodus 16 marks the beginning of the manna that now ceases, and Colossians speaks of a circumcision made without hands accomplished in Christ.",
     "q": "Read these alongside Joshua 5 — what do you notice about how God marks new beginnings with both provision and a call to reverence?"
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
     "th": "The man with the drawn sword told Joshua he had not come to take sides, but as \"captain of the host of the LORD\" (Joshua 5:14).",
     "q": "Are you tempted to ask God to bless what you've already decided, rather than asking what he wants — and what would change if you asked the second question instead?"
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
     "th": "Joshua fell on his face and worshipped before he received any strategy for the battle ahead (Joshua 5:14).",
     "q": "Ask the Spirit to search whether you have been rushing toward action in some area of life before pausing to worship."
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
     "th": "\"Loose thy shoe from off thy foot; for the place whereon thou standest is holy\" (Joshua 5:15).",
     "q": "Sit quietly before God for a few minutes, laying down your own plans, and simply be still in his presence."
    }
   ]
  }
 ]
},
// Day 446
{
 "ref": "Luke 20",
 "tag": "New Testament",
 "api": "luke+20",
 "sum": [
  "The chief priests and scribes challenge Jesus's authority in the temple, and he answers with a counter-question about John's baptism that leaves them unable to reply.",
  "Jesus tells the parable of the wicked husbandmen who beat and kill the vineyard owner's servants and finally his beloved son, quoting, \"The stone which the builders rejected, the same is become the head of the corner.\"",
  "The Herodians try to trap him over paying tribute to Caesar, and he answers, \"Render therefore unto Caesar the things which be Caesar's, and unto God the things which be God's\"; then the Sadducees, who deny the resurrection, pose the riddle of a woman married to seven brothers, and Jesus answers that in the resurrection people \"neither marry, nor are given in marriage\" but are \"the children of God, being the children of the resurrection,\" for God is \"not a God of the dead, but of the living.\"",
  "Jesus then asks how the Christ can be both David's son and David's Lord, quoting Psalm 110, and warns against the scribes who love long robes, greetings, and chief seats, and who \"devour widows' houses, and for a shew make long prayers.\""
 ],
 "nug": [
  {
   "h": "By what authority?",
   "b": "The chief priests demand, \"Tell us, by what authority doest thou these things? or who is he that gave thee this authority?\" (Luke 20:2). Jesus refuses to answer those unwilling to answer honestly about John's baptism first."
  },
  {
   "h": "The stone the builders rejected",
   "b": "\"The stone which the builders rejected, the same is become the head of the corner\" (Luke 20:17). Jesus applies this psalm directly to himself, the rejected heir of the vineyard parable."
  },
  {
   "h": "Render unto Caesar, render unto God",
   "b": "\"Render therefore unto Caesar the things which be Caesar's, and unto God the things which be God's\" (Luke 20:25). Jesus refuses the trap of an either/or, insisting both obligations are real."
  },
  {
   "h": "Not a God of the dead, but of the living",
   "b": "\"For he is not a God of the dead, but of the living: for all live unto him\" (Luke 20:38). Jesus grounds the hope of resurrection in the character of God himself, not merely in an argument about marriage."
  },
  {
   "h": "Devouring widows' houses",
   "b": "Jesus warns of scribes who \"devour widows' houses, and for a shew make long prayers,\" promising they \"shall receive greater damnation\" (Luke 20:47). Public religiosity paired with private exploitation draws his sharpest condemnation."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 118:22-23 · Psalm 110:1 · Isaiah 5:1-7",
   "qs": [
    {
     "th": "Psalm 118 is the very psalm Jesus quotes about the rejected stone, Psalm 110 is the psalm behind his question about David's Lord, and Isaiah's song of the vineyard lies behind the parable of the wicked husbandmen.",
     "q": "Read these alongside Luke 20 — how does seeing the Old Testament roots of Jesus's teaching change how you hear his answers to these trick questions?"
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
     "th": "Jesus condemned scribes who made long prayers \"for a shew\" while exploiting the vulnerable (Luke 20:47).",
     "q": "Is there any gap in your own life between how your faith looks from the outside and how it is actually lived out, especially toward people with less power than you?"
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
     "th": "Jesus refused to be trapped by questions designed to catch him out, answering with clarity rooted in Scripture (Luke 20:25).",
     "q": "Ask the Spirit to give you the same steadiness the next time you face a question or situation designed to pressure you into a false choice."
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
     "th": "Jesus named the scribes who \"devour widows' houses\" (Luke 20:47) with particular anger.",
     "q": "Pray for someone you know who is vulnerable to being exploited or taken advantage of, and ask God to protect and provide for them."
    }
   ]
  }
 ]
},
// Day 447
{
 "ref": "Psalm 126",
 "tag": "Psalms & Wisdom",
 "api": "psalms+126",
 "sum": [
  "A Song of Ascents celebrates a great deliverance: \"When the LORD turned again the captivity of Zion, we were like them that dream,\" their mouths filled with laughter and their tongues with singing.",
  "So great was the deliverance that even the surrounding nations acknowledged it, saying, \"The LORD hath done great things for them,\" a claim Israel echoes back with joy.",
  "The psalmist turns from praise to prayer, asking, \"Turn again our captivity, O LORD, as the streams in the south,\" longing for a further, ongoing restoration.",
  "The psalm closes with its most famous image: \"They that sow in tears shall reap in joy. He that goeth forth and weepeth, bearing precious seed, shall doubtless come again with rejoicing, bringing his sheaves with him.\""
 ],
 "nug": [
  {
   "h": "Like them that dream",
   "b": "\"When the LORD turned again the captivity of Zion, we were like them that dream\" (Psalm 126:1). Some deliverances are so great they feel almost unreal even as they are happening."
  },
  {
   "h": "The LORD hath done great things for us",
   "b": "\"The LORD hath done great things for us; whereof we are glad\" (Psalm 126:3). Israel's testimony echoes back what even the nations around them were saying."
  },
  {
   "h": "Turn again our captivity",
   "b": "\"Turn again our captivity, O LORD, as the streams in the south\" (Psalm 126:4). Even after a great deliverance, the psalmist still prays for further restoration, comparing it to dry desert streams suddenly filled."
  },
  {
   "h": "Sowing in tears, reaping in joy",
   "b": "\"They that sow in tears shall reap in joy... bringing his sheaves with him\" (Psalm 126:5-6). Present grief, faithfully carried, is pictured as seed that will one day yield a joyful harvest."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "John 16:20-22 · 2 Corinthians 9:6 · Galatians 6:9",
   "qs": [
    {
     "th": "Jesus promises his disciples that their sorrow will be turned into joy, Paul teaches that sowing bountifully leads to a bountiful harvest, and he urges believers not to grow weary in doing good, for in due season they will reap.",
     "q": "Read these alongside Psalm 126 — how do they encourage you to keep going in something costly you are currently carrying?"
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
     "th": "\"They that sow in tears shall reap in joy\" (Psalm 126:5).",
     "q": "Is there something costly or painful you are currently doing faithfully, trusting God for a harvest you cannot yet see?"
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
     "th": "The psalmist still prayed \"Turn again our captivity, O LORD\" even after already celebrating a great deliverance (Psalm 126:4).",
     "q": "Ask the Spirit what area of ongoing restoration you need to keep bringing to God, even after he has already been faithful."
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
     "th": "\"The LORD hath done great things for us; whereof we are glad\" (Psalm 126:3).",
     "q": "Thank God for a specific great thing he has done for you, and let yourself feel the gladness of it as you pray."
    }
   ]
  }
 ]
},
// Day 448
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Sowing in tears, reaping in joy",
   "b": "\"They that sow in tears shall reap in joy... bringing his sheaves with him\" (Psalm 126:5-6). This week carried one of the great narrative milestones of the whole Bible — Israel's crossing of the Jordan into the promised land after forty years — and closes on a psalm of remembered and hoped-for deliverance."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read Israel's crossing of the Jordan and the memorial stones at Gilgal (Joshua 3-4), the circumcision at Gilgal and Joshua's encounter with the captain of the LORD's host (Joshua 5), Jesus debating the religious leaders in the temple (Luke 20), and two Songs of Ascents (Psalm 125 and 126).",
     "q": "Which moment challenged you more this week — Joshua being told, \"Loose thy shoe from off thy foot; for the place whereon thou standest is holy\" (Joshua 5:15), or the psalmist's confidence that \"they that sow in tears shall reap in joy\" (Psalm 126:5)? Why?"
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
     "th": "\"They that sow in tears shall reap in joy\" (Psalm 126:5).",
     "q": "Sit quietly for a moment, and let that promise settle over whatever you are currently carrying."
    }
   ]
  }
 ]
},
// Day 449
{
 "ref": "Joshua 6",
 "tag": "Old Testament",
 "api": "joshua+6",
 "sum": [
  "The LORD tells Joshua, \"See, I have given into thine hand Jericho, and the king thereof, and the mighty men of valour,\" and commands Israel to march around the city once a day for six days, with seven priests bearing seven trumpets of rams' horns before the ark.",
  "On the seventh day they are to march around the city seven times, and when the priests blow a long blast, \"all the people shall shout with a great shout; and the wall of the city shall fall down flat\"; Joshua commands strict silence from the people until that moment comes.",
  "Rahab and her household are commanded to be spared, marked out by the scarlet cord in her window, exactly as the spies had promised her.",
  "When the trumpets sound and the people shout, \"the wall fell down flat,\" and Israel takes the city and destroys it under the ban, except for the silver, gold, brass, and iron devoted to the LORD's treasury, and Joshua pronounces a curse on any man who rebuilds Jericho."
 ],
 "nug": [
  {
   "h": "I have given into thine hand",
   "b": "\"See, I have given into thine hand Jericho, and the king thereof, and the mighty men of valour\" (Joshua 6:2). The victory is announced as already accomplished before a single step of the march begins."
  },
  {
   "h": "Silence until the shout",
   "b": "Joshua commands the people, \"Ye shall not shout, nor make any noise with your voice... until the day I bid you shout; then shall ye shout\" (Joshua 6:10). Obedience means waiting for God's timing even when action seems called for."
  },
  {
   "h": "The wall fell down flat",
   "b": "\"...the people shouted with a great shout, that the wall fell down flat, so that the people went up into the city\" (Joshua 6:20). The battle is won by obedience to an unlikely instruction, not by conventional siege warfare."
  },
  {
   "h": "Rahab's household spared",
   "b": "Joshua tells the two spies, \"bring out thence the woman, and all that she hath, as ye sware unto her\" (Joshua 6:22). A promise made to one Canaanite woman is kept in the middle of a city's destruction."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joshua 2:12-14 · Hebrews 11:30-31 · 2 Corinthians 10:4",
   "qs": [
    {
     "th": "Joshua 2 records the oath the spies swore to Rahab, Hebrews names both the fall of Jericho and Rahab's faith as acts of trust, and Paul describes weapons of spiritual warfare that are not carnal but mighty through God.",
     "q": "Read these alongside Joshua 6 — what do you notice about the shape God's victories take, and about promises kept even in the middle of judgment?"
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
     "th": "Israel was commanded to keep silent and simply march, obeying an instruction that made no military sense, until the moment came to shout (Joshua 6:10).",
     "q": "Is there something God is asking you to keep doing faithfully, even though it doesn't yet look like it's working?"
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
     "th": "The victory at Jericho depended entirely on obedience to an unusual instruction, not on Israel's own strength (Joshua 6:2-5).",
     "q": "Ask the Spirit whether there is an unusual or costly obedience he is inviting you into right now."
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
     "th": "\"...the wall fell down flat, so that the people went up into the city\" (Joshua 6:20).",
     "q": "Praise God for his power to bring down what looks immovable, in his own time and his own way."
    }
   ]
  }
 ]
},
// Day 450
{
 "ref": "Joshua 7",
 "tag": "Old Testament",
 "api": "joshua+7",
 "sum": [
  "Achan, of the tribe of Judah, secretly takes some of the devoted things from Jericho's plunder — a Babylonish garment, silver, and gold — and \"the anger of the LORD was kindled against the children of Israel.\"",
  "Unaware of this, Israel sends a small force against the little city of Ai, which routs them and kills thirty-six Israelites, causing the people's hearts to \"melt, and become as water.\"",
  "Joshua tears his clothes and falls before the ark in distress, and the LORD tells him Israel has sinned, taken of the accursed thing, and cannot stand before their enemies until it is put away.",
  "A solemn process of elimination by tribe, family, household, and finally individual identifies Achan, who confesses, \"I saw... I coveted, and took them\"; Achan, his family, and his plunder are taken to the valley of Achor, stoned, and burned with fire, and the LORD's fierce anger turns away."
 ],
 "nug": [
  {
   "h": "The anger of the LORD was kindled",
   "b": "\"But the children of Israel committed a trespass in the accursed thing... and the anger of the LORD was kindled against the children of Israel\" (Joshua 7:1). One man's hidden sin brings consequences on the whole community."
  },
  {
   "h": "Israel cannot stand before their enemies",
   "b": "The LORD tells Joshua, \"...neither will I be with you any more, except ye destroy the accursed from among you\" (Joshua 7:12). Unconfessed sin, left in place, cuts off the sense of God's presence."
  },
  {
   "h": "I saw, I coveted, I took",
   "b": "Achan confesses, \"When I saw among the spoils a goodly Babylonish garment... then I coveted them, and took them\" (Joshua 7:21). The pattern of temptation moves quickly from seeing, to coveting, to taking."
  },
  {
   "h": "The valley of Achor",
   "b": "Joshua tells Achan, \"Why hast thou troubled us? the LORD shall trouble thee this day,\" and the place is named \"The valley of Achor,\" meaning trouble, \"unto this day\" (Joshua 7:25-26). Sin's consequences leave a lasting mark on a place and a people."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "James 1:14-15 · 1 John 1:9 · Hosea 2:15",
   "qs": [
    {
     "th": "James describes the same pattern of desire conceiving sin, John promises that confessed sin is forgiven and cleansed, and Hosea surprisingly promises that the valley of Achor will one day become a door of hope.",
     "q": "Read these alongside Joshua 7 — how do they change the way you think about hidden sin, confession, and the possibility of restoration?"
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
     "th": "Achan's own explanation traced a clear path: \"I saw... I coveted... and took\" (Joshua 7:21).",
     "q": "Where does that same pattern — seeing, coveting, taking — show up most easily in your own life, and what would it look like to interrupt it earlier?"
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
     "th": "Israel could not discern the cause of their defeat until it was searched out and brought into the open (Joshua 7:14-18).",
     "q": "Ask the Spirit to search your heart honestly and show you anything hidden that needs to be brought into the light."
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
     "th": "\"...and the anger of the LORD was kindled against the children of Israel\" (Joshua 7:1) because of what one man hid.",
     "q": "Bring to God honestly anything you have been keeping hidden, and ask for the grace to put it away."
    }
   ]
  }
 ]
},
// Day 451
{
 "ref": "Psalm 127",
 "tag": "Psalms & Wisdom",
 "api": "psalms+127",
 "sum": [
  "\"A Song of degrees for Solomon\" opens with the principle that all human labour is futile without God: \"Except the LORD build the house, they labour in vain that build it: except the LORD keep the city, the watchman waketh but in vain.\"",
  "The psalm warns against anxious striving: \"It is vain for you to rise up early, to sit up late, to eat the bread of sorrows: for so he giveth his beloved sleep.\"",
  "The psalm then turns to children, presenting them not as an achievement to be earned but as a gift received: \"Lo, children are an heritage of the LORD: and the fruit of the womb is his reward.\"",
  "Children are compared to \"arrows in the hand of a mighty man,\" and the psalm closes, \"Happy is the man that hath his quiver full of them,\" for he shall not be ashamed when he speaks with his enemies in the gate."
 ],
 "nug": [
  {
   "h": "Except the LORD build the house",
   "b": "\"Except the LORD build the house, they labour in vain that build it\" (Psalm 127:1). Effort without God's involvement is ultimately futile, however hard it works."
  },
  {
   "h": "He giveth his beloved sleep",
   "b": "\"It is vain for you to rise up early, to sit up late, to eat the bread of sorrows: for so he giveth his beloved sleep\" (Psalm 127:2). Rest itself is described as a gift from God, contrasted with anxious, self-reliant striving."
  },
  {
   "h": "Children, an heritage of the LORD",
   "b": "\"Lo, children are an heritage of the LORD: and the fruit of the womb is his reward\" (Psalm 127:3). The psalm reframes children as something received from God rather than achieved by human effort."
  },
  {
   "h": "Arrows in the hand of a mighty man",
   "b": "\"As arrows are in the hand of a mighty man; so are children of the youth... Happy is the man that hath his quiver full of them\" (Psalm 127:4-5). Children are pictured as a strength sent ahead into the future, not merely a present responsibility."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 6:31-33 · Proverbs 22:6 · Genesis 33:5",
   "qs": [
    {
     "th": "Jesus tells his disciples not to be anxious but to seek first the kingdom, Proverbs speaks of training up a child in the way he should go, and Jacob calls his children \"the children which God hath graciously given thy servant.\"",
     "q": "Read these alongside Psalm 127 — how do they shape the way you think about both work and family as things received from God rather than purely achieved by you?"
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
     "th": "\"It is vain for you to rise up early, to sit up late, to eat the bread of sorrows: for so he giveth his beloved sleep\" (Psalm 127:2).",
     "q": "Where in your life are you currently striving anxiously in a way this psalm would call you to release into God's hands instead?"
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
     "th": "\"Except the LORD build the house, they labour in vain that build it\" (Psalm 127:1).",
     "q": "Ask the Spirit to show you one area where you have been building without inviting him into the work."
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
     "th": "\"...for so he giveth his beloved sleep\" (Psalm 127:2).",
     "q": "Be still for a few minutes, laying down whatever you are anxiously carrying, and simply receive God's rest."
    }
   ]
  }
 ]
},
// Day 452
{
 "ref": "Joshua 8",
 "tag": "Old Testament",
 "api": "joshua+8",
 "sum": [
  "With Achan's sin dealt with, the LORD tells Joshua not to fear, and gives him a strategy for Ai: a large ambush is hidden behind the city while Joshua leads a force that feigns retreat, drawing the men of Ai out.",
  "At Joshua's signal, stretching out his spear toward the city, the ambush rises and takes the now-undefended Ai, setting it on fire; caught between the two Israelite forces, the men of Ai are destroyed, and their king is hanged on a tree until evening.",
  "Joshua then builds an altar to the LORD on Mount Ebal as Moses had commanded, offering burnt offerings and peace offerings, and writes a copy of the law of Moses upon the stones.",
  "He reads all the words of the law — the blessings and the cursings — before all Israel, including the women, the little ones, and the strangers among them, \"There was not a word of all that Moses commanded, which Joshua read not.\""
 ],
 "nug": [
  {
   "h": "Fear not, neither be thou dismayed",
   "b": "The LORD tells Joshua, \"Fear not, neither be thou dismayed: take all the people of war with thee... See, I have given into thy hand the king of Ai\" (Joshua 8:1). After failure and confession, God restores Joshua with fresh confidence, not lingering condemnation."
  },
  {
   "h": "The spear stretched toward the city",
   "b": "\"...Joshua drew not his hand back, wherewith he stretched out the spear, until he had utterly destroyed all the inhabitants of Ai\" (Joshua 8:26). Joshua's sustained, deliberate posture is itself part of the battle's outcome."
  },
  {
   "h": "An altar on Mount Ebal",
   "b": "Joshua builds an altar \"as Moses the servant of the LORD commanded\" and offers burnt offerings and peace offerings there (Joshua 8:30-31). Worship and obedience to the written law come before any further conquest."
  },
  {
   "h": "Not a word Joshua read not",
   "b": "\"There was not a word of all that Moses commanded, which Joshua read not before all the congregation of Israel, with the women, and the little ones, and the strangers\" (Joshua 8:35). The whole community, without exception, hears the whole law."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 27:2-8 · Deuteronomy 31:11-13 · 1 John 1:9",
   "qs": [
    {
     "th": "Deuteronomy 27 commands the altar and the law written on stones at Ebal, Deuteronomy 31 commands the law to be read to the whole assembly including children, and John promises cleansing and restored fellowship after confessed sin.",
     "q": "Read these alongside Joshua 8 — what do you notice about how quickly and fully God restores Joshua and Israel to obedience and victory after Achan's sin was dealt with?"
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
     "th": "Joshua made sure the whole community — women, little ones, and strangers included — heard the whole law read aloud (Joshua 8:35).",
     "q": "Who in your life might benefit from you being more deliberate about passing on what you know of God's word, rather than assuming they'll pick it up eventually?"
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
     "th": "After confession and consequence, the LORD told Joshua plainly, \"Fear not, neither be thou dismayed\" (Joshua 8:1).",
     "q": "Ask the Spirit whether there is a past failure you are still carrying shame over that God has already moved past."
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
     "th": "\"Fear not, neither be thou dismayed... See, I have given into thy hand the king of Ai\" (Joshua 8:1).",
     "q": "Thank God for a specific time he restored you to confidence and fruitfulness after a failure or setback."
    }
   ]
  }
 ]
},
// Day 453
{
 "ref": "Luke 21",
 "tag": "New Testament",
 "api": "luke+21",
 "sum": [
  "Jesus watches a poor widow cast two mites into the temple treasury and declares she \"hath cast in more than they all,\" giving \"all the living that she had\" out of her poverty, unlike the rich who gave only \"of their abundance.\"",
  "Asked about the temple's destruction, Jesus foretells wars, earthquakes, famines, and persecution before the end, along with false christs, yet tells his followers \"in your patience possess ye your souls,\" for not a hair of their head shall perish.",
  "He describes Jerusalem's coming destruction and the \"times of the Gentiles\" being fulfilled, and signs in the sun, moon, and stars, followed by the Son of man coming \"in a cloud with power and great glory.\"",
  "He tells the parable of the fig tree putting forth leaves as a sign the kingdom is near, warns against hearts being \"overcharged with surfeiting, and drunkenness, and cares of this life,\" and calls his followers to \"watch ye therefore, and pray always.\""
 ],
 "nug": [
  {
   "h": "She hath cast in more than they all",
   "b": "\"Of a truth I say unto you, that this poor widow hath cast in more than they all: for all these have of their abundance cast in... but she of her penury hath cast in all the living that she had\" (Luke 21:3-4). Jesus measures giving by what it costs the giver, not by its size."
  },
  {
   "h": "In your patience possess ye your souls",
   "b": "\"...but there shall not an hair of your head perish. In your patience possess ye your souls\" (Luke 21:18-19). Endurance through hardship is itself the way believers keep hold of their own souls."
  },
  {
   "h": "The Son of man coming in a cloud",
   "b": "\"And then shall they see the Son of man coming in a cloud with power and great glory\" (Luke 21:27). The same Jesus who wept over Jerusalem will one day return visibly and powerfully."
  },
  {
   "h": "Watch ye therefore, and pray always",
   "b": "\"Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things... and to stand before the Son of man\" (Luke 21:36). Jesus's practical instruction for uncertain times is steady watchfulness and prayer."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Corinthians 8:1-3 · Matthew 6:19-21 · 1 Peter 4:7",
   "qs": [
    {
     "th": "Paul commends the Macedonian churches for giving beyond their means, Jesus teaches about laying up treasure in heaven rather than on earth, and Peter urges sober-mindedness and prayer as the end of all things draws near.",
     "q": "Read these alongside Luke 21 — how do they shape what you notice about the widow's gift and Jesus's call to watchfulness?"
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
     "th": "The widow gave \"all the living that she had,\" while the rich gave only \"of their abundance\" (Luke 21:4).",
     "q": "Does your own giving — of money, time, or attention — tend to come from your abundance or genuinely cost you something?"
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
     "th": "Jesus warned against hearts \"overcharged with surfeiting, and drunkenness, and cares of this life\" (Luke 21:34).",
     "q": "Ask the Spirit whether anything is currently overcharging your heart and crowding out watchfulness and prayer."
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
     "th": "\"Watch ye therefore, and pray always\" (Luke 21:36).",
     "q": "Pray for someone you know who is currently going through hardship or persecution for their faith, that they would keep patience and hope."
    }
   ]
  }
 ]
},
// Day 454
{
 "ref": "Psalm 128",
 "tag": "Psalms & Wisdom",
 "api": "psalms+128",
 "sum": [
  "A Song of Ascents opens with a blessing on the one who fears the LORD: \"Blessed is every one that feareth the LORD; that walketh in his ways,\" who shall eat the labour of his hands and be happy and well.",
  "His wife is pictured \"as a fruitful vine by the sides of thine house,\" and his children \"like olive plants round about thy table,\" full of life and promise.",
  "The psalm declares, \"Behold, that thus shall the man be blessed that feareth the LORD,\" tying this domestic flourishing directly to reverence for God.",
  "The closing benediction extends the blessing outward — \"The LORD shall bless thee out of Zion: and thou shalt see the good of Jerusalem all the days of thy life\" — and forward, to seeing \"thy children's children, and peace upon Israel.\""
 ],
 "nug": [
  {
   "h": "Blessed is every one that feareth the LORD",
   "b": "\"Blessed is every one that feareth the LORD; that walketh in his ways\" (Psalm 128:1). The psalm's blessing is rooted in reverence and obedience, not in circumstance."
  },
  {
   "h": "Thou shalt eat the labour of thine hands",
   "b": "\"For thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee\" (Psalm 128:2). Simple, honest, God-honoured work is presented as itself a source of happiness."
  },
  {
   "h": "A fruitful vine, olive plants round the table",
   "b": "\"Thy wife shall be as a fruitful vine by the sides of thine house: thy children like olive plants round about thy table\" (Psalm 128:3). Family life is pictured with images of growth, abundance, and shared meals."
  },
  {
   "h": "Thy children's children, and peace",
   "b": "\"...yea, thou shalt see thy children's children, and peace upon Israel\" (Psalm 128:6). The psalm's final hope reaches beyond one lifetime into future generations and a peace bigger than any one household."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 1:1-3 · Deuteronomy 6:1-2 · 3 John 1:4",
   "qs": [
    {
     "th": "Psalm 1 pictures the blessed person as a tree planted by rivers of water, Deuteronomy ties long life and blessing to fearing the LORD and keeping his commandments, and John writes that he has no greater joy than to hear that his children walk in truth.",
     "q": "Read these alongside Psalm 128 — how do they shape what you notice about the connection between reverence for God and a flourishing, generational life?"
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
     "th": "\"Blessed is every one that feareth the LORD; that walketh in his ways\" (Psalm 128:1).",
     "q": "What would it look like this week to let a simple, steady reverence for God shape the way you go about your ordinary work and home life?"
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
     "th": "\"...thou shalt see thy children's children, and peace upon Israel\" (Psalm 128:6).",
     "q": "Ask the Spirit to give you a longer view of your life — a sense of what you hope will still be bearing fruit after you are gone."
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
     "th": "\"The LORD shall bless thee out of Zion: and thou shalt see the good of Jerusalem all the days of thy life\" (Psalm 128:5).",
     "q": "Praise God simply for his goodness toward your household, naming specific blessings as you pray."
    }
   ]
  }
 ]
},
// Day 455
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "The LORD shall bless thee out of Zion",
   "b": "\"The LORD shall bless thee out of Zion: and thou shalt see the good of Jerusalem all the days of thy life\" (Psalm 128:5). This week's arc ran from the fall of Jericho through Achan's sin and restoration to victory at Ai, and closes on this quiet blessing over ordinary, faithful life."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the fall of Jericho (Joshua 6), Achan's sin and its consequences (Joshua 7), the victory at Ai and the reading of the law at Mount Ebal (Joshua 8), the widow's mite and Jesus's teaching on the end times (Luke 21), and two Songs of Ascents (Psalm 127 and 128).",
     "q": "Which moment challenged you more this week — Achan's confession, \"I saw... I coveted, and took them\" (Joshua 7:21), or Jesus's word about the widow, \"she hath cast in more than they all\" (Luke 21:3)? Why?"
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
     "th": "\"The LORD shall bless thee out of Zion\" (Psalm 128:5).",
     "q": "Sit quietly for a moment, and simply receive that blessing before you move on."
    }
   ]
  }
 ]
},
// Day 456
{
 "ref": "Joshua 9",
 "tag": "Old Testament",
 "api": "joshua+9",
 "sum": [
  "Hearing of Israel's victories, many kings gather together to fight against Israel, but the inhabitants of Gibeon instead resort to deception.",
  "Dressed in old, worn-out clothes and carrying dry, mouldy bread, and claiming to be ambassadors from \"a far country,\" the Gibeonites trick Joshua and the princes of Israel into making a league of peace with them; the chapter notes plainly that \"the men of Israel... asked not counsel at the mouth of the LORD.\"",
  "Three days later Israel discovers the Gibeonites are actually near neighbours, yet because of the oath sworn \"by the LORD God of Israel,\" the congregation will not attack them.",
  "The princes instead make the Gibeonites \"hewers of wood and drawers of water\" for the congregation and for the altar of the LORD, a role they keep from that day forward."
 ],
 "nug": [
  {
   "h": "They asked not counsel at the mouth of the LORD",
   "b": "\"And the men took of their victuals, and asked not counsel at the mouth of the LORD\" (Joshua 9:14). Israel's leaders are deceived not because the trick was flawless, but because they skipped seeking God first."
  },
  {
   "h": "We have sworn unto them by the LORD",
   "b": "\"...we have sworn unto them by the LORD God of Israel: now therefore we may not touch them\" (Joshua 9:19). An oath made even under deception is still treated as binding because it was made in God's name."
  },
  {
   "h": "Hewers of wood and drawers of water",
   "b": "The princes make the Gibeonites \"hewers of wood and drawers of water for the congregation, and for the altar of the LORD\" (Joshua 9:27). Deception has consequences, but the Gibeonites are drawn into ongoing service near Israel's worship, not destroyed."
  },
  {
   "h": "Old sacks, and wine bottles old and rent",
   "b": "The Gibeonites present themselves with \"old sacks upon their asses, and wine bottles, old, and rent, and bound up\" (Joshua 9:4), a carefully staged appearance designed purely to deceive."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Proverbs 3:5-6 · James 1:5 · Genesis 27:1-29",
   "qs": [
    {
     "th": "Proverbs calls us to trust the LORD and not lean on our own understanding, James promises wisdom to those who simply ask God for it, and Genesis records another story of deception achieving through trickery what patience and honesty could have received rightly.",
     "q": "Read these alongside Joshua 9 — what do you notice about the cost of making decisions quickly, without first asking God?"
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
     "th": "Israel's leaders were deceived because they \"asked not counsel at the mouth of the LORD\" before agreeing to the treaty (Joshua 9:14).",
     "q": "Is there a decision in front of you right now where you have been moving on appearances or pressure rather than pausing to genuinely seek God first?"
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
     "th": "The Gibeonites' appearance was convincing enough to fool Israel's leaders without a moment of prayerful discernment (Joshua 9:14).",
     "q": "Ask the Spirit to grow in you the habit of pausing to seek him before you commit to something that looks straightforward."
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
     "th": "\"...the men took of their victuals, and asked not counsel at the mouth of the LORD\" (Joshua 9:14).",
     "q": "Confess to God any recent decision where you moved ahead without truly seeking his guidance, and ask him to help you slow down next time."
    }
   ]
  }
 ]
},
// Day 457
{
 "ref": "Joshua 10",
 "tag": "Old Testament",
 "api": "joshua+10",
 "sum": [
  "Five Amorite kings, alarmed that Gibeon has made peace with Israel, join forces to attack Gibeon for its treachery, and Gibeon appeals to Joshua for help.",
  "Israel marches all night and falls on the besieging armies, the LORD casting down great hailstones on the fleeing enemy, so that \"they were more which died with hailstones than they whom the children of Israel slew with the sword.\"",
  "In the chapter's most famous moment, Joshua commands in the sight of Israel, \"Sun, stand thou still upon Gibeon; and thou, Moon, in the valley of Ajalon,\" and the sun stood still and the moon stayed until the nation was avenged, for \"there was no day like that before it or after it, that the LORD hearkened unto the voice of a man.\"",
  "The five kings are found hiding in a cave, brought out, their necks trodden on by Israel's captains, then slain and hanged, and the chapter closes with a rapid summary of further southern cities conquered."
 ],
 "nug": [
  {
   "h": "Sun, stand thou still",
   "b": "\"Sun, stand thou still upon Gibeon; and thou, Moon, in the valley of Ajalon\" (Joshua 10:12). Joshua speaks with astonishing boldness, and the text says the sun and moon obeyed him."
  },
  {
   "h": "The LORD hearkened unto the voice of a man",
   "b": "\"...there was no day like that before it or after it, that the LORD hearkened unto the voice of a man: for the LORD fought for Israel\" (Joshua 10:14). The miracle is credited to God fighting for Israel in response to Joshua's prayer, not to Joshua's own power."
  },
  {
   "h": "More died by hailstones than by the sword",
   "b": "\"...they were more which died with hailstones than they whom the children of Israel slew with the sword\" (Joshua 10:11). God's own intervention accomplishes more of the victory than Israel's weapons do."
  },
  {
   "h": "Be strong and of good courage",
   "b": "Joshua tells his captains, standing with their feet on the necks of the defeated kings, \"Fear not, nor be dismayed, be strong and of good courage: for thus shall the LORD do to all your enemies\" (Joshua 10:25). Past victory becomes the basis for future confidence."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 14:14 · Habakkuk 3:11 · James 5:16-18",
   "qs": [
    {
     "th": "Exodus records the LORD fighting for Israel at the Red Sea, Habakkuk poetically recalls the sun and moon standing still, and James points to Elijah's prayer stopping and restarting the rain as an example of what fervent prayer can accomplish.",
     "q": "Read these alongside Joshua 10 — how do they shape what you believe is possible when God's people call on him in confident prayer?"
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
     "th": "Joshua told his captains, having just seen God intervene dramatically, \"Fear not, nor be dismayed, be strong and of good courage\" (Joshua 10:25).",
     "q": "What past evidence of God's faithfulness could you draw on right now to face something that currently makes you afraid?"
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
     "th": "\"...the LORD hearkened unto the voice of a man: for the LORD fought for Israel\" (Joshua 10:14).",
     "q": "Ask the Spirit to grow in you a bolder confidence in prayer, trusting that God is willing to act powerfully for his people."
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
     "th": "\"...there was no day like that before it or after it, that the LORD hearkened unto the voice of a man\" (Joshua 10:14).",
     "q": "Praise God for his extraordinary power over creation itself, and for his willingness to fight for his people."
    }
   ]
  }
 ]
},
// Day 458
{
 "ref": "Psalm 129",
 "tag": "Psalms & Wisdom",
 "api": "psalms+129",
 "sum": [
  "A Song of Ascents opens with a lament repeated for emphasis: \"Many a time have they afflicted me from my youth, may Israel now say... yet they have not prevailed against me.\"",
  "The affliction is pictured vividly as plowers working the psalmist's back: \"the plowers plowed upon my back: they made long their furrows.\"",
  "Despite this long history of suffering, the psalmist declares, \"the LORD is righteous: he hath cut asunder the cords of the wicked,\" crediting God with breaking the grip of the oppressor.",
  "The psalm closes with a wish that those who hate Zion wither like grass on a housetop, never gathered into a harvest, so that no passerby ever blesses them in the LORD's name."
 ],
 "nug": [
  {
   "h": "Yet they have not prevailed",
   "b": "\"Many a time have they afflicted me from my youth... yet they have not prevailed against me\" (Psalm 129:1-2). A long history of affliction is met with an equally long history of survival."
  },
  {
   "h": "The plowers plowed upon my back",
   "b": "\"The plowers plowed upon my back: they made long their furrows\" (Psalm 129:3). Suffering is described in the most physical, visceral terms the psalmist can find."
  },
  {
   "h": "The LORD is righteous",
   "b": "\"The LORD is righteous: he hath cut asunder the cords of the wicked\" (Psalm 129:4). Deliverance is credited to God's own righteous character acting on behalf of the afflicted."
  },
  {
   "h": "As the grass upon the housetops",
   "b": "The psalmist wishes Zion's haters be \"as the grass upon the housetops, which withereth afore it groweth up\" (Psalm 129:6), never gathered into a harvest at all — a picture of fruitlessness rather than momentary loss."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Corinthians 4:8-9 · Psalm 34:19 · Romans 8:37",
   "qs": [
    {
     "th": "Paul describes being troubled on every side but not distressed, the psalmist says the afflictions of the righteous are many but the LORD delivers out of them all, and Paul later declares believers more than conquerors through Christ.",
     "q": "Read these alongside Psalm 129 — how do they encourage you when you look back on a long season of difficulty you have come through?"
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
     "th": "\"Many a time have they afflicted me from my youth... yet they have not prevailed against me\" (Psalm 129:1-2).",
     "q": "Can you name a long-running difficulty in your own life where you can honestly say, looking back, that it has not prevailed against you?"
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
     "th": "\"The LORD is righteous: he hath cut asunder the cords of the wicked\" (Psalm 129:4).",
     "q": "Ask the Spirit to show you where he has already been quietly cutting cords of oppression or bondage in your life."
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
     "th": "\"...yet they have not prevailed against me\" (Psalm 129:2).",
     "q": "Thank God for a specific hardship that has not been allowed to prevail against you, naming it plainly as you pray."
    }
   ]
  }
 ]
},
// Day 459
{
 "ref": "Joshua 11",
 "tag": "Old Testament",
 "api": "joshua+11",
 "sum": [
  "A great northern coalition of kings, \"even as the sand that is upon the sea shore in multitude,\" gathers with horses and chariots at the waters of Merom to fight Israel.",
  "The LORD tells Joshua not to be afraid, promising to deliver them all slain before Israel by the following day; Israel falls on them suddenly and chases the defeated armies.",
  "As the LORD commanded, Israel houghs the enemy's horses and burns their chariots with fire, refusing to build Israel's own strength on captured military hardware.",
  "The chapter closes with a summary — Joshua took the whole land, \"according to all that the LORD said unto Moses,\" and gave it for an inheritance to Israel by their tribal divisions, and \"the land rested from war.\""
 ],
 "nug": [
  {
   "h": "As the sand upon the sea shore",
   "b": "The gathered kings and their armies are described as numerous \"as the sand that is upon the sea shore in multitude, with horses and chariots very many\" (Joshua 11:4). The size of the threat is deliberately overwhelming."
  },
  {
   "h": "Be not afraid because of them",
   "b": "The LORD tells Joshua, \"Be not afraid because of them: for to morrow about this time will I deliver them up all slain before Israel\" (Joshua 11:6). God speaks a specific promise into a specific, named fear."
  },
  {
   "h": "According to all that the LORD said unto Moses",
   "b": "\"So Joshua took the whole land, according to all that the LORD said unto Moses... and Joshua gave it for an inheritance unto Israel\" (Joshua 11:23). The conquest is presented as the fulfilment of a promise made a generation earlier."
  },
  {
   "h": "The land rested from war",
   "b": "\"And the land rested from war\" (Joshua 11:23). After chapters of continuous battle, the narrative pauses on this simple statement of peace."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 20:1 · Psalm 20:7 · Numbers 13:30-31",
   "qs": [
    {
     "th": "Deuteronomy tells Israel not to be afraid of horses and chariots because the LORD their God is with them, the psalmist declares trust in the name of the LORD over chariots and horses, and Numbers records the earlier generation's fear at a similarly overwhelming report.",
     "q": "Read these alongside Joshua 11 — what has changed between the fearful spies of Numbers and the confident conquest here, and what does that suggest about facing an intimidating situation in your own life?"
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
     "th": "The LORD spoke directly to Joshua's fear: \"Be not afraid because of them\" (Joshua 11:6), naming the very thing that could have paralysed him.",
     "q": "What specific fear do you need to bring honestly to God right now, rather than managing it alone?"
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
     "th": "\"And the land rested from war\" (Joshua 11:23), after a long and demanding campaign.",
     "q": "Ask the Spirit whether there is a season of striving in your life where he is inviting you into rest."
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
     "th": "\"And the land rested from war\" (Joshua 11:23).",
     "q": "Sit quietly for a few minutes and let yourself simply rest in God's presence, without asking him for anything."
    }
   ]
  }
 ]
},
// Day 460
{
 "ref": "Luke 22",
 "tag": "New Testament",
 "api": "luke+22",
 "sum": [
  "The chief priests seek a way to kill Jesus, and Satan enters Judas, who agrees to betray him; Jesus sends Peter and John to prepare the Passover, and at the table institutes the Lord's Supper, saying of the bread, \"This is my body which is given for you: this do in remembrance of me,\" and of the cup, \"This cup is the new testament in my blood, which is shed for you.\"",
  "Jesus predicts his betrayal, and the disciples fall into a dispute about who is greatest among them, with Jesus teaching that the greatest must become \"as he that doth serve\"; he also foretells Peter's denial, \"before the cock crow, thou shalt thrice deny that thou knowest me.\"",
  "In Gethsemane, in agony, Jesus prays, \"Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done,\" sweating \"as it were great drops of blood falling down to the ground.\"",
  "Judas betrays him with a kiss, Jesus is arrested, and Peter denies him three times before the cock crows, at which point \"the Lord turned, and looked upon Peter,\" who goes out and weeps bitterly; Jesus is then mocked and beaten before the council, who ask if he is the Son of God, and he answers, \"Ye say that I am.\""
 ],
 "nug": [
  {
   "h": "This is my body, given for you",
   "b": "\"This is my body which is given for you: this do in remembrance of me\" (Luke 22:19). Jesus reframes the Passover meal around his own coming sacrifice, to be remembered by his followers ever after."
  },
  {
   "h": "The greatest as he that doth serve",
   "b": "\"...he that is greatest among you, let him be as the younger; and he that is chief, as he that doth serve\" (Luke 22:26). Jesus redefines greatness against the disciples' own instinct to compete for status."
  },
  {
   "h": "Not my will, but thine, be done",
   "b": "\"Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done\" (Luke 22:42). Jesus's own prayer in his deepest anguish becomes the pattern of surrendered obedience for every believer after him."
  },
  {
   "h": "The Lord turned, and looked upon Peter",
   "b": "\"And the Lord turned, and looked upon Peter... And Peter went out, and wept bitterly\" (Luke 22:61-62). A single look, without a word spoken, breaks Peter open to genuine repentance."
  },
  {
   "h": "Ye say that I am",
   "b": "Asked plainly by the council whether he is the Son of God, Jesus answers simply, \"Ye say that I am\" (Luke 22:70). He does not retreat from the claim even as it seals his condemnation."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 12:13-14 · Isaiah 53:5 · Philippians 2:5-8",
   "qs": [
    {
     "th": "Exodus establishes the original Passover that Jesus reshapes around himself, Isaiah prophesies a suffering servant wounded for our transgressions, and Philippians describes Christ humbling himself and becoming obedient even to death.",
     "q": "Read these alongside Luke 22 — how do they deepen what you notice about the meaning behind the bread, the cup, and Jesus's prayer in Gethsemane?"
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
     "th": "Peter denied Jesus three times, then was met not with a rebuke but with a look that broke him to tears (Luke 22:61-62).",
     "q": "Is there a failure in your own life you are still hiding from, rather than letting Jesus's look of love bring you to honest repentance?"
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
     "th": "Jesus prayed in agony, \"not my will, but thine, be done\" (Luke 22:42), before anything was resolved.",
     "q": "Ask the Spirit to help you bring an area where your will and God's may be in tension honestly before him, even without a resolution yet."
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
     "th": "\"Father, if thou be willing, remove this cup from me: nevertheless not my will, but thine, be done\" (Luke 22:42).",
     "q": "Pray for someone you know who is currently in agony over a decision or a burden, asking God to give them the same surrendered trust."
    }
   ]
  }
 ]
},
// Day 461
{
 "ref": "Psalm 131",
 "tag": "Psalms & Wisdom",
 "api": "psalms+131",
 "sum": [
  "A short psalm of David expresses deep humility: \"LORD, my heart is not haughty, nor mine eyes lofty: neither do I exercise myself in great matters, or in things too high for me.\"",
  "Rather than striving after things beyond him, David describes a settled, quiet contentment: \"Surely I have behaved and quieted myself, as a child that is weaned of his mother: my soul is even as a weaned child.\"",
  "This image of a weaned child suggests a deeper peace than mere neediness satisfied — a soul no longer restless for what it cannot have.",
  "The psalm closes by turning this personal posture outward into a call for the whole nation: \"let Israel hope in the LORD from henceforth and for ever.\""
 ],
 "nug": [
  {
   "h": "My heart is not haughty",
   "b": "\"LORD, my heart is not haughty, nor mine eyes lofty: neither do I exercise myself in great matters, or in things too high for me\" (Psalm 131:1). David names both pride of heart and restless ambition as things he has deliberately set aside."
  },
  {
   "h": "As a weaned child",
   "b": "\"Surely I have behaved and quieted myself, as a child that is weaned of his mother: my soul is even as a weaned child\" (Psalm 131:2). The image is not of a needy infant but of a child who has already been satisfied and is simply at rest."
  },
  {
   "h": "Let Israel hope in the LORD",
   "b": "\"Let Israel hope in the LORD from henceforth and for ever\" (Psalm 131:3). David's personal quietness becomes an invitation for the whole community to the same settled hope."
  },
  {
   "h": "Neither do I exercise myself in things too high",
   "b": "\"...neither do I exercise myself in great matters, or in things too high for me\" (Psalm 131:1). David names a deliberate refusal to grasp after what is beyond his place, rather than an inability to reach it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 18:3-4 · Philippians 4:11-12 · 1 Peter 5:6",
   "qs": [
    {
     "th": "Jesus says we must become as little children to enter the kingdom of heaven, Paul describes learning to be content in whatever state he is in, and Peter calls believers to humble themselves under God's mighty hand.",
     "q": "Read these alongside Psalm 131 — what do they add to your understanding of the quiet, weaned-child contentment David describes?"
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
     "th": "David says he does not exercise himself \"in great matters, or in things too high for\" him (Psalm 131:1).",
     "q": "Is there something you are currently striving anxiously after that this psalm would invite you to release into simple trust instead?"
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
     "th": "\"...my soul is even as a weaned child\" (Psalm 131:2).",
     "q": "Ask the Spirit to quiet any restlessness in you right now, and to grow in you that same settled contentment."
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
     "th": "\"Let Israel hope in the LORD from henceforth and for ever\" (Psalm 131:3).",
     "q": "Spend a few minutes simply praising God for being trustworthy enough to rest your hope in, without asking him for anything else."
    }
   ]
  }
 ]
},
// Day 462
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Let Israel hope in the LORD",
   "b": "\"Let Israel hope in the LORD from henceforth and for ever\" (Psalm 131:3). This week ran from the Gibeonite deception and the sun standing still, through the land's rest from war, to Gethsemane and Peter's bitter tears, closing on this quiet call to settled hope."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the Gibeonites' deception (Joshua 9), the sun standing still over Gibeon (Joshua 10), the northern coalition's defeat and the land's rest from war (Joshua 11), the Lord's Supper and Gethsemane (Luke 22), and two Songs of Ascents (Psalm 129 and 131).",
     "q": "Which moment challenged you more this week — Joshua's bold prayer, \"Sun, stand thou still upon Gibeon\" (Joshua 10:12), or Jesus's surrendered prayer in Gethsemane, \"not my will, but thine, be done\" (Luke 22:42)? Why?"
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
     "th": "\"Let Israel hope in the LORD from henceforth and for ever\" (Psalm 131:3).",
     "q": "Sit quietly for a moment, and let your soul settle into that hope before you move on."
    }
   ]
  }
 ]
},
// Day 463
{
 "ref": "Joshua 12",
 "tag": "Old Testament",
 "api": "joshua+12",
 "sum": [
  "This chapter is a record of completed conquest, opening with the two kings east of the Jordan whom Moses and Israel struck: Sihon king of the Amorites, \"who dwelt in Heshbon,\" and Og king of Bashan, \"which was of the remnant of the giants.\"",
  "Their territory, from the river Arnon to mount Hermon, is briefly retraced as the land already given as an inheritance to Reuben, Gad, and the half-tribe of Manasseh.",
  "The chapter then turns west of the Jordan, to the kings whom Joshua and the children of Israel struck, beginning with the king of Jericho and the king of Ai, and continuing city by city through the land.",
  "It closes with a simple tally, \"all the kings thirty and one,\" a deliberate marker that a whole phase of the conquest is now finished and complete."
 ],
 "nug": [
  {
   "h": "The last of the giants",
   "b": "Og king of Bashan is remembered as one \"which was of the remnant of the giants\" (Joshua 12:4). A whole line of formidable enemies has now come to its end before the LORD."
  },
  {
   "h": "Sihon of Heshbon",
   "b": "\"Sihon king of the Amorites, who dwelt in Heshbon\" (Joshua 12:2) is named first among the defeated kings, the record reaching back to victories already told in Numbers and Deuteronomy."
  },
  {
   "h": "The king of Jericho, one",
   "b": "\"The king of Jericho, one; the king of Ai, which is beside Bethel, one\" (Joshua 12:9). The two most vividly told battles of the book are reduced here to a bare, matter-of-fact line in a list."
  },
  {
   "h": "All the kings thirty and one",
   "b": "The chapter's closing count, \"all the kings thirty and one\" (Joshua 12:24), turns a long, plain list into a deliberate marker: this stage of the conquest is finished."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 21:21-25 · Deuteronomy 3:8-11 · Psalm 136:17-22",
   "qs": [
    {
     "th": "Numbers and Deuteronomy tell the original battles against Sihon and Og, and Psalm 136 turns those same victories into a refrain of thanksgiving, \"for his mercy endureth for ever.\"",
     "q": "Read these alongside Joshua 12 — how does seeing a bare list of victories become, elsewhere, a song of thanksgiving shape the way you look back over your own past battles?"
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
     "th": "This whole chapter is simply a record of what God had already brought to completion.",
     "q": "What is one chapter of your own life you could honestly close the book on today, trusting that what God began there, he finished?"
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
     "th": "The list moves from kings \"on the other side Jordan\" to kings struck \"on this side Jordan on the west\" — a whole campaign, now behind Israel.",
     "q": "Ask the Spirit to bring to mind something he has already brought to completion in your life, so you can thank him for it rather than still striving over it."
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
     "th": "\"All the kings thirty and one\" (Joshua 12:24) closes a long record of victories given by the LORD.",
     "q": "Thank God specifically for battles in your own life that are now genuinely over and done with."
    }
   ]
  }
 ]
},
// Day 464
{
 "ref": "Joshua 13",
 "tag": "Old Testament",
 "api": "joshua+13",
 "sum": [
  "Joshua is now old, \"stricken in years,\" and the LORD tells him plainly, \"there remaineth yet very much land to be possessed,\" listing regions and peoples not yet driven out.",
  "Even so, the LORD instructs that the land be divided by lot for an inheritance among the nine and a half remaining tribes, since he himself will drive out the remaining inhabitants before Israel.",
  "The chapter then details the inheritance already given by Moses east of the Jordan to Reuben, Gad, and the half-tribe of Manasseh, recalling their defeat of Sihon and Og and the destruction of the soothsayer Balaam.",
  "It closes noting that the tribe of Levi received no inheritance of land among their brethren, \"for the sacrifices of the LORD God of Israel made by fire are their inheritance,\" as Moses had said."
 ],
 "nug": [
  {
   "h": "Old, and much land remains",
   "b": "\"Now Joshua was old and stricken in years; and the LORD said unto him, Thou art old and stricken in years, and there remaineth yet very much land to be possessed\" (Joshua 13:1). Unfinished work is named honestly rather than hidden."
  },
  {
   "h": "The LORD himself will drive them out",
   "b": "The land is to be divided by inheritance even before it is fully taken, because the LORD promises he himself will drive out its remaining inhabitants before Israel — the conquest was never Israel's strength alone."
  },
  {
   "h": "Balaam the soothsayer slain",
   "b": "Among those Israel slew east of Jordan was \"Balaam also the son of Beor, the soothsayer\" (Joshua 13:22), a final note on the prophet hired to curse Israel but who ended by blessing it."
  },
  {
   "h": "The Lord God of Israel is their inheritance",
   "b": "\"The sacrifices of the LORD God of Israel made by fire are their inheritance, as he said unto them\" (Joshua 13:14). Levi receives no land, because their portion is the LORD himself."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 32:1-5 · Deuteronomy 31:6 · Numbers 18:20",
   "qs": [
    {
     "th": "Numbers 32 records Reuben and Gad first requesting this land, Deuteronomy 31 has Moses charging Israel to be strong because the LORD goes with them, and Numbers 18 first states that the LORD himself is the priests' portion.",
     "q": "Read these together — how do they help you hold in view both the land still to be possessed and the LORD who promises to give it?"
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
     "th": "Even in old age, with much land still unpossessed, Joshua is given a clear task to finish, not a reason to stop.",
     "q": "Is there unfinished work in your own life that you have quietly stopped naming as unfinished — what would it look like to name it honestly before God, as this chapter does?"
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
     "th": "Levi's inheritance was the LORD himself rather than a plot of land.",
     "q": "Ask the Spirit whether you are looking to something other than God himself as your true portion, and what it might mean to let him be enough."
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
     "th": "\"There remaineth yet very much land to be possessed\" (Joshua 13:1).",
     "q": "Pray for an area of your life, family, or church where much still remains unfinished, asking God to go before you in it as he promised to go before Israel."
    }
   ]
  }
 ]
},
// Day 465
{
 "ref": "Psalm 132",
 "tag": "Psalms & Wisdom",
 "api": "psalms+132",
 "sum": [
  "This Song of Ascents recalls David's oath to find a resting place for the LORD: \"Surely I will not come into the tabernacle of my house, nor go up into my bed... until I find out a place for the LORD, an habitation for the mighty God of Jacob.\"",
  "It recounts Israel finding the ark and bringing it up with the cry, \"Arise, O LORD, into thy rest; thou, and the ark of thy strength.\"",
  "In return, the LORD swears his own oath to David, that his throne would be established, \"Of the fruit of thy body will I set upon thy throne,\" a promise conditioned on his children keeping the covenant.",
  "The psalm closes on the LORD's chosen dwelling in Zion, \"This is my rest for ever: here will I dwell; for I have desired it,\" promising to clothe her priests with salvation and make David's horn to bud."
 ],
 "nug": [
  {
   "h": "David's oath to find God a resting place",
   "b": "\"Surely I will not come into the tabernacle of my house, nor go up into my bed... until I find out a place for the LORD\" (Psalm 132:3-5). David's devotion is described as a costly, self-denying vow."
  },
  {
   "h": "Arise, O LORD, into thy rest",
   "b": "\"Arise, O LORD, into thy rest; thou, and the ark of thy strength\" (Psalm 132:8). The ark's homecoming is celebrated as the LORD himself coming to rest among his people."
  },
  {
   "h": "The LORD's oath to David",
   "b": "\"The LORD hath sworn in truth unto David; he will not turn from it; Of the fruit of thy body will I set upon thy throne\" (Psalm 132:11). God's promise answers David's own vow, oath for oath."
  },
  {
   "h": "This is my rest for ever",
   "b": "\"This is my rest for ever: here will I dwell; for I have desired it\" (Psalm 132:14). Zion is chosen not by chance but by the LORD's own settled desire."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Samuel 7:12-16 · 1 Chronicles 15:1-3 · Hebrews 4:9-10",
   "qs": [
    {
     "th": "2 Samuel records the LORD's covenant promise to David directly, 1 Chronicles tells the actual bringing up of the ark, and Hebrews speaks of a greater \"rest\" that still remains for God's people.",
     "q": "Read these alongside Psalm 132 — how does David's longing to give God a resting place point forward to the rest God ultimately gives his people?"
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
     "th": "David denied himself comfort and rest until he had found a place for God.",
     "q": "What would it look like to give God's presence a settled, prioritised place in your own daily life, rather than fitting him in around everything else?"
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
     "th": "\"This is my rest for ever: here will I dwell; for I have desired it\" (Psalm 132:14).",
     "q": "Ask the Spirit to show you what it would mean, practically, to let him make his home more fully in your life."
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
     "th": "\"Arise, O LORD, into thy rest; thou, and the ark of thy strength\" (Psalm 132:8).",
     "q": "Praise God simply for desiring to dwell among his people, and for making his home with you."
    }
   ]
  }
 ]
},
// Day 466
{
 "ref": "Joshua 14",
 "tag": "Old Testament",
 "api": "joshua+14",
 "sum": [
  "The division of the land west of Jordan by lot begins, before Eleazar the priest, Joshua, and the heads of the tribal fathers.",
  "Caleb comes to Joshua at Gilgal and recalls Moses' promise to him forty-five years earlier, after he and Joshua alone brought back a good report of the land as spies, while the other spies \"made the heart of the people melt.\"",
  "Now eighty-five years old, Caleb declares, \"as yet I am as strong this day as I was in the day that Moses sent me,\" and asks for the very mountain where the giant Anakims lived, trusting, \"if so be the LORD will be with me, then I shall be able to drive them out.\"",
  "Joshua blesses Caleb and gives him Hebron for an inheritance, \"because that he wholly followed the LORD God of Israel.\""
 ],
 "nug": [
  {
   "h": "As strong this day",
   "b": "\"As yet I am as strong this day as I was in the day that Moses sent me\" (Joshua 14:11). At eighty-five, Caleb's faith and strength have not faded through decades of waiting."
  },
  {
   "h": "They made the heart of the people melt",
   "b": "Caleb recalls that while he and Joshua brought back a faithful report, the other spies \"made the heart of the people melt\" (Joshua 14:8) — a stark contrast between two responses to the same land."
  },
  {
   "h": "Give me this mountain",
   "b": "Caleb specifically asks for the mountain still held by the Anakims, saying, \"if so be the LORD will be with me, then I shall be able to drive them out, as the LORD said\" (Joshua 14:12). He asks for the hardest ground, not the easiest."
  },
  {
   "h": "He wholly followed the LORD",
   "b": "Joshua gives Caleb Hebron \"because that he wholly followed the LORD God of Israel\" (Joshua 14:14), the same commendation repeated of him throughout the story."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 14:6-9 · Numbers 14:24 · 2 Timothy 4:7",
   "qs": [
    {
     "th": "Numbers 14 records Caleb and Joshua's original good report and the LORD's promise that Caleb would inherit the land \"because he had another spirit with him,\" and Paul's closing words about finishing his course echo Caleb's undimmed faith across a lifetime.",
     "q": "Read these together — what do they show you about the kind of faith that stays consistent across decades rather than only in a single dramatic moment?"
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
     "th": "Caleb waited forty-five years for a promise, and asked for the hardest, not the safest, portion when it finally came.",
     "q": "Is there a promise or a calling you are still waiting on — and when it comes, will you be tempted to ask for the easy ground instead of the hard ground God actually has for you?"
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
     "th": "Caleb's confidence rested not in his own strength but in a promise: \"if so be the LORD will be with me\" (Joshua 14:12).",
     "q": "Ask the Spirit to show you where you have been leaning on your own strength rather than on his presence with you."
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
     "th": "\"He wholly followed the LORD God of Israel\" (Joshua 14:14) is said of Caleb three times across this story.",
     "q": "Sit quietly and listen for whether the Spirit is calling you toward a fuller, more wholehearted following of God in some area of your life."
    }
   ]
  }
 ]
},
// Day 467
{
 "ref": "Luke 23",
 "tag": "New Testament",
 "api": "luke+23",
 "sum": [
  "Jesus is brought before Pilate, who finds no fault in him and sends him to Herod, who mocks him and sends him back arrayed in a gorgeous robe; Pilate, though declaring, \"I find no fault in this man,\" yields to the crowd's demand and releases Barabbas instead, delivering Jesus to be crucified.",
  "On the way to Golgotha, Jesus tells the weeping women of Jerusalem to weep for themselves and their children instead; crucified between two thieves, he prays, \"Father, forgive them; for they know not what they do.\"",
  "One of the thieves mocks him while the other rebukes his fellow and asks Jesus to remember him, receiving the promise, \"To day shalt thou be with me in paradise.\"",
  "Darkness covers the land, the veil of the temple is torn in two, and Jesus cries with a loud voice, \"Father, into thy hands I commend my spirit,\" and dies; Joseph of Arimathaea lays his body in a new, unused tomb, and the women who had followed from Galilee prepare spices before resting on the sabbath \"according to the commandment.\""
 ],
 "nug": [
  {
   "h": "I find no fault in this man",
   "b": "Pilate declares three times in substance, \"I find no fault in this man\" (Luke 23:4), yet still hands Jesus over — a stark picture of injustice done knowingly."
  },
  {
   "h": "Father, forgive them",
   "b": "\"Then said Jesus, Father, forgive them; for they know not what they do\" (Luke 23:34). Even in the act of being crucified, Jesus prays forgiveness over those killing him."
  },
  {
   "h": "Today, in paradise",
   "b": "To the repentant thief's simple request, Jesus answers, \"Verily I say unto thee, To day shalt thou be with me in paradise\" (Luke 23:43) — salvation given with nothing left to offer but faith."
  },
  {
   "h": "Into thy hands I commend my spirit",
   "b": "\"And when Jesus had cried with a loud voice, he said, Father, into thy hands I commend my spirit: and having said thus, he gave up the ghost\" (Luke 23:46). Even death itself is entrusted to the Father."
  },
  {
   "h": "The veil was rent in twain",
   "b": "\"And the veil of the temple was rent in the midst\" (Luke 23:45), at the very moment of Jesus's death — the barrier between God and his people torn open."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 53:5-7 · Psalm 22:16-18 · Hebrews 10:19-20",
   "qs": [
    {
     "th": "Isaiah foretells a suffering servant \"brought as a lamb to the slaughter,\" Psalm 22 describes the crucifixion in striking detail centuries before it happened, and Hebrews explains that the torn veil now gives believers \"boldness to enter into the holiest.\"",
     "q": "Read these alongside Luke 23 — how does seeing the crucifixion foretold and then explained change the way you read this chapter?"
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
     "th": "The repentant thief had nothing to offer but an honest acknowledgment of his guilt and a request to be remembered.",
     "q": "Is there anything you are still trying to earn or prove before you come honestly to Jesus, when he asks only for exactly what the thief brought?"
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
     "th": "\"Father, forgive them; for they know not what they do\" (Luke 23:34).",
     "q": "Sit quietly with this prayer of Jesus, and ask the Spirit whether there is someone you need to forgive in the same spirit."
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
     "th": "Pilate said, \"I find no fault in this man,\" and delivered him to be crucified regardless (Luke 23:4, 24-25).",
     "q": "Confess to God any place where you already know what is right but have gone along with the crowd instead."
    }
   ]
  }
 ]
},
// Day 468
{
 "ref": "Psalm 133",
 "tag": "Psalms & Wisdom",
 "api": "psalms+133",
 "sum": [
  "This short, beloved Song of Ascents of David opens, \"Behold, how good and how pleasant it is for brethren to dwell together in unity!\"",
  "That unity is compared to \"the precious ointment upon the head, that ran down upon the beard, even Aaron's beard: that went down to the skirts of his garments.\"",
  "It is compared also to \"the dew of Hermon, and as the dew that descended upon the mountains of Zion,\" pictures of abundance flowing down from above.",
  "The psalm closes, \"for there the LORD commanded the blessing, even life for evermore.\""
 ],
 "nug": [
  {
   "h": "How good and how pleasant",
   "b": "\"Behold, how good and how pleasant it is for brethren to dwell together in unity!\" (Psalm 133:1). Unity among God's people is named outright as both good and pleasant."
  },
  {
   "h": "Like the precious ointment",
   "b": "\"It is like the precious ointment upon the head, that ran down upon the beard, even Aaron's beard\" (Psalm 133:2). Unity is pictured as abundant, overflowing, and consecrating, like the oil that set apart the priesthood."
  },
  {
   "h": "As the dew of Hermon",
   "b": "\"As the dew of Hermon, and as the dew that descended upon the mountains of Zion\" (Psalm 133:3). A second image of quiet, life-giving abundance, falling gently from above rather than forced."
  },
  {
   "h": "Life for evermore",
   "b": "\"For there the LORD commanded the blessing, even life for evermore\" (Psalm 133:3). Unity is not merely pleasant company — it is the very place where the LORD chooses to command his blessing."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "John 17:20-23 · Ephesians 4:3 · Acts 2:1-4",
   "qs": [
    {
     "th": "Jesus prays for his people's unity, Paul urges believers to keep \"the unity of the Spirit in the bond of peace,\" and Acts shows the Spirit poured out on a gathered, unified church.",
     "q": "Read these alongside Psalm 133 — how do they show unity as something the Spirit both commands and creates, rather than something believers simply manage to arrange?"
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
     "th": "\"Behold, how good and how pleasant it is for brethren to dwell together in unity!\" (Psalm 133:1).",
     "q": "Where in your own church, family, or friendships could you actively pursue this kind of unity this week, rather than simply hoping for it?"
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
     "th": "The psalm links unity directly to the place \"the LORD commanded the blessing\" (Psalm 133:3).",
     "q": "Ask the Spirit to show you if there is a broken or strained relationship where he wants you to be a peacemaker."
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
     "th": "\"For there the LORD commanded the blessing, even life for evermore\" (Psalm 133:3).",
     "q": "Thank God for specific people he has given you to walk with in genuine unity."
    }
   ]
  }
 ]
},
// Day 469
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "For there the LORD commanded the blessing",
   "b": "\"For there the LORD commanded the blessing, even life for evermore\" (Psalm 133:3). A week that carried both the weight of the cross and the quiet joy of unity and inheritance closes on this note of blessing and life."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the closing lists of conquest and the land still to be possessed (Joshua 12-13), Caleb's undimmed faith at eighty-five (Joshua 14), two Songs of Ascents on rest and unity (Psalm 132-133), and the crucifixion of Jesus (Luke 23), the week's central and most weighty event.",
     "q": "Which moment sits with you more this week — Caleb's confidence, \"as yet I am as strong this day as I was in the day that Moses sent me\" (Joshua 14:11), or Jesus's prayer from the cross, \"Father, forgive them; for they know not what they do\" (Luke 23:34)? Why?"
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
     "th": "\"For there the LORD commanded the blessing, even life for evermore\" (Psalm 133:3).",
     "q": "Sit quietly for a moment, and simply rest in that blessing before you move on."
    }
   ]
  }
 ]
},
// Day 470
{
 "ref": "Joshua 15",
 "tag": "Old Testament",
 "api": "joshua+15",
 "sum": [
  "This chapter gives the detailed boundary description of the territory allotted to the tribe of Judah, the largest of the allotments, running from the south border by the coast of Edom and the wilderness of Zin down to the Dead Sea and around to the Mediterranean.",
  "Within this account, Caleb's story continues: he drives out the three sons of Anak from Hebron, and offers his daughter Achsah in marriage to whoever takes Kirjathsepher (Debir), a challenge taken up by Othniel, Caleb's younger kinsman.",
  "Achsah persuades Caleb to give her also \"a blessing,\" asking for springs of water in addition to the south land she was given, and receives the upper and nether springs.",
  "The chapter closes noting honestly that Judah could not drive out the Jebusites from Jerusalem, \"but the Jebusites dwell with the children of Judah at Jerusalem unto this day.\""
 ],
 "nug": [
  {
   "h": "Caleb drives out the sons of Anak",
   "b": "\"And Caleb drove thence the three sons of Anak, Sheshai, and Ahiman, and Talmai, the children of Anak\" (Joshua 15:14). The very giants that once made Israel's heart melt are now personally driven out by Caleb."
  },
  {
   "h": "Give me a blessing",
   "b": "Achsah asks her father, \"Give me a blessing; for thou hast given me a south land; give me also springs of water\" (Joshua 15:19). Achsah asks boldly and specifically for more than the minimum, and receives it."
  },
  {
   "h": "The upper springs and the nether springs",
   "b": "Caleb \"gave her the upper springs, and the nether springs\" (Joshua 15:19), a generous father's answer to his daughter's bold and specific request."
  },
  {
   "h": "The Jebusites dwell there still",
   "b": "\"As for the Jebusites the inhabitants of Jerusalem, the children of Judah could not drive them out: but the Jebusites dwell with the children of Judah at Jerusalem unto this day\" (Joshua 15:63). The record is honest about incomplete conquest, even in Judah's great inheritance."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Judges 1:11-15 · Judges 3:9-11 · James 4:2",
   "qs": [
    {
     "th": "Judges retells Achsah and Othniel's story almost word for word, and later shows Othniel becoming Israel's first judge and deliverer, while James notes plainly, \"ye have not, because ye ask not.\"",
     "q": "Read these alongside Joshua 15 — what do they show you about the connection between asking boldly and receiving, and about how one act of faith can shape what comes generations later?"
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
     "th": "Achsah did not settle for the land she was given but asked her father specifically for more.",
     "q": "Is there something good and specific you have been hesitant to ask God for, settling instead for less than he may want to give you?"
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
     "th": "Judah's failure to drive out the Jebusites from Jerusalem is recorded honestly, without excuse.",
     "q": "Ask the Spirit whether there is an area of incomplete obedience in your own life that you have quietly stopped naming as unfinished."
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
     "th": "Caleb \"gave her the upper springs, and the nether springs\" (Joshua 15:19) in generous answer to Achsah's request.",
     "q": "Thank God for a time he answered a bold request of yours more generously than you expected."
    }
   ]
  }
 ]
},
// Day 471
{
 "ref": "Joshua 16",
 "tag": "Old Testament",
 "api": "joshua+16",
 "sum": [
  "This chapter opens the boundary of the allotment for the children of Joseph as a whole, the beginning of a two-chapter account that will divide into Ephraim and Manasseh.",
  "It then narrows to the specific inheritance of the children of Ephraim, tracing their border through a series of towns and landmarks.",
  "The tribe's territory is set out among fertile, well-known ground, continuing the pattern of careful, city-by-city allotment already seen for Judah.",
  "The chapter closes with a brief, honest note that Ephraim did not drive out the Canaanites who dwelt in Gezer, \"but the Canaanites dwell among the Ephraimites unto this day, and serve under tribute.\""
 ],
 "nug": [
  {
   "h": "The lot of the children of Joseph",
   "b": "\"And the lot of the children of Joseph fell from Jordan by Jericho\" (Joshua 16:1), beginning the account that will divide Joseph's inheritance between his two sons' tribes."
  },
  {
   "h": "The border of Ephraim",
   "b": "The chapter traces Ephraim's border town by town, continuing the same careful, patient record-keeping already seen for Judah's much larger territory."
  },
  {
   "h": "The Canaanites dwell among them still",
   "b": "\"And they drave not out the Canaanites that dwelt in Gezer: but the Canaanites dwell among the Ephraimites unto this day, and serve under tribute\" (Joshua 16:10). Incomplete obedience is again recorded plainly, without excuse."
  },
  {
   "h": "Serve under tribute",
   "b": "Rather than being driven out, the Canaanites in Gezer are merely put \"under tribute\" — a compromise that leaves a foreign influence living on inside Israel's own inheritance."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Judges 1:29 · Deuteronomy 7:1-4 · 2 Corinthians 6:14-17",
   "qs": [
    {
     "th": "Judges repeats this same failure almost word for word, Deuteronomy had warned Israel in advance not to make covenants with the nations they were to dispossess, and Paul later warns believers not to be \"unequally yoked together with unbelievers.\"",
     "q": "Read these alongside Joshua 16 — what do they show you about the long-term cost of settling for a compromised, partial obedience instead of a complete one?"
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
     "th": "\"They drave not out the Canaanites... but the Canaanites dwell among the Ephraimites unto this day\" (Joshua 16:10).",
     "q": "Is there something in your own life you have settled for merely managing or keeping 'under tribute' rather than fully removing?"
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
     "th": "The record does not hide Ephraim's incomplete obedience, even in the middle of an otherwise triumphant account.",
     "q": "Ask the Spirit to show you, gently but honestly, one place where you have stopped short of full obedience."
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
     "th": "\"They drave not out the Canaanites that dwelt in Gezer\" (Joshua 16:10).",
     "q": "Confess to God any compromise you have quietly made peace with instead of finishing the obedience he asked for."
    }
   ]
  }
 ]
},
// Day 472
{
 "ref": "Psalm 134",
 "tag": "Psalms & Wisdom",
 "api": "psalms+134",
 "sum": [
  "The shortest of the Songs of Ascents, and one of the shortest psalms in the whole book, this is likely a closing liturgical call to worship.",
  "It opens, \"Behold, bless ye the LORD, all ye servants of the LORD, which by night stand in the house of the LORD.\"",
  "The worshippers are called to \"Lift up your hands in the sanctuary, and bless the LORD,\" a simple, physical act of blessing offered back to God.",
  "The psalm closes with a priestly-style blessing given in return: \"The LORD that made heaven and earth bless thee out of Zion.\""
 ],
 "nug": [
  {
   "h": "Ye that by night stand",
   "b": "\"Behold, bless ye the LORD, all ye servants of the LORD, which by night stand in the house of the LORD\" (Psalm 134:1). Even the night watch of temple service is called specifically to bless the LORD."
  },
  {
   "h": "Lift up your hands",
   "b": "\"Lift up your hands in the sanctuary, and bless the LORD\" (Psalm 134:2). Worship here is bodily as well as inward, a simple physical gesture of blessing."
  },
  {
   "h": "The LORD bless thee out of Zion",
   "b": "\"The LORD that made heaven and earth bless thee out of Zion\" (Psalm 134:3). The psalm ends by turning the worshippers' blessing back into a blessing spoken over them."
  },
  {
   "h": "A short psalm, a whole liturgy",
   "b": "In just three verses, this final Song of Ascents moves the whole company from a call to bless the LORD to a blessing spoken back over them — worship offered up, and grace returned."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Chronicles 9:33 · Numbers 6:24-26 · 1 Timothy 2:8",
   "qs": [
    {
     "th": "1 Chronicles describes Levites who served \"day and night\" in the temple, Numbers gives the priestly blessing this psalm's closing line echoes, and Paul asks men to pray everywhere \"lifting up holy hands.\"",
     "q": "Read these alongside Psalm 134 — how do they shape your sense of what faithful, even unseen, worship looks like?"
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
     "th": "This psalm blesses those who \"by night stand in the house of the LORD\" (Psalm 134:1) — an unseen, unglamorous kind of service.",
     "q": "What unseen, ongoing act of faithfulness in your own life could you offer to God today as genuine worship?"
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
     "th": "\"Lift up your hands in the sanctuary, and bless the LORD\" (Psalm 134:2).",
     "q": "Ask the Spirit to help you offer him a simple, wholehearted moment of blessing right now, without rushing on to anything else."
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
     "th": "\"The LORD that made heaven and earth bless thee out of Zion\" (Psalm 134:3).",
     "q": "Praise God simply for who he is — the Maker of heaven and earth — with no request attached."
    }
   ]
  }
 ]
},
// Day 473
{
 "ref": "Joshua 17",
 "tag": "Old Testament",
 "api": "joshua+17",
 "sum": [
  "This chapter gives the inheritance of the half-tribe of Manasseh, noting Machir as the firstborn who received Gilead and Bashan for his warlike character.",
  "The daughters of Zelophehad — Mahlah, Noah, Hoglah, Milcah, and Tirzah — come again before Eleazar, Joshua, and the princes to claim their inheritance among their father's brethren, as the LORD had commanded Moses, and receive it.",
  "The children of Joseph then complain to Joshua that their allotted portion is too small for so great and growing a people.",
  "Joshua tells them that if they are so numerous, they should clear and possess the forested hill country and drive out the Canaanites there despite their iron chariots, \"for thou shalt drive out the Canaanites, though they have iron chariots, and though they be strong.\""
 ],
 "nug": [
  {
   "h": "The daughters of Zelophehad receive their inheritance",
   "b": "The daughters come again, and \"according to the commandment of the LORD he gave them an inheritance among the brethren of their father\" (Joshua 17:4), the promise made to them in the wilderness now finally, faithfully fulfilled in the land."
  },
  {
   "h": "As the LORD commanded Moses",
   "b": "Their claim is granted specifically \"according to the commandment of the LORD\" (Joshua 17:4) — a promise carried carefully across an entire generation and a whole book, from Numbers to Joshua."
  },
  {
   "h": "The land is too little for us",
   "b": "The children of Joseph complain, \"why hast thou given me but one lot and one portion to inherit, seeing I am a great people\" (Joshua 17:14), even while much land nearby remains untaken."
  },
  {
   "h": "Though they have iron chariots",
   "b": "Joshua answers plainly, \"thou shalt drive out the Canaanites, though they have iron chariots, and though they be strong\" (Joshua 17:18). The size of the obstacle is no excuse for standing still."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 27:1-7 · Numbers 36:1-9 · Joshua 1:9",
   "qs": [
    {
     "th": "Numbers 27 first records the daughters of Zelophehad's bold, faithful request, Numbers 36 settles the final terms of it, and Joshua 1:9 already charged Joshua to be strong and courageous whatever the obstacle.",
     "q": "Read these alongside Joshua 17 — how do a promise kept across decades and a charge to courage sit together in this chapter?"
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
     "th": "The children of Joseph complained about a small portion instead of going up to clear and possess more land, as Joshua told them to.",
     "q": "Is there an area where you are complaining about limited resources or opportunity, when what is actually needed is courageous effort rather than a bigger starting portion?"
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
     "th": "\"Thou shalt drive out the Canaanites, though they have iron chariots, and though they be strong\" (Joshua 17:18).",
     "q": "Ask the Spirit to show you where fear of a strong obstacle has kept you from stepping forward into something he has called you to."
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
     "th": "The daughters of Zelophehad were given \"an inheritance among the brethren of their father\" (Joshua 17:4) after years of faithful waiting.",
     "q": "Pray for someone you know who is still waiting on a long-held promise, asking God to bring it to pass as faithfully as he did here."
    }
   ]
  }
 ]
},
// Day 474
{
 "ref": "Luke 24",
 "tag": "New Testament",
 "api": "luke+24",
 "sum": [
  "THE RESURRECTION, and the close of the whole Gospel of Luke: the women come to the tomb early on the first day of the week with spices, find the stone rolled away and the body gone, and two men in shining garments ask them, \"Why seek ye the living among the dead? He is not here, but is risen.\"",
  "The disciples do not believe the women's report at first; on the road to Emmaus, the risen Jesus himself walks with two disciples who do not recognise him, opening to them \"in all the scriptures the things concerning himself,\" and is known to them \"in breaking of bread,\" at which he vanishes from their sight.",
  "He appears to the gathered disciples, showing his hands and feet, \"for a spirit hath not flesh and bones, as ye see me have,\" and eats a piece of broiled fish before them; he opens their understanding to the scriptures and tells them that repentance and remission of sins should be preached in his name among all nations, beginning at Jerusalem, and that they are witnesses of these things.",
  "He promises to send \"the promise of my Father\" and tells them to tarry in Jerusalem \"until ye be endued with power from on high\"; the Gospel closes with Jesus leading them out as far as Bethany, blessing them, and being \"carried up into heaven\" as they worship him and return to Jerusalem \"with great joy.\""
 ],
 "nug": [
  {
   "h": "He is not here, but is risen",
   "b": "\"Why seek ye the living among the dead? He is not here, but is risen\" (Luke 24:5-6). The whole Gospel turns on this one announcement at an empty tomb."
  },
  {
   "h": "Beginning at Moses and all the prophets",
   "b": "On the road to Emmaus, Jesus, \"beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself\" (Luke 24:27) — the entire Old Testament read as pointing to him."
  },
  {
   "h": "Known in the breaking of bread",
   "b": "\"And their eyes were opened, and they knew him; and he vanished out of their sight\" (Luke 24:31), the moment coming as Jesus took bread, blessed, and broke it — an ordinary meal made a moment of recognition."
  },
  {
   "h": "Handle me, and see",
   "b": "\"Behold my hands and my feet, that it is I myself: handle me, and see; for a spirit hath not flesh and bones, as ye see me have\" (Luke 24:39). The resurrection is bodily, physical, and unmistakably real."
  },
  {
   "h": "Power from on high",
   "b": "Jesus tells the disciples to \"tarry ye in the city of Jerusalem, until ye be endued with power from on high\" (Luke 24:49), the promise of the Spirit that closes the Gospel and opens the book of Acts."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 15:3-6 · Acts 1:4-9 · Isaiah 53:10-12",
   "qs": [
    {
     "th": "Paul lists eyewitnesses of the risen Jesus as an already-settled historical fact, Acts 1 tells this same ascension from the other side, and Isaiah foretells the suffering servant who would yet \"prolong his days\" and see the fruit of his suffering.",
     "q": "Read these alongside Luke 24 — how does seeing the resurrection foretold, witnessed, and then built upon strengthen your own confidence in it?"
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
     "th": "The two disciples on the Emmaus road walked with the risen Jesus for miles without recognising him.",
     "q": "Where in your own life might Jesus be present and at work in ways you have not yet recognised?"
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
     "th": "Jesus told the disciples to wait in Jerusalem \"until ye be endued with power from on high\" (Luke 24:49).",
     "q": "Ask the Spirit to fill you afresh with his power for whatever he is calling you to today."
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
     "th": "\"He is not here, but is risen\" (Luke 24:6) closes the entire Gospel of Luke with the empty tomb.",
     "q": "Thank Jesus specifically for the reality of his resurrection, and for what it means for your own life and hope."
    }
   ]
  }
 ]
},
// Day 475
{
 "ref": "Psalm 135",
 "tag": "Psalms & Wisdom",
 "api": "psalms+135",
 "sum": [
  "This psalm of praise opens, \"Praise ye the LORD. Praise ye the name of the LORD; praise him, O ye servants of the LORD,\" \"for the LORD hath chosen Jacob unto himself, and Israel for his peculiar treasure.\"",
  "It recalls the LORD's mighty works — the plagues of Egypt, and the defeat of great nations and kings, naming Sihon and Og again, and giving their land for an heritage unto Israel his people.",
  "It then turns to a mocking description of the nations' idols, closely similar to Psalm 115: \"they have mouths, but they speak not; eyes have they, but they see not... They that make them are like unto them: so is every one that trusteth in them.\"",
  "The psalm closes with a call to the house of Israel, the house of Aaron, and the house of Levi to bless the LORD."
 ],
 "nug": [
  {
   "h": "Israel his peculiar treasure",
   "b": "\"For the LORD hath chosen Jacob unto himself, and Israel for his peculiar treasure\" (Psalm 135:4). Israel's identity begins not in their own achievement but in being chosen and treasured."
  },
  {
   "h": "Sihon and Og remembered again",
   "b": "The psalm names again \"Sihon king of the Amorites, and Og king of Bashan\" (Psalm 135:11), the same victories the week's Joshua readings have traced back through the story."
  },
  {
   "h": "Eyes have they, but they see not",
   "b": "\"They have mouths, but they speak not; eyes have they, but they see not... They that make them are like unto them: so is every one that trusteth in them\" (Psalm 135:16-18). Idols shape their worshippers into their own lifelessness."
  },
  {
   "h": "Bless the LORD, O house of Israel",
   "b": "\"Bless the LORD, O house of Israel: bless the LORD, O house of Aaron: bless the LORD, O house of Levi\" (Psalm 135:19-20). Every part of the community, priests included, is called into the same praise."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 115:4-8 · Deuteronomy 7:6-8 · Romans 1:22-25",
   "qs": [
    {
     "th": "Psalm 115 uses almost identical language mocking lifeless idols, Deuteronomy explains Israel's chosenness as rooted in God's love rather than their own merit, and Paul describes people who exchanged the truth of God for what their own hands made.",
     "q": "Read these alongside Psalm 135 — what do they show you about the danger of becoming like whatever you worship?"
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
     "th": "\"They that make them are like unto them: so is every one that trusteth in them\" (Psalm 135:18).",
     "q": "Is there anything in your own life you have quietly come to trust in the way this psalm describes trusting an idol — something you are becoming shaped by rather than shaped by God?"
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
     "th": "\"For the LORD hath chosen Jacob unto himself, and Israel for his peculiar treasure\" (Psalm 135:4).",
     "q": "Ask the Spirit to help you rest in being chosen and treasured by God, rather than in anything you have made or achieved."
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
     "th": "The psalm calls every house — Israel, Aaron, and Levi — to bless the LORD together (Psalm 135:19-20).",
     "q": "Sit quietly before God and simply listen, letting his greatness settle over the busyness of your own words."
    }
   ]
  }
 ]
},
// Day 476
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Bless the LORD, O house of Israel",
   "b": "\"Bless the LORD, O house of Israel: bless the LORD, O house of Aaron: bless the LORD, O house of Levi\" (Psalm 135:19-20). This week closed the entire Gospel of Luke with the resurrection and ascension, and it closes here with the same call to bless the LORD for all he has done."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the ongoing division of the land — Judah, Ephraim, and Manasseh, with Caleb's continuing faith and the daughters of Zelophehad's kept promise (Joshua 15-17) — two more Songs of Ascents (Psalm 134-135), and the resurrection and ascension of Jesus (Luke 24), a major milestone that closes the whole Gospel of Luke.",
     "q": "Which moment stands out to you more this week — the empty tomb, \"He is not here, but is risen\" (Luke 24:6), or Joshua's charge, \"thou shalt drive out the Canaanites, though they have iron chariots\" (Joshua 17:18)? Why?"
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
     "th": "\"Bless the LORD, O house of Israel: bless the LORD, O house of Aaron: bless the LORD, O house of Levi\" (Psalm 135:19-20).",
     "q": "Sit quietly for a moment, and simply bless the LORD before you move on."
    }
   ]
  }
 ]
},
// Day 477
{
 "ref": "Joshua 18",
 "tag": "Old Testament",
 "api": "joshua+18",
 "sum": [
  "The whole congregation assembles at Shiloh and sets up the tabernacle there, but seven tribes have still not received their inheritance, even though the land is subdued before them.",
  "Joshua rebukes the delay, \"How long are ye slack to go to possess the land, which the LORD God of your fathers hath given you?\" and orders three men from each tribe to survey the land in seven parts.",
  "The men go through the land, describe it by cities in a book, and return to Joshua at Shiloh, where he casts lots for them before the LORD and divides the land according to their divisions.",
  "The first lot falls to Benjamin, whose territory lies between Judah and the children of Joseph; its borders and twenty-six cities are listed, including Jericho, Beth-el and \"Jebusi, which is Jerusalem.\""
 ],
 "nug": [
  {
   "h": "Slack to possess",
   "b": "\"How long are ye slack to go to possess the land, which the LORD God of your fathers hath given you?\" (Joshua 18:3). The land was already given; what was missing was the willingness to go and take hold of it."
  },
  {
   "h": "Go and describe it",
   "b": "\"Go and walk through the land, and describe it, and come again to me\" (Joshua 18:8). Joshua turns vague intention into a concrete, practical task: survey, write it down, report back."
  },
  {
   "h": "The priesthood is their inheritance",
   "b": "\"But the Levites have no part among you; for the priesthood of the LORD is their inheritance\" (Joshua 18:7). Some people are given no plot of land because the LORD himself is their portion."
  },
  {
   "h": "Before the LORD in Shiloh",
   "b": "\"And Joshua cast lots for them in Shiloh before the LORD: and there Joshua divided the land unto the children of Israel according to their divisions\" (Joshua 18:10). The allocation is made in God's presence, not by human preference."
  },
  {
   "h": "Jebusi, which is Jerusalem",
   "b": "Benjamin's list ends with \"Jebusi, which is Jerusalem\" (Joshua 18:28). The city that will one day matter so much to Israel is quietly named here, still to be possessed."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 18:20 · Ephesians 1:11 · Hebrews 6:11-12",
   "qs": [
    {
     "th": "Numbers 18:20 explains why the Levites hold no land, Ephesians 1:11 says believers have also obtained an inheritance in Christ, and Hebrews 6:11-12 urges diligence rather than sluggishness so that we inherit the promises through faith and patience.",
     "q": "Read these alongside Joshua 18 — what does it look like to lay hold of what God has already given, rather than waiting until every tribe around you moves first?"
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
     "th": "Seven tribes had an inheritance waiting, yet they lingered, and Joshua asks how long they will stay slack.",
     "q": "Is there something God has clearly placed in front of you — a step of obedience, a relationship to mend, a habit to begin — that you have been putting off? What is really holding you back?"
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
     "th": "Joshua sent men to describe the land, turning good intention into honest, written, specific steps.",
     "q": "Ask the Spirit to show you one delayed thing he wants you to move on this week, and what the first small, concrete step could be."
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
     "th": "\"How long are ye slack to go to possess the land\" (Joshua 18:3) is a searching question for any of us.",
     "q": "Confess honestly to God where you have been slack, comfortable or fearful, and ask him for the courage to move; receive his forgiveness before you rise."
    }
   ]
  }
 ]
},
// Day 478
{
 "ref": "Joshua 19",
 "tag": "Old Testament",
 "api": "joshua+19",
 "sum": [
  "The second lot falls to Simeon, whose inheritance lies within Judah's territory, and the text explains why: \"the part of the children of Judah was too much for them.\"",
  "Lots then come up for Zebulun, Issachar, Asher and Naphtali, each with borders and cities listed, from Sarid and Tabor to Carmel, Tyre and Zidon, Kedesh and the Jordan.",
  "The seventh lot goes to Dan, whose coast proves \"too little\" for them, so they fight against Leshem, take it, and rename it Dan after their father.",
  "Last of all, the people give Joshua the city he asked for, Timnath-serah in mount Ephraim, and the chapter closes, \"So they made an end of dividing the country.\""
 ],
 "nug": [
  {
   "h": "Too much for them",
   "b": "\"Out of the portion of the children of Judah was the inheritance of the children of Simeon: for the part of the children of Judah was too much for them\" (Joshua 19:9). Judah's abundance is shared rather than hoarded."
  },
  {
   "h": "Beth-lehem in Zebulun",
   "b": "Zebulun's list includes \"and Bethlehem: twelve cities with their villages\" (Joshua 19:15). This is a different Bethlehem from the one in Judah, a small reminder to read place names carefully."
  },
  {
   "h": "Too little for them",
   "b": "\"And the coast of the children of Dan went out too little for them\" (Joshua 19:47). Some received more than they could use and others too little, and Dan's response is to take more by force."
  },
  {
   "h": "The city which he asked",
   "b": "\"According to the word of the LORD they gave him the city which he asked, even Timnath-serah in mount Ephraim: and he built the city, and dwelt therein\" (Joshua 19:50). Joshua receives his own portion last, after everyone else."
  },
  {
   "h": "An end of dividing",
   "b": "\"So they made an end of dividing the country\" (Joshua 19:51). After long years of war and waiting, this quiet sentence marks a promise reaching its fulfilment."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 26:52-56 · Psalm 16:5-6 · 1 Peter 1:3-4",
   "qs": [
    {
     "th": "Numbers 26 sets out the instruction that the land be divided by lot, Psalm 16 sings of a portion and boundary lines that have fallen in pleasant places, and 1 Peter 1 speaks of an inheritance kept in heaven for believers.",
     "q": "Read these together with Joshua 19 — how does the careful, patient listing of every border deepen your sense of what it means for God to give a portion to each person?"
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
     "th": "Joshua asked for his own city only after all the tribes had their share, and then simply built it and lived there.",
     "q": "What would it look like to receive your own 'portion' with contentment, without measuring it against someone else's?"
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
     "th": "Every tribe received its lot from the LORD, whether large or small, easy or hard to hold.",
     "q": "Ask the Spirit to show you one part of your current situation that you have treated as a shortfall, and to help you see it as a gift."
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
     "th": "The chapter ends with a finished division and a settled man, Joshua, building a home.",
     "q": "Thank God specifically for the places, people and provisions that have been allotted to you, naming as many as you can."
    }
   ]
  }
 ]
},
// Day 479
{
 "ref": "Psalm 136",
 "tag": "Psalms & Wisdom",
 "api": "psalms+136",
 "sum": [
  "The psalm opens with three calls to give thanks, to the LORD who is good, to \"the God of gods,\" and to \"the Lord of lords,\" each answered by the refrain \"for his mercy endureth for ever.\"",
  "It then praises the Creator who made the heavens by wisdom, stretched out the earth above the waters, and made the sun, moon and stars to rule the day and the night.",
  "The same refrain runs through the story of Egypt's firstborn, the Red sea divided, Pharaoh overthrown, the wilderness journey, and the defeat of great kings such as Sihon and Og.",
  "The psalm ends with the gift of the land as an heritage, remembrance \"in our low estate,\" redemption from enemies, food for all flesh, and a final call to thank \"the God of heaven.\""
 ],
 "nug": [
  {
   "h": "Good, and merciful for ever",
   "b": "\"O give thanks unto the LORD; for he is good: for his mercy endureth for ever\" (Psalm 136:1). The refrain that follows is repeated in every one of the twenty-six verses, so that no event is left without its interpretation."
  },
  {
   "h": "He alone does great wonders",
   "b": "\"To him who alone doeth great wonders: for his mercy endureth for ever\" (Psalm 136:4). Wonders are not sent to impress but flow from steadfast covenant love."
  },
  {
   "h": "By wisdom made the heavens",
   "b": "\"To him that by wisdom made the heavens: for his mercy endureth for ever\" (Psalm 136:5). Creation and rescue are told in the same breath as acts of the same faithful God."
  },
  {
   "h": "Remembered in our low estate",
   "b": "\"Who remembered us in our low estate: for his mercy endureth for ever\" (Psalm 136:23). God's mercy is not only for spectacular moments but for the times when his people are small and forgotten."
  },
  {
   "h": "Food to all flesh",
   "b": "\"Who giveth food to all flesh: for his mercy endureth for ever\" (Psalm 136:25). The psalm moves from the Red sea to the ordinary table, showing mercy in the everyday."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 14:21-22 · 2 Chronicles 20:20-22 · Lamentations 3:22-23",
   "qs": [
    {
     "th": "Exodus 14 tells the crossing of the sea that Psalm 136 celebrates, 2 Chronicles 20 shows singers going before an army with the same refrain of praise, and Lamentations 3 declares that the LORD's mercies are new every morning even after grief.",
     "q": "Read these alongside Psalm 136 — how does hearing the same refrain in triumph and in sorrow change the way you sing of God's mercy?"
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
     "th": "The psalmist gives no explanation for the refrain and simply keeps repeating it, as though repetition itself were a way of understanding.",
     "q": "Which of God's works in your own story could you retell with this refrain after it: for his mercy endureth for ever?"
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
     "th": "Twenty-six times the psalm returns to the same steady truth about God.",
     "q": "Ask the Spirit to help you slow down and let the refrain sink in, from the head to the heart, rather than racing to the next thing."
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
     "th": "\"To him who alone doeth great wonders: for his mercy endureth for ever\" (Psalm 136:4).",
     "q": "Simply adore him: use the psalm's own words about who he is, then add lines of your own, ending each with his enduring mercy."
    }
   ]
  }
 ]
},
// Day 480
{
 "ref": "Joshua 20",
 "tag": "Old Testament",
 "api": "joshua+20",
 "sum": [
  "The LORD tells Joshua to speak to Israel and appoint cities of refuge, as he had spoken by the hand of Moses.",
  "Someone who kills a person unawares and unwittingly may flee to one of these cities, declare his cause to the elders, and be protected from the avenger of blood until he stands before the congregation for judgment.",
  "He remains there until the death of the high priest who is in office, after which he may return to his own city and house.",
  "Six cities are named, Kedesh, Shechem and Kirjath-arba (Hebron) on the west and Bezer, Ramoth and Golan on the east, for all Israel \"and for the stranger that sojourneth among them.\""
 ],
 "nug": [
  {
   "h": "Appoint cities of refuge",
   "b": "\"Appoint out for you cities of refuge, whereof I spake unto you by the hand of Moses\" (Joshua 20:2). The provision made earlier is now put into practice in the land."
  },
  {
   "h": "Unawares and unwittingly",
   "b": "\"That the slayer that killeth any person unawares and unwittingly may flee thither: and they shall be your refuge from the avenger of blood\" (Joshua 20:3). The law makes a careful distinction between an accident and deliberate murder, and protects the one who did not intend harm."
  },
  {
   "h": "A fair hearing",
   "b": "\"They shall not deliver the slayer up into his hand; because he smote his neighbour unwittingly, and hated him not beforetime\" (Joshua 20:5). The city gives time and a place for the truth to be established."
  },
  {
   "h": "Spread across the land",
   "b": "\"And they appointed Kedesh in Galilee in mount Naphtali, and Shechem in mount Ephraim\" (Joshua 20:7). The cities are placed east and west of the Jordan so that refuge is within reach."
  },
  {
   "h": "For the stranger too",
   "b": "\"These were the cities appointed for all the children of Israel, and for the stranger that sojourneth among them\" (Joshua 20:9). Protection extends to the outsider living among them."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 35:9-15 · Psalm 46:1 · Hebrews 6:18-20",
   "qs": [
    {
     "th": "Numbers 35 gives the original instructions for the cities of refuge, Psalm 46 calls God himself our refuge and strength, and Hebrews 6 speaks of those who have fled for refuge to lay hold upon the hope set before us.",
     "q": "Read these together with Joshua 20 — what do the cities teach about a God who makes a way for people caught in situations they did not choose?"
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
     "th": "The cities of refuge protect people who did harm they never intended, while still taking the loss of life seriously.",
     "q": "Where do you see people trapped by consequences, mistakes or accidents who need mercy and patient justice rather than vengeance?"
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
     "th": "Refuge here was a real place, on a real road, with open gates.",
     "q": "Ask the Spirit to make you a person and a household where others can find safety and a fair hearing."
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
     "th": "The cities were open to Israelites and to strangers alike, but someone had to run to them.",
     "q": "Bring by name people who are fleeing something — grief, guilt, danger, displacement — and ask God to be their refuge and to raise up welcome and justice around them."
    }
   ]
  }
 ]
},
// Day 481
{
 "ref": "John 1",
 "tag": "New Testament",
 "api": "john+1",
 "sum": [
  "John begins before time itself, \"In the beginning was the Word, and the Word was with God, and the Word was God,\" declaring that all things were made by him and that in him was life and light shining in the darkness.",
  "John the Baptist is sent as a witness to the true Light, who came to his own yet was not received; to those who did receive him he gave power to become the sons of God, and \"the Word was made flesh, and dwelt among us.\"",
  "The priests and Levites question John, who says he is only a voice crying in the wilderness, and then, seeing Jesus, cries, \"Behold the Lamb of God, which taketh away the sin of the world,\" telling of the Spirit descending like a dove.",
  "Two of John's disciples follow Jesus and hear \"Come and see\"; Andrew finds Simon, Jesus finds Philip, and Philip brings Nathanael, who confesses Jesus as the Son of God and the King of Israel."
 ],
 "nug": [
  {
   "h": "In the beginning was the Word",
   "b": "\"In the beginning was the Word, and the Word was with God, and the Word was God\" (John 1:1). This is the first verse of the Gospel of John, deliberately echoing the opening of Genesis and placing Jesus before creation itself."
  },
  {
   "h": "Received him",
   "b": "\"But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name\" (John 1:12). The gift of belonging to God's family comes by receiving Christ, not by birth or effort."
  },
  {
   "h": "The Word made flesh",
   "b": "\"And the Word was made flesh, and dwelt among us\" (John 1:14). The eternal Word takes on a human life and lives alongside ordinary people, full of \"grace and truth.\""
  },
  {
   "h": "Behold the Lamb",
   "b": "\"Behold the Lamb of God, which taketh away the sin of the world\" (John 1:29). John the Baptist points away from himself and names Jesus's saving purpose."
  },
  {
   "h": "Come and see",
   "b": "\"He saith unto them, Come and see\" (John 1:39). Jesus answers curious questions with an open invitation to spend time with him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 1:1-3 · Colossians 1:15-17 · Hebrews 1:1-3",
   "qs": [
    {
     "th": "Genesis 1 shows God speaking creation into being, Colossians 1 says all things were created by and for Christ, and Hebrews 1 tells how God who spoke by the prophets has spoken finally through his Son.",
     "q": "Read these alongside John 1 — how does seeing Jesus as the Word through whom everything was made shape the way you read the rest of this Gospel?"
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
     "th": "John opens his Gospel with a grand claim, and then gives it faces: John the Baptist, Andrew, Simon, Philip, Nathanael.",
     "q": "Who first pointed you toward Jesus, and how did they do it? Who might you point toward him, using something as simple as the words 'Come and see'?"
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
     "th": "John the Baptist saw the Spirit descending and remaining on Jesus, and testified to what he saw.",
     "q": "Ask the Spirit to open your eyes to what John saw, and to keep you from settling for a smaller picture of Jesus."
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
     "th": "Jesus asked the first two followers, \"What seek ye?\" (John 1:38).",
     "q": "Sit in quiet for a few minutes with that question, and listen for what rises in you, then for anything the Lord may say in return. Let the silence be part of the prayer."
    }
   ]
  }
 ]
},
// Day 482
{
 "ref": "Psalm 137",
 "tag": "Psalms & Wisdom",
 "api": "psalms+137",
 "sum": [
  "By the rivers of Babylon, exiles sit down and weep as they remember Zion, hanging their harps on the willows while their captors demand songs of mirth.",
  "\"How shall we sing the LORD'S song in a strange land?\" they ask, and they vow never to forget Jerusalem, whom they will prefer above their chief joy.",
  "The psalm then turns to prayer, asking the LORD to remember the children of Edom in the day of Jerusalem, who said, \"Rase it, rase it, even to the foundation thereof.\"",
  "It ends with raw, disturbing words against Babylon, blessing the one who repays her, and the shocking image of her little ones dashed against the stones."
 ],
 "nug": [
  {
   "h": "We wept",
   "b": "\"By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion\" (Psalm 137:1). The exiles do not pretend to be fine; grief is named and offered."
  },
  {
   "h": "A song in a strange land",
   "b": "\"How shall we sing the LORD'S song in a strange land?\" (Psalm 137:4). Some seasons of pain leave worship with no easy words."
  },
  {
   "h": "Let me not forget",
   "b": "\"If I forget thee, O Jerusalem, let my right hand forget her cunning\" (Psalm 137:5). The psalmist swears to hold onto what matters rather than let it fade in the ease of a new place."
  },
  {
   "h": "Rase it",
   "b": "The Edomites are remembered for saying \"Rase it, rase it, even to the foundation thereof\" (Psalm 137:7). The cruelty of bystanders who cheered on Jerusalem's fall is not forgotten by the exiles."
  },
  {
   "h": "The hardest verse",
   "b": "\"Happy shall he be, that taketh and dasheth thy little ones against the stones\" (Psalm 137:9). This is the cry of a people who watched their own children suffer, and it is honest and terrible; Scripture records it without endorsing it as a model to imitate, and it sits beside Jesus's call to love enemies."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Jeremiah 29:4-7 · Obadiah 1:10-14 · Romans 12:17-21",
   "qs": [
    {
     "th": "Jeremiah 29 gives God's word to the exiles in Babylon, telling them to seek the peace of the city, Obadiah 10-14 condemns Edom's gloating over Jerusalem's day of disaster, and Romans 12 tells believers not to repay evil for evil but to leave vengeance to God.",
     "q": "Read these alongside Psalm 137 — how do they help you hold the exiles' pain and anger honestly without letting either become your final word?"
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
     "th": "The psalm shows what happens when grief and injustice are carried without any outlet except memory and rage.",
     "q": "Is there a hurt you have carried so long that it has hardened into a wish for someone else to suffer? What would it mean to bring it, honestly and fully, to God?"
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
     "th": "The exiles asked how they could sing, yet this psalm is itself a song.",
     "q": "Ask the Spirit to help you tell God the whole truth, including the ugliest parts, and to lead you toward the freedom of forgiveness in his time."
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
     "th": "\"If I forget thee, O Jerusalem\" (Psalm 137:5) is a vow about what matters most, and much of daily life pushes it aside.",
     "q": "Confess where you have forgotten what matters, or nursed bitterness and the desire for revenge, and receive God's mercy for both."
    }
   ]
  }
 ]
},
// Day 483
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "The Word made flesh",
   "b": "\"And the Word was made flesh, and dwelt among us\" (John 1:14). This week opened the Gospel of John, and you began not with a birth in a stable but with the eternal Word made flesh and living among us."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the survey and allotment of land to Benjamin (Joshua 18), the lots for Simeon through Dan and Joshua's own city (Joshua 19), Psalm 136 with its refrain of enduring mercy, the cities of refuge (Joshua 20), the opening of the Gospel of John (John 1), and the exiles' lament by the rivers of Babylon (Psalm 137). Beginning John is a milestone: the fourth Gospel starts with \"In the beginning was the Word\" (John 1:1).",
     "q": "Which line stayed with you more this week, Joshua's question, \"How long are ye slack to go to possess the land\" (Joshua 18:3), or Jesus's invitation, \"Come and see\" (John 1:39)? Why?"
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
     "th": "\"And of his fulness have all we received, and grace for grace\" (John 1:16).",
     "q": "Sit quietly for a moment, and simply receive from his fulness before you move on."
    }
   ]
  }
 ]
},
// Day 484
{
 "ref": "Joshua 21",
 "tag": "Old Testament",
 "api": "joshua+21",
 "sum": [
  "The heads of the Levite families come to Eleazar and Joshua at Shiloh, reminding them that the LORD commanded by Moses to give them cities to dwell in, with suburbs for their cattle.",
  "By lot the cities are given to the Kohathites (both the priestly sons of Aaron and the rest of Kohath), the Gershonites and the Merarites, from the different tribes; Hebron goes to the priests, while its fields and villages stay with Caleb.",
  "Several of the Levitical cities, including Hebron, Shechem, Golan, Kedesh and Ramoth, are also cities of refuge for the slayer, tying this chapter to Joshua 20, and the total is \"forty and eight cities with their suburbs.\"",
  "The chapter closes with a summary of the whole conquest: the LORD gave Israel all the land he swore to their fathers, gave them rest round about, and \"There failed not ought of any good thing which the LORD had spoken unto the house of Israel; all came to pass.\""
 ],
 "nug": [
  {
   "h": "Cities to dwell in",
   "b": "\"The LORD commanded by the hand of Moses to give us cities to dwell in, with the suburbs thereof for our cattle\" (Joshua 21:2). The Levites do not grab, they ask for what was already promised."
  },
  {
   "h": "Caleb keeps his fields",
   "b": "\"But the fields of the city, and the villages thereof, gave they to Caleb the son of Jephunneh for his possession\" (Joshua 21:12). Hebron's city becomes priestly, and Caleb's own promised portion is respected."
  },
  {
   "h": "Scattered among the tribes",
   "b": "\"All the cities of the Levites within the possession of the children of Israel were forty and eight cities with their suburbs\" (Joshua 21:41). The priestly tribe is spread through all Israel, close to every community."
  },
  {
   "h": "Rest round about",
   "b": "\"And the LORD gave them rest round about, according to all that he sware unto their fathers\" (Joshua 21:44). The promise given to the fathers is now a settled reality."
  },
  {
   "h": "All came to pass",
   "b": "\"There failed not ought of any good thing which the LORD had spoken unto the house of Israel; all came to pass\" (Joshua 21:45). It is the theme of the whole book, stated in a single sentence."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 35:1-8 · Deuteronomy 18:1-2 · Psalm 105:42-45",
   "qs": [
    {
     "th": "Numbers 35 gives the instruction that cities be given to the Levites, Deuteronomy 18 explains that the LORD himself is their inheritance, and Psalm 105 remembers how God kept his holy promise to Abraham and gave his people the land.",
     "q": "Read these alongside Joshua 21 — how does seeing promise, provision and remembered word line up in these texts increase your thankfulness for what God has done?"
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
     "th": "Joshua 21 ends by saying that nothing failed of all the good God had spoken.",
     "q": "Where in your own life can you look back and honestly say that God kept his word, even if it took longer or looked different than you expected?"
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
     "th": "The Levites were scattered among the tribes so that God's worship and teaching stayed close to every community.",
     "q": "Ask the Spirit to show you who God has placed near you, in your church or neighbourhood, to be a source of spiritual help, and how you might thank them."
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
     "th": "\"There failed not ought of any good thing which the LORD had spoken\" (Joshua 21:45).",
     "q": "Give thanks to God for promises kept, naming specific ones, and for the people and places where he has settled you."
    }
   ]
  }
 ]
},
// Day 485
{
 "ref": "Joshua 22",
 "tag": "Old Testament",
 "api": "joshua+22",
 "sum": [
  "Joshua calls the Reubenites, the Gadites and half of Manasseh, praises them for keeping all that Moses and he commanded, and sends them home across the Jordan with a blessing and a charge to love the LORD and cleave to him.",
  "On the way back, at the borders of Jordan, these tribes build a great altar, and when Israel hears of it the whole congregation gathers at Shiloh to go up to war against them.",
  "Phinehas and ten princes are sent first to ask what trespass this is, recalling the sin of Peor and Achan, and the eastern tribes reply that the altar is not for sacrifice but a witness so that their children will not be told they have no part in the LORD.",
  "Phinehas is pleased and says, \"This day we perceive that the LORD is among us,\" the war is called off, the altar is named, and the chapter closes with the words \"for it shall be a witness between us that the LORD is God.\""
 ],
 "nug": [
  {
   "h": "With all your heart and soul",
   "b": "Joshua's charge is to \"love the LORD your God, and to walk in all his ways, and to keep his commandments, and to cleave unto him, and to serve him with all your heart and with all your soul\" (Joshua 22:5). It is a whole-person response, not a list of tasks."
  },
  {
   "h": "Assuming the worst",
   "b": "\"What trespass is this that ye have committed against the God of Israel\" (Joshua 22:16). Israel's alarm is sincere and rooted in memory, but it leaps to the worst reading before it hears the facts."
  },
  {
   "h": "He knoweth",
   "b": "\"The LORD God of gods, the LORD God of gods, he knoweth, and Israel he shall know\" (Joshua 22:22). The eastern tribes appeal to the God who sees motives, and invite Israel to see them too."
  },
  {
   "h": "The LORD is among us",
   "b": "\"This day we perceive that the LORD is among us, because ye have not committed this trespass against the LORD\" (Joshua 22:31). Phinehas draws a good conclusion once the facts are on the table."
  },
  {
   "h": "A witness",
   "b": "\"For it shall be a witness between us that the LORD is God\" (Joshua 22:34). The altar exists to remind future generations of a shared faith across a river."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 13:12-14 · Proverbs 18:13 · Ephesians 4:1-3",
   "qs": [
    {
     "th": "Deuteronomy 13 tells Israel to inquire diligently and ask before acting on a report of wrongdoing, Proverbs 18:13 warns against answering a matter before hearing it, and Ephesians 4 urges believers to keep the unity of the Spirit in the bond of peace.",
     "q": "Read these alongside Joshua 22 — how does this chapter show what it looks like to seek the truth first when unity is at stake?"
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
     "th": "Both sides here acted out of real devotion to the LORD, yet misunderstanding nearly led to civil war.",
     "q": "Is there someone whose actions you have interpreted in the worst light? What would it look like to send a Phinehas, in other words to ask and listen first?"
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
     "th": "The altar was meant as a witness, but it was read as rebellion.",
     "q": "Ask the Spirit to help you notice when your own assumptions are running ahead of the facts, and to give you gentleness in conversation."
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
     "th": "\"The LORD God of gods, the LORD God of gods, he knoweth\" (Joshua 22:22).",
     "q": "Adore God as the one who knows every heart and motive perfectly, when people misjudge one another and when we misjudge ourselves."
    }
   ]
  }
 ]
},
// Day 486
{
 "ref": "Psalm 138",
 "tag": "Psalms & Wisdom",
 "api": "psalms+138",
 "sum": [
  "David opens, \"I will praise thee with my whole heart: before the gods will I sing praise unto thee,\" worshipping toward God's holy temple for his lovingkindness and truth.",
  "He recalls that \"In the day when I cried thou answeredst me,\" and that God strengthened him with strength in his soul.",
  "He looks ahead to all the kings of the earth praising the LORD when they hear his words, noting that the LORD, though high, has respect unto the lowly, while the proud he knows afar off.",
  "He ends with confidence that even in the midst of trouble the LORD will revive him and \"perfect that which concerneth me,\" asking God not to forsake the works of his own hands."
 ],
 "nug": [
  {
   "h": "My whole heart",
   "b": "\"I will praise thee with my whole heart: before the gods will I sing praise unto thee\" (Psalm 138:1). David's praise is wholehearted and public, even in a world full of rival gods."
  },
  {
   "h": "Magnified above all his name",
   "b": "\"For thou hast magnified thy word above all thy name\" (Psalm 138:2). God has bound his own reputation to what he has promised."
  },
  {
   "h": "Thou answeredst me",
   "b": "\"In the day when I cried thou answeredst me, and strengthenedst me with strength in my soul\" (Psalm 138:3). The answer comes as inward strength as much as changed circumstances."
  },
  {
   "h": "Respect unto the lowly",
   "b": "\"Though the LORD be high, yet hath he respect unto the lowly: but the proud he knoweth afar off\" (Psalm 138:6). The most exalted God looks with favour on the humble."
  },
  {
   "h": "He will perfect",
   "b": "\"The LORD will perfect that which concerneth me: thy mercy, O LORD, endureth for ever: forsake not the works of thine own hands\" (Psalm 138:8). David rests on God's finishing what he has begun."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 57:15 · Philippians 1:6 · James 4:6",
   "qs": [
    {
     "th": "Isaiah 57 describes the high and holy One who also dwells with the humble, Philippians 1:6 promises that he who began a good work will complete it, and James 4:6 says God resisteth the proud but giveth grace to the humble.",
     "q": "Read these alongside Psalm 138 — how do they deepen your confidence that God both hears the lowly and finishes his work?"
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
     "th": "David can say, \"In the day when I cried thou answeredst me\" (Psalm 138:3).",
     "q": "Think of a time you cried out and were met with strength, even if the situation stayed hard. What does that memory tell you about praying for others now?"
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
     "th": "David expects that the kings of the earth will one day praise the LORD.",
     "q": "Ask the Spirit to give you a heart for leaders and people of influence, and to show you who he wants you to carry before him today."
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
     "th": "\"The LORD will perfect that which concerneth me\" (Psalm 138:8) can be prayed for others too.",
     "q": "Take that confidence and pray it over particular people, family, friends, church, leaders, asking God to finish what he has started in each life and not to forsake the works of his own hands."
    }
   ]
  }
 ]
},
// Day 487
{
 "ref": "Joshua 23",
 "tag": "Old Testament",
 "api": "joshua+23",
 "sum": [
  "A long time after the LORD gave Israel rest, Joshua, old and stricken in age, calls all Israel, their elders, heads, judges and officers, and reminds them that the LORD their God \"is he that hath fought for you.\"",
  "He charges them to be very courageous to keep all that is written in the book of the law of Moses, and not to mingle with the nations that remain, nor make mention of their gods, nor serve them.",
  "He calls them to cleave unto the LORD and to love him, noting that one man of them shall chase a thousand because the LORD fights for them.",
  "He warns that if they go back and intermarry with these nations, they will become snares, traps, scourges and thorns, and that just as all good things have come to pass, so may evil things, until they perish from off the good land."
 ],
 "nug": [
  {
   "h": "The LORD hath fought for you",
   "b": "\"For the LORD your God is he that hath fought for you\" (Joshua 23:3). Joshua begins by pointing away from himself and toward God as the true victor."
  },
  {
   "h": "Cleave unto the LORD",
   "b": "\"But cleave unto the LORD your God, as ye have done unto this day\" (Joshua 23:8). The word cleave carries the sense of clinging, like a marriage bond."
  },
  {
   "h": "Love the LORD",
   "b": "\"Take good heed therefore unto yourselves, that ye love the LORD your God\" (Joshua 23:11). At the centre of Joshua's farewell is love, not merely rule-keeping."
  },
  {
   "h": "Snares and traps",
   "b": "If they compromise with the nations, \"they shall be snares and traps unto you, and scourges in your sides, and thorns in your eyes\" (Joshua 23:13). The warning is sober: what we welcome in can hurt us."
  },
  {
   "h": "Not one thing hath failed",
   "b": "\"Not one thing hath failed of all the good things which the LORD your God spake concerning you\" (Joshua 23:14). Joshua's testimony is that God's record is unbroken."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 10:20-21 · 1 Kings 2:1-3 · Hebrews 3:12-14",
   "qs": [
    {
     "th": "Deuteronomy 10 tells Israel to fear the LORD, serve him and cleave to him, 1 Kings 2 records another old leader, David, giving a parting charge using the words 'the way of all the earth,' and Hebrews 3 warns believers against a heart of unbelief that departs from the living God.",
     "q": "Read these alongside Joshua 23 — what do these farewell words teach about how faith can be passed on and kept from drifting?"
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
     "th": "Joshua's warning is not about a single dramatic rebellion but about small compromises that slowly become snares.",
     "q": "Where in your life might something you have quietly allowed in be beginning to grip you? What would it mean to cleave to the LORD instead?"
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
     "th": "Joshua's final counsel has both comfort, the LORD fights for you, and challenge, take good heed.",
     "q": "Ask the Spirit to speak to you about your love for the LORD, and to show you one place where your affection has cooled."
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
     "th": "\"Take good heed therefore unto yourselves, that ye love the LORD your God\" (Joshua 23:11).",
     "q": "Be still for a few minutes and read this verse slowly, several times. Let the words rest in the silence and listen for what the Lord may say about your love for him."
    }
   ]
  }
 ]
},
// Day 488
{
 "ref": "John 2",
 "tag": "New Testament",
 "api": "john+2",
 "sum": [
  "On the third day there is a marriage in Cana of Galilee, where the wine runs out; Jesus's mother tells the servants, \"Whatsoever he saith unto you, do it,\" and Jesus has six stone waterpots filled with water.",
  "The water becomes wine, and the governor of the feast says to the bridegroom, \"thou hast kept the good wine until now,\" which John calls the beginning of miracles in which Jesus \"manifested forth his glory; and his disciples believed on him.\"",
  "At the Passover in Jerusalem, Jesus finds the temple full of those selling oxen, sheep and doves, makes a scourge of small cords, drives them out, and says, \"make not my Father's house an house of merchandise.\"",
  "Asked for a sign, he answers, \"Destroy this temple, and in three days I will raise it up,\" speaking of the temple of his body, and John notes that many believed in his name, but Jesus did not commit himself to them, for he knew what was in man."
 ],
 "nug": [
  {
   "h": "Do whatever he says",
   "b": "\"Whatsoever he saith unto you, do it\" (John 2:5). Mary's words to the servants are a simple pattern for obedience, given before anything has happened."
  },
  {
   "h": "Manifested his glory",
   "b": "\"This beginning of miracles did Jesus in Cana of Galilee, and manifested forth his glory; and his disciples believed on him\" (John 2:11). John calls the miracles signs of who Jesus is."
  },
  {
   "h": "A house of merchandise",
   "b": "\"Take these things hence; make not my Father's house an house of merchandise\" (John 2:16). Jesus's zeal is aimed at religious life that has been turned into a market."
  },
  {
   "h": "The temple of his body",
   "b": "\"Destroy this temple, and in three days I will raise it up\" (John 2:19). John explains, \"But he spake of the temple of his body\" (John 2:21), pointing ahead to the resurrection."
  },
  {
   "h": "He knew what was in man",
   "b": "\"And needed not that any should testify of man: for he knew what was in man\" (John 2:25). Jesus is not fooled by enthusiasm, and sees the human heart entirely."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 25:6 · Psalm 69:9 · Malachi 3:1",
   "qs": [
    {
     "th": "Isaiah 25 pictures a feast of wine on the lees prepared by the LORD, Psalm 69:9 speaks of zeal for God's house that consumes, and Malachi 3:1 promises that the Lord will suddenly come to his temple.",
     "q": "Read these alongside John 2 — how do the wedding at Cana and the cleansing of the temple both show Jesus arriving as the promised Lord?"
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
     "th": "Jesus drove out the traders because worship had become a business, and he saw past crowds who believed in him to what was really in them.",
     "q": "Where has your faith become transactional, something you do to get what you want from God? Where might there be a gap between what you show and what he sees?"
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
     "th": "Jesus knew what was in man, so there is nothing we can hide from him.",
     "q": "Ask the Spirit to shine gentle, honest light into your heart, and to show you anything you are hiding or avoiding."
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
     "th": "\"For he knew what was in man\" (John 2:25) can feel unsettling, and also comforting.",
     "q": "Confess what the Spirit has shown you, without excuses, and receive Christ's forgiveness and cleansing."
    }
   ]
  }
 ]
},
// Day 489
{
 "ref": "Psalm 140",
 "tag": "Psalms & Wisdom",
 "api": "psalms+140",
 "sum": [
  "David cries, \"Deliver me, O LORD, from the evil man: preserve me from the violent man,\" describing enemies who imagine mischiefs in their heart and gather continually for war.",
  "Their tongues are sharpened like a serpent's and adders' poison is under their lips; the proud have hidden a snare, cords and a net for him by the wayside.",
  "David tells the LORD, \"Thou art my God,\" thanks him for covering his head in the day of battle, and asks that the wicked not be granted their desires, praying that the mischief of their own lips cover them.",
  "He closes with confidence, \"I know that the LORD will maintain the cause of the afflicted, and the right of the poor,\" and with the assurance that the righteous shall give thanks unto his name and the upright dwell in his presence."
 ],
 "nug": [
  {
   "h": "Deliver me",
   "b": "\"Deliver me, O LORD, from the evil man: preserve me from the violent man\" (Psalm 140:1). David's first move is simple and urgent: he asks God for rescue."
  },
  {
   "h": "Sharpened tongues",
   "b": "\"They have sharpened their tongues like a serpent; adders' poison is under their lips\" (Psalm 140:3). Words can wound like venom, and this psalm takes that seriously."
  },
  {
   "h": "A hidden snare",
   "b": "\"The proud have hid a snare for me, and cords; they have spread a net by the wayside\" (Psalm 140:5). Danger comes in unseen forms as well as open ones."
  },
  {
   "h": "Covered my head",
   "b": "\"O GOD the Lord, the strength of my salvation, thou hast covered my head in the day of battle\" (Psalm 140:7). David looks back with gratitude for protection already given."
  },
  {
   "h": "The cause of the afflicted",
   "b": "\"I know that the LORD will maintain the cause of the afflicted, and the right of the poor\" (Psalm 140:12). His confidence rests on God's character as defender of those with no defender."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 64:2-4 · James 3:5-8 · Romans 12:19-21",
   "qs": [
    {
     "th": "Psalm 64 describes a similar attack of whetted tongues and hidden snares, James 3 speaks of the tongue as a fire that no man can tame, and Romans 12 tells believers to leave vengeance to God and to overcome evil with good.",
     "q": "Read these alongside Psalm 140 — how do they help you pray honestly about people who hurt you while leaving justice in God's hands?"
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
     "th": "David does not hide his fear of violent and deceitful people, and he does not take matters into his own hands.",
     "q": "Is there someone or something you fear right now? What would it look like to say to God, as David does, \"Thou art my God\" (Psalm 140:6), and hand it over?"
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
     "th": "Some of David's words are fierce, such as \"Let burning coals fall upon them\" (Psalm 140:10), and they are the cry of a man who needs God to act.",
     "q": "Ask the Spirit to help you bring even your strongest feelings honestly to God, and to keep them from turning into words or actions that would harm someone else."
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
     "th": "\"Surely the righteous shall give thanks unto thy name: the upright shall dwell in thy presence\" (Psalm 140:13).",
     "q": "Thank God for times he has covered your head in a day of battle, and for the promise that you may dwell in his presence."
    }
   ]
  }
 ]
},
// Day 490
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "All came to pass",
   "b": "\"There failed not ought of any good thing which the LORD had spoken unto the house of Israel; all came to pass\" (Joshua 21:45). This week's readings closed the settlement of the land with this verdict on God's faithfulness, while Psalm 138 and 140 kept praying that he would finish what he began."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the cities given to the Levites and the summary of God's kept promises (Joshua 21), the altar by the Jordan and the near-war that a conversation resolved (Joshua 22), Psalm 138's praise for God's answered prayer, Joshua's farewell to the leaders of Israel (Joshua 23), the wedding at Cana and the cleansing of the temple (John 2), and Psalm 140's cry for deliverance. Next comes Joshua 24, the last chapter of the book.",
     "q": "Which line challenged you more this week, Joshua's charge, \"Take good heed therefore unto yourselves, that ye love the LORD your God\" (Joshua 23:11), or Mary's simple instruction, \"Whatsoever he saith unto you, do it\" (John 2:5)? Why?"
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
     "th": "\"The LORD will perfect that which concerneth me: thy mercy, O LORD, endureth for ever\" (Psalm 138:8).",
     "q": "Sit quietly for a moment, and simply rest in his mercy before you move on."
    }
   ]
  }
 ]
},
// Day 491
{
 "ref": "Joshua 24",
 "tag": "Old Testament",
 "api": "joshua+24",
 "sum": [
  "At Shechem Joshua gathers all the tribes and, speaking for the LORD, retraces their story from Terah and Abraham beyond the flood, through Isaac, Jacob, Egypt, the Red Sea, the wilderness and the Jordan, to Jericho and the Amorites, reminding them, \"I have given you a land for which ye did not labour, and cities which ye built not.\"",
  "On that basis Joshua calls the people to fear the LORD, put away every other god, and decide for themselves: \"choose you this day whom ye will serve... but as for me and my house, we will serve the LORD.\"",
  "The people promise loyalty, Joshua warns them honestly that \"Ye cannot serve the LORD: for he is an holy God,\" and the covenant is made and written down, with a great stone set up under the oak at Shechem as a witness.",
  "Joshua dies at a hundred and ten and is buried in his own inheritance, the bones of Joseph are laid to rest in Shechem, and Eleazar the priest dies too, closing the book of Joshua."
 ],
 "nug": [
  {
   "h": "Received, not earned",
   "b": "\"And I have given you a land for which ye did not labour, and cities which ye built not, and ye dwell in them\" (Joshua 24:13). Joshua begins with what God has done, so that every later demand rests on grace already given."
  },
  {
   "h": "Choose you this day",
   "b": "\"Choose you this day whom ye will serve\" (Joshua 24:15). Neutrality is not on offer: every life serves something, and Joshua asks Israel to decide with open eyes."
  },
  {
   "h": "As for me and my house",
   "b": "\"But as for me and my house, we will serve the LORD\" (Joshua 24:15). Joshua does not wait to see what the crowd decides; he states his own household's settled course."
  },
  {
   "h": "A holy and jealous God",
   "b": "\"Ye cannot serve the LORD: for he is an holy God; he is a jealous God\" (Joshua 24:19). Joshua tests the easy promise, because God cannot be added to a collection of other loyalties."
  },
  {
   "h": "Israel served the LORD",
   "b": "\"And Israel served the LORD all the days of Joshua\" (Joshua 24:31). One faithful leader shapes a whole generation, though Judges will soon show how fragile that faithfulness proves to be."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 30:19-20 · Exodus 19:3-8 · Matthew 6:24",
   "qs": [
    {
     "th": "Deuteronomy 30 sets the same choice before Israel through Moses, Exodus 19 records the first time the people promised to do all the LORD had spoken, and Jesus says in Matthew that no one can serve two masters.",
     "q": "Read these together with Joshua 24 — what do they show you about the difference between a promise made in a moment of enthusiasm and a choice that holds for a lifetime?"
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
     "th": "\"Now therefore put away, said he, the strange gods which are among you, and incline your heart unto the LORD God of Israel\" (Joshua 24:23).",
     "q": "What are the quiet rivals for your loyalty today, and what would it look like to put one of them away, and to choose the LORD again in a practical way this week?"
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
     "th": "Joshua warned the people, \"Ye cannot serve the LORD\" (Joshua 24:19), meaning that they could not do so in their own strength and with divided hearts.",
     "q": "Ask the Spirit to show you where your commitment is still divided, and to give you a wholehearted desire to follow the LORD rather than simply the resolve to try harder."
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
     "th": "\"Fear the LORD, and serve him in sincerity and in truth\" (Joshua 24:14).",
     "q": "Spend your prayer simply adoring the God who brought his people out of Egypt and gave them a land they did not labour for; name what you have seen of his holiness, his faithfulness and his jealous love for his people."
    }
   ]
  }
 ]
},
// Day 492
{
 "ref": "Judges 1",
 "tag": "Old Testament",
 "api": "judges+1",
 "sum": [
  "After the death of Joshua the tribes ask the LORD who should go up first against the Canaanites, and he answers, \"Judah shall go up: behold, I have delivered the land into his hand.\" Judah and Simeon fight together and defeat Adoni-bezek, who admits that God has repaid him for what he did to seventy other kings.",
  "Judah takes Jerusalem, Hebron and Debir. Caleb offers his daughter Achsah to whoever captures Kirjath-sepher, Othniel wins her, and she boldly asks her father for springs of water to go with the dry land he gave her.",
  "Other tribes are less successful: Judah cannot drive out those with chariots of iron, Benjamin leaves the Jebusites in Jerusalem, and the house of Joseph takes Bethel, but Manasseh, Ephraim, Zebulun, Asher, Naphtali and Dan all fail to drive out the Canaanites fully.",
  "The chapter closes with a repeated, sobering pattern in which Israel becomes strong and simply puts the Canaanites to tribute instead of driving them out, while Dan is pushed back into the hills by the Amorites."
 ],
 "nug": [
  {
   "h": "Who shall go up first?",
   "b": "\"Who shall go up for us against the Canaanites first, to fight against them?\" (Judges 1:1). The book opens as Israel asks the right question, and the LORD answers, \"Judah shall go up\" (Judges 1:2)."
  },
  {
   "h": "As I have done, so God hath requited me",
   "b": "Adoni-bezek confesses, \"Threescore and ten kings, having their thumbs and their great toes cut off, gathered their meat under my table: as I have done, so God hath requited me\" (Judges 1:7). The chapter does not hide the brutality of the age, and even a cruel king recognises a moral order at work."
  },
  {
   "h": "Give me a blessing",
   "b": "Achsah asks her father, \"Give me a blessing; for thou hast given me a south land; give me also springs of water\" (Judges 1:15). Her bold, practical request is granted generously, and it stands out as an example of faith in a chapter of failures."
  },
  {
   "h": "Chariots of iron",
   "b": "\"And the LORD was with Judah; and he drave out the inhabitants of the mountain; but could not drive out the inhabitants of the valley, because they had chariots of iron\" (Judges 1:19). The LORD's presence is not in doubt; Israel's fear of the enemy's iron seems to be the problem."
  },
  {
   "h": "Strong, yet not obedient",
   "b": "\"And it came to pass, when Israel was strong, that they put the Canaanites to tribute, and did not utterly drive them out\" (Judges 1:28). Strength turned into compromise, and the seeds of the coming cycle of Judges are planted here."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joshua 15:13-19 · Numbers 33:55-56 · Psalm 106:34-36",
   "qs": [
    {
     "th": "Joshua 15 tells the story of Caleb, Othniel and Achsah from the earlier point of view, Numbers 33 records the LORD's warning about what would happen if the inhabitants were left in the land, and Psalm 106 looks back on the same failure as the root of Israel's later idolatry.",
     "q": "Read these alongside Judges 1 — how does knowing the warning beforehand and the consequences afterwards change the way you read this list of things left undone?"
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
     "th": "Israel did not drive the Canaanites out, but put them to tribute, which was easier and more profitable than obeying fully.",
     "q": "Is there something in your own life that you have decided to manage or tolerate instead of dealing with honestly, because it was easier or more comfortable?"
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
     "th": "Achsah asked for what she needed and received \"the upper springs and the nether springs\" (Judges 1:15).",
     "q": "Ask the Spirit to give you the same boldness to ask your heavenly Father for what you truly need, and the honesty to notice where you have settled for less."
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
     "th": "\"Who shall go up for us against the Canaanites first?\" (Judges 1:1).",
     "q": "Pray for those who lead and go first in your family, church, school or community, asking God to give them wisdom to seek his direction, courage to finish what they start, and people who will stand with them."
    }
   ]
  }
 ]
},
// Day 493
{
 "ref": "Psalm 141",
 "tag": "Psalms & Wisdom",
 "api": "psalms+141",
 "sum": [
  "David cries to the LORD to hurry to him and hear him, asking that his prayer be received \"as incense\" and the lifting up of his hands \"as the evening sacrifice.\"",
  "He asks God to guard his mouth and his heart, keeping him from evil words, wicked works and the tempting \"dainties\" of those who do wrong.",
  "He welcomes correction from the righteous as a kindness and an \"excellent oil,\" while his prayer stands against the wickedness of others, whose judges are brought low.",
  "He ends looking to the LORD as his trust and asking to be kept from the snares set for him, while the wicked fall into their own nets and he escapes."
 ],
 "nug": [
  {
   "h": "Prayer as incense",
   "b": "\"Let my prayer be set forth before thee as incense; and the lifting up of my hands as the evening sacrifice\" (Psalm 141:2). David asks that his prayer be as fragrant and acceptable to God as the daily offerings in the sanctuary."
  },
  {
   "h": "A watch on my mouth",
   "b": "\"Set a watch, O LORD, before my mouth; keep the door of my lips\" (Psalm 141:3). David asks God to be the doorkeeper of his speech, knowing that he cannot guard it well alone."
  },
  {
   "h": "Incline not my heart",
   "b": "\"Incline not my heart to any evil thing, to practise wicked works with men that work iniquity: and let me not eat of their dainties\" (Psalm 141:4). Temptation often comes attractively, and David asks God to steer the heart before the hand moves."
  },
  {
   "h": "Let the righteous smite me",
   "b": "\"Let the righteous smite me; it shall be a kindness\" (Psalm 141:5). The psalmist welcomes correction from a godly friend, and sees it as help and not as an attack."
  },
  {
   "h": "Mine eyes are unto thee",
   "b": "\"But mine eyes are unto thee, O GOD the Lord: in thee is my trust; leave not my soul destitute\" (Psalm 141:8). The psalm closes by turning from danger and temptation to fix his eyes on the LORD."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Revelation 8:3-4 · Proverbs 13:3 · Proverbs 27:6",
   "qs": [
    {
     "th": "Revelation 8 pictures the prayers of the saints rising before God like incense, Proverbs 13 says that guarding one's mouth guards one's life, and Proverbs 27 says that the wounds of a friend are faithful.",
     "q": "Read these together with Psalm 141 — how do prayer, careful speech and honest correction from others belong together in a life that seeks God?"
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
     "th": "\"Set a watch, O LORD, before my mouth; keep the door of my lips\" (Psalm 141:3).",
     "q": "Where have your words caused harm or been careless recently, and what small, practical guard could you set at that door today?"
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
     "th": "David asks God to \"incline not my heart to any evil thing\" (Psalm 141:4), and trusts him to shape his desires as well as his actions.",
     "q": "Ask the Spirit to show you where your heart is leaning towards something that is not good, and to draw you gently back."
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
     "th": "\"Let my prayer be set forth before thee as incense\" (Psalm 141:2).",
     "q": "Come quietly before God for a few minutes with no list of requests, and simply listen; if something comes to mind, such as a word, a name or a correction, note it and ask whether it is from him."
    }
   ]
  }
 ]
},
// Day 494
{
 "ref": "Judges 2",
 "tag": "Old Testament",
 "api": "judges+2",
 "sum": [
  "The angel of the LORD comes up from Gilgal to Bochim and reminds Israel that God brought them out of Egypt and would never break his covenant, yet they did not obey his command to make no league with the inhabitants and to throw down their altars; the people lift up their voice and weep, and sacrifice there.",
  "Joshua's generation serves the LORD as long as it lives, but \"there arose another generation after them, which knew not the LORD, nor yet the works which he had done for Israel,\" and the people turn to Baal and Ashtaroth.",
  "In anger the LORD gives them into the hands of enemies, then in pity raises up judges to deliver them, but each time the judge dies they return and \"corrupted themselves more than their fathers.\"",
  "Because the nation breaks the covenant, the LORD says he will no longer drive out the nations left by Joshua, but will use them to prove whether Israel will keep the way of the LORD."
 ],
 "nug": [
  {
   "h": "They wept, and they did not change",
   "b": "\"And it came to pass, when the angel of the LORD spake these words unto all the children of Israel, that the people lifted up their voice, and wept\" (Judges 2:4). The place is named Bochim, meaning weepers, but tears alone do not stop what follows."
  },
  {
   "h": "Another generation",
   "b": "\"And there arose another generation after them, which knew not the LORD, nor yet the works which he had done for Israel\" (Judges 2:10). Faith is never simply inherited; each generation has to be told the story and come to know God for itself."
  },
  {
   "h": "The LORD raised up judges",
   "b": "\"Nevertheless the LORD raised up judges, which delivered them out of the hand of those that spoiled them\" (Judges 2:16). Even in the middle of failure, the LORD's mercy keeps providing rescuers."
  },
  {
   "h": "Worse than their fathers",
   "b": "\"They returned, and corrupted themselves more than their fathers, in following other gods\" (Judges 2:19). The cycle of sin, oppression, cry and rescue does not lift the nation; each round goes deeper."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 6:6-7 · Psalm 78:5-8 · Hebrews 3:12-13",
   "qs": [
    {
     "th": "Deuteronomy 6 tells parents to teach God's words diligently to their children, Psalm 78 explains that the law was given so that each generation would set its hope in God, and Hebrews 3 warns believers to encourage one another daily so that no one is hardened by sin.",
     "q": "Read these with Judges 2 — how might the failure of one generation to pass on the story have been prevented, and what does that say about the daily habits that keep faith alive?"
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
     "th": "\"There arose another generation after them, which knew not the LORD\" (Judges 2:10).",
     "q": "What are you doing, deliberately, to pass on what you know of God's faithfulness to children, or to those younger in the faith, and what is one thing you could add this week?"
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
     "th": "The people wept at Bochim, but sorrow did not become lasting change.",
     "q": "Ask the Spirit to show you the difference between being sorry that you have been caught, and a change of heart that leads to a change of direction, and where you need the second."
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
     "th": "\"And ye shall make no league with the inhabitants of this land; ye shall throw down their altars: but ye have not obeyed my voice: why have ye done this?\" (Judges 2:2).",
     "q": "Bring to God, honestly and by name, the places where you have known what he asked and not done it; confess them plainly, and receive his forgiveness rather than only your own regret."
    }
   ]
  }
 ]
},
// Day 495
{
 "ref": "John 3",
 "tag": "New Testament",
 "api": "john+3",
 "sum": [
  "Nicodemus, a Pharisee and a ruler of the Jews, comes to Jesus by night, and Jesus tells him that \"Except a man be born again, he cannot see the kingdom of God,\" explaining that this new birth is of water and the Spirit, who like the wind blows where he wills.",
  "Jesus reminds Nicodemus of the bronze serpent in the wilderness and says that the Son of man must likewise be lifted up, so that whoever believes may have eternal life, and speaks the words known as John 3:16, that God so loved the world that he gave his only begotten Son.",
  "Jesus explains that God sent the Son not to condemn the world but to save it, yet that the light has come and people love darkness because their deeds are evil, while those who do the truth come to the light.",
  "John the Baptist, asked about Jesus baptising nearby, calls himself the friend of the bridegroom who rejoices, says \"He must increase, but I must decrease,\" and testifies that whoever believes on the Son has everlasting life."
 ],
 "nug": [
  {
   "h": "Born again",
   "b": "\"Except a man be born again, he cannot see the kingdom of God\" (John 3:3). Nicodemus is a teacher of Israel, yet Jesus tells him that religious learning is not enough and that God has to give new life."
  },
  {
   "h": "The wind and the Spirit",
   "b": "\"The wind bloweth where it listeth, and thou hearest the sound thereof, but canst not tell whence it cometh, and whither it goeth: so is every one that is born of the Spirit\" (John 3:8). New birth is God's work, unseen in its working but visible in its effects."
  },
  {
   "h": "God so loved the world",
   "b": "\"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life\" (John 3:16). The gift is prompted by love, and is offered to anyone, \"whosoever.\""
  },
  {
   "h": "Not to condemn, but to save",
   "b": "\"For God sent not his Son into the world to condemn the world; but that the world through him might be saved\" (John 3:17). Jesus' purpose in coming is rescue."
  },
  {
   "h": "He must increase",
   "b": "\"He must increase, but I must decrease\" (John 3:30). John the Baptist's joy in stepping back is a model of how to serve Christ without needing to be seen."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 21:4-9 · Ezekiel 36:25-27 · Romans 8:14-16",
   "qs": [
    {
     "th": "Numbers 21 tells the story of the serpent lifted up that Jesus points to, Ezekiel 36 promises clean water and a new spirit that Nicodemus should have recognised as a teacher of Israel, and Romans 8 describes the Spirit bearing witness that we are children of God.",
     "q": "Read these together with John 3 — how do they help you see new birth as both an old promise and a present reality?"
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
     "th": "Nicodemus came \"by night\" (John 3:2), with questions he may not have wanted to ask in public.",
     "q": "What honest questions about faith are you carrying that you have not yet brought to Jesus, and what is holding you back from asking him plainly?"
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
     "th": "\"So is every one that is born of the Spirit\" (John 3:8).",
     "q": "Ask the Spirit to make his work in you clearer, and to show where he is already at work, even where you cannot see where the wind is coming from or going to."
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
     "th": "\"For God so loved the world, that he gave his only begotten Son\" (John 3:16).",
     "q": "Thank God specifically for the love shown in giving his Son, for the new life he has given you, and for a particular way you have known that love this week."
    }
   ]
  }
 ]
},
// Day 496
{
 "ref": "Psalm 142",
 "tag": "Psalms & Wisdom",
 "api": "psalms+142",
 "sum": [
  "Headed as a prayer of David when he was in the cave, the psalm opens with him crying to the LORD with his voice and pouring out his complaint and his trouble before him.",
  "When his spirit is overwhelmed, he says God still knows his path, even though a snare has been hidden for him and he looks around to find that nobody will acknowledge him or care for his soul.",
  "He then cries out to the LORD, \"Thou art my refuge and my portion in the land of the living,\" and asks to be heard because he is brought very low and his persecutors are stronger than he is.",
  "He asks to be brought out of prison so that he can praise God's name, confident that the righteous will gather around him because the LORD will deal bountifully with him."
 ],
 "nug": [
  {
   "h": "Pouring out the complaint",
   "b": "\"I poured out my complaint before him; I shewed before him my trouble\" (Psalm 142:2). The psalm gives permission to bring God the unedited version of our troubles."
  },
  {
   "h": "Thou knewest my path",
   "b": "\"When my spirit was overwhelmed within me, then thou knewest my path\" (Psalm 142:3). Even when the psalmist can no longer see his way, God has never lost sight of it."
  },
  {
   "h": "No man cared for my soul",
   "b": "\"I looked on my right hand, and beheld, but there was no man that would know me: refuge failed me; no man cared for my soul\" (Psalm 142:4). It is a picture of the deepest loneliness, and the psalm brings it straight to God."
  },
  {
   "h": "My refuge and my portion",
   "b": "\"I cried unto thee, O LORD: I said, Thou art my refuge and my portion in the land of the living\" (Psalm 142:5). In the cave, with nothing else, David claims the LORD himself as all he has."
  },
  {
   "h": "Bring my soul out of prison",
   "b": "\"Bring my soul out of prison, that I may praise thy name\" (Psalm 142:7). Deliverance is asked for so that praise can follow, and the prayer ends looking beyond the cave."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Samuel 22:1-2 · Psalm 57:1-3 · Hebrews 4:15-16",
   "qs": [
    {
     "th": "1 Samuel 22 sets the scene of David in the cave of Adullam with a band of distressed and discontented men, Psalm 57 is another prayer from a cave in which he takes refuge in the shadow of God's wings, and Hebrews 4 invites us to come boldly to the throne of grace because Jesus sympathises with our weakness.",
     "q": "Read these together with Psalm 142 — what do they teach you about praying when you feel forgotten and hemmed in?"
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
     "th": "\"I poured out my complaint before him; I shewed before him my trouble\" (Psalm 142:2).",
     "q": "Is there a complaint or trouble you have been carrying alone, or telling everyone except God, and what would it mean to pour it out before him now?"
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
     "th": "\"Thou knewest my path\" (Psalm 142:3).",
     "q": "Ask the Spirit to remind you that God knows exactly where you are in a situation that feels confusing or overwhelming, and to give you the next step."
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
     "th": "\"Thou art my refuge and my portion in the land of the living\" (Psalm 142:5).",
     "q": "Adore God for being enough when everything else has failed: name what he is to you, such as refuge, portion, the one who knows your path, and praise him for it, even from the cave."
    }
   ]
  }
 ]
},
// Day 497
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Thou art my refuge and my portion",
   "b": "\"I cried unto thee, O LORD: I said, Thou art my refuge and my portion in the land of the living\" (Psalm 142:5). This week began by closing the book of Joshua and opening Judges, and it ends with a man in a cave who finds that the LORD himself is enough."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the end of the book of Joshua, the covenant at Shechem and Joshua's death (Joshua 24), the beginning of the book of Judges and Israel's partial obedience (Judges 1), the failure of the next generation to know the LORD (Judges 2), the night visit of Nicodemus (John 3), and two prayers of David from under pressure (Psalm 141 and 142). With Joshua 24 you have now completed the whole book of Joshua.",
     "q": "Which stays with you more this week — Joshua's challenge, \"choose you this day whom ye will serve\" (Joshua 24:15), or John the Baptist's simple words, \"He must increase, but I must decrease\" (John 3:30)? Why?"
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
     "th": "\"I cried unto thee, O LORD: I said, Thou art my refuge and my portion in the land of the living\" (Psalm 142:5).",
     "q": "Sit quietly for a moment, and simply rest in the LORD as your refuge and portion before you move on."
    }
   ]
  }
 ]
},
// Day 498
{
 "ref": "Judges 3",
 "tag": "Old Testament",
 "api": "judges+3",
 "sum": [
  "The LORD leaves certain nations in the land to test Israel and teach a new generation war, but Israel lives among them, intermarries and serves their gods, so the LORD gives them into the power of Chushan-rishathaim, king of Mesopotamia, for eight years.",
  "When Israel cries out, the LORD raises up Othniel, Caleb's younger kinsman, on whom the Spirit of the LORD comes; he defeats the oppressor, and the land has rest for forty years until Othniel dies.",
  "Israel does evil again and is oppressed by Eglon of Moab, and the LORD raises up Ehud, a left-handed Benjamite, who brings tribute to Eglon and kills him with a hidden blade, then rallies Israel to defeat Moab, and the land has rest for eighty years.",
  "The chapter closes with a brief note that Shamgar the son of Anath struck down six hundred Philistines with an ox goad and also delivered Israel."
 ],
 "nug": [
  {
   "h": "The LORD raised up a deliverer",
   "b": "\"And when the children of Israel cried unto the LORD, the LORD raised up a deliverer to the children of Israel\" (Judges 3:9). The cycle begins with a cry and a rescuer, and mercy always comes before any merit."
  },
  {
   "h": "The Spirit of the LORD",
   "b": "\"And the Spirit of the LORD came upon him, and he judged Israel, and went out to war\" (Judges 3:10). Othniel's power comes from the Spirit, not from his own strength or standing."
  },
  {
   "h": "Ehud, a man lefthanded",
   "b": "Ehud is introduced as \"a man lefthanded\" (Judges 3:15). God often uses the overlooked and unlikely, and the account is candid about a violent and difficult deed of an unsettled age."
  },
  {
   "h": "The LORD hath delivered",
   "b": "\"Follow after me: for the LORD hath delivered your enemies the Moabites into your hand\" (Judges 3:28). Ehud's confidence is not in his own plan but in the LORD who has given the victory."
  },
  {
   "h": "Rest for the land",
   "b": "\"And the land had rest fourscore years\" (Judges 3:30). The rests in the book are remarkable, but they last only as long as the deliverers live."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 7:3-4 · Joshua 15:16-17 · Hebrews 11:32-34",
   "qs": [
    {
     "th": "Deuteronomy 7 warns that intermarriage with the nations would turn Israel's hearts to other gods, Joshua 15 tells of Othniel first winning Kirjath-sepher and Achsah, and Hebrews 11 lists the judges among those who through faith subdued kingdoms and were made strong out of weakness.",
     "q": "Read these together with Judges 3 — how do the warning, the first appearance of Othniel and the later commendation help you see both the failure and the faith in this chapter?"
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
     "th": "Israel \"took their daughters to be their wives, and gave their daughters to their sons, and served their gods\" (Judges 3:6).",
     "q": "Where might you be slowly taking on the values and habits of the surrounding culture, without ever deciding to, and what would it take to notice it honestly?"
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
     "th": "\"The Spirit of the LORD came upon him\" (Judges 3:10).",
     "q": "Ask the Spirit to equip you for whatever he has put in front of you now, and to help you rely on his power rather than on your own ability or the lack of it."
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
     "th": "\"The LORD raised up a deliverer to the children of Israel\" (Judges 3:9).",
     "q": "Pray for people you know who are under some kind of oppression or bondage, such as fear, addiction, injustice or illness, asking the LORD to raise up help for them, and to make you willing to be part of the answer where he asks."
    }
   ]
  }
 ]
},
// Day 499
{
 "ref": "Judges 4",
 "tag": "Old Testament",
 "api": "judges+4",
 "sum": [
  "After Ehud dies Israel does evil again, and the LORD sells them into the hand of Jabin king of Canaan, whose commander Sisera has nine hundred chariots of iron and oppresses Israel mightily for twenty years until they cry to the LORD.",
  "Deborah, a prophetess who judges Israel under a palm tree, summons Barak and passes on the LORD's command to take ten thousand men to mount Tabor; Barak agrees only if she will go with him, and she warns that the honour of the victory will go to a woman.",
  "At the river Kishon the LORD routs Sisera and all his chariots, and the whole army falls by the sword, while Sisera himself flees on foot to the tent of Jael, the wife of Heber the Kenite.",
  "Jael welcomes Sisera, gives him milk and a place to sleep, and then kills him while he sleeps; Barak arrives to find him dead, and Israel presses on until Jabin is destroyed."
 ],
 "nug": [
  {
   "h": "A prophetess who judged",
   "b": "\"And Deborah, a prophetess, the wife of Lapidoth, she judged Israel at that time\" (Judges 4:4). In a chaotic period Israel is led by a woman who listens to God and speaks his word."
  },
  {
   "h": "Hath not the LORD commanded?",
   "b": "\"Hath not the LORD God of Israel commanded, saying, Go and draw toward mount Tabor\" (Judges 4:6). Deborah's authority rests entirely on a command she has heard from God."
  },
  {
   "h": "If thou wilt go with me",
   "b": "\"If thou wilt go with me, then I will go: but if thou wilt not go with me, then I will not go\" (Judges 4:8). Barak's response mixes a real need for support with hesitation, and Deborah agrees but tells him the honour will go elsewhere."
  },
  {
   "h": "Is not the LORD gone out before thee?",
   "b": "\"Up; for this is the day in which the LORD hath delivered Sisera into thine hand: is not the LORD gone out before thee?\" (Judges 4:14). The battle is won because the LORD goes ahead of his people."
  },
  {
   "h": "God subdued Jabin",
   "b": "\"So God subdued on that day Jabin the king of Canaan before the children of Israel\" (Judges 4:23). The writer gives the credit to God, and the final rescue is not credited to chariots or generals."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 15:20-21 · Joshua 11:1-11 · Luke 1:46-52",
   "qs": [
    {
     "th": "Exodus 15 introduces Miriam the prophetess leading the women in praise after the Red Sea, Joshua 11 records an earlier victory over another Jabin king of Hazor whose people were the seed of this later oppression, and Mary's song in Luke 1 celebrates God who \"hath put down the mighty from their seats.\"",
     "q": "Read these together with Judges 4 — what do you notice about the way God repeatedly uses unexpected people and unlikely methods to overturn the powerful?"
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
     "th": "Deborah's role was to hear the word of the LORD and pass it on, and Barak's hesitation was a struggle to trust what she told him.",
     "q": "Is there something you have sensed God asking of you where you keep waiting for more assurance, more support or a better plan before you move?"
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
     "th": "\"Hath not the LORD God of Israel commanded?\" (Judges 4:6).",
     "q": "Ask the Spirit for a quiet, listening heart, and a clear sense of what God is saying to you now rather than what you would like him to say."
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
     "th": "\"Is not the LORD gone out before thee?\" (Judges 4:14).",
     "q": "Spend a few minutes in silence, resting in the truth that the LORD goes before you into whatever lies ahead; do not fill the silence with requests, but wait, and note anything he brings to mind."
    }
   ]
  }
 ]
},
// Day 500
{
 "ref": "Psalm 143",
 "tag": "Psalms & Wisdom",
 "api": "psalms+143",
 "sum": [
  "David begs the LORD to hear his prayer and answer him in his faithfulness and righteousness, and asks him not to enter into judgment with his servant, because \"in thy sight shall no man living be justified.\"",
  "He describes his distress, with the enemy having crushed his life to the ground and his spirit overwhelmed and his heart desolate, and he calls to mind the days of old and the works of God's hands.",
  "He spreads out his hands to God, longing for him \"as a thirsty land,\" and asks to hear God's lovingkindness in the morning and to be shown the way he should walk.",
  "He asks to be taught to do God's will, to be led by his good Spirit into \"the land of uprightness,\" and to be revived and delivered for God's name's sake."
 ],
 "nug": [
  {
   "h": "In thy faithfulness answer me",
   "b": "\"Hear my prayer, O LORD, give ear to my supplications: in thy faithfulness answer me, and in thy righteousness\" (Psalm 143:1). David does not appeal to his own record but to God's character."
  },
  {
   "h": "No man living is justified",
   "b": "\"And enter not into judgment with thy servant: for in thy sight shall no man living be justified\" (Psalm 143:2). It is one of the clearest statements in the Psalms that nobody can stand on their own merit before God."
  },
  {
   "h": "I remember the days of old",
   "b": "\"I remember the days of old; I meditate on all thy works; I muse on the work of thy hands\" (Psalm 143:5). When the present is dark, David deliberately calls to mind what God has done."
  },
  {
   "h": "My soul thirsteth",
   "b": "\"I stretch forth my hands unto thee: my soul thirsteth after thee, as a thirsty land\" (Psalm 143:6). His deepest need is for God himself, and not only for rescue from trouble."
  },
  {
   "h": "Teach me to do thy will",
   "b": "\"Teach me to do thy will; for thou art my God: thy spirit is good; lead me into the land of uprightness\" (Psalm 143:10). He asks to be taught obedience, and expects to be led by God's good Spirit."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 3:19-24 · Psalm 130:3-4 · Galatians 2:16",
   "qs": [
    {
     "th": "Romans 3 quotes this psalm's truth that no flesh will be justified in God's sight by the law and points to the free gift in Christ, Psalm 130 asks who could stand if the LORD marked iniquities and answers with forgiveness, and Galatians 2 says that a person is justified by faith in Jesus Christ.",
     "q": "Read these together with Psalm 143 — how does this psalm's honest plea, \"enter not into judgment,\" find its answer in the New Testament?"
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
     "th": "\"In thy sight shall no man living be justified\" (Psalm 143:2).",
     "q": "Where are you tempted to rely on your own record, effort or comparison with others in your relationship with God, and what would it mean to rest instead on his mercy?"
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
     "th": "\"Thy spirit is good; lead me into the land of uprightness\" (Psalm 143:10).",
     "q": "Ask the Holy Spirit to lead you gently and to show you what needs to change, trusting that his guidance is good and not harsh."
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
     "th": "\"Enter not into judgment with thy servant: for in thy sight shall no man living be justified\" (Psalm 143:2).",
     "q": "Confess to God honestly what you know needs confessing today, without excuses or comparison, and then ask him for the lovingkindness you need to hear in the morning, receiving his forgiveness as a gift."
    }
   ]
  }
 ]
},
// Day 501
{
 "ref": "Judges 5",
 "tag": "Old Testament",
 "api": "judges+5",
 "sum": [
  "Deborah and Barak sing a victory song, praising the LORD \"for the avenging of Israel, when the people willingly offered themselves,\" and calling kings and princes to hear as she sings to the LORD God of Israel.",
  "The song looks back to the LORD marching from Seir, when the earth trembled at his presence, and to the empty highways in the days of Shamgar and Jael, until Deborah arose \"a mother in Israel.\"",
  "The song calls the tribes by name, praising those who came to the fight, from Ephraim, Machir, Zebulun and Naphtali, questioning Reuben's hesitation, and cursing Meroz for not coming to the help of the LORD, while the stars fight from heaven and the river Kishon sweeps the enemy away.",
  "Jael is blessed above women, and the song turns to Sisera's mother waiting at the window for a son who does not return, before ending with the prayer that all the LORD's enemies perish and those who love him be as the rising sun; the land has rest for forty years."
 ],
 "nug": [
  {
   "h": "Praise for the willing",
   "b": "\"Praise ye the LORD for the avenging of Israel, when the people willingly offered themselves\" (Judges 5:2). The song begins with praise and gives thanks for those who volunteered, and it does not neglect either."
  },
  {
   "h": "I will sing unto the LORD",
   "b": "\"I, even I, will sing unto the LORD; I will sing praise to the LORD God of Israel\" (Judges 5:3). Deborah's first response to victory is worship, not celebration of herself."
  },
  {
   "h": "A mother in Israel",
   "b": "\"The inhabitants of the villages ceased, they ceased in Israel, until that I Deborah arose, that I arose a mother in Israel\" (Judges 5:7). She names herself by a title of care, and leadership as a form of nurture."
  },
  {
   "h": "The stars fought",
   "b": "\"They fought from heaven; the stars in their courses fought against Sisera\" (Judges 5:20). The poem uses vivid language to say that creation itself served the LORD's purposes in the battle."
  },
  {
   "h": "Those who love him",
   "b": "\"So let all thine enemies perish, O LORD: but let them that love him be as the sun when he goeth forth in his might\" (Judges 5:31). The song closes with a prayer for the lasting victory of God's people, and then the note that the land had rest."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 15:1-3 · 1 Samuel 2:1-5 · Psalm 68:7-8",
   "qs": [
    {
     "th": "Exodus 15 is the first great victory song of Israel after the Red Sea, Hannah's prayer in 1 Samuel 2 also celebrates God who brings down the mighty and lifts the weak, and Psalm 68 echoes the same picture of God marching before his people and the earth shaking.",
     "q": "Read these together with Judges 5 — what do you notice about how God's people have responded in song to his deliverance, and what does that suggest for how you might respond?"
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
     "th": "Deborah's song thanks the LORD and also names, by tribe, those who helped and those who held back.",
     "q": "Who has come to help you in a time of need, and have you told them so? Is there someone you should thank today, by name and in specific terms?"
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
     "th": "\"The people willingly offered themselves\" (Judges 5:2).",
     "q": "Ask the Spirit to give you a willing heart to offer yourself for what God asks, and to show you where you have hung back like the divisions of Reuben."
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
     "th": "\"I, even I, will sing unto the LORD; I will sing praise to the LORD God of Israel\" (Judges 5:3).",
     "q": "Thank God for particular victories and deliverances in your own story, and if you can, sing or speak a line of praise aloud as Deborah did."
    }
   ]
  }
 ]
},
// Day 502
{
 "ref": "John 4",
 "tag": "New Testament",
 "api": "john+4",
 "sum": [
  "Travelling through Samaria, Jesus, \"wearied with his journey,\" sits by Jacob's well and asks a Samaritan woman for a drink, which surprises her because \"the Jews have no dealings with the Samaritans\"; he offers her living water that will become \"a well of water springing up into everlasting life.\"",
  "Jesus shows he knows her past and present, and when she raises the question of where to worship, he tells her that the hour is coming when true worshippers \"shall worship the Father in spirit and in truth,\" and openly declares, \"I that speak unto thee am he.\"",
  "The woman leaves her water pot and tells the town, \"Come, see a man, which told me all things that ever I did: is not this the Christ?\" while Jesus tells his disciples that his food is to do the will of the one who sent him and points to the fields ready for harvest.",
  "Many Samaritans believe and, after two days, say that they know he is \"the Saviour of the world,\" and then in Galilee Jesus heals a nobleman's son at Capernaum from a distance, saying, \"Go thy way; thy son liveth,\" which is the second sign in Galilee."
 ],
 "nug": [
  {
   "h": "Wearied with his journey",
   "b": "\"Jesus therefore, being wearied with his journey, sat thus on the well\" (John 4:6). The Son of God is really tired and really thirsty, and he sits down where a woman no one else would speak to comes."
  },
  {
   "h": "If thou knewest the gift of God",
   "b": "\"If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water\" (John 4:10). The one who asks for a drink is the giver of what she most needs."
  },
  {
   "h": "In spirit and in truth",
   "b": "\"God is a Spirit: and they that worship him must worship him in spirit and in truth\" (John 4:24). Worship is not tied to a mountain or a building, but to the heart and to the truth about God revealed in Jesus."
  },
  {
   "h": "The Father seeketh worshippers",
   "b": "\"For the Father seeketh such to worship him\" (John 4:23). The astonishing point is that God takes the initiative, seeking those who will worship him."
  },
  {
   "h": "The Saviour of the world",
   "b": "\"For we have heard him ourselves, and know that this is indeed the Christ, the Saviour of the world\" (John 4:42). The Samaritans move from believing on a woman's word to hearing Jesus himself."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 55:1-3 · Jeremiah 2:13 · Revelation 22:17",
   "qs": [
    {
     "th": "Isaiah 55 invites the thirsty to come to the waters, Jeremiah 2 describes God's people forsaking the fountain of living waters for broken cisterns, and Revelation 22 closes the Bible with the invitation for the thirsty to take the water of life freely.",
     "q": "Read these together with John 4 — how do they fill out what Jesus means by \"living water\" and who it is offered to?"
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
     "th": "Jesus crossed cultural and moral lines to meet a woman at a well in the heat of the day.",
     "q": "Is there anyone you have avoided or written off, and what might it look like to approach them with the same open, respectful attention that Jesus showed?"
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
     "th": "\"God is a Spirit: and they that worship him must worship him in spirit and in truth\" (John 4:24).",
     "q": "Ask the Spirit to move your worship from routine to reality, and to show you where you have been going through the motions."
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
     "th": "\"The Father seeketh such to worship him\" (John 4:23).",
     "q": "Adore the Father who seeks worshippers, and the Son who sat at a well to meet one; praise him for who he is, the giver of living water, and for the fact that he came looking for you."
    }
   ]
  }
 ]
},
// Day 503
{
 "ref": "Psalm 144",
 "tag": "Psalms & Wisdom",
 "api": "psalms+144",
 "sum": [
  "David blesses the LORD, his strength, who teaches his hands to war and his fingers to fight, calling him his goodness, fortress, high tower, deliverer, shield and the one who subdues people under him.",
  "He marvels that God takes notice of humanity at all, asking \"LORD, what is man, that thou takest knowledge of him!\" and reflecting that \"Man is like to vanity: his days are as a shadow that passeth away,\" before asking God to come down and deliver him from the hand of strange children.",
  "He promises to sing a new song to God on a harp of ten strings, praising the one who gives salvation to kings and delivers David from the hurtful sword.",
  "He prays for his people, asking that their sons and daughters would flourish and their land and flocks be blessed and secure, and ends, \"Happy is that people, whose God is the LORD.\""
 ],
 "nug": [
  {
   "h": "Blessed be the LORD my strength",
   "b": "\"Blessed be the LORD my strength which teacheth my hands to war, and my fingers to fight\" (Psalm 144:1). David credits God for his skills and his strength, seeing his training as a gift."
  },
  {
   "h": "What is man?",
   "b": "\"LORD, what is man, that thou takest knowledge of him! or the son of man, that thou makest account of him!\" (Psalm 144:3). David is amazed that the God of all creation should notice him at all."
  },
  {
   "h": "A shadow that passeth away",
   "b": "\"Man is like to vanity: his days are as a shadow that passeth away\" (Psalm 144:4). The shortness of life is a reason to hold it humbly and lean on the God who lasts."
  },
  {
   "h": "A new song",
   "b": "\"I will sing a new song unto thee, O God: upon a psaltery and an instrument of ten strings will I sing praises unto thee\" (Psalm 144:9). Every rescue deserves fresh praise."
  },
  {
   "h": "Happy is that people",
   "b": "\"Happy is that people, that is in such a case: yea, happy is that people, whose God is the LORD\" (Psalm 144:15). The psalm ends with a simple, generous vision of a whole people whose true happiness is the LORD himself."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 8:3-4 · Psalm 18:32-34 · James 4:13-15",
   "qs": [
    {
     "th": "Psalm 8 asks the same wondering question about humanity in the light of the heavens, Psalm 18 is another psalm in which David says God taught his hands to war, and James 4 reminds us that life is \"even a vapour\" and that we should say \"If the Lord will.\"",
     "q": "Read these together with Psalm 144 — how do they hold together human smallness and God's astonishing attention to us?"
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
     "th": "\"LORD, what is man, that thou takest knowledge of him!\" (Psalm 144:3).",
     "q": "When did you last stop to wonder that God knows and cares about you, and where might you have been living as though your days, your strength and your plans were entirely your own?"
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
     "th": "David asks that God be his \"fortress,\" \"high tower\" and \"deliverer\" (Psalm 144:2).",
     "q": "Ask the Spirit to show you which of those names of God you most need to lean on at the moment, and to make it real to you."
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
     "th": "\"That our sons may be as plants grown up in their youth\" (Psalm 144:12).",
     "q": "Pray for the young people in your life, and for your household, community and nation: ask that they would grow strong, be kept safe from harm, and come to know that the LORD is their God."
    }
   ]
  }
 ]
},
// Day 504
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Whose God is the LORD",
   "b": "\"Happy is that people, that is in such a case: yea, happy is that people, whose God is the LORD\" (Psalm 144:15). A week of judges, deliverers and songs of victory ends on a quiet answer to what makes a people truly blessed."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the first deliverers of the book of Judges, Othniel, Ehud and Shamgar (Judges 3), the story of Deborah, Barak and Jael and the song that followed (Judges 4-5), Jesus and the Samaritan woman at the well and the healing of the nobleman's son (John 4), and two more psalms of David, one of confession and dependence (Psalm 143) and one of praise and prayer for a nation (Psalm 144).",
     "q": "Which stays with you more this week — Deborah's question, \"is not the LORD gone out before thee?\" (Judges 4:14), or Jesus' promise to the woman at the well that the water he gives \"shall be in him a well of water springing up into everlasting life\" (John 4:14)? Why?"
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
     "th": "\"Cause me to hear thy lovingkindness in the morning; for in thee do I trust\" (Psalm 143:8).",
     "q": "Sit quietly for a moment, and simply rest in his lovingkindness before you move on."
    }
   ]
  }
 ]
},
// Day 505
{
 "ref": "Judges 6",
 "tag": "Old Testament",
 "api": "judges+6",
 "sum": [
  "Israel again does evil in the sight of the LORD, who gives them into the hand of Midian for seven years; the invaders come up \"as grasshoppers for multitude,\" strip the land, and drive Israel into dens and caves until the people cry out to the LORD, who sends a prophet to remind them of the God who brought them out of Egypt.",
  "The angel of the LORD finds Gideon threshing wheat by the winepress to hide it from the Midianites and greets him, \"The LORD is with thee, thou mighty man of valour\"; Gideon protests that the LORD seems to have forsaken them and that he is \"the least in my father's house,\" yet hears the promise, \"Surely I will be with thee.\"",
  "Gideon asks for a sign, and fire rises from the rock to consume his offering; afraid he will die, he is told, \"Peace be unto thee; fear not,\" and builds an altar he names Jehovah-shalom. That same night, at the LORD's command, he pulls down his father's altar of Baal, and when the town demands his death his father Joash answers, \"Let Baal plead against him.\"",
  "Midian and its allies gather in the valley of Jezreel, and the Spirit of the LORD comes upon Gideon, who blows a trumpet and summons the tribes; even so he asks God for a further sign, a fleece wet with dew while the ground is dry, and then the reverse, and God graciously does both."
 ],
 "nug": [
  {
   "h": "Mighty man of valour, hiding in a winepress",
   "b": "\"The LORD is with thee, thou mighty man of valour\" (Judges 6:12). The angel greets Gideon by what God sees in him, not by what he is doing, which is threshing wheat in a winepress to hide it from the enemy."
  },
  {
   "h": "An honest complaint",
   "b": "Gideon says, \"if the LORD be with us, why then is all this befallen us?\" (Judges 6:13). God does not rebuke the question; he answers it by sending Gideon himself to be part of the answer."
  },
  {
   "h": "The least, and God with him",
   "b": "\"Behold, my family is poor in Manasseh, and I am the least in my father's house\" (Judges 6:15). God's reply does not deny the weakness: \"Surely I will be with thee\" (Judges 6:16)."
  },
  {
   "h": "Fear not: thou shalt not die",
   "b": "\"Peace be unto thee; fear not: thou shalt not die\" (Judges 6:23). Gideon fears he has seen God and will perish, and the first thing God gives him is peace, which is why the altar is named for it."
  },
  {
   "h": "The fleece is not a model",
   "b": "\"let me prove, I pray thee, but this once with the fleece\" (Judges 6:39). God had already said, \"Surely I will be with thee\" (Judges 6:16), so the fleece shows a man still needing reassurance more than a method for finding guidance, and God is patient with him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 3:11-12 · 1 Corinthians 1:26-29 · Hebrews 11:32-34",
   "qs": [
    {
     "th": "Moses also answered God's call with \"Who am I?\" and heard the same promise of presence, Paul says God chooses the weak and the low to shame the strong, and Hebrews lists Gideon among those who \"out of weakness were made strong.\"",
     "q": "Read these together with Judges 6. What do you notice about the way God answers people who feel too small for what he asks?"
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
     "th": "Gideon was hiding his wheat when God called him a mighty man of valour.",
     "q": "Where are you hiding something, or hiding yourself, and what might God be calling you by that you have not yet believed about yourself?"
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
     "th": "\"But the Spirit of the LORD came upon Gideon\" (Judges 6:34).",
     "q": "Ask the Spirit to show you one small step of obedience like the one Gideon took in the night, and then wait and see whether he brings anything to mind."
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
     "th": "\"And the LORD said unto him, Peace be unto thee; fear not: thou shalt not die\" (Judges 6:23).",
     "q": "Sit in silence for a few minutes and let that word of peace be spoken to you. Do not fill the quiet with requests; simply listen, and note anything God brings to mind."
    }
   ]
  }
 ]
},
// Day 506
{
 "ref": "Judges 7",
 "tag": "Old Testament",
 "api": "judges+7",
 "sum": [
  "Gideon and his army camp by the well of Harod, and the LORD says the people are too many, \"lest Israel vaunt themselves against me, saying, Mine own hand hath saved me\"; twenty-two thousand who are fearful go home, leaving ten thousand.",
  "The LORD thins the army again at the water, and only the three hundred who lapped are kept: \"By the three hundred men that lapped will I save you.\"",
  "That night God sends Gideon down to the enemy camp with his servant Phurah, where he overhears a soldier's dream of a barley cake overturning a tent and his friend's interpretation, \"This is nothing else save the sword of Gideon,\" and Gideon worships.",
  "Gideon divides the three hundred into three companies armed with trumpets, empty pitchers and lamps, and at the signal they cry, \"The sword of the LORD, and of Gideon\"; the Midianite host flees in panic, and the men of Israel and Ephraim pursue, taking the princes Oreb and Zeeb."
 ],
 "nug": [
  {
   "h": "Too many for me",
   "b": "The LORD tells Gideon the army is too large, \"lest Israel vaunt themselves against me, saying, Mine own hand hath saved me\" (Judges 7:2). God shrinks the numbers so that no one can take the credit."
  },
  {
   "h": "Fear is allowed to leave",
   "b": "\"Whosoever is fearful and afraid, let him return and depart early from mount Gilead\" (Judges 7:3). God does not shame the fearful; he simply does not need their strength, and twenty-two thousand go home."
  },
  {
   "h": "Three hundred",
   "b": "\"By the three hundred men that lapped will I save you, and deliver the Midianites into thine hand\" (Judges 7:7). The rescue is set up so that the odds, not the soldiers, tell the story."
  },
  {
   "h": "Go down, and hear",
   "b": "God says, \"Arise, get thee down unto the host; for I have delivered it into thine hand\" (Judges 7:9), and yet offers Gideon a gentle way to steady his fear if he needs it. Strengthened by what he hears, he worships before he fights (Judges 7:15)."
  },
  {
   "h": "The sword of the LORD, and of Gideon",
   "b": "Gideon's men cry \"The sword of the LORD, and of Gideon\" (Judges 7:20). They hold lamps and trumpets and do not fight, and it is the LORD who sets \"every man's sword against his fellow\" (Judges 7:22)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Samuel 14:6 · 2 Corinthians 12:9-10 · Zechariah 4:6",
   "qs": [
    {
     "th": "Jonathan trusted that the LORD can save by many or by few, Paul learned that Christ's strength is made perfect in weakness, and Zechariah was told that God's work is done \"Not by might, nor by power, but by my spirit.\"",
     "q": "Read these together with Judges 7. What do they teach you about why God so often chooses small numbers and weak instruments?"
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
     "th": "God reduced Israel's army so that they could not say, \"Mine own hand hath saved me\" (Judges 7:2).",
     "q": "Where do you quietly take the credit for something God has done, or rely on your own strength, planning or cleverness more than on him?"
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
     "th": "\"And the LORD said unto Gideon, The people that are with thee are too many for me\" (Judges 7:2).",
     "q": "Ask the Spirit to show you honestly where you are trusting in numbers, resources or ability instead of him, and let him name it gently."
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
     "th": "\"lest Israel vaunt themselves against me, saying, Mine own hand hath saved me\" (Judges 7:2).",
     "q": "Confess to God the ways you have said, in words or in attitude, \"Mine own hand hath saved me.\" Name one specific area, ask his forgiveness, and hand the outcome back to him."
    }
   ]
  }
 ]
},
// Day 507
{
 "ref": "Psalm 145",
 "tag": "Psalms & Wisdom",
 "api": "psalms+145",
 "sum": [
  "This is David's Psalm of praise, an alphabetical acrostic, and it opens with a vow of lifelong worship: \"Every day will I bless thee; and I will praise thy name for ever and ever,\" with each generation praising God's works to the next.",
  "The psalm names who God is: \"The LORD is gracious, and full of compassion; slow to anger, and of great mercy,\" good to all, with an everlasting kingdom and dominion through all generations.",
  "It then turns to what he does: he upholds all that fall, gives every living thing its food in due season, and \"is nigh unto all them that call upon him... in truth,\" fulfilling the desire of those who fear him and preserving all who love him.",
  "The psalm closes as it began, with David's resolve to speak the LORD's praise and the call for \"all flesh\" to bless his holy name for ever and ever."
 ],
 "nug": [
  {
   "h": "Every day",
   "b": "\"Every day will I bless thee; and I will praise thy name for ever and ever\" (Psalm 145:2). Praise here is a daily habit, not an occasional feeling."
  },
  {
   "h": "One generation to another",
   "b": "\"One generation shall praise thy works to another, and shall declare thy mighty acts\" (Psalm 145:4). Faith is meant to be passed on by telling, so what God has done for you is worth saying aloud to someone younger."
  },
  {
   "h": "Gracious, slow to anger",
   "b": "\"The LORD is gracious, and full of compassion; slow to anger, and of great mercy\" (Psalm 145:8). David is echoing how God described himself to Moses, and he builds the whole psalm on that description."
  },
  {
   "h": "He upholds all that fall",
   "b": "\"The LORD upholdeth all that fall, and raiseth up all those that be bowed down\" (Psalm 145:14). God's strength is shown most in lifting people who cannot lift themselves."
  },
  {
   "h": "Nigh to all who call",
   "b": "\"The LORD is nigh unto all them that call upon him, to all that call upon him in truth\" (Psalm 145:18). Nearness is promised to those who call honestly, and not only to the eloquent or the spiritual."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 34:6-7 · Psalm 103:8-13 · Matthew 6:26-30",
   "qs": [
    {
     "th": "Exodus 34 is where God first proclaims his own name as merciful and gracious, Psalm 103 sings the same description with tender images of a father's pity, and Jesus points to the birds and lilies as living proof that God \"openest thine hand\" to feed his creatures.",
     "q": "Read these together with Psalm 145. How do they deepen your sense of God's character, and which line makes you most thankful?"
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
     "th": "\"Thou openest thine hand, and satisfiest the desire of every living thing\" (Psalm 145:16).",
     "q": "What has God provided for you in recent days, big or small, that you have received without pausing to notice where it came from?"
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
     "th": "\"The LORD upholdeth all that fall, and raiseth up all those that be bowed down\" (Psalm 145:14).",
     "q": "Ask the Spirit to bring to mind a time God lifted you up when you had fallen, and to let the memory warm you."
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
     "th": "\"Every day will I bless thee; and I will praise thy name for ever and ever\" (Psalm 145:2).",
     "q": "Give thanks to God for particular things: three ways he has been gracious, one way he has provided, and one way he has been near when you called. Say them aloud."
    }
   ]
  }
 ]
},
// Day 508
{
 "ref": "Judges 8",
 "tag": "Old Testament",
 "api": "judges+8",
 "sum": [
  "The men of Ephraim chide Gideon sharply for not calling them to the fight, and he defuses their anger with a humble answer, praising what they did in taking the princes Oreb and Zeeb.",
  "Gideon and his three hundred cross the Jordan, \"faint, yet pursuing,\" but the towns of Succoth and Penuel refuse them bread; he captures the kings Zebah and Zalmunna, punishes the two towns harshly on his return, and kills the kings for having slain his brothers at Tabor.",
  "Israel offers to make Gideon their ruler, and he answers rightly, \"I will not rule over you, neither shall my son rule over you: the LORD shall rule over you\"; yet he then asks for the plunder of gold and makes an ephod, which all Israel goes after, \"a snare unto Gideon, and to his house.\"",
  "The land has quiet for forty years, Gideon dies in a good old age, and Israel promptly turns again to Baal and \"remembered not the LORD their God\"; Gideon's son Abimelech by his concubine in Shechem is named, setting the stage for the next chapter."
 ],
 "nug": [
  {
   "h": "A soft answer",
   "b": "Gideon says to angry Ephraim, \"What have I done now in comparison of you?\" (Judges 8:2), and the chapter reports, \"Then their anger was abated toward him\" (Judges 8:3). A humble word ended a quarrel that might have split the tribes."
  },
  {
   "h": "Faint, yet pursuing",
   "b": "\"And Gideon came to Jordan, and passed over, he, and the three hundred men that were with him, faint, yet pursuing them\" (Judges 8:4). Weariness and faithfulness go together here, which is worth remembering when obedience feels heavy."
  },
  {
   "h": "A sober aftermath",
   "b": "Gideon does what he threatened at Succoth and Penuel, and \"he beat down the tower of Penuel, and slew the men of the city\" (Judges 8:17). The chapter records the violence plainly and without applause, and the reader is left to weigh it."
  },
  {
   "h": "The LORD shall rule over you",
   "b": "\"I will not rule over you, neither shall my son rule over you: the LORD shall rule over you\" (Judges 8:23). Gideon says exactly the right thing about kingship, and then acts against it."
  },
  {
   "h": "A snare",
   "b": "Gideon's golden ephod \"became a snare unto Gideon, and to his house\" (Judges 8:27). A great man of faith leaves behind a stumbling block, and Israel quickly forgets, as the chapter puts it, that they \"remembered not the LORD their God\" (Judges 8:34)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 32:2-4 · 1 Samuel 8:6-7 · Proverbs 15:1",
   "qs": [
    {
     "th": "The golden earrings gathered for Gideon's ephod recall the golden calf that Aaron made from Israel's earrings, Israel's later demand for a king shows what happens when the LORD is not left to rule, and Proverbs 15 names the wisdom of the soft answer Gideon gave to Ephraim.",
     "q": "Read these together with Judges 8. Where do you see people turning something good into something they worship in place of God?"
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
     "th": "Gideon refused the crown in words, \"the LORD shall rule over you\" (Judges 8:23), but his ephod drew Israel's devotion to himself.",
     "q": "Is there something in your life, even a good thing, that has quietly become the object of your devotion in place of the LORD?"
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
     "th": "\"And the country was in quietness forty years in the days of Gideon\" (Judges 8:28).",
     "q": "Ask the Spirit to help you put God back at the centre of what you love, and to show you any ephod you have built."
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
     "th": "\"the LORD shall rule over you\" (Judges 8:23).",
     "q": "Worship the LORD as the only true King. Praise him for ruling justly and faithfully, and name qualities of his reign that Gideon, and every other ruler, could never provide."
    }
   ]
  }
 ]
},
// Day 509
{
 "ref": "John 5",
 "tag": "New Testament",
 "api": "john+5",
 "sum": [
  "At the pool of Bethesda in Jerusalem, Jesus asks a man who has been ill for thirty-eight years, \"Wilt thou be made whole?\" and heals him with the words, \"Rise, take up thy bed, and walk\"; because it is the sabbath, the authorities object, and Jesus later finds the man in the temple and says, \"sin no more, lest a worse thing come unto thee.\"",
  "The authorities persecute Jesus for the healing, and he answers, \"My Father worketh hitherto, and I work,\" which leads them to seek to kill him because he is \"making himself equal with God.\"",
  "Jesus describes the Son's relationship with the Father, saying that the Son does what he sees the Father do, gives life to whom he will, and has been given authority to judge, and promises that \"He that heareth my word, and believeth on him that sent me, hath everlasting life... but is passed from death unto life.\"",
  "Jesus names the witnesses to himself, John the Baptist, his own works, the Father, and the Scriptures, and tells them, \"Search the scriptures... they are they which testify of me... And ye will not come to me, that ye might have life\"; he adds that Moses wrote of him."
 ],
 "nug": [
  {
   "h": "Wilt thou be made whole?",
   "b": "\"When Jesus saw him lie, and knew that he had been now a long time in that case, he saith unto him, Wilt thou be made whole?\" (John 5:6). The man answers with an excuse, \"I have no man... to put me into the pool\" (John 5:7), and Jesus heals him without addressing it."
  },
  {
   "h": "Rise, take up thy bed",
   "b": "\"Rise, take up thy bed, and walk\" (John 5:8). Jesus gives no ritual and no waiting for the water, and the healing takes place at his word."
  },
  {
   "h": "Working with the Father",
   "b": "\"My Father worketh hitherto, and I work\" (John 5:17). His opponents rightly understood that he was claiming a unique relationship with God, and it was the heart of the dispute."
  },
  {
   "h": "Passed from death unto life",
   "b": "\"He that heareth my word, and believeth on him that sent me, hath everlasting life, and shall not come into condemnation; but is passed from death unto life\" (John 5:24). It is stated as a present reality for the one who believes, and not only as a future hope."
  },
  {
   "h": "Searching without coming",
   "b": "\"Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me. And ye will not come to me, that ye might have life\" (John 5:39-40). It is possible to know the Bible well and still not come to the One it points to."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Mark 2:27-28 · Luke 24:25-27 · Romans 8:1",
   "qs": [
    {
     "th": "Mark records Jesus teaching that the sabbath was made for man and that he is Lord of it, Luke shows him on the Emmaus road opening all the Scriptures to show how they speak of himself, and Paul draws out what \"passed from death unto life\" means: there is now no condemnation for those in Christ.",
     "q": "Read these together with John 5. How does seeing Jesus as Lord of the sabbath and the goal of Scripture change the way you read this chapter?"
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
     "th": "The man at the pool had waited thirty-eight years and said, \"I have no man\" (John 5:7).",
     "q": "Who do you know who feels they have no one, and what would it cost you to be that person's friend this week?"
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
     "th": "\"Search the scriptures... and they are they which testify of me\" (John 5:39).",
     "q": "Ask the Spirit to make the Scriptures a way of coming to Jesus this week, and not only of learning about him."
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
     "th": "\"Wilt thou be made whole?\" (John 5:6).",
     "q": "Pray for those who have been waiting a long time for healing, for those who feel they have no one, and for those who know the Bible but have not yet come to Jesus. Name them and ask him to ask each one, \"Wilt thou be made whole?\""
    }
   ]
  }
 ]
},
// Day 510
{
 "ref": "Psalm 146",
 "tag": "Psalms & Wisdom",
 "api": "psalms+146",
 "sum": [
  "The psalm begins with a personal resolve, \"Praise the LORD, O my soul,\" and a vow to sing praises to God \"while I have any being.\"",
  "It warns against misplaced trust: \"Put not your trust in princes, nor in the son of man, in whom there is no help,\" because a person's breath goes out, he returns to the earth, and his plans perish.",
  "By contrast, \"Happy is he that hath the God of Jacob for his help,\" the Maker of heaven and earth who keeps truth for ever.",
  "The psalm lists what the LORD does, executing judgment for the oppressed, feeding the hungry, freeing prisoners, opening the eyes of the blind, and relieving the fatherless and widow, and closes with the promise that \"The LORD shall reign for ever.\""
 ],
 "nug": [
  {
   "h": "While I live",
   "b": "\"While I live will I praise the LORD: I will sing praises unto my God while I have any being\" (Psalm 146:2). The psalmist promises praise for as long as there is breath, and that is the point of the next lines."
  },
  {
   "h": "Not in princes",
   "b": "\"Put not your trust in princes, nor in the son of man, in whom there is no help\" (Psalm 146:3). The warning is not cynicism about leaders, only a reminder that no human has the power to save."
  },
  {
   "h": "Their thoughts perish",
   "b": "\"His breath goeth forth, he returneth to his earth; in that very day his thoughts perish\" (Psalm 146:4). Even the most powerful person's plans end when their life ends, and God's do not."
  },
  {
   "h": "Happy is he",
   "b": "\"Happy is he that hath the God of Jacob for his help, whose hope is in the LORD his God\" (Psalm 146:5). Happiness in the psalm is found in whom you lean on."
  },
  {
   "h": "He relieveth the fatherless and widow",
   "b": "\"The LORD preserveth the strangers; he relieveth the fatherless and widow\" (Psalm 146:9). The God who reigns for ever is described by how he treats the people with no power."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 2:22 · Jeremiah 17:5-8 · Luke 4:18-19",
   "qs": [
    {
     "th": "Isaiah gives the same warning to stop trusting in man, whose breath is in his nostrils, Jeremiah sets the cursed man who trusts in man beside the blessed man who trusts in the LORD, and Jesus reads from Isaiah in Nazareth to say that he has come to do what Psalm 146 describes: to release captives and give sight to the blind.",
     "q": "Read these together with Psalm 146. What do they show you about where trust is safe and where it is not?"
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
     "th": "\"Put not your trust in princes, nor in the son of man, in whom there is no help\" (Psalm 146:3).",
     "q": "Where are you placing hope in a person, a leader, an institution or a plan, and what would it look like to hold that more lightly and trust God more?"
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
     "th": "\"The LORD openeth the eyes of the blind: the LORD raiseth them that are bowed down\" (Psalm 146:8).",
     "q": "Ask the Spirit to open your eyes to something you have not been able to see clearly, and to raise up any part of you that feels bowed down."
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
     "th": "\"The LORD shall reign for ever, even thy God, O Zion, unto all generations\" (Psalm 146:10).",
     "q": "Be still and let the verse settle. You do not need to say anything. Simply rest in the knowledge that he reigns, and listen for whatever he may bring to your mind."
    }
   ]
  }
 ]
},
// Day 511
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "The LORD shall rule over you",
   "b": "\"I will not rule over you, neither shall my son rule over you: the LORD shall rule over you\" (Judges 8:23). This week followed Gideon from hiding in a winepress to a golden ephod, and the words that he spoke rightly were the ones he needed most to live by."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read Gideon's call and the fleece (Judges 6), the reduction of his army to three hundred and the night victory over Midian (Judges 7), and his pursuit of the kings and the ephod that became a snare (Judges 8). You also read Psalm 145 and Psalm 146, two songs of praise to the God who upholds the fallen, and John 5, where Jesus heals at Bethesda and speaks of his unity with the Father.",
     "q": "Which moment stayed with you more this week, God's promise to Gideon, \"Surely I will be with thee\" (Judges 6:16), or the warning of the psalm, \"Put not your trust in princes, nor in the son of man, in whom there is no help\" (Psalm 146:3)? Why?"
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
     "th": "\"Happy is he that hath the God of Jacob for his help, whose hope is in the LORD his God\" (Psalm 146:5).",
     "q": "Sit quietly for a moment and rest in the truth that your help is in him."
    }
   ]
  }
 ]
},
// Day 512
{
 "ref": "Judges 9",
 "tag": "Old Testament",
 "api": "judges+9",
 "sum": [
  "Gideon's son Abimelech persuades his mother's kin at Shechem to back him, hires \"vain and light persons\" with silver from the temple of Baal-berith, and murders his seventy brothers \"upon one stone\"; only Jotham, the youngest, hides and survives, and Shechem makes Abimelech king.",
  "Jotham stands on mount Gerizim and tells a parable of the trees, in which the olive, the fig and the vine each refuse to be promoted over the trees, and only the bramble accepts, saying, \"come and put your trust in my shadow,\" and he warns Shechem that fire will come out from Abimelech and from them upon each other.",
  "After three years \"God sent an evil spirit between Abimelech and the men of Shechem\"; Gaal leads a revolt, and Abimelech crushes it, destroys the city, and burns a tower full of about a thousand men and women.",
  "At Thebez a woman drops a piece of millstone on Abimelech's head, and he asks his armourbearer to kill him so that it will not be said \"A woman slew him\"; the chapter closes, \"Thus God rendered the wickedness of Abimelech,\" and on Shechem came \"the curse of Jotham.\""
 ],
 "nug": [
  {
   "h": "Vain and light persons",
   "b": "Abimelech hires \"vain and light persons, which followed him\" (Judges 9:4) with silver taken from the house of Baal-berith. His kingdom begins with money from an idol and men who are for sale."
  },
  {
   "h": "Upon one stone",
   "b": "Abimelech \"slew his brethren the sons of Jerubbaal, being threescore and ten persons, upon one stone\" (Judges 9:5). It is one of the darkest verses in Judges, and it is told in one plain line without comment."
  },
  {
   "h": "The bramble king",
   "b": "The bramble says to the trees, \"If in truth ye anoint me king over you, then come and put your trust in my shadow\" (Judges 9:15). Jotham's parable mocks the promise of a king who is useless for shade and dangerous when lit."
  },
  {
   "h": "An evil spirit",
   "b": "\"Then God sent an evil spirit between Abimelech and the men of Shechem\" (Judges 9:23). The text presents the collapse of the alliance as God's judgment on both parties, Abimelech for the killing and Shechem for backing it."
  },
  {
   "h": "God rendered the wickedness",
   "b": "\"Thus God rendered the wickedness of Abimelech, which he did unto his father, in slaying his seventy brethren\" (Judges 9:56). The chapter ends by saying that what looked like political accident was justice, delayed but not lost."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Samuel 11:21 · Psalm 7:14-16 · Matthew 20:25-28",
   "qs": [
    {
     "th": "A later writer remembers Abimelech's death at the hands of a woman with a millstone as a warning, the psalmist says the wicked man's mischief returns on his own head, and Jesus contrasts the way rulers lord it over others with the way his followers must serve.",
     "q": "Read these together with Judges 9. What do they show you about the difference between grasping power and using it to serve?"
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
     "th": "Abimelech and the men of Shechem each thought they had gained by their scheme, and Judges says each was repaid in kind.",
     "q": "Is there any place in your own life where ambition, or the wish to be first, has led you to step over someone, or to look the other way while someone else did?"
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
     "th": "\"Thus God rendered the wickedness of Abimelech\" (Judges 9:56).",
     "q": "Ask the Spirit to search you for a motive you have not admitted, whether it is pride, grasping or a wish for control, and let him show it to you kindly."
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
     "th": "\"And all the evil of the men of Shechem did God render upon their heads\" (Judges 9:57).",
     "q": "Confess to God any ambition that has crowded out love, and any time you went along with something wrong because it benefited you. Name it honestly, receive his forgiveness, and ask for a servant's heart."
    }
   ]
  }
 ]
},
// Day 513
{
 "ref": "Judges 10",
 "tag": "Old Testament",
 "api": "judges+10",
 "sum": [
  "Two judges are named briefly: Tola of Issachar, who judged Israel twenty-three years, and Jair the Gileadite, who judged twenty-two years and had thirty sons riding thirty ass colts.",
  "Israel again does evil, serving Baalim, Ashtaroth and the gods of the surrounding nations, and \"forsook the LORD, and served not him\"; in his anger he sells them into the hand of the Philistines and the Ammonites, who oppress them eighteen years.",
  "Israel cries out, \"We have sinned against thee,\" and the LORD answers with a hard question and a hard word: \"Yet ye have forsaken me, and served other gods: wherefore I will deliver you no more. Go and cry unto the gods which ye have chosen.\"",
  "Israel repeats their confession, \"deliver us only, we pray thee, this day,\" and puts away their foreign gods; the LORD's \"soul was grieved for the misery of Israel,\" and the chapter ends with Ammon encamped in Gilead and the leaders of Gilead looking for a man to lead them."
 ],
 "nug": [
  {
   "h": "The same story, again",
   "b": "\"And the children of Israel did evil again in the sight of the LORD, and served Baalim\" (Judges 10:6). The book has been repeating this cycle, and this time the list of gods is longer than ever."
  },
  {
   "h": "Did not I deliver you?",
   "b": "\"Did not I deliver you from the Egyptians, and from the Amorites, from the children of Ammon, and from the Philistines?\" (Judges 10:11). God's answer to their cry starts with his record, which is a reminder of how much he has already done."
  },
  {
   "h": "Go and cry unto the gods",
   "b": "\"Go and cry unto the gods which ye have chosen; let them deliver you in the time of your tribulation\" (Judges 10:14). God's refusal is honest and sharp, and it exposes how empty the other gods are."
  },
  {
   "h": "Do thou unto us whatsoever",
   "b": "Israel says, \"We have sinned: do thou unto us whatsoever seemeth good unto thee; deliver us only, we pray thee, this day\" (Judges 10:15). They stop bargaining and throw themselves on his mercy, which is what real repentance sounds like."
  },
  {
   "h": "His soul was grieved",
   "b": "\"And they put away the strange gods from among them, and served the LORD: and his soul was grieved for the misery of Israel\" (Judges 10:16). After the hard words, the text shows God's heart, moved by the pain of the very people who had left him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Jeremiah 2:27-28 · Hosea 11:8 · Luke 15:17-20",
   "qs": [
    {
     "th": "Jeremiah records the same scorn for idols that cannot save in the time of trouble, Hosea shows God's heart torn between judgment and compassion, and the prodigal son in Luke 15 comes to himself, returns, and finds a father already running to meet him.",
     "q": "Read these together with Judges 10. What do they show you about the patience of God with people who keep turning away and returning?"
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
     "th": "God had every reason to leave Israel to the gods they had chosen, and instead his soul \"was grieved for the misery of Israel\" (Judges 10:16).",
     "q": "When have you been in trouble largely of your own making and found God still willing to hear you?"
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
     "th": "\"We have sinned against thee, both because we have forsaken our God, and also served Baalim\" (Judges 10:10).",
     "q": "Ask the Spirit to help you see one thing you have been tempted to turn to for rescue in place of God, and to lead you back to him."
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
     "th": "\"his soul was grieved for the misery of Israel\" (Judges 10:16).",
     "q": "Thank God for his patience, for every time he has heard you when you had wandered, for his willingness to grieve over your suffering, and for the mercy that brings you back."
    }
   ]
  }
 ]
},
// Day 514
{
 "ref": "Psalm 147",
 "tag": "Psalms & Wisdom",
 "api": "psalms+147",
 "sum": [
  "The psalm opens with a call to praise, \"for it is good to sing praises unto our God; for it is pleasant; and praise is comely,\" and declares that the LORD builds up Jerusalem and gathers the outcasts of Israel.",
  "The God who rebuilds is also the God who tends individuals: \"He healeth the broken in heart, and bindeth up their wounds,\" and the one who counts the stars and calls each by name, whose understanding is infinite.",
  "The psalm calls for singing with thanksgiving to the one who prepares rain, makes grass grow, and feeds even the young ravens; he does not delight in the strength of the horse or the legs of a man but \"taketh pleasure in them that fear him, in those that hope in his mercy.\"",
  "Jerusalem is told to praise its God, who strengthens its gates, blesses its children, makes peace in its borders, and fills it with the finest wheat; his word runs swiftly over the earth, from snow and ice to thaw, and he has shown his word to Jacob as he has to no other nation."
 ],
 "nug": [
  {
   "h": "Good, pleasant, comely",
   "b": "\"Praise ye the LORD: for it is good to sing praises unto our God; for it is pleasant; and praise is comely\" (Psalm 147:1). Praise is called good, pleasant and fitting, which is a kind way of describing something we may treat as a duty."
  },
  {
   "h": "The broken in heart",
   "b": "\"He healeth the broken in heart, and bindeth up their wounds\" (Psalm 147:3). The verse sits between two large statements, and the God who rebuilds Jerusalem is the same God who tends a single wound."
  },
  {
   "h": "Numbering the stars",
   "b": "\"He telleth the number of the stars; he calleth them all by their names\" (Psalm 147:4). The next verse gives the conclusion: \"Great is our Lord, and of great power: his understanding is infinite\" (Psalm 147:5)."
  },
  {
   "h": "Not the strength of the horse",
   "b": "\"He delighteth not in the strength of the horse: he taketh not pleasure in the legs of a man. The LORD taketh pleasure in them that fear him, in those that hope in his mercy\" (Psalm 147:10-11). God's pleasure is found in humble trust rather than in strength."
  },
  {
   "h": "His word runneth",
   "b": "\"He sendeth forth his commandment upon earth: his word runneth very swiftly\" (Psalm 147:15). Snow, frost and thaw come at his word, and the same word that governs the weather has been given to his people."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 40:26-29 · Psalm 34:17-18 · Matthew 10:29-31",
   "qs": [
    {
     "th": "Isaiah also points to the stars and to the God who calls each by name to comfort the weary, Psalm 34 says the LORD is nigh to the brokenhearted, and Jesus tells his disciples that God knows each sparrow and each hair on their head.",
     "q": "Read these together with Psalm 147. How do they hold together God's greatness over the stars and his closeness to one hurting person?"
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
     "th": "The God who names the stars is the God who binds up wounds (Psalm 147:3-4).",
     "q": "What wound, disappointment or sorrow do you most need him to bind up right now, and what has kept you from bringing it to him?"
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
     "th": "\"He healeth the broken in heart, and bindeth up their wounds\" (Psalm 147:3).",
     "q": "Ask the Spirit to bring God's healing comfort to any tender place in you, and to make his nearness real, and not only true."
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
     "th": "\"Great is our Lord, and of great power: his understanding is infinite\" (Psalm 147:5).",
     "q": "Worship God for who he is, without asking for anything. Praise him for his power over the stars, his care for the ravens, and his tenderness for the brokenhearted, and let the greatness of it fill your prayer."
    }
   ]
  }
 ]
},
// Day 515
{
 "ref": "Judges 11",
 "tag": "Old Testament",
 "api": "judges+11",
 "sum": [
  "Jephthah the Gileadite, \"a mighty man of valour,\" is the son of a harlot and is driven out by his half-brothers, and he lives in the land of Tob with a band of \"vain men\"; when Ammon makes war on Israel, the elders of Gilead who had thrown him out come to fetch him back as their captain.",
  "Jephthah reminds the elders how they treated him and agrees to lead only if he will be head over them after the victory; he then sends messengers to the king of Ammon, arguing from Israel's history in the wilderness that the land was not taken from them, but the king of Ammon does not listen.",
  "\"Then the Spirit of the LORD came upon Jephthah,\" and he makes a vow: if the LORD delivers Ammon into his hands, then \"whatsoever cometh forth of the doors of my house to meet me... shall surely be the LORD's, and I will offer it up for a burnt offering\"; the LORD delivers Ammon, and the victory is great.",
  "When Jephthah returns home, his only child, his daughter, comes out to meet him with timbrels and dances; he tears his clothes and says he cannot go back on his vow, and she answers that he must do to her according to his word, asking only for two months in the mountains with her companions; the chapter says he \"did with her according to his vow,\" and the daughters of Israel lament her four days every year."
 ],
 "nug": [
  {
   "h": "Rejected, then recruited",
   "b": "The elders who threw Jephthah out come to him when they are in trouble, and he asks, \"why are ye come unto me now when ye are in distress?\" (Judges 11:7). His pain is real, and it may help explain his need for guarantees and for a name."
  },
  {
   "h": "The Spirit came first",
   "b": "\"Then the Spirit of the LORD came upon Jephthah\" (Judges 11:29). Only after this does the text say, \"And Jephthah vowed a vow unto the LORD\" (Judges 11:30). The Spirit had already come, so the vow adds nothing, and it looks like an attempt to bargain for what God had already given."
  },
  {
   "h": "A vow with no limit",
   "b": "He promises to offer up \"whatsoever cometh forth of the doors of my house to meet me\" (Judges 11:31). It is a rash promise, made without asking who might come out first, and it is spoken without any word from God. The Law elsewhere forbids offering children (Deuteronomy 12:31)."
  },
  {
   "h": "Alas, my daughter",
   "b": "\"Alas, my daughter! thou hast brought me very low... for I have opened my mouth unto the LORD, and I cannot go back\" (Judges 11:35). His grief is genuine, and the text shows how a vow spoken carelessly can bring ruin to the people we love most."
  },
  {
   "h": "A wrestling passage",
   "b": "The text says only that he \"did with her according to his vow which he had vowed\" (Judges 11:39). Readers have long disagreed about whether she was killed or given to a life of lifelong dedication, and either way the chapter is heavy with loss. Judges makes no effort to make the story look better than it is, and the yearly lament in verse 40 shows that Israel did not either."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 12:30-31 · Ecclesiastes 5:4-5 · Hebrews 11:32-34",
   "qs": [
    {
     "th": "Deuteronomy says God abhors the offering of children, Ecclesiastes warns against rash vows, and Hebrews names Jephthah among those who through faith \"subdued kingdoms,\" a reminder that God can work through flawed people without endorsing everything they do.",
     "q": "Read these together with Judges 11. How do they help you think honestly about a chapter that is both a story of faith and a story of tragedy?"
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
     "th": "Jephthah's vow was spoken quickly and could not be undone, and his daughter carried the cost.",
     "q": "Have you ever made a promise, spoken a word or taken a stand in haste that hurt someone you love? What does it look like to bring it into the light now?"
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
     "th": "\"Then the Spirit of the LORD came upon Jephthah\" (Judges 11:29).",
     "q": "Ask the Spirit to teach you to wait on God before you speak and to give you wisdom about the words and promises you make."
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
     "th": "\"Alas, my daughter!\" (Judges 11:35).",
     "q": "Pray for people who suffer because of someone else's rash words or decisions, for children and daughters who bear the weight of adult choices, for those who have been rejected and are trying to prove themselves, and for leaders who make promises they should not. Name them to God."
    }
   ]
  }
 ]
},
// Day 516
{
 "ref": "John 6",
 "tag": "New Testament",
 "api": "john+6",
 "sum": [
  "A great crowd follows Jesus across the sea of Galilee, and he asks Philip where they can buy bread; Andrew points out a lad with \"five barley loaves, and two small fishes,\" and Jesus gives thanks and distributes them until about five thousand men are filled, and then says, \"Gather up the fragments that remain, that nothing be lost,\" filling twelve baskets. When the people want to make him king by force, he withdraws alone.",
  "That evening the disciples set out across the sea and a great wind rises; Jesus comes to them walking on the water and says, \"It is I; be not afraid,\" and immediately the boat is at the land.",
  "The crowd finds him at Capernaum, and he tells them, \"Ye seek me, not because ye saw the miracles, but because ye did eat of the loaves,\" and calls them to believe: \"This is the work of God, that ye believe on him whom he hath sent.\" He declares, \"I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.\"",
  "As Jesus speaks of eating his flesh and drinking his blood, many say \"This is an hard saying; who can hear it?\" and many disciples turn back; he asks the twelve, \"Will ye also go away?\" and Peter answers, \"Lord, to whom shall we go? thou hast the words of eternal life.\""
 ],
 "nug": [
  {
   "h": "But what are they among so many?",
   "b": "Andrew says of the lad's five barley loaves and two small fishes, \"but what are they among so many?\" (John 6:9). A small offering placed in the hands of Jesus is enough for a crowd."
  },
  {
   "h": "Nothing be lost",
   "b": "\"Gather up the fragments that remain, that nothing be lost\" (John 6:12). The abundance of the miracle does not lead to waste, and it points to the Son who will say that of all the Father has given him he should \"lose nothing\" (John 6:39)."
  },
  {
   "h": "It is I; be not afraid",
   "b": "\"But he saith unto them, It is I; be not afraid\" (John 6:20). In the dark and the wind the disciples are given no explanation, only his presence."
  },
  {
   "h": "I am the bread of life",
   "b": "\"I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst\" (John 6:35). The crowd has asked for bread, and Jesus offers himself."
  },
  {
   "h": "To whom shall we go?",
   "b": "When many turn back, Peter says, \"Lord, to whom shall we go? thou hast the words of eternal life\" (John 6:68). His answer is not a triumphant one, but it is honest and lasting: there is nowhere else to go."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 16:14-15 · Psalm 78:24-25 · Isaiah 55:1-3",
   "qs": [
    {
     "th": "Exodus tells of the manna that the crowd invokes, Psalm 78 remembers it as \"corn of heaven\" and the food of angels, and Isaiah invites all who thirst to come and buy without money, which anticipates what Jesus offers in the bread of life.",
     "q": "Read these together with John 6. How does seeing the manna and Isaiah's invitation help you understand what Jesus means by the true bread from heaven?"
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
     "th": "The crowd sought Jesus for the loaves, and Jesus asked them to look for the bread that endures (John 6:26-27).",
     "q": "What are you seeking from Jesus most often, his gifts or himself, and what would it look like to come to him for the sake of knowing him?"
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
     "th": "\"It is the spirit that quickeneth; the flesh profiteth nothing: the words that I speak unto you, they are spirit, and they are life\" (John 6:63).",
     "q": "Ask the Spirit to give you life through the words of Jesus, and to show you where you are trying to be sustained by something else."
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
     "th": "\"Lord, to whom shall we go? thou hast the words of eternal life\" (John 6:68).",
     "q": "Be quiet and let Peter's question be your own. Do not rush to an answer. Listen for what Jesus may say to you, and rest in the fact that he has the words of eternal life."
    }
   ]
  }
 ]
},
// Day 517
{
 "ref": "Psalm 148",
 "tag": "Psalms & Wisdom",
 "api": "psalms+148",
 "sum": [
  "The psalm opens with a call to the heavens, \"Praise ye the LORD from the heavens,\" and summons the angels, the hosts, the sun, moon and stars, and the waters above the heavens to praise.",
  "The reason is given: they are to praise the LORD's name, \"for he commanded, and they were created,\" and he has established them for ever with a decree that will not pass.",
  "The call then turns to the earth: \"ye dragons, and all deeps,\" fire, hail, snow, vapour and stormy wind fulfilling his word, mountains and hills, fruitful trees and cedars, beasts and cattle, creeping things and flying fowl.",
  "Finally it reaches people, kings and all peoples, young men and maidens, old men and children, all to praise a name that \"alone is excellent,\" and the psalm ends by celebrating what God has done for the horn of his people Israel."
 ],
 "nug": [
  {
   "h": "From the heavens",
   "b": "\"Praise ye the LORD from the heavens: praise him in the heights\" (Psalm 148:1). Creation is invited into worship, from the highest levels down to the deeps."
  },
  {
   "h": "He commanded, and they were created",
   "b": "\"Let them praise the name of the LORD: for he commanded, and they were created\" (Psalm 148:5). The reason for praise is the Creator's word, since nothing exists apart from it."
  },
  {
   "h": "Stormy wind fulfilling his word",
   "b": "The list includes \"Fire, and hail; snow, and vapours; stormy wind fulfilling his word\" (Psalm 148:8). Even the wild and destructive parts of creation are pictured as obedient to God."
  },
  {
   "h": "Young men and maidens",
   "b": "\"Both young men, and maidens; old men, and children\" (Psalm 148:12). The circle of praise is widened at the end to include every age and every kind of person."
  },
  {
   "h": "His name alone",
   "b": "\"Let them praise the name of the LORD: for his name alone is excellent; his glory is above the earth and heaven\" (Psalm 148:13). The psalm makes one claim about God, and the confession that follows is that we have often praised other names."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 19:1-4 · Colossians 1:16-17 · Revelation 5:13",
   "qs": [
    {
     "th": "Psalm 19 says the heavens declare the glory of God without speech, Colossians says all things were made through and for Christ and are held together in him, and Revelation pictures every creature in heaven, earth and sea joining the same chorus.",
     "q": "Read these together with Psalm 148. What do you notice about creation's praise, and about where you fit into it?"
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
     "th": "Sun, moon, hail and snow praise God by simply doing what he made them to do (Psalm 148:3, 8).",
     "q": "Where has your own life fallen silent in praise, or turned to praise something less than him, whether success, comfort, approval or control?"
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
     "th": "\"for his name alone is excellent\" (Psalm 148:13).",
     "q": "Ask the Spirit to show you where you have been giving your admiration to other names, and to restore your wonder at his."
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
     "th": "\"Let them praise the name of the LORD: for he commanded, and they were created\" (Psalm 148:5).",
     "q": "Confess the ways you have failed to praise: the ingratitude, the distraction, the things you have exalted above him. Receive his forgiveness, and then let your praise join the rest of creation's."
    }
   ]
  }
 ]
},
// Day 518
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "His name alone is excellent",
   "b": "\"Let them praise the name of the LORD: for his name alone is excellent; his glory is above the earth and heaven\" (Psalm 148:13). This week ended with the whole of creation praising the LORD, after passing through some of the hardest chapters in Judges."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read Abimelech's murderous grab for power (Judges 9), Israel's cry for rescue and the LORD's grieved response (Judges 10), and Jephthah's rash vow and its grievous cost (Judges 11). You also read Psalm 147 and Psalm 148, two songs of praise to the God who binds up wounds and commands the stars, and John 6, where Jesus feeds five thousand and declares himself the bread of life.",
     "q": "Which moment stayed with you more this week, the LORD's compassion in Judges, \"his soul was grieved for the misery of Israel\" (Judges 10:16), or Peter's answer to Jesus, \"Lord, to whom shall we go? thou hast the words of eternal life\" (John 6:68)? Why?"
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
     "th": "\"He healeth the broken in heart, and bindeth up their wounds\" (Psalm 147:3).",
     "q": "Sit quietly for a moment and rest in the care of the One who binds up wounds."
    }
   ]
  }
 ]
},
// Day 519
{
 "ref": "Judges 12",
 "tag": "Old Testament",
 "api": "judges+12",
 "sum": [
  "The men of Ephraim, offended at not being called to fight the Ammonites, threaten to burn Jephthah's house upon him; Jephthah answers that when he called them, \"ye delivered me not out of their hands,\" and that he \"put my life in my hands\" and the LORD gave the victory.",
  "The quarrel turns to civil war, and the men of Gilead take the fords of the Jordan, so that no fleeing Ephraimite can cross.",
  "Every fugitive is tested with a single word, \"Say now Shibboleth: and he said Sibboleth: for he could not frame to pronounce it right,\" and forty and two thousand of Ephraim fall.",
  "Jephthah dies after judging Israel six years, and the chapter closes with a swift list of three lesser judges, Ibzan, Elon and Abdon, whose years and families are recorded but whose deeds are not."
 ],
 "nug": [
  {
   "h": "Wounded pride, and a house on fire",
   "b": "The Ephraimites threaten, \"we will burn thine house upon thee with fire\" (Judges 12:1). Being left out of the glory stirs up a fury that a moment before had no interest in the fight."
  },
  {
   "h": "I put my life in my hands",
   "b": "\"And when I saw that ye delivered me not, I put my life in my hands, and passed over against the children of Ammon, and the LORD delivered them into my hand\" (Judges 12:3). Jephthah gives the LORD the credit, though the chapter's real drama is what follows victory."
  },
  {
   "h": "A word that could not be pronounced",
   "b": "\"Say now Shibboleth: and he said Sibboleth: for he could not frame to pronounce it right\" (Judges 12:6). Brother turns on brother over an accent, and the chapter reports it without comment, which is its own sober judgment."
  },
  {
   "h": "Forty and two thousand",
   "b": "\"And there fell at that time of the Ephraimites forty and two thousand\" (Judges 12:6). Israel, which was meant to fight the Canaanites together, has now become a nation in which tribe slays tribe."
  },
  {
   "h": "Judges who leave only a name",
   "b": "\"And after him Ibzan of Bethlehem judged Israel\" (Judges 12:8). The last three judges of the chapter pass with families and burial places recorded and no deliverance told, a quiet sign of a nation drifting."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Judges 8:1-3 · Proverbs 15:1 · Ephesians 4:1-3",
   "qs": [
    {
     "th": "In Judges 8 Gideon meets an almost identical complaint from Ephraim with a gentle answer and the quarrel dies, Proverbs 15 names the wisdom of that response, and Paul urges believers to keep the unity of the Spirit in the bond of peace.",
     "q": "Read these alongside Judges 12 — what does the contrast between Gideon's answer and Jephthah's tell you about how a conflict is won or lost before a sword is drawn?"
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
     "th": "Ephraim's anger came from being overlooked, and Jephthah's answer came from feeling abandoned.",
     "q": "Where in your own life has a hurt from feeling left out or unsupported hardened into something harder, and what would a soft answer look like there?"
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
     "th": "The chapter shows how quickly a nation can turn its swords inward.",
     "q": "Ask the Spirit to show you any relationship where you are keeping a test, some 'shibboleth', by which you decide who belongs and who does not."
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
     "th": "\"the LORD delivered them into my hand\" (Judges 12:3). Even in a chapter of sad conflict, Jephthah has just been given a victory over a powerful enemy.",
     "q": "Thank God for a deliverance you did not earn and could not have managed, and for the peacemakers who have quietly kept quarrels in your own life from becoming wars."
    }
   ]
  }
 ]
},
// Day 520
{
 "ref": "Judges 13",
 "tag": "Old Testament",
 "api": "judges+13",
 "sum": [
  "Israel again does evil and the LORD delivers them into the hand of the Philistines for forty years; then the angel of the LORD appears to the barren wife of Manoah of Zorah and promises a son who will be a Nazarite from the womb and \"shall begin to deliver Israel out of the hand of the Philistines.\"",
  "Manoah prays that the man of God will come again to teach them how to raise the child, and the angel returns to the woman in the field, repeating the instructions and going through them again with Manoah.",
  "Manoah offers a kid on a rock, and when he asks the angel's name he is told, \"Why askest thou thus after my name, seeing it is secret?\" and the angel ascends in the flame of the altar.",
  "Manoah fears they will surely die, but his wife reasons that the LORD would not have accepted their offering if he meant to kill them; the son is born and named Samson, \"and the child grew, and the LORD blessed him.\""
 ],
 "nug": [
  {
   "h": "Israel did evil again",
   "b": "\"And the children of Israel did evil again in the sight of the LORD; and the LORD delivered them into the hand of the Philistines forty years\" (Judges 13:1). This cycle is longer than any before it, and unlike earlier chapters, Israel does not even cry out."
  },
  {
   "h": "A beginning, not a completion",
   "b": "The angel says of the child, \"he shall begin to deliver Israel out of the hand of the Philistines\" (Judges 13:5). Samson is promised only a start; the full deliverance remains beyond the book of Judges."
  },
  {
   "h": "Why askest thou after my name?",
   "b": "\"Why askest thou thus after my name, seeing it is secret?\" (Judges 13:18). The angel of the LORD will not be pinned down by a name; he simply does wonders, and worship is the fitting answer."
  },
  {
   "h": "The angel did wondrously",
   "b": "\"And the angel did wonderously; and Manoah and his wife looked on\" (Judges 13:19). The flame ascends, the angel ascends with it, and both parents fall on their faces."
  },
  {
   "h": "A wife's quiet logic",
   "b": "\"If the LORD were pleased to kill us, he would not have received a burnt offering and a meat offering at our hands\" (Judges 13:23). Where Manoah sees only fear, his wife reasons from what God has actually done."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Samuel 1:10-20 · Luke 1:26-33 · Numbers 6:1-8",
   "qs": [
    {
     "th": "Hannah's barrenness and answered prayer in 1 Samuel 1 echoes this childless couple, Luke 1 tells of another promised son announced by an angel, and Numbers 6 lays out the Nazarite vow that Samson's mother is told will govern the child's life.",
     "q": "Read these together — what do you notice about the way God chooses to work through barrenness, waiting and unlikely families?"
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
     "th": "The parents in this story are given no achievement to point to, only a promise and a set of instructions.",
     "q": "Where do you need to trust a promise before you see any sign of it, and how might you order your life around that promise in the meantime?"
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
     "th": "The angel's name is described as secret, and the response is worship rather than curiosity.",
     "q": "Ask the Spirit to help you stop pressing God for an explanation you do not need, and simply to look on and wonder."
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
     "th": "\"the angel did wonderously; and Manoah and his wife looked on\" (Judges 13:19).",
     "q": "Adore God as the one whose ways are past finding out. Tell him what is wonderful about him, without asking for anything, and then look on."
    }
   ]
  }
 ]
},
// Day 521
{
 "ref": "Psalm 149",
 "tag": "Psalms & Wisdom",
 "api": "psalms+149",
 "sum": [
  "The psalm opens with a call to \"Sing unto the LORD a new song, and his praise in the congregation of saints,\" summoning Israel to rejoice in the one who made them.",
  "The praise is to be full-bodied, with dancing, timbrel and harp, because \"the LORD taketh pleasure in his people: he will beautify the meek with salvation.\"",
  "The saints are to be joyful in glory and sing aloud even upon their beds, with \"the high praises of God\" in their mouths.",
  "The psalm ends with a hard image, \"a twoedged sword in their hand,\" to execute judgment on the nations, a vision of God's justice that the New Testament reads in a spiritual key."
 ],
 "nug": [
  {
   "h": "A new song",
   "b": "\"Sing unto the LORD a new song, and his praise in the congregation of saints\" (Psalm 149:1). God's people never run out of things to sing, because his mercies are new."
  },
  {
   "h": "The LORD takes pleasure",
   "b": "\"For the LORD taketh pleasure in his people: he will beautify the meek with salvation\" (Psalm 149:4). Salvation is pictured as God adorning the humble, and the deep reason for praise is that God delights in his people."
  },
  {
   "h": "Singing on our beds",
   "b": "\"Let the saints be joyful in glory: let them sing aloud upon their beds\" (Psalm 149:5). Praise is not confined to a sanctuary; it belongs to the private hours of night as well."
  },
  {
   "h": "Praise and a sword",
   "b": "\"Let the high praises of God be in their mouth, and a twoedged sword in their hand\" (Psalm 149:6). Praise and warfare are joined here, and the passage is to be read carefully, with the New Testament's own teaching that our weapons are not carnal."
  },
  {
   "h": "The judgment written",
   "b": "\"To execute upon them the judgment written: this honour have all his saints\" (Psalm 149:9). The verse points to a justice that belongs to God and has been announced in his word, not to private vengeance."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Ephesians 6:17-18 · Hebrews 4:12 · Psalm 33:1-3",
   "qs": [
    {
     "th": "Ephesians 6 takes up the language of the sword and identifies it as the sword of the Spirit, which is the word of God, joined at once to prayer, Hebrews 4 says the word of God is sharper than any twoedged sword, and Psalm 33 gives another call to a new song.",
     "q": "Read these alongside Psalm 149 — how does the New Testament's use of the sword image shape the way you read the last verses of this psalm, and what does it say about how praise and intercession belong together?"
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
     "th": "The psalm ends with a sword, yet the sword the New Testament places in our hands is the word of God, used in prayer.",
     "q": "Who around you is under attack, whether from illness, a broken relationship or their own choices, and how might you stand with them by praying God's word over them?"
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
     "th": "The Lord takes pleasure in his people, and the meek are beautified with salvation.",
     "q": "Ask the Spirit to bring to mind one person who is meek, weary or overlooked, and to let you see them as God does."
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
     "th": "\"For the LORD taketh pleasure in his people: he will beautify the meek with salvation\" (Psalm 149:4).",
     "q": "Pray for the meek and struggling by name, asking God to beautify them with salvation, and for the church, that its praise and its prayer would rise together."
    }
   ]
  }
 ]
},
// Day 522
{
 "ref": "Judges 14",
 "tag": "Old Testament",
 "api": "judges+14",
 "sum": [
  "Samson goes down to Timnath, sees a Philistine woman and demands his parents get her for him, and though they protest, \"his father and his mother knew not that it was of the LORD, that he sought an occasion against the Philistines.\"",
  "On the way a young lion roars against him and \"the Spirit of the LORD came mightily upon him,\" so that he tears it apart with his bare hands, though he tells no one, and later he finds bees and honey in its carcase.",
  "At the wedding feast Samson puts forth a riddle for thirty companions, \"Out of the eater came forth meat, and out of the strong came forth sweetness,\" and his wife, under threat of fire, weeps until she gets the answer from him and betrays it.",
  "In fury Samson goes down to Ashkelon, kills thirty men, takes their spoil to pay the wager, and returns to his father's house, while his wife is given to his companion."
 ],
 "nug": [
  {
   "h": "She pleaseth me well",
   "b": "\"Get her for me; for she pleaseth me well\" (Judges 14:3). Samson's request rests on his own eyes, in a book that will end with people doing what is right in their own eyes."
  },
  {
   "h": "It was of the LORD",
   "b": "\"But his father and his mother knew not that it was of the LORD, that he sought an occasion against the Philistines\" (Judges 14:4). God works through Samson's flawed choices without approving them, and the reader is left to hold both truths."
  },
  {
   "h": "The Spirit came mightily",
   "b": "\"And the Spirit of the LORD came mightily upon him, and he rent him as he would have rent a kid, and he had nothing in his hand\" (Judges 14:6). His strength is a gift and not his own, and he keeps it secret from his parents."
  },
  {
   "h": "A riddle about strength and sweetness",
   "b": "\"Out of the eater came forth meat, and out of the strong came forth sweetness\" (Judges 14:14). It is a riddle about a lion and honey, and also, in hindsight, about a chosen man whose strength will be used to bring something out of a hard place."
  },
  {
   "h": "She lay sore upon him",
   "b": "\"And she wept before him the seven days, while their feast lasted: and it came to pass on the seventh day, that he told her, because she lay sore upon him\" (Judges 14:17). The first pattern of Samson's downfall is set here: he gives way to pressure from someone he loves."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 50:19-20 · Proverbs 16:9 · Isaiah 55:8-9",
   "qs": [
    {
     "th": "Joseph tells his brothers in Genesis 50 that what they meant for evil, God meant for good, Proverbs 16 says a man's heart may plan his way but the LORD directs his steps, and Isaiah 55 reminds us that God's ways are higher than ours.",
     "q": "Read these together — how do they help you sit with a chapter where God's purposes run through a man's poor and selfish choices?"
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
     "th": "Samson acts on what pleases him, and God, without endorsing it, brings his own purposes through it.",
     "q": "Where in your life do you see God bringing something good out of choices, yours or another's, that were not wise?"
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
     "th": "This is a listening-silence day, and the chapter is full of noise: a roar, a feast, a riddle, weeping and anger.",
     "q": "Sit still for a minute or two. Ask the Spirit whether there is a desire or a secret you have been carrying that he wants to speak to."
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
     "th": "\"And the Spirit of the LORD came mightily upon him\" (Judges 14:6).",
     "q": "Be quiet for a few minutes and simply listen. Do not fill the silence with requests. If a thought or verse comes, write it down and hold it lightly."
    }
   ]
  }
 ]
},
// Day 523
{
 "ref": "John 7",
 "tag": "New Testament",
 "api": "john+7",
 "sum": [
  "Jesus stays in Galilee because the Jews seek to kill him, and when his brothers, who did not believe in him, urge him to show himself openly at the feast of tabernacles, he answers, \"My time is not yet come,\" and later goes up quietly.",
  "In the middle of the feast Jesus teaches in the temple, claiming that his doctrine is from the one who sent him, that anyone who wills to do God's will shall know it, and he challenges his critics with \"Judge not according to the appearance, but judge righteous judgment.\"",
  "On the last day of the feast Jesus stands and cries, \"If any man thirst, let him come unto me, and drink,\" promising rivers of living water, which John explains as the Holy Spirit to be given later.",
  "The crowd divides, officers sent to arrest him return saying, \"Never man spake like this man,\" and Nicodemus quietly asks whether the law judges a man before it hears him, to be met with sneers about Galilee."
 ],
 "nug": [
  {
   "h": "His brethren did not believe",
   "b": "\"For neither did his brethren believe in him\" (John 7:5). Those closest to Jesus can be nearest and furthest at the same time."
  },
  {
   "h": "Do God's will to know his teaching",
   "b": "\"If any man will do his will, he shall know of the doctrine, whether it be of God, or whether I speak of myself\" (John 7:17). Understanding here comes through obedience and not the other way round."
  },
  {
   "h": "Judge not by appearance",
   "b": "\"Judge not according to the appearance, but judge righteous judgment\" (John 7:24). The crowd's verdicts come from where Jesus is from and how he looks, never from what he does."
  },
  {
   "h": "If any man thirst",
   "b": "\"If any man thirst, let him come unto me, and drink\" (John 7:37). On the final day of a feast that recalled water from the rock, Jesus offers himself as the source."
  },
  {
   "h": "Never man spake like this man",
   "b": "\"The officers answered, Never man spake like this man\" (John 7:46). The men sent to seize him return empty-handed, held by his words."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 55:1-2 · John 4:13-14 · Deuteronomy 18:15-18",
   "qs": [
    {
     "th": "Isaiah 55 is the great invitation to the thirsty to come to the waters, John 4 records the promise of living water to the woman at the well, and Deuteronomy 18 promises the Prophet like Moses that some in John 7 wonder if Jesus might be.",
     "q": "Read these alongside John 7 — how do they deepen what Jesus is offering on that last day of the feast, and what might it mean to come to him and drink?"
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
     "th": "The chapter shows people judging Jesus by appearances, by his origin and by fear of what others would think.",
     "q": "Is there a way you have judged someone, or Jesus himself, by appearance, and what might it cost you to look again more honestly?"
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
     "th": "John explains that the rivers of living water spoke \"of the Spirit, which they that believe on him should receive\" (John 7:39).",
     "q": "Ask the Spirit to show you where you are thirsty right now, and where you have been drinking from other wells."
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
     "th": "\"Judge not according to the appearance, but judge righteous judgment\" (John 7:24), and \"no man spake openly of him for fear of the Jews\" (John 7:13).",
     "q": "Confess to God the times you have judged by appearance, and the times fear of others has kept you quiet about Jesus. Receive his forgiveness, and ask him for a fresh thirst for himself."
    }
   ]
  }
 ]
},
// Day 524
{
 "ref": "Psalm 150",
 "tag": "Psalms & Wisdom",
 "api": "psalms+150",
 "sum": [
  "The final psalm opens and closes with \"Praise ye the LORD,\" and begins by asking where God is to be praised: \"Praise God in his sanctuary: praise him in the firmament of his power.\"",
  "It then names why: \"Praise him for his mighty acts: praise him according to his excellent greatness.\"",
  "Instruments of every kind are summoned, trumpet, psaltery, harp, timbrel, stringed instruments, organs and loud cymbals, along with dance.",
  "The whole book ends in one great sentence: \"Let every thing that hath breath praise the LORD. Praise ye the LORD.\""
 ],
 "nug": [
  {
   "h": "The book ends in praise",
   "b": "The Psalms begin in the blessedness of one who delights in the law and end in a shout of praise. After all the laments, the confessions and the complaints, the last word of the whole book is praise."
  },
  {
   "h": "Where and why",
   "b": "\"Praise God in his sanctuary: praise him in the firmament of his power\" (Psalm 150:1). Praise fills the place of worship and the whole created sky."
  },
  {
   "h": "For his mighty acts",
   "b": "\"Praise him for his mighty acts: praise him according to his excellent greatness\" (Psalm 150:2). The reasons are what God has done and who he is."
  },
  {
   "h": "Every instrument",
   "b": "\"Praise him with the sound of the trumpet: praise him with the psaltery and harp\" (Psalm 150:3). The psalm sets no limit on the kind of sound the people of God can offer him."
  },
  {
   "h": "Everything that hath breath",
   "b": "\"Let every thing that hath breath praise the LORD\" (Psalm 150:6). The last line is an invitation to everyone who is alive, and their breath is enough to begin."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 1:1-2 · Psalm 100:1-5 · Revelation 5:11-13",
   "qs": [
    {
     "th": "Psalm 1 opens the book with the blessed man who delights in the law of the LORD, Psalm 100 is a compact call to thankful worship, and Revelation 5 pictures every creature in heaven and earth joining in praise of the Lamb.",
     "q": "Read these alongside Psalm 150 — how does seeing the beginning of the Psalms, this ending and the vision of Revelation together shape your sense of where all worship is heading?"
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
     "th": "You have now read the whole Book of Psalms, and every lament along the way eventually finds its way to praise.",
     "q": "Which psalm from this journey has become most your own, and what would it mean to let it lead you into praise today?"
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
     "th": "\"Let every thing that hath breath praise the LORD\" (Psalm 150:6).",
     "q": "Ask the Spirit to stir a genuine praise in you today, perhaps through a song, a walk or a word of thanks aloud."
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
     "th": "\"Praise him for his mighty acts: praise him according to his excellent greatness\" (Psalm 150:2).",
     "q": "Thank God for specific acts, big and small, in your own life, and for the gift of the Psalms across these months. Give him thanks with every breath."
    }
   ]
  }
 ]
},
// Day 525
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Let every thing that hath breath",
   "b": "\"Let every thing that hath breath praise the LORD. Praise ye the LORD\" (Psalm 150:6). This week completed the Book of Psalms, a milestone across the whole reading plan, and the last word of the whole book is praise."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read Jephthah's aftermath and the tragic civil war with Ephraim (Judges 12), the promise of Samson's birth (Judges 13), Psalm 149, Samson's marriage and riddle (Judges 14), Jesus at the feast of tabernacles (John 7), and Psalm 150, the last psalm. You have now read the entire Book of Psalms, all 150 chapters, and John's Gospel has taken you into the growing conflict around Jesus.",
     "q": "Which moment stayed with you more this week — Jesus's invitation, \"If any man thirst, let him come unto me, and drink\" (John 7:37), or the closing call of the Psalms, \"Let every thing that hath breath praise the LORD\" (Psalm 150:6)? Why?"
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
     "th": "\"Let every thing that hath breath praise the LORD. Praise ye the LORD\" (Psalm 150:6).",
     "q": "Sit quietly for a moment, and simply breathe, letting each breath be its own small praise, before you move on."
    }
   ]
  }
 ]
},
// Day 526
{
 "ref": "Judges 15",
 "tag": "Old Testament",
 "api": "judges+15",
 "sum": [
  "Samson returns to visit his wife but her father has given her to his companion, and Samson, saying \"Now shall I be more blameless than the Philistines, though I do them a displeasure,\" sets fire to their standing corn with three hundred foxes and firebrands.",
  "The Philistines burn his wife and her father with fire, and Samson answers, \"Though ye have done this, yet will I be avenged of you,\" striking them \"hip and thigh with a great slaughter\" before retreating to the rock Etam.",
  "Three thousand men of Judah, afraid of the Philistines, come to bind Samson and hand him over, and he lets them, but at Lehi \"the Spirit of the LORD came mightily upon him,\" the cords become as flax, and with a fresh jawbone of an ass he kills a thousand men.",
  "Sore with thirst, Samson calls on the LORD, and \"God clave an hollow place that was in the jaw, and there came water thereout\"; the chapter ends by noting that he judged Israel twenty years in the days of the Philistines."
 ],
 "nug": [
  {
   "h": "A cycle of revenge",
   "b": "\"Though ye have done this, yet will I be avenged of you, and after that I will cease\" (Judges 15:7). Wrong is answered with wrong, and each round is worse than the last, ending in the death of those who never chose the fight."
  },
  {
   "h": "Israel hands over its own deliverer",
   "b": "\"We are come down to bind thee, that we may deliver thee into the hand of the Philistines\" (Judges 15:12). Judah has grown so used to being ruled that it will surrender the man God raised up."
  },
  {
   "h": "The Spirit came mightily",
   "b": "\"And the Spirit of the LORD came mightily upon him, and the cords that were upon his arms became as flax that was burnt with fire\" (Judges 15:14). Every victory in Samson's life is credited, in the text, to the LORD's Spirit and not to Samson."
  },
  {
   "h": "A prayer from a thirsty man",
   "b": "\"Thou hast given this great deliverance into the hand of thy servant: and now shall I die for thirst, and fall into the hand of the uncircumcised?\" (Judges 15:18). The strongest man in the book is undone by thirst and can only ask."
  },
  {
   "h": "Water from the jaw",
   "b": "\"But God clave an hollow place that was in the jaw, and there came water thereout\" (Judges 15:19). The God who gave water from the rock supplies it again, in an odd and humble place."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 17:5-6 · Psalm 107:4-9 · Isaiah 41:17-18",
   "qs": [
    {
     "th": "In Exodus 17 God brings water from the rock for a thirsty people, Psalm 107 celebrates those who cried to the LORD in their trouble and were satisfied, and Isaiah 41 promises that God will hear the poor and needy who seek water.",
     "q": "Read these together — how do they show God's habit of meeting thirsty, desperate people with unexpected provision, and what does that say about him?"
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
     "th": "Samson's strength could not save him from thirst, and his prayer at the end is honest and simple.",
     "q": "Where have you run out of your own strength, and what would it look like to ask God plainly, as Samson did?"
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
     "th": "The Spirit comes upon Samson at moments of need, not because Samson is worthy.",
     "q": "Ask the Spirit to help you see where he has already supplied for you in ways you were not expecting."
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
     "th": "\"But God clave an hollow place that was in the jaw, and there came water thereout\" (Judges 15:19).",
     "q": "Worship God as the one who provides water in dry places. Tell him what you admire in him, that he hears, that he gives, that he is faithful to a flawed people."
    }
   ]
  }
 ]
},
// Day 527
{
 "ref": "Judges 16",
 "tag": "Old Testament",
 "api": "judges+16",
 "sum": [
  "Samson goes to Gaza, and the Gazites lie in wait to kill him at dawn, but he rises at midnight and carries away the doors of the gate of the city, \"bar and all,\" to the top of a hill before Hebron.",
  "He then loves Delilah in the valley of Sorek, and the lords of the Philistines offer her eleven hundred pieces of silver each to find the secret of his strength; three times he lies to her and three times she tests it.",
  "\"When she pressed him daily with her words, and urged him, so that his soul was vexed unto death,\" he tells her his Nazarite secret, she has his hair shaved, and \"he wist not that the LORD was departed from him.\"",
  "The Philistines blind him and set him to grind in prison, but as his hair begins to grow they bring him out to make sport at Dagon's feast, and Samson prays and pulls down the pillars, so that \"the dead which he slew at his death were more than they which he slew in his life.\""
 ],
 "nug": [
  {
   "h": "The doors of Gaza",
   "b": "\"And Samson lay till midnight, and arose at midnight, and took the doors of the gate of the city, and the two posts, and went away with them, bar and all\" (Judges 16:3). His strength is still on show, while his weakness is only beginning to appear."
  },
  {
   "h": "Worn down by words",
   "b": "\"When she pressed him daily with her words, and urged him, so that his soul was vexed unto death; That he told her all his heart\" (Judges 16:16-17). Samson is not overpowered but worn away, a slow erosion of a man who has already toyed with the line."
  },
  {
   "h": "He wist not",
   "b": "\"And he wist not that the LORD was departed from him\" (Judges 16:20). The saddest verse in Samson's story: he goes out expecting the old strength and does not even know it has gone."
  },
  {
   "h": "Grinding in the dark",
   "b": "\"But the Philistines took him, and put out his eyes... and he did grind in the prison house\" (Judges 16:21). The judge of Israel ends up blind, bound and working like an animal, with the enemy giving credit for his fall to Dagon."
  },
  {
   "h": "Only this once",
   "b": "\"Remember me, I pray thee, and strengthen me, I pray thee, only this once, O God\" (Judges 16:28). It is a self-centred prayer and yet God hears it, and the hair that \"began to grow again after he was shaven\" (Judges 16:22) is a quiet sign that grace is not finished with him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 11:32-34 · 1 Corinthians 10:12-13 · Psalm 51:10-11",
   "qs": [
    {
     "th": "Hebrews 11 lists Samson among those who by faith obtained a promise, 1 Corinthians 10 warns that anyone who thinks he stands should take heed lest he fall, and Psalm 51 is David's prayer that God will not take his holy spirit from him.",
     "q": "Read these alongside Judges 16 — how can the same person appear both among the heroes of faith and as a warning, and what does that say about how we should pray for one another?"
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
     "th": "Samson's fall came through pressure, not one dramatic moment but daily wearing down.",
     "q": "Who around you is being worn down at the moment, and how might you stand with them in prayer and in practical ways?"
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
     "th": "The LORD had departed from Samson and he did not know it.",
     "q": "Ask the Spirit to search you for any place where you have grown numb, and to pray for someone whose sensitivity to God has dulled."
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
     "th": "\"And he wist not that the LORD was departed from him\" (Judges 16:20).",
     "q": "Pray by name for someone who has fallen, or who is being worn down, asking God to strengthen them, restore what has been lost and bring them back to himself."
    }
   ]
  }
 ]
},
// Day 528
{
 "ref": "Proverbs 1",
 "tag": "Psalms & Wisdom",
 "api": "proverbs+1",
 "sum": [
  "The book opens with its purpose: \"The proverbs of Solomon the son of David, king of Israel,\" written to give wisdom, instruction and understanding, and to give \"subtilty to the simple, to the young man knowledge and discretion.\"",
  "The foundation is stated at once: \"The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction,\" followed by a father's appeal to hear his instruction and the law of his mother.",
  "A father warns his son against sinners who entice him to join a violent scheme for easy gain, saying \"My son, if sinners entice thee, consent thou not,\" and showing that such people are setting a trap for their own lives.",
  "Wisdom herself cries aloud in the streets, calling the simple to turn at her reproof, and warns that those who refuse her will eat the fruit of their own way, while \"whoso hearkeneth unto me shall dwell safely, and shall be quiet from fear of evil.\""
 ],
 "nug": [
  {
   "h": "A new book begins",
   "b": "With Psalm 150 finished, you begin the book of Proverbs, a collection of short, practical sayings on how to live well before God, which will fill many days ahead."
  },
  {
   "h": "The beginning of knowledge",
   "b": "\"The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction\" (Proverbs 1:7). The whole book rests on this verse: wisdom starts with reverence for God, and not with cleverness."
  },
  {
   "h": "A wise man will hear",
   "b": "\"A wise man will hear, and will increase learning\" (Proverbs 1:5). The wise are marked first of all by listening, and they are never finished learning."
  },
  {
   "h": "If sinners entice thee",
   "b": "\"My son, if sinners entice thee, consent thou not\" (Proverbs 1:10). The temptation described is the promise of shared spoil and belonging, and the proverb's answer is simply to refuse."
  },
  {
   "h": "Wisdom cries in the street",
   "b": "\"Wisdom crieth without; she uttereth her voice in the streets\" (Proverbs 1:20). Wisdom is not hidden, and she is not exclusive: she calls openly in the busiest place, and the tragedy is in those who will not turn."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 111:10 · James 1:5 · Job 28:28",
   "qs": [
    {
     "th": "Psalm 111 repeats that the fear of the LORD is the beginning of wisdom, James 1 promises that God gives wisdom generously to anyone who asks, and Job 28 concludes a long search for wisdom with the same answer as Proverbs.",
     "q": "Read these together — how do they agree about where wisdom starts, and how does that shape the way you begin reading Proverbs?"
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
     "th": "Wisdom, in this chapter, is called out to and cries in the street, and the only real need is to listen.",
     "q": "What voices have been loudest in your life lately, and what might it look like to make room for wisdom to be heard?"
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
     "th": "\"Turn you at my reproof: behold, I will pour out my spirit unto you, I will make known my words unto you\" (Proverbs 1:23).",
     "q": "Ask the Spirit to give you a listening heart for this new book, and to show you the reproof you might be tempted to avoid."
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
     "th": "\"But whoso hearkeneth unto me shall dwell safely, and shall be quiet from fear of evil\" (Proverbs 1:33).",
     "q": "Be silent for several minutes. Ask nothing. Simply listen, as wisdom cries in the street, and let the promise of quiet from fear settle on you."
    }
   ]
  }
 ]
},
// Day 529
{
 "ref": "Judges 17",
 "tag": "Old Testament",
 "api": "judges+17",
 "sum": [
  "A man of mount Ephraim named Micah confesses to his mother that the eleven hundred shekels of silver she cursed the thief over are with him, and she answers, \"Blessed be thou of the LORD, my son.\"",
  "She dedicates the silver to the LORD to make a graven image and a molten image, and Micah sets up a shrine with an ephod, teraphim and a household \"house of gods,\" consecrating one of his own sons as priest.",
  "The narrator observes, \"In those days there was no king in Israel, but every man did that which was right in his own eyes.\"",
  "A young Levite from Beth-lehem-judah looking for a place to stay is hired by Micah as his priest for ten shekels a year, and Micah concludes, \"Now know I that the LORD will do me good, seeing I have a Levite to my priest.\""
 ],
 "nug": [
  {
   "h": "The silver is with me; I took it",
   "b": "\"Behold, the silver is with me; I took it\" (Judges 17:2). Micah's confession is real but it is prompted by his mother's curse, and it opens a story where religion and self-interest are tangled together."
  },
  {
   "h": "A house of gods",
   "b": "\"And the man Micah had an house of gods, and made an ephod, and teraphim, and consecrated one of his sons, who became his priest\" (Judges 17:5). The worship of the LORD is here mixed with images the law had forbidden."
  },
  {
   "h": "Right in his own eyes",
   "b": "\"In those days there was no king in Israel, but every man did that which was right in his own eyes\" (Judges 17:6). The refrain of the book's last chapters, and its explanation: without a king, each person becomes his own authority."
  },
  {
   "h": "A priest for hire",
   "b": "\"Dwell with me, and be unto me a father and a priest, and I will give thee ten shekels of silver by the year, and a suit of apparel, and thy victuals\" (Judges 17:10). A Levite who should be serving the whole nation is turned into one household's employee."
  },
  {
   "h": "The LORD will do me good",
   "b": "\"Now know I that the LORD will do me good, seeing I have a Levite to my priest\" (Judges 17:13). Micah treats God's blessing as something a correct arrangement of religious furniture can secure."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 20:4-5 · Deuteronomy 12:8 · Proverbs 14:12",
   "qs": [
    {
     "th": "Exodus 20 gives the second commandment against making graven images, Deuteronomy 12 warns against doing whatever is right in one's own eyes in worship, and Proverbs 14 says there is a way that seems right to a man but its end is death.",
     "q": "Read these alongside Judges 17 — how do they show why Micah's sincerity was not enough, and what standard he was missing?"
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
     "th": "Micah's religion was sincere and busy, and it was built to his own design.",
     "q": "In what ways might you be shaping your faith to suit yourself, keeping what is comfortable and quietly setting aside what is costly?"
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
     "th": "Micah thought a Levite in his house guaranteed God's favour.",
     "q": "Ask the Spirit to show you any way you have treated a religious habit or a person as a guarantee of blessing."
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
     "th": "\"Every man did that which was right in his own eyes\" (Judges 17:6).",
     "q": "Confess honestly the places where you have done what seemed right to you without asking what God says, and any place where you have used religion for your own ends. Receive his forgiveness and ask him to be the king of your life."
    }
   ]
  }
 ]
},
// Day 530
{
 "ref": "John 8",
 "tag": "New Testament",
 "api": "john+8",
 "sum": [
  "Scribes and Pharisees bring a woman taken in adultery to Jesus to trap him, and he stoops to write on the ground, then says, \"He that is without sin among you, let him first cast a stone at her,\" until her accusers leave one by one and Jesus tells her, \"Neither do I condemn thee: go, and sin no more.\"",
  "Jesus declares, \"I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life,\" and answers the Pharisees' challenge that his testimony is not valid by pointing to the witness of the Father.",
  "He warns that those who do not believe he is the one sent will die in their sins, and tells those who believe, \"If ye continue in my word, then are ye my disciples indeed... and the truth shall make you free,\" though his hearers protest they were never in bondage.",
  "The argument sharpens over whose children they are, ending with Jesus's claim, \"Before Abraham was, I am,\" at which they take up stones, but Jesus hides himself and goes out of the temple."
 ],
 "nug": [
  {
   "h": "Without sin, cast the first stone",
   "b": "\"He that is without sin among you, let him first cast a stone at her\" (John 8:7). Jesus does not deny the law, he exposes the hearts of those using it as a trap."
  },
  {
   "h": "Neither do I condemn thee",
   "b": "\"Neither do I condemn thee: go, and sin no more\" (John 8:11). Mercy and a call to change come together, with mercy first."
  },
  {
   "h": "The light of the world",
   "b": "\"I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life\" (John 8:12). In a chapter of accusation and darkness, Jesus is the one who brings light."
  },
  {
   "h": "The truth shall make you free",
   "b": "\"And ye shall know the truth, and the truth shall make you free\" (John 8:32). Freedom is tied to continuing in his word, and Jesus adds, \"If the Son therefore shall make you free, ye shall be free indeed\" (John 8:36)."
  },
  {
   "h": "Before Abraham was, I am",
   "b": "\"Verily, verily, I say unto you, Before Abraham was, I am\" (John 8:58). Jesus takes the divine name upon himself, and his hearers understand him well enough to pick up stones."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 27:1 · Romans 8:1 · Exodus 3:13-14",
   "qs": [
    {
     "th": "Psalm 27 declares that the LORD is my light and my salvation, Romans 8 states that there is now no condemnation to those in Christ Jesus, and Exodus 3 records the divine name given at the burning bush, which Jesus echoes in his final claim.",
     "q": "Read these together — how do they deepen what Jesus says about light, freedom and who he is in this chapter?"
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
     "th": "The woman was told there was no condemnation, and then to go and sin no more.",
     "q": "Where do you most need to hear \"Neither do I condemn thee\" today, and where do you need to hear the call that follows?"
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
     "th": "Jesus says the truth shall make you free, and that freedom is found in continuing in his word.",
     "q": "Ask the Spirit to show you any area where you are still living as though in bondage when the Son has made you free."
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
     "th": "\"If the Son therefore shall make you free, ye shall be free indeed\" (John 8:36).",
     "q": "Thank Jesus for the light he brings, for the mercy that does not condemn, and for the freedom he gives, naming particular chains he has broken in your own life."
    }
   ]
  }
 ]
},
// Day 531
{
 "ref": "Proverbs 2",
 "tag": "Psalms & Wisdom",
 "api": "proverbs+2",
 "sum": [
  "A father invites his son to receive his words, incline his ear to wisdom and apply his heart to understanding, seeking her \"as silver\" and searching for her \"as for hid treasures.\"",
  "The reward is stated: \"Then shalt thou understand the fear of the LORD, and find the knowledge of God,\" for \"the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.\"",
  "God lays up sound wisdom for the righteous, is \"a buckler to them that walk uprightly,\" and preserves the way of his saints, so that discretion and understanding will keep the one who seeks.",
  "Wisdom delivers from the way of the evil man and the seductive stranger whose path leads down toward death, and it leads instead into the way of good men, in which the upright shall dwell in the land while the wicked are cut off."
 ],
 "nug": [
  {
   "h": "If thou seekest her as silver",
   "b": "\"If thou seekest her as silver, and searchest for her as for hid treasures\" (Proverbs 2:4). Wisdom is not stumbled upon, and it is worth the effort of a miner."
  },
  {
   "h": "The LORD giveth wisdom",
   "b": "\"For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding\" (Proverbs 2:6). The seeker's effort is real, but wisdom is finally a gift from the mouth of God."
  },
  {
   "h": "A buckler to the upright",
   "b": "\"He layeth up sound wisdom for the righteous: he is a buckler to them that walk uprightly\" (Proverbs 2:7). God is both the source of wisdom and the shield of those who follow it."
  },
  {
   "h": "Discretion shall preserve thee",
   "b": "\"Discretion shall preserve thee, understanding shall keep thee\" (Proverbs 2:11). Wisdom here is a guard, keeping a person from the crooked paths."
  },
  {
   "h": "The upright shall dwell",
   "b": "\"For the upright shall dwell in the land, and the perfect shall remain in it\" (Proverbs 2:21). The chapter ends with a picture of settled life for those who take wisdom's way."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Colossians 2:2-3 · 1 Kings 3:9-12 · Matthew 13:44",
   "qs": [
    {
     "th": "Colossians 2 says that in Christ are hid all the treasures of wisdom and knowledge, 1 Kings 3 records Solomon asking God for an understanding heart and receiving it, and Matthew 13 tells of the man who sells all for a treasure hid in a field.",
     "q": "Read these alongside Proverbs 2 — how do they help you see where the hid treasure of wisdom is finally found, and what it might cost to seek it?"
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
     "th": "Wisdom is to be sought like silver and hid treasures, with real effort and desire.",
     "q": "What are you currently searching for with the most energy, and how does the search for wisdom compare?"
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
     "th": "The chapter says wisdom comes out of God's mouth.",
     "q": "Ask the Spirit to open your ear to what God is saying today, and to make you hungry for his wisdom above all lesser treasures."
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
     "th": "\"For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding\" (Proverbs 2:6).",
     "q": "Praise God as the source of all wisdom and knowledge, and as a buckler for those who walk uprightly. Tell him what you love about him, without asking for a thing."
    }
   ]
  }
 ]
},
// Day 532
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "If the Son therefore shall make you free",
   "b": "\"If the Son therefore shall make you free, ye shall be free indeed\" (John 8:36). This week held Samson's strength and fall, the first proverbs of Solomon, and Jesus's words about freedom and truth."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read Samson's revenge and the water at Lehi (Judges 15), the story of Delilah and Samson's death (Judges 16), the beginning of the book of Proverbs (Proverbs 1 and 2), Micah's household gods and the rise of the private priest (Judges 17), and Jesus's teaching on light, truth and freedom (John 8). Proverbs, the second great block of wisdom literature, has now begun.",
     "q": "Which moment stayed with you more this week — Samson's final prayer, \"Remember me, I pray thee, and strengthen me, I pray thee, only this once, O God\" (Judges 16:28), or the promise of wisdom, \"But whoso hearkeneth unto me shall dwell safely, and shall be quiet from fear of evil\" (Proverbs 1:33)? Why?"
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
     "th": "\"If the Son therefore shall make you free, ye shall be free indeed\" (John 8:36).",
     "q": "Sit quietly for a moment, and simply rest in that freedom before you move on."
    }
   ]
  }
 ]
},
// Day 533
{
 "ref": "Judges 18",
 "tag": "Old Testament",
 "api": "judges+18",
 "sum": [
  "The tribe of Dan, still without a settled inheritance, sends five men to spy out the land; they lodge at Micah's house in the hill country of Ephraim, recognise the young Levite, and ask him to enquire of God on their behalf.",
  "The Levite tells them, \"Go in peace: before the LORD is your way wherein ye go,\" and the spies find the quiet, unsuspecting people of Laish, far from help, and return urging their brothers to take it.",
  "Six hundred armed Danites march north and, passing Micah's house, take the carved image, the ephod, the teraphim and the molten image, and persuade the Levite to leave Micah and become priest to a whole tribe; Micah pursues them, but is told to be quiet and is outnumbered.",
  "Dan destroys Laish, rebuilds it as Dan, and sets up the graven image for themselves, with the Levite's family serving as priests, all the time that the house of God was in Shiloh."
 ],
 "nug": [
  {
   "h": "No king, and no rest",
   "b": "\"In those days there was no king in Israel: and in those days the tribe of the Danites sought them an inheritance to dwell in\" (Judges 18:1). Dan had not yet taken what God had given them, and now goes looking for something easier."
  },
  {
   "h": "A blessing that costs nothing",
   "b": "\"And the priest said unto them, Go in peace: before the LORD is your way wherein ye go\" (Judges 18:6). A religious man says what pleases his hearers; nothing suggests he actually enquired of God."
  },
  {
   "h": "A people at ease",
   "b": "The spies find a place \"where there is no want of any thing that is in the earth\" (Judges 18:10). The tragedy is that Laish is quiet and defenceless, and Dan's greed treats that as an invitation."
  },
  {
   "h": "A priest for sale",
   "b": "\"And the priest's heart was glad, and he took the ephod, and the teraphim, and the graven image, and went in the midst of the people\" (Judges 18:20). Ministry is swapped for advancement, and a bigger platform is chosen over faithfulness."
  },
  {
   "h": "What have I more?",
   "b": "Micah cries, \"Ye have taken away my gods which I made, and the priest, and ye are gone away: and what have I more?\" (Judges 18:24). It is a sad exposure of any faith built from things we can lose."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Judges 17:5-6 · Exodus 20:4-5 · Joshua 19:47",
   "qs": [
    {
     "th": "Judges 17 introduces Micah's shrine and the same refrain about no king, Exodus 20 gives the commandment about carved images that Dan now breaks, and Joshua 19 records that Dan's inheritance was already assigned but lost or left unpossessed.",
     "q": "Read these together with Judges 18 — how does a tribe that failed to take what God gave end up seizing what was never theirs and calling it God's blessing?"
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
     "th": "The Danites do not trust the LORD to give them their inheritance, so they take an easier prize by force and dress it in religion.",
     "q": "Where might you be settling for an easier substitute for something God has actually promised or asked of you?"
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
     "th": "The Levite's \"Go in peace\" sounded spiritual, yet it was a comfortable answer.",
     "q": "Ask the Spirit to show you whether you tend to seek God's word or only a word that agrees with what you have already decided."
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
     "th": "Laish was a defenceless people with no deliverer near, and Micah was left with nothing at all.",
     "q": "Bring to God by name people who are vulnerable, overlooked, or robbed of what they depended on, and ask him to be the defender and helper they lack."
    }
   ]
  }
 ]
},
// Day 534
{
 "ref": "Judges 19",
 "tag": "Old Testament",
 "api": "judges+19",
 "sum": [
  "A Levite from the hill country of Ephraim goes to Bethlehem to bring back his concubine, who has left him; her father detains him for several days with hospitality before he finally departs late in the day.",
  "Rather than lodge in the Jebusite city, he presses on to Gibeah in Benjamin, where no one takes them in until an old man from Ephraim offers a home, saying, \"only lodge not in the street.\"",
  "That night men of the city surround the house and demand the Levite, and the night ends in a terrible act of violence against the concubine, who is found dead at the door in the morning.",
  "The Levite takes her body home and sends its parts throughout Israel, and all who see it say, \"consider of it, take advice, and speak your minds.\""
 ],
 "nug": [
  {
   "h": "The refrain returns",
   "b": "\"And it came to pass in those days, when there was no king in Israel\" (Judges 19:1). The book's closing chapters begin with this line, and what follows shows what people become when everyone answers only to themselves."
  },
  {
   "h": "No one took them in",
   "b": "In Gibeah \"there was no man that took them into his house to lodging\" (Judges 19:15). A town of Israel fails the basic duty of hospitality that Scripture repeatedly asks of God's people."
  },
  {
   "h": "Only lodge not in the street",
   "b": "The old man says, \"Peace be with thee; howsoever let all thy wants lie upon me; only lodge not in the street\" (Judges 19:20). One decent voice in a corrupt place, though even his protection is tragically compromised."
  },
  {
   "h": "A story told soberly",
   "b": "This is one of the darkest chapters in Scripture, and the account does not excuse anyone. It is written to show a nation that has lost its moral compass, not to commend what its people did."
  },
  {
   "h": "No such deed",
   "b": "All who saw said, \"There was no such deed done nor seen from the day that the children of Israel came up out of the land of Egypt unto this day: consider of it, take advice, and speak your minds\" (Judges 19:30). Shock at last, but the question is whether it will lead to repentance."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 19:1-8 · 1 Samuel 11:1-7 · Hosea 9:9",
   "qs": [
    {
     "th": "Genesis 19 shows a similar demand at Sodom's door, and Israel now behaves like the nations God judged; 1 Samuel 11 shows Gibeah again, with Saul rousing Israel by sending out a summons; and Hosea remembers \"the days of Gibeah\" as the picture of deep corruption.",
     "q": "Read these slowly beside Judges 19 — what does it tell you that Israel's own town is compared to Sodom, and that the prophets never forgot it?"
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
     "th": "This chapter forces us to sit with real cruelty, with a woman treated as an object by nearly every man in the story.",
     "q": "How do you respond when you meet suffering in Scripture or in life that you cannot explain or fix, and can you stay with it honestly rather than looking away?"
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
     "th": "\"Consider of it, take advice, and speak your minds\" (Judges 19:30) was the nation's cry, yet nobody said, Let us ask the LORD.",
     "q": "Ask the Spirit to make you a person who considers, listens and prays before reacting to what shocks you."
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
     "th": "Some passages leave us with no words, and silence can be a truer response than an explanation.",
     "q": "Be still before God. Do not try to explain the chapter; simply bring your grief, and the woman in the story, into his presence and wait."
    }
   ]
  }
 ]
},
// Day 535
{
 "ref": "Proverbs 3",
 "tag": "Psalms & Wisdom",
 "api": "proverbs+3",
 "sum": [
  "A father urges his son not to forget his teaching, and to let mercy and truth bind about his neck and be written on the table of his heart, promising favour with God and man.",
  "He calls the reader to trust in the LORD with all the heart, not lean on his own understanding, and to honour the LORD with his substance, and not to despise the chastening of the LORD, who corrects those he loves.",
  "The praise of wisdom follows: happy is the one who finds her, for she is better than silver and gold, and the LORD by wisdom founded the earth.",
  "Practical commands close the chapter: withhold not good from those due it, do not plot harm against a neighbour or envy the oppressor, for the LORD's curse is in the house of the wicked but he blesses the habitation of the just."
 ],
 "nug": [
  {
   "h": "Trust and lean not",
   "b": "\"Trust in the LORD with all thine heart; and lean not unto thine own understanding\" (Proverbs 3:5). Trust is a whole-hearted act, and it means being willing to hold our own conclusions loosely."
  },
  {
   "h": "He shall direct thy paths",
   "b": "\"In all thy ways acknowledge him, and he shall direct thy paths\" (Proverbs 3:6). The promise is guidance for those who bring every area of life before God."
  },
  {
   "h": "Not wise in our own eyes",
   "b": "\"Be not wise in thine own eyes: fear the LORD, and depart from evil\" (Proverbs 3:7). Self-confidence and the fear of the LORD pull in opposite directions."
  },
  {
   "h": "Correction is love",
   "b": "\"For whom the LORD loveth he correcteth; even as a father the son in whom he delighteth\" (Proverbs 3:12). Discipline is presented as proof of belonging, not of rejection."
  },
  {
   "h": "Good in the power of thine hand",
   "b": "\"Withhold not good from them to whom it is due, when it is in the power of thine hand to do it\" (Proverbs 3:27). Wisdom is practical: if you can help now, do not delay."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 12:5-11 · James 1:5 · Psalm 37:3-5",
   "qs": [
    {
     "th": "Hebrews 12 quotes this chapter's teaching on the LORD's correction and explains it as a father's love, James promises wisdom to whoever asks God for it, and Psalm 37 echoes the call to trust in the LORD and commit your way to him.",
     "q": "Read these with Proverbs 3 — what do they share about how a person actually comes to trust God when his own understanding runs out?"
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
     "th": "The chapter's most familiar verses ask us to trust God rather than lean on ourselves, but we often trust him for the big things and manage the small ones alone.",
     "q": "Where do you tend to lean on your own understanding, and what would it look like to acknowledge God in that area this week?"
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
     "th": "\"Let not mercy and truth forsake thee\" (Proverbs 3:3) speaks of a character shaped from within, not only rules followed.",
     "q": "Ask the Spirit to write mercy and truth on the table of your heart, and to show where they are missing in how you speak and act."
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
     "th": "\"Be not wise in thine own eyes: fear the LORD, and depart from evil\" (Proverbs 3:7).",
     "q": "Confess honestly to God the places where you have trusted your own judgement, held back good you could have done, or resisted his correction, and receive his forgiveness."
    }
   ]
  }
 ]
},
// Day 536
{
 "ref": "Judges 20",
 "tag": "Old Testament",
 "api": "judges+20",
 "sum": [
  "All Israel gathers at Mizpah \"as one man,\" hears the Levite's account of what happened at Gibeah, and resolves not to go home until justice is done; they ask the tribe of Benjamin to hand over the guilty men, but Benjamin refuses.",
  "Israel asks counsel of God and is told that Judah shall go up first; twice Benjamin defeats them with heavy losses, and each time Israel weeps before the LORD.",
  "After weeping, fasting and offering sacrifices at Bethel, Israel asks a third time and is told, \"Go up; for to morrow I will deliver them into thine hand.\"",
  "Israel sets an ambush and defeats Benjamin, burning Gibeah and cutting the tribe down until only six hundred men survive in the wilderness at the rock Rimmon."
 ],
 "nug": [
  {
   "h": "As one man",
   "b": "\"Then all the children of Israel went out, and the congregation was gathered together as one man\" (Judges 20:1). The unity is remarkable, but it is unity around anger before it becomes unity around prayer."
  },
  {
   "h": "Benjamin would not hearken",
   "b": "\"But the children of Benjamin would not hearken to the voice of their brethren the children of Israel\" (Judges 20:13). Loyalty to their own tribe outweighed loyalty to justice, and it cost them almost everything."
  },
  {
   "h": "Skilled and still wrong",
   "b": "Benjamin's chosen men were so skilled that \"every one could sling stones at an hair breadth, and not miss\" (Judges 20:16). Ability does not make a cause right."
  },
  {
   "h": "Judah first, and still defeated",
   "b": "Israel asked God and heard, \"Judah shall go up first\" (Judges 20:18), yet lost. Being on the right side of a matter does not guarantee an easy road, and the defeats humble them."
  },
  {
   "h": "Weeping before the LORD",
   "b": "\"And the children of Israel went up and wept before the LORD until even\" (Judges 20:23). Only after repeated failure does Israel truly seek God, and then he promises, \"for to morrow I will deliver them into thine hand\" (Judges 20:28)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 49:27 · Judges 1:1-2 · Hosea 10:9",
   "qs": [
    {
     "th": "Genesis 49 describes Benjamin as a ravening wolf, Judges 1 opens the book with Israel asking the LORD who should go up first and being told Judah, and Hosea later says Israel has sinned \"from the days of Gibeah.\"",
     "q": "Read these beside Judges 20 — how does the book's beginning, when Israel asked God first, contrast with its end, when they ask only after losing?"
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
     "th": "Israel lost twice before it wept, and then fasted, and only then received a promise.",
     "q": "When has a failure or setback finally moved you to seek God in earnest, and what did you learn there?"
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
     "th": "Israel's zeal for justice was real, yet the story is far from tidy, and the tribe suffers deeply.",
     "q": "Ask the Spirit to help you hold both the seriousness of sin and the humility to see your own need of mercy."
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
     "th": "Even in this grim chapter God answers those who come to him weeping, and gives a word, \"Go up.\"",
     "q": "Give thanks for the ways God has heard you when you came to him with tears, and for correction that led you back to him."
    }
   ]
  }
 ]
},
// Day 537
{
 "ref": "John 9",
 "tag": "New Testament",
 "api": "john+9",
 "sum": [
  "Jesus sees a man blind from birth; when his disciples ask whose sin caused it, he answers that it was so that the works of God should be made manifest, and he makes clay, anoints the man's eyes, and sends him to wash in the pool of Siloam.",
  "The man returns seeing, and neighbours argue over whether it is really him; he can only say what happened, that the man called Jesus opened his eyes.",
  "The Pharisees investigate because it was the sabbath, question the man and his frightened parents, and, unable to answer his plain testimony, cast him out.",
  "Jesus finds him, reveals himself as the Son of man, and the man says, \"Lord, I believe,\" and worships; Jesus declares that he came so that those who see not might see and those who claim to see might be made blind."
 ],
 "nug": [
  {
   "h": "Not a puzzle to solve",
   "b": "\"Neither hath this man sinned, nor his parents: but that the works of God should be made manifest in him\" (John 9:3). Jesus turns the disciples' question about blame into an opportunity for God's work."
  },
  {
   "h": "While it is day",
   "b": "\"I must work the works of him that sent me, while it is day: the night cometh, when no man can work\" (John 9:4). Jesus speaks with urgency, and invites those who follow him to share it."
  },
  {
   "h": "The light of the world",
   "b": "\"As long as I am in the world, I am the light of the world\" (John 9:5). The healing is a sign of what Jesus is: he gives sight to the eyes and light to the darkness of the heart."
  },
  {
   "h": "One thing I know",
   "b": "\"One thing I know, that, whereas I was blind, now I see\" (John 9:25). The man cannot answer every theological question, but no argument can undo what happened to him."
  },
  {
   "h": "Who is really blind",
   "b": "\"If ye were blind, ye should have no sin: but now ye say, We see; therefore your sin remaineth\" (John 9:41). The ones who claim to see most clearly are the ones who cannot see Jesus at all."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 42:6-7 · Isaiah 35:5 · John 8:12",
   "qs": [
    {
     "th": "Isaiah promised that the servant would open blind eyes and that the eyes of the blind would be opened, and in John 8 Jesus has just said he is the light of the world, so this miracle is the sign that shows what those words mean.",
     "q": "Read these beside John 9 — how does the healing show Jesus doing exactly what the prophets said God's servant would do?"
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
     "th": "The man's testimony grows from \"A man that is called Jesus\" (John 9:11) to \"Lord, I believe\" (John 9:38) as he is questioned and pressed.",
     "q": "How has your own understanding of who Jesus is grown over time, and what has helped it grow?"
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
     "th": "The Pharisees looked, and would not see, while the beggar was cast out and found.",
     "q": "Ask the Spirit to open your eyes to any area where you think you see clearly but are really resisting the light."
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
     "th": "\"Lord, I believe. And he worshipped him\" (John 9:38).",
     "q": "Follow the healed man's example: worship Jesus now, as the light of the world, for who he is and for the sight he has given you."
    }
   ]
  }
 ]
},
// Day 538
{
 "ref": "Proverbs 4",
 "tag": "Psalms & Wisdom",
 "api": "proverbs+4",
 "sum": [
  "A father recalls the teaching he received from his own father, and urges his children to hear instruction and attend to understanding, holding fast his words and living.",
  "He declares that wisdom is the principal thing, and calls the reader to get wisdom and understanding at any cost, promising she will exalt and honour those who embrace her.",
  "Two paths are set side by side: the path of the just is like the shining light, growing brighter, while the way of the wicked is darkness in which they know not at what they stumble.",
  "The chapter closes with a call to guard the heart, keep the mouth and eyes straight, and ponder the path of the feet."
 ],
 "nug": [
  {
   "h": "Wisdom passed down",
   "b": "\"Hear, ye children, the instruction of a father, and attend to know understanding\" (Proverbs 4:1). The father is himself a son who was taught, and wisdom is handed on from one generation to the next."
  },
  {
   "h": "The principal thing",
   "b": "\"Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding\" (Proverbs 4:7). Nothing else we gain in life is worth more, and she is worth the sacrifice."
  },
  {
   "h": "Brighter and brighter",
   "b": "\"But the path of the just is as the shining light, that shineth more and more unto the perfect day\" (Proverbs 4:18). The righteous life is presented as a growing dawn."
  },
  {
   "h": "Stumbling in the dark",
   "b": "\"The way of the wicked is as darkness: they know not at what they stumble\" (Proverbs 4:19). The worst part is not knowing what is tripping you."
  },
  {
   "h": "Guard the heart",
   "b": "\"Keep thy heart with all diligence; for out of it are the issues of life\" (Proverbs 4:23). Everything we say and do flows from the heart, so it deserves our closest care."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 119:105 · Matthew 12:34-35 · Philippians 3:13-14",
   "qs": [
    {
     "th": "Psalm 119 calls God's word a lamp to the feet and light to the path, Jesus teaches in Matthew that the mouth speaks out of what fills the heart, and Paul in Philippians describes pressing on along the path toward the goal.",
     "q": "Read these with Proverbs 4 — what do they say together about how a heart and a path are shaped?"
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
     "th": "The father speaks about a heart to be guarded and a path to be pondered, both requiring daily attention.",
     "q": "What is one thing you are allowing into your heart, through what you watch, read or listen to, that you should guard more carefully?"
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
     "th": "\"Ponder the path of thy feet, and let all thy ways be established\" (Proverbs 4:26).",
     "q": "Ask the Spirit to show you whether your present path is leading toward the light or slowly away from it."
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
     "th": "This chapter shows a parent handing wisdom to the next generation, and the great need for that to happen.",
     "q": "Pray for a specific young person you know, a child, student or friend, asking that they would love wisdom, and for the older voices around them to speak it well."
    }
   ]
  }
 ]
},
// Day 539
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Keep thy heart with all diligence",
   "b": "\"Keep thy heart with all diligence; for out of it are the issues of life\" (Proverbs 4:23). This week began in the dark days of Israel's judges and ended with a father's plea to guard the heart, with the light of the world in between."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the Danites' seizure of Micah's priest and the conquest of Laish (Judges 18), the sobering horror at Gibeah (Judges 19), the war with Benjamin (Judges 20), the healing of the man born blind (John 9), and two chapters of Proverbs on trust and wisdom (Proverbs 3-4).",
     "q": "Which stayed with you more this week: the healed man's plain testimony, \"whereas I was blind, now I see\" (John 9:25), or the call, \"Trust in the LORD with all thine heart; and lean not unto thine own understanding\" (Proverbs 3:5)? Why?"
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
     "th": "\"Keep thy heart with all diligence; for out of it are the issues of life\" (Proverbs 4:23).",
     "q": "Sit quietly for a moment, and simply rest in the God who sees clearly what our hearts are like and loves us still."
    }
   ]
  }
 ]
},
// Day 540
{
 "ref": "Judges 21",
 "tag": "Old Testament",
 "api": "judges+21",
 "sum": [
  "Israel had sworn at Mizpah not to give their daughters to Benjamin, and now the people come to the house of God and weep, asking why one tribe should be lost from Israel.",
  "They discover that no one from Jabesh-gilead came to the assembly, and they send an army that destroys the town except for four hundred young virgins, who are given to the surviving Benjamites, though this is not enough.",
  "For the remaining men they devise another plan, telling them to take wives from the daughters of Shiloh as they dance at the yearly feast of the LORD, and the elders promise to smooth things over.",
  "The Benjamites do so, and everyone returns to their inheritance, and the book ends with the verdict, \"In those days there was no king in Israel: every man did that which was right in his own eyes.\""
 ],
 "nug": [
  {
   "h": "Weeping too late",
   "b": "\"And the people came to the house of God, and abode there till even before God, and lifted up their voices, and wept sore\" (Judges 21:2). Their grief is real, though it comes after the damage."
  },
  {
   "h": "Repenting them for Benjamin",
   "b": "\"And the children of Israel repented them for Benjamin their brother, and said, There is one tribe cut off from Israel this day\" (Judges 21:6). The nation feels compassion for the brother it nearly destroyed, and it is left with problems of its own making."
  },
  {
   "h": "A breach in the tribes",
   "b": "\"And the people repented them for Benjamin, because that the LORD had made a breach in the tribes of Israel\" (Judges 21:15). The wound is real, but the fixes that follow, more violence and more oaths, only add to it."
  },
  {
   "h": "Solving sin with more sin",
   "b": "The chapter's solutions include the destruction of Jabesh-gilead and the seizure of the daughters of Shiloh. Israel is trying to repair the damage of a rash vow with methods that add further harm."
  },
  {
   "h": "Every man in his own eyes",
   "b": "\"In those days there was no king in Israel: every man did that which was right in his own eyes\" (Judges 21:25). The final line of the book is a diagnosis, and it leaves readers longing for a true King."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 12:8 · 1 Samuel 8:4-7 · Proverbs 21:2",
   "qs": [
    {
     "th": "Deuteronomy 12 warns against doing whatever is right in one's own eyes, 1 Samuel 8 shows Israel asking for a king, and Proverbs 21 says every way of a man is right in his own eyes, but the LORD pondereth the hearts.",
     "q": "Read these together with Judges 21 — how does the book's last line prepare for Israel's request for a king, and what king does it finally point to?"
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
     "th": "Israel's leaders keep trying to fix a crisis with their own cleverness instead of asking God what to do.",
     "q": "Where are you tempted to solve a problem with a clever plan of your own before you have honestly asked God?"
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
     "th": "\"Every man did that which was right in his own eyes\" (Judges 21:25).",
     "q": "Ask the Spirit to show you where you have been your own authority, and to lead you back to Christ, the King the book longs for."
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
     "th": "The book of Judges ends in a wounded silence, with no rescuer in sight.",
     "q": "Be still before God. Ask him to speak in the quiet, and simply listen, without hurrying to fill the silence."
    }
   ]
  }
 ]
},
// Day 541
{
 "ref": "Ruth 1",
 "tag": "Old Testament",
 "api": "ruth+1",
 "sum": [
  "In the days when the judges ruled, a famine sends Elimelech of Bethlehem with his wife Naomi and their two sons to Moab, where Elimelech dies and the sons marry Moabite women, Orpah and Ruth.",
  "After about ten years both sons also die, leaving three widows, and Naomi, hearing that the LORD had visited his people with bread, resolves to return to Judah.",
  "She urges her daughters-in-law to go back to their mothers' houses; Orpah kisses her and goes, but Ruth clings to her and speaks a beautiful vow of loyalty.",
  "They arrive in Bethlehem, and Naomi, bitter, asks to be called Mara because the Almighty has dealt very bitterly with her; they come \"in the beginning of barley harvest.\""
 ],
 "nug": [
  {
   "h": "A famine and a flight",
   "b": "\"Now it came to pass in the days when the judges ruled, that there was a famine in the land\" (Ruth 1:1). The book of Ruth sits in the same dark era as Judges, yet opens a very different window onto it."
  },
  {
   "h": "The LORD had visited his people",
   "b": "Naomi hears \"how that the LORD had visited his people in giving them bread\" (Ruth 1:6). The word that God has provided draws her home."
  },
  {
   "h": "Whither thou goest",
   "b": "\"Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God\" (Ruth 1:16). A Moabite widow chooses Naomi's people and Naomi's God at great cost to herself."
  },
  {
   "h": "Call me Mara",
   "b": "\"Call me not Naomi, call me Mara: for the Almighty hath dealt very bitterly with me\" (Ruth 1:20). Naomi's grief is honest, and Scripture does not rebuke her for saying it."
  },
  {
   "h": "Full and empty",
   "b": "\"I went out full, and the LORD hath brought me home again empty\" (Ruth 1:21). She cannot yet see Ruth as a gift, but the last line quietly shows that the harvest is beginning: \"they came to Bethlehem in the beginning of barley harvest\" (Ruth 1:22)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 23:3-6 · Matthew 1:5-6 · Psalm 34:18",
   "qs": [
    {
     "th": "Deuteronomy 23 restricts Moabites from the assembly, which makes Ruth's welcome all the more striking, Matthew 1 names Ruth in the line of David and of Jesus, and Psalm 34 says the LORD is nigh unto them that are of a broken heart.",
     "q": "Read these beside Ruth 1 — what do they show about God's power to bring an outsider and a grieving woman into the centre of his plan?"
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
     "th": "Naomi's bitterness was honest, and the story shows that God does not abandon people who speak honestly of pain.",
     "q": "Is there a loss or disappointment you have not yet brought honestly to God, and what would it look like to do that today?"
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
     "th": "Ruth chose loyalty and faith at real cost, when she had every reason to turn back.",
     "q": "Ask the Spirit to show you where God may be inviting you to a costly loyalty or a step of faith."
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
     "th": "Naomi said that the Almighty had dealt bitterly with her and did not see the whole story.",
     "q": "Confess to God the places where you have blamed him, judged him by your circumstances, or turned away from home, and receive his welcome back."
    }
   ]
  }
 ]
},
// Day 542
{
 "ref": "Proverbs 5",
 "tag": "Psalms & Wisdom",
 "api": "proverbs+5",
 "sum": [
  "The father urges his son to attend to his wisdom and keep discretion, for the lips of the strange woman are sweet in the beginning but her end is bitter as wormwood.",
  "He warns that her paths lead down to death and hell and that she does not ponder the path of life; the son must remove his way far from her and not come near the door of her house.",
  "Otherwise he will give his honour to others, his strength will be spent, and at the last he will mourn and say, \"How have I hated instruction, and my heart despised reproof.\"",
  "Instead the son is called to faithfulness in marriage, to drink from his own cistern, and to rejoice in the wife of his youth, because the LORD sees every path a man takes."
 ],
 "nug": [
  {
   "h": "Sweet then bitter",
   "b": "\"For the lips of a strange woman drop as an honeycomb, and her mouth is smoother than oil: But her end is bitter as wormwood, sharp as a twoedged sword\" (Proverbs 5:3-4). Temptation always shows the sweetness first and hides the cost."
  },
  {
   "h": "Far from the door",
   "b": "\"Remove thy way far from her, and come not nigh the door of her house\" (Proverbs 5:8). Wisdom does not test how close we can safely stand; it advises distance."
  },
  {
   "h": "The late regret",
   "b": "\"And say, How have I hated instruction, and my heart despised reproof\" (Proverbs 5:12). The mourning comes at the last, when the damage has been done."
  },
  {
   "h": "Your own well",
   "b": "\"Drink waters out of thine own cistern, and running waters out of thine own well\" (Proverbs 5:15). Marriage is described as a source of steady, satisfying refreshment."
  },
  {
   "h": "Before the eyes of the LORD",
   "b": "\"For the ways of man are before the eyes of the LORD, and he pondereth all his goings\" (Proverbs 5:21). Nothing is hidden, and that is both a warning and a comfort."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 13:4 · 1 Corinthians 6:18-20 · Job 34:21",
   "qs": [
    {
     "th": "Hebrews 13 says marriage is honourable in all and the bed undefiled, Paul in 1 Corinthians urges believers to flee sexual immorality because their bodies are temples, and Job says God's eyes are upon the ways of man and he sees all his goings.",
     "q": "Read these beside Proverbs 5 — how do they root the call to faithfulness in both God's good design and his all-seeing care?"
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
     "th": "The chapter is frank and practical about temptation, and it asks for distance from the door, not just resolve at the last moment.",
     "q": "What is one practical boundary you could set to stay far from a temptation, whatever form it takes for you?"
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
     "th": "\"His own iniquities shall take the wicked himself, and he shall be holden with the cords of his sins\" (Proverbs 5:22).",
     "q": "Ask the Spirit to show any cord that is tightening around you, and to give you strength to ask for help before it does."
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
     "th": "The chapter also celebrates faithful love as a fountain to be blessed: \"Let thy fountain be blessed: and rejoice with the wife of thy youth\" (Proverbs 5:18).",
     "q": "Give thanks for faithful relationships in your life, for marriage, family and friends, and for warnings that keep us from harm."
    }
   ]
  }
 ]
},
// Day 543
{
 "ref": "Ruth 2",
 "tag": "Old Testament",
 "api": "ruth+2",
 "sum": [
  "Ruth asks Naomi if she may go and glean ears of corn in the field of someone in whose sight she shall find grace, and by chance, or so it seems, comes to the field of Boaz, a kinsman of Elimelech.",
  "Boaz arrives and greets his reapers with \"The LORD be with you,\" notices Ruth, and asks who she is; on hearing, he tells her to stay in his fields, drink from the servants' vessels, and be safe.",
  "Ruth asks why she has found grace in his eyes when she is a stranger, and Boaz answers that he has heard all she has done for Naomi, praying that the LORD would recompense her under whose wings she has come to trust.",
  "Boaz feeds her, orders his men to let fall handfuls on purpose, and she returns to Naomi with a full ephah; Naomi recognises that Boaz is a near kinsman and blesses the LORD."
 ],
 "nug": [
  {
   "h": "Grace in whose sight",
   "b": "\"Let me now go to the field, and glean ears of corn after him in whose sight I shall find grace\" (Ruth 2:2). Ruth is willing to work and to ask, and she does not presume."
  },
  {
   "h": "Her hap",
   "b": "\"And her hap was to light on a part of the field belonging unto Boaz\" (Ruth 2:3). It looks like chance, but the story hints at unseen providence."
  },
  {
   "h": "The LORD be with you",
   "b": "\"And, behold, Boaz came from Bethlehem, and said unto the reapers, The LORD be with you. And they answered him, The LORD bless thee\" (Ruth 2:4). A workplace shaped by blessing stands out sharply against the world of Judges."
  },
  {
   "h": "Under his wings",
   "b": "\"The LORD recompense thy work, and a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust\" (Ruth 2:12). Boaz sees Ruth's coming to Israel's God as taking refuge, and he becomes part of God's answer."
  },
  {
   "h": "Handfuls of purpose",
   "b": "\"And let fall also some of the handfuls of purpose for her\" (Ruth 2:16). Generosity is done quietly and in a way that protects her dignity."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 19:9-10 · Deuteronomy 24:19-21 · Psalm 91:1-4",
   "qs": [
    {
     "th": "Leviticus and Deuteronomy command Israel to leave the edges and the dropped sheaves for the poor and the stranger, which Boaz practises, and Psalm 91 speaks of taking refuge under God's wings and feathers.",
     "q": "Read these beside Ruth 2 — how does Boaz's generosity show God's law lived out, and God's own shelter given through a person?"
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
     "th": "Ruth found provision through humble work and a kind man's obedience to God's law.",
     "q": "Where could you, like Boaz, quietly leave something behind so that someone in need may find it with dignity?"
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
     "th": "Naomi says, \"Blessed be he of the LORD, who hath not left off his kindness to the living and to the dead\" (Ruth 2:20).",
     "q": "Ask the Spirit to open your eyes to God's kindness in the ordinary events of this week, the \"hap\" that looks like chance but is not."
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
     "th": "The God of Ruth 2 is the one under whose wings a stranger can find refuge, and who provides for the needy through his people.",
     "q": "Adore him for his faithful kindness, his shelter, and his quiet care in details we hardly notice."
    }
   ]
  }
 ]
},
// Day 544
{
 "ref": "John 10",
 "tag": "New Testament",
 "api": "john+10",
 "sum": [
  "Jesus teaches that the shepherd enters by the door and the sheep hear his voice, while the thief comes over the wall, and then says, \"I am the door: by me if any man enter in, he shall be saved.\"",
  "He declares that he is the good shepherd who gives his life for the sheep, unlike the hireling who flees, and that he knows his sheep and has other sheep not of this fold, so that there shall be one fold and one shepherd.",
  "He lays down his life of himself and takes it up again by his Father's command, and the people are divided, some saying he has a devil and others asking whether a devil can open the eyes of the blind.",
  "At the feast of dedication the Jews ask him to say plainly whether he is the Christ; he points to his works, says his sheep hear his voice and none can pluck them out of his hand, and they take up stones, but he escapes and goes beyond Jordan, where many believe on him."
 ],
 "nug": [
  {
   "h": "The door",
   "b": "\"I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture\" (John 10:9). Jesus is the only way in, and it leads to freedom and provision."
  },
  {
   "h": "Life abundant",
   "b": "\"The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly\" (John 10:10). The contrast is between taking and giving."
  },
  {
   "h": "The good shepherd",
   "b": "\"I am the good shepherd: the good shepherd giveth his life for the sheep\" (John 10:11). This is a shepherd whose care is proved by what it costs him."
  },
  {
   "h": "One fold, one shepherd",
   "b": "\"And other sheep I have, which are not of this fold: them also I must bring, and they shall hear my voice; and there shall be one fold, and one shepherd\" (John 10:16). Jesus's care reaches beyond Israel to all nations."
  },
  {
   "h": "Held in his hand",
   "b": "\"My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand\" (John 10:27-28). The security of the flock rests on his grip, not on ours."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 23:1-4 · Ezekiel 34:11-16 · 1 Peter 5:1-4",
   "qs": [
    {
     "th": "Psalm 23 is the great song of the LORD as shepherd, Ezekiel 34 promises that God himself will search out his sheep after the failure of the shepherds of Israel, and Peter calls church leaders to shepherd the flock under Christ, the chief Shepherd.",
     "q": "Read these with John 10 — how does Jesus claim to be the very shepherd God promised, and what does that ask of those who lead in his name?"
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
     "th": "Jesus knows his sheep, and they know his voice, among many other voices claiming attention.",
     "q": "Which voices are loudest in your life right now, and how do you recognise and follow the voice of Jesus?"
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
     "th": "\"...know my sheep, and am known of mine\" (John 10:14).",
     "q": "Ask the Spirit to deepen the sense of being personally known and called by name by the good shepherd."
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
     "th": "The good shepherd cares for the whole flock and for other sheep not yet gathered.",
     "q": "Pray for those who lead and shepherd others in your church and community, and for someone you know who has wandered from the fold, asking that they would hear his voice."
    }
   ]
  }
 ]
},
// Day 545
{
 "ref": "Proverbs 6",
 "tag": "Psalms & Wisdom",
 "api": "proverbs+6",
 "sum": [
  "The father warns about being surety for a friend, urging his son to deliver himself like a roe from the hunter, and not to give sleep to his eyes until he is free.",
  "He points the sluggard to the ant, which prepares her food without a leader, and warns that poverty will come like a traveller to the one who says, \"a little sleep, a little slumber.\"",
  "He describes the worthless person with a froward mouth, and lists six things the LORD hates, and seven that are an abomination to him, including pride, lies, and one who sows discord among brethren.",
  "He repeats the call to keep the father's commandment, which is a lamp and a light, and closes with a sober warning against adultery, which destroys a person's soul."
 ],
 "nug": [
  {
   "h": "Go to the ant",
   "b": "\"Go to the ant, thou sluggard; consider her ways, and be wise\" (Proverbs 6:6). Wisdom can be learned from a tiny creature that works steadily without being driven."
  },
  {
   "h": "How long wilt thou sleep",
   "b": "\"How long wilt thou sleep, O sluggard? when wilt thou arise out of thy sleep?\" (Proverbs 6:9). The question is gentle and direct, aimed at the small delays that add up."
  },
  {
   "h": "Poverty like a traveller",
   "b": "\"So shall thy poverty come as one that travelleth, and thy want as an armed man\" (Proverbs 6:11). Neglect arrives unhurried, then cannot be turned back."
  },
  {
   "h": "Six things, yea seven",
   "b": "\"These six things doth the LORD hate: yea, seven are an abomination unto him\" (Proverbs 6:16). The list begins with \"A proud look, a lying tongue, and hands that shed innocent blood\" (Proverbs 6:17)."
  },
  {
   "h": "Discord among brethren",
   "b": "The list ends with \"he that soweth discord among brethren\" (Proverbs 6:19). God is especially concerned about damage done to the unity of his people."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Proverbs 24:30-34 · Ephesians 4:25-32 · 2 Thessalonians 3:10-12",
   "qs": [
    {
     "th": "Proverbs 24 gives a picture of the sluggard's neglected field, which mirrors this chapter, Ephesians 4 calls believers to put away lying and bitterness and to be kind and forgiving, and 2 Thessalonians teaches quiet, steady work.",
     "q": "Read these together with Proverbs 6 — what do they say about the small daily habits, of work and of speech, that build or break a life?"
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
     "th": "The chapter ranges over debt, laziness, dishonesty, and lust, and shows how small choices lead to large results.",
     "q": "Which of the chapter's warnings speaks to you most, and what small habit could you change this week?"
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
     "th": "\"For the commandment is a lamp; and the law is light; and reproofs of instruction are the way of life\" (Proverbs 6:23).",
     "q": "Ask the Spirit to help you welcome correction as a lamp rather than an attack."
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
     "th": "Among the things the LORD hates are pride and discord, and among the things he loves is a quiet, listening heart.",
     "q": "Be still before God. Listen for any quiet word of correction or comfort, and simply receive it without arguing."
    }
   ]
  }
 ]
},
// Day 546
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "The LORD be with you",
   "b": "\"And, behold, Boaz came from Bethlehem, and said unto the reapers, The LORD be with you. And they answered him, The LORD bless thee\" (Ruth 2:4). This week the book of Judges ended, and the book of Ruth began, showing that God was still at work through quiet faithfulness."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you read the end of Judges (Judges 21), which completes the book, and the beginning of Ruth (Ruth 1-2), a story of loyalty and provision set in the same era; two more chapters of Proverbs on purity and diligence (Proverbs 5-6); and Jesus the good shepherd in John 10, the last chapter of John in this batch.",
     "q": "Which stayed with you more this week: Ruth's vow, \"thy people shall be my people, and thy God my God\" (Ruth 1:16), or Jesus's promise, \"they shall never perish, neither shall any man pluck them out of my hand\" (John 10:28)? Why?"
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
     "th": "\"I am the good shepherd: the good shepherd giveth his life for the sheep\" (John 10:11).",
     "q": "Sit quietly for a moment, and simply rest in the care of the good shepherd before you move on."
    }
   ]
  }
 ]
},
];
