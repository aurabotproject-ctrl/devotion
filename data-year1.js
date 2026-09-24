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
},

// Day 8
{
 "ref": "Genesis 4",
 "tag": "Old Testament",
 "api": "genesis+4",
 "nug": [
  {
   "h": "Two offerings, one welcomed",
   "b": "Cain brings “the fruit of the ground”; Abel brings “the firstlings of his flock and of the fat thereof” (v. 4) — his best, not just his first. Hebrews 11:4 says Abel offered “by faith,” which suggests the difference was the heart behind the gift, not the crop versus the lamb."
  },
  {
   "h": "A city named after a son",
   "b": "Cain becomes a wanderer, yet builds a city and names it after his son Enoch (v. 17). Even under judgment, people build, marry and make music (Jubal, v. 21) and tools (Tubal-cain, v. 22). Common grace continues outside Eden."
  },
  {
   "h": "Calling on the name of the LORD",
   "b": "Verse 26 says that after Seth's son Enosh was born, “then began men to call upon the name of the LORD.” Many readers take this as the start of public, corporate worship — not private prayer alone, but people gathering to call on God together."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 11:4 · 1 John 3:11–12 · Matthew 23:35",
   "qs": [
    {
     "th": "Hebrews 11:4 says Abel's blood “yet speaketh,” and Jesus later calls him “righteous Abel” (Matthew 23:35). The first murder in Scripture is a brother killing a brother over worship God accepted and worship He didn't.",
     "q": "Why do you think unaccepted worship turned to anger instead of self-examination in Cain?"
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
     "th": "God asks Cain “Why art thou wroth?” before anything happens (v. 6), then warns him that sin “lieth at the door” like a crouching animal, wanting him — but he can master it (v. 7). The warning comes before the fall, not after.",
     "q": "What is “crouching at your door” this week — an old grudge, a comparison, an appetite — and what would it look like to master it rather than let it master you?"
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
     "th": "Even after the murder, God puts a mark on Cain to protect his life (v. 15). Judgment and mercy sit side by side; God restrains vengeance even against the guilty.",
     "q": "Where do you need to extend the kind of restraint God showed Cain — toward someone who has genuinely wronged you?"
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
     "th": "Cain's answer to God is a deflection: “Am I my brother's keeper?” (v. 9). Real confession stops deflecting and just answers the question God is actually asking.",
     "q": "Is there a question God has been asking you that you've been answering with a different question? Write out an honest answer to Him now."
    }
   ]
  }
 ]
},

// Day 9
{
 "ref": "Genesis 5",
 "tag": "Old Testament",
 "api": "genesis+5",
 "nug": [
  {
   "h": "A refrain that keeps interrupting",
   "b": "Nine times this chapter repeats “and he died” after listing a long, full life. It reads almost like a drumbeat under Genesis 3's sentence (2:17) — death is now simply how every human story on this list ends, except one."
  },
  {
   "h": "The man who didn't get the refrain",
   "b": "Enoch “walked with God: and he was not; for God took him” (v. 24) — no death notice. Hebrews 11:5 says he “was translated that he should not see death.” He lived the shortest life on the list (365 years) but is remembered for how he walked, not how long."
  },
  {
   "h": "A name that means “rest” or “comfort”",
   "b": "Lamech names his son Noah, explaining, “this same shall comfort us concerning our work and toil of our hands, because of the ground which the LORD hath cursed” (v. 29). The name carries a hope the family doesn't yet know how God will answer."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 3:36–38 · Jude 1:14–15 · Hebrews 11:5",
   "qs": [
    {
     "th": "Luke traces Jesus' genealogy all the way back through this list to Adam (Luke 3:36–38). Jude even quotes a prophecy attributed to Enoch (Jude 14–15). The Bible treats this dry-looking list as real history that Christ Himself stands at the end of.",
     "q": "What does it mean to you that Jesus' family tree includes a chapter that is mostly just names and ages?"
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
     "th": "“And he died” is not written about you yet. Each name on this list once had exactly the number of days you have now: unknown, but real, and meant to be walked with God rather than merely survived.",
     "q": "If “walked with God” were the one line written over this current season of your life, would it be true yet?"
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
     "th": "Scripture doesn't explain how Enoch walked with God for three hundred years (v. 22) — it just states it as a fact of his life, a steady companionship rather than a single dramatic moment.",
     "q": "What would a steadier, less dramatic kind of walking with God look like for you this week?"
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
     "th": "This whole family line was carrying forward a promise none of them would live to see fulfilled — the seed who would deal with the serpent (Genesis 3:15).",
     "q": "Pray for someone in your own family line — living or a generation ahead of you — who is carrying a promise or a burden they may not see resolved in their lifetime."
    }
   ]
  }
 ]
},

// Day 10
{
 "ref": "Psalm 2",
 "tag": "Psalms & Wisdom",
 "api": "psalms+2",
 "nug": [
  {
   "h": "Quoted more than almost any other psalm",
   "b": "The New Testament quotes or alludes to Psalm 2 repeatedly — Acts 4:25–26, Acts 13:33, Hebrews 1:5, Hebrews 5:5, and Revelation 2:27 and 19:15 all draw on it. Early Christians read it as directly about Jesus."
  },
  {
   "h": "A coronation psalm turned prophecy",
   "b": "The setting is the crowning of a king in Jerusalem while rival nations plot rebellion. “Thou art my Son; this day have I begotten thee” (v. 7) was likely sung of Israel's earthly king, but Acts 13:33 applies it to Jesus' resurrection — the ultimate, final coronation the earthly ones only pictured."
  },
  {
   "h": "“Kiss the Son”",
   "b": "Verse 12's command to “kiss the Son” pictures the ancient gesture of submission to a king. It's followed immediately by a promise: “blessed are all they that put their trust in him.” The psalm's last word is refuge, not threat."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 4:25–28 · Acts 13:32–33 · Hebrews 1:5 · Revelation 19:15–16",
   "qs": [
    {
     "th": "In Acts 4, the early church, under threat, prays this exact psalm back to God — quoting verses 1–2 almost word for word about Herod and Pilate. They didn't treat it as ancient poetry; they treated it as a script still running.",
     "q": "Read Acts 4:24–30. What did the disciples ask for, and what does that tell you about how they used this psalm under pressure?"
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
     "th": "The nations “rage” and “imagine a vain thing” (v. 1) against God's rule — but verse 4 says “he that sitteth in the heavens shall laugh.” Not mockery of people, but calm certainty that no rebellion changes the outcome.",
     "q": "What's “raging” in your world right now — news, an argument, an anxiety — that might look different held up against verse 4's certainty?"
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
     "th": "The psalm ends by inviting rebels to “serve the LORD with fear, and rejoice with trembling” (v. 11) — two things that don't usually go together: reverence and joy in the same breath.",
     "q": "Where in your life is fear of God missing, and where is joy in Him missing — and what would it take to hold both?"
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
     "th": "This is a psalm about a King who cannot be dethroned. Adoration means naming that out loud rather than assuming it.",
     "q": "Write a short prayer addressing Jesus as the King this psalm points to — use at least one line from the psalm itself."
    }
   ]
  }
 ]
},

// Day 11
{
 "ref": "Genesis 6",
 "tag": "Old Testament",
 "api": "genesis+6",
 "nug": [
  {
   "h": "A God who grieves",
   "b": "Verse 6 says the LORD “repented… and it grieved him at his heart.” The Hebrew word for grieved is related to physical pain. This is one of the most emotionally raw statements about God in the whole Bible."
  },
  {
   "h": "A puzzling phrase",
   "b": "“The sons of God” marrying “the daughters of men” (v. 2) has been read at least three ways across church history — fallen angels, powerful rulers, or the line of Seth intermarrying with the line of Cain. The text itself doesn't settle it; it's worth holding loosely."
  },
  {
   "h": "Exact measurements for an impossible boat",
   "b": "God gives Noah precise dimensions (v. 15) — roughly the length of one and a half football fields. Ancient Near Eastern shipbuilders didn't build boats that shape; it's built for stability in a flood, not for sailing anywhere."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Peter 3:18–20 · 2 Peter 2:5 · Matthew 24:37–39 · Hebrews 11:7",
   "qs": [
    {
     "th": "Peter calls Noah “a preacher of righteousness” (2 Peter 2:5) — building the ark for decades was itself a hundred-year sermon nobody outside his family heeded. Jesus later compares His own return to “the days of Noah” (Matthew 24:37–39): life going on as normal right up to the moment it wasn't.",
     "q": "What does it mean that Noah kept building even though, as far as we're told, no one else responded?"
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
     "th": "Verse 8 says simply, “But Noah found grace in the eyes of the LORD” — in the middle of a chapter about how bad everything else had become. One family, unremarkable in every other way, was noticed.",
     "q": "Where do you need to remember that being noticed by God has never depended on the culture around you getting better first?"
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
     "th": "God's grief in verse 6 is followed immediately by a rescue plan, not just an ending. Judgment and provision come from the same heart.",
     "q": "Where have you seen God grieve over something wrong and still make a way through it, rather than simply walking away?"
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
     "th": "Building the ark took Noah roughly a century, by most calculations from the surrounding chapters — obedience with no visible payoff for a very long time.",
     "q": "Sit quietly for two minutes and ask God whether there's something He's asked you to keep doing, unseen, for longer than feels reasonable. Write what comes to mind."
    }
   ]
  }
 ]
},

// Day 12
{
 "ref": "Matthew 2",
 "tag": "New Testament",
 "api": "matthew+2",
 "nug": [
  {
   "h": "Wise men from the East",
   "b": "“Wise men” (magi) were likely Persian or Babylonian astrologers/scholars — not the three kings of later tradition (the number three comes from the three gifts, not the text). They arrive later than Christmas-card imagery suggests; by verse 11 Jesus is in a “house,” not a stable."
  },
  {
   "h": "A king afraid of a baby",
   "b": "Herod the Great was not a legitimate Jewish king but a Roman-appointed Idumean, notoriously paranoid — he had executed his own wife and sons over rival-throne fears. A rumoured “King of the Jews” born in Bethlehem was, to him, a live threat."
  },
  {
   "h": "Three Old Testament quotes in one chapter",
   "b": "Matthew ties the events to Micah 5:2 (Bethlehem), Hosea 11:1 (“out of Egypt have I called my son”), and Jeremiah 31:15 (Rachel weeping). Writing for a Jewish audience, Matthew keeps showing that this messy, frightening story was tracing a pattern laid down centuries earlier."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Micah 5:2 · Hosea 11:1 · Jeremiah 31:15–17 · Exodus 1:15–16",
   "qs": [
    {
     "th": "Hosea 11:1 originally describes Israel's exodus from Egypt; Matthew applies it to Jesus retracing that journey in reverse — down to Egypt, then called back out. The nation's story becomes the Messiah's story in miniature.",
     "q": "Read Hosea 11:1 in its original context. Why might Matthew see Jesus as reliving Israel's own story rather than just fulfilling a prediction?"
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
     "th": "The magi “rejoiced with exceeding great joy” (v. 10) at a star, while Herod, close enough to Bethlehem to send soldiers, never once goes to look for himself. Proximity to the truth isn't the same as pursuing it.",
     "q": "Where in your life do you have easy access to something true about God that you haven't actually gone and looked at closely?"
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
     "th": "Joseph is told to move three times in this chapter — to Egypt, then back, then to Nazareth instead of Bethlehem — each time by a dream, each time obeying without an explanation of the whole plan.",
     "q": "When have you had to take the next step without seeing the reasoning behind it? What helped you trust it?"
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
     "th": "The magi's gifts — gold, frankincense and myrrh (v. 11) — were valuable enough, some suggest, to fund the family's flight to Egypt. God provided for the journey before the danger even arrived.",
     "q": "Name a time provision arrived before you knew you'd need it, and thank God specifically for it."
    }
   ]
  }
 ]
},

// Day 13
{
 "ref": "Psalm 3",
 "tag": "Psalms & Wisdom",
 "api": "psalms+3",
 "nug": [
  {
   "h": "Written while running for his life",
   "b": "The heading (not always printed in every translation, but part of the original text) ties this psalm to David fleeing his own son Absalom's rebellion (2 Samuel 15). It's a prayer written from the middle of betrayal, not after it was resolved."
  },
  {
   "h": "A body word for peace",
   "b": "“I laid me down and slept; I awaked; for the LORD sustained me” (v. 5) is a strikingly physical statement of trust — sleep as evidence of faith, not escape from it, in the middle of an active manhunt for his life."
  },
  {
   "h": "“Selah” appears three times",
   "b": "This untranslated word (also in v. 2, v. 4, v. 8) likely marked a musical pause — a moment to let what was just sung sink in before moving on. Modern readers can use it the same way: as a built-in pause button."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Samuel 15:13–14 · 2 Samuel 15:30 · Hebrews 4:15–16",
   "qs": [
    {
     "th": "2 Samuel 15 shows David going up the Mount of Olives weeping, barefoot, head covered — exactly the kind of crisis this psalm was written inside of. He didn't wait until it was over to worship.",
     "q": "Read 2 Samuel 15:30 alongside this psalm. What does it show you about writing to God from inside a crisis rather than only afterward?"
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
     "th": "“Many are they that rise up against me” (v. 1) is not an exaggeration for David — his own son had turned the nation against him. Yet the very next line moves straight to “But thou, O LORD, art a shield for me.”",
     "q": "What's the “many” in your life right now, and what would it look like to move as quickly to “but thou” as David does?"
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
     "th": "David sleeps in the middle of a rebellion because he trusts who sustains him (v. 5), not because the danger has passed.",
     "q": "What is currently keeping you awake that you could hand to the God who “sustaineth” rather than solving alone tonight?"
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
     "th": "The psalm ends, “Salvation belongeth unto the LORD” (v. 8) — not to David's own cleverness or army, in the middle of his worst family crisis.",
     "q": "Write a short prayer that names God, not your own effort, as the source of whatever rescue you're hoping for right now."
    }
   ]
  }
 ]
},

// Day 14
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Grace before the flood",
   "b": "Noah “found grace” (Genesis 6:8) before he did a single thing recorded in the text — before the ark, before the preaching, before the obedience. Grace came first."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved from the first murder and a family line marked by death, to a King who cannot be shaken, to a household warned and rescued, to a birth that terrified an empire.",
     "q": "Where did God's patience — with Cain, with Noah's generation, with the magi's long journey — stand out to you most this week?"
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
     "th": "“The LORD is my shepherd; I shall not want… he maketh me to lie down” (Psalm 23:1–2, read ahead if you like) — rest isn't idleness, it's being led into it.",
     "q": "What could you deliberately “lie down” from today, trusting that the flock doesn't depend on you staying on your feet every hour?"
    }
   ]
  }
 ]
},

// Day 15
{
 "ref": "Genesis 7",
 "tag": "Old Testament",
 "api": "genesis+7",
 "nug": [
  {
   "h": "Seven days' warning, then seven pairs",
   "b": "God gives Noah a seven-day countdown (v. 4) and tells him to take seven pairs of every “clean” animal, but only two of the unclean (v. 2) — already anticipating the sacrifices and diet distinctions that show up later in the Torah."
  },
  {
   "h": "“The LORD shut him in”",
   "b": "Verse 16 ends with God Himself closing the door, not Noah. Once the family was inside, the securing of the ark was out of their hands — a detail many readers find quietly comforting."
  },
  {
   "h": "A flood described three ways",
   "b": "The text stacks up sources of water — “fountains of the great deep” broken up and “windows of heaven” opened (v. 11) — language suggesting both underground and atmospheric sources, and total, not partial, coverage (v. 19–20)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 24:38–39 · 1 Peter 3:20–21 · 2 Peter 3:5–7",
   "qs": [
    {
     "th": "1 Peter 3:20–21 compares the ark's waters to baptism — not water washing dirt off the body, but a picture of being carried safely through judgment rather than around it.",
     "q": "How does “carried through” rather than “kept away from” change the way you think about hardship God allows you to pass through?"
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
     "th": "Verse 5 says plainly: “And Noah did according unto all that the LORD commanded him.” No commentary, no drama — just done, after a hundred years of building toward a flood no one else believed was coming.",
     "q": "What is one instruction from God you already know and simply haven't gotten around to obeying yet?"
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
     "th": "The door shutting (v. 16) wasn't Noah's job to finish. There's a point in obedience where you've done your part and the outcome becomes God's to secure.",
     "q": "Where have you been trying to hold a door shut that God has already asked you to let Him close?"
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
     "th": "The flood judged “everything that had the breath of life” outside the ark (v. 21–22) — sobering, uncompromising language about how seriously God takes what verse 11 in chapter 6 called “corrupt” and “filled with violence.”",
     "q": "Is there something you've been minimizing as “not that serious” that this chapter's weight is inviting you to name honestly before God?"
    }
   ]
  }
 ]
},

// Day 16
{
 "ref": "Genesis 8",
 "tag": "Old Testament",
 "api": "genesis+8",
 "nug": [
  {
   "h": "“God remembered Noah”",
   "b": "Verse 1 opens with this phrase — not that God had forgotten, but a Hebrew idiom meaning He now acted on Noah's behalf. The same phrase appears for Rachel (30:22) and for Israel in Egypt (Exodus 2:24) at each low point before rescue."
  },
  {
   "h": "A raven that doesn't return, a dove that does",
   "b": "The raven (v. 7), a scavenger, can survive on floating carrion and simply doesn't come back. The dove (v. 8–12), which needs clean, dry ground and green growth, keeps returning until it finds an olive leaf — the first sign of new life."
  },
  {
   "h": "The first altar after the flood",
   "b": "Before Noah plants a single crop or builds a house, he builds an altar and offers sacrifice (v. 20). Worship comes before rebuilding — and God's response is a promise never to curse the ground that way again (v. 21)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 3:22 · Genesis 1:28 · 2 Corinthians 5:17",
   "qs": [
    {
     "th": "God's instruction to “be fruitful, and multiply, and replenish the earth” (v. 17) echoes Genesis 1:28 almost word for word. The flood doesn't start a new creation from nothing — it's a fresh commissioning of the same mandate given at the beginning.",
     "q": "What does it tell you that God's response to judgment is to essentially repeat His original blessing over Noah's family?"
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
     "th": "A dove carrying an olive leaf has become one of history's most recognizable pictures of hope — a single small, green, living thing after months of grey water.",
     "q": "What's the smallest sign of green in your life right now that you could choose to notice and be thankful for, rather than waiting for the whole flood to visibly recede?"
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
     "th": "The dove kept going out and coming back until the ground was actually ready (v. 8–12) — patient, repeated testing rather than one dramatic release.",
     "q": "Where are you being asked to keep “sending out the dove” — testing, waiting, trying again — rather than forcing a premature landing?"
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
     "th": "Noah's first act on dry ground is gratitude, expressed through sacrifice, before he does anything for himself (v. 20).",
     "q": "What is the first thing you could thank God for today, before tackling your own to-do list?"
    }
   ]
  }
 ]
},

// Day 17
{
 "ref": "Psalm 4",
 "tag": "Psalms & Wisdom",
 "api": "psalms+4",
 "nug": [
  {
   "h": "An evening companion to Psalm 3's morning",
   "b": "Many readers pair this with Psalm 3 as a morning-and-evening set — Psalm 3 wakes trusting, Psalm 4 lies down trusting: “I will both lay me down in peace, and sleep” (v. 8)."
  },
  {
   "h": "A question aimed at cynics",
   "b": "“O ye sons of men, how long will ye turn my glory into shame? how long will ye love vanity, and seek after leasing [lies]?” (v. 2) — David confronts people mocking his God-given position, without losing his own composure."
  },
  {
   "h": "“Commune with your own heart”",
   "b": "Verse 4's instruction — be angry, but don't sin; think it over on your bed, and be still — is quoted almost directly by Paul in Ephesians 4:26. It's one of the Bible's clearest instructions for handling anger well."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Ephesians 4:26–27 · Numbers 6:24–26 · John 14:27",
   "qs": [
    {
     "th": "Paul's “be ye angry, and sin not: let not the sun go down upon your wrath” (Ephesians 4:26) draws directly on this psalm's counsel to feel the anger honestly but not let it fester into the night.",
     "q": "Compare the two passages. What does the psalm add to Paul's instruction that Paul alone doesn't spell out?"
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
     "th": "David is dealing with people who mock what he has (v. 2), and instead of matching their scorn, he takes it straight to God in verse 1 first.",
     "q": "Who has been “turning your glory into shame” lately — dismissing something God has genuinely given you — and what would taking it to God first, rather than defending it to them, look like?"
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
     "th": "“Thou hast put gladness in my heart, more than in the time that their corn and their wine increased” (v. 7) — David compares his joy in God favourably against other people's material abundance.",
     "q": "Where are you tempted to measure your contentment against someone else's visible prosperity rather than against what God has actually put in you?"
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
     "th": "Verse 4's instruction to be still on your bed and search your own heart is an invitation to quiet self-examination, not anxious replaying.",
     "q": "Lie or sit quietly for two minutes. Ask God what's actually underneath any anger or unease you're carrying today, and write down what surfaces."
    }
   ]
  }
 ]
},

// Day 18
{
 "ref": "Genesis 9",
 "tag": "Old Testament",
 "api": "genesis+9",
 "nug": [
  {
   "h": "The first covenant sign",
   "b": "The rainbow (v. 13) is the Bible's first formal “sign” of a covenant — and notice who it's for: “I will look upon it, that I may remember” (v. 16). It's aimed at reminding God of His own promise, not just reassuring people."
  },
  {
   "h": "A new boundary on eating",
   "b": "For the first time, humans are explicitly permitted to eat meat (v. 3), alongside plants — but with one restriction: don't eat blood, “for the life… is in the blood” (v. 4). This principle threads all the way to the sacrificial system in Leviticus."
  },
  {
   "h": "Capital punishment instituted",
   "b": "Verse 6 grounds the death penalty for murder specifically in humanity being made “in the image of God” — the same reasoning Genesis 1 used for human dignity is now used to explain why taking a life is uniquely serious."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 1:26–27 · 2 Peter 3:5–7 · Isaiah 54:9–10",
   "qs": [
    {
     "th": "Isaiah 54:9–10 explicitly ties God's promise of unshakeable love in the future to “the waters of Noah” — the flood covenant becomes the go-to example of a promise God simply will not break.",
     "q": "Read Isaiah 54:9–10. Why do you think Isaiah reaches all the way back to Noah's flood to reassure a later, discouraged generation?"
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
     "th": "This chapter also records Noah's drunkenness and his son Ham's disrespect (v. 20–25) — the very next generation after a fresh start, and the family is already fractured again.",
     "q": "What does it tell you that Scripture doesn't hide the failure of its heroes even right after their finest moment?"
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
     "th": "God commits to never again destroy the earth by flood, regardless of what people do next (v. 11) — a one-sided promise, not a conditional deal dependent on future good behaviour.",
     "q": "Where in your life do you treat God's promises as conditional on your performance, when this chapter shows Him committing unconditionally?"
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
     "th": "Next time you see a rainbow, it's meant to function as a reminder of a promise — an ordinary, recurring, physical thing carrying a spiritual meaning.",
     "q": "Write a short prayer of praise built around one ordinary, recurring thing in your own life that could remind you of God's faithfulness the way the rainbow does."
    }
   ]
  }
 ]
},

// Day 19
{
 "ref": "Matthew 3",
 "tag": "New Testament",
 "api": "matthew+3",
 "nug": [
  {
   "h": "A prophet after four centuries of silence",
   "b": "Between Malachi and John the Baptist, there is no recorded prophetic voice in Israel for roughly 400 years. John's appearance — dressed and speaking like Elijah (v. 4; compare 2 Kings 1:8) — was itself a startling event."
  },
  {
   "h": "Repentance before ritual",
   "b": "“Repent ye: for the kingdom of heaven is at hand” (v. 2) comes before any mention of the coming Messiah's identity. John's whole ministry is preparation — clearing ground, not the main event."
  },
  {
   "h": "A voice, not a light",
   "b": "John describes himself only as “the voice of one crying in the wilderness” (v. 3, quoting Isaiah 40:3) — deliberately pointing away from himself: “he that cometh after me is mightier than I” (v. 11)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 40:3–5 · Malachi 3:1 · 2 Kings 1:7–8 · Luke 3:21–22",
   "qs": [
    {
     "th": "Isaiah 40:3, written centuries earlier, pictures a voice preparing a highway for the LORD Himself. Matthew applies it to John preparing the way for Jesus — identifying Jesus, in the process, with the LORD Isaiah spoke of.",
     "q": "Read Isaiah 40:3–5. What is the “voice” preparing for, and what does it mean that John saw his whole life's work as that preparation?"
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
     "th": "John tells the religious leaders not to rely on their heritage — “think not to say within yourselves, We have Abraham to our father” (v. 9) — fruit, not ancestry, is what he's looking for.",
     "q": "Is there anything you're quietly relying on — upbringing, a church background, a reputation — in place of actual, current fruit in your own life?"
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
     "th": "At Jesus' baptism, all three persons of the Trinity appear together in one moment — the Son in the water, the Spirit descending “like a dove” (v. 16), the Father's voice from heaven (v. 17). It's one of the clearest single pictures of the Trinity in Scripture.",
     "q": "What strikes you about the Spirit's gentleness — “like a dove” — at the very start of Jesus' public ministry?"
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
     "th": "People confessed their sins as they were baptized by John (v. 6) — out loud, specifically, before the symbolic washing, not privately assumed.",
     "q": "Following John's pattern, name one thing plainly to God right now, rather than in general terms."
    }
   ]
  }
 ]
},

// Day 20
{
 "ref": "Psalm 5",
 "tag": "Psalms & Wisdom",
 "api": "psalms+5",
 "nug": [
  {
   "h": "A morning psalm with a battle plan",
   "b": "“My voice shalt thou hear in the morning, O LORD; in the morning will I direct my prayer unto thee, and will look up” (v. 3) — David treats the start of the day as the moment to set his direction, not an afterthought."
  },
  {
   "h": "God's holiness described as active, not passive",
   "b": "Verse 4–6 doesn't just say God dislikes evil in the abstract — it says “the foolish shall not stand in thy sight,” and He actively “hatest all workers of iniquity.” This is used as the reason David can trust God to eventually set things right."
  },
  {
   "h": "A path made level, not just pointed out",
   "b": "“Lead me, O LORD… make thy way straight before my face” (v. 8) — David doesn't just ask for direction, he asks God to actually clear and flatten the road, the way a king's messengers would prepare a route ahead of him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 6:6 · Lamentations 3:22–23 · Psalm 143:8",
   "qs": [
    {
     "th": "“In the morning will I direct my prayer” anticipates Lamentations 3:22–23's “they are new every morning” and Psalm 143:8's “cause me to hear thy lovingkindness in the morning.” Morning shows up again and again as a reset point in Scripture.",
     "q": "What difference might it make to treat tomorrow morning specifically as a moment to “direct” your day toward God, rather than just starting it?"
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
     "th": "David asks God to make the way “straight” before him because, as verse 9 says plainly, other voices around him — flattering, deceptive — make the path hard to see clearly.",
     "q": "Whose voice tends to make your own path less clear, and what would it look like to ask God directly for straightness there instead?"
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
     "th": "Verse 11 says “let all those that put their trust in thee rejoice” — joy is presented as something that belongs specifically to people who trust Him, not a mood that arrives independently of Him.",
     "q": "Where is your joy currently tied to circumstances rather than to trust — and what would it take to move it?"
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
     "th": "David prays this psalm while surrounded by people actively working against him, yet still asks God to “bless the righteous” and cover them “with favour as with a shield” (v. 12).",
     "q": "Pray verse 12 by name over someone you know who is currently under real pressure."
    }
   ]
  }
 ]
},

// Day 21
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A promise aimed at God's own memory",
   "b": "The rainbow (Genesis 9:16) is described as something God looks at to remember His own covenant — a sign that outlasts every generation who sees it."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week the ark's door was shut and then reopened, a rainbow became a promise, and a voice in the wilderness prepared the way for the Messiah.",
     "q": "Where did you notice God “remembering” — acting at exactly the right moment — in your own life this week, even if it didn't feel dramatic?"
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
     "th": "The dove kept going out until it found solid, green ground to land on (Genesis 8:8–12) — patient testing, not a single forced landing.",
     "q": "What is one thing you could simply keep sending out again this week, trusting the timing to God rather than forcing an outcome?"
    }
   ]
  }
 ]
},

// Day 22
{
 "ref": "Genesis 10",
 "tag": "Old Testament",
 "api": "genesis+10",
 "nug": [
  {
   "h": "A map of the ancient world",
   "b": "This “Table of Nations” traces seventy descendant nations from Noah's three sons — Japheth (v. 2–5, generally northern/European peoples), Ham (v. 6–20, generally African and some Near Eastern peoples), and Shem (v. 21–31, the line Abraham comes from). It's one of the earliest ethnographic documents in existence."
  },
  {
   "h": "The first “mighty one” on earth",
   "b": "Nimrod (v. 8–10) is described as “a mighty hunter before the LORD” who built an empire including Babel — the same city that becomes the centre of rebellion in the very next chapter. Empire-building and God-defiance are introduced together."
  },
  {
   "h": "Everyone traces back to one family",
   "b": "However the seventy nations spread out, the chapter's whole point is unity of origin — all humanity descends from the same three brothers on the same ark, which sets up a striking contrast with the scattering in chapter 11."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 17:26 · Revelation 7:9 · Genesis 12:3",
   "qs": [
    {
     "th": "Acts 17:26 says God “hath made of one blood all nations of men” and set the boundaries of their dwelling — directly echoing this chapter's picture of one family becoming many nations by God's design, not accident.",
     "q": "How does knowing every nation traces to this one family change how you think about human difference and unity?"
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
     "th": "Reading a long list of unfamiliar names can feel like skimmable filler, yet each one represents a real people group God had in view from the very start.",
     "q": "Is there a group of people — a culture, a nation, an ethnicity — you find easy to overlook, that this chapter reminds you God has always had specifically in mind?"
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
     "th": "The Spirit-inspired inclusion of a detailed genealogical table shows God caring about specifics — names, places, lineages — not just broad spiritual ideas.",
     "q": "Where might God be inviting you to pay attention to specifics — actual names and details — rather than staying at the level of vague good intentions?"
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
     "th": "Genesis 12:3, coming right after this chapter, promises that through Abraham's line “all families of the earth” — every nation just listed — would be blessed.",
     "q": "Thank God for one specific nation or people group outside your own that you've come to appreciate or love."
    }
   ]
  }
 ]
},

// Day 23
{
 "ref": "Genesis 11",
 "tag": "Old Testament",
 "api": "genesis+11",
 "nug": [
  {
   "h": "One language, one ambition",
   "b": "“The whole earth was of one language” (v. 1), and the builders' stated goal was to “make us a name” and avoid being “scattered abroad” (v. 4) — directly resisting the “fill the earth” command God had already given (9:1)."
  },
  {
   "h": "A tower reaching “unto heaven”",
   "b": "Ziggurats — stepped temple towers — were common in ancient Mesopotamia, believed to be meeting points between the human and divine realms. Babel's builders weren't just building tall; they were trying to reach and control access to God on their own terms."
  },
  {
   "h": "God “came down” to see it",
   "b": "Verse 5's language is almost ironic: the tower reaching “to heaven” is so small God has to “come down” even to look at it. Human ambition, from God's vantage point, is never as impressive as it feels from the ground."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 2:1–6 · Zephaniah 3:9 · Revelation 7:9–10",
   "qs": [
    {
     "th": "Acts 2's day of Pentecost is often read as Babel in reverse: instead of one language confused into many, the Spirit lets people from many nations each hear the gospel “in our own tongue” (Acts 2:6–8). Scattering by judgment becomes gathering by grace.",
     "q": "Read Acts 2:1–6 alongside this chapter. What does the contrast tell you about how God undoes the effects of human pride?"
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
     "th": "The builders wanted a name for themselves; two chapters later, God gives Abram a name and promises to make it great (12:2) — the very thing Babel tried to grab is instead freely given, but only to someone who leaves rather than clings.",
     "q": "Where are you trying to “make a name” for yourself through your own effort, that might come more freely if you let go of the striving?"
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
     "th": "The confusion of languages wasn't cruelty for its own sake — it interrupted a unified rebellion, protecting people from a worse, more coordinated wrong (v. 6–7).",
     "q": "Can you think of a time a plan of yours was frustrated or “confused” that, looking back, may have actually protected you from where it was heading?"
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
     "th": "Babel's whole project was rooted in fear of being scattered and a desire for self-made significance — both very human, very relatable motives that still drive a lot of what people build today.",
     "q": "Is there a “tower” you're building — an achievement, a platform, a reputation — more out of fear or self-importance than out of anything God actually asked for? Name it honestly."
    }
   ]
  }
 ]
},

// Day 24
{
 "ref": "Psalm 15",
 "tag": "Psalms & Wisdom",
 "api": "psalms+15",
 "nug": [
  {
   "h": "A question with an eleven-part answer",
   "b": "“LORD, who shall abide in thy tabernacle? who shall dwell in thy holy hill?” (v. 1) is answered with a list of character traits (v. 2–5), not rituals or sacrifices — walking uprightly, speaking truth, keeping promises even when costly."
  },
  {
   "h": "Keeping a promise “to his own hurt”",
   "b": "Verse 4's phrase — he “sweareth to his own hurt, and changeth not” — describes someone who keeps a commitment even after it turns out to cost them more than expected. It's one of the Bible's sharpest one-line tests of integrity."
  },
  {
   "h": "No interest, no bribes",
   "b": "The list ends practically: doesn't lend money at interest to the vulnerable, doesn't take a bribe against the innocent (v. 5). Worship and everyday financial honesty are treated as inseparable."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "James 1:22–25 · Matthew 5:33–37 · 1 John 3:18",
   "qs": [
    {
     "th": "Jesus' teaching on oaths in Matthew 5:33–37 — let your “yes” be yes — reads like an expansion of Psalm 15:4's promise-keeper. Both push past technical honesty toward a reputation for simply meaning what you say.",
     "q": "Where has “let your yes be yes” been hardest for you to actually practise recently?"
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
     "th": "This psalm never mentions sacrifice, temple ritual or religious performance — every single qualification is about how someone treats other people, especially with words and money.",
     "q": "Which of the traits in verses 2–5 (truthful speech, no slander, keeping costly promises, financial honesty) is currently your weakest, and what's one concrete step this week toward it?"
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
     "th": "Verse 2's “speaketh the truth in his heart” suggests honesty starts before the words — in what you privately tell yourself is true, not just what you say aloud.",
     "q": "Is there a place where you're honest in speech but not fully honest with yourself in your own heart?"
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
     "th": "The psalm's question — who gets to dwell close to God — is really an invitation to examine your own life quietly rather than compare yourself to others.",
     "q": "Read verses 2–5 slowly one more time. Sit for a minute and ask God to show you, gently, which line He wants to work on in you."
    }
   ]
  }
 ]
},

// Day 25
{
 "ref": "Genesis 12",
 "tag": "Old Testament",
 "api": "genesis+12",
 "nug": [
  {
   "h": "A promise with seven parts",
   "b": "God's call to Abram (v. 1–3) stacks blessing on blessing: land, nation, name, blessing, protection (“I will bless them that bless thee”), and a global reach — “in thee shall all families of the earth be blessed.” Paul calls this “the gospel” preached in advance (Galatians 3:8)."
  },
  {
   "h": "Leaving without a map",
   "b": "Abram is told to go “unto a land that I will shew thee” (v. 1) — the destination isn't named yet. Hebrews 11:8 highlights exactly this: he “went out, not knowing whither he went.”"
  },
  {
   "h": "A promise, then almost immediately a problem",
   "b": "Straight after the grand call, Abram hits a famine (v. 10), goes to Egypt, and, afraid for his life, tells Sarai to say she's his sister — a half-truth that nearly costs him everything. Great callings don't exempt anyone from fear and failure right after."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Galatians 3:8–9 · Hebrews 11:8 · Acts 7:2–4",
   "qs": [
    {
     "th": "Galatians 3:8 calls this promise the gospel preached beforehand to Abraham — “in thee shall all nations be blessed” is read by Paul as ultimately pointing to Christ and the blessing that comes through faith, not bloodline.",
     "q": "Read Galatians 3:8–9. How does Paul connect Abram's call in Genesis 12 to how anyone, from any nation, gets right with God?"
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
     "th": "Abram is 75 (v. 4) when he's asked to uproot his whole life on the strength of a promise with no visible down payment yet.",
     "q": "Is there a step of obedience you've been putting off because you feel too old, too settled, or too unsure of the destination?"
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
     "th": "Even after receiving one of the most sweeping promises in Scripture, Abram's very next move under pressure (famine, fear in Egypt) is self-protection rather than trust (v. 11–13).",
     "q": "Where do you tend to slip from bold faith into self-protective half-truths the moment real pressure hits?"
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
     "th": "Verse 7 says Abram built an altar at the very first place God appeared to him in the new land — marking the promise with worship before he owned a single acre of it.",
     "q": "Write a short prayer marking a promise or a step of faith you're currently in the middle of, before you've seen how it turns out."
    }
   ]
  }
 ]
},

// Day 26
{
 "ref": "Matthew 4",
 "tag": "New Testament",
 "api": "matthew+4",
 "nug": [
  {
   "h": "Forty days echoing forty years",
   "b": "Jesus' forty days of fasting and testing in the wilderness (v. 2) deliberately parallel Israel's forty years of testing in the wilderness after the Exodus — except where Israel repeatedly failed, Jesus, quoting Deuteronomy each time, doesn't."
  },
  {
   "h": "Every reply is Deuteronomy",
   "b": "All three of Jesus' answers to the tempter (v. 4, 7, 10) are quotations from Deuteronomy 8, 6 and 6 — the very book recounting Israel's wilderness failures. Jesus fights temptation with Scripture He has clearly internalized, not improvised argument."
  },
  {
   "h": "A move that fulfilled prophecy",
   "b": "Jesus settling in Capernaum (v. 13) is explicitly tied by Matthew to Isaiah 9:1–2's promise of “great light” dawning on “Galilee of the Gentiles” — an unglamorous fishing region, not Jerusalem, chosen as the base for His ministry."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 8:3 · Deuteronomy 6:13,16 · Isaiah 9:1–2",
   "qs": [
    {
     "th": "Each temptation Jesus faces mirrors a way Israel failed in the wilderness — hunger and grumbling about bread (Exodus 16), testing God for proof (Exodus 17), and idolatrous compromise for power (Exodus 32). Jesus succeeds exactly where the nation He represents once failed.",
     "q": "Choose one of the three temptations. How does seeing it as an echo of Israel's history change how you read it?"
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
     "th": "The temptations aren't obviously evil requests — turning stone to bread when hungry, testing a real promise, taking a shortcut to a legitimate goal (ruling the nations). Real temptation often twists something genuinely good or true.",
     "q": "Where has a recent temptation come dressed as something reasonable or even good, rather than obviously wrong?"
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
     "th": "Jesus doesn't argue with the tempter's logic — He simply answers with what is written each time (v. 4, 7, 10). The Spirit-filled response to a twisted argument is often Scripture spoken plainly, not a cleverer counter-argument.",
     "q": "Is there a lie or a twisted half-truth you keep re-arguing with in your head, that might be better answered simply with what Scripture actually says?"
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
     "th": "Jesus' first recorded act of public ministry after the wilderness is calling ordinary fishermen — Peter, Andrew, James and John — who “straightway left their nets, and followed him” (v. 20, 22).",
     "q": "Pray by name for someone you know who is at a genuine crossroads, that they'd have the clarity and courage these four had to respond quickly."
    }
   ]
  }
 ]
},

// Day 27
{
 "ref": "Psalm 16",
 "tag": "Psalms & Wisdom",
 "api": "psalms+16",
 "nug": [
  {
   "h": "A psalm Peter preaches from",
   "b": "In Acts 2:25–28, Peter quotes this psalm's closing verses at Pentecost as a direct prophecy of Jesus' resurrection — “thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption” (v. 10), something David himself, whose body did decay, couldn't ultimately be speaking only of himself."
  },
  {
   "h": "A surprisingly ordinary word for satisfaction",
   "b": "“The lines are fallen unto me in pleasant places” (v. 6) uses surveying language — the “lines” marking out a plot of land. David is saying his allotted portion in life, however it was measured out, has landed well."
  },
  {
   "h": "A refusal to chase other gods",
   "b": "Verse 4 says those who “hasten after another god” will multiply their sorrows, and David won't even speak their names. Contentment in God is framed as protection from a specific, common kind of restlessness."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 2:25–31 · Acts 13:35–37 · Hebrews 1:9",
   "qs": [
    {
     "th": "Peter's Pentecost sermon leans heavily on this exact psalm to argue for the resurrection to a Jewish crowd who knew it well — using their own Scriptures to show them something they hadn't seen in it before.",
     "q": "Read Acts 2:25–31. Why does Peter say David “being a prophet” must have been speaking of someone other than himself in verse 10?"
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
     "th": "“In thy presence is fulness of joy; at thy right hand there are pleasures for evermore” (v. 11) locates lasting joy specifically in nearness to God, not in circumstances lining up.",
     "q": "Where are you currently looking for “fulness of joy” in something other than nearness to God — and what would it look like to relocate that search?"
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
     "th": "Verse 8's “I have set the LORD always before me” is presented as the reason David isn't shaken (“because he is at my right hand, I shall not be moved”).",
     "q": "What practical habit could help you keep God more consistently “before” you through an ordinary day, rather than only in dedicated prayer time?"
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
     "th": "Verse 2 opens simply: “Thou art my Lord: my goodness extendeth not to thee” — an acknowledgment that nothing David brings adds anything to God; the relationship runs entirely the other direction.",
     "q": "Write a short prayer that names something good in your life and traces it back to God as the sole source, the way verse 2 does."
    }
   ]
  }
 ]
},

// Day 28
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "One family for every nation",
   "b": "Genesis 12:3's promise — “in thee shall all families of the earth be blessed” — comes right after Genesis 10's long list of scattered nations, aimed at every single one of them."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week traced humanity scattering at Babel, then narrowing back down to one called man, Abram, sent out with a promise for every scattered nation to be blessed through him.",
     "q": "Where has God asked you, like Abram, to move before you could see the whole map — and how did (or how could) you respond?"
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
     "th": "“The lines are fallen unto me in pleasant places” (Psalm 16:6) — David's rest was in accepting his allotted portion, not in getting a different one.",
     "q": "What portion of your current life have you been resisting accepting, that you could rest into today instead?"
    }
   ]
  }
 ]
},

// Day 29
{
 "ref": "Genesis 13",
 "tag": "Old Testament",
 "api": "genesis+13",
 "nug": [
  {
   "h": "Wealthy enough to need to split up",
   "b": "Both Abram and Lot had grown so prosperous in livestock, silver and gold (v. 2, 5–6) that the land literally couldn't support both households together — blessing itself created the tension that forced a decision."
  },
  {
   "h": "Abram lets Lot choose first",
   "b": "As the elder and the one holding the promise, Abram had every right to first pick, yet offers Lot the choice (v. 8–9). Lot takes the well-watered Jordan plain — “even as the garden of the LORD” — near Sodom, whose wickedness the text flags immediately (v. 13)."
  },
  {
   "h": "The promise renewed after the loss",
   "b": "Right after Abram gives up the better-looking land, God tells him to look in every direction — all of it will be his descendants' (v. 14–17). Generosity doesn't cost Abram the promise; it's followed immediately by a bigger vision of it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Philippians 2:3–4 · Hebrews 11:9–10 · 2 Peter 2:7–8",
   "qs": [
    {
     "th": "Hebrews 11:9–10 says Abram lived in tents in the promised land like a stranger, “looking for a city which hath foundations, whose builder and maker is God.” He could let go of good land because his hope wasn't finally in land at all.",
     "q": "How does having your hope somewhere further ahead change how tightly you need to hold what's in front of you right now?"
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
     "th": "Abram gives Lot first choice even though he has the stronger claim — a small, costly act of deference that Philippians 2:3–4 later calls the mind of Christ.",
     "q": "Where could you let someone else “choose first” this week, even when you have the stronger claim?"
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
     "th": "Lot chose by sight — what looked “well watered” (v. 10–11) — without factoring in who his neighbours would be. 2 Peter 2:7–8 later calls him “righteous Lot,” vexed daily by the wickedness he'd moved next to.",
     "q": "Is there a decision you're tempted to make purely on what looks good on the surface, without weighing who or what you'd be surrounded by?"
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
     "th": "Abram's generosity here stands in contrast to his fear-driven deception in Egypt just one chapter earlier — faith and failure sitting close together in the same story.",
     "q": "Where have you seen your own faith and your own fear show up close together recently? Name one honestly to God."
    }
   ]
  }
 ]
},

// Day 30
{
 "ref": "Genesis 14",
 "tag": "Old Testament",
 "api": "genesis+14",
 "nug": [
  {
   "h": "Abram the rescuer, not just the patriarch",
   "b": "When four kings capture Lot along with the people of Sodom, Abram arms 318 men “born in his own house” (v. 14) and pursues them as far as Dan, rescuing Lot despite Lot having chosen the more attractive land and moved away from him."
  },
  {
   "h": "A mysterious king-priest appears once",
   "b": "Melchizedek, “king of Salem” (likely early Jerusalem) and “priest of the most high God” (v. 18), blesses Abram and receives a tenth of everything — the Bible's first mention of both a priest and a tithe, from a figure with no recorded genealogy."
  },
  {
   "h": "Abram refuses the spoils",
   "b": "The king of Sodom offers Abram the recovered goods, but Abram swears he won't take “from a thread even to a shoelatchet” (v. 23) so no one could ever say Sodom's king made him rich — he wants the credit going only to “the most high God, possessor of heaven and earth” (v. 22)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 7:1–3 · Psalm 110:4 · Hebrews 5:6,10",
   "qs": [
    {
     "th": "Hebrews 7 spends an entire chapter on Melchizedek, arguing that because his priesthood has no recorded beginning or end in the text, he pictures Christ's priesthood — permanent, not inherited through a bloodline like Israel's later priests.",
     "q": "Read Hebrews 7:1–3. What does the writer find significant about Melchizedek simply appearing, with no family history given?"
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
     "th": "Abram risks everything to rescue Lot even though Lot had effectively chosen to distance himself by picking the better land near Sodom (ch. 13). Family loyalty here overrides any resentment about the earlier choice.",
     "q": "Is there someone you could show this kind of loyalty to, even though a past choice of theirs put some distance between you?"
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
     "th": "Abram's refusal of Sodom's wealth (v. 23) shows real discernment about what kind of provision he wanted to be known for — not just any blessing, but blessing traceable to God.",
     "q": "Is there an opportunity for gain in your life right now where the source matters as much to you as the gain itself?"
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
     "th": "Melchizedek's blessing over Abram (v. 19–20) credits God, not Abram's army, with the victory — “blessed be the most high God, which hath delivered thine enemies into thy hand.”",
     "q": "Thank God for a victory or rescue in your own life that, looking back, was clearly more than your own effort."
    }
   ]
  }
 ]
},

// Day 31
{
 "ref": "Psalm 19",
 "tag": "Psalms & Wisdom",
 "api": "psalms+19",
 "nug": [
  {
   "h": "Two very different witnesses in one psalm",
   "b": "Verses 1–6 describe creation — the heavens — declaring God's glory wordlessly, day and night, to every language on earth (v. 3–4). Verses 7–11 then switch to God's written law, described in six parallel lines as perfect, sure, right, pure, clean and true."
  },
  {
   "h": "The sun as an unlikely athlete",
   "b": "Verse 5 pictures the sun “as a bridegroom coming out of his chamber” and “as a strong man” running a race — vivid, almost playful imagery for something the surrounding pagan cultures worshipped as a god in its own right."
  },
  {
   "h": "Sweeter than honey, more precious than gold",
   "b": "Verse 10 ranks God's law above the two things ancient people valued most — wealth (gold) and pleasure (honey) — not as a rule to grit your teeth through, but as something genuinely desirable."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 10:17–18 · Romans 1:19–20 · James 1:25",
   "qs": [
    {
     "th": "Paul quotes verse 4 in Romans 10:18 to argue that creation's witness has gone out to the whole world, and Romans 1:19–20 builds a whole argument on the same idea — that God has made Himself evident through what's made, leaving no one truly without any witness at all.",
     "q": "Read Romans 1:19–20. How does knowing creation itself is described as “speech” change the way you notice the natural world around you?"
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
     "th": "Verse 12 moves from admiring the law's beauty to a humble question: “Who can understand his errors? cleanse thou me from secret faults.” Even genuine delight in God's word doesn't mean freedom from blind spots.",
     "q": "What's one “secret fault” — something you might not even fully see in yourself — you could ask God to show you honestly this week?"
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
     "th": "The psalm's final verse — “let the words of my mouth, and the meditation of my heart, be acceptable in thy sight” (v. 14) — ties speech and inner thought life together as one thing God cares about, not two separate categories.",
     "q": "Where is there currently a gap between what comes out of your mouth and what's actually going on in your heart?"
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
     "th": "This psalm moves from the wordless “speech” of the skies to the very specific words of Scripture — two different volumes at which God speaks.",
     "q": "Step outside or look out a window for a minute in silence. What might creation be “saying” to you today, without needing any words of your own?"
    }
   ]
  }
 ]
},

// Day 32
{
 "ref": "Genesis 15",
 "tag": "Old Testament",
 "api": "genesis+15",
 "nug": [
  {
   "h": "The verse Paul builds his gospel on",
   "b": "“And he believed in the LORD; and he counted it to him for righteousness” (v. 6) is quoted three times in the New Testament (Romans 4:3, Galatians 3:6, James 2:23) as the founding example of being made right with God by faith, centuries before the law was given."
  },
  {
   "h": "A covenant sealed by walking through dead animals",
   "b": "In verse 9–17, halved carcasses are laid out and, remarkably, a smoking furnace and burning lamp — representing God alone — pass between them while Abram is in a deep sleep. Normally both covenant parties would walk through together; here, only God does, making it an unconditional promise."
  },
  {
   "h": "A 400-year prophecy given in advance",
   "b": "God tells Abram his descendants will be strangers in a land not theirs, afflicted 400 years, before being brought out “with great substance” (v. 13–14) — laying out the entire future Egypt-and-Exodus story centuries before it happens."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 4:1–5 · Galatians 3:6–9 · James 2:21–24",
   "qs": [
    {
     "th": "Romans 4 makes a point of timing: Abram was counted righteous by faith in chapter 15, before circumcision in chapter 17. Paul uses that sequence to argue that being right with God has always come by faith, not by a ritual or a rule kept first.",
     "q": "Why does the order of events in Genesis — faith counted as righteousness before any command to be circumcised — matter so much to Paul's argument?"
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
     "th": "Abram believes God's promise here despite having no child yet and being told to count stars he can't number (v. 5) — belief that precedes any visible evidence.",
     "q": "What promise from God are you currently being asked to believe before you can count or see the evidence for it?"
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
     "th": "God doesn't rebuke Abram for asking “whereby shall I know that I shall inherit it?” (v. 8) — He answers the honest question with an unforgettable covenant ceremony rather than shaming the doubt.",
     "q": "What honest question have you been afraid to bring to God, assuming it would be unwelcome?"
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
     "th": "This covenant guarantees not just Abram's own future but centuries of his descendants' story, long after he would be gone — a promise made for people not yet born.",
     "q": "Pray for someone in a generation after you — a child, a younger relative, a student — that a promise of God's would hold true in their life long after this moment has passed."
    }
   ]
  }
 ]
},

// Day 33
{
 "ref": "Matthew 5",
 "tag": "New Testament",
 "api": "matthew+5",
 "nug": [
  {
   "h": "Blessed before instructed",
   "b": "The Sermon on the Mount opens with the Beatitudes (v. 3–12) — pronouncements of blessing on the poor in spirit, the mourning, the meek, before a single command is given. Grace and identity come before ethics in Jesus' teaching order."
  },
  {
   "h": "Fulfil, not destroy",
   "b": "“Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil” (v. 17). Jesus then repeatedly intensifies the law rather than relaxing it — not “don't murder” only, but “don't even nurse the anger” (v. 21–22)."
  },
  {
   "h": "“Ye have heard… but I say” appears six times",
   "b": "In each case, Jesus doesn't contradict the Old Testament text but corrects a shallow reading of it — pushing past external compliance (don't commit adultery) to the heart underneath it (don't even look with lust, v. 27–28)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 61:1–3 · Leviticus 19:18 · Deuteronomy 6:5",
   "qs": [
    {
     "th": "Jesus' teaching on loving enemies (v. 43–48) goes further than Leviticus 19:18's “love thy neighbour” by naming enemies specifically — grounding it in God's own character, who “sendeth rain on the just and on the unjust” (v. 45).",
     "q": "How does grounding love for enemies in God's own indiscriminate kindness (v. 45) change the motivation compared to just trying to be a nicer person?"
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
     "th": "The Beatitudes bless states most people try to avoid — mourning, poverty of spirit, being persecuted — rather than the strength and self-sufficiency the world usually praises.",
     "q": "Which Beatitude currently describes your actual situation most closely, and how does hearing it called “blessed” land for you right now?"
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
     "th": "“Blessed are the pure in heart: for they shall see God” (v. 8) ties spiritual perception directly to inner purity, not just correct doctrine or outward behaviour.",
     "q": "What might be clouding your own ability to “see God” clearly right now — not doubt exactly, but something in your heart getting in the way?"
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
     "th": "Jesus says if you're bringing a gift to the altar and remember a broken relationship, leave the gift and go be reconciled first (v. 23–24) — relational honesty is placed before religious activity.",
     "q": "Is there a relationship you'd need to make right before your worship could feel fully honest? Name it to God plainly."
    }
   ]
  }
 ]
},

// Day 34
{
 "ref": "Psalm 23",
 "tag": "Psalms & Wisdom",
 "api": "psalms+23",
 "nug": [
  {
   "h": "Possibly the most memorized chapter in the Bible",
   "b": "Six short verses, and yet it's the passage most often quoted at funerals, memorized by children, and turned to in crisis across almost every Christian tradition — partly because it moves so naturally from provision, to danger, to homecoming."
  },
  {
   "h": "A shepherd's-eye view of care",
   "b": "Green pastures and still waters (v. 2) aren't just pretty scenery — sheep won't drink from fast-moving water and won't lie down if anxious, so a shepherd has to actively find and create calm, safe conditions. The image is one of deliberate, attentive care, not luck."
  },
  {
   "h": "A sudden shift to a shared table",
   "b": "Midway through, the imagery changes from shepherd-and-sheep to host-and-guest: “thou preparest a table before me in the presence of mine enemies” (v. 5) — provision and honour displayed openly, even while danger is still visibly present."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "John 10:11,14 · Ezekiel 34:11–16 · Revelation 7:17",
   "qs": [
    {
     "th": "Jesus directly claims this psalm's imagery for Himself: “I am the good shepherd” (John 10:11, 14), someone who, unlike a hired hand, lays down His life for the sheep rather than fleeing danger.",
     "q": "Read John 10:11–14. What does it add to Psalm 23 to know the Shepherd it describes ultimately laid down His own life for the sheep?"
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
     "th": "“Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me” (v. 4) doesn't promise the valley will be avoided — only that it will be walked through, not walked alone.",
     "q": "What “valley” are you currently walking through, and what difference does “thou art with me” actually make to how you're walking it?"
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
     "th": "The rod and staff (v. 4) were tools of both protection and correction — the same shepherd who fought off predators also gently redirected wandering sheep with the same staff.",
     "q": "Where might God's correction in your life actually be evidence of the same care as His protection, rather than something separate from it?"
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
     "th": "The psalm ends not with survival but with confidence: “surely goodness and mercy shall follow me all the days of my life” (v. 6) — looking forward, not just back.",
     "q": "Write your own short version of verse 6, naming what you trust will follow you, in your own words."
    }
   ]
  }
 ]
},

// Day 35
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A promise sealed while Abram slept",
   "b": "In Genesis 15:12–17, God alone passed between the pieces of the covenant while Abram was in a deep sleep — the whole promise resting on God's word, not Abram's effort."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Abram let go of the better land and got a bigger promise, walked through a covenant he didn't have to keep his side of, and you sat with two of Scripture's most loved psalms — the law compared to honey, and the Lord as shepherd.",
     "q": "Where this week did generosity or letting go (Abram with Lot, the law described as more desirable than gold) show up as something worth reconsidering in your own life?"
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
     "th": "“He leadeth me beside the still waters” (Psalm 23:2) — stillness the shepherd deliberately provides, not something the sheep arrange for itself.",
     "q": "Where could you let yourself be led to stillness today rather than trying to manufacture calm on your own?"
    }
   ]
  }
 ]
},

// Day 36
{
 "ref": "Genesis 16",
 "tag": "Old Testament",
 "api": "genesis+16",
 "nug": [
  {
   "h": "A plan that made sense culturally",
   "b": "Sarai giving her servant Hagar to Abram to bear a child (v. 2–3) followed a known ancient Near Eastern custom for infertility, documented in surrounding cultures' legal texts — understandable by the standards of the day, but not what God had promised."
  },
  {
   "h": "The first time God is named by a person",
   "b": "After the angel of the LORD finds Hagar alone in the wilderness, she calls Him “Thou God seest me” (v. 13) — El Roi. It's the only place in the Old Testament this specific name for God is used, spoken by a fleeing, pregnant, foreign servant woman."
  },
  {
   "h": "A name given before birth, with a hard promise attached",
   "b": "The angel tells Hagar to name her son Ishmael, “because the LORD hath heard thy affliction” (v. 11), while also describing a difficult future for him (v. 12) — God's attention to her pain and a hard road ahead are both spoken in the same breath."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Galatians 4:22–26 · Genesis 21:17–20 · Exodus 3:7",
   "qs": [
    {
     "th": "Paul later uses Hagar and Sarah as an allegory in Galatians 4 — Hagar representing self-effort under the law, Sarah representing the freedom of promise. The impatient shortcut in this chapter becomes, generations later, a whole theological picture.",
     "q": "Read Galatians 4:22–26. Why do you think Paul chose this specific, painful family story to illustrate the difference between self-effort and promise?"
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
     "th": "Sarai and Abram tried to help God's promise along on a reasonable timetable of their own — and the result was real, lasting family pain, not a clean shortcut.",
     "q": "Where are you currently tempted to “help” a promise of God along in a way that isn't actually what He asked for?"
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
     "th": "Hagar, a foreign servant with no status, is the one to whom the angel of the LORD personally appears and speaks by name (v. 8) — the promise-bearing family isn't the only place God shows up.",
     "q": "Who in your life might feel like they're outside where “the real spiritual things” happen, that God may in fact already be closely attending to?"
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
     "th": "Hagar names God “Thou God seest me” after being alone in the wilderness — a name born from feeling unseen everywhere else and then discovering she wasn't.",
     "q": "Sit quietly for a moment and ask: where do I feel unseen right now? Then ask God to show you He is the “God who sees” there too."
    }
   ]
  }
 ]
},

// Day 37
{
 "ref": "Genesis 17",
 "tag": "Old Testament",
 "api": "genesis+17",
 "nug": [
  {
   "h": "New names for a new stage",
   "b": "Abram (“exalted father”) becomes Abraham (“father of many,” v. 5), and Sarai becomes Sarah (v. 15) — both name changes anticipating a promise not yet visibly true, spoken thirteen years after chapter 16's shortcut."
  },
  {
   "h": "A sign cut into the body",
   "b": "Circumcision is instituted as the covenant sign (v. 10–14) for every male in Abraham's household, including servants — a permanent, physical mark distinguishing this covenant people, applied on the eighth day for children born after."
  },
  {
   "h": "God doesn't forget Ishmael",
   "b": "Even while confirming the covenant will continue through the not-yet-born Isaac, God explicitly blesses Ishmael too — twelve princes, a great nation (v. 20) — acknowledging and caring for the son born from Sarai and Abram's earlier shortcut."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 4:9–12 · Colossians 2:11–12 · Genesis 18:14",
   "qs": [
    {
     "th": "Romans 4:9–12 points out Abraham was counted righteous by faith in chapter 15, then circumcised in chapter 17 — the sign came after and sealed a righteousness he already had by faith, not the other way around.",
     "q": "Why does Paul insist on this order — faith first, sign second — rather than treating circumcision as the thing that made Abraham right with God?"
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
     "th": "Abraham laughs at the promise of a son at his age (v. 17), and God doesn't rebuke the laughter — He simply restates the promise and gives the future son a name, Isaac, that literally means “he laughs.”",
     "q": "Is there a promise you've quietly laughed off as unrealistic, that God might still be holding steady regardless of your doubt?"
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
     "th": "God's question in verse 1 — “I am the Almighty God; walk before me, and be thou perfect” — comes with the covenant name El Shaddai, emphasizing sufficient, overwhelming power available to the one being asked to walk faithfully.",
     "q": "Where do you need to remember God's sufficiency specifically, in an area where you feel your own strength running out?"
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
     "th": "The chapter openly includes both the shortcut of chapter 16 and God's ongoing faithfulness afterward — not editing out the failure before renewing the promise.",
     "q": "Bring one past shortcut or mistake honestly to God, trusting that, as with Abraham, it doesn't disqualify you from what He still has ahead."
    }
   ]
  }
 ]
},

// Day 38
{
 "ref": "Psalm 24",
 "tag": "Psalms & Wisdom",
 "api": "psalms+24",
 "nug": [
  {
   "h": "A psalm possibly written for a procession",
   "b": "Many scholars connect this psalm to the ark of the covenant being carried into Jerusalem (2 Samuel 6) — the repeated call to “lift up your heads, O ye gates” (v. 7, 9) reads like an antiphonal chant sung as the procession approached the city gates."
  },
  {
   "h": "Ownership stated before entry is discussed",
   "b": "“The earth is the LORD's, and the fulness thereof” (v. 1) is established first — before any question of who may approach Him. His right to the whole world isn't up for negotiation; the only open question is who gets to draw near."
  },
  {
   "h": "Clean hands and a pure heart",
   "b": "Verse 4's qualification for ascending God's hill — clean hands (actions) and a pure heart (motives), not lifting the soul to “vanity” or swearing deceitfully — pairs outward and inward integrity in a single line, much like Psalm 15."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 10:26 · 2 Samuel 6:12–15 · Revelation 3:20",
   "qs": [
    {
     "th": "Paul quotes verse 1 in 1 Corinthians 10:26 to settle a practical dispute about eating meat — because “the earth is the Lord's,” ordinary food isn't spiritually contaminated by where it came from. A worship psalm gets applied to a grocery-list question.",
     "q": "What does it show you about this psalm's reach that Paul could use it to resolve something as ordinary as what to eat?"
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
     "th": "“Who shall ascend into the hill of the LORD?” (v. 3) is a question about approach, not achievement — clean hands and a pure heart describe a direction of life, not flawless performance.",
     "q": "Where do you tend to think “ascending” toward God requires a level of perfection this psalm doesn't actually describe?"
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
     "th": "The gates are told to “lift up” their heads to let “the King of glory” come in (v. 7–9) — as if even the fixed, physical structures of a city need to actively make room for Him.",
     "q": "What in the fixed structure of your week — your schedule, your habits — might need to “lift up its head” to make room for God, rather than staying shut as usual?"
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
     "th": "The psalm's climactic repeated question — “Who is this King of glory?” — is answered twice, each time more fully: “The LORD strong and mighty” then “The LORD of hosts” (v. 8, 10).",
     "q": "Write your own answer to the psalm's question — “Who is this King of glory?” — in your own words, based on what you know of Him."
    }
   ]
  }
 ]
},

// Day 39
{
 "ref": "Genesis 18",
 "tag": "Old Testament",
 "api": "genesis+18",
 "nug": [
  {
   "h": "Three visitors, treated with lavish hospitality",
   "b": "Abraham runs to meet three strangers, bows, and rushes to prepare a full meal — fresh bread, a choice calf, curds and milk (v. 2–8). Hebrews 13:2 later ties hospitality to strangers to the possibility of “entertaining angels unawares.”"
  },
  {
   "h": "Sarah's laugh, echoed in her son's name",
   "b": "Sarah laughs “within herself” at the promise of a son at her age (v. 12), and when confronted, denies it out of fear (v. 15) — yet the promised son will be named Isaac, “he laughs,” as if her doubt itself gets folded into the story rather than erased."
  },
  {
   "h": "Abraham bargains God down from fifty to ten",
   "b": "In one of Scripture's boldest prayers, Abraham repeatedly presses God on Sodom's fate — “Shall not the Judge of all the earth do right?” (v. 25) — negotiating the number of righteous people needed to spare the city all the way down to ten."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 13:2 · Genesis 19:29 · James 5:16",
   "qs": [
    {
     "th": "Genesis 19:29 later notes that when Sodom was destroyed, “God remembered Abraham, and sent Lot out” — tying Lot's rescue directly back to this chapter's intercession, not to anything Lot himself did to deserve it.",
     "q": "What does it show you about intercessory prayer that Lot's rescue is credited to Abraham's persistent asking rather than to Lot's own righteousness?"
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
     "th": "“Is any thing too hard for the LORD?” (v. 14) is asked directly about Sarah's impossible pregnancy — a question meant to correct doubt, not just describe God's general power in the abstract.",
     "q": "What situation in your own life would you answer honestly if God asked you that exact question right now?"
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
     "th": "Abraham keeps approaching God directly, respectfully but boldly, pressing further each time rather than stopping at the first answer (v. 23–32) — a model of persistent, humble, honest prayer.",
     "q": "Is there something you've stopped pressing God about too soon, assuming you'd already gotten His final answer?"
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
     "th": "Abraham's bargaining is entirely on behalf of other people — strangers in a wicked city, and specifically his nephew Lot — not for his own benefit at all.",
     "q": "Following Abraham's pattern, pray persistently and specifically for someone living in a genuinely difficult or compromised situation right now."
    }
   ]
  }
 ]
},

// Day 40
{
 "ref": "Matthew 6",
 "tag": "New Testament",
 "api": "matthew+6",
 "nug": [
  {
   "h": "A prayer meant to be a pattern, not a script",
   "b": "The Lord's Prayer (v. 9–13) opens “after this manner” — a template covering God's glory, God's will, daily need, forgiveness, and protection from temptation, given right after Jesus criticizes empty repetition (v. 7)."
  },
  {
   "h": "Treasures and eyes, in the same breath",
   "b": "Between teaching on treasure in heaven (v. 19–21) and serving two masters (v. 24), Jesus inserts a line about the eye being the body's “light” (v. 22–23) — suggesting what you fix your attention on shapes your whole inner world, not just your bank balance."
  },
  {
   "h": "Birds and lilies as theology, not decoration",
   "b": "The famous “consider the lilies” passage (v. 25–34) isn't vague comfort — it's a tight logical argument: if God clothes short-lived wildflowers this well, how much more will He care for people, “o ye of little faith”?"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 55:8–9 · Philippians 4:6–7 · 1 Peter 5:7",
   "qs": [
    {
     "th": "“Seek ye first the kingdom of God… and all these things shall be added unto you” (v. 33) reorders priority without denying the real needs — food, clothing — Jesus has just spent several verses naming.",
     "q": "What would visibly change in your week if “seek first the kingdom” actually reordered your priorities rather than just adding one more item to the list?"
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
     "th": "Jesus assumes His listeners will give, pray and fast (v. 2, 5, 16 all say “when,” not “if”) — His concern isn't whether you do these things, but whether you're doing them for an audience.",
     "q": "Which of these — giving, praying, fasting, or something similar — do you find yourself most tempted to do for others to notice rather than for God alone?"
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
     "th": "“Take therefore no thought for the morrow” (v. 34) isn't a call to irresponsibility — it's aimed at anxious rehearsal of tomorrow's troubles today, “sufficient unto the day is the evil thereof.”",
     "q": "What worry about tomorrow are you carrying today that this verse is inviting you to set down until tomorrow actually arrives?"
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
     "th": "The Lord's Prayer ties forgiveness together both ways in one sentence: “forgive us our debts, as we forgive our debtors” (v. 12), and Jesus underlines it again immediately after the prayer ends (v. 14–15).",
     "q": "Is there someone you're withholding forgiveness from? Name them honestly to God as part of your confession today."
    }
   ]
  }
 ]
},

// Day 41
{
 "ref": "Psalm 25",
 "tag": "Psalms & Wisdom",
 "api": "psalms+25",
 "nug": [
  {
   "h": "An acrostic prayer",
   "b": "In Hebrew, this psalm's lines begin with successive letters of the alphabet, A to Z — a memory device, but also perhaps a way of saying the whole range of a life, start to finish, belongs inside this prayer."
  },
  {
   "h": "Forgiveness for sins of youth",
   "b": "“Remember not the sins of my youth, nor my transgressions: according to thy mercy remember thou me” (v. 7) asks God to selectively remember — mercy, not the record of old failures — a request many readers find surprisingly personal and specific."
  },
  {
   "h": "Secrets shared with the humble",
   "b": "“The secret of the LORD is with them that fear him” (v. 14) suggests a kind of intimacy — not hidden knowledge for an elite few, but closeness that opens up specifically to those who hold Him in reverence."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Micah 6:8 · James 4:6 · Proverbs 3:5–6",
   "qs": [
    {
     "th": "The psalm's repeated requests to be taught, led and shown God's paths (v. 4–5, 8–9) echo Proverbs 3:5–6's “lean not unto thine own understanding” — wisdom literature consistently treats guidance as something asked for, not assumed.",
     "q": "Where in your life right now do you most need to actively ask to be “led” rather than assuming you already know the way?"
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
     "th": "Verse 7's request to forget the “sins of my youth” suggests David, even as an older man, was still carrying and needing to actively release memories of earlier failures.",
     "q": "Is there something from an earlier season of your life you're still quietly carrying that you could hand to God's mercy today, the way David does here?"
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
     "th": "The “secret” of the LORD (v. 14) is available specifically to “them that fear him” — reverence, not intelligence or effort, is presented as the doorway to deeper closeness with God.",
     "q": "What would growing in genuine reverence for God — not fear of punishment, but awe — look like practically for you this week?"
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
     "th": "This psalm moves through the whole alphabet of a life — shame, need, guidance, forgiveness, loneliness, affliction (v. 16–18) — as if nothing is too ordinary or too raw to bring to God.",
     "q": "Sit quietly and let your mind move through your own “alphabet” of this week — what comes up that you haven't yet brought to God? Write it down."
    }
   ]
  }
 ]
},

// Day 42
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "God who sees",
   "b": "Hagar's name for God — “Thou God seest me” (Genesis 16:13) — was given in a wilderness, alone, and it's the only place in the Old Testament this exact name is used."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you watched Abraham's family carry both a real shortcut and a renewed promise, saw hospitality open the door to bold intercession, and prayed through both the Lord's Prayer and an alphabet-long psalm.",
     "q": "Where this week did you notice the pattern of failure and faithfulness sitting close together — in Abraham's story, or in your own week?"
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
     "th": "“Consider the lilies of the field, how they grow; they toil not, neither do they spin” (Matthew 6:28) — unhurried provision, not anxious striving.",
     "q": "What would it look like to “consider the lilies” about one specific worry today, rather than trying to solve it by striving harder?"
    }
   ]
  }
 ]
},

// Day 43
{
 "ref": "Genesis 19",
 "tag": "Old Testament",
 "api": "genesis+19",
 "nug": [
  {
   "h": "Lot still shows hospitality",
   "b": "Despite living in Sodom, Lot presses the two visiting angels to stay at his house rather than the town square (v. 2–3), echoing Abraham's hospitality in the previous chapter — a trace of his uncle's influence even in a compromised environment."
  },
  {
   "h": "A rescue that had to be forced",
   "b": "When the danger becomes clear, Lot “lingered” and the angels had to physically take his hand and his family's hands to pull them out of the city (v. 16) — rescue offered, but not eagerly grabbed."
  },
  {
   "h": "A look back that cost everything",
   "b": "Lot's wife, told explicitly not to look back (v. 17), does anyway and becomes “a pillar of salt” (v. 26) — Jesus later uses her as a one-line warning about the danger of looking back once you've been called forward (Luke 17:32)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 17:28–32 · 2 Peter 2:6–9 · Jude 1:7",
   "qs": [
    {
     "th": "Jesus references “Remember Lot's wife” (Luke 17:32) in teaching about His own return, using Sodom's sudden judgment and Lot's family's mixed response as a warning about being spiritually ready versus dangerously attached to what's being left behind.",
     "q": "Read Luke 17:28–32. Why do you think Jesus picks this specific, uncomfortable story rather than a gentler illustration?"
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
     "th": "Lot's “lingering” (v. 16) despite having angels physically in his house telling him to leave is a striking picture of how attachment can dull even a clear, urgent warning.",
     "q": "Is there a warning or a clear prompting you've been “lingering” on, even though part of you already knows what it's telling you to do?"
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
     "th": "2 Peter 2:7–8 goes out of its way to call Lot “righteous” and describe his soul as “vexed” daily by the wickedness around him — he wasn't unaffected by his environment, and Scripture doesn't pretend otherwise.",
     "q": "Is there an environment in your life that is quietly “vexing” your soul, that this chapter's honesty gives you permission to name rather than minimize?"
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
     "th": "The chapter's most painful details — including what happens with Lot's daughters afterward (v. 30–38) — show a family badly damaged by their years in Sodom, long after the physical escape.",
     "q": "Is there residue from a past environment or relationship still shaping you that you could name honestly to God, even if the physical situation is long over?"
    }
   ]
  }
 ]
},

// Day 44
{
 "ref": "Genesis 20",
 "tag": "Old Testament",
 "api": "genesis+20",
 "nug": [
  {
   "h": "The same lie, a second time",
   "b": "Abraham again tells a foreign king that Sarah is his sister (v. 2) — the exact deception from Genesis 12, repeated, years after the covenant of chapter 17 and even after receiving the promise of Isaac by name."
  },
  {
   "h": "A pagan king rebuked by God in a dream",
   "b": "Abimelech, who has done nothing knowingly wrong, is warned directly by God in a dream before he touches Sarah (v. 3–7) — God protecting the promise-line even through someone outside the covenant family entirely."
  },
  {
   "h": "Abraham called a “prophet”",
   "b": "Despite his failure in this very chapter, God tells Abimelech that Abraham “is a prophet, and he shall pray for thee, and thou shalt live” (v. 7) — his role and calling remain intact even in the middle of a moral failure."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 12:11–13 · Psalm 105:14–15 · Romans 11:29",
   "qs": [
    {
     "th": "Psalm 105:14–15 later celebrates God protecting Abraham and the patriarchs from kings, “Touch not mine anointed, and do my prophets no harm” — recasting this very incident as evidence of God's covenant faithfulness rather than Abraham's own wisdom.",
     "q": "How does it change the story to realize the protection here came entirely from God's commitment to the promise, not from Abraham's judgment?"
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
     "th": "This is the second time the same specific failure shows up in Abraham's story — not a different sin, but the same one, years later, under similar pressure (fear of a foreign king).",
     "q": "Is there a recurring pattern of failure in your own life — not a new sin each time, but the same old one resurfacing under similar pressure?"
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
     "th": "Abimelech, an outsider to the covenant, receives a direct dream-warning from God and responds with integrity (v. 4–6) — God working clearly through someone outside the “insider” family.",
     "q": "Where might God be speaking through someone “outside” your usual circle of spiritual influence, in a way you'd do well to actually listen to?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: prayer",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Despite Abraham's failure earlier in the chapter, God still uses his prayer to heal Abimelech's household (v. 17) — his calling to intercede wasn't cancelled by his mistake.",
     "q": "Is there someone you've been hesitant to pray for because you don't feel qualified? Pray for them anyway today, trusting the calling isn't about your track record."
    }
   ]
  }
 ]
},

// Day 45
{
 "ref": "Psalm 27",
 "tag": "Psalms & Wisdom",
 "api": "psalms+27",
 "nug": [
  {
   "h": "Confidence and desperation in the same psalm",
   "b": "Verses 1–6 read as bold and settled — “The LORD is my light and my salvation; whom shall I fear?” Verses 7–14 shift to urgent pleading — “Hide not thy face far from me.” Many readers think this reflects two moods of the same situation, or even two psalms joined together."
  },
  {
   "h": "One request, above all others",
   "b": "“One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life” (v. 4) — out of everything David could ask for, he narrows it to nearness to God itself."
  },
  {
   "h": "A promise even if parents fail",
   "b": "“When my father and my mother forsake me, then the LORD will take me up” (v. 10) — one of Scripture's clearest statements that God's care doesn't depend on even the most foundational human relationships holding."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 13:5–6 · Romans 8:31 · 1 Kings 8:57",
   "qs": [
    {
     "th": "Hebrews 13:5–6 quotes God's promise never to leave or forsake, then draws the same conclusion David does here — “the Lord is my helper, and I will not fear what man shall do unto me,” nearly word for word.",
     "q": "Read Hebrews 13:5–6. What specific fear does that promise directly answer for you right now?"
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
     "th": "David's psalm swings between confidence and desperate pleading within the same six verses — real faith, in this psalm, clearly isn't the absence of fear or need.",
     "q": "Where do you feel pressure to sound more “confident” in your faith than you honestly feel this week? What would it look like to bring both, like David does?"
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
     "th": "“Wait on the LORD: be of good courage, and he shall strengthen thine heart” (v. 14) is the psalm's final word — not a resolved problem, but a posture of waiting with strength renewed along the way.",
     "q": "What are you currently “waiting on the LORD” for, and how could you actively “be of good courage” in the waiting rather than just enduring it?"
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
     "th": "Verse 4's “one thing” — nearness to God above every other request — is a striking simplification of what could otherwise be a long list of prayer requests.",
     "q": "Write your own “one thing” prayer — if you could only ask God for one thing today, narrowed all the way down, what would it be?"
    }
   ]
  }
 ]
},

// Day 46
{
 "ref": "Genesis 21",
 "tag": "Old Testament",
 "api": "genesis+21",
 "nug": [
  {
   "h": "Laughter, twice over",
   "b": "Isaac's birth brings joy — “God hath made me to laugh, so that all that hear will laugh with me” (v. 6) — a very different laughter from Sarah's disbelieving laugh in chapter 18, and from Abraham's in chapter 17. The name Isaac now carries a redeemed meaning."
  },
  {
   "h": "Hagar and Ishmael sent away, but not abandoned by God",
   "b": "Sarah insists Hagar and Ishmael leave (v. 10), and though it grieves Abraham (v. 11), God reassures him and then personally provides water and presence for Hagar in the wilderness a second time (v. 17–20)."
  },
  {
   "h": "A well named for an oath",
   "b": "Abraham and Abimelech make a covenant at a well, and Abraham names the place Beersheba — “well of the oath” or “well of seven” — tied to seven ewe lambs given as a witness (v. 28–31), a peaceful resolution after two chapters of conflict and deception."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Galatians 4:28–31 · Romans 9:7–9 · Hebrews 6:13–15",
   "qs": [
    {
     "th": "Paul, continuing his Galatians 4 allegory, calls believers “children of promise, as Isaac was” (Galatians 4:28) — the long-awaited, God-given son becomes a picture of anyone who receives God's promises by faith rather than by natural effort or timeline.",
     "q": "Read Galatians 4:28–31. What does it mean to you to be described, like Isaac, as a “child of promise” rather than a child of your own striving?"
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
     "th": "God tells the grieving Abraham to listen to Sarah and send Hagar and Ishmael away, promising to care for Ishmael separately (v. 12–13) — a genuinely hard, sad decision that God doesn't remove the pain from, but does provide within.",
     "q": "Is there a hard, sad decision in your own life where God's care is present within it, even though He hasn't removed the difficulty of the decision itself?"
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
     "th": "God “opened her eyes” so Hagar could see a well of water that, it's implied, was there all along (v. 19) — provision sometimes isn't newly created, just newly seen.",
     "q": "Where might God be inviting you to see provision that's already there, rather than waiting for something new to appear?"
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
     "th": "Isaac's very name means laughter, and his birth turns disbelieving laughter into genuine joy that Sarah says “all that hear will laugh with me” (v. 6).",
     "q": "Thank God for a time disbelief or doubt in your own life eventually turned into real, shared joy."
    }
   ]
  }
 ]
},

// Day 47
{
 "ref": "Matthew 7",
 "tag": "New Testament",
 "api": "matthew+7",
 "nug": [
  {
   "h": "A measure that comes back to you",
   "b": "“Judge not, that ye be not judged… with what measure ye mete, it shall be measured to you again” (v. 1–2) isn't a ban on all discernment — Jesus goes on to describe recognizing “false prophets” by their fruit later in the same chapter — but a warning about the harsh, self-exempting kind of judgment."
  },
  {
   "h": "A memorable, exaggerated image",
   "b": "“Why beholdest thou the mote that is in thy brother's eye, but considerest not the beam that is in thine own eye?” (v. 3) uses deliberate, almost comic exaggeration — a speck versus a plank — to make self-examination unavoidable to picture."
  },
  {
   "h": "Two builders, one storm",
   "b": "The sermon closes with wise and foolish builders (v. 24–27) facing the identical storm — the difference isn't the weather, but whether the foundation was Jesus' words actually put into practice, or just heard."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 6:37–38 · James 4:11–12 · Galatians 6:1",
   "qs": [
    {
     "th": "Galatians 6:1 picks up this same tension — restoring someone caught in a fault “in the spirit of meekness” while “considering thyself, lest thou also be tempted” — correction paired immediately with self-awareness.",
     "q": "How does Galatians 6:1 help you picture what it looks like to address a fault in someone else without the “beam” Jesus warns against?"
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
     "th": "“Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you” (v. 7) is followed by an argument from lesser to greater: if flawed human parents give good gifts, how much more will a perfect Father (v. 9–11)?",
     "q": "What have you stopped asking God for, assuming the answer was already settled as no?"
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
     "th": "“Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father” (v. 21) — even impressive spiritual activity (prophesying, casting out devils, v. 22) isn't itself the proof Jesus is looking for.",
     "q": "Where might you be relying on spiritual activity or language as proof of something, rather than on actually doing what God has asked?"
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
     "th": "The narrow gate and the few who find it (v. 13–14) is a sobering picture Jesus doesn't soften.",
     "q": "Pray specifically today for someone you know who seems to be on the “broad” road, by name, without judgment — just genuine, specific intercession."
    }
   ]
  }
 ]
},

// Day 48
{
 "ref": "Psalm 32",
 "tag": "Psalms & Wisdom",
 "api": "psalms+32",
 "nug": [
  {
   "h": "Possibly written after David's worst failure",
   "b": "Many readers connect this psalm to the aftermath of David's sin with Bathsheba (2 Samuel 11–12), describing the physical toll of unconfessed guilt — “my bones waxed old… my moisture is turned into the drought of summer” (v. 3–4) — before relief comes."
  },
  {
   "h": "Blessed before the details",
   "b": "The psalm opens not with instruction but with a declaration of blessing: “Blessed is he whose transgression is forgiven, whose sin is covered” (v. 1) — forgiveness announced before any explanation of how it happened."
  },
  {
   "h": "A warning against stubbornness, using animals",
   "b": "“Be ye not as the horse, or as the mule, which have no understanding: whose mouth must be held in with bit and bridle” (v. 9) — a vivid image of being forced into obedience versus willingly walking with God."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 John 1:9 · Romans 4:6–8 · James 5:16",
   "qs": [
    {
     "th": "Paul directly quotes verses 1–2 in Romans 4:6–8 as proof that forgiveness by grace, apart from perfect performance, was already the pattern in the Old Testament — not a New Testament innovation.",
     "q": "Read Romans 4:6–8. How does it change your reading of the Old Testament to see this psalm used as direct proof of grace-based forgiveness?"
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
     "th": "Verse 3 describes real, physical symptoms — exhaustion, groaning — from simply keeping silent about sin rather than confessing it, until “I acknowledged my sin unto thee… and thou forgavest” (v. 5).",
     "q": "Is there something you've been silently carrying that, like David, is costing you more energy to hide than it would to simply confess?"
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
     "th": "“Thou art my hiding place; thou shalt preserve me from trouble” (v. 7) comes right after the confession — God becomes a refuge after honesty, not instead of it.",
     "q": "What would change if you treated confession as the doorway to God being your hiding place, rather than something that has to happen before you're allowed to approach Him?"
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
     "th": "Verse 5's turning point is simple and direct: “I said, I will confess my transgressions unto the LORD; and thou forgavest the iniquity of my sin.” No elaborate ritual — just honest words met with immediate forgiveness.",
     "q": "Following verse 5's pattern exactly, say plainly to God what you need to confess, and receive His forgiveness as immediately as David describes."
    }
   ]
  }
 ]
},

// Day 49
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "God opened her eyes",
   "b": "In Genesis 21:19, God “opened” Hagar's eyes to see a well that, it seems, had been there all along — provision already present, just not yet seen."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week held Lot's rescue and Lot's loss side by side, Abraham's repeated failure and unbroken calling, laughter finally redeemed at Isaac's birth, and two psalms about honest confession and undivided desire.",
     "q": "Where this week did you see that God's calling on someone doesn't get cancelled by their repeated failure — in Abraham's story, or possibly in your own?"
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
     "th": "“Wait on the LORD: be of good courage, and he shall strengthen thine heart” (Psalm 27:14) — strength given in the waiting, not only at the end of it.",
     "q": "What could “being of good courage” look like today, in whatever you're currently waiting on God for?"
    }
   ]
  }
 ]
},

// Day 50
{
 "ref": "Genesis 22",
 "tag": "Old Testament",
 "api": "genesis+22",
 "nug": [
  {
   "h": "A test, clearly labelled as one",
   "b": "Verse 1 opens by telling the reader directly, “God did tempt [test] Abraham” — we're let in on this being a test from the very first line, though Abraham himself has no such reassurance as he sets out."
  },
  {
   "h": "“God will provide himself a lamb”",
   "b": "When Isaac asks where the lamb is (v. 7), Abraham answers, “God will provide himself a lamb for a burnt offering” (v. 8) — true in a way deeper than Abraham could have known, fulfilled moments later by the ram, and pointing further still to Christ."
  },
  {
   "h": "The mountain's name and later history",
   "b": "The location, Moriah (v. 2), is later identified in 2 Chronicles 3:1 as the site where Solomon built the temple in Jerusalem — the same ground where a son was spared becomes the ground where sacrifices for the whole nation would be offered for centuries."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 11:17–19 · James 2:21–23 · John 3:16 · John 1:29",
   "qs": [
    {
     "th": "Hebrews 11:19 says Abraham reasoned God “was able to raise him up, even from the dead” — he wasn't merely resigned to loss, but trusting resurrection before the concept had ever been demonstrated in Scripture.",
     "q": "How does knowing Abraham was reasoning toward resurrection, not just submission, change how you read his willingness in this chapter?"
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
     "th": "Abraham doesn't argue or stall — verse 3 says he “rose up early in the morning” to obey a command that would have felt impossible to explain to anyone watching.",
     "q": "What is the hardest thing God has ever asked you to be willing to lay down, and how did (or would) you respond?"
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
     "th": "The ram “caught in a thicket by his horns” (v. 13) appears at the exact moment of need, not before — provision timed to the point of obedience, not to the point of the initial request.",
     "q": "Where are you waiting for provision that God's timing may simply not have released yet, even though your obedience is already underway?"
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
     "th": "Abraham names the place “Jehovah-jireh” — “the LORD will provide” (v. 14) — turning a place of near-unbearable testing into a permanent, worshipful memorial.",
     "q": "Name a difficult place or season in your own life that, in hindsight, deserves its own “Jehovah-jireh” marker of praise."
    }
   ]
  }
 ]
},

// Day 51
{
 "ref": "Genesis 23",
 "tag": "Old Testament",
 "api": "genesis+23",
 "nug": [
  {
   "h": "The only property Abraham ever owned",
   "b": "Despite receiving the promise of an entire land, the cave of Machpelah, bought here for four hundred shekels of silver (v. 16), is the only piece of ground Abraham legally purchased in his whole life — a burial plot, not a kingdom."
  },
  {
   "h": "A negotiation conducted with careful honour",
   "b": "The exchange with Ephron the Hittite (v. 3–16) is a detailed, formally polite ancient Near Eastern land transaction — Abraham insists on paying full price rather than accepting the land as a gift, wanting a legally undisputed claim."
  },
  {
   "h": "A down payment on the promise",
   "b": "Owning this one small burial cave becomes, in Hebrews 11:13, part of the evidence that the patriarchs died “not having received the promises, but having seen them afar off” — a first physical foothold in land they'd never fully possess in their lifetime."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 11:9–13 · Acts 7:15–16 · Genesis 49:29–31",
   "qs": [
    {
     "th": "Hebrews 11:13 says the patriarchs “died in faith, not having received the promises, but having seen them afar off” — Sarah's burial cave is one small, tangible down payment on a promise that would take centuries to fully unfold.",
     "q": "What does it look like for you to hold a small, tangible piece of a promise while trusting God for the much larger fulfilment still ahead?"
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
     "th": "Abraham grieves and weeps for Sarah (v. 2) before doing anything practical — grief given its own space before the business of burial arrangements begins.",
     "q": "Is there a loss you've moved past too quickly into practical arrangements, without giving the grief itself its own honest space?"
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
     "th": "Abraham's insistence on paying full price rather than accepting Ephron's offer of a free gift (v. 11–13) shows a desire for a clear, undisputed inheritance for his family — careful stewardship even in a small transaction.",
     "q": "Where might God be asking you to do something the harder, more careful way now, for the sake of clarity or integrity later?"
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
     "th": "Even in grief, this chapter ends with a settled, secured place — “the field, and the cave that is therein, were made sure unto Abraham” (v. 20).",
     "q": "Thank God for one settled, secure thing in your life right now that you might be taking for granted."
    }
   ]
  }
 ]
},

// Day 52
{
 "ref": "Psalm 34",
 "tag": "Psalms & Wisdom",
 "api": "psalms+34",
 "nug": [
  {
   "h": "Written while pretending to be insane",
   "b": "The heading ties this psalm to 1 Samuel 21, when David, fleeing Saul, feigned madness before a Philistine king to escape — a genuinely undignified, desperate moment that produced one of Scripture's most quoted praise psalms."
  },
  {
   "h": "“Taste and see”",
   "b": "Verse 8's invitation — “O taste and see that the LORD is good” — uses a sensory, experiential word rather than an abstract one. It's an invitation to personal experience, not just intellectual agreement."
  },
  {
   "h": "An acrostic again, with one letter skipped",
   "b": "Like Psalm 25, this psalm is alphabetic in Hebrew, though it notably omits the letter vav — a small irregularity scholars still debate, a reminder that even beautifully structured praise doesn't have to be flawlessly tidy."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Peter 2:3 · 1 Peter 3:10–12 · John 19:36",
   "qs": [
    {
     "th": "Peter directly quotes “if so be ye have tasted that the Lord is gracious” (1 Peter 2:3) from this psalm, and later quotes an extended passage from it almost verbatim (1 Peter 3:10–12) as guidance for how to live under pressure.",
     "q": "Read 1 Peter 3:10–12. How does Peter apply a psalm written in a moment of desperate deception to ordinary, everyday speech and conduct?"
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
     "th": "David wrote this not after a triumph but after one of his most humiliating, fear-driven moments — pretending madness, spit running down his beard (1 Samuel 21:13) — and still calls his listeners to “bless the LORD at all times” (v. 1).",
     "q": "Is there an embarrassing or humbling moment in your own recent story that you could still find a reason to praise God from, the way David does here?"
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
     "th": "“The angel of the LORD encampeth round about them that fear him, and delivereth them” (v. 7) pictures ongoing, active protection, not a one-time rescue.",
     "q": "Where do you need to remember ongoing protection rather than assuming you're facing this season entirely unguarded?"
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
     "th": "Verse 8's invitation to “taste and see” is experiential, not just informational — an invitation to actually try trusting God with something specific, not merely agree He's trustworthy in theory.",
     "q": "Pick one specific worry or need and “taste” trusting God with it today — an actual, small, practical act of trust, not just a thought."
    }
   ]
  }
 ]
},

// Day 53
{
 "ref": "Genesis 24",
 "tag": "Old Testament",
 "api": "genesis+24",
 "nug": [
  {
   "h": "A servant's careful, specific prayer",
   "b": "Before Rebekah even arrives at the well, Abraham's unnamed servant prays for a very specific sign — a woman who offers water to him and his camels (v. 12–14) — and the text notes he “had not done speaking” before Rebekah appeared (v. 15)."
  },
  {
   "h": "A costly kindness",
   "b": "Watering ten camels after a long journey is no small task — a thirsty camel can drink dozens of gallons, meaning Rebekah's offer (v. 19) represented a significant, physically demanding act of generosity to a total stranger."
  },
  {
   "h": "A decision made quickly, by her own will",
   "b": "When asked if she'll go, Rebekah's family wants to wait ten days; she's asked directly and answers immediately, “I will go” (v. 58) — her own consent, not just her family's arrangement, is recorded as decisive."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Ephesians 5:25–27 · Proverbs 19:14 · Genesis 2:24",
   "qs": [
    {
     "th": "Many readers through church history have seen a picture in this chapter of the Spirit (the servant) sent by the Father to find a bride for the Son, though not yet met — Isaac isn't present for the courtship, only for the homecoming (v. 62–67).",
     "q": "Whether or not you read it as a deliberate picture, what do you notice about how much of this whole search rests on the servant's faithful prayer rather than Isaac's own effort?"
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
     "th": "The servant's prayer is remarkably specific — not just “give me success,” but a concrete, checkable sign (v. 14) — and he prays it before doing anything else at the well.",
     "q": "Where could you pray more specifically for guidance this week, rather than only in general terms?"
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
     "th": "Rebekah's willingness to water ten thirsty camels for a stranger, unprompted, is what marks her out — an ordinary act of generosity that turns out to answer a very specific prayer.",
     "q": "What ordinary act of generosity might you be able to offer today, without knowing what it could be part of?"
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
     "th": "The servant never once prays for himself in this chapter — every request and every thanksgiving (v. 26–27, 52) is on behalf of his master's household and the future of the family line.",
     "q": "Pray today entirely on behalf of someone else's future — a family member, a friend, someone whose story you're invested in but don't control."
    }
   ]
  }
 ]
},

// Day 54
{
 "ref": "Matthew 8",
 "tag": "New Testament",
 "api": "matthew+8",
 "nug": [
  {
   "h": "Touching the untouchable",
   "b": "Jesus touches a leper to heal him (v. 3) — a category of person required by Levitical law to stay separated and cry “unclean” to warn others away (Leviticus 13:45–46). He doesn't just heal from a distance; He crosses a boundary no one else would."
  },
  {
   "h": "A Gentile soldier's surprising faith",
   "b": "A Roman centurion — an occupying enemy officer, by any normal Jewish standard an outsider — shows faith Jesus says He “have not found, no, not in Israel” (v. 10), understanding authority well enough to know Jesus doesn't even need to be physically present to heal."
  },
  {
   "h": "A storm calmed with a rebuke",
   "b": "Jesus “rebukes” the wind and sea (v. 26) — the same word used elsewhere for rebuking demons — and the disciples' amazed question, “what manner of man is this, that even the winds and the sea obey him?”, is left hanging, unanswered in the text, for the reader to sit with."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 13:45–46 · Isaiah 53:4 · Mark 4:39–41",
   "qs": [
    {
     "th": "Matthew explicitly ties Jesus' healing ministry in this chapter to Isaiah 53:4 — “Himself took our infirmities, and bare our sicknesses” (v. 17) — reading the Suffering Servant prophecy as being fulfilled in these everyday healings, not only at the cross.",
     "q": "Read Isaiah 53:4 alongside Matthew 8:17. What does it add to your understanding of Jesus' healings to see them tied to this specific prophecy?"
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
     "th": "The centurion says, “I am not worthy that thou shouldest come under my roof: but speak the word only, and my servant shall be healed” (v. 8) — confident faith paired with genuine humility, not competing with each other.",
     "q": "Where do you tend to think you need to feel more “worthy” before you can confidently ask God for something?"
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
     "th": "The disciples wake a sleeping Jesus in a real storm, genuinely afraid, and He calms both the sea and, gently, their fear — “Why are ye fearful, O ye of little faith?” (v. 26).",
     "q": "What “storm” has you afraid this week, and what would it look like to wake Jesus up in it rather than just trying to weather it alone?"
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
     "th": "Two demon-possessed men are so violent “that no man might pass by that way” (v. 28) — yet even they are met, not avoided, by Jesus.",
     "q": "Is there a part of yourself you assume is too far gone or too intense for God to meet? Bring it honestly to Him now."
    }
   ]
  }
 ]
},

// Day 55
{
 "ref": "Psalm 37",
 "tag": "Psalms & Wisdom",
 "api": "psalms+37",
 "nug": [
  {
   "h": "An acrostic about patience, fittingly long",
   "b": "Like Psalms 25 and 34, this is alphabetic in structure — forty verses working slowly through a single sustained argument against envying evildoers, matching its unhurried form to its unhurried message."
  },
  {
   "h": "“Fret not” appears three times",
   "b": "The psalm opens (v. 1), returns (v. 7) and returns again (v. 8) to essentially the same command — don't fret over evildoers — as if the writer knows this particular anxiety needs repeating, not just stating once."
  },
  {
   "h": "A verse Jesus later echoes almost exactly",
   "b": "“The meek shall inherit the earth” (v. 11) is quoted nearly word for word by Jesus in Matthew 5:5, one of the Beatitudes, connecting this long wisdom psalm directly to the Sermon on the Mount you read earlier this reading plan."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 5:5 · Proverbs 23:17–18 · Galatians 6:9",
   "qs": [
    {
     "th": "Jesus' “Blessed are the meek: for they shall inherit the earth” (Matthew 5:5) draws directly on Psalm 37:11, taking an Old Testament wisdom saying about not envying the wicked and placing it at the centre of His own kingdom teaching.",
     "q": "Why do you think Jesus chose this particular line, about the meek inheriting the earth, as one of His foundational kingdom statements?"
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
     "th": "“Delight thyself also in the LORD; and he shall give thee the desires of thine heart” (v. 4) is often misread as a formula; in context it follows “fret not” and “trust in the LORD” — delight reshapes desires rather than simply granting whatever you already wanted.",
     "q": "How might genuinely delighting in God reshape what you actually desire, rather than just being a means to get what you already want?"
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
     "th": "“Commit thy way unto the LORD; trust also in him; and he shall bring it to pass” (v. 5) uses a word for “commit” that means to roll something over, like a heavy stone, onto someone else's strength.",
     "q": "What is one specific “way” — a plan, a decision, a relationship — you could deliberately “roll” onto God today rather than continuing to carry it yourself?"
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
     "th": "Despite forty verses about the wicked prospering temporarily, the psalm's confidence never wavers: “I have not seen the righteous forsaken” (v. 25).",
     "q": "Write a short prayer of confidence in God's justice and care, even about a situation where wrong currently seems to be winning."
    }
   ]
  }
 ]
},

// Day 56
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A specific prayer, quickly answered",
   "b": "Abraham's servant hadn't finished praying his specific request before Rebekah appeared and answered it exactly (Genesis 24:15) — a reminder that specific prayer isn't presumptuous."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week held Abraham's hardest test and its provision, a careful burial and a careful prayer for a bride, Jesus crossing boundaries to touch the untouchable, and a long psalm about refusing to fret over evildoers.",
     "q": "Where did “the LORD will provide” (Genesis 22:14) show up for you this week, even in a small or easily missed way?"
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
     "th": "“Rest in the LORD, and wait patiently for him” (Psalm 37:7) — patience paired with rest, not gritted-teeth endurance.",
     "q": "What would resting, rather than just enduring, look like in whatever you're currently waiting on?"
    }
   ]
  }
 ]
},

// Day 57
{
 "ref": "Genesis 25",
 "tag": "Old Testament",
 "api": "genesis+25",
 "nug": [
  {
   "h": "A patriarch's death handled without drama",
   "b": "Abraham dies “in a good old age, an old man, and full of years” (v. 8), and Isaac and Ishmael — half-brothers separated under painful circumstances — bury him together (v. 9), a quiet moment of reconciliation the text doesn't dwell on but doesn't skip either."
  },
  {
   "h": "A birthright sold for a bowl of stew",
   "b": "Esau, “faint” from hunger, trades his birthright — the double inheritance and covenant leadership due the firstborn — for red lentil stew (v. 29–34), and the text's blunt verdict is memorable: “thus Esau despised his birthright.”"
  },
  {
   "h": "Twins struggling before they're even born",
   "b": "“The children struggled together within her” (v. 22), and God tells Rebekah directly that “the elder shall serve the younger” (v. 23) — the reversal of Jacob over Esau is announced before either son has done anything at all."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 12:16–17 · Romans 9:10–13 · Malachi 1:2–3",
   "qs": [
    {
     "th": "Romans 9:10–13 uses this exact pre-birth announcement — “the elder shall serve the younger” — to argue that God's purposes rest on His own calling, not on anything either twin had done, good or bad, at the point the promise was made.",
     "q": "Read Romans 9:10–13. Why does Paul specifically emphasize that this word came “before the children were yet born”?"
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
     "th": "Hebrews 12:16–17 calls Esau “a profane person” for trading his birthright for a single meal, and notes he later found no way to reverse the choice even seeking it “carefully with tears.” Some decisions, made carelessly in a moment of appetite, carry consequences that outlast the moment.",
     "q": "Is there a “bowl of stew” decision — something valuable traded away for a short-term craving — you recognize in your own life, past or tempting you now?"
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
     "th": "Isaac and Ishmael, whose family history includes real pain and rivalry (chapters 16 and 21), stand together to bury their father — the text records the reconciliation simply, without explaining how it happened.",
     "q": "Is there a strained relationship in your life where a simple, undramatic step toward reconciliation might be more possible than you assume?"
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
     "th": "Esau's regret came “carefully with tears” (Hebrews 12:17) but too late to undo the trade — a sober reminder that confession and change are best made before, not only after, a costly choice.",
     "q": "Is there a choice in front of you right now where honest reflection before deciding could spare you Esau's kind of regret?"
    }
   ]
  }
 ]
},

// Day 58
{
 "ref": "Genesis 26",
 "tag": "Old Testament",
 "api": "genesis+26",
 "nug": [
  {
   "h": "The same failure, a third generation",
   "b": "Isaac tells Abimelech that Rebekah is his sister (v. 7) — the identical deception his father Abraham used twice (chapters 12 and 20). Family patterns, good and bad, clearly pass down whether or not anyone names them."
  },
  {
   "h": "Re-digging his father's wells",
   "b": "Isaac literally reopens wells “which his father's servants had digged” and had been stopped up by Philistines after Abraham's death (v. 18), even restoring their original names — inheriting and reclaiming, not just starting fresh."
  },
  {
   "h": "Peace after repeated conflict",
   "b": "After several wells are disputed (Esek, “contention”; Sitnah, “enmity”), Isaac finally digs one nobody fights over and calls it Rehoboth, “room” — “for now the LORD hath made room for us” (v. 22), persistence eventually met with peace."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 12:10–13 · Genesis 20:1–2 · Hebrews 11:20",
   "qs": [
    {
     "th": "This is the third nearly identical “she is my sister” episode across two generations (Genesis 12, 20, and now 26) — the Bible doesn't hide that even a covenant family repeats the same fear-driven mistake without much apparent progress.",
     "q": "Why do you think Scripture records this same failure three times rather than only once, and what does that honesty do for you as a reader?"
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
     "th": "Isaac's wells get filled in with dirt out of pure jealousy over his prosperity (v. 14–15), and rather than fighting for the first two disputed wells, he simply moves on and digs again (v. 19–22).",
     "q": "Where might persistent, quiet re-digging — rather than fighting for territory — be the wiser response to opposition you're currently facing?"
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
     "th": "God appears to Isaac specifically “the same night” he arrives at Beersheba, saying, “I am the God of Abraham thy father: fear not, for I am with thee” (v. 24) — the covenant explicitly passed down by name to the next generation.",
     "q": "What has been passed down to you — a promise, a faith, a calling — from someone in your own family line that you're now living out in your own way?"
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
     "th": "“For now the LORD hath made room for us, and we shall be fruitful in the land” (v. 22) comes only after real, repeated frustration — the room made felt earned through persistence, even though it was ultimately God's doing.",
     "q": "Thank God for a time “room” finally opened up after a season of real, repeated frustration."
    }
   ]
  }
 ]
},

// Day 59
{
 "ref": "Psalm 42",
 "tag": "Psalms & Wisdom",
 "api": "psalms+42",
 "nug": [
  {
   "h": "An animal image for spiritual thirst",
   "b": "“As the hart panteth after the water brooks, so panteth my soul after thee, O God” (v. 1) — a deer that has been running hard, desperate and visibly straining for water, used as the picture for a soul's longing for God."
  },
  {
   "h": "A refrain repeated to oneself",
   "b": "Twice in this short psalm (v. 5, 11) the writer directly addresses his own soul: “Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God” — preaching to himself rather than just describing his feelings."
  },
  {
   "h": "Written far from the temple",
   "b": "The writer, likely one of the sons of Korah serving as temple musicians, recalls going “with the multitude” to worship (v. 4) from a place of exile near Mount Hermon (v. 6) — longing sharpened by distance from what used to be familiar."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 43:5 · Lamentations 3:19–24 · 2 Corinthians 4:8–9",
   "qs": [
    {
     "th": "Psalm 43, often considered a continuation of this psalm, ends with the identical refrain — “Why art thou cast down, O my soul?” — as if the same honest conversation with oneself needs repeating across more than one prayer.",
     "q": "Why do you think talking directly to your own soul, rather than just describing your feelings to God, might be a helpful practice?"
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
     "th": "“Deep calleth unto deep at the noise of thy waterspouts: all thy waves and thy billows are gone over me” (v. 7) is a strikingly physical description of being overwhelmed — not minimized or explained away, just honestly named.",
     "q": "What would it look like to name your own “deep calling unto deep” moment honestly to God this week, without rushing past it to a tidy resolution?"
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
     "th": "Even in the middle of real distress, the writer still remembers past worship — “I had gone with the multitude… with the voice of joy and praise” (v. 4) — memory of former closeness becomes part of present hope.",
     "q": "What memory of a past, felt closeness to God could you draw on as evidence, not just nostalgia, during a current dry season?"
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
     "th": "The psalm's honest cry, “My tears have been my meat day and night” (v. 3), is not rebuked or corrected — it's simply included as part of an authentic prayer.",
     "q": "Sit quietly and let yourself feel, without editing, whatever “panting” for God is actually present in you right now. Tell Him honestly."
    }
   ]
  }
 ]
},

// Day 60
{
 "ref": "Genesis 27",
 "tag": "Old Testament",
 "api": "genesis+27",
 "nug": [
  {
   "h": "A blessing secured by deception",
   "b": "Rebekah and Jacob scheme together to trick the blind, aging Isaac into giving Jacob the blessing meant for Esau (v. 6–29) — taking by trickery something already promised to Jacob before birth (25:23), rather than trusting God's timing."
  },
  {
   "h": "A blessing that couldn't be taken back",
   "b": "Once Isaac realizes he's been deceived, he trembles “exceedingly” (v. 33) but doesn't retract the blessing — in the ancient world, a spoken blessing, once given, was treated as legally and spiritually binding, deception or not."
  },
  {
   "h": "Esau's raw grief",
   "b": "“Hast thou but one blessing, my father? bless me, even me also, O my father. And Esau lifted up his voice, and wept” (v. 38) — one of the most painful, unguarded expressions of loss recorded anywhere in Genesis."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 11:20 · Romans 9:11–12 · Hebrews 12:16–17",
   "qs": [
    {
     "th": "Despite the deception involved, Hebrews 11:20 still lists this moment — “Isaac blessed Jacob and Esau concerning things to come” — as an act of faith, focusing on the reality of the promise being spoken rather than the flawed way it came about.",
     "q": "How does it change your reading of this messy chapter to know Hebrews still counts it as an act of genuine faith, human failure and all?"
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
     "th": "Jacob gets what was already promised to him (25:23) through fear-driven scheming rather than patient trust — the birthright was already his by God's word; the deception wasn't necessary to secure it, only to rush it.",
     "q": "Is there something you already have reason to trust God for that you're tempted to secure through manipulation or rushing, rather than patience?"
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
     "th": "Rebekah's plan protects Jacob in the moment but costs her his presence — she never sees him again after he flees (v. 43–45), a painful, unintended cost to a scheme meant to help him.",
     "q": "Where has a shortcut you took, or a shortcut someone took for you, cost more in the long run than it seemed to at the time?"
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
     "th": "This entire chapter is built on deception — blind trust exploited, disguise, lies told directly to a father's face (v. 19, 24) — without a single moment of confession from anyone involved in the text itself.",
     "q": "Where might you be avoiding a confession this story invites you to consider — a manipulation, however well-intentioned, that deserves honesty rather than justification?"
    }
   ]
  }
 ]
},

// Day 61
{
 "ref": "Matthew 9",
 "tag": "New Testament",
 "api": "matthew+9",
 "nug": [
  {
   "h": "Forgiveness before healing",
   "b": "To a paralyzed man, Jesus says “thy sins be forgiven thee” (v. 2) before healing his body at all — deliberately provoking the scribes' accusation of blasphemy (v. 3) to demonstrate His authority over the deeper problem first."
  },
  {
   "h": "A tax collector called by name",
   "b": "Matthew (this Gospel's likely author) is called directly from his tax booth — a profession widely despised as collaboration with Rome and extortion — and immediately hosts Jesus at a meal with “many publicans and sinners” (v. 9–10)."
  },
  {
   "h": "A woman who only needed to touch the hem",
   "b": "A woman with a twelve-year bleeding disorder — which would have made her ceremonially unclean and socially isolated the entire time — reaches out just to touch Jesus' garment, believing that alone would be enough (v. 20–22), and it is."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 61:1 · Luke 5:31–32 · Hosea 6:6",
   "qs": [
    {
     "th": "Jesus quotes Hosea 6:6 directly to the Pharisees — “I will have mercy, and not sacrifice” (v. 13) — defending His choice to eat with “sinners” by appealing to an Old Testament prophet's own priorities.",
     "q": "Read Hosea 6:6 in its original context. Why do you think Jesus reaches for this specific verse to defend table fellowship with people the religious establishment despised?"
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
     "th": "Matthew's response to being called is immediate and total — “he arose, and followed him” (v. 9) — leaving behind a lucrative, if despised, career without negotiation or delay.",
     "q": "What is the equivalent, for you, of “leaving the tax booth” — something you'd need to leave behind immediately, not gradually, to follow Jesus more fully?"
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
     "th": "The bleeding woman's faith is quiet and almost invisible — she doesn't ask Jesus for anything out loud, just reaches for the hem of His garment, believing that would be enough (v. 21).",
     "q": "Where do you need faith that doesn't require a dramatic request — just a quiet, confident reach toward Jesus in the middle of a crowd?"
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
     "th": "“The harvest truly is plenteous, but the labourers are few; pray ye therefore the Lord of the harvest, that he will send forth labourers” (v. 37–38) comes right after Jesus is described as “moved with compassion” for crowds who seemed “scattered abroad, as sheep having no shepherd” (v. 36).",
     "q": "Pray today specifically for people or a place that feels “scattered” and without spiritual care, asking God to send someone there."
    }
   ]
  }
 ]
},

// Day 62
{
 "ref": "Psalm 46",
 "tag": "Psalms & Wisdom",
 "api": "psalms+46",
 "nug": [
  {
   "h": "The psalm behind a famous hymn",
   "b": "Martin Luther's “A Mighty Fortress Is Our God” is a direct reworking of this psalm — “God is our refuge and strength, a very present help in trouble” (v. 1) written during his own season of real danger and opposition."
  },
  {
   "h": "A river in a city that has none",
   "b": "“There is a river, the streams whereof shall make glad the city of God” (v. 4) is striking because historic Jerusalem had no major river — the image points past the literal city to a spiritual, sustaining presence no geography could fully capture."
  },
  {
   "h": "A command given in the middle of chaos",
   "b": "“Be still, and know that I am God” (v. 10) comes right after verses describing nations raging and kingdoms being moved (v. 6) — not a call to stillness because nothing's wrong, but stillness commanded in the middle of very real upheaval."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 8:31 · Isaiah 26:3 · Hebrews 12:26–28",
   "qs": [
    {
     "th": "Hebrews 12:26–28 describes a coming shaking of everything that can be shaken, so that what cannot be shaken — God's unshakeable kingdom — remains, echoing this psalm's picture of a fortress that stands while mountains “be carried into the midst of the sea” (v. 2).",
     "q": "What is currently being “shaken” in your own life, and how does the psalm's picture of God as refuge “even though the earth be removed” (v. 2) speak into that specifically?"
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
     "th": "“God is in the midst of her; she shall not be moved: God shall help her, and that right early” (v. 5) doesn't promise the absence of trouble — the whole psalm assumes real upheaval — but presence and timely help within it.",
     "q": "Where do you need to trust “right early” timing — God's help arriving when it's actually needed, not necessarily when you'd prefer?"
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
     "th": "“Be still, and know that I am God” is addressed, in context, to warring nations (v. 10) — a command to stop striving and recognize who is actually in control, aimed originally at people trying to fight their way to security.",
     "q": "Where are you currently striving to secure something through your own effort that this verse is inviting you to “be still” about instead?"
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
     "th": "The psalm's refrain, repeated twice (v. 7, 11), is simply: “The LORD of hosts is with us; the God of Jacob is our refuge.”",
     "q": "Write this refrain in your own words as a short prayer, and say it slowly, twice, the way the psalm itself does."
    }
   ]
  }
 ]
},

// Day 63
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Room finally made",
   "b": "After two disputed wells, Isaac finally dug one nobody fought over and named it Rehoboth — “for now the LORD hath made room for us” (Genesis 26:22)."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week traced a birthright traded away, a blessing taken by deception, a family pattern of fear repeating across three generations, and psalms about thirsting for God and finding Him a fortress in real upheaval.",
     "q": "Where this week did you notice an old pattern — in Isaac repeating Abraham's fear, or in your own life — repeating itself without much progress?"
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
     "th": "“Be still, and know that I am God” (Psalm 46:10) — spoken into real chaos, not the absence of it.",
     "q": "What would it mean to “be still” today about something you've been trying hard to control or fix on your own?"
    }
   ]
  }
 ]
},

// Day 64
{
 "ref": "Genesis 28",
 "tag": "Old Testament",
 "api": "genesis+28",
 "nug": [
  {
   "h": "A fugitive's dream at a random stopping place",
   "b": "Jacob, fleeing Esau's anger, stops for the night at an unremarkable spot, using a stone for a pillow (v. 11) — and it's precisely here, not at a shrine or temple, that God chooses to appear to him."
  },
  {
   "h": "A ladder reaching to heaven",
   "b": "Jacob sees “a ladder set up on the earth, and the top of it reached to heaven” with angels ascending and descending (v. 12) — a picture of open, active connection between heaven and earth at the exact place a running, frightened man happened to sleep."
  },
  {
   "h": "The covenant restated to the deceiver",
   "b": "Despite Jacob having just deceived his father and fled his brother's wrath, God restates to him, unconditionally, the same promise given to Abraham and Isaac (v. 13–15) — grace extended before any change of character has occurred."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "John 1:51 · Hebrews 11:21 · Genesis 32:24–30",
   "qs": [
    {
     "th": "Jesus directly references this scene, telling Nathanael he will see “heaven open, and the angels of God ascending and descending upon the Son of man” (John 1:51) — identifying Himself as the true ladder, the actual connecting point between heaven and earth.",
     "q": "Read John 1:51. What does it mean for you that Jesus applies Jacob's ladder vision to Himself?"
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
     "th": "Jacob wakes and says, “Surely the LORD is in this place; and I knew it not” (v. 16) — God's presence wasn't absent before this moment, only unrecognized.",
     "q": "Where might God already be present in your current circumstances in a way you, like Jacob, simply haven't recognized yet?"
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
     "th": "Jacob's vow — “if God will be with me… then shall the LORD be my God” (v. 20–21) — is a hesitant, conditional response to an unconditional promise; genuine faith here is clearly still a work in progress, not a finished thing.",
     "q": "Where is your own trust in God still more conditional or hesitant than the unconditional promise He's actually offering you?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: prayer",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "God meets a frightened, morally compromised man running from the consequences of his own choices, and speaks a promise to him anyway, at his lowest and most exposed moment.",
     "q": "Bring whatever “running” you're currently doing — from a consequence, a conversation, a fear — honestly to God, trusting He meets people exactly there."
    }
   ]
  }
 ]
},

// Day 65
{
 "ref": "Genesis 29",
 "tag": "Old Testament",
 "api": "genesis+29",
 "nug": [
  {
   "h": "The deceiver, deceived",
   "b": "Jacob, who tricked his own father using disguise and darkness, is himself tricked by Laban, who substitutes Leah for Rachel under cover of night and a veil (v. 23–25) — a striking, almost poetic reversal of his own earlier scheme."
  },
  {
   "h": "Seven years that “seemed but a few days”",
   "b": "Jacob works seven years for Rachel, and verse 20 says they “seemed unto him but a few days, for the love he had to her” — one of Scripture's clearest, most tender statements about how love reshapes the experience of time and cost."
  },
  {
   "h": "A woman who felt unloved, still seen by God",
   "b": "Leah, clearly the less favoured wife, names her sons with raw honesty about her pain — Reuben (“see, a son”), Simeon (“heard”), Levi (“attached”) — until Judah (“praise,” v. 35), a shift from pleading for Jacob's love to simply praising the LORD."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Malachi 1:2–3 · Genesis 49:8–12 · Matthew 1:2–3",
   "qs": [
    {
     "th": "Judah, born to the unloved wife rather than the favoured one, becomes the ancestor of both David's royal line and, ultimately, Jesus (Matthew 1:2–3) — the Messiah's line runs through Leah's grief, not Rachel's favour.",
     "q": "What does it mean to you that the Messianic line runs through the less-loved, overlooked wife rather than the favourite?"
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
     "th": "Jacob's earlier scheme against Esau is mirrored back onto him almost exactly — deception, disguise, darkness — as if the story itself is showing what he sowed eventually returning to him.",
     "q": "Is there a pattern of “what goes around comes around” you can honestly recognize in your own life, and what might God be inviting you to learn from it rather than just resent it?"
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
     "th": "Leah's naming of her sons moves from desperate pleas for attention (Reuben, Simeon, Levi) to simple praise (Judah) — a real, gradual shift in where she was looking for worth.",
     "q": "Where are you currently looking to a person's approval for worth that might be more securely found, like Leah eventually found it, in praising God instead?"
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
     "th": "Laban's deception of Jacob and Jacob's earlier deception of Isaac sit in the same family story without either man ever explicitly confessing or apologizing for their scheming in the text.",
     "q": "Is there a scheme or manipulation, yours or one you benefited from, that deserves an honest confession rather than continued silence?"
    }
   ]
  }
 ]
},

// Day 66
{
 "ref": "Psalm 51",
 "tag": "Psalms & Wisdom",
 "api": "psalms+51",
 "nug": [
  {
   "h": "Written after the worst moment of David's life",
   "b": "The heading directly ties this to Nathan's confrontation of David after his sin with Bathsheba and the killing of Uriah (2 Samuel 11–12) — this isn't a general confession, but one written after a specific, devastating, well-documented failure."
  },
  {
   "h": "A request for something new, not just a cleanup",
   "b": "“Create in me a clean heart, O God; and renew a right spirit within me” (v. 10) uses the same Hebrew word for “create” (bara) used in Genesis 1:1, reserved elsewhere in Scripture only for God's own work — David isn't asking for repair, but for something made fresh."
  },
  {
   "h": "What God actually wants from confession",
   "b": "“The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise” (v. 17) — after describing his sin in raw detail, David concludes that honesty itself, not ritual, is what God is actually looking for."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Samuel 12:13 · 1 John 1:9 · Acts 13:22",
   "qs": [
    {
     "th": "2 Samuel 12:13 records David's actual spoken confession — just five words, “I have sinned against the LORD” — and Nathan's immediate reply that the LORD had put away his sin. This psalm is the longer, unpacked version of that brief, immediate exchange.",
     "q": "Read 2 Samuel 12:13 alongside this psalm. What does the gap between the brief spoken confession and this long, detailed psalm tell you about processing guilt honestly over time?"
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
     "th": "David doesn't minimize what he did — “against thee, thee only, have I sinned, and done this evil in thy sight” (v. 4) — even though his sin clearly harmed other people directly. He names the deepest dimension of it first.",
     "q": "Is there something you've minimized or explained away that this psalm's honesty is inviting you to name more fully before God?"
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
     "th": "“Cast me not away from thy presence; and take not thy holy spirit from me” (v. 11) shows real fear that this failure might have permanently severed the relationship — a fear the rest of David's story shows was not realized.",
     "q": "Where do you fear a past failure may have permanently damaged your relationship with God, in a way this psalm's honest hope pushes back against?"
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
     "th": "This psalm is, in its entirety, one of the Bible's fullest models of confession — honest, specific, hopeful, and ending in worship rather than despair (v. 15–17).",
     "q": "Using this psalm as your guide, write or speak your own honest confession today — specific, not vague — and end, as David does, looking toward God rather than staying stuck in the guilt."
    }
   ]
  }
 ]
},

// Day 67
{
 "ref": "Genesis 30",
 "tag": "Old Testament",
 "api": "genesis+30",
 "nug": [
  {
   "h": "A household under real strain",
   "b": "Rachel's jealousy of Leah's fertility (v. 1) and the ongoing competition between the sisters — including using servants Bilhah and Zilpah to have children by proxy (v. 3–9) — shows a family shaped by rivalry Jacob never seems to fully resolve."
  },
  {
   "h": "Mandrakes traded for a night together",
   "b": "In one striking, almost transactional exchange, Leah trades mandrakes (thought to aid fertility) to Rachel in exchange for a night with Jacob (v. 14–16) — a small, human, slightly uncomfortable detail Scripture records without commentary."
  },
  {
   "h": "Selective breeding and a striking claim of skill",
   "b": "Jacob's method for increasing his own flocks using peeled rods placed before the animals at watering troughs (v. 37–39) reflects real ancient animal husbandry practices, though Jacob later credits the outcome directly to God's intervention, not his own technique (31:9–12)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 29:31 · Genesis 31:9–12 · Romans 8:28",
   "qs": [
    {
     "th": "Genesis 31:9–12, written just after this chapter, has Jacob explain in a dream that it was God, not his own clever breeding technique, who caused his flocks to multiply — reframing what looked purely like human strategy as God's provision underneath it.",
     "q": "How does knowing Jacob later credited God, not his own cleverness, change how you read his methods in this chapter?"
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
     "th": "This chapter is full of competition, comparison and scorekeeping between two sisters who both, in different ways, feel they're not getting enough — attention, children, love.",
     "q": "Where is comparison currently costing you peace, the way it visibly costs Rachel and Leah theirs in this chapter?"
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
     "th": "Despite the very human, sometimes uncomfortable ways these children come to be, each of the twelve sons born across chapters 29–30 becomes the ancestor of one of the twelve tribes of Israel — God building something enduring out of a genuinely messy family.",
     "q": "Where might God be building something lasting out of a situation in your own life that feels, right now, more messy than meaningful?"
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
     "th": "Despite the rivalry and strain running through this whole chapter, Jacob's household still grows and prospers, verse by verse — blessing arriving in the middle of imperfect relationships, not only after they're resolved.",
     "q": "Thank God for growth or blessing you've experienced even while a relationship around it remained imperfect or unresolved."
    }
   ]
  }
 ]
},

// Day 68
{
 "ref": "Matthew 10",
 "tag": "New Testament",
 "api": "matthew+10",
 "nug": [
  {
   "h": "Twelve names, carefully listed",
   "b": "Matthew records all twelve apostles by name (v. 2–4), including “Simon the Canaanite” (likely a Zealot, a nationalist revolutionary) alongside “Matthew the publican” (a tax collector working for Rome) — two men from opposite political extremes, called into the same twelve."
  },
  {
   "h": "Sent out with almost nothing",
   "b": "The disciples are told to take no money, no extra clothes, no staff (v. 9–10) — deliberately dependent on the hospitality of those they minister to, learning to trust provision rather than preparation."
  },
  {
   "h": "A hard, unflinching warning about cost",
   "b": "“Think not that I am come to send peace on earth: I came not to send peace, but a sword” (v. 34) and warnings about family division (v. 35–36) are startling, deliberately unsentimental preparation for the real cost some would face for following Him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 9:1–6 · Micah 7:5–7 · John 15:20",
   "qs": [
    {
     "th": "Micah 7:5–7, written centuries earlier about a time of deep social breakdown, describes family turning against family — language Jesus echoes almost directly in verse 35–36, showing His warning is rooted in an established prophetic pattern, not a new or extreme idea.",
     "q": "Read Micah 7:5–7. How does seeing Jesus' hard words rooted in an older prophetic tradition change how you hear them?"
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
     "th": "“He that findeth his life shall lose it: and he that loseth his life for my sake shall find it” (v. 39) is one of Jesus' most paradoxical statements, placed right in the middle of practical mission instructions, not saved for a more “spiritual” moment.",
     "q": "What would it look like, practically, for you to “lose” something this week for the sake of following Jesus more fully?"
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
     "th": "Jesus assures the disciples that even something as small and overlooked as a sparrow doesn't fall “without your Father” (v. 29), and that “the very hairs of your head are all numbered” (v. 30) — sweeping, intimate care stated right alongside warnings of real danger.",
     "q": "How do you hold both realities together — real cost and risk on one hand, and this kind of intimate, numbered-hairs care on the other?"
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
     "th": "The disciples are sent out two by two into towns not yet reached, dependent entirely on the households willing to receive them (v. 11–14).",
     "q": "Pray today for people currently doing hard, dependent, unglamorous work of sharing their faith somewhere unfamiliar to them."
    }
   ]
  }
 ]
},

// Day 69
{
 "ref": "Psalm 62",
 "tag": "Psalms & Wisdom",
 "api": "psalms+62",
 "nug": [
  {
   "h": "“Only” appears again and again",
   "b": "The Hebrew word for “only” or “truly” (ak) is used repeatedly through this psalm — “truly my soul waiteth upon God” (v. 1), “he only is my rock” (v. 2), “my soul, wait thou only upon God” (v. 5) — a deliberate, repeated narrowing down to a single source of security."
  },
  {
   "h": "A warning about wealth, stated plainly",
   "b": "“If riches increase, set not your heart upon them” (v. 10) comes right after warnings against oppression and robbery — wealth itself isn't condemned, but the heart's attachment to it is treated as a real, ordinary danger worth naming directly."
  },
  {
   "h": "An invitation to pour out your heart",
   "b": "“Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us” (v. 8) pictures prayer as something unfiltered and complete — not a tidy, edited version of your thoughts."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Peter 5:6–7 · Proverbs 30:8–9 · 1 Timothy 6:17",
   "qs": [
    {
     "th": "Peter's instruction to “cast all your care upon him; for he careth for you” (1 Peter 5:7) reads like a direct echo of this psalm's “pour out your heart before him” (v. 8) — both picture prayer as complete, uneditied release, not careful presentation.",
     "q": "What's the difference, practically, between presenting God a tidy version of your concerns and actually “pouring out” your heart before Him?"
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
     "th": "Verse 10's warning not to set your heart on increasing riches is aimed at something subtle — not wealth itself, but where the heart's actual security gets placed once it's there.",
     "q": "Where, honestly, is your own heart's security currently placed — in God alone, or partly propped up by something material or circumstantial?"
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
     "th": "The repeated word “only” throughout this psalm suggests a deliberate mental discipline — actively narrowing focus back to God again and again, not a feeling that simply arrived and stayed on its own.",
     "q": "What's one practical way you could “narrow back” to God today when your attention drifts toward other sources of security?"
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
     "th": "“God hath spoken once; twice have I heard this; that power belongeth unto God” (v. 11) suggests something so important it bears repeating and really hearing, not just noting once and moving on.",
     "q": "Sit quietly and repeat slowly to yourself: “power belongeth unto God.” What does it settle in you to really hear that twice, as the psalm suggests?"
    }
   ]
  }
 ]
},

// Day 70
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Surely the LORD is in this place",
   "b": "Jacob's words on waking from his ladder dream — “Surely the LORD is in this place; and I knew it not” (Genesis 28:16) — are as good a summary as any of what these first ten weeks have been inviting you to notice."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "Ten weeks in: a ladder connecting heaven and earth met a running man, a deceiver was deceived in turn, David's rawest confession became one of the Bible's most-loved psalms, and Jesus sent His followers out with almost nothing but real, intimate care.",
     "q": "Looking back over these ten weeks as a whole, what's one thread — a theme, a name of God, a repeated kind of struggle — that keeps showing up across very different passages?"
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
     "th": "“My soul, wait thou only upon God; for my expectation is from him” (Psalm 62:5) — ten weeks in, still the same single, steady point of rest.",
     "q": "As you look ahead to the weeks still to come, what would it mean to keep your expectation “only” on God rather than on how quickly or visibly this study itself produces results?"
    }
   ]
  }
 ]
}
];
