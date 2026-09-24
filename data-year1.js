/* Deep Roots — Year 1: days 1–365
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

const YEAR1=[
// Day 1
{
 "ref": "Genesis 1",
 "tag": "Old Testament",
 "v": [
  "In the beginning God created the heaven and the earth.",
  "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
  "And God said, Let there be light: and there was light.",
  "And God saw the light, that it was good: and God divided the light from the darkness.",
  "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.",
  "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.",
  "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.",
  "And God called the firmament Heaven. And the evening and the morning were the second day.",
  "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.",
  "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.",
  "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.",
  "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.",
  "And the evening and the morning were the third day.",
  "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:",
  "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.",
  "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.",
  "And God set them in the firmament of the heaven to give light upon the earth,",
  "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.",
  "And the evening and the morning were the fourth day.",
  "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.",
  "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.",
  "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.",
  "And the evening and the morning were the fifth day.",
  "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.",
  "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.",
  "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.",
  "So God created man in his own image, in the image of God created he him; male and female created he them.",
  "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.",
  "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.",
  "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.",
  "And God saw every thing that he made, and, behold, it was very good. And the evening and the morning were the sixth day."
 ],
 "nug": [
  {
   "h": "A verb reserved for God",
   "b": "The Hebrew word for \"created\" in verse 1 (bara) is used in Scripture only with God as the one doing it. Other verbs like \"made\" are used of people too. Bara marks work that only He can do."
  },
  {
   "h": "A plural name with a singular verb",
   "b": "\"God\" here is Elohim, a plural form in Hebrew, yet the verb \"created\" is singular. Many readers see an early hint of plurality within one God, which lines up with \"Let us make man\" in verse 26 and the Spirit hovering in verse 2."
  },
  {
   "h": "Three days of forming, three days of filling",
   "b": "Days 1–3 shape the spaces (light, sky and sea, dry land). Days 4–6 fill them (lights, birds and fish, animals and people). Day 1 pairs with day 4, day 2 with day 5, day 3 with day 6. The passage is built with deliberate order."
  },
  {
   "h": "The sun and moon have no names",
   "b": "Verse 16 says \"the greater light\" and \"the lesser light\". The ordinary Hebrew words for sun and moon are left out. Israel had just come out of Egypt, where the sun was worshipped as a god. Moses (trained in Egypt, Acts 7:22) is told to describe them as lamps that God hung."
  },
  {
   "h": "Seven \"goods\"",
   "b": "God calls His work \"good\" six times (vv. 4, 10, 12, 18, 21, 25). The seventh comes at the end, when people are made: \"very good\" (v. 31). Notice that the last, best verdict comes after humanity appears."
  },
  {
   "h": "Why Jewish days start at sunset",
   "b": "\"The evening and the morning were the first day\" puts evening first. This is the reason the Jewish day runs from sunset to sunset, and why the Sabbath begins on Friday evening."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Start with: John 1:1–5 · Colossians 1:16–17 · Psalm 33:6–9 · Hebrews 11:3",
   "qs": [
    {
     "th": "John opens his Gospel with the same three words as Genesis, \"In the beginning\", then says the Word was God and that everything was made through Him. Paul says the same in Colossians 1:16: all things were created through Him and for Him. So the One who speaks in Genesis 1 is being identified with Christ.",
     "q": "Read one of the passages above. How does it change the way you hear \"And God said\" in Genesis 1?"
    },
    {
     "th": "The New Testament keeps returning to this chapter. In 2 Corinthians 4:6, Paul says the God who commanded light to shine out of darkness has shone in our hearts. Creation and new birth are described in the same words.",
     "q": "Where else in Scripture do you find light and darkness used to describe something spiritual?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "qs": [
    {
     "th": "Genesis 1 opens with a world that is formless, empty and dark. God doesn't struggle with it. He speaks and order comes. Think of a stretch of life that felt shapeless, like waiting on test results, a job change or a rift in the family. This is the same God who spoke over the deep.",
     "q": "Which part of your week feels formless or out of your control right now, and what would it look like to hand it to Him?"
    },
    {
     "th": "Verses 26–27 say every human being is made in God's image. James 3:9 uses this to rebuke us for speaking badly of people, because they are made in God's likeness. It applies to the driver who cut you off and to the colleague who wears you out.",
     "q": "Who will be hardest to see this way today, and what might change if you did?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "qs": [
    {
     "th": "In verse 2 the Spirit is already present, hovering over the waters before God speaks. The Hebrew verb is the one used in Deuteronomy 32:11 of an eagle fluttering over her young. The Spirit's first appearance in the Bible is close, caring and active before anything can be seen.",
     "q": "Is there an area of your life where nothing seems to be happening yet? What might it mean that the Spirit could already be at work there?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: adoration",
   "m": "3–5 min",
   "qs": [
    {
     "th": "Adoration asks for nothing. It looks at God and says what is true. A simple way in is to start each line with \"You are\" or \"You made\". Psalm 19:1 does this: the heavens declare the glory of God. Your list can be just as plain.",
     "q": "Write a few lines to God about who He is, based on what you read today."
    }
   ]
  }
 ]
},

// Day 2
{
 "ref": "Genesis 2",
 "tag": "Old Testament",
 "api": "genesis+2",
 "nug": [
  {
   "h": "The first thing called holy",
   "b": "The seventh day is the first thing in Scripture that God declares holy (v. 3). It isn’t a mountain, a building or a person. It is a stretch of time."
  },
  {
   "h": "A new name for God",
   "b": "Chapter 1 used “God” (Elohim). Chapter 2 adds “LORD God” (v. 4), the first time the personal name Yahweh appears in the Bible. Chapter 1 gives the wide view of the cosmos; chapter 2 zooms in on the man and the garden."
  },
  {
   "h": "Made from his side",
   "b": "The Hebrew word usually translated “rib” (v. 21) is translated “side” elsewhere in the Old Testament, for example the side of the tabernacle. Many readers therefore take it as “from his side”: beside him, not above or below."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 19:4–6 · Ephesians 5:31–32 · Revelation 22:1–2 · Hebrews 4:9–10",
   "qs": [
    {
     "th": "Jesus quotes Genesis 2:24 when asked about marriage (Matthew 19:4–6), treating the account as real and authoritative. Paul then says the picture points to Christ and the church (Ephesians 5:31–32). The tree of life, first seen in this garden, returns in Revelation 22:2.",
     "q": "Choose one of these. What does it show you about how the New Testament reads Genesis 2?"
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
     "th": "In verse 7 God forms the man from dust and breathes into him Himself. You are dust with God’s breath in you, which is humbling and dignifying at once. Then in verse 18, the first thing God calls “not good” in all creation is being alone.",
     "q": "Where have you been going it alone lately, and who could you let in?"
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
     "th": "In verse 7 God breathes into the man. In John 20:22 Jesus breathes on His disciples and says, “Receive the Holy Spirit.” Many readers hear an echo of Genesis here.",
     "q": "What does it mean to you that God gives life by close, personal contact and not from a distance?"
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
     "th": "Thanksgiving is specific. “Thank you for everything” slides past, but naming one thing sticks. In verse 9 God plants trees that are “pleasant to the sight, and good for food.” He gave beauty as well as food.",
     "q": "List five specific things you’ve received this week, small ones included, and thank Him for each."
    }
   ]
  }
 ]
},

// Day 3
{
 "ref": "Psalm 1",
 "tag": "Psalms & Wisdom",
 "v": [
  "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
  "But his delight is in the law of the LORD; and in his law doth he meditate day and night.",
  "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
  "The ungodly are not so: but are like the chaff which the wind driveth away.",
  "Therefore the ungodly shall not stand in the judgment, nor sinners in the congregation of the righteous.",
  "For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish."
 ],
 "nug": [
  {
   "h": "The front door of the book",
   "b": "The Psalms are divided into five books, echoing the five books of Moses, and Psalm 1 is the entrance. Some ancient traditions treat Psalms 1 and 2 as one introduction. Many manuscripts of Acts 13:33 call Psalm 2 “the second psalm.”"
  },
  {
   "h": "“Meditate” is out loud",
   "b": "The Hebrew word (hagah) can mean to murmur or mutter. In the ancient world people usually read aloud even when alone, so this is closer to quietly speaking the words over and over than silent thinking."
  },
  {
   "h": "Planted by channels",
   "b": "The “rivers of water” (v. 3) are better understood as irrigation channels. In a dry land this tree isn’t growing wild beside a river. Someone deliberately planted it beside a water supply."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Jeremiah 17:7–8 · Joshua 1:8 · John 15:1–5 · Psalm 2",
   "qs": [
    {
     "th": "Jeremiah 17:7–8 borrows this tree almost image for image, but says the tree is the person who trusts the LORD. In John 15 Jesus calls Himself the vine and says fruit comes from staying in Him. Psalm 1’s blessed man is fruitful because he stays rooted.",
     "q": "What do the tree in Psalm 1 and the vine in John 15 have in common? What is different?"
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
     "th": "Notice the downward slope in verse 1: walk, stand, sit. Someone who starts by listening to a bad idea can end up settled in it. It rarely happens in one step. Think of a habit or group of friends that shaped you slowly.",
     "q": "Which voices are you “walking” with most this week, and what are they gradually making of you?"
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
     "th": "The tree draws from a channel it didn’t dig. In John 7:38–39 Jesus uses the picture of rivers of living water flowing from within believers, and John says He meant the Spirit.",
     "q": "Where are you trying to bear fruit by effort alone, and what would drawing from the stream look like there?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: listening",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Psalm 1 says to meditate day and night. Try this: read verse 2 slowly twice, then be quiet for two minutes. You aren’t trying to produce anything. Just notice which word your mind returns to.",
     "q": "After the quiet, which word or phrase stayed with you? Write it down and ask what God might be saying through it."
    }
   ]
  }
 ]
},

// Day 4
{
 "ref": "Genesis 3",
 "tag": "Old Testament",
 "api": "genesis+3",
 "nug": [
  {
   "h": "The serpent starts with a question",
   "b": "“Yea, hath God said…?” (v. 1). He doesn’t deny God; he reshapes God’s words. Eve’s reply then adds “neither shall ye touch it” (v. 3), which isn’t in God’s command in 2:16–17."
  },
  {
   "h": "God’s first words are a question",
   "b": "“Where art thou?” (v. 9). God knew where they were. Many readers hear a call to come out, not an accusation."
  },
  {
   "h": "The first promise of a rescuer",
   "b": "Verse 15 has been called the “first gospel” by Christian readers since at least the second century. Descent is normally traced through the father, yet this promise speaks of the woman’s seed. Galatians 4:4 says Jesus was “made of a woman.”"
  },
  {
   "h": "Skins for fig leaves",
   "b": "God replaces their fig leaves with garments of skin (v. 21). Many readers see a foreshadowing of one life covering another, though the text doesn’t say so directly."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 5:12–19 · 1 Corinthians 15:21–22 · Galatians 4:4 · Revelation 12:9",
   "qs": [
    {
     "th": "In Romans 5 Paul sets Adam and Christ side by side: through one man sin and death entered, through one man came the gift of righteousness. Genesis 3 is where the problem begins, and Romans 5 shows Genesis 3:15 answered.",
     "q": "Read Romans 5:17–19. What does “much more” tell you about the size of the gift compared with the size of the fall?"
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
     "th": "Notice the sequence in verse 6: she saw, she took, she gave. It began with looking. Temptation often arrives as something that looks good, not obviously bad. Then Adam blames Eve and Eve blames the serpent. Hiding and blaming were the first reflexes.",
     "q": "When you’ve done wrong, do you tend to hide, blame or explain it away? What would it look like to come out from the trees?"
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
     "th": "God’s first words to them are “Where art thou?” (v. 9). John 16:8 says the Spirit convicts of sin. Conviction from God is a call back, not a verdict meant to crush.",
     "q": "Is there something the Spirit has been gently drawing you to that you’ve been avoiding?"
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
     "th": "Confession isn’t a list read to a judge; it’s coming out from the trees. 1 John 1:9 promises that God is faithful and just to forgive. A simple way is to name it plainly, without excuses, then receive the word: forgiven.",
     "q": "Name one thing plainly, with no “but,” then write out 1 John 1:9 in your own words."
    }
   ]
  }
 ]
},

// Day 5
{
 "ref": "Matthew 1",
 "tag": "New Testament",
 "api": "matthew+1",
 "nug": [
  {
   "h": "Five women in a list of men",
   "b": "Matthew names Tamar, Rahab, Ruth and “her that had been the wife of Urias” (Bathsheba), plus Mary. That is unusual in a Jewish genealogy, and several of the women had Gentile connections or a scandal attached."
  },
  {
   "h": "Three sets of fourteen",
   "b": "Verse 17 groups the generations in threes of fourteen. In Hebrew, letters double as numbers and the letters of David’s name add up to 14. Matthew also skips some kings, which was normal, since “begat” could mean “became the ancestor of.”"
  },
  {
   "h": "Written for Jewish readers",
   "b": "Matthew was a tax collector who became a follower. He starts with Abraham and David to show Jesus as the promised Messiah. Luke, writing as a Gentile, traces the line back to Adam (Luke 3:38)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 12:1–3 · 2 Samuel 7:12–16 · Isaiah 7:14 · Ruth 4:13–22",
   "qs": [
    {
     "th": "Matthew opens with two promises: to Abraham (blessing for all nations) and to David (a throne that lasts forever). Tamar, Rahab and Ruth show the Abraham promise already reaching outsiders. Verse 21 gives the name: Jesus is the Greek form of Joshua, “the LORD saves.”",
     "q": "Choose one passage above. How does Matthew show that Jesus is the answer to it?"
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
     "th": "It’s easy to skip a genealogy, but this list includes Rahab, whom Hebrews 11:31 calls a harlot, and a king’s scandal. God doesn’t work through a tidy family tree. He works through real families with real mess.",
     "q": "What in your family story or your past is hard to bring to God, and what does this list say about that?"
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
     "th": "Verse 18 says Mary was found with child “of the Holy Ghost.” Joseph’s part is to obey a dream and take her as his wife (vv. 20–25). The Spirit acts, and a quiet man says yes.",
     "q": "When have you been asked to trust something you couldn’t explain? What does Joseph’s quiet obedience show you?"
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
     "th": "Intercession is standing in the gap for others by name. Matthew 1 is a list of names. Try praying the same way: take a name from your family or church and say what you’d like God to do in that life.",
     "q": "Write three names and one specific request for each."
    }
   ]
  }
 ]
},

// Day 6
{
 "ref": "Psalm 8",
 "tag": "Psalms & Wisdom",
 "v": [
  "O LORD our Lord, how excellent is thy name in all the earth! who hast set thy glory above the heavens.",
  "Out of the mouth of babes and sucklings hast thou ordained strength because of thine enemies, that thou mightest still the enemy and the avenger.",
  "When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained;",
  "What is man, that thou art mindful of him? and the son of man, that thou visitest him?",
  "For thou hast made him a little lower than the angels, and hast crowned him with glory and honour.",
  "Thou madest him to have dominion over the works of thy hands; thou hast put all things under his feet:",
  "All sheep and oxen, yea, and the beasts of the field;",
  "The fowl of the air, and the fish of the sea, and whatsoever passeth through the paths of the seas.",
  "O LORD our Lord, how excellent is thy name in all the earth!"
 ],
 "nug": [
  {
   "h": "Quoted in the New Testament",
   "b": "Jesus quotes verse 2 in Matthew 21:16 when children praise Him in the temple. Hebrews 2:6–9 applies verses 4–6 to Jesus."
  },
  {
   "h": "A night-sky psalm",
   "b": "Only the moon and stars are mentioned, not the sun, so it is often read as written under the night sky. It is often suggested that David wrote it as a shepherd."
  },
  {
   "h": "“Lower than the angels”",
   "b": "The Hebrew word here is elohim, which can mean God, gods or angels, so translations differ. Hebrews 2:7 quotes the Greek version, which reads “angels.”"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 1:26–28 · Hebrews 2:5–9 · 1 Corinthians 15:27 · Matthew 21:15–16",
   "qs": [
    {
     "th": "Psalm 8 is Genesis 1 turned into a song. It picks up dominion (v. 6) and asks the question Genesis leaves unspoken: why us? Hebrews 2 says we don’t yet see everything under human feet, but we do see Jesus, crowned with glory and honour.",
     "q": "In Hebrews 2:8–9, what do we see, and how does that change the way you read Psalm 8?"
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
     "th": "David looks at the stars and feels small, and then notes that God is “mindful” of us. Both are true at once. Smallness doesn’t make you insignificant; it makes God’s attention a gift.",
     "q": "Where do you feel unnoticed right now, and what would it mean that God is mindful of you there?"
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
     "th": "Verse 2 says strength comes “out of the mouth of babes.” God often chooses the small and overlooked (1 Corinthians 1:27), and His power often shows up in the small and unexpected.",
     "q": "What small thing have you been prompted to do that you keep dismissing as too little to matter?"
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
     "th": "This psalm opens and closes with the same line: “O LORD our Lord, how excellent is thy name in all the earth!” A good prayer form is to begin and end with praise and put your needs in the middle.",
     "q": "Write your own prayer that begins and ends with praise, with one honest concern in between."
    }
   ]
  }
 ]
},

// Day 7
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Sabbath means “stop”",
   "b": "The Hebrew shabbat comes from a verb meaning to cease. God didn’t rest because He was tired (Isaiah 40:28). He rested to show that His work was finished, and to give people a rhythm to follow."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "There is no new reading today, and no catching up. If you missed days this week, nothing is owed. Look at the takeaways above and see whether a theme appears. This week the passages keep returning to one question: who is God, and who are we before Him?",
     "q": "What is the one thing God seems to have been saying to you this week?"
    },
    {
     "th": "You practised five forms of prayer this week: adoration, thanksgiving, silence, confession and intercession. Most people naturally lean toward one or two.",
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
     "th": "Rest is a way of saying that God holds the world without you. Psalm 127:2 says “he giveth his beloved sleep.”",
     "q": "What could you set down today, even for an hour, as an act of trust?"
    }
   ]
  }
 ]
}
];
