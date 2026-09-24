/* Deep Roots — Year 1: days 1–365
   One object per day, in order (array position = day number within the whole plan).
   Fields:
     ref    passage title shown on the day (e.g. "Genesis 2")
     tag    track label: "Old Testament" | "New Testament" | "Psalms & Wisdom" | "Rest day"
     v      array of verse strings (bundled text)   — OR —
     api    bible-api.com passage id (e.g. "genesis+2"), fetched and cached
     rest   1 for a rest/review day (no passage)
     sum    "Retell it" summary: 2–4 short sentences on the main points of the day's reading,
            rendered as its own card right after the Passage and before Nuggets. Omitted on rest days.
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
 "sum": [
  "God speaks the world into existence over six days: light, sky, land and plants, sun/moon/stars, sea and sky creatures, then land animals and humans.",
  "Each day's work is called “good”; once humans are made, everything is “very good.”",
  "Humanity, male and female, is made in God's own image and given charge over the earth."
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
 "sum": [
  "A closer look at day six: God forms the man from dust and breathes life into him.",
  "God plants a garden in Eden, puts the man there to work it, and gives one command: don't eat from the tree of the knowledge of good and evil.",
  "Seeing it's “not good for man to be alone,” God has him name the animals, then forms the woman from his side.",
  "The chapter ends with the first marriage and the two becoming “one flesh.”"
 ],
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
 "sum": [
  "Contrasts two ways of life: the blessed person who avoids bad influence and delights in God's law, and the wicked who don't.",
  "The blessed person is pictured as a tree planted by water, fruitful and unwithering.",
  "The wicked are like chaff blown away, with no lasting stand in the judgment."
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
 "sum": [
  "The serpent tempts Eve by twisting God's word; she and Adam eat the forbidden fruit.",
  "Their eyes are opened, they feel shame, and they hide from God.",
  "God confronts them and pronounces real consequences, but also promises a future “seed” who will crush the serpent (3:15).",
  "God clothes them with animal skins and sends them out of the garden."
 ],
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
 "sum": [
  "Traces Jesus' genealogy from Abraham through David to Joseph, including five women, several outsiders or linked to scandal.",
  "Mary is found to be pregnant by the Holy Spirit before she and Joseph marry.",
  "An angel reassures Joseph in a dream and tells him to name the child Jesus, “for he shall save his people from their sins.”"
 ],
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
 "sum": [
  "David marvels that the Creator of the vast heavens is mindful of humanity at all.",
  "Humans are described as made a little lower than the angels, crowned with glory and given dominion over creation.",
  "The psalm opens and closes praising God's excellent name in all the earth."
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
 "sum": [
  "Cain and Abel each bring an offering; God accepts Abel's but not Cain's.",
  "Cain, angry and warned that sin is “crouching at the door,” kills Abel.",
  "God curses Cain to wander but marks him for protection.",
  "Cain's line builds cities; Seth is born to Adam and Eve, and people begin “to call upon the name of the LORD.”"
 ],
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
 "sum": [
  "A genealogy from Adam to Noah, each entry ending “and he died.”",
  "Enoch is the exception: he “walked with God” and was taken without dying.",
  "Noah is born, and his father Lamech hopes he will bring relief from the ground's curse."
 ],
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
 "sum": [
  "Nations and rulers conspire against the LORD and his anointed king, but God laughs at their rebellion.",
  "God declares the king his begotten Son and promises him the nations as an inheritance.",
  "The psalm closes with a warning to submit to the Son and a blessing on those who trust him."
 ],
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
 "sum": [
  "Human wickedness fills the earth; God grieves and decides to send a flood.",
  "Noah alone “found grace” and is instructed to build a huge ark.",
  "God gives detailed measurements and tells Noah to bring pairs of every animal, plus extra clean animals, to survive the coming judgment."
 ],
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
 "sum": [
  "Wise men from the East follow a star to worship the infant Jesus, bringing gold, frankincense and myrrh.",
  "Herod, threatened, secretly plots to kill the child and, once outwitted, massacres the infant boys of Bethlehem.",
  "Warned in dreams, Joseph takes Mary and Jesus to Egypt, then later settles the family in Nazareth after Herod's death."
 ],
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
 "sum": [
  "Written while David fled his own son Absalom's rebellion, surrounded by enemies.",
  "Despite the danger, David says the LORD is his shield and he can lie down and sleep in peace.",
  "He ends confident that “salvation belongeth unto the LORD.”"
 ],
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
 "sum": [
  "God tells Noah the flood will come in seven days and to enter the ark with his family and the animals.",
  "The flood waters rise for forty days, covering even the highest mountains.",
  "Every living thing outside the ark perishes; only Noah's family and the animals with him survive."
 ],
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
 "sum": [
  "The flood waters recede over months; Noah sends out a raven, then a dove three times, until the dove doesn't return.",
  "Noah, his family and the animals leave the ark; Noah builds an altar and sacrifices to God.",
  "God promises never again to destroy the earth by flood and reaffirms the “be fruitful and multiply” blessing."
 ],
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
 "sum": [
  "An evening prayer trusting God to hear and answer.",
  "David tells his critics to be still and trust God rather than chase empty things.",
  "He ends able to lie down and sleep in peace because God alone keeps him safe."
 ],
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
 "sum": [
  "God establishes a covenant with Noah, promising never again to flood the whole earth, with the rainbow as the sign.",
  "Humans are now permitted to eat meat, but not blood, and murder is to be punished because people are made in God's image.",
  "Noah gets drunk; his son Ham dishonours him, leading Noah to bless Shem and Japheth and pronounce a curse involving Canaan."
 ],
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
 "sum": [
  "John the Baptist preaches repentance in the wilderness, calling people — including religious leaders — to genuine change, not just heritage.",
  "Jesus comes to be baptized by John, who initially objects.",
  "As Jesus comes up from the water, the Spirit descends like a dove and the Father's voice declares him his beloved Son."
 ],
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
 "sum": [
  "A morning prayer asking God to hear him and to make his way straight.",
  "David contrasts God's hatred of evil and deceit with his own trust and desire to worship rightly.",
  "He asks blessing and protection for all who take refuge in God."
 ],
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
 "sum": [
  "The “Table of Nations” lists the descendants of Noah's three sons — Japheth, Ham and Shem — spreading into seventy nations.",
  "Nimrod, a mighty ruler descended from Ham, builds an early empire that includes Babel.",
  "The chapter shows humanity's origin as one family, later dividing into many nations."
 ],
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
 "sum": [
  "United by one language, people build a city and a tower at Babel to make a name for themselves rather than fill the earth as commanded.",
  "God confuses their language so they can't understand each other, and scatters them across the earth.",
  "The chapter ends with a genealogy tracing from Shem down to Abram's father Terah."
 ],
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
 "sum": [
  "Asks who may dwell in God's presence, then answers with a list of character traits rather than rituals.",
  "The qualifying person walks with integrity, speaks truth, doesn't slander, and keeps costly promises.",
  "Such a person, the psalm says, “shall never be moved.”"
 ],
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
 "sum": [
  "God calls Abram to leave his homeland for a land he will show him, promising to make him a great nation and bless all families of the earth through him.",
  "Abram obeys, travels to Canaan, and builds altars to worship God along the way.",
  "A famine sends him to Egypt, where fear leads him to pass Sarai off as his sister, nearly costing him everything until God intervenes."
 ],
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
 "sum": [
  "Jesus is led by the Spirit into the wilderness, fasting forty days, and is tempted three times by the devil.",
  "Each time Jesus answers with Scripture rather than giving in.",
  "He then begins his public ministry in Galilee and calls his first disciples — Peter, Andrew, James and John — who leave their nets to follow him."
 ],
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
 "sum": [
  "David expresses confidence and contentment in God as his refuge and inheritance.",
  "He rejects other gods and describes his “lines” as fallen in pleasant places.",
  "The psalm ends with hope that God won't abandon him to death, a passage the New Testament applies to Jesus' resurrection."
 ],
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
 "sum": [
  "Abram and his nephew Lot, both wealthy in livestock, find the land can't support them together and decide to separate.",
  "Abram lets Lot choose first; Lot picks the fertile Jordan plain near Sodom, a city already noted as wicked.",
  "God reaffirms his promise to Abram, telling him to look in every direction because all the land will belong to his descendants."
 ],
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
 "sum": [
  "Four kings defeat five others, including Sodom, and capture Lot along with the city's goods.",
  "Abram leads a rescue mission with his own men and recovers Lot, the people and the plunder.",
  "On his return, Abram is blessed by Melchizedek, king of Salem and priest of God Most High, and gives him a tenth of everything."
 ],
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
 "sum": [
  "The heavens declare God's glory wordlessly to the whole earth.",
  "God's law is then praised as perfect, sure, right and more desirable than gold or honey.",
  "David ends asking that his words and thoughts be pleasing to God."
 ],
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
 "sum": [
  "God reassures childless Abram that his own descendant will be his heir, and that his offspring will be as numerous as the stars.",
  "Abram believes God, and it's counted to him as righteousness.",
  "In a covenant ceremony, God alone passes between the sacrificed animals, making an unconditional promise, including a prophecy of 400 years of slavery before the exodus."
 ],
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
 "sum": [
  "Jesus opens the Sermon on the Mount with the Beatitudes, blessing the poor in spirit, the mourning, the meek and others.",
  "He calls his followers salt and light, then says he came to fulfil, not abolish, the law.",
  "He repeatedly deepens the law's demands (“you have heard… but I say”), addressing anger, lust, oaths, retaliation and love for enemies."
 ],
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
 "sum": [
  "David pictures the LORD as a shepherd who provides rest, guidance and provision.",
  "Even walking through the valley of the shadow of death, he fears no evil because God is with him.",
  "The psalm ends with a table prepared in the presence of enemies and confidence that goodness and mercy will follow him all his days."
 ],
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
 "sum": [
  "Sarai, still childless, gives her servant Hagar to Abram to bear a child by ancient custom.",
  "Hagar conceives and begins to despise Sarai, who then treats her harshly, causing Hagar to flee.",
  "The angel of the LORD finds Hagar in the wilderness, promises to multiply her son's descendants, and she names God “the God who sees me” before returning to bear Ishmael."
 ],
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
 "sum": [
  "God establishes his covenant with Abram, renaming him Abraham (“father of many”) and Sarai Sarah, and institutes circumcision as its sign.",
  "God promises Sarah will bear a son, Isaac, within a year, despite their old age — Abraham laughs at the news.",
  "God also blesses Ishmael with a nation of his own, but confirms the covenant will continue through Isaac."
 ],
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
 "sum": [
  "Declares the whole earth belongs to the LORD, its maker.",
  "Asks who may ascend God's hill, answering: those with clean hands and a pure heart.",
  "Ends with a call for the gates to lift up so the King of glory, the LORD of hosts, may come in."
 ],
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
 "sum": [
  "Three visitors, one of them the LORD, come to Abraham; he shows them lavish hospitality.",
  "They promise Sarah will have a son within a year, and she laughs in disbelief.",
  "The LORD reveals plans to judge Sodom and Gomorrah; Abraham intercedes, bargaining God down to sparing the city for the sake of just ten righteous people."
 ],
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
 "sum": [
  "Jesus teaches that giving, prayer and fasting should be done for God, not for public show, and gives the Lord's Prayer as a model.",
  "He tells his followers to store up treasure in heaven, not on earth, “for where your treasure is, there will your heart be also.”",
  "He closes by telling them not to be anxious about food or clothing, but to seek God's kingdom first."
 ],
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
 "sum": [
  "An alphabetic prayer for guidance, protection and forgiveness.",
  "David asks God not to remember the sins of his youth but to teach him God's paths according to mercy.",
  "He ends asking for deliverance from his troubles and enemies."
 ],
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
 "sum": [
  "Two angels visit Lot in Sodom; the men of the city try to assault them, showing the depth of the city's wickedness.",
  "The angels rescue Lot, his wife and daughters, urging them to flee without looking back before the LORD destroys Sodom and Gomorrah.",
  "Lot's wife looks back and becomes a pillar of salt; Lot's daughters later act shamefully to preserve their family line."
 ],
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
 "sum": [
  "Abraham again tells a foreign king, Abimelech, that Sarah is his sister, and Abimelech takes her, not knowing she's married.",
  "God warns Abimelech in a dream before anything happens, and he confronts Abraham, who explains his fear.",
  "Abimelech restores Sarah and gives Abraham gifts; Abraham prays for Abimelech's household to be healed."
 ],
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
 "sum": [
  "David expresses bold confidence that the LORD is his light and salvation, so he need not fear enemies or war.",
  "His one desire is to dwell in God's house and gaze on his beauty.",
  "The psalm shifts to urgent pleading for help, ending with a call to wait on the LORD and be courageous."
 ],
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
 "sum": [
  "Sarah finally gives birth to Isaac, as God had promised, and there is great rejoicing.",
  "Tension with Hagar and Ishmael leads Sarah to insist they be sent away; God reassures Abraham and cares for Hagar and Ishmael in the wilderness.",
  "Abraham makes a peace covenant with Abimelech at Beersheba over a dispute about a well."
 ],
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
 "sum": [
  "Jesus warns against harsh, hypocritical judgment of others while ignoring your own faults.",
  "He teaches persistence in prayer (ask, seek, knock) and the golden rule.",
  "He closes with warnings: the narrow gate versus the broad road, false prophets known by their fruit, and the wise builder on rock versus the foolish builder on sand."
 ],
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
 "sum": [
  "Opens declaring the blessing of forgiven sin, describing the physical toll of hiding guilt.",
  "David describes confessing his sin and immediately being forgiven.",
  "He counsels against being stubborn like a horse or mule, and ends with rejoicing for the upright in heart."
 ],
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
 "sum": [
  "God tests Abraham by asking him to sacrifice his son Isaac on Mount Moriah.",
  "Abraham obeys, trusting God can even raise Isaac from the dead, but at the last moment an angel stops him and a ram is provided instead.",
  "God reaffirms his covenant promise because of Abraham's obedience, and Abraham names the place “the LORD will provide.”"
 ],
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
 "sum": [
  "Sarah dies at 127, and Abraham mourns her.",
  "He negotiates carefully with Ephron the Hittite to buy the cave of Machpelah as a burial site, insisting on paying full price.",
  "This becomes the only land Abraham ever formally owns in Canaan, and Sarah is buried there."
 ],
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
 "sum": [
  "Written after David feigned madness to escape a dangerous king, this psalm calls all to bless the LORD at all times.",
  "David invites readers to “taste and see that the LORD is good,” describing God's rescue of the afflicted and brokenhearted.",
  "The psalm promises the LORD's attentive care and eventual justice for the righteous."
 ],
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
 "sum": [
  "Abraham sends his servant to find a wife for Isaac from his own relatives rather than the local Canaanites.",
  "The servant prays for a specific sign, and Rebekah fulfils it exactly by offering to water his camels.",
  "Rebekah agrees to go, meets Isaac, and becomes his wife, comforting him after his mother's death."
 ],
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
 "sum": [
  "Jesus heals a leper by touching him, then heals a Roman centurion's servant from a distance, praising the centurion's faith as greater than any he'd found in Israel.",
  "He heals Peter's mother-in-law and many others, and calms a violent storm with a word.",
  "He also casts demons out of two men into a herd of pigs, and the townspeople ask him to leave."
 ],
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
 "sum": [
  "A long wisdom psalm instructing readers not to fret over the wicked's temporary prosperity.",
  "Repeated counsel: trust, delight in, and commit your way to the LORD, and he will act.",
  "Promises the meek will inherit the earth and that God never forsakes the righteous."
 ],
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
 "sum": [
  "Abraham dies and is buried by both Isaac and Ishmael together; genealogies of Ishmael's and Isaac's lines follow.",
  "Rebekah, pregnant with twins who struggle in the womb, is told the older will serve the younger.",
  "Esau, the firstborn, carelessly sells his birthright to Jacob for a bowl of stew."
 ],
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
 "sum": [
  "Isaac repeats his father's mistake, telling a foreign king Rebekah is his sister out of fear.",
  "He grows wealthy in the land, and the Philistines fill in his father's old wells; Isaac re-digs them and eventually finds peace at a well he names Rehoboth.",
  "God appears to Isaac, renewing the covenant promise given to Abraham."
 ],
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
 "sum": [
  "The psalmist longs for God the way a deer pants for water, remembering times of joyful worship now far away.",
  "He repeatedly questions and then encourages his own soul: “Why art thou cast down?… hope thou in God.”",
  "The psalm ends with continued honest struggle held together with renewed hope."
 ],
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
 "sum": [
  "With his mother Rebekah's help, Jacob deceives his blind father Isaac into giving him the blessing meant for the firstborn, Esau.",
  "Esau is devastated and vows to kill Jacob once their father dies.",
  "Rebekah sends Jacob away to her brother Laban's household to escape Esau's anger and to find a wife."
 ],
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
 "sum": [
  "Jesus forgives and heals a paralyzed man, provoking accusations of blasphemy from religious leaders.",
  "He calls Matthew the tax collector to follow him and eats with “sinners,” explaining he came for the spiritually sick, not the healthy.",
  "He heals a woman with a chronic bleeding disorder, raises a synagogue leader's daughter from death, and heals two blind men."
 ],
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
 "sum": [
  "Declares God as a refuge and strength, “a very present help in trouble,” even if the earth itself gives way.",
  "Pictures a river bringing gladness to God's city while nations rage outside.",
  "Famously commands, “Be still, and know that I am God,” amid real upheaval."
 ],
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
 "sum": [
  "Fleeing Esau, Jacob stops for the night at Bethel and dreams of a ladder reaching to heaven with angels ascending and descending.",
  "God appears and renews the covenant promise made to Abraham and Isaac, promising to be with Jacob wherever he goes.",
  "Jacob wakes in awe, sets up a memorial stone, and vows that if God brings him back safely, the LORD will be his God."
 ],
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
 "sum": [
  "Jacob arrives in Paddan-aram and meets Rachel at a well; he works seven years for her hand in marriage.",
  "On the wedding night, Laban deceives Jacob by substituting Rachel's older sister Leah; Jacob works another seven years for Rachel too.",
  "Leah, unloved by Jacob, bears four sons, naming them with raw honesty about her longing for love."
 ],
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
 "sum": [
  "David's prayer of repentance after his sin with Bathsheba, pleading for mercy and cleansing.",
  "He asks for a clean heart and a right spirit, acknowledging his sin is ultimately against God.",
  "He ends recognizing that a broken and contrite heart, not empty ritual, is what God truly wants."
 ],
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
 "sum": [
  "Rachel and Leah compete for children and Jacob's affection, using their servants Bilhah and Zilpah to bear more sons.",
  "Eventually Rachel herself bears Joseph.",
  "Jacob makes a deal with Laban over speckled and spotted livestock, and through careful breeding his own flocks grow greatly, which he later credits to God's provision."
 ],
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
 "sum": [
  "Jesus commissions his twelve apostles, naming them and sending them out to preach and heal, instructing them to travel light and depend on hospitality.",
  "He warns them of coming persecution, urging fearless witness because even the smallest details of their lives are known to God.",
  "He says his mission will bring division as well as peace, and that following him may cost even family relationships."
 ],
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
 "sum": [
  "David repeatedly affirms that his soul waits only on God, his rock and salvation.",
  "He warns against trusting in oppression, robbery or increasing riches.",
  "He invites all people to trust God at all times and pour out their hearts to him, since “power belongeth unto God.”"
 ],
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
},
// Day 71
{
 "ref": "Genesis 31",
 "tag": "Old Testament",
 "api": "genesis+31",
 "sum": [
  "After twenty years, God tells Jacob to return home; he leaves secretly with his family and flocks without telling Laban.",
  "Rachel steals her father's household idols; Laban pursues and confronts Jacob, but God warns him not to harm him.",
  "Jacob and Laban make a covenant of peace, marked by a pile of stones, and go their separate ways."
 ],
 "nug": [
  {
   "h": "A departure with no goodbye",
   "b": "Jacob leaves Laban “unawares”, without telling him (v. 20) — twenty years of increasingly strained work under a father-in-law who, Jacob later says, “changed my wages ten times” (v. 41), finally ending in a quiet, fearful escape rather than an honest conversation."
  },
  {
   "h": "Household gods stolen and sat on",
   "b": "Rachel steals Laban's teraphim — small household idols, possibly tied to inheritance rights in the culture — then hides them under a camel's saddle and sits on them, telling her father she can't rise because “the custom of women is upon me” (v. 34–35), a bold, deceptive move even in a family already trying to leave idolatry behind."
  },
  {
   "h": "A pile of stones as a treaty",
   "b": "Jacob and Laban make a covenant of peace marked by a heap of stones, called Galeed and Mizpah — “The LORD watch between me and thee, when we are absent one from another” (v. 49) was originally a statement of mutual suspicion between two men who no longer trusted each other, not the sentimental blessing it's often used as today."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 28:15 · Hosea 12:12 · Colossians 3:5",
   "qs": [
    {
     "th": "God had promised Jacob at Bethel, “I am with thee, and will keep thee in all places” (Genesis 28:15). Twenty hard years later, God repeats almost the same words to prompt Jacob's departure (v. 3) — a promise made once, kept in view the whole time.",
     "q": "What promise from God are you still living inside of, years after you first received it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob's own account of his years with Laban (v. 38–42) is a catalogue of quiet unfairness endured without much complaint until now — exposure, exhausting labour, wages changed repeatedly.",
     "q": "Is there a long season of quiet unfairness you've endured that deserves to be named honestly, even if you're not ready to act on it yet?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Rachel's theft of the teraphim (v. 19) suggests she hadn't fully left her father's household gods behind even while physically leaving her father's household — old attachments travelling along with the new journey.",
     "q": "Is there an old “teraphim” — a source of security or identity from before you trusted God — that might still be travelling with you, unnoticed?"
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
     "th": "Neither Jacob's fearful secrecy nor Rachel's theft and lie to her father are corrected or confessed within this chapter — the covenant of peace at the end papers over real relational damage rather than resolving it.",
     "q": "Is there a relationship where a formal truce, rather than honest confession, has stood in for real reconciliation? Name it honestly to God."
    }
   ]
  }
 ]
},
// Day 72
{
 "ref": "Genesis 32",
 "tag": "Old Testament",
 "api": "genesis+32",
 "sum": [
  "Fearing his reunion with Esau, Jacob sends gifts ahead, prays desperately, and prepares defensively.",
  "That night, a mysterious man wrestles with Jacob until daybreak; Jacob won't let go without a blessing.",
  "Jacob is renamed Israel (“struggles with God”) and walks away blessed but limping."
 ],
 "nug": [
  {
   "h": "Fear before the reunion",
   "b": "Hearing Esau is coming with 400 men, Jacob is “greatly afraid and distressed” (v. 7) — twenty years hasn't erased the memory of what he did to earn that anger, and he prepares gifts, divides his camp, and prays, all three at once, out of real fear."
  },
  {
   "h": "Jacob's prayer names God's own words back to Him",
   "b": "Verse 9–12 is one of the most carefully constructed prayers in Genesis — Jacob quotes God's own promises (“the LORD which saidst unto me”) as the basis for his request, a pattern of praying Scripture back to God that shows up throughout the rest of the Bible."
  },
  {
   "h": "Wrestling until daybreak, and a name that means ‘struggles with God’",
   "b": "A mysterious “man” wrestles with Jacob all night at Peniel; Jacob won't let go without a blessing, and receives a new name, Israel — “for as a prince hast thou power with God and with men, and hast prevailed” (v. 28) — walking away blessed, but limping (v. 31)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hosea 12:3–4 · Genesis 35:10 · Ephesians 6:12",
   "qs": [
    {
     "th": "Hosea 12:3–4, written centuries later, looks back on this exact night and says Jacob “had power over the angel, and prevailed: he wept, and made supplication unto him” — turning what could read as a strange contest into a picture of desperate, weeping prayer.",
     "q": "Read Hosea 12:3–4. How does knowing Jacob wept during this wrestling match change the way you picture the scene?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob's fear over Esau drives him to prepare practically (gifts, strategy) and spiritually (prayer) at the same time — he doesn't choose one over the other.",
     "q": "Where in your life could you, like Jacob, do the practical preparation and the honest praying together, rather than treating them as opposites?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob comes out of this encounter with a limp that would last the rest of his life (v. 31) — blessing and a permanent reminder of weakness given in the very same night.",
     "q": "Is there a “limp” in your own life — a weakness or a scar — that might actually be evidence of having wrestled honestly with God rather than a sign of failure?"
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
     "th": "Jacob's whole prayer in verses 9–12 is fundamentally about the safety of his family — wives, children, everything he has — not about himself alone.",
     "q": "Pray specifically today for the safety and wellbeing of the people closest to you, the way Jacob prayed for his household before the reunion he feared."
    }
   ]
  }
 ]
},
// Day 73
{
 "ref": "Psalm 63",
 "tag": "Psalms & Wisdom",
 "api": "psalms+63",
 "sum": [
  "Written by David in the wilderness, expressing deep thirst for God like a dry, thirsty land longs for water.",
  "He remembers God even during sleepless nights, praising him as better than life itself.",
  "He ends confident that his enemies will be defeated while he rejoices in God."
 ],
 "nug": [
  {
   "h": "Written in the wilderness, not the sanctuary",
   "b": "The heading ties this to David “in the wilderness of Judah”, likely while fleeing Saul or Absalom — far from the temple worship he loved (v. 2), yet this is one of the most intensely worshipful psalms in the whole collection."
  },
  {
   "h": "Thirst as the picture, not just a word",
   "b": "“My soul thirsteth for thee… in a dry and thirsty land, where no water is” (v. 1) uses the literal physical experience of the wilderness itself as the metaphor — the setting he's actually in becomes the language he prays with."
  },
  {
   "h": "Praying on the bed at night",
   "b": "“When I remember thee upon my bed, and meditate on thee in the night watches” (v. 6) describes a habit of turning sleepless or restless hours toward God rather than toward anxious thought."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "John 7:37–38 · Matthew 5:6 · Psalm 42:1–2",
   "qs": [
    {
     "th": "Jesus stands and cries out, “If any man thirst, let him come unto me, and drink” (John 7:37) — answering, centuries later, the exact thirst this psalm and Psalm 42 both describe as unmet longing.",
     "q": "Read John 7:37–38. How does Jesus' invitation change the way you read David's thirst in a dry land?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David is in an actual wilderness, in actual danger, and still writes “because thy lovingkindness is better than life, my lips shall praise thee” (v. 3) — not after the danger passed, but in the middle of it.",
     "q": "What would it look like to genuinely praise God's character as “better than” your current circumstances, rather than waiting for the circumstances to improve first?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“My soul followeth hard after thee: thy right hand upholdeth me” (v. 8) pictures pursuit and support happening at the same time — David's own effort to follow, held up by God's strength underneath it.",
     "q": "Where do you need to remember that pursuing God and being upheld by Him aren't in competition — both are true at once?"
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
     "th": "The night watches (v. 6) were a normal part of ancient life — broken sleep, quiet dark hours — that David turned into meditation time rather than wasted or anxious time.",
     "q": "Next time you're awake in the night this week, try turning toward remembering God rather than toward your phone or your worries, even briefly."
    }
   ]
  }
 ]
},
// Day 74
{
 "ref": "Genesis 33",
 "tag": "Old Testament",
 "api": "genesis+33",
 "sum": [
  "Jacob meets Esau, fearing the worst, but Esau runs to embrace and forgive him; the brothers reconcile with tears.",
  "Jacob offers gifts, which Esau initially declines then accepts.",
  "Jacob settles near Shechem, buys land, and builds an altar to God."
 ],
 "nug": [
  {
   "h": "A run and an embrace, not a fight",
   "b": "After all of Jacob's fear and preparation, Esau “ran to meet him, and embraced him, and fell on his neck, and kissed him: and they wept” (v. 4) — the confrontation Jacob dreaded turns out to be a reunion he never dared hope for."
  },
  {
   "h": "Jacob's odd comparison",
   "b": "“I have seen thy face, as though I had seen the face of God” (v. 10), Jacob tells Esau while pressing him to accept his gifts — linking the unearned grace of his brother's forgiveness to the unearned grace he'd just received wrestling with God the night before."
  },
  {
   "h": "An altar named for a personal encounter",
   "b": "Jacob settles near Shechem, buys land, and builds an altar he names El-Elohe-Israel — “God, the God of Israel” (v. 20) — using his own new covenant name in the altar's name itself, a very personal marker of worship."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 12:18 · Luke 15:20 · Matthew 5:23–24",
   "qs": [
    {
     "th": "Esau's running embrace echoes forward to the father who “ran, and fell on his neck, and kissed him” for the returning prodigal son (Luke 15:20) — both scenes picture reconciliation arriving faster and more freely than the guilty party expected.",
     "q": "Read Luke 15:20. What do these two running embraces, centuries apart, tell you about how God pictures reconciliation?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob spent the whole previous chapter preparing defensively for the worst-case reunion, and instead received a far better one than he planned for.",
     "q": "Where have you braced for the worst in a relationship or situation, only to find God had something kinder waiting than you expected?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob doesn't take Esau up on travelling together (v. 12–17) — real reconciliation here doesn't erase the practical reality that these two brothers' lives had grown in different directions.",
     "q": "Where might genuine peace with someone not require going back to exactly how things used to be?"
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
     "th": "Jacob names his altar after his own personal experience of God — not a generic name, but one tied to what he'd actually walked through to get there.",
     "q": "Thank God specifically for one reconciliation, however small, that turned out better than you feared it would."
    }
   ]
  }
 ]
},
// Day 75
{
 "ref": "Matthew 11",
 "tag": "New Testament",
 "api": "matthew+11",
 "sum": [
  "Imprisoned John the Baptist sends disciples to ask Jesus if he is truly the Messiah; Jesus points to his miracles as the answer, quoting Isaiah.",
  "Jesus praises John highly, then pronounces woes on towns that saw his miracles yet didn't repent.",
  "He extends a tender invitation to the weary and burdened to find rest by taking his easy yoke."
 ],
 "nug": [
  {
   "h": "A doubting question from the greatest of the prophets",
   "b": "John the Baptist, now imprisoned, sends disciples to ask Jesus, “Art thou he that should come, or do we look for another?” (v. 3) — even the man who baptized Jesus and heard the Father's voice over Him has a moment of real doubt in prison."
  },
  {
   "h": "An answer built entirely from Isaiah",
   "b": "Jesus answers by listing what's happening — blind see, lame walk, lepers cleansed, deaf hear, dead raised, gospel preached to the poor (v. 5) — a direct echo of Isaiah 35:5–6 and 61:1, letting the fulfilled prophecy answer the question rather than a simple yes."
  },
  {
   "h": "Rest offered to the exhausted, not the strong",
   "b": "“Come unto me, all ye that labour and are heavy laden, and I will give you rest… my yoke is easy, and my burden is light” (v. 28–30) uses a farming image — a yoke shared with an experienced ox, not carried alone — aimed specifically at people worn out, not people already thriving."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 35:5–6 · Isaiah 61:1–2 · Malachi 3:1",
   "qs": [
    {
     "th": "Jesus calls John “more than a prophet” and “Elias, which was for to come” (v. 9–14), directly identifying him with Malachi's promised messenger — even while John himself is doubting in a prison cell at that very moment.",
     "q": "What does it mean to you that Jesus' highest praise of John comes at the same point John is struggling most with doubt?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Doubt from prison didn't disqualify John from Jesus' praise — Jesus answers his honest question directly, then affirms him publicly right afterward.",
     "q": "Is there a doubt you've been afraid to voice, assuming it would disqualify you somehow? What does John's story say about that fear?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Learn of me; for I am meek and lowly in heart” (v. 29) ties rest not to doing less, but to learning a different posture — gentleness and humility — from Jesus Himself.",
     "q": "Where is your current “yoke” heavier than it needs to be because you're carrying it in a posture other than meekness?"
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
     "th": "Jesus pronounces sobering woes on cities that saw His miracles and still didn't repent (v. 20–24) — exposure to truth without response is treated with real seriousness.",
     "q": "Is there something you've clearly seen or known to be true about God that you haven't yet let change you? Name it honestly."
    }
   ]
  }
 ]
},
// Day 76
{
 "ref": "Psalm 67",
 "tag": "Psalms & Wisdom",
 "api": "psalms+67",
 "sum": [
  "A short psalm asking God to bless his people so his way and salvation would be known among all nations.",
  "Calls for all peoples and nations to praise God together.",
  "Ends confident that God's blessing will lead the whole earth to fear him."
 ],
 "nug": [
  {
   "h": "A short psalm with a big reach",
   "b": "Only seven verses long, but the word “nations” or “people” (plural) appears repeatedly — this psalm's concern is never just Israel's own blessing, but that blessing reaching “all the ends of the earth” (v. 7)."
  },
  {
   "h": "A prayer that borrows from the priestly blessing",
   "b": "“God be merciful unto us, and bless us; and cause his face to shine upon us” (v. 1) closely echoes the Aaronic blessing of Numbers 6:24–26 — a personal, tender request used here as the opening line of a psalm about global mission."
  },
  {
   "h": "Blessing given so it can be seen, not kept",
   "b": "Verse 1–2 make the purpose explicit: bless us “that thy way may be known upon earth, thy saving health among all nations” — the blessing is the means, not the end goal."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 6:24–26 · Genesis 12:3 · Romans 15:11",
   "qs": [
    {
     "th": "This psalm's vision — God's blessing on one people meant to reach every people — is the same promise given to Abraham back in Genesis 12:3, sung here as worship rather than spoken as prophecy.",
     "q": "How does turning a promise into a song, the way this psalm does, change how you might pray about God's purposes for the wider world?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "It would be easy to receive God's blessing personally and stop there — this psalm won't let that happen, tying “bless us” directly to “that thy way may be known” in the very next breath.",
     "q": "Where has a blessing in your own life been meant to reach further than just you, that you could be more intentional about sharing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm pictures “all the people” and “all the nations” praising God together (v. 3–5) — a united, global picture of worship, sung from what was likely a small, specific gathering.",
     "q": "What would it look like to pray with this psalm's global scope in mind today, rather than only for your own immediate circle?"
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
     "th": "The refrain — “Let the people praise thee, O God; let all the people praise thee” — is repeated exactly (v. 3, 5), as if worth saying twice for emphasis.",
     "q": "Write a short prayer of praise that deliberately widens out from your own life to include people and places far from you."
    }
   ]
  }
 ]
},
// Day 77
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A name that means struggle",
   "b": "Jacob's new name, Israel, given after a night of wrestling (Genesis 32:28), became the name for an entire nation — built into their very identity is the honest admission that faith sometimes looks like struggle."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Jacob fled without a goodbye, wrestled until dawn and came away named and limping, then was met by the brother he feared with an embrace instead of a fist.",
     "q": "Where did fear turn out to be less accurate than you expected this week — in Jacob's story of meeting Esau, or somewhere in your own life?"
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
     "th": "“My soul thirsteth for thee… in a dry and thirsty land” (Psalm 63:1) — the wilderness itself became David's language for worship, not just an obstacle to it.",
     "q": "What would it look like to let a genuinely dry or difficult stretch of your own life become a place of worship rather than only endurance?"
    }
   ]
  }
 ]
},
// Day 78
{
 "ref": "Genesis 34",
 "tag": "Old Testament",
 "api": "genesis+34",
 "sum": [
  "Jacob's daughter Dinah is violated by Shechem, who then wants to marry her; Jacob's sons agree only if the men of the city are circumcised.",
  "While the men are recovering, Simeon and Levi massacre the city in revenge.",
  "Jacob rebukes his sons for endangering the family, fearing retaliation from surrounding peoples."
 ],
 "nug": [
  {
   "h": "A painful chapter with no easy hero",
   "b": "Dinah is defiled by Shechem, who then genuinely wants to marry her and “spake kindly unto the damsel” (v. 3) — the chapter holds real wrong done to Dinah alongside a complicated, not straightforwardly villainous, aftermath."
  },
  {
   "h": "A deception that weaponized a sacred sign",
   "b": "Jacob's sons tell Hamor's people they'll only agree to intermarriage if every male in the city is circumcised (v. 13–17) — using the very sign of God's covenant with Abraham as a tool for a trap, while the text says explicitly “they spake deceitfully” (v. 13)."
  },
  {
   "h": "A massacre that troubled even their own father",
   "b": "While the men of Shechem are still recovering from circumcision, Simeon and Levi kill every male in the city; Jacob's rebuke isn't primarily moral but practical fear — “Ye have troubled me to make me to stink among the inhabitants” (v. 30), a fear later echoed in Jacob's dying words about them (49:5–7)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 49:5–7 · Deuteronomy 32:35 · Romans 12:19",
   "qs": [
    {
     "th": "Jacob's deathbed words in Genesis 49:5–7 condemn Simeon and Levi's “instruments of cruelty” and their self-willed anger explicitly, decades after this event — the text doesn't let the passage of time soften the verdict.",
     "q": "Why do you think Scripture waits until Jacob's final words to render a clear moral judgment on this event, rather than stating it plainly here?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "This chapter has no character who responds well — not Shechem, not Jacob's silence, not the sons' deception and violence — a rare passage where the reader is left without a clear model to imitate.",
     "q": "How do you personally process a passage of Scripture that seems to offer no good example to follow, only honest description of a bad situation?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Romans 12:19's “Vengeance is mine; I will repay, saith the Lord” speaks directly into exactly the kind of situation Simeon and Levi took entirely into their own hands here.",
     "q": "Is there a wrong done to you or someone you love that you've been tempted to answer with your own version of Simeon and Levi's response, rather than trusting God with it?"
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
     "th": "The chapter's violence begins with real, unaddressed wrong done to Dinah and ends with far greater, unjustified violence — a chain where one wrong is answered by a much larger one.",
     "q": "Is there a place in your own life where a smaller wrong done to you has been tempting you toward a disproportionate response? Bring that honestly to God."
    }
   ]
  }
 ]
},
// Day 79
{
 "ref": "Genesis 35",
 "tag": "Old Testament",
 "api": "genesis+35",
 "sum": [
  "God tells Jacob to return to Bethel; Jacob has his household bury their foreign idols first.",
  "God reaffirms the covenant and Jacob's new name, Israel.",
  "Rachel dies giving birth to Benjamin; soon after, Isaac also dies and is buried by Jacob and Esau together."
 ],
 "nug": [
  {
   "h": "A command to go back to where it began",
   "b": "God tells Jacob to return to Bethel, the exact place he'd fled through decades earlier with only a stone for a pillow (28:11–19) — the site of his first encounter with God becomes the site of a fresh, deliberate return to Him."
  },
  {
   "h": "Idols buried under an oak tree",
   "b": "Before going up to Bethel, Jacob tells his household to “put away the strange gods” among them (v. 2–4) — including, presumably, Rachel's stolen teraphim from chapter 31 — and buries them, a physical, decisive act of spiritual house-cleaning."
  },
  {
   "h": "Joy and grief in the same short chapter",
   "b": "Rachel dies giving birth to Benjamin “in the way” to Ephrath (v. 16–19), naming her son with her dying breath Ben-oni (“son of my sorrow”) while Jacob renames him Benjamin (“son of the right hand”) — loss and hope named in the very same moment."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 28:19–22 · Hebrews 12:1 · Joshua 24:14–15",
   "qs": [
    {
     "th": "Jacob's vow at Bethel decades earlier (28:20–22) was conditional and hesitant — “if God will be with me.” Returning now, older and having seen God's faithfulness through twenty hard years, he comes back not to make a new deal but to finally build the altar he'd promised.",
     "q": "What promise or commitment have you made to God that, like Jacob's, is still waiting on you to actually follow through?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Burying idols under an oak tree (v. 4) is a deliberate, physical act — not just a change of mind, but something buried and left behind at a specific place.",
     "q": "Is there something you need to physically or practically remove from your life, not just mentally resolve to stop, the way Jacob buried the idols rather than just deciding to ignore them?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Rachel's naming of Benjamin as “son of my sorrow” with her last breath, and Jacob's renaming him “son of the right hand,” shows two very different ways of naming the exact same painful moment.",
     "q": "Is there a painful chapter of your own story that could be renamed, the way Jacob renamed Benjamin, without denying how hard it genuinely was?"
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
     "th": "Despite real loss in this chapter, God reaffirms His covenant with Jacob at Bethel (v. 9–13), the promise standing firm through both the joyful obedience and the grief that follow in the same short passage.",
     "q": "Thank God for His faithfulness holding steady through a season of your life that held both real joy and real loss at once."
    }
   ]
  }
 ]
},
// Day 80
{
 "ref": "Psalm 71",
 "tag": "Psalms & Wisdom",
 "api": "psalms+71",
 "sum": [
  "A prayer from someone aging, asking God not to forsake him now that his strength is failing.",
  "He recalls God's faithfulness from his youth and even before birth.",
  "He resolves to keep declaring God's righteousness to the next generation despite his age."
 ],
 "nug": [
  {
   "h": "A prayer from someone growing old",
   "b": "“Cast me not off in the time of old age; forsake me not when my strength faileth” (v. 9) is one of the few psalms written explicitly from the perspective of ageing — a request that God's presence not fade as physical strength does."
  },
  {
   "h": "A faith that started at birth",
   "b": "“By thee have I been holden up from the womb: thou art he that took me out of my mother's bowels” (v. 6) — the writer traces God's care back before conscious memory even began, grounding present trust in a lifelong pattern."
  },
  {
   "h": "A resolve to keep telling the story",
   "b": "“I will go in the strength of the Lord GOD: I will make mention of thy righteousness, even of thine only” (v. 16) shows someone determined to keep declaring what God has done, precisely because the temptation in old age is often to go quiet."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 46:4 · 2 Corinthians 4:16 · Titus 2:2–3",
   "qs": [
    {
     "th": "Isaiah 46:4 answers this psalm's exact fear directly: “Even to your old age I am he; and even to hoar hairs will I carry you.” Both passages address the same specific worry — that God's care might have a shelf life tied to youth or strength.",
     "q": "Read Isaiah 46:4. How does this promise speak to a fear you have about a future season of decline, whether your own or someone you love's?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The writer explicitly plans to “shew thy strength unto this generation, and thy power to every one that is to come” (v. 18) — seeing old age not as a time to withdraw, but as a specific opportunity to pass something on.",
     "q": "Who is a generation younger than you that you could intentionally pass on something of what God has done in your life, the way this psalm plans to?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Even while asking for help, the psalm keeps returning to praise — “my mouth shall shew forth thy righteousness and thy salvation all the day” (v. 15) — need and worship held together rather than one waiting for the other to resolve.",
     "q": "Where could you let a current need and genuine praise coexist in the same prayer today, rather than waiting for the need to be met first?"
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
     "th": "This psalm was likely prayed by someone who had walked with God across an entire long life and wanted that faithfulness remembered and passed forward.",
     "q": "Pray today for an older person in your own life — by name — for strength, presence, and someone to pass their story on to."
    }
   ]
  }
 ]
},
// Day 81
{
 "ref": "Genesis 36",
 "tag": "Old Testament",
 "api": "genesis+36",
 "sum": [
  "A detailed genealogy of Esau's descendants, who become the nation of Edom.",
  "Lists their chiefs, territories and kings, including some who reigned before Israel had kings.",
  "Shows that even the “other” branch of Abraham's family experienced real blessing and prosperity."
 ],
 "nug": [
  {
   "h": "A whole chapter for the brother who didn't get the promise",
   "b": "Esau, who sold his birthright and lost the blessing, still gets an entire chapter cataloguing his descendants and their prosperity in the land of Edom — Scripture doesn't erase or diminish him even though the covenant line runs through Jacob."
  },
  {
   "h": "Kings before Israel had kings",
   "b": "Verse 31 notes these were “the kings that reigned in the land of Edom, before there reigned any king over the children of Israel” — a small detail suggesting this list, or at least this note, was recorded generations later, during or after Israel's own monarchy began."
  },
  {
   "h": "A nation that would matter later",
   "b": "Edom, descended from Esau here, becomes a recurring presence throughout the rest of the Old Testament — sometimes ally, often adversary — right up through the prophets and even into the New Testament era (Herod the Great was an Idumean, a descendant of Edom)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 20:14–21 · Obadiah 1:10–12 · Malachi 1:2–3",
   "qs": [
    {
     "th": "Obadiah, an entire short prophetic book, is devoted to judgment against Edom for how they treated their “brother Jacob” during a later crisis — the family tension from Genesis 25–33 apparently never fully resolved between the two nations descended from these twin brothers.",
     "q": "What does it tell you that unresolved sibling tension in one generation could shape national relationships for centuries afterward?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "This dry genealogical chapter, easy to skim past, represents real lives, real prosperity, real history for an entire branch of Abraham's family that Scripture chose to record in detail rather than dismiss.",
     "q": "Is there a “branch” of your own life or family — a path not taken, a relative estranged from the main story — whose story still deserves to be honestly acknowledged rather than erased?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Even though the covenant promise runs through Jacob, God's common blessing — land, descendants, prosperity — is clearly still at work in Esau's line too (v. 6–8 describes real material abundance).",
     "q": "Where do you see God's ordinary blessing at work in people or families outside your own particular faith community?"
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
     "th": "Even a chapter mostly made of names and territories still belongs to the story of a God who keeps track of every family line, chosen or not.",
     "q": "Praise God today for His attentiveness to details and people that might otherwise seem too ordinary to matter."
    }
   ]
  }
 ]
},
// Day 82
{
 "ref": "Matthew 12",
 "tag": "New Testament",
 "api": "matthew+12",
 "sum": [
  "Jesus defends his disciples picking grain on the Sabbath and heals a man's withered hand, provoking a plot against his life.",
  "He is described as fulfilling Isaiah's gentle Suffering Servant, and warns that blasphemy against the Holy Spirit won't be forgiven.",
  "He says those who do the Father's will are his true family."
 ],
 "nug": [
  {
   "h": "A Sabbath argument settled with Scripture and mercy",
   "b": "When Pharisees object to disciples plucking grain on the Sabbath, Jesus answers with David eating the showbread (1 Samuel 21) and quotes Hosea 6:6 — “I will have mercy, and not sacrifice” — arguing that the Sabbath's own purpose was being misapplied against the people it was meant to serve."
  },
  {
   "h": "A healing that provokes a murder plot",
   "b": "Jesus heals a man's withered hand in the synagogue on the Sabbath (v. 9–13), and the Pharisees' response is to go out and “hold a council against him, how they might destroy him” (v. 14) — mercy shown, and murder plotted, in the same short scene."
  },
  {
   "h": "The unforgivable sin, carefully bounded",
   "b": "Jesus warns that blasphemy against the Holy Spirit “shall not be forgiven” (v. 31–32) — spoken directly to people who had just watched Him heal and cast out a demon, and then attributed that clearly good work to Satan (v. 24). The warning is aimed at a specific, deliberate hardening, not an anxious fear many readers wrongly apply to themselves."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hosea 6:6 · Isaiah 42:1–3 · Jonah 1:17",
   "qs": [
    {
     "th": "Matthew explicitly quotes Isaiah 42:1–3's picture of a gentle servant — “a bruised reed shall he not break” — right after describing Jesus quietly withdrawing rather than confronting His accusers publicly (v. 15–21), tying His restraint directly to an old prophecy about how the Messiah would carry Himself.",
     "q": "Read Isaiah 42:1–3. What does it show you that Jesus' quiet withdrawal from conflict is treated as prophecy fulfilled, not weakness?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The religious leaders witness an undeniable miracle and respond not with wonder but with an accusation that reveals their hearts were already closed (v. 24).",
     "q": "Where might you be at risk of explaining away something good because accepting it would cost you too much to admit?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' warning about blasphemy against the Spirit (v. 31–32) is given to people actively, knowingly attributing good, Spirit-empowered work to evil — a deliberate, ongoing hardening, not a single doubt or fearful thought.",
     "q": "If you've ever worried you'd committed this “unforgivable sin,” what does the specific context here — deliberate, knowing rejection, not honest doubt or fear — say to that worry?"
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
     "th": "“By thy words thou shalt be justified, and by thy words thou shalt be condemned” (v. 37) treats careless or deliberate speech as morally serious, an overflow of what's actually in the heart (v. 34–35).",
     "q": "What has your speech this week revealed about what's actually in your heart? Bring that honestly to God."
    }
   ]
  }
 ]
},
// Day 83
{
 "ref": "Psalm 73",
 "tag": "Psalms & Wisdom",
 "api": "psalms+73",
 "sum": [
  "Asaph admits he nearly lost his faith envying the prosperity of the wicked.",
  "Everything changes when he enters God's sanctuary and understands their ultimate end.",
  "He concludes that God, not earthly gain, is truly all he desires."
 ],
 "nug": [
  {
   "h": "A near-fall, honestly admitted",
   "b": "Asaph opens by stating his conclusion — “Truly God is good to Israel” — but then admits “as for me, my feet were almost gone; my steps had well nigh slipped” (v. 2), watching the wicked prosper and grow arrogant while he struggled to stay faithful."
  },
  {
   "h": "Envy that nearly cost him everything",
   "b": "“I was envious at the foolish, when I saw the prosperity of the wicked” (v. 3) — Asaph names envy specifically, not just discouragement, as what nearly undid his faith, an honest diagnosis many readers recognize in themselves."
  },
  {
   "h": "The turning point: the sanctuary, not an argument",
   "b": "“Until I went into the sanctuary of God; then understood I their end” (v. 17) — what shifts Asaph's perspective isn't a clever counter-argument he thinks his way into, but worship itself, and a longer view of where things actually end up."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 37:1–2 · Hebrews 12:2–3 · Galatians 6:9",
   "qs": [
    {
     "th": "Psalm 37, read earlier in this plan, opens with almost the identical instruction — don't fret over evildoers — that Asaph here admits he almost failed to follow. Two psalms wrestling with the exact same real temptation, from two different angles.",
     "q": "Compare Asaph's honest near-failure here with Psalm 37's confident instruction. What does it add to have both a command and an honest confession of nearly breaking it, side by side in Scripture?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Asaph's honesty about almost losing his faith over envy of others' prosperity isn't hidden or minimized — it's the centerpiece of the psalm, worked through in real time rather than resolved before he started writing.",
     "q": "Where is envy currently doing quiet damage to your own faith or contentment, in a way you haven't named as clearly as Asaph does here?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Nevertheless I am continually with thee: thou hast holden me by my right hand” (v. 23) comes right after Asaph admits how close he came to giving up — God's holding didn't depend on Asaph's perspective already being sorted out.",
     "q": "Where do you need to trust that God is “holding your right hand” even while your own perspective on a situation is still genuinely struggling?"
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
     "th": "The psalm's real turning point and its most quoted line come together: “Whom have I in heaven but thee? and there is none upon earth that I desire beside thee” (v. 25).",
     "q": "Write this verse in your own words as a personal declaration, especially if there's something else currently competing for that place in your heart."
    }
   ]
  }
 ]
},
// Day 84
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Idols buried under an oak",
   "b": "Before returning to Bethel, Jacob had his household bury every “strange god” among them under an oak tree (Genesis 35:4) — a decisive, physical break with the past before a fresh start with God."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week held one of Genesis's hardest, most unresolved chapters alongside a fresh start at Bethel, a whole chapter honoring the brother who didn't get the promise, and two psalms wrestling honestly with age and envy.",
     "q": "Where this week did Scripture's honesty about hard, unresolved situations (Dinah, Esau's descendants, Asaph's near-collapse) actually help you, rather than a tidier version would have?"
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
     "th": "“I will go in the strength of the Lord GOD: I will make mention of thy righteousness, even of thine only” (Psalm 71:16) — resolve to keep declaring, not just feeling, what's true.",
     "q": "What is one true thing about God you could deliberately declare today, even if your feelings haven't fully caught up yet?"
    }
   ]
  }
 ]
},
// Day 85
{
 "ref": "Genesis 37",
 "tag": "Old Testament",
 "api": "genesis+37",
 "sum": [
  "Jacob's favouritism toward Joseph, shown through a special coat, and Joseph's dreams of ruling over his family fuel his brothers' hatred.",
  "The brothers plot against Joseph; Reuben tries to save him secretly, but the others sell him to traders instead.",
  "Joseph is taken to Egypt and sold to Potiphar, while his father Jacob is deceived into thinking he's dead."
 ],
 "nug": [
  {
   "h": "A coat that marked favouritism",
   "b": "Jacob's “coat of many colours” for Joseph (v. 3) — more accurately a long, ornamented robe unsuited for manual labour — visibly announced that Joseph was set apart from his working brothers, and “they hated him, and could not speak peaceably unto him” (v. 4)."
  },
  {
   "h": "Dreams that made the hatred worse, not better",
   "b": "Joseph's two dreams — sheaves bowing, then sun, moon and eleven stars bowing (v. 5–10) — seem to have been genuinely prophetic, yet telling them to a family already resentful only deepened the conflict rather than easing it."
  },
  {
   "h": "Reuben's quiet, failed rescue attempt",
   "b": "Reuben, the eldest, suggests throwing Joseph in a pit rather than killing him outright, planning secretly to rescue him later (v. 21–22) — but he's absent when the brothers sell Joseph to traders instead, and returns to an empty pit and real anguish (v. 29–30)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 7:9–10 · Psalm 105:17–19 · Genesis 50:20",
   "qs": [
    {
     "th": "Psalm 105:17–19 looks back on this exact scene centuries later and reads it entirely through the lens of providence — “he sent a man before them, even Joseph, who was sold for a servant” — the very same event Joseph's brothers meant for harm.",
     "q": "Read Psalm 105:17–19. How does it change your reading of this painful chapter to know how the rest of Joseph's story turns out?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's favoured position and his own dreams, shared without much apparent tact, seem to have genuinely contributed to his brothers' resentment — the chapter doesn't present him as entirely blameless in how the conflict escalated, even though what happened to him was a grave wrong.",
     "q": "Is there a situation where you've been genuinely wronged, but also, if you're honest, played some small part in how the conflict escalated?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Reuben's plan to secretly rescue Joseph fails not because he didn't care, but because he wasn't present at the critical moment (v. 29) — good intentions without follow-through.",
     "q": "Is there a good intention toward someone that you've been meaning to follow through on, that this chapter's warning about Reuben's absence is nudging you to actually act on?"
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
     "th": "This whole chapter is the opening move of a story that won't make sense for many more chapters — Joseph in the pit had no way of knowing how his story would eventually turn.",
     "q": "Sit quietly and bring to God a situation in your own life that currently feels like “the pit” — not asking for the whole explanation, just naming it honestly and asking Him to be present in it."
    }
   ]
  }
 ]
},
// Day 86
{
 "ref": "Genesis 38",
 "tag": "Old Testament",
 "api": "genesis+38",
 "sum": [
  "Judah's sons Er and Onan both die for their wickedness, leaving his daughter-in-law Tamar without the son she was owed.",
  "Tamar disguises herself and tricks Judah into fathering her children himself.",
  "When exposed, Judah admits “she hath been more righteous than I,” and Tamar bears twins, including an ancestor of King David."
 ],
 "nug": [
  {
   "h": "A chapter that interrupts Joseph's story on purpose",
   "b": "This account of Judah and Tamar sits right in the middle of the Joseph narrative, seemingly unrelated — many readers see a deliberate literary pause, showing what was happening back in Canaan while Joseph's story unfolds in Egypt."
  },
  {
   "h": "A widow denied what she was owed",
   "b": "Under the custom later formalized as levirate marriage, Tamar was owed a husband from Judah's remaining sons after two died; Judah repeatedly delays, effectively leaving her in limbo (v. 11, 14) — the injustice driving what she does next."
  },
  {
   "h": "Judah's verdict on himself",
   "b": "When Tamar's disguised deception to conceive a child by Judah himself is exposed, Judah's response is startling: “She hath been more righteous than I” (v. 26) — he owns his own greater failure rather than only condemning hers."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 1:3 · Ruth 4:12,18–22 · Genesis 49:8–10",
   "qs": [
    {
     "th": "Matthew 1:3 lists “Judas begat Phares and Zara of Thamar” directly in Jesus' genealogy — this uncomfortable, complicated chapter produces the exact family line the Messiah would come through, alongside Rahab and Ruth in the same short list.",
     "q": "What does it show you about God's ways that this particular story, of all the family's history, becomes part of the Messiah's direct lineage?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Tamar takes real risk and uses deception to obtain what she was legally and rightfully owed, after being repeatedly failed by the person responsible to provide it.",
     "q": "Where might you be waiting, like Tamar, for someone to make right what they owe you — and what would honest, godly persistence (rather than deception) look like in your situation?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Judah's willingness to admit “she hath been more righteous than I”, in front of his community, about his own daughter-in-law, is a genuinely humbling moment of public self-correction.",
     "q": "When was the last time you publicly and specifically admitted someone else was more in the right than you, rather than defending yourself?"
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
     "th": "Judah's confession here marks a real turning point in his character, visible later in his impassioned plea for Benjamin (chapter 44) — the man who once suggested selling Joseph becomes willing to offer himself in his younger brother's place.",
     "q": "Is there a specific failure you could name and own as clearly as Judah does here, trusting that, like him, it doesn't have to define the rest of your story?"
    }
   ]
  }
 ]
},
// Day 87
{
 "ref": "Psalm 84",
 "tag": "Psalms & Wisdom",
 "api": "psalms+84",
 "sum": [
  "Expresses deep longing for God's presence, comparing it to how even sparrows find a home near his altar.",
  "Declares one day in God's courts better than a thousand elsewhere.",
  "Ends praising God as a sun and shield who withholds no good thing from the upright."
 ],
 "nug": [
  {
   "h": "Longing that starts with the body",
   "b": "“My soul longeth, yea, even fainteth for the courts of the LORD: my heart and my flesh crieth out for the living God” (v. 2) — desire for God's presence described as a physical ache, not just a mental preference."
  },
  {
   "h": "A sparrow's nest at the altar",
   "b": "“Yea, the sparrow hath found an house, and the swallow a nest for herself, where she may lay her young, even thine altars, O LORD of hosts” (v. 3) — even ordinary birds have found permanent shelter in the temple courts, a detail the psalmist envies with real tenderness."
  },
  {
   "h": "A single day valued above a thousand elsewhere",
   "b": "“For a day in thy courts is better than a thousand. I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness” (v. 10) — the lowest possible role near God preferred over comfort far from Him."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 3:16–17 · John 4:23–24 · Philippians 3:8",
   "qs": [
    {
     "th": "The New Testament relocates this psalm's longing for a physical temple into something even closer — believers themselves described as God's temple (1 Corinthians 3:16), and worship no longer tied to one physical location (John 4:23–24).",
     "q": "How does the psalm's physical, location-based longing for God's presence translate into your own life, now that presence isn't tied to a single building?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalmist would rather hold the lowest job near God's presence than the best life far from it (v. 10) — proximity to God valued above status anywhere else.",
     "q": "Where might you be prioritizing status or comfort over simple nearness to God in a decision you're currently facing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“They go from strength to strength, every one of them in Zion appeareth before God” (v. 7) pictures pilgrims growing stronger as they travel toward God's presence, not more depleted by the journey.",
     "q": "Where have you found, like this verse describes, that moving toward God actually renewed your strength rather than draining it?"
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
     "th": "“For the LORD God is a sun and shield: the LORD will give grace and glory: no good thing will he withhold from them that walk uprightly” (v. 11) pairs two very different images — warmth and protection — in a single line of praise.",
     "q": "Write a short prayer using both images — God as sun (warmth, life) and shield (protection) — for whatever you're facing today."
    }
   ]
  }
 ]
},
// Day 88
{
 "ref": "Genesis 39",
 "tag": "Old Testament",
 "api": "genesis+39",
 "sum": [
  "Joseph prospers in Potiphar's household because “the LORD was with him,” rising to oversee everything.",
  "Potiphar's wife repeatedly tries to seduce him; when he refuses and flees, she falsely accuses him of assault.",
  "Joseph is imprisoned, but even there God's presence with him leads the jailer to put him in charge of the other prisoners."
 ],
 "nug": [
  {
   "h": "A refrain repeated at both ends of a hard story",
   "b": "“The LORD was with Joseph” opens the chapter (v. 2) and returns again after he's unjustly imprisoned (v. 21) — the same statement of God's presence framing both his rise in Potiphar's house and his fall into prison, unchanged by his circumstances."
  },
  {
   "h": "Integrity that cost him everything, materially",
   "b": "Joseph's refusal of Potiphar's wife — “how then can I do this great wickedness, and sin against God?” (v. 9) — leads directly and immediately to false accusation and imprisonment. Doing right doesn't protect him from consequences; it actually triggers the worst one yet."
  },
  {
   "h": "Given responsibility even in prison",
   "b": "Just as he'd been trusted with Potiphar's entire household, the prison keeper eventually puts “all the prisoners… under Joseph's hand” (v. 22) — the same pattern of competence and trust repeating even in radically reduced circumstances."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Peter 2:19–20 · Hebrews 13:5 · Romans 8:28",
   "qs": [
    {
     "th": "1 Peter 2:19–20 speaks directly to Joseph's exact situation — suffering unjustly for doing right, and being commended by God for it, not because the injustice didn't matter but because faithfulness under it does.",
     "q": "Read 1 Peter 2:19–20. How does it feel to know Joseph's story of unjust suffering for doing right is exactly the pattern this verse describes?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's integrity in this chapter cost him his position, his reputation, and his freedom — no immediate reward, only consequences, for doing the right thing.",
     "q": "Have you ever done the right thing and had it cost you rather than pay off? How did you (or how could you) hold onto integrity anyway?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The phrase “the LORD was with Joseph” doesn't correspond to Joseph's circumstances improving — it's stated in the palace and in the prison alike, presence rather than outcome as the measure.",
     "q": "Where do you need to remember God's presence isn't measured by how well things are currently going for you?"
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
     "th": "Even in prison, described starkly as the lowest point yet in his story, Joseph is given real responsibility and “the LORD made it to prosper” (v. 23) — growth happening in a place that looked like nothing but loss.",
     "q": "Thank God for a time something genuinely grew or prospered in you during a season that, from the outside, looked like only loss."
    }
   ]
  }
 ]
},
// Day 89
{
 "ref": "Matthew 13",
 "tag": "New Testament",
 "api": "matthew+13",
 "sum": [
  "Jesus teaches a series of parables about the kingdom of heaven, starting with the sower and different soils.",
  "He explains why he teaches in parables and tells of the wheat and tares, mustard seed, leaven, hidden treasure, pearl and dragnet.",
  "He is rejected in his own hometown, where people's familiarity with him limits their faith."
 ],
 "nug": [
  {
   "h": "A whole chapter built from parables",
   "b": "Matthew groups seven of Jesus' parables together here — sower, wheat and tares, mustard seed, leaven, hidden treasure, pearl, dragnet — more concentrated parable teaching than anywhere else in the Gospels."
  },
  {
   "h": "A deliberately puzzling teaching method",
   "b": "When asked why He speaks in parables, Jesus quotes Isaiah 6:9–10 about people who see without perceiving — parables reveal truth to those genuinely seeking it while remaining opaque to those who aren't (v. 10–17), a hard teaching many readers wrestle with."
  },
  {
   "h": "Small things with disproportionate outcomes",
   "b": "The mustard seed (smallest seed, becomes a tree, v. 31–32) and the leaven (tiny amount, works through the whole batch, v. 33) both picture the kingdom of heaven starting almost invisibly small and becoming impossible to miss."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 6:9–10 · Isaiah 55:10–11 · Psalm 78:2",
   "qs": [
    {
     "th": "Matthew directly quotes Psalm 78:2 — “I will open my mouth in parables” — as fulfilled in Jesus' teaching style itself, treating the method of teaching, not just its content, as something prophesied in advance.",
     "q": "Read Psalm 78:2 in context. What does it add to know that even Jesus' teaching method was something Scripture anticipated centuries earlier?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The parable of the sower (v. 3–9, 18–23) describes four different responses to the exact same seed — the difference isn't the message, but the condition of the soil it lands on.",
     "q": "Honestly, which soil in this parable best describes your own heart's current condition toward whatever God is currently saying to you?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The hidden treasure and the pearl of great price (v. 44–46) both describe someone who, upon finding something of surpassing worth, sells everything else joyfully to have it — not reluctantly, but “for joy thereof.”",
     "q": "What would it look like for you to pursue something of real spiritual worth with that same joyful, all-in urgency, rather than reluctant obligation?"
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
     "th": "Jesus is “offended” at in His own hometown, where familiarity bred contempt rather than faith — “A prophet is not without honour, save in his own country” (v. 57), and “he did not many mighty works there because of their unbelief” (v. 58).",
     "q": "Is there somewhere — a relationship, a routine, a familiar place — where familiarity has quietly dulled your own openness to what God might want to do? Name it honestly."
    }
   ]
  }
 ]
},
// Day 90
{
 "ref": "Psalm 86",
 "tag": "Psalms & Wisdom",
 "api": "psalms+86",
 "sum": [
  "David, though a king, describes himself as poor and needy, calling on God's readiness to forgive and abundant mercy.",
  "He asks God to unite his heart to fear God's name and to teach him God's ways.",
  "He ends asking for a sign of God's favour against his enemies."
 ],
 "nug": [
  {
   "h": "A rare title for someone not yet a king",
   "b": "David calls himself “thy servant” repeatedly (v. 2, 4, 16) and describes himself as “poor and needy” (v. 1) — language of dependence from a man who, by most other measures, held enormous power and wealth by the time many of his psalms were written."
  },
  {
   "h": "A request for an undivided heart",
   "b": "“Unite my heart to fear thy name” (v. 11) names a very specific, honest problem — a heart pulled in different directions, wanting to be single-minded about God but not naturally staying that way."
  },
  {
   "h": "One of the clearest short statements of who God is",
   "b": "“For thou, Lord, art good, and ready to forgive; and plenteous in mercy unto all them that call upon thee” (v. 5) packs three qualities — goodness, readiness to forgive, abundant mercy — into a single compact verse many readers memorize."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "James 4:8 · Psalm 51:10 · Matthew 5:8",
   "qs": [
    {
     "th": "“Unite my heart” (v. 11) anticipates the same request David makes more famously in Psalm 51:10, “create in me a clean heart” — the ongoing, recurring need for a divided heart to be made whole, not a one-time fix.",
     "q": "Why might this need for an undivided, united heart be something that comes up more than once across David's life and prayers, rather than being solved permanently the first time?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David describes himself as “poor and needy” (v. 1) despite his actual position and resources — a posture of dependence chosen rather than forced by circumstance.",
     "q": "Where might you need to choose a posture of dependence on God, even in an area of life where you actually have real strength or resources?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Teach me thy way, O LORD; I will walk in thy truth” (v. 11) puts teaching before walking — David wants to be shown the way before he commits to it, not the other way around.",
     "q": "Is there a decision where you've been trying to commit before you've genuinely asked to be taught?"
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
     "th": "Verse 16 asks God to “give thy strength unto thy servant, and save the son of thine handmaid” — a prayer that reaches beyond David himself to include his family line.",
     "q": "Pray today for someone in your own family — by name — for the specific strength they need right now."
    }
   ]
  }
 ]
},
// Day 91
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A verdict spoken about himself",
   "b": "When confronted with his own failure, Judah didn't defend himself — he said plainly, “She hath been more righteous than I” (Genesis 38:26), a small but real turning point in his story."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Joseph went from favoured son to pit to slavery to prison, Judah's story took an uncomfortable turn that still landed him in Jesus' genealogy, and Jesus taught almost entirely in parables about a kingdom that starts small.",
     "q": "Where did “the LORD was with him” (Genesis 39:2, 21) show up this week even in circumstances that, on the surface, looked like pure loss?"
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
     "th": "“I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness” (Psalm 84:10) — nearness to God valued above comfort or status.",
     "q": "What would choosing nearness to God over comfort or status look like in one specific decision in front of you this week?"
    }
   ]
  }
 ]
},
// Day 92
{
 "ref": "Genesis 40",
 "tag": "Old Testament",
 "api": "genesis+40",
 "sum": [
  "In prison, Joseph accurately interprets the dreams of Pharaoh's imprisoned butler and baker.",
  "The butler is restored to his position exactly as Joseph predicted; the baker is executed.",
  "Joseph asks the butler to remember him to Pharaoh, but the butler forgets him for two more years."
 ],
 "nug": [
  {
   "h": "Two dreams, two very different fates",
   "b": "Pharaoh's butler and baker, imprisoned with Joseph, each have a dream on the same night; Joseph interprets both accurately — the butler restored in three days, the baker executed (v. 9–19) — the same gift used to deliver both good and devastating news."
  },
  {
   "h": "A God-given ability, offered without charging for it",
   "b": "“Do not interpretations belong to God? tell me them, I pray you” (v. 8) — Joseph is careful to credit God rather than claim personal mystical skill, even while using a genuine gift to help two strangers who couldn't repay him with anything but memory."
  },
  {
   "h": "A request that goes unanswered for two full years",
   "b": "Joseph asks the restored butler to remember him to Pharaoh (v. 14–15), and the chapter ends bluntly: “Yet did not the chief butler remember Joseph, but forgat him” (v. 23) — no resolution, just quiet, ordinary human forgetfulness."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Daniel 2:27–28 · Genesis 41:1,9 · Romans 8:28",
   "qs": [
    {
     "th": "Joseph's insistence that interpretations “belong to God” echoes almost exactly what Daniel says centuries later in Babylon (Daniel 2:27–28) — two men in foreign courts, both refusing credit for a gift they know isn't ultimately their own.",
     "q": "Why might it matter, both for Joseph and for you, to be careful about crediting God rather than yourself for something you're genuinely gifted at?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph does a genuine kindness — accurate, costly honesty about the baker's fate, and a heartfelt appeal for help — and it's simply forgotten by the person he helped, for two more years.",
     "q": "Have you ever done real good for someone and had it go completely unacknowledged or forgotten? How did you process that?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter's abrupt, disappointing ending — “forgat him” — isn't softened or explained; the text just lets the disappointment sit, trusting the reader to keep going without an immediate resolution.",
     "q": "What current disappointment are you sitting with that doesn't yet have a resolution, and how might trusting God's timing (not yet visible) change how you carry it?"
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
     "th": "It would be easy for Joseph to grow bitter watching someone he helped simply forget him while he remained in prison for two more years.",
     "q": "Is there a specific instance of being forgotten or overlooked that you're still carrying some bitterness about? Name it honestly to God rather than letting it quietly harden."
    }
   ]
  }
 ]
},
// Day 93
{
 "ref": "Genesis 41",
 "tag": "Old Testament",
 "api": "genesis+41",
 "sum": [
  "Pharaoh has two troubling dreams that none of his wise men can interpret; the butler finally remembers Joseph.",
  "Joseph interprets the dreams as seven years of plenty followed by seven years of famine, and proposes a plan to store grain.",
  "Pharaoh elevates Joseph to rule over all Egypt, and Joseph marries and has two sons, Manasseh and Ephraim."
 ],
 "nug": [
  {
   "h": "From prison to second-in-command in one day",
   "b": "Joseph goes from an unremembered prisoner to standing before Pharaoh, interpreting his dreams, and being placed “over all the land of Egypt” (v. 41) — an almost unbelievable reversal, but it comes after roughly thirteen years since the pit (37:2, 41:46)."
  },
  {
   "h": "A plan as impressive as the interpretation",
   "b": "Beyond simply explaining the dreams (seven years plenty, seven years famine), Joseph proposes a detailed administrative plan — storing a fifth of the harvest during the good years (v. 33–36) — practical wisdom alongside spiritual insight."
  },
  {
   "h": "Names that remember both the pain and the provision",
   "b": "Joseph names his sons Manasseh (“making to forget” — “God hath made me forget all my toil”) and Ephraim (“fruitful” — “God hath caused me to be fruitful in the land of my affliction”, v. 51–52) — both names openly naming the hard years, not hiding from them."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 105:19–22 · Acts 7:9–10 · Proverbs 22:29",
   "qs": [
    {
     "th": "Psalm 105:19 notes that “until the time that his word came: the word of the LORD tried him” — reading the entire thirteen years of pit, slavery and prison as a testing period with a purpose, not wasted time before the real story started.",
     "q": "Read Psalm 105:17–22. How does knowing the whole span was described as testing, not delay, change how you view a long hard season in your own life?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's sons' names openly acknowledge both the pain (“my affliction”) and the provision (“fruitful”) — he doesn't pretend the hard years didn't happen even while celebrating how far he's come.",
     "q": "How could you name or mark a season of your own life honestly — acknowledging both the hardship and the growth — rather than only one or the other?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's practical administrative skill (v. 33–36) is treated as every bit as much a gift from God as his ability to interpret dreams — ordinary competence and supernatural insight sitting together without hierarchy.",
     "q": "Where might an ordinary, practical skill you have be just as much a gift from God as something more obviously “spiritual”?"
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
     "th": "Thirteen years of loss, most of it looking like pure waste at the time, arrives at a point where Joseph can say God made him fruitful “in the land of my affliction” (v. 52) — fruit growing directly out of hardship, not despite it being ignored.",
     "q": "Thank God for one way you've seen fruit grow directly out of a season of real hardship in your own life."
    }
   ]
  }
 ]
},
// Day 94
{
 "ref": "Psalm 90",
 "tag": "Psalms & Wisdom",
 "api": "psalms+90",
 "sum": [
  "Moses' prayer reflecting on God's eternal nature compared to the brevity and frailty of human life.",
  "He notes that human years pass quickly, often marked by labour and sorrow because of sin.",
  "He prays for wisdom to number our days rightly, and for God's favour to be upon their work."
 ],
 "nug": [
  {
   "h": "The only psalm attributed to Moses",
   "b": "The heading calls this “a Prayer of Moses the man of God” — the sole psalm credited to him in the whole collection, likely written reflecting on the long, weary years of wilderness wandering under God's judgment on that generation."
  },
  {
   "h": "A dwelling place before there was any land",
   "b": "“LORD, thou hast been our dwelling place in all generations… before the mountains were brought forth… even from everlasting to everlasting, thou art God” (v. 1–2) — written by a man who, at the time, had no permanent home or land at all, only a tent and a wandering nation."
  },
  {
   "h": "A prayer to count days rightly",
   "b": "“So teach us to number our days, that we may apply our hearts unto wisdom” (v. 12) treats an honest awareness of mortality not as morbid but as the doorway to actual wisdom — a request Moses makes after honestly describing life's brevity (v. 3–10)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "James 4:14 · 2 Peter 3:8 · Deuteronomy 32:7",
   "qs": [
    {
     "th": "2 Peter 3:8 directly echoes this psalm's “a thousand years in thy sight are but as yesterday” (v. 4), applying the same truth to a very different question — why God's timing for His promises can feel slow to people bound by ordinary time.",
     "q": "Read 2 Peter 3:8. How does Moses' original point about God's timelessness get applied to a completely different situation, centuries later?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses writes this after decades of leading a nation that, because of unbelief, wandered instead of arriving — an entire generation whose years, by his own account here, were “labour and sorrow” (v. 10) largely due to their own repeated failure to trust God.",
     "q": "Is there a season of your own life shaped by past choices — yours or others' — where naming that honestly, as Moses does, could be more helpful than pretending it wasn't difficult?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Satisfy us early with thy mercy; that we may rejoice and be glad all our days” (v. 14) asks for joy to arrive early enough to shape the rest of a whole life, not just show up at the end.",
     "q": "What would it look like to actively ask God for joy “early” today, rather than waiting for circumstances to produce it eventually?"
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
     "th": "“So teach us to number our days” isn't primarily about fearing death, but about living with enough honesty about life's shortness to actually prioritize wisely.",
     "q": "Sit quietly for a minute and ask: if I genuinely lived today aware it's one of a limited number, what would I do differently before it ends?"
    }
   ]
  }
 ]
},
// Day 95
{
 "ref": "Genesis 42",
 "tag": "Old Testament",
 "api": "genesis+42",
 "sum": [
  "Famine drives Joseph's ten brothers to Egypt to buy grain, where they unknowingly bow before Joseph, fulfilling his childhood dream.",
  "Joseph, unrecognized, accuses them of spying, holds Simeon hostage, and demands they bring Benjamin next time.",
  "The brothers admit to each other their guilt over what they did to Joseph years earlier."
 ],
 "nug": [
  {
   "h": "Bowing down, unknowingly fulfilling a dream",
   "b": "Joseph's brothers travel to Egypt for grain and “bowed down themselves before him with their faces to the earth” (v. 6) — the exact scene from Joseph's childhood dream (37:7), now happening for real, more than twenty years later, and none of them recognize him."
  },
  {
   "h": "A test that echoes their own old crime",
   "b": "Joseph accuses them of spying, imprisons them for three days, then keeps Simeon hostage while requiring them to bring Benjamin — deliberately putting them in a position of fear and separation that echoes, in miniature, what they once did to him."
  },
  {
   "h": "A guilt that surfaces the moment trouble comes",
   "b": "Without knowing who's listening, the brothers say to each other, “We are verily guilty concerning our brother, in that we saw the anguish of his soul, when he besought us, and we would not hear” (v. 21) — more than twenty years of buried guilt surfacing under pressure."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 37:5–11 · Numbers 32:23 · 2 Corinthians 7:10",
   "qs": [
    {
     "th": "The bowing brothers in verse 6 fulfil Joseph's dream from chapter 37 exactly — something both he and they had long since had reason to doubt would ever happen, arriving in the most unexpected possible way.",
     "q": "Has a promise or a hope you'd nearly given up on ever come true in a way you didn't expect or recognize at first?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The brothers' guilt in verse 21 surfaces only once real trouble arrives — more than two decades of apparently going on with life while carrying unaddressed guilt underneath.",
     "q": "Is there guilt you've been carrying quietly for a long time, that difficulty or stress tends to bring back to the surface?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph turns away to weep upon hearing his brothers' guilt-laden conversation (v. 24) — real, private emotion held back from them while he's still working out what to do.",
     "q": "Where might you be processing something significant privately, weeping in a sense, even while continuing to function outwardly?"
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
     "th": "The brothers' confession in verse 21 is honest and specific — naming exactly what they did and exactly what they ignored — even though it's spoken to each other rather than to God directly.",
     "q": "Following their example of specificity, name plainly to God one thing you know you've ignored or refused to face, rather than describing it vaguely."
    }
   ]
  }
 ]
},
// Day 96
{
 "ref": "Matthew 14",
 "tag": "New Testament",
 "api": "matthew+14",
 "sum": [
  "Herod beheads John the Baptist after a rash promise made during a birthday celebration.",
  "Jesus feeds five thousand people from five loaves and two fish, with baskets of food left over.",
  "Jesus walks on water to his disciples; Peter briefly walks toward him too before fear makes him sink."
 ],
 "nug": [
  {
   "h": "A birthday party that ends in an execution",
   "b": "Herod's reluctant beheading of John the Baptist, prompted by a rash oath made during a dance at his own birthday feast (v. 6–10), shows how quickly pride and public image can override even a ruler's own private respect for John (Mark 6:20 notes Herod feared and protected John)."
  },
  {
   "h": "Five loaves stretched to feed thousands",
   "b": "Feeding the five thousand (v. 13–21) begins with Jesus telling the disciples, who want to send the hungry crowd away, “Give ye them to eat” — requiring them to bring what little they had before the miracle multiplies it."
  },
  {
   "h": "Walking on water, and starting to sink",
   "b": "Peter's brief walk on the water (v. 28–31) is often remembered for his fear and sinking, but he's also the only person besides Jesus in the entire Gospels recorded actually walking on water, however briefly."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 16:1–15 · 2 Kings 4:42–44 · Job 9:8",
   "qs": [
    {
     "th": "Elisha's feeding of a hundred men from twenty loaves (2 Kings 4:42–44) is a direct, smaller-scale precedent for this miracle — Jesus doing what a prophet had done before Him, but at a scale that left twelve baskets over, not merely enough.",
     "q": "Read 2 Kings 4:42–44. What's similar, and what's different in scale, between Elisha's miracle and Jesus' feeding of the five thousand?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The disciples' instinct was to send the hungry crowd away to fend for themselves; Jesus' instruction was the opposite — bring what you have, and let me work with it, right here.",
     "q": "Where are you tempted to “send away” a need rather than bringing what little you have and trusting God to work with it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Peter's fear grows “when he saw the wind boisterous” (v. 30) — he was already walking on water when he took his eyes off Jesus and started noticing the storm instead.",
     "q": "What “wind” has recently pulled your attention away from what you were already trusting God to do?"
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
     "th": "Before the feeding of the five thousand, and again after it, Jesus deliberately withdraws to pray alone (v. 13, 23) — ministry and ordinary demand for His time repeatedly interrupted, but prayer never skipped for long.",
     "q": "Following Jesus' pattern, take a few minutes to withdraw from whatever's demanding your attention today and simply be with God before returning to it."
    }
   ]
  }
 ]
},
// Day 97
{
 "ref": "Psalm 91",
 "tag": "Psalms & Wisdom",
 "api": "psalms+91",
 "sum": [
  "Describes the security of one who dwells in God's shelter, safe from various dangers “by night” and “by day.”",
  "Promises angels will guard and protect the one who trusts God, even amid real danger.",
  "Ends with God speaking directly, promising to deliver, answer and honour those who love him."
 ],
 "nug": [
  {
   "h": "A psalm without a named author",
   "b": "Unlike most psalms in this stretch, no heading names who wrote this — some traditions attribute it to Moses, continuing from Psalm 90, though the text itself doesn't say."
  },
  {
   "h": "Protection pictured with striking, unflinching detail",
   "b": "“Thou shalt not be afraid for the terror by night; nor for the arrow that flieth by day… A thousand shall fall at thy side, and ten thousand at thy right hand; but it shall not come nigh thee” (v. 5–7) — vivid, specific imagery of real danger surrounding someone who remains untouched."
  },
  {
   "h": "The verses Satan quoted to Jesus",
   "b": "Verses 11–12 — angels charged to keep you, bearing you up — are the exact words the tempter quotes to Jesus in the wilderness (Matthew 4:6), twisting a promise of protection into a dare to test God recklessly."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 4:5–7 · Luke 4:9–12 · 2 Corinthians 12:9–10",
   "qs": [
    {
     "th": "The tempter's misuse of this exact psalm in Matthew 4:6 is a sobering reminder that even Scripture, quoted accurately, can be twisted — the promise of protection was never meant as permission to create unnecessary danger and test God.",
     "q": "Read Matthew 4:5–7. What's the difference between trusting this psalm's promise and testing God the way the tempter suggested?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "This psalm doesn't promise the absence of danger — “a thousand shall fall at thy side” assumes real threats are actually present — but a specific kind of protection within real danger, not from it altogether.",
     "q": "How does the psalm's honesty about real danger being present, rather than promising its total absence, change how you understand what it's actually offering?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty” (v. 1) uses “dwelleth” and “abide” — words describing an ongoing, settled way of living, not a one-time request made in a crisis.",
     "q": "What would it look like to “dwell” in God's presence as an ongoing pattern, rather than only reaching for Him in emergencies?"
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
     "th": "The psalm ends in God's own voice, speaking directly: “Because he hath set his love upon me, therefore will I deliver him… I will answer him: I will be with him in trouble” (v. 14–15).",
     "q": "Write a short prayer of praise in response to hearing God speak these closing verses directly and personally to you."
    }
   ]
  }
 ]
},
// Day 98
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Guilt that finally surfaced",
   "b": "More than twenty years after selling their brother, Joseph's brothers finally named their guilt out loud under pressure (Genesis 42:21) — buried, but never actually gone."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Joseph's gift went unrewarded for two more years before an astonishing reversal, his brothers' old guilt surfaced under pressure, and Jesus fed thousands from almost nothing while Peter took a few steps on open water.",
     "q": "Where did this week's readings encourage you to keep trusting during a long wait — whether Joseph's years in prison, or a wait of your own?"
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
     "th": "“So teach us to number our days, that we may apply our hearts unto wisdom” (Psalm 90:12) — an honest view of time's shortness as the doorway to wisdom, not despair.",
     "q": "What would applying your heart to wisdom look like in one specific choice you're facing this week?"
    }
   ]
  }
 ]
},
// Day 99
{
 "ref": "Genesis 43",
 "tag": "Old Testament",
 "api": "genesis+43",
 "sum": [
  "Jacob reluctantly agrees to send Benjamin to Egypt with his sons, and Judah personally guarantees his safety.",
  "Joseph, still unrecognized, hosts his brothers at a feast, seating them by exact birth order and giving Benjamin extra portions.",
  "The brothers are amazed and anxious, unaware of what's really happening."
 ],
 "nug": [
  {
   "h": "Judah steps up where Reuben once failed",
   "b": "It's Judah, not the eldest Reuben, who finally persuades Jacob to let Benjamin go to Egypt, personally guaranteeing his safety — “I will be surety for him; of my hand shalt thou require him” (v. 9) — a striking contrast to his earlier role suggesting Joseph be sold."
  },
  {
   "h": "A father's honest, resigned prayer",
   "b": "Jacob, sending his sons back with gifts and double money, says simply, “If I be bereaved of my children, I am bereaved” (v. 14) — not confident triumph, but honest, weary surrender to whatever happens next."
  },
  {
   "h": "A feast that overwhelms the guests",
   "b": "Joseph, still unrecognized, seats his brothers in exact birth order — “the men marvelled one at another” (v. 33) — and gives Benjamin five times the portion of the others (v. 34), details that must have felt eerily, unexplainably specific to men who had no idea who was hosting them."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 44:33–34 · Genesis 49:8–12 · Proverbs 11:15",
   "qs": [
    {
     "th": "Judah's willingness to personally guarantee Benjamin's safety here sets up his even more dramatic offer in the very next chapter — to become a slave himself rather than let Benjamin stay in bondage — a real, growing pattern of character change.",
     "q": "What does it show you about growth in character that it often shows up gradually, in small commitments before larger ones, rather than all at once?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob's “if I be bereaved, I am bereaved” (v. 14) is not a confident statement of faith — it's honest resignation from a man who has already lost what he believed was his favourite son once before.",
     "q": "Is there a situation where honest, weary surrender — rather than confident faith — is actually the most truthful prayer you can currently offer God?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The brothers are given detailed, unexplainable kindness — seated in exact birth order, given extra portions — without any explanation of why, left simply to marvel at it.",
     "q": "Where have you experienced an unexplainable kindness or provision recently that you couldn't fully account for?"
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
     "th": "Despite the brothers' fear about the returned money (v. 18–23), Joseph's steward reassures them — “Peace be to you, fear not: your God, and the God of your father, hath given you treasure” — turning their anxiety into unexpected gratitude.",
     "q": "Thank God for a time anxiety you were carrying turned out, once explained, to have actually been His provision all along."
    }
   ]
  }
 ]
},
// Day 100
{
 "ref": "Genesis 44",
 "tag": "Old Testament",
 "api": "genesis+44",
 "sum": [
  "Joseph tests his brothers by having his silver cup secretly planted in Benjamin's sack, then having it “found.”",
  "Judah delivers a passionate speech, recounting the family's grief and offering himself as a slave instead of Benjamin.",
  "This proves the brothers have truly changed and sets up Joseph's dramatic reveal in the next chapter."
 ],
 "nug": [
  {
   "h": "One final, carefully designed test",
   "b": "Joseph has his silver cup planted in Benjamin's sack (v. 1–2), then has his steward pursue and “discover” it — a deliberate final test to see whether his brothers would abandon Benjamin the way they once abandoned him."
  },
  {
   "h": "The longest single speech in Genesis",
   "b": "Judah's plea to Joseph (v. 18–34) is one of the most emotionally raw, carefully argued speeches in the whole book — recounting the family's history, Jacob's grief, and his own personal guarantee, all building to an offer to become a slave himself in Benjamin's place."
  },
  {
   "h": "A brother finally willing to trade places",
   "b": "“Now therefore, I pray thee, let thy servant abide instead of the lad a bondman to my lord” (v. 33) — the same Judah who once suggested selling Joseph into slavery now offers his own freedom to spare another brother from it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 37:26–27 · Romans 5:6–8 · John 15:13",
   "qs": [
    {
     "th": "Judah's offer to become a slave in Benjamin's place directly reverses his role in chapter 37, where he suggested selling Joseph for profit — the same man, transformed enough to now offer himself instead of sacrificing someone else.",
     "q": "What does Judah's transformation across these chapters suggest about how much a person can genuinely change, given enough time and enough honest confrontation with their own past?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Judah's speech centers almost entirely on his father Jacob's grief — “it shall come to pass, when he seeth that the lad is not with us, that he will die” (v. 31) — concern for someone else's pain driving his own sacrificial offer.",
     "q": "Whose potential grief or pain could motivate you toward a costly, sacrificial choice you've been hesitant to make?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph designed this entire test specifically to discover whether his brothers had actually changed, not just to punish or manipulate them for its own sake.",
     "q": "Is there someone in your life whose change you've been quietly testing or waiting to see proven, rather than simply trusting? What would trusting look like instead?"
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
     "th": "Judah's speech is the turning point of the entire Joseph narrative — the moment Joseph can no longer maintain his disguise, because he's just heard proof that his brothers have genuinely changed.",
     "q": "Sit quietly and ask God to show you where real change has already happened in you or someone close to you, even if it hasn't been fully acknowledged yet."
    }
   ]
  }
 ]
},
// Day 101
{
 "ref": "Psalm 95",
 "tag": "Psalms & Wisdom",
 "api": "psalms+95",
 "sum": [
  "Opens with a joyful call to worship and sing to the LORD, the great God and King.",
  "Shifts to a solemn warning not to harden your heart as Israel did in the wilderness at Meribah.",
  "Urges hearing God's voice “today” rather than repeating that generation's unbelief."
 ],
 "nug": [
  {
   "h": "A call to worship with a warning attached",
   "b": "The psalm opens joyfully — “O come, let us sing unto the LORD… let us make a joyful noise” (v. 1–2) — then pivots sharply to a warning about hardening your heart “as in the provocation” (v. 8), referencing Israel's rebellion in the wilderness at Meribah and Massah."
  },
  {
   "h": "God pictured as a rock and a shepherd in the same breath",
   "b": "“The LORD is a great God, and a great King above all gods… he is our God; and we are the people of his pasture, and the sheep of his hand” (v. 3, 7) — cosmic power and intimate, personal care held together."
  },
  {
   "h": "A single verse quoted extensively in Hebrews",
   "b": "Verses 7–11, about hearing God's voice “today” and not hardening the heart, become the backbone of an entire extended argument in Hebrews 3–4 about persevering in faith."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 3:7–11 · Hebrews 4:7 · Exodus 17:1–7",
   "qs": [
    {
     "th": "Hebrews 3–4 quotes this psalm's warning at length, urging believers not to harden their hearts “today” the way the wilderness generation did — turning an ancient historical warning into an urgent, present-tense call.",
     "q": "Read Hebrews 3:12–15. Why do you think the writer emphasizes “today” so heavily, rather than treating this as only a lesson about the distant past?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The wilderness generation's hardness of heart (referenced in v. 8–11) grew not from one dramatic rebellion but from repeated, accumulated grumbling and testing — small compromises building into a settled pattern.",
     "q": "Is there a small, repeated pattern of grumbling or doubt in your own life that could, left unchecked, become the kind of hardness this psalm warns about?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's opening call to worship (v. 1–6) and its later warning (v. 7–11) are held in the same short psalm — joy and sober warning not treated as contradictory moods.",
     "q": "How do you hold genuine joy in worship and honest self-examination together, rather than letting one crowd out the other?"
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
     "th": "“Today if ye will hear his voice, harden not your heart” (v. 7–8) is addressed to people already worshipping — the warning isn't for outsiders, but for those already gathered to praise.",
     "q": "Is there a place where you're actively worshipping God with your words while quietly hardening your heart toward something He's been saying? Name it honestly."
    }
   ]
  }
 ]
},
// Day 102
{
 "ref": "Genesis 45",
 "tag": "Old Testament",
 "api": "genesis+45",
 "sum": [
  "Overwhelmed, Joseph reveals his identity to his brothers, weeping loudly.",
  "He reassures them that God sent him ahead to preserve life, turning their evil intentions into good.",
  "Pharaoh invites the whole family to move to Egypt, and Joseph sends for his father Jacob."
 ],
 "nug": [
  {
   "h": "A revelation too overwhelming to keep composed",
   "b": "Joseph can no longer restrain himself and cries out so loudly “the Egyptians and the house of Pharaoh heard” (v. 2) before he's even said a word to his brothers — raw emotion breaking through years of careful control."
  },
  {
   "h": "A theology of suffering stated plainly",
   "b": "“So now it was not you that sent me hither, but God… God did send me before you to preserve life” (v. 5, 7–8) — Joseph doesn't deny his brothers' real wrongdoing, but reframes the entire ordeal within God's larger purpose, without excusing what they did."
  },
  {
   "h": "An invitation to the whole family, and no small amount of Egyptian wealth",
   "b": "Pharaoh, hearing the news, personally offers Joseph's family “the good of the land of Egypt” (v. 18–20) — the entire family's rescue from famine becomes a national event, not just a private family reunion."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 50:20 · Romans 8:28 · Acts 7:13–14",
   "qs": [
    {
     "th": "Genesis 50:20, spoken years later after Jacob's death, restates this same theology even more sharply: “ye thought evil against me; but God meant it unto good.” Both statements hold human wrongdoing and divine purpose together without collapsing either one into the other.",
     "q": "How does Joseph's language — “ye thought evil” and “God meant it for good” in the same breath — avoid either excusing the wrong or denying God's sovereignty over it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's tears and loud weeping (v. 2, 14–15) show a man whose emotional restraint throughout this whole story wasn't the absence of feeling, but feeling carefully held until the right moment to release it.",
     "q": "Is there emotion you've been carefully holding back that might need, like Joseph's, an honest and appropriate moment of release?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's first concern once he reveals himself is urgency about getting his father and the whole family to safety quickly (v. 9–13), not dwelling on the wrong done to him.",
     "q": "Where might focusing on someone's practical, present need — rather than the history between you — be the most useful next step in a strained relationship?"
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
     "th": "What began as betrayal in a pit becomes, more than twenty years later, the means of an entire family's survival through famine — a full-circle turn no one in chapter 37 could have possibly predicted.",
     "q": "Thank God for one situation in your own life where the full picture only became clear much later than you expected."
    }
   ]
  }
 ]
},
// Day 103
{
 "ref": "Matthew 15",
 "tag": "New Testament",
 "api": "matthew+15",
 "sum": [
  "Jesus confronts religious leaders for elevating human tradition above God's actual commands, and teaches that true defilement comes from the heart, not unwashed hands.",
  "A Canaanite woman's persistent faith moves Jesus to heal her daughter, and he commends her “great faith.”",
  "Jesus feeds four thousand people from seven loaves and a few fish."
 ],
 "nug": [
  {
   "h": "A tradition elevated above God's actual command",
   "b": "Jesus confronts the Pharisees for using “tradition” (the specific practice of Corban, dedicating money to God to avoid using it to support aging parents) to effectively nullify God's actual command to honour father and mother (v. 3–6) — religious rule-keeping used to escape a harder, plainer obligation."
  },
  {
   "h": "Defilement relocated from hands to hearts",
   "b": "“Not that which goeth into the mouth defileth a man; but that which cometh out of the mouth, this defileth a man” (v. 11) — Jesus lists what actually defiles (evil thoughts, murder, theft, false witness, v. 19–20), relocating the whole conversation from ritual to character."
  },
  {
   "h": "A Gentile woman who wins an argument with Jesus",
   "b": "The Canaanite woman's persistent, clever faith — “the dogs eat of the crumbs which fall from their masters' table” (v. 27) — earns Jesus' rare, direct praise: “O woman, great is thy faith: be it unto thee even as thou wilt” (v. 28), one of only two people in the Gospels whose faith Jesus calls “great.”"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 29:13 · Mark 7:24–30 · Ephesians 2:11–13",
   "qs": [
    {
     "th": "Jesus directly quotes Isaiah 29:13 — “this people draweth nigh unto me with their mouth… but their heart is far from me” — to describe exactly what He's confronting in the Pharisees' tradition-elevating hand-washing dispute.",
     "q": "Read Isaiah 29:13. Why might outward religious correctness and genuine heart-closeness to God sometimes move in opposite directions rather than together?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The Canaanite woman's faith is described as “great” specifically because of her persistence and humility together — she doesn't argue her worthiness, she simply keeps asking, willing even to accept the lowest possible position (“crumbs”) to get help for her daughter.",
     "q": "Where do you need this woman's combination of humility and persistence — not demanding, but also not giving up — in something you're currently asking God for?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' list of what actually defiles — evil thoughts, murder, adultery, theft, false witness, blasphemy (v. 19) — all originate from inside a person, not from external contact with something unclean.",
     "q": "Which item on Jesus' list of heart-level defilement is currently the most honest, uncomfortable one for you to sit with?"
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
     "th": "The Canaanite woman's entire request, from start to finish, is on behalf of someone else — her daughter, “grievously vexed with a devil” (v. 22), not herself.",
     "q": "Following her example, pray persistently today for someone else's genuine need, refusing to give up after the first attempt."
    }
   ]
  }
 ]
},
// Day 104
{
 "ref": "Psalm 100",
 "tag": "Psalms & Wisdom",
 "api": "psalms+100",
 "sum": [
  "A short, joyful psalm calling all the earth to serve the LORD with gladness.",
  "Instructs entering God's presence with thanksgiving and praise.",
  "Grounds this gratitude in God's goodness, everlasting mercy and enduring truth."
 ],
 "nug": [
  {
   "h": "One of the shortest, most concentrated psalms",
   "b": "Only five verses, and yet it moves through nearly every major posture of worship — joyful noise, service, singing, entering God's presence, thanksgiving, praise, blessing His name — in rapid succession."
  },
  {
   "h": "A psalm “of thanksgiving” by title",
   "b": "The heading itself names this “A Psalm of praise”, one of the few psalms explicitly labelled by its purpose rather than its author or occasion — written specifically to be used as thanksgiving."
  },
  {
   "h": "A reason for gratitude stated plainly",
   "b": "“Know ye that the LORD he is God: it is he that hath made us, and not we ourselves; we are his people, and the sheep of his pasture” (v. 3) — gratitude grounded in identity and origin, not just in good things that happened recently."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Thessalonians 5:18 · Psalm 95:6–7 · Ephesians 5:20",
   "qs": [
    {
     "th": "Paul's instruction to “in every thing give thanks” (1 Thessalonians 5:18) reflects the same unconditional, identity-grounded thanksgiving this psalm models — gratitude rooted in who God is and who we are to Him, not dependent on circumstances lining up first.",
     "q": "How does grounding gratitude in “he hath made us” rather than in recent good news change how consistently you could actually practise it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "“Enter into his gates with thanksgiving, and into his courts with praise” (v. 4) treats gratitude as the appropriate way to approach God, not just a response after receiving something specific from Him.",
     "q": "What would it look like to enter your prayer time today with thanksgiving first, rather than starting with requests or concerns?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“For the LORD is good; his mercy is everlasting; and his truth endureth to all generations” (v. 5) roots this psalm's joy in unchanging character, something that doesn't fluctuate with news or mood.",
     "q": "Which of these three — God's goodness, His everlasting mercy, or His enduring truth — do you most need to be reminded of today?"
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
     "th": "This whole short psalm is essentially one sustained act of praise, without a single request or complaint woven through it.",
     "q": "Try praying only praise today — no requests, no concerns — just naming what's true and good about God, the way this psalm does."
    }
   ]
  }
 ]
},
// Day 105
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Not you, but God",
   "b": "Joseph told his brothers plainly, “It was not you that sent me hither, but God” (Genesis 45:8) — holding their real wrong and God's larger purpose together, without excusing either truth."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week held the most dramatic turning point in Joseph's story — Judah's transformation, Joseph's tearful revelation, an entire family saved — alongside warnings about hardened hearts and a Canaanite woman's remarkable faith.",
     "q": "Where this week did you see real character change happen gradually, over years, rather than instantly — in Judah's story, or possibly in your own?"
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
     "th": "“Enter into his gates with thanksgiving, and into his courts with praise” (Psalm 100:4) — gratitude as the way in, not just a response afterward.",
     "q": "What would starting today, or tomorrow, with thanksgiving first actually change about how the rest of it goes?"
    }
   ]
  }
 ]
},
// Day 106
{
 "ref": "Genesis 46",
 "tag": "Old Testament",
 "api": "genesis+46",
 "sum": [
  "Jacob sets out for Egypt, stopping to worship at Beersheba, where God reassures him and promises to bring his descendants back one day.",
  "A detailed list names the seventy family members who travel to Egypt.",
  "Joseph is reunited with his father Jacob, and the family settles in Goshen."
 ],
 "nug": [
  {
   "h": "A sacrifice before the journey, not after",
   "b": "Before heading down to Egypt, Jacob stops at Beersheba to offer sacrifices — the same place his father Isaac and grandfather Abraham had worshipped — seeking God's blessing on the move before making it, not just afterward."
  },
  {
   "h": "Reassurance for a fearful, significant decision",
   "b": "God speaks to Jacob in a night vision, saying “Fear not to go down into Egypt… I will go down with thee… and I will also surely bring thee up again” (v. 3–4) — direct reassurance for a move that, given later Egyptian slavery, carried real long-term risk Jacob couldn't have foreseen."
  },
  {
   "h": "Seventy names carefully counted",
   "b": "The chapter closes with a detailed list of the seventy people who went down to Egypt (v. 8–27) — the small beginning of what would eventually become, per Exodus 1:7, a nation “exceeding mighty.”"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 7:14–15 · Deuteronomy 26:5 · Exodus 1:1–7",
   "qs": [
    {
     "th": "Deuteronomy 26:5, part of an ancient Israelite worship formula recited generations later, specifically recalls this small beginning — “a Syrian ready to perish was my father, and he went down into Egypt… few in number.” Israel's worship deliberately kept remembering how small and vulnerable this moment actually was.",
     "q": "Why might it have mattered for later generations of Israel to keep specifically remembering how small and uncertain this beginning actually was?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob receives specific, personal reassurance for a genuinely significant, fearful decision — God doesn't just tell him what to do, but addresses his fear directly (v. 3).",
     "q": "Is there a significant decision ahead of you where you need not just guidance, but the specific reassurance “fear not” speaks to?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "This list of seventy names, easy to skim past, represents the literal entire founding population of what would become the nation of Israel — an almost impossibly small beginning for such an enormous eventual story.",
     "q": "Where in your own life or work might something that currently looks impossibly small actually be a real, significant beginning?"
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
     "th": "Jacob's sacrifice at Beersheba (v. 1) continues a pattern begun by Abraham and Isaac at the very same location — worship handed down, quite literally, at the same physical spot across three generations.",
     "q": "Praise God today for something faithful that's been handed down to you across more than one generation of your own family or spiritual history."
    }
   ]
  }
 ]
},
// Day 107
{
 "ref": "Genesis 47",
 "tag": "Old Testament",
 "api": "genesis+47",
 "sum": [
  "Joseph's family is settled in Goshen as shepherds, and Jacob blesses Pharaoh.",
  "During the ongoing famine, Joseph's policies have the Egyptian people sell land, and eventually themselves, to Pharaoh for food.",
  "Jacob, nearing death, makes Joseph swear to bury him in Canaan, not Egypt."
 ],
 "nug": [
  {
   "h": "Shepherds, honestly identified as such to Pharaoh",
   "b": "Joseph coaches his brothers to tell Pharaoh plainly that they are shepherds (v. 3–4) — a profession Egyptians considered “an abomination” (46:34), yet the family doesn't hide or dress up their actual identity to gain favour."
  },
  {
   "h": "An old man blesses the most powerful ruler on earth",
   "b": "In a striking reversal of expected status, “Jacob blessed Pharaoh” (v. 7, 10) — an aged, formerly displaced shepherd blessing the most powerful monarch of the ancient world, the lesser typically blessing the greater (as Hebrews 7:7 later notes of Melchizedek and Abraham)."
  },
  {
   "h": "An economic policy with a lasting, complicated legacy",
   "b": "During the famine, Joseph's policy has the Egyptian people sell their land and eventually themselves into a form of service to Pharaoh in exchange for food (v. 13–26) — effective crisis management, but one that also permanently reshaped Egyptian society's structure."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 7:7 · Genesis 47:9 · Psalm 39:12",
   "qs": [
    {
     "th": "Hebrews 7:7's general principle — “the less is blessed of the better” — makes Jacob's blessing of Pharaoh here all the more striking; by ordinary worldly standards, an aged immigrant shepherd blessing a reigning monarch inverts the expected order entirely.",
     "q": "What does this inverted blessing suggest about how God's people are meant to relate to worldly power — neither grasping for it nor being diminished by lacking it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob's own assessment of his life to Pharaoh is remarkably honest and unflattering: “few and evil have the days of the years of my life been” (v. 9) — a summary far from triumphant, spoken by a man who had, in fact, just been remarkably blessed by God across decades.",
     "q": "Is there room in your own faith for an honest, even unflattering summary of a hard season, the way Jacob offers here, without it contradicting genuine trust in God's faithfulness?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's family doesn't hide their actual identity or profession to gain Pharaoh's favour, even knowing it was considered undesirable by Egyptian culture (v. 3–4, 46:34).",
     "q": "Where might you be tempted to hide or downplay part of your own identity or background to be more accepted, rather than being honest about it the way Jacob's family was?"
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
     "th": "Joseph's economic policy, while saving lives during genuine famine, also had complicated, lasting consequences for the Egyptian people's freedom — even wise, necessary action in a crisis can carry costs worth honestly acknowledging.",
     "q": "Is there a decision you made that was right or necessary at the time, but that also had real costs worth honestly naming rather than only defending?"
    }
   ]
  }
 ]
},
// Day 108
{
 "ref": "Psalm 103",
 "tag": "Psalms & Wisdom",
 "api": "psalms+103",
 "sum": [
  "David calls his own soul to bless the LORD and remember his many specific benefits — forgiveness, healing, redemption.",
  "Describes God's compassion as fatherly and his removal of sin as far as east is from west.",
  "Contrasts human life's brevity with God's everlasting mercy toward those who fear him."
 ],
 "nug": [
  {
   "h": "A command given to one's own soul",
   "b": "“Bless the LORD, O my soul, and forget not all his benefits” (v. 1–2) — David talks directly to himself, instructing his own inner life to remember and respond, rather than simply describing feelings as they arise."
  },
  {
   "h": "A specific, itemized list of benefits",
   "b": "Verses 3–5 don't stay vague — forgiveness, healing, redemption from destruction, crowning with lovingkindness, satisfaction, renewed youth “like the eagle's” — gratitude made concrete rather than generic."
  },
  {
   "h": "Distance used to measure mercy",
   "b": "“As far as the east is from the west, so far hath he removed our transgressions from us” (v. 12) uses east-west rather than north-south deliberately — north and south have a fixed midpoint (the poles), but east and west never meet, a distance genuinely without limit."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Micah 7:18–19 · Ephesians 1:7 · Luke 15:11–24",
   "qs": [
    {
     "th": "Micah 7:18–19 pictures God casting sins “into the depths of the sea” — a different but complementary image to this psalm's east-west distance — both reaching for language big enough to describe how completely and finally forgiveness removes what it forgives.",
     "q": "Read Micah 7:18–19 alongside Psalm 103:12. Why might Scripture need more than one image — distance, depth, removal — to describe something as complete as full forgiveness?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "“Like as a father pitieth his children, so the LORD pitieth them that fear him” (v. 13) uses one of the most tender, ordinary human relationships available as the closest comparison for God's compassion.",
     "q": "What does the specific tenderness of a good parent's compassion for a child add to your understanding of how God feels toward you?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's honest acknowledgment that human life is brief — “as for man, his days are as grass… the wind passeth over it, and it is gone” (v. 15–16) — is placed right next to God's “mercy… from everlasting to everlasting” (v. 17), a striking contrast in the same breath.",
     "q": "How does holding your own life's brevity and God's everlasting mercy together, rather than avoiding either thought, actually change how you might live today?"
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
     "th": "The psalm ends zooming out to the widest possible congregation — angels, God's hosts, “all his works in all places of his dominion” (v. 20–22) — before circling back to the very first line: “Bless the LORD, O my soul.”",
     "q": "Write your own version of verse 1, speaking directly to your own soul the way David does, naming specifically what you want it to remember today."
    }
   ]
  }
 ]
},
// Day 109
{
 "ref": "Genesis 48",
 "tag": "Old Testament",
 "api": "genesis+48",
 "sum": [
  "Jacob, old and nearly blind, formally adopts Joseph's two sons Ephraim and Manasseh as his own.",
  "He deliberately crosses his hands to bless the younger Ephraim above the older Manasseh, continuing the family pattern of the younger being chosen.",
  "Joseph tries to correct him, but Jacob insists he knows what he's doing."
 ],
 "nug": [
  {
   "h": "A dying man's memory sharpened, not dulled",
   "b": "Jacob, now old and with failing eyesight (v. 10), still clearly recalls God's appearance to him at Luz/Bethel decades earlier (v. 3–4) — the most significant spiritual memory of his life remaining vivid even as his physical senses fade."
  },
  {
   "h": "An adoption that changes the family's shape",
   "b": "Jacob formally adopts Joseph's two sons, Ephraim and Manasseh, as his own — “they shall be mine, as Reuben and Simeon” (v. 5) — effectively giving Joseph a double portion among the twelve tribes through his two sons."
  },
  {
   "h": "Crossed hands and a reversed blessing",
   "b": "When Jacob deliberately crosses his hands to bless the younger Ephraim ahead of the elder Manasseh (v. 13–19), Joseph tries to correct him, but Jacob insists — “I know it, my son, I know it” — echoing the reversal-of-the-elder pattern that has run through this entire family's story since Jacob and Esau."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 25:23 · Hebrews 11:21 · Romans 9:11–12",
   "qs": [
    {
     "th": "Hebrews 11:21 highlights this exact scene as an act of faith — “Jacob, when he was a dying, blessed both the sons of Joseph” — an old, nearly blind man still trusting God's pattern of choosing enough to deliberately act against expected birth order one final time.",
     "q": "Why do you think this specific moment, near the very end of Jacob's life, is the one Hebrews 11 chooses to highlight as an example of his faith?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob's clearest, sharpest memories in old age are of his encounters with God (v. 3–4), even as other faculties visibly fade — what mattered most stayed vivid longest.",
     "q": "What spiritual memory or experience of your own do you hope stays vivid for you, even if other things eventually fade?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's attempt to correct his father's crossed hands (v. 17–18) comes from a natural, reasonable assumption about how blessing should work — and Jacob's insistence shows that God's choices don't always follow the expected order.",
     "q": "Where might you be trying to correct or “fix” something that's actually unfolding exactly as God intends, even though it doesn't follow the order you'd expect?"
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
     "th": "Jacob's life, which began with him grasping for a blessing through deception (chapter 27), ends with him freely, deliberately giving blessings to his grandsons with full clarity and intention.",
     "q": "Thank God for growth you can see in your own life between how you once pursued something and how you approach it now."
    }
   ]
  }
 ]
},
// Day 110
{
 "ref": "Matthew 16",
 "tag": "New Testament",
 "api": "matthew+16",
 "sum": [
  "Jesus asks his disciples who people say he is, then who they say he is; Peter confesses him as the Christ, the Son of the living God.",
  "Jesus says he will build his church on this confession, then predicts his coming death and resurrection.",
  "When Peter objects, Jesus rebukes him sharply, then teaches that following him means self-denial and taking up a cross."
 ],
 "nug": [
  {
   "h": "A question that gets to the heart of everything",
   "b": "“Whom do men say that I the Son of man am?… But whom say ye that I am?” (v. 13, 15) — Jesus moves deliberately from general public opinion to a direct, personal question aimed at His closest followers."
  },
  {
   "h": "The confession that becomes a foundation",
   "b": "Peter's answer — “Thou art the Christ, the Son of the living God” (v. 16) — draws an immediate, strong response from Jesus: “upon this rock I will build my church; and the gates of hell shall not prevail against it” (v. 18)."
  },
  {
   "h": "The same man rebuked minutes later",
   "b": "Astonishingly, right after this high point, Peter rebukes Jesus for predicting His death, and Jesus responds, “Get thee behind me, Satan” (v. 21–23) — the same voice that just received the highest praise in the Gospels now hears the sharpest correction, within a single conversation."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 51:1 · John 6:68–69 · 1 Peter 2:4–6",
   "qs": [
    {
     "th": "1 Peter 2:4–6, written by this same Peter decades later, calls Jesus Himself “a living stone” and describers believers as “lively stones” built into a spiritual house — Peter's own later writing shows he never forgot, and kept developing, what Jesus said to him in this exact moment.",
     "q": "Read 1 Peter 2:4–6. How does it change your reading of Matthew 16 to know Peter was still building on this exact conversation decades later, in his own letters?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Peter goes from the Gospels' highest praise to its sharpest rebuke within the same conversation — real faith and real blind spots sitting extremely close together in the same person, in the same few minutes.",
     "q": "Where in your own life do genuine spiritual insight and a real blind spot currently sit closer together than you'd like to admit?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' first clear prediction of His own death and resurrection (v. 21) comes immediately after Peter's confession of who Jesus is — right understanding of His identity is what makes the harder truth about His mission possible to hear next.",
     "q": "Is there a hard truth you've been avoiding that might become easier to accept once you're more secure in who you already believe God to be?"
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
     "th": "“What is a man profited, if he shall gain the whole world, and lose his own soul?” (v. 26) is asked right after Jesus calls His followers to deny themselves and take up a cross — costly, unflinching honesty about what following Him actually requires.",
     "q": "Is there something you're currently pursuing that, if you're honest, might be costing you more than it's worth? Name it to God plainly."
    }
   ]
  }
 ]
},
// Day 111
{
 "ref": "Psalm 104",
 "tag": "Psalms & Wisdom",
 "api": "psalms+104",
 "sum": [
  "A long creation psalm celebrating God as sustainer of the natural world, echoing Genesis 1.",
  "Describes light, water, mountains, plants, sun and moon, and creatures of every kind as continually dependent on God.",
  "Ends with a lifelong commitment to keep singing praise to God."
 ],
 "nug": [
  {
   "h": "Genesis 1 turned into an extended song",
   "b": "This long psalm follows the creation account almost in order — light, waters, mountains, springs, vegetation, sun and moon, sea creatures, man's work — as if deliberately composed as a musical companion to Genesis 1, read back near the very start of this plan."
  },
  {
   "h": "God pictured wearing light as clothing",
   "b": "“Who coverest thyself with light as with a garment: who stretchest out the heavens like a curtain” (v. 2) — majestic, almost playful imagery of God dressed in the very first thing He created."
  },
  {
   "h": "Even wild, dangerous creatures included in praise",
   "b": "Leviathan, a great sea creature often associated with chaos and danger elsewhere in ancient literature, is here simply described as something God “made to play therein” (v. 26) — even the most fearsome parts of creation reduced to something almost playful under God's total sovereignty."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 1:1–31 · Job 38:1–41 · Colossians 1:16–17",
   "qs": [
    {
     "th": "Reading this psalm alongside Genesis 1 (read on Day 1 of this whole plan) turns the same material from narrative into worship — the same events, now sung rather than simply recounted.",
     "q": "How does it feel, this far into the plan, to circle back to Genesis 1's content in an entirely different form — as song rather than as history?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "“These wait all upon thee; that thou mayest give them their meat in due season” (v. 27) describes all creation, not just humanity, depending moment by moment on God's ongoing provision — not a one-time creation event, but continuous sustaining.",
     "q": "Where do you need to remember God's provision as an ongoing, moment-by-moment reality rather than something that happened once, long ago?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Thou sendest forth thy spirit, they are created: and thou renewest the face of the earth” (v. 30) ties the Spirit directly to ongoing creation and renewal, not just the original moment in Genesis 1.",
     "q": "Where might you need the Spirit's renewing work in your own life right now, not as a past event but as a present, ongoing reality?"
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
     "th": "The psalm's closing line — “I will sing unto the LORD as long as I live: I will sing praise to my God while I have my being” (v. 33) — is a lifelong commitment, not a momentary feeling.",
     "q": "Write your own version of this closing commitment — a promise to keep praising God across whatever years you have left, not just today."
    }
   ]
  }
 ]
},
// Day 112
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Fear not to go down",
   "b": "Before Jacob's family went to Egypt — into a story that would eventually include slavery — God told him plainly, “Fear not… I will go down with thee” (Genesis 46:3–4), presence promised before the hardest chapter had even begun."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Jacob's family settled in Egypt with reassurance rather than certainty, an old man blessed a king and crossed his hands to bless the younger son, and Peter swung from the Gospels' highest confession to its sharpest rebuke in one conversation.",
     "q": "Where this week did you notice God's pattern of choosing and blessing in ways that don't follow the expected order — in Jacob's crossed hands, or somewhere in your own life?"
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
     "th": "“Bless the LORD, O my soul, and forget not all his benefits” (Psalm 103:2) — a deliberate command to your own inner life, not just a passing feeling.",
     "q": "What specific benefit from God could you deliberately name and remember today, the way this psalm instructs?"
    }
   ]
  }
 ]
},
// Day 113
{
 "ref": "Genesis 49",
 "tag": "Old Testament",
 "api": "genesis+49",
 "sum": [
  "Jacob, near death, speaks individual, specific blessings and words over each of his twelve sons.",
  "He rebukes Reuben, Simeon and Levi for past failures, but blesses Judah with royal, Messianic language about a coming ruler.",
  "He gives instructions to be buried in the family tomb at Machpelah, then dies."
 ],
 "nug": [
  {
   "h": "A father's final words, one son at a time",
   "b": "Jacob, near death, speaks individually over each of his twelve sons (v. 1–28) — not identical blessings, but specific, sometimes hard-hitting words shaped by each son's actual character and history, including open rebuke for Reuben, Simeon and Levi."
  },
  {
   "h": "A sceptre that would not depart from Judah",
   "b": "“The sceptre shall not depart from Judah, nor a lawgiver from between his feet, until Shiloh come; and unto him shall the gathering of the people be” (v. 10) — one of the Old Testament's clearest early Messianic prophecies, naming the specific tribal line kingship, and ultimately the Messiah, would come through."
  },
  {
   "h": "Joseph described with unusual tenderness",
   "b": "Jacob's words over Joseph (v. 22–26) are markedly warmer and longer than most of the others — “the archers have sorely grieved him… but his bow abode in strength” — blessing shaped by everything Jacob knew of Joseph's suffering and endurance."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Micah 5:2 · Revelation 5:5 · Hebrews 7:14",
   "qs": [
    {
     "th": "Revelation 5:5 identifies Jesus directly as “the Lion of the tribe of Juda,” deliberately picking up the imagery Jacob uses for Judah here (v. 9, “Judah is a lion's whelp”) — a blessing spoken over one son becoming, centuries later, a title for the Messiah Himself.",
     "q": "Read Revelation 5:5. What does it mean to you that a title given to Jesus in Revelation was first spoken as a blessing over a specific, flawed son almost two thousand years earlier?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jacob doesn't soften his words for Reuben, Simeon or Levi — their specific past failures (chapters 35, 34) shape what he says about their futures, honest consequence rather than generic blessing for its own sake.",
     "q": "Is there an honest word — not cruel, but truthful about consequence — that you need to hear or speak about a pattern in your own life or a relationship?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Each blessing in this chapter is deeply specific to the individual son — no generic formula repeated twelve times, but words shaped by who each man actually was.",
     "q": "Where might you need to offer someone a specific, personal word rather than a generic one, the way Jacob does for each of his sons?"
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
     "th": "Even in a chapter largely about consequence and prophecy, Jacob's closing instruction is simple and worshipful — be buried with his fathers, trusting the same promise they trusted (v. 29–32).",
     "q": "Praise God today for the specific promise you're trusting Him for, the way generations of this family kept trusting the same promise across their whole lives."
    }
   ]
  }
 ]
},
// Day 114
{
 "ref": "Genesis 50",
 "tag": "Old Testament",
 "api": "genesis+50",
 "sum": [
  "Joseph mourns his father Jacob deeply and has him buried in Canaan as promised.",
  "After Jacob's death, the brothers fear Joseph will now take revenge, but he reassures them: “ye thought evil against me; but God meant it unto good.”",
  "Joseph lives to see his family flourish in Egypt, and before he dies asks that his own bones eventually be carried to the promised land."
 ],
 "nug": [
  {
   "h": "Grief expressed publicly and at length",
   "b": "Joseph weeps over his father and has him embalmed in the Egyptian manner (v. 1–3), and the mourning in Canaan is so intense that a local place is renamed Abel-mizraim, “the mourning of Egypt” (v. 11) — grief given real, visible space rather than rushed past."
  },
  {
   "h": "A fear that resurfaces after the father is gone",
   "b": "With Jacob dead, the brothers grow afraid Joseph might finally take revenge now that the one person holding the family together is gone (v. 15) — old guilt, apparently never fully resolved even after years of reconciliation, surfacing again."
  },
  {
   "h": "The theology of the whole book summarized in one verse",
   "b": "“But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive” (v. 20) — arguably the single clearest statement in all of Genesis of how God's purposes work through, rather than around, human wrongdoing."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 45:5–8 · Romans 8:28 · Acts 2:23",
   "qs": [
    {
     "th": "Acts 2:23 uses nearly identical logic centuries later about the greatest wrong in history — Jesus “delivered by the determinate counsel and foreknowledge of God” and yet crucified “by wicked hands” — real human evil and God's sovereign purpose both fully true at once, exactly as in Joseph's story.",
     "q": "Read Acts 2:23. How does Joseph's smaller-scale story help you understand this same pattern at work in the far larger story of the cross?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The brothers' fear resurfacing after Jacob's death (v. 15) shows that reconciliation, even genuine reconciliation, doesn't always erase every trace of old guilt or fear permanently on the first pass.",
     "q": "Is there an old guilt or fear in a relationship that you thought was fully resolved, that might need reassurance again, the way Joseph offers his brothers here?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Joseph's response to his brothers' renewed fear isn't irritation at having to reassure them again, but tears and kind, patient words (v. 17–21) — extending grace repeatedly, not just once.",
     "q": "Where might you need to extend patient reassurance again to someone, rather than being frustrated that an old wound needs revisiting?"
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
     "th": "Genesis ends not in the promised land but in a coffin in Egypt (v. 26), Joseph's bones waiting, by his own instruction, for a promise he trusted but wouldn't see fulfilled in his lifetime.",
     "q": "Is there a promise you're trusting God for that you may not see fulfilled yourself? Bring that honestly to Him, the way Joseph's final instructions show unresolved trust rather than false certainty."
    }
   ]
  }
 ]
},
// Day 115
{
 "ref": "Psalm 107",
 "tag": "Psalms & Wisdom",
 "api": "psalms+107",
 "sum": [
  "Calls the redeemed to give thanks and tell their stories of rescue.",
  "Describes four groups in distress — wanderers, prisoners, the sick, and sailors in a storm — each crying to God and being delivered.",
  "Closes urging the wise to observe these patterns and understand God's steadfast love."
 ],
 "nug": [
  {
   "h": "Four vignettes, one repeated rescue",
   "b": "The psalm walks through four different groups in distress — desert wanderers, prisoners in darkness, the sick, sailors in a storm (v. 4–32) — each following the identical pattern: real trouble, a cry to the LORD, and deliverance, with the refrain “then they cried unto the LORD in their trouble, and he delivered them out of their distresses” repeated four times."
  },
  {
   "h": "An invitation for the rescued to actually say so",
   "b": "“Let the redeemed of the LORD say so, whom he hath redeemed from the hand of the enemy” (v. 2) — the psalm isn't just describing rescue, it's actively inviting those who've experienced it to testify to it out loud."
  },
  {
   "h": "A closing call to genuine understanding",
   "b": "“Whoso is wise, and will observe these things, even they shall understand the lovingkindness of the LORD” (v. 43) treats paying attention to these patterns of deliverance as something that actually produces wisdom, not just comfort."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 14:10–14 · Jonah 2:1–2 · James 5:13",
   "qs": [
    {
     "th": "Jonah's prayer from inside the fish (Jonah 2:1–2) follows this exact same pattern — real trouble, honest crying out, deliverance — as if he was consciously praying in the shape this psalm describes, even from the strangest possible location.",
     "q": "Read Jonah 2:1–2. How does knowing this psalm's pattern shows up even in as extreme a situation as Jonah's help you trust it in your own more ordinary troubles?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Each of the four groups in this psalm experiences a different kind of trouble — physical danger, captivity, sickness, natural disaster — suggesting the pattern of crying out and being heard isn't limited to one specific category of hardship.",
     "q": "Which of these four situations — wandering, captivity, sickness, or a storm — most resembles what you're currently facing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Verse 2's instruction to “say so” — to actually verbalize and testify to rescue you've experienced — suggests that keeping deliverance private, rather than sharing it, misses part of the point.",
     "q": "Is there a rescue or deliverance in your own story that you've never actually said out loud to anyone? Who could you tell?"
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
     "th": "The refrain repeated four times — “then they cried unto the LORD in their trouble, and he delivered them” — is worth praying as your own testimony if it's true of something in your life.",
     "q": "Thank God specifically for a time you cried out in real trouble and were delivered, using this psalm's own words if they fit."
    }
   ]
  }
 ]
},
// Day 116
{
 "ref": "Exodus 1",
 "tag": "Old Testament",
 "api": "exodus+1",
 "sum": [
  "Israel multiplies greatly in Egypt; a new king who doesn't remember Joseph enslaves them with harsh labour out of fear.",
  "Pharaoh orders Hebrew midwives to kill newborn baby boys, but they fear God and refuse.",
  "Pharaoh then commands that all Hebrew baby boys be thrown into the Nile."
 ],
 "nug": [
  {
   "h": "A book beginning with an ending",
   "b": "Exodus opens by naming the sons of Israel who came to Egypt (v. 1–5) — the exact list from Genesis 46 — deliberately connecting this new book to where the last one left off, centuries of silence bridged in a single sentence (v. 6–7)."
  },
  {
   "h": "A king who “knew not Joseph”",
   "b": "Verse 8's simple phrase marks an enormous shift — whatever loyalty or debt Egypt once owed Joseph's family has been entirely forgotten within a few generations, and the very fruitfulness God promised (“the children of Israel were fruitful, and increased abundantly,” v. 7) becomes the new Pharaoh's justification for oppression."
  },
  {
   "h": "Two midwives who feared God more than Pharaoh",
   "b": "Shiphrah and Puah, ordinary Hebrew midwives, quietly refuse Pharaoh's direct order to kill newborn Hebrew boys — “the midwives feared God, and did not as the king of Egypt commanded them” (v. 17) — named individuals, in a text otherwise dominated by an unnamed, powerful king."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 7:17–19 · Exodus 1:12 · Proverbs 21:30",
   "qs": [
    {
     "th": "Acts 7:17–19 looks back on this exact chapter, noting that “the more they afflicted them, the more they multiplied and grew” (v. 12) — oppression, intended to control and diminish, having the opposite effect on a people God was actively blessing.",
     "q": "Where have you seen pressure or opposition meant to diminish something actually cause it to grow instead, whether in Scripture or your own experience?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Shiphrah and Puah are named individuals with real courage, recorded permanently in Scripture, while the powerful Pharaoh who opposed them remains unnamed — a quiet reversal of whose story actually mattered most.",
     "q": "Where might quiet, unglamorous courage — like these two midwives' — be more significant in God's eyes than it currently feels to you?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The midwives' fear of God is described as directly overriding their fear of the most powerful human ruler in their world (v. 17, 21) — reverence for God functioning as real, practical courage under real danger.",
     "q": "Where do you need reverence for God to outweigh fear of a person or situation that currently feels more powerful or intimidating?"
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
     "th": "The midwives' quiet defiance protected countless children they would likely never personally know the outcomes of.",
     "q": "Pray today for people doing quiet, risky, unglamorous good in situations you may never see the full results of."
    }
   ]
  }
 ]
},
// Day 117
{
 "ref": "Matthew 17",
 "tag": "New Testament",
 "api": "matthew+17",
 "sum": [
  "Jesus is transfigured before Peter, James and John, appearing radiant alongside Moses and Elijah, with the Father's voice confirming him as his Son.",
  "Coming down the mountain, Jesus heals a boy the disciples couldn't, teaching about the power of even small faith.",
  "He predicts his death again and, through a miraculous coin in a fish's mouth, pays the temple tax."
 ],
 "nug": [
  {
   "h": "A glimpse of who Jesus really was all along",
   "b": "On the mountain, Jesus' “face did shine as the sun, and his raiment was white as the light” (v. 2) while Moses and Elijah appear beside Him — the Transfiguration pulling back the curtain, briefly, on the glory that had been present in Jesus the whole time."
  },
  {
   "h": "Two witnesses to the whole story",
   "b": "Moses (representing the Law) and Elijah (representing the Prophets) both appear with Jesus — the entire Old Testament, in a sense, standing beside Him and, per Luke 9:31, discussing His coming death in Jerusalem."
  },
  {
   "h": "A father's honest, mixed confession of faith",
   "b": "The father of a boy the disciples couldn't heal cries out, “Lord, I believe; help thou mine unbelief” (Mark 9:24, the parallel account) — Matthew's version records Jesus' response about faith “as a grain of mustard seed” (v. 20), addressing exactly this kind of small, honest, mixed faith."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 24:15–18 · 2 Peter 1:16–18 · Deuteronomy 18:15",
   "qs": [
    {
     "th": "Peter, an eyewitness to this exact scene, later writes that he and the others “were eyewitnesses of his majesty” and heard the Father's voice “when we were with him in the holy mount” (2 Peter 1:16–18) — still describing this moment as foundational to his faith, decades afterward.",
     "q": "Read 2 Peter 1:16–18. Why do you think this particular experience stayed so vivid and central to Peter's faith for the rest of his life?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Peter's instinct on the mountain is to want to stay, building three shelters to hold onto the moment (v. 4) — an entirely understandable desire to freeze a mountaintop experience rather than come back down to ordinary, harder life below.",
     "q": "Have you ever wanted to stay in a spiritual “mountaintop” moment rather than come back down to ordinary life? What helped you eventually come down?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' response to the disciples' failure to heal the boy — “because of your unbelief”, followed by “if ye have faith as a grain of a mustard seed… nothing shall be impossible unto you” (v. 20) — suggests even small, genuine faith matters more than its apparent size.",
     "q": "Where do you need to trust that even small, uncertain faith is enough to bring to a situation that currently feels impossible?"
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
     "th": "Immediately after the glory of the mountain, Jesus comes down to a scene of real failure — disciples unable to heal, a frustrated crowd, a desperate father — and doesn't avoid it or delay dealing with it.",
     "q": "Is there an ordinary failure or frustration you've been avoiding facing honestly, even while genuinely growing spiritually in other areas? Name it to God."
    }
   ]
  }
 ]
},
// Day 118
{
 "ref": "Psalm 111",
 "tag": "Psalms & Wisdom",
 "api": "psalms+111",
 "sum": [
  "An alphabetic psalm praising God's great, remembered works and covenant faithfulness.",
  "Highlights God's provision and trustworthy commandments.",
  "Ends with the well-known line: “The fear of the LORD is the beginning of wisdom.”"
 ],
 "nug": [
  {
   "h": "An acrostic praising specific works",
   "b": "Like several psalms in this plan, this one follows the Hebrew alphabet letter by letter, but its focus stays remarkably concrete — God's works, covenant, provision, redemption — rather than abstract praise."
  },
  {
   "h": "A covenant God remembers forever",
   "b": "“He hath given meat unto them that fear him: he will ever be mindful of his covenant” (v. 5) — provision and covenant faithfulness named in the same breath, God's memory of His promises described as permanent, not conditional on circumstances."
  },
  {
   "h": "A famous closing line quoted throughout Scripture",
   "b": "“The fear of the LORD is the beginning of wisdom: a good understanding have all they that do his commandments” (v. 10) is echoed almost word for word in Proverbs 9:10 and Job 28:28 — a foundational principle stated across multiple books."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Proverbs 9:10 · Job 28:28 · Colossians 2:2–3",
   "qs": [
    {
     "th": "This exact phrase — the fear of the LORD as the beginning of wisdom — appears in at least three different Old Testament books (here, Proverbs, Job), spoken by different authors across different centuries, as if it were simply common, settled wisdom everyone agreed on.",
     "q": "Why might it matter that this specific truth shows up independently across multiple biblical authors rather than being unique to just one voice?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's praise stays deliberately concrete — specific works, specific provision, specific covenant faithfulness — rather than staying at the level of vague, general praise.",
     "q": "Could you make your own praise more concrete today, naming specific things God has actually done rather than only general statements about His goodness?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“The works of his hands are verity and judgment; all his commandments are sure” (v. 7) ties God's actions and His commands together as equally trustworthy — what He does and what He asks both flow from the same reliable character.",
     "q": "Is there a command of God's that's easier to trust once you connect it to His track record of trustworthy action, rather than treating it as an isolated rule?"
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
     "th": "The psalm opens “I will praise the LORD with my whole heart, in the assembly of the upright, and in the congregation” (v. 1) — praise intended for both private devotion and shared, public worship.",
     "q": "Write a short prayer of praise you'd be equally comfortable praying alone and saying out loud among other believers."
    }
   ]
  }
 ]
},
// Day 119
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Feared God more than Pharaoh",
   "b": "Two ordinary midwives, Shiphrah and Puah, are named and remembered permanently in Scripture for quietly refusing a powerful king's order because they “feared God” more (Exodus 1:17)."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week closed the book of Genesis — Jacob's final blessings, Joseph's death, a family's whole story summed up in one verse about evil meant for good — and opened Exodus with a forgotten debt and two courageous midwives.",
     "q": "Where this week did the shift from Genesis to Exodus — promise kept, then apparently forgotten by the powers around them — speak into a season of your own life where faithfulness felt unnoticed?"
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
     "th": "“Let the redeemed of the LORD say so” (Psalm 107:2) — an invitation to actually voice a rescue, not just privately remember it.",
     "q": "Is there someone you could tell this week about a specific way God has rescued or provided for you?"
    }
   ]
  }
 ]
},
// Day 120
{
 "ref": "Exodus 2",
 "tag": "Old Testament",
 "api": "exodus+2",
 "sum": [
  "Moses is born, hidden, and eventually placed in a basket on the Nile; Pharaoh's own daughter finds and raises him.",
  "As an adult, Moses kills an Egyptian abusing a Hebrew slave and flees to Midian, where he marries and becomes a shepherd.",
  "Meanwhile, Israel's groaning under slavery reaches God, who remembers his covenant."
 ],
 "nug": [
  {
   "h": "A basket that shares its name with Noah's ark",
   "b": "The Hebrew word for the “ark” of bulrushes Moses' mother makes (v. 3) is the exact same word used for Noah's ark in Genesis — a tiny vessel, built to carry one child safely through danger, echoing the far larger one built to carry a whole family."
  },
  {
   "h": "An unlikely rescuer from inside the enemy's own house",
   "b": "Pharaoh's own daughter finds baby Moses, recognizes him as a Hebrew child, and chooses to raise him anyway (v. 5–10) — the exact system built to destroy Hebrew infants becomes, through one woman's compassion, the means of preserving the very child who would end it."
  },
  {
   "h": "A rescuer who becomes a killer, then a fugitive",
   "b": "As an adult, Moses kills an Egyptian he sees beating a Hebrew (v. 11–12), then flees to Midian after it becomes known — forty years (per Acts 7:30) between this failed, violent attempt at deliverance and his eventual calling."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Acts 7:20–29 · Hebrews 11:24–26 · Exodus 2:23–25",
   "qs": [
    {
     "th": "Hebrews 11:24–26 reads Moses' choice to identify with his own oppressed people, even having been “son of Pharaoh's daughter,” as an act of faith — choosing “rather to suffer affliction with the people of God, than to enjoy the pleasures of sin for a season.”",
     "q": "Read Hebrews 11:24–26. What does it cost you, if anything, to identify with people or a cause that offers less comfort or status than an alternative you could choose instead?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' first attempt to deliver his people ends in violence, exposure and forty years of exile — a long, humbling gap between a well-intentioned but premature action and his actual calling.",
     "q": "Is there a time you acted on a genuine desire to help or fix something, but the timing or method was wrong, leading to a long unexpected detour?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter ends simply: “God heard their groaning, and God remembered his covenant… and God looked upon the children of Israel, and God had respect unto them” (v. 24–25) — four consecutive statements of God's attentiveness, even during decades of apparent silence.",
     "q": "Where do you need to trust God's attentiveness during a season that currently feels like silence?"
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
     "th": "Forty years pass in the gap between Moses fleeing Egypt and God calling him at the burning bush — an enormous stretch of ordinary, apparently unremarkable shepherding life before his real calling became clear.",
     "q": "Sit quietly and consider: is there a long, ordinary season in your own life that might actually be preparation, even though it doesn't feel significant right now?"
    }
   ]
  }
 ]
},
// Day 121
{
 "ref": "Exodus 3",
 "tag": "Old Testament",
 "api": "exodus+3",
 "sum": [
  "God appears to Moses in a burning bush that isn't consumed and calls him to lead Israel out of Egypt.",
  "God reveals his name, “I AM THAT I AM,” and promises to be with Moses.",
  "Moses is told what to say to Pharaoh and the elders of Israel, and given signs to prove his calling."
 ],
 "nug": [
  {
   "h": "A bush that burned without being consumed",
   "b": "“The bush was not consumed” (v. 2) — the sign that gets Moses' attention isn't the fire itself, common enough in a dry wilderness, but fire that doesn't do what fire normally does, burning without destroying."
  },
  {
   "h": "Holy ground in the middle of an ordinary workday",
   "b": "“Put off thy shoes from off thy feet, for the place whereon thou standest is holy ground” (v. 5) — spoken to a man tending sheep on an entirely unremarkable mountainside, on what started as a completely ordinary day."
  },
  {
   "h": "A name that resists being fully defined",
   "b": "“I AM THAT I AM” (v. 14) — God's self-given name refuses to be reduced to a description or a comparison to anything else; He simply is, self-existing, not defined by relation to something greater."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 6:2–3 · John 8:58 · Acts 7:30–34",
   "qs": [
    {
     "th": "Jesus applies this exact divine name to Himself — “Before Abraham was, I am” (John 8:58) — using the precise phrase God gives Moses here, a claim His Jewish listeners immediately understood as claiming equality with God (they picked up stones in response).",
     "q": "Read John 8:58 alongside Exodus 3:14. What does it mean to you that Jesus deliberately used this exact, unmistakable divine name for Himself?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' calling interrupts an entirely ordinary task — tending sheep, a job he'd been doing for decades by this point — God's most significant appearance to him coming in the middle of routine work, not a dramatic spiritual retreat.",
     "q": "Where in your own ordinary, routine work or life might God be more present or active than you typically expect?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' objections — who am I, what's your name, what if they don't believe me (v. 11, 13; 4:1) — are met not with impatience but with patient reassurance and repeated promises of presence (v. 12).",
     "q": "What objection have you been raising to something God seems to be calling you toward, and how does God's patience with Moses' objections speak to your own hesitation?"
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
     "th": "The instruction to remove his shoes (v. 5) is a physical, embodied act of reverence — not just an internal feeling, but something Moses had to actually do with his body.",
     "q": "Take a moment of physical stillness — removing a distraction, sitting differently, whatever marks the moment — and simply acknowledge God's presence before continuing your day."
    }
   ]
  }
 ]
},
// Day 122
{
 "ref": "Psalm 112",
 "tag": "Psalms & Wisdom",
 "api": "psalms+112",
 "sum": [
  "Describes the blessed life of a person who fears the LORD and delights in his commands.",
  "Marked by generosity, stability, and fearlessness even in bad news.",
  "Contrasts the lasting righteousness of such a person with the fading hopes of the wicked."
 ],
 "nug": [
  {
   "h": "A companion piece to the psalm before it",
   "b": "This acrostic psalm directly parallels Psalm 111's structure and themes, but shifts focus from God's own character to the character of a person who fears Him — the two psalms function almost like matching portraits."
  },
  {
   "h": "Generosity as a mark of blessing, not a burden",
   "b": "“A good man sheweth favour, and lendeth… he hath dispersed, he hath given to the poor” (v. 5, 9) — generosity described not as sacrifice but as a natural overflow of the blessed life this psalm describes."
  },
  {
   "h": "Unafraid of bad news",
   "b": "“He shall not be afraid of evil tidings: his heart is fixed, trusting in the LORD” (v. 7) — a striking claim, not that bad news won't come, but that a heart genuinely anchored in God can hear it without being destabilized by it."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Proverbs 11:24–25 · 2 Corinthians 9:6–8 · Isaiah 26:3",
   "qs": [
    {
     "th": "Paul's teaching on generous giving — “he which soweth bountifully shall reap also bountifully… God loveth a cheerful giver” (2 Corinthians 9:6–7) — reflects this psalm's picture of generosity as blessing overflowing outward, not scarcity to be protected.",
     "q": "How does thinking of generosity as overflow, rather than sacrifice, change your own instinct toward giving?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "“His heart is fixed, trusting in the LORD” (v. 7) describes stability that comes specifically from where trust is placed, not from circumstances happening to be good.",
     "q": "What “evil tidings” are you currently anxious about receiving, and what would a heart “fixed” on God, rather than on the outcome, actually look like in that anxiety?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Unto the upright there ariseth light in the darkness” (v. 4) suggests light appearing specifically within darkness, not only after it has fully passed.",
     "q": "Where might you need to trust for light to appear within a current dark situation, rather than waiting for the darkness to end first?"
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
     "th": "The blessed life this psalm describes is marked less by personal accumulation and more by generosity that reaches others — “his righteousness endureth for ever” tied directly to giving to the poor (v. 9).",
     "q": "Thank God for a specific way you've been able to be generous recently, however small, and ask for opportunities to keep being so."
    }
   ]
  }
 ]
},
// Day 123
{
 "ref": "Exodus 4",
 "tag": "Old Testament",
 "api": "exodus+4",
 "sum": [
  "God gives Moses miraculous signs to convince the Israelites, and provides Aaron as a spokesman for his hesitance about speaking.",
  "On the way back to Egypt, a strange incident nearly costs Moses his life until his wife Zipporah circumcises their son.",
  "Moses and Aaron gather Israel's elders, who believe when they see the signs and hear that God has seen their suffering."
 ],
 "nug": [
  {
   "h": "Signs given to overcome specific doubt",
   "b": "God gives Moses three tangible signs — staff to serpent, hand to leprosy and back, water to blood (v. 1–9) — each addressing his stated fear that “they will not believe me”, meeting doubt with concrete, repeatable evidence rather than simply repeating the command."
  },
  {
   "h": "An objection about speech, and a surprising answer",
   "b": "Moses protests he is “slow of speech, and of a slow tongue” (v. 10); God's response isn't to fix Moses' speech but to ask, “Who hath made man's mouth?” (v. 11) and provide Aaron as a spokesman instead — the limitation isn't removed, but worked around."
  },
  {
   "h": "A strange, unsettling episode with Moses' family",
   "b": "In one of Scripture's most puzzling short passages, “the LORD met him, and sought to kill him” until Zipporah circumcises their son (v. 24–26) — widely understood as God enforcing the covenant sign Moses himself, of all people, had apparently neglected to apply to his own household."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 1:26–29 · 2 Corinthians 12:9 · Genesis 17:9–14",
   "qs": [
    {
     "th": "Paul's observation that God chooses “the foolish things… the weak things… that no flesh should glory in his presence” (1 Corinthians 1:27–29) fits Moses' own self-assessment as inadequate for the task almost exactly — the very weakness he names becomes part of the point.",
     "q": "How does God's choice to work through Moses' actual limitation, rather than removing it, encourage you about a limitation of your own?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' objections here aren't quickly or easily overcome — he raises four separate concerns across this conversation with God (3:11, 3:13, 4:1, 4:10), and even after all the reassurance, still asks God to “send, I pray thee, by the hand of him whom thou wilt send” (v. 13), essentially asking for someone else.",
     "q": "Have you ever kept raising objection after objection to something you knew, deep down, God was asking of you? What finally moved you forward, or what's still holding you back?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God's anger at Moses' repeated reluctance (v. 14) is real, but doesn't cancel the calling — Aaron is provided as a genuine accommodation, not a punishment for Moses' hesitation.",
     "q": "Where might God be providing you an accommodation — help, a partner, an easier path — for a weakness, rather than requiring you to overcome it entirely alone first?"
    }
   ]
  },
  {
   "id": "prayer",
   "t": "Prayer: obedience",
   "m": "3–5 min",
   "xr": "",
   "qs": [
    {
     "th": "Despite every objection, Moses does eventually go — “And Moses went and returned to Jethro his father in law, and said unto him, Let me go, I pray thee” (v. 18) — obedience that follows genuine wrestling, not instant, easy compliance.",
     "q": "Is there something you've been wrestling with honestly, the way Moses did, that you could take one concrete step toward obeying today, even without every question resolved?"
    }
   ]
  }
 ]
},
// Day 124
{
 "ref": "Matthew 18",
 "tag": "New Testament",
 "api": "matthew+18",
 "sum": [
  "Jesus teaches that greatness in the kingdom looks like childlike humility, and warns against causing “little ones” to stumble.",
  "He tells the parable of the lost sheep and gives clear steps for addressing sin between believers.",
  "Peter asks about forgiving others; Jesus answers with the need for unlimited forgiveness, illustrated by the parable of the unforgiving servant."
 ],
 "nug": [
  {
   "h": "A child placed in the middle of an argument about greatness",
   "b": "When the disciples ask who is greatest in the kingdom, Jesus sets a literal child among them and says, “Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven” (v. 2–4) — humility and dependence, not achievement, as the actual measure."
  },
  {
   "h": "A shepherd who leaves ninety-nine for one",
   "b": "The parable of the lost sheep (v. 12–14) pictures God's attention deliberately, disproportionately focused on the one that's missing, not just satisfied with the ninety-nine who are safe."
  },
  {
   "h": "A clear process for a hard conversation",
   "b": "Verses 15–17 lay out specific, escalating steps for addressing a sin between believers — privately first, then with witnesses, then before the church — practical structure for something most people instinctively avoid or handle poorly."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Ezekiel 34:11–16 · Luke 15:4–7 · Colossians 3:13",
   "qs": [
    {
     "th": "Ezekiel 34:11–16 pictures God Himself, centuries earlier, personally searching for lost and scattered sheep when Israel's own leaders had failed to — the same shepherding heart Jesus describes in this parable, already promised long before He told it.",
     "q": "Read Ezekiel 34:11–16. How does knowing this shepherding heart was promised long before Jesus told the parable change how you hear it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The instruction to forgive “until seventy times seven” (v. 21–22) isn't a literal count to stop at, but a way of saying forgiveness shouldn't be tracked or rationed at all.",
     "q": "Is there someone you've been quietly keeping count with, even loosely, rather than genuinely releasing the tally altogether?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The parable of the unforgiving servant (v. 23–35) shows someone forgiven an enormous debt immediately turning around and refusing to forgive a much smaller one — forgetting how much they themselves had just been given.",
     "q": "Where might remembering how much you've personally been forgiven change how readily you extend forgiveness to someone who owes you far less?"
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
     "th": "The process in verses 15–17 begins with going privately to the person first — not gossiping, not avoiding, but direct, private honesty as the very first step.",
     "q": "Is there a conflict you've been avoiding addressing directly, going instead to others about it or simply avoiding the person? What would the first, private step actually look like?"
    }
   ]
  }
 ]
},
// Day 125
{
 "ref": "Psalm 116",
 "tag": "Psalms & Wisdom",
 "api": "psalms+116",
 "sum": [
  "Expresses love for God because he heard the psalmist's cry when death and distress were close.",
  "Asks what can be given back to God for his many benefits, resolving to call on his name and pay vows publicly.",
  "Declares that the death of God's saints is precious in his sight."
 ],
 "nug": [
  {
   "h": "Love expressed as a direct response",
   "b": "“I love the LORD, because he hath heard my voice and my supplications” (v. 1) — love here isn't abstract devotion but a specific response to having actually been heard in a moment of real need."
  },
  {
   "h": "Death described as something narrowly escaped",
   "b": "“The sorrows of death compassed me, and the pains of hell gat hold upon me” (v. 3) suggests this psalm was written after a genuinely life-threatening experience, not a minor difficulty."
  },
  {
   "h": "A question that gets a specific answer",
   "b": "“What shall I render unto the LORD for all his benefits toward me?” (v. 12) is answered concretely in the following verses — taking “the cup of salvation,” calling on His name, paying vows publicly — gratitude expressed in specific action, not just feeling."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 8:31–32 · 1 Corinthians 10:16 · Acts 2:24",
   "qs": [
    {
     "th": "“Precious in the sight of the LORD is the death of his saints” (v. 15) is a striking claim — not that death itself is good, but that even a believer's death matters deeply to God, watched over rather than overlooked.",
     "q": "How does knowing your own eventual death is described as “precious” to God, not just an ending, change how you think about mortality?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's honesty about being “brought low” (v. 6) before being helped shows real vulnerability admitted openly, not glossed over on the way to the eventual praise.",
     "q": "Is there a low point you've been reluctant to admit honestly, even though naming it plainly is exactly what this psalm models?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“I will pay my vows unto the LORD now in the presence of all his people” (v. 14, 18) treats gratitude as something meant to be expressed publicly, among a community, not only privately.",
     "q": "Is there a way you could express gratitude to God more publicly — with others, not just privately — the way this psalm describes?"
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
     "th": "“Return unto thy rest, O my soul; for the LORD hath dealt bountifully with thee” (v. 7) is another instance of speaking directly to one's own soul, instructing it toward rest based on evidence already given.",
     "q": "Speak this verse to your own soul today, naming one specific way God has “dealt bountifully” with you recently."
    }
   ]
  }
 ]
},
// Day 126
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Holy ground on an ordinary day",
   "b": "Moses' most significant encounter with God happened in the middle of an entirely ordinary workday, tending sheep (Exodus 3:1–2) — holiness breaking into the routine, not replacing it."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Moses moved from a basket on the Nile to a burning bush to reluctant, honest obedience, and you read about a shepherd who leaves ninety-nine for one and a psalm about a love that responds to actually being heard.",
     "q": "Where this week did you notice that God works with people's real objections and limitations — Moses' repeated hesitation — rather than requiring them to be resolved first?"
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
     "th": "“Return unto thy rest, O my soul; for the LORD hath dealt bountifully with thee” (Psalm 116:7) — rest offered on the basis of evidence, not wishful thinking.",
     "q": "What evidence of God's bountiful dealing with you could you rest in today, specifically?"
    }
   ]
  }
 ]
},
// Day 127
{
 "ref": "Exodus 5",
 "tag": "Old Testament",
 "api": "exodus+5",
 "sum": [
  "Moses and Aaron ask Pharaoh to let Israel go, but he refuses and increases their workload instead, removing the straw for bricks.",
  "Israelite foremen are beaten for failing to meet the harsher quota, and they blame Moses and Aaron.",
  "Moses, discouraged, asks God why things have gotten worse instead of better."
 ],
 "nug": [
  {
   "h": "A first request that makes things worse, not better",
   "b": "Moses and Aaron's very first approach to Pharaoh — “Let my people go” (v. 1) — doesn't lead to freedom, but to harsher treatment: Pharaoh accuses Israel of laziness and removes the straw needed for brick-making while keeping the same quota (v. 6–19)."
  },
  {
   "h": "Pharaoh's dismissive question about God",
   "b": "“Who is the LORD, that I should obey his voice… I know not the LORD” (v. 2) sets up the entire rest of the plague narrative as, in part, an extended answer to this exact question — Pharaoh will come to know exactly who the LORD is."
  },
  {
   "h": "Israelite foremen caught in the middle, beaten for others' failure",
   "b": "The Israelite officers, beaten for not meeting an impossible quota created by Pharaoh's own new policy, turn their frustration on Moses and Aaron (v. 15–21) — the people Moses came to free initially blame him for making things worse."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 3:19–20 · Romans 5:20 · John 16:33",
   "qs": [
    {
     "th": "God had already told Moses back at the burning bush that Pharaoh would not let the people go easily, “not by a mighty hand” (Exodus 3:19) — this discouraging first setback wasn't a surprise to God, even though it clearly was to Moses and the people.",
     "q": "Read Exodus 3:19–20 again. How does knowing God had already warned Moses that this would be hard change how you read this chapter's discouragement?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' response to this setback is brutally honest with God — “Lord, wherefore hast thou so evil entreated this people? why is it that thou hast sent me?” (v. 22–23) — real frustration voiced directly rather than suppressed.",
     "q": "Is there a situation where following what you believed God asked of you seems to have made things worse, at least at first? How honestly have you brought that frustration to Him?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The Israelite foremen's anger at Moses (v. 20–21) is understandable but misdirected — aimed at the messenger of freedom rather than at Pharaoh, who actually created the harsher conditions.",
     "q": "Where might you be tempted to blame someone for a difficulty that's actually caused by something or someone else entirely?"
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
     "th": "Moses' honest complaint to God — openly questioning why things had gotten worse rather than better — is met later in the very next chapter with patient reassurance, not rebuke for the honesty.",
     "q": "Bring your own honest frustration about a situation that seems to have worsened despite your best effort to do right, trusting, as Moses eventually finds, that honesty doesn't push God away."
    }
   ]
  }
 ]
},
// Day 128
{
 "ref": "Exodus 6",
 "tag": "Old Testament",
 "api": "exodus+6",
 "sum": [
  "God reassures Moses, revealing his covenant name more fully and repeating four specific promises: bring out, deliver, redeem, and take as his people.",
  "Moses relays this to Israel, but they are too discouraged by their suffering to listen.",
  "A genealogy of Moses and Aaron's family is given."
 ],
 "nug": [
  {
   "h": "A name revealed more fully than ever before",
   "b": "“I appeared unto Abraham, unto Isaac, and unto Jacob, by the name of God Almighty, but by my name JEHOVAH was I not known to them” (v. 3) — the patriarchs knew God, but this specific, deeper dimension of His covenant name is now being unveiled to a new generation facing a new kind of crisis."
  },
  {
   "h": "Four “I will” promises in a row",
   "b": "Verses 6–8 stack four consecutive divine promises — I will bring you out, I will rid you of bondage, I will redeem you, I will take you to me for a people — each one deliberate, personal and unconditional."
  },
  {
   "h": "A people too discouraged to even listen",
   "b": "When Moses relays these enormous promises, “they hearkened not unto Moses for anguish of spirit, and for cruel bondage” (v. 9) — real suffering can make even the best news genuinely hard to receive or believe."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 3:6 · Ezekiel 20:5–6 · Hebrews 8:10–12",
   "qs": [
    {
     "th": "The four “I will” promises in verses 6–8 are echoed in the structure of the Passover — traditionally remembered with four cups — God's specific spoken promises here shaping how His people would remember and retell this deliverance for millennia afterward.",
     "q": "How does it change your reading of this chapter to know these specific promises became, in a sense, permanently built into how the deliverance would be remembered and celebrated?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The people's inability to hear good news because of “anguish of spirit” (v. 9) is a realistic, compassionate observation — hope doesn't always land, even when genuinely offered, if someone is suffering enough.",
     "q": "Have you ever been too discouraged or worn down to really take in good news, even when it was true and meant for you?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses, discouraged himself, questions whether Pharaoh will listen to him “who am of uncircumcised lips” (v. 12, 30) — the same self-doubt from chapter 4 resurfacing again after this new setback.",
     "q": "Is there an old insecurity that tends to resurface for you specifically after a setback, even after you thought you'd worked through it?"
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
     "th": "God's response to the people's inability to listen (v. 9) isn't to give up on the promise, but to keep working toward it anyway, patiently, even without their immediate belief.",
     "q": "Sit quietly and consider whether there's a promise or truth about God you've struggled to “hearken to” because of your own current anguish or exhaustion, and simply name that honestly to Him."
    }
   ]
  }
 ]
},
// Day 129
{
 "ref": "Psalm 118",
 "tag": "Psalms & Wisdom",
 "api": "psalms+118",
 "sum": [
  "Repeatedly gives thanks because God's mercy endures forever, describing deliverance from real distress.",
  "Contains the famous verse about the rejected stone becoming the cornerstone, later applied to Jesus.",
  "Includes “This is the day which the LORD hath made,” originally about a specific day of victory."
 ],
 "nug": [
  {
   "h": "A repeated refrain that opens and closes the psalm",
   "b": "“O give thanks unto the LORD; for he is good: because his mercy endureth for ever” opens the psalm (v. 1) and returns at the very end (v. 29) — the entire psalm framed by the same declaration of God's enduring goodness."
  },
  {
   "h": "A rejected stone that becomes the most important one",
   "b": "“The stone which the builders refused is become the head stone of the corner” (v. 22) is quoted by Jesus about Himself (Matthew 21:42) and repeatedly by the apostles afterward — one of the most directly Messianic verses in the entire Psalter."
  },
  {
   "h": "The day the crowds shouted at Jesus' entry into Jerusalem",
   "b": "“Save now, I beseech thee, O LORD… Blessed be he that cometh in the name of the LORD” (v. 25–26) is exactly what the crowds shout during Jesus' triumphal entry (Matthew 21:9) — an ancient psalm becoming, in that specific moment, prophetic, real-time worship."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 21:9,42 · Acts 4:11 · 1 Peter 2:7",
   "qs": [
    {
     "th": "This psalm gets quoted at two enormously significant, very different moments in Jesus' life — the crowd's joyful welcome at His triumphal entry, and later the apostles' argument for His resurrection and exaltation (the rejected stone made the cornerstone).",
     "q": "Read Matthew 21:9 and Acts 4:11 side by side. How does the same psalm speak to both Jesus' welcome and His rejection?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "“This is the day which the LORD hath made; we will rejoice and be glad in it” (v. 24) is often quoted generically for any day, but in context follows immediately after the cornerstone verse — originally, quite specifically, about the day of God's decisive victory.",
     "q": "How does knowing this famous verse's original, specific context — celebrating a particular victory — change or deepen how you use it for an ordinary day?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“It is better to trust in the LORD than to put confidence in man… than to put confidence in princes” (v. 8–9) is repeated for emphasis, naming the most powerful human sources of security people default to and ranking trust in God above both.",
     "q": "Where are you currently tempted to put more confidence in a person or your own resources than in God?"
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
     "th": "The psalm's emotional range moves from real distress (“I was pushed at that I might fall,” v. 13) to triumphant celebration, all within one continuous piece of worship.",
     "q": "Write a short prayer that, like this psalm, moves honestly from a current difficulty toward genuine praise, without pretending the difficulty away."
    }
   ]
  }
 ]
},
// Day 130
{
 "ref": "Exodus 7",
 "tag": "Old Testament",
 "api": "exodus+7",
 "sum": [
  "Moses (80) and Aaron (83) confront Pharaoh; Aaron's staff becomes a serpent and swallows the magicians' imitation serpents.",
  "The first plague turns the Nile and Egypt's water to blood, but Pharaoh's heart remains hardened.",
  "The pattern of confrontation, sign, and hardened heart begins that will repeat through the plagues."
 ],
 "nug": [
  {
   "h": "An eighty-year-old man beginning his real life's work",
   "b": "“Moses was fourscore years old, and Aaron fourscore and three years old, when they spake unto Pharaoh” (v. 7) — the confrontation most people associate with Moses' entire life doesn't even begin until he's eighty, after decades of obscurity."
  },
  {
   "h": "A staff that becomes a serpent, and then swallows imitations",
   "b": "Aaron's staff becomes a serpent before Pharaoh; Egyptian magicians replicate the trick with “their enchantments” (v. 11–12), but Aaron's staff then swallows theirs — a small, decisive sign that whatever power Egypt could access, it was ultimately no match."
  },
  {
   "h": "The first plague, and a hardening already in motion",
   "b": "The Nile — Egypt's literal lifeblood and, to Egyptians, associated with divine power — turns to blood (v. 20–21), yet “Pharaoh's heart was hardened, neither did he hearken unto them” (v. 22), a phrase that will repeat, with variations, through the rest of the plague narrative."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 4:21 · Romans 9:17–18 · 2 Timothy 3:8–9",
   "qs": [
    {
     "th": "Romans 9:17–18 uses Pharaoh's hardened heart as a significant case study in how God's purposes work even through human resistance — a genuinely difficult passage worth sitting with rather than rushing past.",
     "q": "Read Romans 9:17–18. What tension do you notice between Pharaoh's own repeated choices to harden his heart and the language of God hardening it, and how do you hold both together?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses and Aaron begin this defining confrontation of their lives at ages most people associate with retirement, not a life's great calling just beginning.",
     "q": "Does it change how you think about your own timeline — what's still possible, what might still be ahead — to know Moses' defining life's work began at eighty?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The Egyptian magicians' ability to imitate the first two signs (staff to serpent, water to blood) shows that not every impressive-looking act carries real power — imitation is possible, but limited, as the swallowed staffs demonstrate.",
     "q": "Where might you need discernment between something that looks impressive or powerful and what actually carries lasting substance?"
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
     "th": "Pharaoh's hardening happens gradually, through repeated small choices to resist clear evidence, rather than in one single dramatic decision.",
     "q": "Is there a truth you've been gradually, quietly resisting through small repeated choices, rather than one dramatic rejection? Name that pattern honestly."
    }
   ]
  }
 ]
},
// Day 131
{
 "ref": "Matthew 19",
 "tag": "New Testament",
 "api": "matthew+19",
 "sum": [
  "Jesus teaches on marriage and divorce, pointing back to God's original design in Genesis.",
  "He welcomes children brought to him despite the disciples' objection.",
  "A rich young man walks away sad after Jesus tells him to sell his possessions, prompting Jesus' teaching that salvation is impossible for people but possible with God."
 ],
 "nug": [
  {
   "h": "A question meant to trap, met with a return to the beginning",
   "b": "When Pharisees test Jesus about divorce, He doesn't just cite the law they're referencing (Deuteronomy 24) but goes back further, to Genesis 1 and 2, to God's original design for marriage (v. 4–6) — answering a legal question with a creational one."
  },
  {
   "h": "Children blessed despite the disciples' resistance",
   "b": "The disciples rebuke people for bringing children to Jesus; His response reverses their assumption entirely — “Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven” (v. 13–15)."
  },
  {
   "h": "A rich man's sad departure, and a hard teaching about wealth",
   "b": "The rich young ruler, having kept the commandments Jesus lists, goes away sorrowful when told to sell his possessions (v. 16–22); Jesus' comment about a camel and a needle's eye (v. 24) leaves even the disciples “exceedingly amazed,” asking “Who then can be saved?”"
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 2:24 · Mark 10:13–16 · Luke 18:18–27",
   "qs": [
    {
     "th": "Jesus' answer about marriage deliberately returns to Genesis 2:24, read much earlier in this plan — “for this cause shall a man leave father and mother, and shall cleave to his wife” — treating the original creation design as more authoritative than a later legal accommodation.",
     "q": "How does Jesus' method here — answering a legal question by returning to the original creational design — model a way of thinking through other hard questions?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The rich young ruler genuinely wants eternal life and has kept the commandments Jesus names, and still walks away sorrowful because of the one specific thing Jesus asks of him.",
     "q": "Is there one specific thing — not everything, but one thing — that Jesus might be asking you to release that you've been reluctant to name honestly?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“With men this is impossible; but with God all things are possible” (v. 26) is Jesus' direct response to the disciples' amazed question about who could possibly be saved — salvation described as something only God can accomplish, not human effort at commandment-keeping.",
     "q": "Where do you need to remember that something feeling impossible by human effort doesn't mean it's impossible for God?"
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
     "th": "The rich young ruler's sorrow (v. 22) is genuine — he's not rejecting Jesus out of hostility, but genuinely struggling to let go of something he values highly.",
     "q": "Is there something you value that, if Jesus asked you to release it, would genuinely grieve you to give up? Name it honestly rather than pretending it wouldn't cost you anything."
    }
   ]
  }
 ]
},
// Day 132
{
 "ref": "Psalm 121",
 "tag": "Psalms & Wisdom",
 "api": "psalms+121",
 "sum": [
  "A pilgrim's song asking where help comes from, answered confidently: from the LORD, maker of heaven and earth.",
  "Describes God as a keeper who never slumbers or sleeps, protecting from all harm.",
  "Ends promising God's protection over every going out and coming in, forever."
 ],
 "nug": [
  {
   "h": "A pilgrim's song for the road",
   "b": "One of fifteen “Songs of Ascents” (Psalms 120–134), traditionally sung by pilgrims travelling up to Jerusalem for festivals — written for a journey, with real uncertainty about the road ahead built into its opening question."
  },
  {
   "h": "A question, then a confident answer",
   "b": "“I will lift up mine eyes unto the hills, from whence cometh my help?” (v. 1) is genuinely a question in the Hebrew, not just a poetic statement — hills could mean either the temple mount (comforting) or pagan high places where idols were worshipped (threatening). Verse 2 answers decisively: help comes specifically from “the LORD, which made heaven and earth.”"
  },
  {
   "h": "A keeper who never needs to look away",
   "b": "“He that keepeth thee will not slumber… he that keepeth Israel shall neither slumber nor sleep” (v. 3–4), repeated for emphasis, pictures a guardian whose watchfulness never lapses, not even briefly."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 6:24–26 · Isaiah 40:28 · John 10:28–29",
   "qs": [
    {
     "th": "The promise that God's keeping doesn't slumber or sleep (v. 3–4) echoes Isaiah 40:28's “the everlasting God… fainteth not, neither is weary” — both passages addressing the same human fear that God's attention might eventually lapse or run out.",
     "q": "Read Isaiah 40:28. Why might this specific reassurance — that God's attention and strength never tire — matter so much to people in genuine, prolonged difficulty?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "This psalm was likely sung by real travellers facing real physical dangers on the road to Jerusalem — bandits, exhaustion, heat — not abstract, theoretical threats.",
     "q": "What “road” are you currently on that could use this psalm's specific promise of a keeper who doesn't sleep?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“The LORD shall preserve thee from all evil: he shall preserve thy soul” (v. 7) promises soul-preservation specifically, alongside but distinct from physical protection — a deeper kind of keeping than just avoiding difficulty.",
     "q": "Where do you need to trust for your soul to be preserved even in a situation where physical or circumstantial difficulty might not be fully avoided?"
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
     "th": "The psalm closes with a promise covering “thy going out and thy coming in from this time forth, and even for evermore” (v. 8) — every ordinary departure and return, for the rest of a life, held within this promise.",
     "q": "Write this verse as your own prayer over your literal “going out” and “coming in” today — whatever your actual travels or transitions look like."
    }
   ]
  }
 ]
},
// Day 133
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Four promises, spoken plainly",
   "b": "“I will bring you out… I will rid you… I will redeem you… I will take you” (Exodus 6:6–7) — four unconditional promises given right when the people were too discouraged to even hear them."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Moses' first attempt to free Israel made things worse before God's promises deepened, the plagues began in earnest, and Jesus taught on marriage, children and the cost of wealth.",
     "q": "Where this week did an initial setback (Moses' first failed request to Pharaoh) turn out to be part of a much longer, ultimately successful process, rather than final failure?"
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
     "th": "“I will lift up mine eyes unto the hills, from whence cometh my help?… My help cometh from the LORD” (Psalm 121:1–2) — a real question, answered with real confidence.",
     "q": "What's the honest question behind where you're currently looking for help, and how would Psalm 121's answer redirect it?"
    }
   ]
  }
 ]
},
// Day 134
{
 "ref": "Exodus 8",
 "tag": "Old Testament",
 "api": "exodus+8",
 "sum": [
  "The plague of frogs overwhelms Egypt; Pharaoh asks Moses to remove them, then hardens his heart again once relieved.",
  "The plague of gnats or lice follows, which even Pharaoh's magicians admit is “the finger of God.”",
  "The plague of flies afflicts Egypt but spares Goshen, where the Israelites live, showing a clear distinction between the two peoples."
 ],
 "nug": [
  {
   "h": "Frogs everywhere, including in the kneading bowls",
   "b": "The second plague is described with almost comic, overwhelming detail — frogs in the houses, the beds, the ovens, even the kneading troughs (v. 3) — an infestation so total it invades the most basic, intimate parts of daily life."
  },
  {
   "h": "A plague the magicians can copy, but not remove",
   "b": "Egyptian magicians can replicate bringing frogs, but conspicuously cannot make them go away (v. 7—notice Pharaoh has to ask Moses to pray for their removal, v. 8) — imitation of the miracle, but no power over reversing it."
  },
  {
   "h": "“This is the finger of God”",
   "b": "By the third plague, lice or gnats, even Pharaoh's own magicians admit defeat: “This is the finger of God” (v. 19) — the very people whose job was to counter Moses and Aaron becoming, however briefly, witnesses against their own king."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 8:22–23 · Luke 11:20 · 2 Timothy 3:8–9",
   "qs": [
    {
     "th": "Jesus later uses almost identical language — “if I with the finger of God cast out devils, no doubt the kingdom of God is come upon you” (Luke 11:20) — deliberately echoing this exact phrase from Egypt's magicians to describe His own authority over evil.",
     "q": "Read Luke 11:20. What does it add to Jesus' ministry to know He used the same phrase Egyptian magicians once used to describe being outmatched by God?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "From the fourth plague onward (flies, v. 22–23), God begins making “a division between my people and thy people” — a visible, physical distinction protecting Israel from what was afflicting Egypt.",
     "q": "Where have you experienced God making a distinction — protecting or setting you apart — in a way others around you might not have understood or shared?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Pharaoh's pattern across these plagues — asking for prayer and relief, promising to let the people go, then hardening his heart again the moment relief comes (v. 8, 15) — shows how easily genuine-seeming crisis repentance can evaporate once the pressure lifts.",
     "q": "Have you ever made a genuine-feeling promise to change during a crisis, only to slide back once the pressure eased, the way Pharaoh repeatedly does here?"
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
     "th": "Pharaoh's repeated cycle of temporary contrition followed by renewed hardness is a sobering pattern worth examining honestly in your own life, not just observing in his.",
     "q": "Is there a promise to God you've made during a hard moment that quietly faded once things got easier? Name that honestly rather than waiting for the next crisis to renew it."
    }
   ]
  }
 ]
},
// Day 135
{
 "ref": "Exodus 9",
 "tag": "Old Testament",
 "api": "exodus+9",
 "sum": [
  "A plague kills Egyptian livestock while sparing Israel's; a plague of boils afflicts Egyptians, including the magicians.",
  "A devastating hailstorm destroys crops and animals left in the open; Pharaoh briefly confesses his sin, then hardens his heart once the storm stops.",
  "The distinction between Egypt's suffering and Israel's safety continues to grow clearer."
 ],
 "nug": [
  {
   "h": "Livestock struck, but Israel's spared entirely",
   "b": "The fifth plague kills Egyptian livestock specifically, while “of the cattle of the children of Israel died not one” (v. 6–7) — Pharaoh even sends to check and confirms it himself, making the distinction undeniable rather than merely claimed."
  },
  {
   "h": "A warning given before the hail, so people could choose",
   "b": "Uniquely among the plagues, God has Moses warn in advance about the coming hail, giving people the chance to bring their servants and livestock under shelter — “he that feared the word of the LORD… made his servants and his cattle flee into the houses” (v. 19–21), even among the Egyptians."
  },
  {
   "h": "A confession that doesn't last past the storm",
   "b": "During the hail, Pharaoh says, “I have sinned this time: the LORD is righteous, and I and my people are wicked” (v. 27) — his clearest admission yet, and still, “when Pharaoh saw that the rain and the hail and the thunders were ceased, he sinned yet more, and hardened his heart” (v. 34)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 9:16 · Romans 9:17 · James 1:22–25",
   "qs": [
    {
     "th": "God tells Pharaoh directly, through Moses, exactly why he's been allowed to remain in power through all this: “for this cause have I raised thee up, for to shew in thee my power; and that my name may be declared throughout all the earth” (v. 16) — Paul later quotes this precise verse in Romans 9:17.",
     "q": "Read Romans 9:16–17. What does it mean to you that even Pharaoh's continued resistance was, in some way, part of a larger purpose of making God's power known?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Some Egyptians, unnamed in the text, responded to the advance warning about hail by taking practical action to protect what they had (v. 20) — the offer of mercy wasn't limited only to Israel.",
     "q": "Where might you need to take practical, faithful action in response to a warning or instruction you've received, rather than waiting passively?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Pharaoh's confession in verse 27 sounds complete and genuine in the moment — specific, theologically accurate, even self-condemning — and still doesn't survive contact with relief from pressure.",
     "q": "What's the difference between a confession that's real in the moment and a confession that actually leads to lasting change? Which have you more often experienced in your own life?"
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
     "th": "James 1:22–25 warns against being a hearer of the word who doesn't act on it, “like unto a man beholding his natural face in a glass” who forgets what he looks like the moment he turns away — exactly Pharaoh's pattern here.",
     "q": "Is there truth you've clearly seen and even acknowledged, the way Pharaoh does in verse 27, that you've let slip once the immediate pressure passed?"
    }
   ]
  }
 ]
},
// Day 136
{
 "ref": "Psalm 130",
 "tag": "Psalms & Wisdom",
 "api": "psalms+130",
 "sum": [
  "A cry from “the depths,” acknowledging that no one could stand if God marked every sin.",
  "Declares there is forgiveness with God, meant to produce reverence, not license.",
  "Ends comparing waiting for God to a watchman's confident longing for the morning."
 ],
 "nug": [
  {
   "h": "A cry from somewhere genuinely low",
   "b": "“Out of the depths have I cried unto thee, O LORD” (v. 1) — one of the most direct, unadorned openings in the whole Psalter, no preamble, just an honest cry from a place of real distress."
  },
  {
   "h": "A question that would leave everyone condemned",
   "b": "“If thou, LORD, shouldest mark iniquities, O Lord, who shall stand?” (v. 3) is genuinely unanswerable in the writer's own favour — the honest admission that no one, examined strictly, could hold up under that kind of scrutiny."
  },
  {
   "h": "Waiting compared to a night watchman's longing for dawn",
   "b": "“My soul waiteth for the Lord more than they that watch for the morning”, repeated for emphasis (v. 6) — a watchman's specific, physical longing for daylight to finally arrive used as the measure of the psalmist's longing for God."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 3:19–20 · Ephesians 1:7 · Lamentations 3:22–26",
   "qs": [
    {
     "th": "Paul's argument in Romans 3 that “by the deeds of the law there shall no flesh be justified” builds on exactly this psalm's honest admission — no one could stand if God simply “marked iniquities” strictly, which is precisely why forgiveness has to be a gift, not a verdict earned.",
     "q": "Read Romans 3:19–20 alongside this psalm's third verse. How do they arrive at the same honest conclusion from different directions?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm never specifies what “the depths” actually were — leaving it deliberately open for anyone, in any kind of genuine distress, to pray these exact words as their own.",
     "q": "What are “the depths” for you right now, specifically, that you could honestly name in a prayer using this psalm's opening words?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“There is forgiveness with thee, that thou mayest be feared” (v. 4) links forgiveness directly to reverence — counterintuitively, it's God's willingness to forgive, not His capacity to punish, that this verse says produces genuine awe.",
     "q": "How does forgiveness, rather than fear of punishment, actually produce a deeper reverence for God in your own experience?"
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
     "th": "The watchman's wait for morning (v. 6) is disciplined and certain — he knows dawn is coming, even in the darkest part of the night, and waits with that specific confidence rather than despair.",
     "q": "Sit quietly for a moment in whatever “depths” you're currently in, and practise waiting with the watchman's confidence that morning is genuinely coming, even if you can't see it yet."
    }
   ]
  }
 ]
},
// Day 137
{
 "ref": "Exodus 10",
 "tag": "Old Testament",
 "api": "exodus+10",
 "sum": [
  "A plague of locusts devastates whatever crops the hail had left; Pharaoh's own officials urge him to relent.",
  "Pharaoh tries to negotiate a partial release of the Israelites, which Moses refuses.",
  "A plague of thick darkness covers Egypt for three days while Israel has light, and Pharaoh again refuses full release."
 ],
 "nug": [
  {
   "h": "A plague that finishes what hail started",
   "b": "Locusts consume whatever crops survived the hail (v. 5, 15) — “there remained not any green thing in the trees, or in the herbs of the field, through all the land of Egypt” — total agricultural devastation completed across two consecutive plagues."
  },
  {
   "h": "Pharaoh's own servants finally push back on him",
   "b": "For the first time, Pharaoh's own officials directly challenge him: “Knowest thou not yet that Egypt is destroyed?” (v. 7) — the internal pressure on Pharaoh building from his own court, not just from Moses and the plagues themselves."
  },
  {
   "h": "A negotiation over exactly who gets to go",
   "b": "Pharaoh tries repeatedly to negotiate partial releases — just the men (v. 11), leaving the livestock behind (v. 24) — and Moses refuses each partial offer, insisting “there shall not an hoof be left behind” (v. 26), because they don't yet know what will be needed for worship."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Joel 2:1–2,25 · Revelation 9:3–4 · Deuteronomy 28:38",
   "qs": [
    {
     "th": "Joel 2 later uses locust devastation as a picture of a coming day of judgment, and then, remarkably, promises “I will restore to you the years that the locust hath eaten” (Joel 2:25) — the same image of total loss becoming, generations later, a promise of complete restoration.",
     "q": "Read Joel 2:25. How does this later promise of restored years reframe a plague originally sent as judgment?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' refusal to negotiate a partial release — insisting the people, their children, and every animal all go together — shows a clear conviction that partial obedience or partial freedom wasn't actually what God had called for.",
     "q": "Is there an area where you've been offered, or have offered yourself, only a partial version of what God is actually asking, and settled for it rather than holding out for the whole thing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Pharaoh's own officials recognizing Egypt's destruction before Pharaoh himself does (v. 7) shows that sometimes people closest to a situation can see its true cost more clearly than the person actually in control of the decision.",
     "q": "Is there wise counsel from people around you that you've been resisting, the way Pharaoh resists his own officials here?"
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
     "th": "Moses repeatedly goes back before Pharaoh on behalf of the entire nation, absorbing repeated rejection and renewed hardship each time, still returning to advocate again.",
     "q": "Pray today for the patience to keep advocating or interceding for someone or something, even after repeated setbacks or rejections."
    }
   ]
  }
 ]
},
// Day 138
{
 "ref": "Matthew 20",
 "tag": "New Testament",
 "api": "matthew+20",
 "sum": [
  "Jesus tells the parable of the labourers in the vineyard, where all workers receive the same wage regardless of hours worked.",
  "He predicts his death and resurrection in Jerusalem for the third time, with growing detail.",
  "James and John's mother asks for places of honour for her sons; Jesus responds by redefining greatness as humble service."
 ],
 "nug": [
  {
   "h": "Workers hired at different hours, paid exactly the same",
   "b": "The parable of the labourers in the vineyard (v. 1–16) — workers hired at dawn, mid-morning, noon, and even an hour before quitting time, all receiving the identical full day's wage — deliberately unsettles ordinary ideas about fairness and merit."
  },
  {
   "h": "A third, more specific prediction of the cross",
   "b": "Jesus tells His disciples plainly, for a third time, exactly what will happen in Jerusalem — condemnation, mocking, scourging, crucifixion, and resurrection on the third day (v. 17–19) — increasingly specific details as the actual event draws closer."
  },
  {
   "h": "A request for status, met with a call to serve",
   "b": "James and John's mother asks for her sons to sit at Jesus' right and left hand in His kingdom (v. 20–21); Jesus' response redefines greatness entirely — “whosoever will be great among you, let him be your minister… even as the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many” (v. 26–28)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 53:10–12 · Mark 10:45 · Philippians 2:5–8",
   "qs": [
    {
     "th": "Jesus' description of Himself as one who came “to give his life a ransom for many” (v. 28) draws directly on Isaiah 53's Suffering Servant, described as making “his soul an offering for sin” and bearing “the sin of many” (Isaiah 53:10–12).",
     "q": "Read Isaiah 53:10–12. How does this older prophecy help you understand what Jesus meant by describing His death as a “ransom”?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The workers hired first in the vineyard parable grumble specifically because others, who worked far less, received the same reward — their complaint isn't that they were treated unfairly, but that others weren't treated “fairly enough” compared to them.",
     "q": "Where might you, like the first workers, resent someone else receiving grace or blessing that feels disproportionate to their effort, even though your own reward hasn't actually decreased?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "James and John's mother's request for status (v. 20–21) comes right after Jesus' clearest, most specific prediction yet of His own suffering and death — a jarring gap between what He's telling them is coming and what they're asking for.",
     "q": "Where might you be pursuing status or position even while, if you're honest, you're aware of a costlier calling nearby that you're avoiding instead?"
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
     "th": "Jesus doesn't rebuke James and John's mother harshly for her request, but redirects it entirely — patient correction rather than dismissal of an understandable, if misguided, desire.",
     "q": "Is there an ambition or desire for recognition you've been pursuing that, if you're honest, needs redirecting rather than harsh rejection? Name it plainly to God."
    }
   ]
  }
 ]
},
// Day 139
{
 "ref": "Psalm 139",
 "tag": "Psalms & Wisdom",
 "api": "psalms+139",
 "sum": [
  "Celebrates being fully known by God — every thought, word and way.",
  "Marvels that there's nowhere to flee from God's presence, and that we were formed and known by him even before birth.",
  "Ends inviting God to search the heart and lead in the way everlasting."
 ],
 "nug": [
  {
   "h": "A psalm about being fully known, before being fully understood",
   "b": "“O LORD, thou hast searched me, and known me” (v. 1) opens with being known as the starting point — not something achieved through understanding God first, but a reality already true before the psalm even begins."
  },
  {
   "h": "Nowhere left ungoverned by God's presence",
   "b": "“Whither shall I go from thy spirit? or whither shall I flee from thy presence?” (v. 7) is answered exhaustively — heaven, hell, the uttermost parts of the sea, even darkness itself (v. 8–12) — no location genuinely outside God's reach."
  },
  {
   "h": "Formed and written before a single day had happened",
   "b": "“Thine eyes did see my substance, yet being unperfect; and in thy book all my members were written, which in continuance were fashioned, when as yet there was none of them” (v. 16) — a striking claim of being known and, in some sense, already recorded before physical formation was even complete."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Jeremiah 1:5 · Romans 8:38–39 · Hebrews 4:13",
   "qs": [
    {
     "th": "Jeremiah 1:5's “Before I formed thee in the belly I knew thee” makes almost the identical claim as this psalm's verse 16, spoken to a different person, in a different book, centuries apart — both describing being known by God before birth as a settled, repeated biblical pattern.",
     "q": "Read Jeremiah 1:5 alongside Psalm 139:16. What does it mean to you that this specific truth — being known before formation — appears independently in more than one place in Scripture?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's assurance that no location is outside God's presence (v. 7–12) was written by someone who, according to some of David's other psalms, genuinely experienced real distance and hiddenness from God at points in his life.",
     "q": "Where do you currently feel most distant or hidden from God, and how does this psalm's insistence that no such place actually exists speak into that specific feeling?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's closing request — “Search me, O God, and know my heart… see if there be any wicked way in me” (v. 23–24) — comes after twenty-two verses celebrating being fully known already, showing that being known and inviting deeper searching aren't in tension.",
     "q": "Is there a part of your heart you'd genuinely want God to search right now, the way this psalm's final request invites?"
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
     "th": "“I am fearfully and wonderfully made: marvellous are thy works” (v. 14) is worship directed at the fact of one's own existence — praising God not just for what He's done elsewhere, but for the simple fact of having been made at all.",
     "q": "Write a short prayer of praise focused specifically on your own existence — thanking God for having made you at all, not for anything you've done or accomplished."
    }
   ]
  }
 ]
},
// Day 140
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Known before you were formed",
   "b": "“In thy book all my members were written, which in continuance were fashioned, when as yet there was none of them” (Psalm 139:16) — twenty weeks into this plan, still true of you today as it was on Day 1."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week Egypt's plagues escalated toward their climax, Pharaoh's repeated crisis-confessions never quite stuck, and you read about a God who pays the last-hired the same as the first, and knows every one of us completely before we're even formed.",
     "q": "Twenty weeks in now — what pattern of God's character, across Genesis, Exodus, Matthew and the Psalms this stretch, has become clearest or most important to you?"
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
     "th": "“Out of the depths have I cried unto thee, O LORD” (Psalm 130:1) — no preamble needed, just an honest cry from wherever you actually are.",
     "q": "What are your own “depths” right now, and what would it look like to cry out from exactly there, rather than waiting until you feel more composed?"
    }
   ]
  }
 ]
},
// Day 141
{
 "ref": "Exodus 11",
 "tag": "Old Testament",
 "api": "exodus+11",
 "sum": [
  "Moses warns Pharaoh of one final, terrible plague still to come.",
  "God tells Israel in advance to ask the Egyptians for silver and gold before they leave.",
  "The death of every firstborn in Egypt is announced, from Pharaoh's household to the lowest servant's.",
  "Moses leaves Pharaoh's presence in great anger, and the LORD confirms Pharaoh will still refuse to listen."
 ],
 "nug": [
  {
   "h": "A distinction announced before it happens",
   "b": "God tells Moses in advance exactly how total the coming plague will be, “from the firstborn of Pharaoh that sitteth upon his throne, even unto the firstborn of the maidservant that is behind the mill” (v. 5) — no household in Egypt exempt by rank or poverty, yet Israel spared entirely, “against the children of Israel shall not a dog move his tongue” (v. 7)."
  },
  {
   "h": "Favour building quietly in the background",
   "b": "“The LORD gave the people favour in the sight of the Egyptians. Moreover the man Moses was very great in the land of Egypt” (v. 3) — a small note, easy to miss, showing God had been softening Egyptian opinion toward Israel even while Pharaoh himself stayed hard."
  },
  {
   "h": "An exit that leaves no doubt where the anger really lies",
   "b": "Moses “went out from Pharaoh in a great anger” (v. 8) after nine plagues of patient warning — righteous frustration at persistent, wilful refusal, not a loss of composure."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Exodus 4:22–23 · Exodus 12:12 · Romans 9:17–18",
   "qs": [
    {
     "th": "God had already told Moses at the burning bush that Pharaoh's refusal would eventually cost Egypt its own firstborn, since Pharaoh was refusing to let God's “firstborn” son Israel go (Exodus 4:22–23) — this chapter's terrible announcement is the fulfilment of a warning given months earlier.",
     "q": "Read Exodus 4:22–23 again. How does seeing this warning given so far in advance change how you read chapter 11's announcement of judgment?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses delivers this final, hardest warning to Pharaoh knowing it won't be received any better than the previous nine, and still goes and says it plainly rather than softening it.",
     "q": "Is there something hard and true you know you need to say plainly to someone, even though past experience tells you it probably won't be well received?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Verse 3's quiet aside about favour being given to Israel “in the sight of the Egyptians” shows God working unseen, relational groundwork long before the dramatic, visible moment of deliverance actually arrives.",
     "q": "Where might God be quietly preparing favour or openings for you right now, in ways you can't yet see the purpose of?"
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
     "th": "Even on the darkest chapter yet in this story, Moses' anger and Pharaoh's hardness sit under a God who had already announced, in advance and with complete accuracy, exactly what was coming.",
     "q": "Praise God today for being trustworthy even in the parts of His plan you can't yet see the full shape of, the way this chapter's warning was trustworthy long before it came true."
    }
   ]
  }
 ]
},
// Day 142
{
 "ref": "Exodus 12",
 "tag": "Old Testament",
 "api": "exodus+12",
 "sum": [
  "God institutes the Passover, with detailed instructions for the lamb, the blood, and the meal.",
  "At midnight the LORD strikes every firstborn in Egypt, and a great cry goes up through the land.",
  "Pharaoh finally sends Israel away, and they leave in haste carrying unleavened dough and Egyptian silver and gold.",
  "The exodus itself begins, with the LORD commanding Passover be kept every year as a lasting memorial."
 ],
 "nug": [
  {
   "h": "A calendar reset around this one night",
   "b": "“This month shall be unto you the beginning of months” (v. 2) — God doesn't just rescue Israel, He resets how they mark time itself, making this specific night of deliverance the fixed point everything else would be dated from."
  },
  {
   "h": "Blood that has to be applied, not just shed",
   "b": "It isn't enough for a lamb to die — the blood has to be struck on the two side posts and upper door post with hyssop (v. 7, 22) before it protects anyone inside; the provision is real, but it still has to be personally applied to the actual doorway a family lives behind."
  },
  {
   "h": "A memorial meant to outlast the generation that lived it",
   "b": "“Ye shall observe this day in your generations by an ordinance for ever” (v. 14) — instituted before the exodus has even finished happening, already meant to be retold and re-eaten by people not yet born who would never see Egypt themselves."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 5:7 · John 19:36 · John 1:29",
   "qs": [
    {
     "th": "Paul later calls Jesus directly “Christ our passover” who “is sacrificed for us” (1 Corinthians 5:7), and John notes that not one of Jesus' bones was broken on the cross (John 19:36), matching the specific instruction here that the Passover lamb's bones stay unbroken (v. 46).",
     "q": "Read 1 Corinthians 5:7. How does this exact, physical detail — bones not broken, both here and at the cross — deepen how you read the Passover lamb as a picture of Jesus?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The instruction to eat the meal “with your loins girded, your shoes on your feet, and your staff in your hand… in haste” (v. 11) pictures a family eating a sacred meal while already dressed and ready to move the moment God says go.",
     "q": "Where in your own life might God be asking you to stay “dressed and ready” — trusting Him enough to act, not just believe, the moment He calls for it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Verse 38 notes that “a mixed multitude went up also with them” — not only ethnic Israel but others who chose to leave Egypt alongside God's covenant people, welcomed into the same deliverance.",
     "q": "Is there someone outside your usual circle who might need to be welcomed into what God is doing among your own people, the way this “mixed multitude” was welcomed into Israel's exodus?"
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
     "th": "The blood on the doorposts didn't change anything about the danger outside; it changed who the danger passed over — real, costly protection provided entirely from outside the household itself.",
     "q": "Thank God specifically for a form of protection or rescue in your own life that, like the Passover blood, cost you nothing to receive but cost something real to provide."
    }
   ]
  }
 ]
},
// Day 143
{
 "ref": "Psalm 6",
 "tag": "Psalms & Wisdom",
 "api": "psalms+6",
 "sum": [
  "David cries out to God in deep distress, asking not to be rebuked in anger.",
  "He describes physical and emotional exhaustion, weeping through the night.",
  "He tells his enemies to depart, because the LORD has heard his weeping and his prayer."
 ],
 "nug": [
  {
   "h": "A prayer that starts by asking for less, not more",
   "b": "“O LORD, rebuke me not in thine anger, neither chasten me in thy hot displeasure” (v. 1) — David isn't asking to avoid all correction, just pleading that it come without the fullest weight of anger behind it, an honest request from someone who knows he's not blameless."
  },
  {
   "h": "Grief described in almost uncomfortably physical terms",
   "b": "“I am weary with my groaning; all the night make I my bed to swim; I water my couch with my tears” (v. 6) — sorrow so real it's soaking the bed itself, no attempt to describe it more tidily or spiritually than it actually was."
  },
  {
   "h": "A sudden, confident turn with no explanation given",
   "b": "Verses 8–9 pivot abruptly from despair to certainty — “the LORD hath heard the voice of my weeping. The LORD hath heard my supplication; the LORD will receive my prayer” — nothing in the psalm's circumstances has visibly changed, only David's confidence that he'd actually been heard."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 30:5 · Matthew 26:38 · Hebrews 5:7",
   "qs": [
    {
     "th": "Hebrews 5:7 describes Jesus Himself offering prayers “with strong crying and tears” to the One able to save Him — the same raw, physical anguish David describes here shown, centuries later, to be something the Son of God Himself also genuinely experienced in prayer.",
     "q": "Read Hebrews 5:7. How does knowing Jesus prayed with this same kind of physical, tearful intensity change how you feel about bringing your own rawest grief to God?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David doesn't wait until his weeping has stopped to pray — the tears and the prayer happen together, in the same breath, rather than grief first and prayer only once composure returns.",
     "q": "Do you tend to wait until you feel more composed before praying honestly, or can you bring your rawest distress to God the way David does here, mid-tears?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The confident turn in verses 8–9 comes with no stated reason — no new information, no changed circumstance — just a settled conviction that weeping had genuinely reached God's ears.",
     "q": "Where do you need that same quiet confidence — not that your circumstances have changed, but that God has genuinely heard you in the middle of them?"
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
     "th": "David's opening request — not to be rebuked in anger, but still to be corrected — is an honest posture of someone who knows discipline may be deserved but is asking for it to come wrapped in mercy.",
     "q": "Is there an area where you know God's correction is fair, but you need to ask, honestly like David, for it to come gently rather than harshly?"
    }
   ]
  }
 ]
},
// Day 144
{
 "ref": "Exodus 13",
 "tag": "Old Testament",
 "api": "exodus+13",
 "sum": [
  "God commands that every firstborn, human and animal, be consecrated to Him.",
  "Israel is instructed to keep the feast of unleavened bread every year as a reminder of the exodus.",
  "God deliberately leads Israel away from the shorter route through Philistine territory, toward the Red Sea instead.",
  "Moses carries Joseph's bones, and the LORD leads the people by a pillar of cloud by day and fire by night."
 ],
 "nug": [
  {
   "h": "A route chosen for the people's own protection",
   "b": "“God led them not through the way of the land of the Philistines, although that was near; for God said, Lest peradventure the people repent when they see war” (v. 17) — the longer, harder-seeming wilderness route was actually the kinder one, chosen because the shorter road held a danger the people weren't yet ready to face."
  },
  {
   "h": "A promise kept across four hundred years",
   "b": "Moses takes “the bones of Joseph” with him (v. 19), fulfilling an oath Joseph extracted from his brothers back in Genesis 50:25 — one man's dying request, kept faithfully by a whole nation, across roughly four centuries of slavery and silence."
  },
  {
   "h": "A guide that never actually left",
   "b": "“He took not away the pillar of the cloud by day, nor the pillar of fire by night, from before the people” (v. 22) — constant, visible, uninterrupted guidance, present every single day of the journey from its very start."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 50:24–25 · Hebrews 11:22 · 1 Corinthians 10:1–2",
   "qs": [
    {
     "th": "Hebrews 11:22 singles out Joseph's instruction about his own bones as a specific act of faith — “by faith Joseph, when he died, made mention of the departing of the children of Israel; and gave commandment concerning his bones” — a promise made in faith long before anyone alive to keep it had even been born.",
     "q": "Read Hebrews 11:22 alongside Genesis 50:24–25. What does it mean to you that a promise kept this literally, this long after it was made, is held up in Hebrews as an example of real faith?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "God's chosen route protected Israel from a battle they weren't ready for, even though it meant a longer, harder journey than the direct road would have been.",
     "q": "Has God ever led you the “longer way” around something, protecting you from a fight you weren't ready for, even though it wasn't obvious at the time?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The pillar of cloud and fire offered continuous, visible reassurance of God's presence — no day of the journey left without some sign that He was actually there and leading.",
     "q": "What would it look like for you to actively look for the “pillar” — some visible sign of God's presence and leading — in your own ordinary days right now?"
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
     "th": "Joseph's bones, carried the whole journey, were a quiet, physical reminder every single day that this people were heading somewhere specific, toward a promise made generations earlier.",
     "q": "Sit quietly and consider what you are currently “carrying” toward a promise not yet fulfilled — what keeps that promise present and real for you day to day?"
    }
   ]
  }
 ]
},
// Day 145
{
 "ref": "Matthew 21",
 "tag": "New Testament",
 "api": "matthew+21",
 "sum": [
  "Jesus enters Jerusalem on a colt as crowds shout praise, fulfilling prophecy.",
  "He cleanses the temple, overturning tables and rebuking those who had made it a den of thieves.",
  "He curses a fruitless fig tree, which withers immediately.",
  "He tells the parable of the two sons and the parable of the wicked tenants who kill the vineyard owner's son."
 ],
 "nug": [
  {
   "h": "A king who arrives on a borrowed colt, not a warhorse",
   "b": "Matthew specifically notes this fulfils Zechariah's prophecy of a king “lowly, and riding upon an ass” (v. 5) — the crowds shout for a conquering king, and Jesus arrives in exactly the humble way the prophets had already described centuries earlier."
  },
  {
   "h": "A house meant for prayer, used for something else entirely",
   "b": "“My house shall be called the house of prayer; but ye have made it a den of thieves” (v. 13) — Jesus quotes Isaiah and Jeremiah together, naming the temple's real, intended purpose against what it had actually become."
  },
  {
   "h": "Builders who reject the very stone that becomes essential",
   "b": "In the parable of the wicked tenants, Jesus quotes Psalm 118 directly at the religious leaders themselves — “the stone which the builders rejected, the same is become the head of the corner” (v. 42) — a warning they understood was aimed squarely at them (v. 45)."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Zechariah 9:9 · Psalm 118:22–23 · Isaiah 56:7",
   "qs": [
    {
     "th": "Zechariah 9:9, written roughly five hundred years earlier, describes this exact scene in advance — “thy King cometh unto thee, meek, and sitting upon an ass” — a specific, checkable prophecy Jesus deliberately arranges to fulfil in front of the whole city.",
     "q": "Read Zechariah 9:9. What does it add to your reading of the triumphal entry to know Jesus was consciously stepping into a very specific, centuries-old prophecy rather than simply riding into town?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The fig tree that withers had leaves but no fruit — outward appearance of life and productivity with nothing real behind it — and Jesus' response to it is immediate and severe (v. 19–20).",
     "q": "Is there an area of your own life that looks fruitful from the outside but, if you're honest, isn't actually producing anything real right now?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The two sons in the parable are judged not by what they said they'd do, but by what they actually did — the son who said no and later obeyed is commended over the one who said yes and never went (v. 28–31).",
     "q": "Where might your actions and your stated intentions currently be out of step with each other, the way the two sons' words and actions were?"
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
     "th": "The cleansing of the temple is Jesus' clearest, most physically forceful act of anger in the Gospels, aimed specifically at something sacred being used for the wrong purpose.",
     "q": "Is there something in your own life meant to be devoted to God that has quietly become used for something else? Name that honestly before Him today."
    }
   ]
  }
 ]
},
// Day 146
{
 "ref": "Psalm 9",
 "tag": "Psalms & Wisdom",
 "api": "psalms+9",
 "sum": [
  "David praises God with his whole heart for His wonderful works.",
  "He celebrates God as a righteous judge who will judge the world with justice.",
  "He declares God a refuge for the oppressed and calls the nations to remember Him."
 ],
 "nug": [
  {
   "h": "Praise that names specific things, not vague gratitude",
   "b": "“I will praise thee, O LORD, with my whole heart; I will shew forth all thy marvellous works” (v. 1) opens a psalm that goes on to name actual enemies rebuked and actual judgments carried out — praise anchored in specifics, not general good feeling."
  },
  {
   "h": "A throne that doesn't need to be defended",
   "b": "“The LORD shall endure for ever: he hath prepared his throne for judgment” (v. 7) — unlike every human throne in Scripture, constantly under threat or challenge, this one is simply described as permanently secure, needing no defence."
  },
  {
   "h": "Refuge language aimed specifically at the oppressed",
   "b": "“The LORD also will be a refuge for the oppressed, a refuge in times of trouble” (v. 9) — not refuge in general, but named specifically for people currently being crushed by something or someone more powerful than themselves."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Psalm 46:1 · Acts 17:31 · Nahum 1:7",
   "qs": [
    {
     "th": "Acts 17:31 describes God as having “appointed a day, in the which he will judge the world in righteousness” — the same specific pairing of justice and righteousness this psalm celebrates in verse 8, now tied directly to the person and resurrection of Jesus Christ.",
     "q": "Read Acts 17:31. How does knowing this future day of righteous judgment has already been fixed through Christ change how you feel about injustice you currently see unresolved?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Verse 9's refuge is specifically “for the oppressed” — this psalm doesn't promise a trouble-free life, but a reliable place to run to precisely when trouble or oppression is real and current.",
     "q": "Where do you currently need to run to God as a refuge, not because life is calm, but because something in it genuinely feels like oppression or pressure?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“They that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee” (v. 10) ties trust directly to actually knowing who God is, not just knowing facts about Him.",
     "q": "What would it look like this week to get to know God's name and character more specifically, in a way that naturally deepens your trust rather than just your knowledge?"
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
     "th": "This psalm sits comfortably alongside real concern for the oppressed and the nations, not just personal praise — David's worship reaches outward toward the wider world's need for justice.",
     "q": "Pray today for a specific person or situation currently under real pressure or oppression, asking God to be their refuge the way this psalm describes."
    }
   ]
  }
 ]
},
// Day 147
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A memorial instituted before it was even needed",
   "b": "God commanded Passover be kept “for ever” (Exodus 12:14) before the exodus had even finished happening — a memorial built in advance, so that generations who never saw Egypt would still remember exactly what God had done."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved from the final plague and the first Passover in Exodus 11–13, through David's tearful penitence in Psalm 6, to Jesus' triumphal entry and temple cleansing in Matthew 21, and David's confident praise of God's justice in Psalm 9.",
     "q": "Where this week did the Passover blood applied to a doorpost, or the pillar of cloud that never left, speak most directly into your own need for visible, personal evidence of God's protection and presence?"
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
     "th": "“The LORD hath heard the voice of my weeping. The LORD hath heard my supplication” (Psalm 6:8–9) — confidence that arrives with no new evidence, only trust that weeping had genuinely reached Him.",
     "q": "Sit quietly for a few minutes and simply rest in the truth that whatever you brought to God in tears this week, He heard it, whether or not anything visible has changed yet."
    }
   ]
  }
 ]
},
// Day 148
{
 "ref": "Exodus 14",
 "tag": "Old Testament",
 "api": "exodus+14",
 "sum": [
  "Pharaoh pursues Israel with his army after letting them go, trapping them at the Red Sea.",
  "Moses tells the terrified people to stand still and see the LORD's salvation.",
  "God divides the sea with a strong east wind, and Israel crosses on dry ground.",
  "The returning waters destroy Pharaoh's entire pursuing army, and Israel finally trusts the LORD and Moses."
 ],
 "nug": [
  {
   "h": "Terror met with stillness, not strategy",
   "b": "Trapped between the sea and Pharaoh's advancing army, Moses' instruction isn't a battle plan but “Fear ye not, stand still, and see the salvation of the LORD… The LORD shall fight for you, and ye shall hold your peace” (v. 13–14) — deliverance that required no combat skill from the people at all."
  },
  {
   "h": "A pillar that changes sides for one night",
   "b": "The same pillar of cloud that had been leading Israel moves behind them instead, becoming “a cloud and darkness” to the Egyptians while giving “light by night” to Israel (v. 19–20) — one presence, two completely different effects, depending on which side of it you were on."
  },
  {
   "h": "A rescue seen, not just heard about",
   "b": "“Israel saw that great work which the LORD did upon the Egyptians: and the people feared the LORD, and believed the LORD, and his servant Moses” (v. 31) — after generations of slavery and repeated broken promises, this is the moment real, lasting trust finally takes hold, because they'd actually watched it happen."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Isaiah 43:16 · 1 Corinthians 10:1–2 · Hebrews 11:29",
   "qs": [
    {
     "th": "Hebrews 11:29 names this exact crossing as an act of faith — “by faith they passed through the Red Sea as by dry land: which the Egyptians assaying to do were drowned” — the same physical event experienced as salvation by one group and judgment by another, depending entirely on faith.",
     "q": "Read Hebrews 11:29. What does it mean to you that the very same act — walking into the seabed — was safety for Israel and death for Egypt, decided by faith rather than by the ground itself?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses' instruction to “stand still” came at the exact moment when doing something, anything, would have felt far more natural than waiting.",
     "q": "Is there a situation right now where your instinct is to act immediately, but God might be asking you instead to “stand still” and trust Him to act first?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "It takes seeing the actual, visible outcome — the Egyptians dead on the seashore — before Israel's trust in the LORD and in Moses becomes settled and real (v. 31), rather than the promises alone being enough.",
     "q": "Where has actually seeing God come through, rather than simply hearing a promise, been what finally settled real trust for you in the past?"
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
     "th": "The very army that had enslaved and pursued Israel for generations was completely destroyed in a single morning, while not one Israelite was harmed.",
     "q": "Thank God today for a specific threat or pursuer in your own life — literal or otherwise — that He has already dealt with completely, even if it took longer than you wanted."
    }
   ]
  }
 ]
},
// Day 149
{
 "ref": "Exodus 15",
 "tag": "Old Testament",
 "api": "exodus+15",
 "sum": [
  "Moses and Israel sing a song of triumph celebrating God's victory over Pharaoh's army.",
  "Miriam leads the women in dance and song with the same refrain.",
  "Three days into the wilderness, the people find only bitter water at Marah, and God makes it sweet.",
  "God gives a statute there and promises healing, and Israel camps at Elim's wells and palm trees."
 ],
 "nug": [
  {
   "h": "A song that names God's uniqueness directly",
   "b": "“Who is like unto thee, O LORD, among the gods? who is like thee, glorious in holiness, fearful in praises, doing wonders?” (v. 11) — worship that isn't just gratitude for one rescue, but a direct claim about God's incomparable character compared to every rival."
  },
  {
   "h": "Celebration that doesn't last past the next thirst",
   "b": "Only three days after singing this triumphant song, the same people are bitterly complaining at Marah's undrinkable water (v. 22–24) — a strikingly quick turn from the highest praise to renewed grumbling, showing how fast a real crisis can eclipse a recent, real deliverance."
  },
  {
   "h": "A name revealed through healing, not just rescue",
   "b": "After the water is made sweet, God gives Himself a new title connected directly to this event: “I am the LORD that healeth thee” (v. 26) — a name Israel first learns not through the sea crossing, but through a smaller, ordinary provision of drinkable water."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Revelation 15:3 · Exodus 23:25 · Jeremiah 2:2",
   "qs": [
    {
     "th": "Revelation 15:3 pictures the redeemed in heaven singing “the song of Moses the servant of God, and the song of the Lamb” — this exact wilderness song of deliverance still being sung, joined together with a song about the Lamb, at the very end of the story.",
     "q": "Read Revelation 15:3. How does knowing this ancient song of deliverance is still being sung at the end of Scripture change how you sing your own songs of thanksgiving today?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The gap between the triumphant singing of verses 1–21 and the bitter complaining at Marah just three days later (v. 22–24) is remarkably short — recent, genuine praise didn't automatically prevent a new complaint when a new hardship arrived.",
     "q": "Has a recent, genuine experience of God's goodness ever failed to carry you through the very next difficulty, the way it apparently didn't for Israel here? How did you respond?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God doesn't rebuke the people for their thirst at Marah, but responds by showing Moses a tree that, once cast into the water, makes it sweet (v. 25) — provision meeting a real, physical need without lecture first.",
     "q": "Where do you need to trust that God can meet a genuine, practical need in your life right now without you first having to prove you deserve it?"
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
     "th": "The new name God gives Himself at Marah — “the LORD that healeth thee” (v. 26) — was learned specifically through a small, unglamorous provision of drinkable water, not through the dramatic Red Sea crossing.",
     "q": "Sit quietly and consider whether God might be revealing something of His character to you right now through a small, unglamorous provision rather than a dramatic one."
    }
   ]
  }
 ]
},
// Day 150
{
 "ref": "Psalm 13",
 "tag": "Psalms & Wisdom",
 "api": "psalms+13",
 "sum": [
  "David repeatedly asks God how long he must wait, feeling forgotten and sorrowful.",
  "He asks God to consider and answer him before his enemy triumphs.",
  "He turns from lament to trust, declaring he will sing because God has dealt bountifully with him."
 ],
 "nug": [
  {
   "h": "A question asked four times in two verses",
   "b": "“How long wilt thou forget me, O LORD?… How long wilt thou hide thy face from me? How long shall I take counsel in my soul… How long shall mine enemy be exalted over me?” (v. 1–2) — the same anguished question repeated, unanswered, piling up before any resolution arrives."
  },
  {
   "h": "A request for God to simply look",
   "b": "“Consider and hear me, O LORD my God: lighten mine eyes” (v. 3) — not a request for an explanation or a miracle, just the plain plea for God's attention to actually turn toward him."
  },
  {
   "h": "A turn without a stated cause",
   "b": "Verse 5 shifts abruptly — “But I have trusted in thy mercy; my heart shall rejoice in thy salvation” — nothing in the psalm's circumstances has changed between verse 4's despair and verse 5's trust, only David's own choice to lean back on what he already knew of God."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 8:26 · Habakkuk 1:2 · Lamentations 3:19–23",
   "qs": [
    {
     "th": "Habakkuk opens his whole prophecy with almost identical language — “O LORD, how long shall I cry, and thou wilt not hear!” (Habakkuk 1:2) — showing this exact kind of honest, repeated “how long” prayer wasn't unique to David but a recognised, legitimate way for God's people across the Old Testament to bring real waiting before Him.",
     "q": "Read Habakkuk 1:2. Why might it matter that more than one biblical writer, across different centuries, prayed this same kind of impatient, honest question rather than only patient, settled trust?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David's fourfold “how long” isn't resolved by new information arriving — he simply chooses, mid-psalm, to trust God's mercy again, the same mercy that hadn't visibly changed anything yet.",
     "q": "What's a “how long” question you've been quietly repeating to God? Could you, like David, choose to trust His mercy again even before that question is answered?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The short, tight structure of this psalm — three brief movements of complaint, request and trust — makes it usable as a real prayer in almost any season of genuine waiting, however specific the actual circumstance.",
     "q": "Try praying this psalm's own three movements as your own prayer today: name your \"how long\", ask God to consider you, then declare trust in His mercy, even before the waiting ends."
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
     "th": "David's honest repetition of “how long” across four questions is never treated in Scripture as a lack of faith — it sits directly beside, not opposed to, the trust that follows in verse 5.",
     "q": "Is there impatience or frustration with God's timing that you've been suppressing rather than admitting honestly, as if naming it plainly would be unfaithful? Confess that honestly today."
    }
   ]
  }
 ]
},
// Day 151
{
 "ref": "Exodus 16",
 "tag": "Old Testament",
 "api": "exodus+16",
 "sum": [
  "The people complain of hunger, longing for Egypt's food, and God promises bread from heaven.",
  "Manna appears each morning and quail each evening, with instructions to gather only enough for the day.",
  "Some who gather too much or try to keep manna overnight find it spoils, except before the sabbath.",
  "A pot of manna is kept permanently before the Testimony as a reminder of God's provision."
 ],
 "nug": [
  {
   "h": "A complaint that romanticises real slavery",
   "b": "“Would to God we had died by the hand of the LORD in the land of Egypt, when we sat by the flesh pots, and when we did eat bread to the full” (v. 3) — hunger making even the memory of slavery look appealing, a vivid picture of how present hardship can distort memory of the past."
  },
  {
   "h": "Provision measured to exactly what's needed, no more",
   "b": "“He that gathered much had nothing over, and he that gathered little had no lack; they gathered every man according to his eating” (v. 18) — enough for everyone, but no surplus to hoard, requiring fresh daily dependence rather than stockpiling."
  },
  {
   "h": "A pattern that anticipates the sabbath before the command is formally given",
   "b": "The double portion gathered on the sixth day, with none appearing on the seventh (v. 22–27), builds a weekly rhythm of rest directly into daily provision itself, weeks before the fuller sabbath command is given at Sinai in chapter 20."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 8:3 · John 6:31–35 · Matthew 6:11",
   "qs": [
    {
     "th": "Jesus directly applies this chapter to Himself, telling the crowd their ancestors ate manna and died, but “I am the bread of life… he that cometh to me shall never hunger” (John 6:31–35) — daily physical provision in the wilderness becomes, centuries later, a picture of Jesus Himself as what truly satisfies.",
     "q": "Read John 6:31–35. How does thinking of Jesus as your daily “bread” — gathered fresh, not stockpiled — change how you approach dependence on Him day to day?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The instruction to gather only a day's worth, trusting fresh provision tomorrow, runs directly against the instinct to secure and stockpile as much as possible while it's available.",
     "q": "Where in your own life are you tempted to hoard or over-secure something — resources, reassurance, control — rather than trusting God for what today specifically requires?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Some people ignored the instruction and tried keeping manna overnight anyway, and it bred worms and stank (v. 20) — disobedience here producing not punishment from outside, but simply the natural, unpleasant result of not trusting the instruction as given.",
     "q": "Is there an instruction from God you've been quietly working around, the way some tried to keep manna overnight, and what has the natural result of that been?"
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
     "th": "The whole community depended daily on provision that came from outside themselves entirely — no one able to manufacture or guarantee it by their own effort, however skilled or hardworking.",
     "q": "Pray today for someone you know who is in a genuine season of daily need, asking God to provide for them the way He provided manna, one day at a time."
    }
   ]
  }
 ]
},
// Day 152
{
 "ref": "Matthew 22",
 "tag": "New Testament",
 "api": "matthew+22",
 "sum": [
  "Jesus tells the parable of the wedding feast, where invited guests refuse and others are gathered instead.",
  "He answers a trap about paying taxes to Caesar with a call to render to Caesar and to God what belongs to each.",
  "He silences the Sadducees' question about the resurrection by pointing to God as the God of the living.",
  "He names the greatest commandment as loving God, and the second as loving one's neighbour as oneself."
 ],
 "nug": [
  {
   "h": "A feast filled by substitutes after the original guests refuse",
   "b": "When those first invited to the king's son's wedding refuse and even mistreat the messengers, the king sends servants into the highways to gather anyone they can find, “both bad and good” (v. 9–10) — the feast still happens, just with an unexpected guest list."
  },
  {
   "h": "A coin used to expose a trap, not just answer it",
   "b": "Asked whether it's lawful to pay tribute to Caesar, Jesus asks for the actual coin, points to whose image is on it, and answers, “Render therefore unto Caesar the things which are Caesar's; and unto God the things that are God's” (v. 21) — turning the trick question itself into the teaching moment."
  },
  {
   "h": "Two commandments named as the hinge of everything else",
   "b": "“On these two commandments hang all the law and the prophets” (v. 40) — Jesus doesn't add a new command here so much as name the two that everything else in Scripture's moral instruction actually depends on."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 6:5 · Leviticus 19:18 · Romans 13:7",
   "qs": [
    {
     "th": "Paul's instruction in Romans 13:7 to “render therefore to all their dues: tribute to whom tribute is due… honour to whom honour” directly echoes Jesus' language here, applying the same principle of giving each rightful authority its due more broadly to ordinary civic life.",
     "q": "Read Romans 13:7. Where in your own life do you find it hardest to genuinely give both Caesar and God what's rightfully theirs, without one crowding out the other?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The man found at the wedding feast without a wedding garment (v. 11–13) had accepted the invitation but hadn't actually prepared for it — present at the feast, but not truly ready for it.",
     "q": "Is there an area where you've said yes to something God's asked of you, but haven't actually done the preparing that saying yes should have led to?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' answer to the Sadducees corrects a wrong assumption about the resurrection before even answering their specific trick question — “Ye do err, not knowing the scriptures, nor the power of God” (v. 29).",
     "q": "Is there an assumption about God or Scripture you've been operating on that might need correcting before you can rightly understand a harder question you're currently wrestling with?"
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
     "th": "The lawyer's trick question about the greatest commandment gets an answer that quietly exposes how far short most religious performance falls of what actually matters most — genuine love, not correct technicality.",
     "q": "Where has your own faith been more about technical correctness than the genuine love for God and neighbour Jesus names here as the actual point? Name that honestly."
    }
   ]
  }
 ]
},
// Day 153
{
 "ref": "Psalm 17",
 "tag": "Psalms & Wisdom",
 "api": "psalms+17",
 "sum": [
  "David asks God to hear his righteous prayer and to test his heart, confident he will find nothing wrong.",
  "He asks to be kept as the apple of God's eye and hidden under the shadow of His wings.",
  "He contrasts his own hope in God with the prosperity of the wicked, and looks forward to seeing God's face."
 ],
 "nug": [
  {
   "h": "A confidence that invites real scrutiny",
   "b": "“Thou hast proved mine heart; thou hast visited me in the night; thou hast tried me, and shalt find nothing” (v. 3) — David doesn't ask God to overlook his heart, but to examine it closely, confident that close examination will actually vindicate him here."
  },
  {
   "h": "Two images of protection stacked together",
   "b": "“Keep me as the apple of the eye, hide me under the shadow of thy wings” (v. 8) — the most sensitive, instinctively protected part of the body, and a mother bird's most instinctive shelter of her young, both used in the same verse for how David wants to be kept."
  },
  {
   "h": "Satisfaction placed entirely beyond this life",
   "b": "“As for me, I will behold thy face in righteousness: I shall be satisfied, when I awake, with thy likeness” (v. 15) — closing not with a request for present relief, but with hope fixed on a future, final waking into God's presence."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Zechariah 2:8 · Deuteronomy 32:10–11 · Psalm 91:4",
   "qs": [
    {
     "th": "Zechariah 2:8 describes God's own people as “the apple of his eye” — the exact image David uses of himself in verse 8 — showing this isn't just personal poetic language but a genuine, repeated description of how God actually regards His people.",
     "q": "Read Zechariah 2:8. How does knowing this image of being kept as “the apple of the eye” is used elsewhere in Scripture, not only here, deepen your confidence that it's true of you too?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David's invitation for God to test his heart and find nothing wrong (v. 3) comes from someone with genuine confidence in his own current integrity, not perfection, but honest uprightness before God in this specific matter.",
     "q": "Is there an area of your life right now where you could honestly, like David, invite God's close examination, confident it would hold up?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The image of being hidden under “the shadow of thy wings” (v. 8) pictures protection that's close, warm and personal, rather than distant or merely procedural.",
     "q": "Where do you need to picture God's protection over you as close and personal, like a bird sheltering its young, rather than distant or abstract?"
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
     "th": "The psalm's final hope — waking to behold God's face and likeness (v. 15) — treats the fullest, most complete satisfaction as something still ahead, not something this life alone could ever fully deliver.",
     "q": "Praise God today for the hope of one day seeing Him fully, letting that future hope shape how content you can be with what's only partial right now."
    }
   ]
  }
 ]
},
// Day 154
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A daily gathering that required daily trust",
   "b": "Israel couldn't stockpile manna for the future; it had to be gathered fresh “every man according to his eating” (Exodus 16:18), a whole nation's provision built around daily dependence rather than self-sufficiency."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week carried you from the Red Sea crossing and the bitter water at Marah in Exodus 14–16, through David's honest \"how long\" in Psalm 13, into Jesus' teaching on the wedding feast and the greatest commandment in Matthew 22, and David's confidence of being kept as the apple of God's eye in Psalm 17.",
     "q": "Where this week did the gap between a real deliverance (the Red Sea) and a fast return to complaint (Marah, and the wilderness hunger) mirror your own experience of how quickly a recent answer to prayer can be forgotten under new pressure?"
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
     "th": "“Keep me as the apple of the eye, hide me under the shadow of thy wings” (Psalm 17:8) — protection pictured as close, instinctive and personal.",
     "q": "Sit quietly for a few minutes and simply receive that image — that God's care for you is as instinctive and close as the protection of an eye, or a bird sheltering its young."
    }
   ]
  }
 ]
},
// Day 155
{
 "ref": "Exodus 17",
 "tag": "Old Testament",
 "api": "exodus+17",
 "sum": [
  "Israel complains bitterly for water, and God provides it from a rock at Horeb.",
  "The place is named Massah and Meribah because of the people's testing and strife.",
  "Israel fights and defeats Amalek while Moses holds up his hands, supported by Aaron and Hur.",
  "Moses builds an altar and names it Jehovahnissi, the LORD is my banner."
 ],
 "nug": [
  {
   "h": "A rock struck for water in front of watching elders",
   "b": "God tells Moses to strike “the rock in Horeb” in full view of the elders of Israel (v. 5–6), turning what could have been a private miracle into a publicly witnessed act of provision, with named observers accountable to what they'd seen."
  },
  {
   "h": "Hands that grow heavy, and help that steadies them",
   "b": "When Moses' hands grow tired, “Aaron and Hur stayed up his hands, the one on the one side, and the other on the other side; and his hands were steady until the going down of the sun” (v. 12) — victory dependent not on Moses' strength alone, but on two other men's willingness to physically hold him up."
  },
  {
   "h": "A name that credits the battle to God, not the general",
   "b": "Moses builds an altar and calls it “Jehovahnissi”, meaning “the LORD is my banner” (v. 15) — the victory memorialised not under Moses' or Joshua's name, but explicitly under God's."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Corinthians 10:4 · Galatians 6:2 · Isaiah 40:29–31",
   "qs": [
    {
     "th": "Paul identifies this very rock directly with Christ — “they drank of that spiritual Rock that followed them: and that Rock was Christ” (1 Corinthians 10:4) — a physical rock struck in the wilderness carrying, in hindsight, genuine spiritual meaning about the source of Israel's provision.",
     "q": "Read 1 Corinthians 10:4. How does it change your reading of this chapter to know Paul saw Christ Himself, not just a miracle, present in this rock?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses couldn't keep his own hands up alone for the whole battle — he needed Aaron and Hur's physical help to sustain something he genuinely couldn't sustain by himself.",
     "q": "Where in your own life do you need to admit, like Moses, that you can't hold something up alone, and actually ask for the kind of help Aaron and Hur gave?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Being “Aaron and Hur” to Moses wasn't a dramatic act — just steady, unglamorous physical support, holding his arms up hour after hour until the battle was won.",
     "q": "Who in your life currently needs you to be their steady, unglamorous support the way Aaron and Hur were for Moses, even if it feels like a small thing?"
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
     "th": "The place-names Massah (\"tempting\") and Meribah (\"chiding\") permanently mark this location with the people's own testing of God and quarrelling, rather than only with His provision.",
     "q": "Is there a pattern of testing or quarrelling with God over provision that you keep repeating, the way Israel does here, even after He's provided before? Name that honestly."
    }
   ]
  }
 ]
},
// Day 156
{
 "ref": "Exodus 18",
 "tag": "Old Testament",
 "api": "exodus+18",
 "sum": [
  "Jethro brings Moses' wife and sons to him and rejoices at hearing all God has done.",
  "Jethro observes Moses judging the people alone from morning until evening.",
  "Jethro advises Moses to appoint capable leaders to share the burden of judging smaller matters.",
  "Moses listens to his father-in-law's counsel and puts the new system in place."
 ],
 "nug": [
  {
   "h": "Outsider joy at what God has done",
   "b": "Jethro, a Midianite priest and not part of Israel himself, “rejoiced for all the goodness which the LORD had done to Israel” (v. 9) and offers sacrifice and shares a meal with Aaron and the elders (v. 12) — genuine praise coming from outside the covenant community entirely."
  },
  {
   "h": "An honest diagnosis of an unsustainable pattern",
   "b": "“The thing that thou doest is not good… thou wilt surely wear away, both thou, and this people that is with thee” (v. 17–18) — Jethro names plainly what Moses may not have wanted to admit himself, that good intentions alone don't prevent genuine burnout."
  },
  {
   "h": "A structure built for shared, scaled responsibility",
   "b": "Jethro's advice creates rulers of thousands, hundreds, fifties and tens (v. 21–22), so that only the hardest cases reach Moses directly — the same kind of load-sharing structure that later shapes much of Israel's civil and judicial life."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Numbers 11:14–17 · Acts 6:2–4 · Deuteronomy 1:9–13",
   "qs": [
    {
     "th": "Moses himself later recalls this exact decision in Deuteronomy 1:9–13, telling the next generation, “I am not able to bear you myself alone” — the same wisdom Jethro gave him here still shaping how he explained his own leadership decisions decades afterward.",
     "q": "Read Deuteronomy 1:9–13. Why do you think Moses chose to retell this specific piece of advice to a whole new generation, long after Jethro himself was gone?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Moses had apparently been judging every dispute personally, likely out of genuine devotion to the people, without recognising it was actually unsustainable and unfair to everyone waiting in line.",
     "q": "Is there a responsibility you've been carrying entirely alone out of good intentions, that an honest outsider might tell you, like Jethro told Moses, isn't actually sustainable?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "Jethro's counsel required real humility from Moses — receiving correction and structural advice from his father-in-law rather than insisting his own way, forged directly with God at Sinai, was the only right one.",
     "q": "Where might you need the humility to receive practical wisdom from someone outside your usual authority or expertise, the way Moses receives it here from Jethro?"
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
     "th": "The new system Jethro proposes exists specifically so that “every great matter they shall bring unto thee, but every small matter they shall judge” (v. 22) — shared responsibility freeing Moses to focus where he was actually most needed.",
     "q": "Pray today for leaders you know who are carrying too much alone, asking God to send them their own \"Jethro\" — someone willing to speak honest, practical wisdom."
    }
   ]
  }
 ]
},
// Day 157
{
 "ref": "Psalm 18",
 "tag": "Psalms & Wisdom",
 "api": "psalms+18",
 "sum": [
  "David praises God as his rock, fortress and deliverer from Saul and all his enemies.",
  "He describes being drawn out of deep waters and rescued because God delighted in him.",
  "He declares God's way perfect and His word tried, celebrating strength given for the battle."
 ],
 "nug": [
  {
   "h": "A pile-up of protective titles in a single breath",
   "b": "“The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower” (v. 2) — seven separate images of security stacked together, as if one description alone couldn't capture how safe David felt in God."
  },
  {
   "h": "Rescue pictured as being physically pulled from drowning",
   "b": "“He sent from above, he took me, he drew me out of many waters” (v. 16) — deliverance described not abstractly but as an active, physical rescue, someone actually reaching in and pulling a drowning man out."
  },
  {
   "h": "Reliability tested and proven, not just assumed",
   "b": "“As for God, his way is perfect: the word of the LORD is tried: he is a buckler to all those that trust in him” (v. 30) — God's trustworthiness described using the language of something refined and tested by fire, proven reliable under genuine pressure."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Samuel 22:1–3 · Romans 8:37 · Psalm 40:2",
   "qs": [
    {
     "th": "This psalm appears almost word for word as David's own song near the end of his life in 2 Samuel 22, sung, according to its heading, specifically “in the day that the LORD delivered him from the hand of all his enemies, and from the hand of Saul” — a lifetime's accumulated testimony, not a single moment's relief.",
     "q": "Read 2 Samuel 22:1. Knowing this psalm summarises an entire lifetime of deliverance rather than one incident, how does that change how you use it in your own prayer?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Verse 16's image of being drawn out of “many waters” pictures a rescue from something David could not have gotten himself out of alone, however strong or skilled he was.",
     "q": "Is there a situation right now that feels like being pulled under \"many waters\", where you need to trust God to reach in and draw you out rather than trying to swim free on your own strength?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "David describes God's “gentleness” as what “made me great” (v. 35 in many translations) — strength and success attributed not to his own ability, but to God's patient, gentle dealing with him over time.",
     "q": "Where in your life has God's gentleness, rather than pressure or force, actually been what enabled real growth or strength in you?"
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
     "th": "The sheer accumulation of protective images in verse 2 — rock, fortress, deliverer, strength, buckler, horn of salvation, high tower — reads like someone who has genuinely run out of single words to capture how safe God has made him feel.",
     "q": "Write your own list of images, however many it takes, for what God has specifically been to you through a difficult season — let the list be as long as David's if it needs to be."
    }
   ]
  }
 ]
},
// Day 158
{
 "ref": "Exodus 19",
 "tag": "Old Testament",
 "api": "exodus+19",
 "sum": [
  "Israel arrives at Sinai, and God proposes a covenant, calling them a kingdom of priests and a holy nation.",
  "The people agree together to do all that the LORD has spoken.",
  "God instructs Moses to set bounds around the mountain and have the people sanctify themselves.",
  "God descends on the mountain in thunder, lightning, thick cloud and trumpet, and the mountain quakes greatly."
 ],
 "nug": [
  {
   "h": "A rescue recalled before any command is given",
   "b": "Before laying out a single law, God reminds Israel first of what He's already done: “Ye have seen what I did unto the Egyptians, and how I bare you on eagles' wings, and brought you unto myself” (v. 4) — relationship and rescue established before obligation is even mentioned."
  },
  {
   "h": "A remarkably specific job description offered to a former slave nation",
   "b": "“Ye shall be unto me a kingdom of priests, and an holy nation” (v. 6) — an identity of dignity and purpose offered to people who, one generation earlier, had no status or voice of their own at all."
  },
  {
   "h": "A response given together, in a single voice",
   "b": "“All the people answered together, and said, All that the LORD hath spoken we will do” (v. 8) — not individual, scattered commitments, but one unified response from the entire assembled nation."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Peter 2:9 · Hebrews 12:18–21 · Deuteronomy 4:11–13",
   "qs": [
    {
     "th": "1 Peter 2:9 applies almost identical language directly to the church — “ye are a chosen generation, a royal priesthood, an holy nation” — the same specific identity offered to Israel here at Sinai extended, in the New Testament, to all who belong to Christ.",
     "q": "Read 1 Peter 2:9. What does it mean to you personally that the exact identity God offers Israel here — a kingdom of priests, a holy nation — is described in the New Testament as belonging to you too?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The terrifying theophany of thunder, lightning, thick cloud and trumpet (v. 16–19) made unmistakably clear that approaching this holy God wasn't casual or safe to treat carelessly.",
     "q": "Has your own sense of God's holiness become too casual or familiar recently? What would it look like to recover some genuine reverence this week?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God's proposal in verses 4–6 offers relationship and identity before a single law is spoken — obedience invited as response to what God had already done, not as a condition for being loved first.",
     "q": "Where might you be treating obedience as something you have to earn love through, rather than as a response to love and rescue already freely given?"
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
     "th": "Israel's confident, unified promise — “All that the LORD hath spoken we will do” (v. 8) — would, within a matter of weeks, be broken dramatically at the golden calf, a sobering reminder of how quickly a sincere commitment can be abandoned.",
     "q": "Is there a sincere promise you've made to God that, like Israel's here, you're at risk of not keeping under pressure? Name that honestly before it's tested further."
    }
   ]
  }
 ]
},
// Day 159
{
 "ref": "Matthew 23",
 "tag": "New Testament",
 "api": "matthew+23",
 "sum": [
  "Jesus tells the crowds and His disciples to obey the scribes and Pharisees' teaching but not their example.",
  "He pronounces a series of woes against the scribes and Pharisees for hypocrisy and misplaced priorities.",
  "He calls them whited sepulchres, beautiful outside but full of death within.",
  "He laments over Jerusalem's refusal to be gathered, like a hen gathering her chickens."
 ],
 "nug": [
  {
   "h": "A gap named directly between teaching and living",
   "b": "“All therefore whatsoever they bid you observe, that observe and do; but do not ye after their works: for they say, and do not” (v. 3) — Jesus doesn't dismiss their correct teaching, only their failure to actually live by it themselves."
  },
  {
   "h": "Tiny obedience elevated over the things that actually matter most",
   "b": "“Ye pay tithe of mint and anise and cummin, and have omitted the weightier matters of the law, judgment, mercy, and faith” (v. 23) — meticulous, technically accurate obedience in trivial matters used to mask neglect of justice, mercy and faithfulness themselves."
  },
  {
   "h": "An image that's beautiful outside and dead within",
   "b": "“Ye are like unto whited sepulchres, which indeed appear beautiful outward, but are within full of dead men's bones, and of all uncleanness” (v. 27) — one of Jesus' sharpest images, aimed directly at appearances maintained over genuine inward reality."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 11:39–44 · Isaiah 29:13 · Luke 13:34",
   "qs": [
    {
     "th": "Isaiah had already named this exact problem centuries earlier — “this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me” (Isaiah 29:13) — Jesus' woes here directly continuing a long prophetic tradition against religious performance without real devotion.",
     "q": "Read Isaiah 29:13. How does knowing this warning against empty outward religion goes back centuries before Jesus change how seriously you take it in your own life?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' woes aren't aimed at people outside the faith, but at religiously devoted insiders whose outward performance had quietly outpaced their inward devotion.",
     "q": "Where might your own religious practice be more about outward appearance than inward reality right now, the way Jesus describes the scribes and Pharisees?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The chapter's final verses shift suddenly from sharp rebuke to genuine grief — “O Jerusalem, Jerusalem… how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!” (v. 37) — anger and heartbroken love expressed together, not in contradiction.",
     "q": "Where do you need to hold both honest rebuke of something wrong and genuine, heartbroken love for the person or situation involved, the way Jesus does here?"
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
     "th": "Jesus' lament over Jerusalem is tender rather than triumphant, even directed at a city that would, within days, call for His own death.",
     "q": "Sit quietly with Jesus' image of the hen gathering her chickens, and consider whether there's an area of your own life where you've resisted being gathered in, the way Jerusalem did."
    }
   ]
  }
 ]
},
// Day 160
{
 "ref": "Psalm 22",
 "tag": "Psalms & Wisdom",
 "api": "psalms+22",
 "sum": [
  "David cries out feeling forsaken by God, surrounded and mocked by enemies.",
  "He describes vivid physical suffering, including pierced hands and feet and divided garments.",
  "He turns from anguish to declare he will praise God and proclaim His name to future generations."
 ],
 "nug": [
  {
   "h": "An opening cry Jesus makes His own on the cross",
   "b": "“My God, my God, why hast thou forsaken me?” (v. 1) is quoted directly by Jesus in Matthew 27:46, using this exact psalm's opening words in His own moment of deepest anguish."
  },
  {
   "h": "Details that match the crucifixion centuries before it happened",
   "b": "“They pierced my hands and my feet” (v. 16) and “they part my garments among them, and cast lots upon my vesture” (v. 18) describe specific physical details of crucifixion — a Roman execution method not even practised when this psalm was written — matched precisely by the Gospel accounts of Jesus' death."
  },
  {
   "h": "A pivot from abandonment to worldwide praise",
   "b": "The psalm turns from raw anguish to “I will declare thy name unto my brethren” (v. 22) and looks forward to “all the ends of the world shall remember and turn unto the LORD” (v. 27) — suffering that somehow becomes the very basis for praise reaching every nation."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Matthew 27:35,46 · John 19:23–24 · Hebrews 2:11–12",
   "qs": [
    {
     "th": "Hebrews 2:11–12 quotes this psalm's verse 22 directly of Jesus — “I will declare thy name unto my brethren” — connecting His willingness to call believers His own “brethren” directly back to this same psalm of suffering that also holds His cry of forsakenness.",
     "q": "Read Hebrews 2:11–12. How does it change your reading of Psalm 22 to know its cry of abandonment and its declaration of praise are both spoken, in different ways, by Jesus Himself?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "This psalm names real physical and emotional suffering in vivid, specific detail — mockery, physical distress, genuine feelings of abandonment — without pretending the pain wasn't real.",
     "q": "Is there suffering in your own life you've been reluctant to describe as honestly and specifically as this psalm does? What would naming it that plainly to God look like?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's turn toward praise in verse 22 onward doesn't erase or minimise the anguish of the opening verses — both sit together in the same prayer, as genuinely true at once.",
     "q": "Where might you need to let both real anguish and genuine praise coexist honestly in your own prayer right now, rather than forcing one to replace the other?"
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
     "th": "Despite beginning with the most desolate cry in the Psalter, this psalm ends looking forward to a coming generation who “shall come, and shall declare his righteousness unto a people that shall be born, that he hath done this” (v. 31) — hope stretching far beyond the psalmist's own lifetime.",
     "q": "Praise God today that even the deepest suffering, His own Son's included, was not the final word — declare that truth out loud as worship, whatever your current circumstances."
    }
   ]
  }
 ]
},
// Day 161
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A nation called before a single law was given",
   "b": "Before giving a single command at Sinai, God first reminded Israel what He had already done for them — \"I bare you on eagles' wings, and brought you unto myself\" (Exodus 19:4) — identity and rescue coming before obligation."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week moved through water from the rock and the battle with Amalek in Exodus 17, Jethro's wise counsel in Exodus 18, David's stacked images of rescue in Psalm 18, the covenant offered at Sinai in Exodus 19, Jesus' woes and lament in Matthew 23, and the Messianic anguish and hope of Psalm 22.",
     "q": "Where this week did Moses needing Aaron and Hur's help to hold up his hands, or Jethro's honest counsel about an unsustainable burden, speak into an area where you've been trying to carry too much entirely alone?"
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
     "th": "“My God, my God, why hast thou forsaken me?” (Psalm 22:1) — words of real anguish that Jesus Himself prayed, showing you honest lament has always had a place before God.",
     "q": "Sit quietly with whatever your own honest \"why\" is right now, trusting, as this psalm eventually shows, that lament and praise are allowed to sit in the same prayer."
    }
   ]
  }
 ]
},
// Day 162
{
 "ref": "Exodus 20",
 "tag": "Old Testament",
 "api": "exodus+20",
 "sum": [
  "God speaks the Ten Commandments directly to Israel at Sinai.",
  "The commandments cover worship of God alone, the sabbath, and honouring parents.",
  "Further commandments prohibit murder, adultery, theft, false witness and coveting.",
  "The terrified people ask Moses to speak to them instead of God, fearing they will die."
 ],
 "nug": [
  {
   "h": "Commandments introduced by rescue, not just rule",
   "b": "Before a single command is listed, God identifies Himself first: “I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage” (v. 2) — obedience framed as response to rescue already accomplished, not a condition for earning it."
  },
  {
   "h": "A people who ask for a mediator rather than direct access",
   "b": "Overwhelmed by thunder, lightning and smoke, the people say to Moses, “Speak thou with us, and we will hear: but let not God speak with us, lest we die” (v. 19) — genuine reverence tipping into a request for someone else to stand between them and God."
  },
  {
   "h": "Fear explained as something with a purpose",
   "b": "Moses' response — “Fear not: for God is come to prove you, and that his fear may be before your faces, that ye sin not” (v. 20) — treats healthy fear of God as protective, meant to keep the people from sin rather than merely to frighten them."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 5:6–21 · Matthew 22:37–40 · Hebrews 12:18–24",
   "qs": [
    {
     "th": "Hebrews 12:18–24 deliberately contrasts this terrifying scene at Sinai with believers' access to God through Christ — “ye are come unto mount Sion… but to the mount that might be touched, and that burned with fire… ye are not come” — the same holy God now approached differently because of Jesus.",
     "q": "Read Hebrews 12:18–24. How does contrasting Sinai's terror with the access believers now have through Christ change how you think about approaching God today?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The people's fear at Sinai led them to want distance from God, asking Moses to be the go-between rather than approaching directly themselves.",
     "q": "Where in your own life do you sometimes prefer distance or an intermediary in your relationship with God, rather than direct, honest closeness?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The commandments move outward from Israel's relationship with God (v. 3–11) to relationships with other people (v. 12–17) — right worship and right living treated as inseparable, not two unrelated categories.",
     "q": "Is there an area where your worship of God and your treatment of other people have become disconnected from each other? Name that honestly."
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
     "th": "The commandment against coveting (v. 17) is unusual among the ten for addressing an internal desire rather than an external action — naming that sin begins in the heart long before it ever becomes visible behaviour.",
     "q": "Is there a covetous desire you've kept hidden because it hasn't yet become visible action? Confess that honestly to God today, before it does."
    }
   ]
  }
 ]
},
// Day 163
{
 "ref": "Exodus 21",
 "tag": "Old Testament",
 "api": "exodus+21",
 "sum": [
  "Laws are given regulating Hebrew servants, including release after six years.",
  "Case laws address personal injury, violence and accidental harm.",
  "The principle of proportional restitution, \"eye for eye, tooth for tooth\", is established.",
  "Laws address responsibility for an ox that gores a person."
 ],
 "nug": [
  {
   "h": "Servanthood with a built-in expiry date",
   "b": "“If thou buy an Hebrew servant, six years he shall serve: and in the seventh he shall go out free for nothing” (v. 2) — even within a system radically different from freedom as understood today, a fixed, guaranteed limit is written directly into the law."
  },
  {
   "h": "A servant who can choose to stay out of love",
   "b": "If a servant genuinely loves his master and household and doesn't want to leave, his ear is bored with an awl at the door as a permanent sign of a freely chosen, ongoing commitment (v. 5–6) — continued service framed as love-driven choice, not forced obligation."
  },
  {
   "h": "Proportion built into justice deliberately",
   "b": "“Eye for eye, tooth for tooth” (v. 24) is often misread as encouraging harsh revenge, but functions the opposite way in context — limiting punishment to match the actual harm done, preventing escalation into disproportionate retaliation."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 15:12–15 · Matthew 5:38–39 · Leviticus 24:19–20",
   "qs": [
    {
     "th": "Jesus later takes this exact principle — “an eye for an eye, and a tooth for a tooth” — and pushes His followers even further, toward not resisting evil and turning the other cheek (Matthew 5:38–39), building on the law's limitation of retaliation rather than contradicting it.",
     "q": "Read Matthew 5:38–39. How does understanding this law's original purpose — limiting revenge, not encouraging it — change how you hear Jesus' further teaching on the subject?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The servant who chooses to stay permanently out of love for his master, marked by a pierced ear (v. 5–6), models a kind of devoted, freely chosen service rather than mere obligation.",
     "q": "Is there an area of your life where you're serving God or someone else more out of reluctant obligation than the freely chosen love this servant models?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "These case laws apply the Ten Commandments' broad principles to very specific, everyday situations — showing that God's law was meant to shape ordinary daily fairness, not remain abstract.",
     "q": "Where in your own ordinary, everyday dealings with others could God's principles of justice and fairness be applied more specifically and concretely, rather than staying abstract?"
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
     "th": "These laws repeatedly protect people who had little power to protect themselves — servants, the injured, the vulnerable — building fairness into a society that could easily have ignored them entirely.",
     "q": "Pray today for people in situations of limited power or protection in your own community, asking God for justice and fair treatment on their behalf."
    }
   ]
  }
 ]
},
// Day 164
{
 "ref": "Psalm 29",
 "tag": "Psalms & Wisdom",
 "api": "psalms+29",
 "sum": [
  "David calls the heavenly beings to ascribe glory and strength to the LORD.",
  "He describes the voice of the LORD as powerful over waters, cedars and the wilderness.",
  "He declares the LORD sits enthroned over the flood, giving strength and peace to His people."
 ],
 "nug": [
  {
   "h": "Worship demanded of heavenly beings, not just people",
   "b": "“Give unto the LORD, O ye mighty, give unto the LORD glory and strength” (v. 1) opens by calling on powerful heavenly beings themselves to worship — a scale of address far beyond an ordinary human congregation."
  },
  {
   "h": "A storm described entirely as God's voice",
   "b": "Seven times the psalm repeats “the voice of the LORD” (v. 3–9), describing a violent thunderstorm — breaking cedars, shaking the wilderness, stripping forests bare — as, at its core, simply God speaking."
  },
  {
   "h": "Strength that ends in peace, not just power",
   "b": "The psalm's closing note isn't raw power but “The LORD will give strength unto his people; the LORD will bless his people with peace” (v. 11) — the same overwhelming voice that shakes forests also blesses His own people with calm."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Job 37:2–5 · Mark 4:39 · Revelation 19:6",
   "qs": [
    {
     "th": "Mark 4:39 records Jesus speaking directly to a literal storm — “Peace, be still. And the wind ceased, and there was a great calm” — the same authority this psalm ascribes to “the voice of the LORD” over storm and flood, exercised in person by Jesus on the Sea of Galilee.",
     "q": "Read Mark 4:39. How does knowing Jesus exercised this exact kind of authority over a real storm change how you read this psalm's description of God's voice over creation?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's overwhelming picture of God's power in the storm could easily produce only fear, yet it ends specifically with peace being given to His people (v. 11), not just awe at His strength.",
     "q": "How do you hold together genuine awe at God's overwhelming power with the specific peace He promises His own people, without one cancelling out the other?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "This psalm was likely written watching an actual storm move across the land — worship shaped directly by observing creation's power rather than only abstract theological reflection.",
     "q": "Where might paying closer attention to the power and detail of the natural world around you this week deepen your own worship, the way this storm seems to have shaped David's?"
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
     "th": "The sevenfold repetition of “the voice of the LORD” builds a rhythm of praise that intensifies verse by verse, mirroring a storm building in strength as it moves across the land.",
     "q": "Read this psalm slowly out loud today, letting its repeated \"voice of the LORD\" build toward genuine praise the way its own structure is designed to do."
    }
   ]
  }
 ]
},
// Day 165
{
 "ref": "Exodus 22",
 "tag": "Old Testament",
 "api": "exodus+22",
 "sum": [
  "Laws address restitution for theft and damage to property.",
  "Regulations cover social responsibility, including seduction, sorcery and treatment of animals.",
  "God commands that strangers, widows and orphans must not be oppressed.",
  "Laws require lending without usury to the poor and returning a pledged garment by sundown."
 ],
 "nug": [
  {
   "h": "Restitution set well above simple replacement",
   "b": "“If a man shall steal an ox, or a sheep, and kill it, or sell it; he shall restore five oxen for an ox, and four sheep for a sheep” (v. 1) — theft repaid at multiples of the original value, real deterrent built into restitution rather than mere replacement."
  },
  {
   "h": "Protection rooted in Israel's own memory",
   "b": "“Thou shalt neither vex a stranger, nor oppress him: for ye were strangers in the land of Egypt” (v. 21) — the command to treat outsiders well is grounded directly in Israel's own experience of having once been mistreated outsiders themselves."
  },
  {
   "h": "A promise attached to obedience toward the vulnerable",
   "b": "“Ye shall not afflict any widow, or fatherless child. If thou afflict them in any wise, and they cry at all unto me, I will surely hear their cry” (v. 22–23) — God personally attaches Himself to hearing the cry of exactly these vulnerable people if they're mistreated."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Deuteronomy 24:17–18 · James 1:27 · Leviticus 19:34",
   "qs": [
    {
     "th": "James 1:27 defines “pure religion and undefiled before God” as, in part, “to visit the fatherless and widows in their affliction” — the exact same vulnerable groups named in this Exodus law, still treated centuries later as the measure of genuine, undefiled devotion to God.",
     "q": "Read James 1:27. How does knowing this ancient law's concern for widows and orphans is still used centuries later to define genuine religion change how seriously you take it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Israel's own memory of being mistreated strangers in Egypt is used directly as the reason they must now treat strangers well — personal experience of hardship shaping how they treat others in the same position.",
     "q": "Has a hardship you've personally experienced shaped how you now treat others facing something similar, the way Israel's memory of Egypt was meant to shape their treatment of strangers?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The requirement to return a poor person's pledged garment by sundown, “for that is his covering… wherein shall he sleep?” (v. 26–27), shows law attentive to a genuinely small, practical, physical need — one night's warmth.",
     "q": "Where might you need to pay closer attention to someone's small, practical, physical needs, rather than only their larger circumstances?"
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
     "th": "God's promise to “surely hear” the cry of an afflicted widow or orphan (v. 23) makes their mistreatment a matter He takes personally, not merely a social or legal issue.",
     "q": "Is there a vulnerable person you've overlooked or treated carelessly, whose cry, according to this passage, God takes personally? Confess that honestly and consider what repair might look like."
    }
   ]
  }
 ]
},
// Day 166
{
 "ref": "Matthew 24",
 "tag": "New Testament",
 "api": "matthew+24",
 "sum": [
  "Jesus predicts the destruction of the temple and describes signs preceding the end of the age.",
  "He warns of false christs, wars, persecution and the need to endure to the end.",
  "He states that no one knows the day or hour of His return, not even the angels.",
  "He calls His followers to watch and be ready, since the Son of man comes at an hour they don't expect."
 ],
 "nug": [
  {
   "h": "A prediction that stunned the disciples",
   "b": "Pointing to the magnificent temple buildings, Jesus says plainly, “There shall not be left here one stone upon another, that shall not be thrown down” (v. 2) — a prophecy fulfilled with striking precision when Rome destroyed Jerusalem in AD 70."
  },
  {
   "h": "Endurance named as the actual measure of faithfulness",
   "b": "“He that shall endure unto the end, the same shall be saved” (v. 13) — set against a backdrop of iniquity abounding and love growing cold (v. 12), endurance through difficulty, not simply an initial decision, held up as what genuinely matters."
  },
  {
   "h": "Certainty deliberately withheld from even the angels",
   "b": "“Of that day and hour knoweth no man, no, not the angels of heaven, but my Father only” (v. 36) — Jesus Himself names the limits of what even heavenly beings know about His return's exact timing."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Luke 21:20–24 · 1 Thessalonians 5:1–6 · Mark 13:32–37",
   "qs": [
    {
     "th": "Paul's instruction to the Thessalonians — “ye, brethren, are not in darkness, that that day should overtake you as a thief… let us watch and be sober” (1 Thessalonians 5:4,6) — takes Jesus' warning here about unexpected timing and turns it into practical instruction for ordinary daily readiness, not anxious speculation.",
     "q": "Read 1 Thessalonians 5:1–6. How does Paul's instruction to be “sober” and “watch” rather than speculate about timing shape how you personally should live in light of this chapter?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Jesus' warning about false christs and deceivers (v. 4–5, 11, 24) assumes His followers will need real discernment, not just general awareness that deception is possible.",
     "q": "What practices help you stay discerning about spiritual claims or teachings you encounter, rather than being easily swayed by something that merely sounds convincing?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The instruction to “watch” (v. 42) and “be ye also ready” (v. 44) is repeated for emphasis, describing a posture of ongoing attentiveness rather than a single moment of preparation.",
     "q": "What would genuinely living \"ready\" look like for you this week, in the ordinary details of how you spend your time and attention?"
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
     "th": "Jesus deliberately withholds the exact timing of His return even from the angels (v. 36), leaving readiness, not calculation, as the appropriate response for His followers.",
     "q": "Sit quietly and let go of any need to calculate or predict what's ahead, resting instead in simple, ongoing readiness the way this chapter actually calls for."
    }
   ]
  }
 ]
},
// Day 167
{
 "ref": "Psalm 30",
 "tag": "Psalms & Wisdom",
 "api": "psalms+30",
 "sum": [
  "David praises God for lifting him up and healing him after crying out for mercy.",
  "He recalls a season of false security followed by God hiding His face and his own trouble.",
  "He declares that weeping endures for a night but joy comes in the morning, and mourning is turned to dancing."
 ],
 "nug": [
  {
   "h": "A prosperity that forgot its source",
   "b": "“In my prosperity I said, I shall never be moved. LORD, by thy favour thou hast made my mountain to stand strong” (v. 6–7) — David admits plainly that ease had made him overconfident, momentarily forgetting his stability had always depended on God's favour, not his own strength."
  },
  {
   "h": "A negotiation made from the depths",
   "b": "“What profit is there in my blood, when I go down to the pit? Shall the dust praise thee? shall it declare thy truth?” (v. 9) — David argues with God quite directly, making the case that his continued life would actually serve God's own purposes of praise."
  },
  {
   "h": "Mourning clothes literally exchanged",
   "b": "“Thou hast turned for me my mourning into dancing: thou hast put off my sackcloth, and girded me with gladness” (v. 11) — grief and celebration pictured as garments, one deliberately removed and replaced by God Himself."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "John 16:20–22 · Isaiah 61:3 · Lamentations 3:22–23",
   "qs": [
    {
     "th": "Jesus tells His disciples something very similar the night before His death — “ye shall be sorrowful, but your sorrow shall be turned into joy” (John 16:20) — the same pattern this psalm names, sorrow genuinely turned to joy, promised directly by Jesus for His own followers' grief.",
     "q": "Read John 16:20–22. How does Jesus' promise to His disciples the night before the cross deepen your reading of this psalm's own turn from weeping to joy?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David's admission that ease and prosperity had made him overconfident (v. 6–7) is an honest confession most people would be tempted to skip past on the way to celebrating the eventual relief.",
     "q": "Has a season of ease or prosperity ever made you overconfident, forgetting how dependent you actually were on God, the way David admits here?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "“Weeping may endure for a night, but joy cometh in the morning” (v. 5) names a real, specific duration for the sorrow — a night, not forever — without denying that the night itself was genuinely hard.",
     "q": "What \"night\" are you currently in, and how does trusting this verse's specific promise of morning change how you're getting through it?"
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
     "th": "The psalm's closing purpose — “to the end that my glory may sing praise to thee, and not be silent. O LORD my God, I will give thanks unto thee for ever” (v. 12) — treats ongoing, unending thanksgiving as the whole point of having been restored in the first place.",
     "q": "Write a short prayer of praise today naming one specific way God has turned your own mourning into something closer to dancing, however recent or long ago."
    }
   ]
  }
 ]
},
// Day 168
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "A commandment that begins with rescue, not rule",
   "b": "Before listing a single command at Sinai, God introduced Himself first as the one \"which have brought thee out of the land of Egypt, out of the house of bondage\" (Exodus 20:2) — obedience offered as response to love already shown."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week you received the Ten Commandments and the case laws that followed in Exodus 20–22, heard the storm-voice of God in Psalm 29, sat with Jesus' warnings about the end of the age in Matthew 24, and read David's testimony of weeping turned to joy in Psalm 30.",
     "q": "Where this week did the case laws' repeated concern for widows, orphans and strangers in Exodus 22, or David's honest confession of overconfidence in Psalm 30, most directly challenge how you've been living?"
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
     "th": "“Weeping may endure for a night, but joy cometh in the morning” (Psalm 30:5) — a promise with a specific, limited duration attached to real sorrow.",
     "q": "Rest quietly in the specific promise of \"morning\" for whatever \"night\" you're currently in, without rushing to explain or fix it right now."
    }
   ]
  }
 ]
},
// Day 169
{
 "ref": "Exodus 23",
 "tag": "Old Testament",
 "api": "exodus+23",
 "sum": [
  "Laws address justice in legal matters, including not following a crowd to do evil.",
  "God commands a sabbath year for the land and three annual feasts for Israel.",
  "God promises to send an Angel to guide Israel into the promised land, warning them to obey his voice.",
  "God promises to drive out the nations gradually, little by little, rather than all at once."
 ],
 "nug": [
  {
   "h": "A warning against crowd-driven wrongdoing",
   "b": "“Thou shalt not follow a multitude to do evil; neither shalt thou speak in a cause to decline after many to wrest judgment” (v. 2) — justice explicitly protected from simply following whatever the majority happens to want in a given moment."
  },
  {
   "h": "Rest legislated even for the land itself",
   "b": "The seventh year, the land is to lie fallow, “that the poor of thy people may eat: and what they leave the beasts of the field shall eat” (v. 11) — rest built into the agricultural calendar itself, benefiting both the land and the poor together."
  },
  {
   "h": "A gradual conquest explained, not just commanded",
   "b": "God explains His reasoning for driving out the nations “little by little” rather than all at once — “lest the land become desolate, and the beast of the field multiply against thee” (v. 29–30) — patient timing chosen for the land's own good, not merely military caution."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Leviticus 25:1–7 · Exodus 33:2 · Hebrews 13:5",
   "qs": [
    {
     "th": "The promised Angel who would “keep thee in the way, and bring thee into the place which I have prepared” (v. 20), warned to be obeyed because “my name is in him”, is widely understood as a preincarnate appearance of God's own presence going with His people — the same presence promised again in Exodus 33:2 after the golden calf crisis.",
     "q": "Read Exodus 33:2 alongside this chapter's promise of an Angel. What does it mean to you that God promises not just guidance, but His own presence going with His people into the unknown?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The instruction not to “follow a multitude to do evil” (v. 2) assumes real social pressure toward wrongdoing will come specifically from group consensus, not just individual temptation.",
     "q": "Where have you felt pressure to go along with a group's wrong direction, simply because it was the majority view, rather than standing apart from it?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God's gradual, “little by little” approach to driving out the nations (v. 29–30) shows patient timing chosen deliberately for the people's long-term good, even though it meant the promised land wouldn't be fully theirs immediately.",
     "q": "Where might God be working \"little by little\" in your own life rather than all at once, and how does understanding His reasoning for gradual change how you feel about the pace?"
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
     "th": "The promise of rest for the land, the poor and the animals together (v. 10–12) reflects a God whose care extends generously beyond just His people's immediate interests.",
     "q": "Praise God today for the breadth of His care — not just for you specifically, but for the wider creation and vulnerable people this chapter shows He also provides for."
    }
   ]
  }
 ]
},
// Day 170
{
 "ref": "Exodus 24",
 "tag": "Old Testament",
 "api": "exodus+24",
 "sum": [
  "Moses reads the book of the covenant to the people, who agree to obey.",
  "Moses sprinkles blood on the altar and on the people, sealing the covenant.",
  "Moses, Aaron, and seventy elders go up and see God, then eat and drink in His presence.",
  "Moses ascends further into the cloud on the mountain, where he remains forty days and nights."
 ],
 "nug": [
  {
   "h": "A covenant confirmed twice, before and after hearing the details",
   "b": "The people first say “All that the LORD hath said will we do” (v. 3), and after Moses reads the actual book of the covenant aloud, they say it again, adding “and be obedient” (v. 7) — commitment renewed after genuinely hearing the specific terms, not just the general idea."
  },
  {
   "h": "Blood applied to both altar and people",
   "b": "Moses sprinkles half the blood on the altar and, after reading the covenant, sprinkles the rest directly on the people themselves, saying, “Behold the blood of the covenant, which the LORD hath made with you” (v. 6, 8) — the same blood marking both God's altar and the people bound to Him by it."
  },
  {
   "h": "A meal eaten in God's direct presence, and survived",
   "b": "Moses, Aaron, Nadab, Abihu and seventy elders “saw the God of Israel… and did eat and drink” (v. 9–11) — an extraordinary, unrepeated moment of seeing God and not being destroyed by it, marked by the ordinary act of sharing a meal."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Hebrews 9:19–20 · Matthew 26:28 · Exodus 19:5–8",
   "qs": [
    {
     "th": "Jesus deliberately echoes this exact scene at the Last Supper, taking the cup and saying, “this is my blood of the new testament, which is shed for many for the remission of sins” (Matthew 26:28) — the covenant blood sprinkled here at Sinai finding its fulfilment in the blood Jesus offers to establish a new covenant.",
     "q": "Read Matthew 26:28. How does knowing Jesus consciously used the language of this Exodus covenant ceremony change how you understand what happens at communion?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The people's double confirmation of the covenant — once before hearing the specifics and once after — shows real commitment being tested and renewed by actually knowing what was being agreed to.",
     "q": "Is there a commitment you made to God before fully understanding what it would actually require, that you now need to renew honestly, knowing more of the real cost?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The elders' meal eaten calmly in God's direct presence (v. 11) is a striking contrast to the terror described in chapter 19 — nearness to God experienced here not as danger, but as shared fellowship.",
     "q": "Where might you need to trust that closeness to God can be marked by genuine peace and fellowship, not only by fear or distance?"
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
     "th": "Moses disappears into the cloud on the mountain for forty days and nights (v. 18), an extended, sustained period of simply being with God before receiving the fuller instructions still to come.",
     "q": "Set aside a few extra quiet minutes today, beyond your usual practice, simply to be in God's presence without asking for or expecting anything specific in return."
    }
   ]
  }
 ]
},
// Day 171
{
 "ref": "Psalm 33",
 "tag": "Psalms & Wisdom",
 "api": "psalms+33",
 "sum": [
  "The psalmist calls the righteous to praise God with singing and instruments.",
  "He celebrates God as creator, who spoke and it was done, and as sovereign over the nations' plans.",
  "He declares God's eye is on those who fear Him and hope in His mercy."
 ],
 "nug": [
  {
   "h": "Creation described as effortless speech",
   "b": "“By the word of the LORD were the heavens made… For he spake, and it was done; he commanded, and it stood fast” (v. 6, 9) — creation accomplished not through effort or struggle, but simply through God speaking, existence itself obedient to His voice."
  },
  {
   "h": "National power measured against God's counsel",
   "b": "“The counsel of the LORD standeth for ever, the thoughts of his heart to all generations” (v. 11) is set directly against “the nations… the people” whose devices God brings to nothing (v. 10) — every human strategy ultimately subject to God's unchanging purposes."
  },
  {
   "h": "An eye watching those who wait, not those who win",
   "b": "“The eye of the LORD is upon them that fear him, upon them that hope in his mercy” (v. 18) — God's attention specifically described as resting on people marked by reverence and hope, not by strength or achievement."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Genesis 1:3 · Hebrews 11:3 · Proverbs 21:30",
   "qs": [
    {
     "th": "Hebrews 11:3 explains this psalm's picture of creation theologically — “through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear” — creation by simple divine speech treated as a matter of faith, not merely poetic description.",
     "q": "Read Hebrews 11:3. How does thinking about creation as something accomplished purely by God's spoken word strengthen your trust in His spoken promises to you today?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "Verse 10's declaration that God brings “the counsel of the heathen to nought” offers real perspective on any current situation where opposing plans or powerful forces seem unstoppable.",
     "q": "Is there a plan, opposition or powerful force currently worrying you that this psalm's confidence in God's ultimate authority over all nations' counsel could genuinely reframe?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm specifically says God's eye rests “upon them that hope in his mercy” (v. 18) — not upon the strong, wealthy or impressive, but upon those simply waiting on His mercy.",
     "q": "Where do you need to trust that God's attention rests on you specifically because you hope in His mercy, not because of anything else you've achieved or possess?"
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
     "th": "The psalm opens by calling specifically for musical, skilled praise — “sing unto him a new song; play skilfully with a loud noise” (v. 3) — worship offered with genuine effort and care, not just whatever's easiest.",
     "q": "Thank God today with some deliberate care in how you express it — writing it out fully, singing it, or speaking it aloud rather than only thinking it briefly."
    }
   ]
  }
 ]
},
// Day 172
{
 "ref": "Exodus 25",
 "tag": "Old Testament",
 "api": "exodus+25",
 "sum": [
  "God calls for a freewill offering of materials to build the tabernacle.",
  "Instructions are given for the ark of the covenant and its mercy seat with cherubim.",
  "Instructions follow for the table of shewbread and the golden lampstand.",
  "God explains that He will meet and commune with Moses from above the mercy seat."
 ],
 "nug": [
  {
   "h": "Materials given freely, not demanded by tax",
   "b": "“Of every man that giveth it willingly with his heart ye shall take my offering” (v. 2) — the tabernacle's entire construction begins with voluntary generosity, not compulsory taxation, an offering people actually wanted to give."
  },
  {
   "h": "A purpose stated before a single instruction is given",
   "b": "“Let them make me a sanctuary; that I may dwell among them” (v. 8) — before any detail about materials or dimensions, the entire point of the project is named plainly: God's own presence dwelling among His people."
  },
  {
   "h": "A meeting place named specifically",
   "b": "“There I will meet with thee, and I will commune with thee from above the mercy seat, from between the two cherubims” (v. 22) — an exact, specified location for ongoing conversation between God and His people, not vague or general presence."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "2 Corinthians 9:7 · John 1:14 · Hebrews 9:1–5",
   "qs": [
    {
     "th": "John 1:14's description of Jesus — “the Word was made flesh, and dwelt among us” — uses language that directly echoes this tabernacle's purpose (the Greek literally suggesting “tabernacled” among us), the same desire for God to dwell with His people finding its fullest expression in Jesus Himself.",
     "q": "Read John 1:14. How does knowing Jesus \"tabernacled\" among us in the same way God intended to dwell in this physical sanctuary deepen your understanding of the incarnation?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The tabernacle's materials came from “every man that giveth it willingly with his heart” (v. 2) — a project built entirely from voluntary, glad generosity rather than obligation.",
     "q": "Is there something you could give right now — time, resources, effort — willingly and gladly, the way this offering was given, rather than out of a sense of duty?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "God specifies a precise meeting place, “from above the mercy seat” (v. 22), rather than leaving communication with Him vague or undefined — a real, particular place where conversation would happen.",
     "q": "Do you have a consistent, specific place or time for meeting with God, the way this chapter describes a specific meeting place, rather than leaving it to happen whenever it might?"
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
     "th": "The whole elaborate structure exists for one stated purpose — “that I may dwell among them” (v. 8) — a purpose that could easily be lost sight of amid all the specific instructions about gold, wood and craftsmanship that follow.",
     "q": "Is there an area of your own spiritual life where the practices or structures have started to matter more to you than the actual presence of God they were meant to serve? Name that honestly."
    }
   ]
  }
 ]
},
// Day 173
{
 "ref": "Matthew 25",
 "tag": "New Testament",
 "api": "matthew+25",
 "sum": [
  "Jesus tells the parable of the ten virgins, five wise and five foolish, waiting for the bridegroom.",
  "He tells the parable of the talents, where servants are entrusted with different amounts to invest.",
  "He describes the final judgment, separating the sheep from the goats based on how they treated the least of His brethren.",
  "He declares that whatever was done, or not done, to the least of these was done, or not done, to Him."
 ],
 "nug": [
  {
   "h": "Oil that can't be borrowed at the last minute",
   "b": "The five foolish virgins run out of oil and ask the wise ones to share, but are told, “Not so; lest there be not enough for us and you” (v. 9) — preparedness here can't be transferred from one person to another in the final moment."
  },
  {
   "h": "Reward measured by faithfulness, not by the size of what was given",
   "b": "The servant given five talents and the one given two both hear the identical commendation, “Well done, thou good and faithful servant” (v. 21, 23) — reward tied to faithful use of what was entrusted, not to who started with more."
  },
  {
   "h": "A surprising identification with the overlooked",
   "b": "“Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me” (v. 40) — Jesus directly identifies Himself with hungry, thirsty, sick, imprisoned and stranger, making ordinary kindness to the overlooked into something done, or withheld, from Him personally."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "1 Thessalonians 5:6 · Luke 19:12–26 · Isaiah 58:6–7",
   "qs": [
    {
     "th": "Isaiah had already tied genuine fasting and devotion directly to feeding the hungry and clothing the naked (Isaiah 58:6–7) — the exact behaviour Jesus names in the sheep and goats judgment as evidence of real relationship with Him, showing this wasn't a new standard but a long-standing one.",
     "q": "Read Isaiah 58:6–7. How does knowing this connection between real devotion and practical care for the needy goes back centuries before Jesus change how you read the sheep and goats parable?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "The servant who buried his one talent out of fear rather than investing it (v. 24–25, 30) reveals that fear of failure, not lack of ability, was what actually held him back.",
     "q": "Is there something entrusted to you — a gift, an opportunity, a resource — that fear of failing with it has caused you to simply bury rather than use?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The sheep in the final judgment seem genuinely surprised that their ordinary acts of kindness were counted as done directly to Jesus — “Lord, when saw we thee an hungred, and fed thee?” (v. 37) — real faithfulness that didn't even realise its own full significance.",
     "q": "Where might ordinary, unremarked kindness you've shown someone actually matter far more to Jesus personally than you've realised while doing it?"
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
     "th": "The sheep and goats parable makes practical care for “the least of these” — the hungry, the stranger, the sick, the imprisoned — the specific, concrete evidence of genuine relationship with Christ.",
     "q": "Pray today for someone in one of these specific categories — hungry, a stranger, sick, or imprisoned — asking God how you might practically serve them as if serving Him directly."
    }
   ]
  }
 ]
},
// Day 174
{
 "ref": "Psalm 36",
 "tag": "Psalms & Wisdom",
 "api": "psalms+36",
 "sum": [
  "David describes the wicked as having no fear of God before their eyes, flattering themselves in their own sin.",
  "He contrasts this with the vastness of God's steadfast love, faithfulness and righteousness.",
  "He asks God to continue His lovingkindness to those who know Him, and prays to be kept from the proud."
 ],
 "nug": [
  {
   "h": "Wickedness rooted, first, in a missing fear",
   "b": "“The transgression of the wicked saith within my heart, that there is no fear of God before his eyes” (v. 1) — David traces sinful behaviour back to its actual source, a lost or absent reverence for God, rather than treating it as an isolated, unrelated problem."
  },
  {
   "h": "Mercy measured against the sky itself",
   "b": "“Thy mercy, O LORD, is in the heavens; and thy faithfulness reacheth unto the clouds” (v. 5) — God's steadfast love described using the largest, most inaccessible measurements the psalmist had available, height beyond ordinary reach."
  },
  {
   "h": "A fountain, not a portion, of life",
   "b": "“For with thee is the fountain of life: in thy light shall we see light” (v. 9) — life pictured as flowing continuously from an unlimited source, and understanding itself described as something only made visible by God's own light."
  }
 ],
 "steps": [
  {
   "id": "con",
   "t": "Connections",
   "m": "3–5 min",
   "xr": "Romans 3:18 · 1 John 1:5–7 · John 1:4–5",
   "qs": [
    {
     "th": "Paul quotes this psalm's opening observation almost directly in Romans 3:18 — “there is no fear of God before their eyes” — using David's diagnosis of individual wickedness as part of his larger argument about universal human sinfulness needing Christ's righteousness.",
     "q": "Read Romans 3:18 in its context (Romans 3:10–18). How does seeing this psalm's specific phrase used within Paul's larger argument about sin and grace deepen how you understand it?"
    }
   ]
  },
  {
   "id": "life",
   "t": "Life reflection",
   "m": "5–7 min",
   "xr": "",
   "qs": [
    {
     "th": "David's observation that the wicked flatter themselves “in his own eyes” (v. 2) about their own sin suggests self-deception, not just wrongdoing, as part of what keeps sin comfortable and unchallenged.",
     "q": "Is there an area where you might be flattering or excusing yourself about something, the way this verse describes, rather than seeing it honestly?"
    }
   ]
  },
  {
   "id": "spirit",
   "t": "Holy Spirit",
   "m": "2–3 min",
   "xr": "",
   "qs": [
    {
     "th": "The psalm's image of God's mercy reaching “unto the clouds” (v. 5) offers a specific, visual way of grasping something otherwise hard to measure — the actual scale of God's steadfast love.",
     "q": "What image or picture from creation helps you personally grasp the scale of God's love in a way that abstract description alone doesn't?"
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
     "th": "“How excellent is thy lovingkindness, O God! therefore the children of men put their trust under the shadow of thy wings” (v. 7) ties genuine trust directly to genuinely recognising how excellent God's love actually is.",
     "q": "Praise God today specifically for the excellence of His lovingkindness, using this verse's own words if they help, and let that praise deepen your own trust in Him."
    }
   ]
  }
 ]
},
// Day 175
{
 "ref": "Rest & review",
 "tag": "Rest day",
 "rest": 1,
 "nug": [
  {
   "h": "Blood on both altar and people",
   "b": "At Sinai, Moses sprinkled the covenant blood on both the altar and the people themselves (Exodus 24:6,8) — the same blood marking God's side of the covenant and the people bound to Him by it, a picture later fulfilled fully in Christ."
  }
 ],
 "steps": [
  {
   "id": "back",
   "t": "Look back",
   "m": "5 min",
   "qs": [
    {
     "th": "This week carried you through the covenant law and its ratification in Exodus 23–24, the tabernacle instructions beginning in Exodus 25, David's praise of the creating and sovereign God in Psalm 33, Jesus' parables of readiness and judgment in Matthew 25, and the contrast between the wicked and God's vast steadfast love in Psalm 36.",
     "q": "Where this week did the tabernacle's stated purpose — \"that I may dwell among them\" (Exodus 25:8) — or the covenant meal eaten calmly in God's presence in Exodus 24, reshape how you think about closeness with God?"
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
     "th": "\"With thee is the fountain of life: in thy light shall we see light\" (Psalm 36:9) — life and understanding both pictured as flowing continuously from God, never running dry.",
     "q": "Rest quietly for a few minutes in the picture of an unending fountain, letting go of any pressure to generate your own strength or clarity right now."
    }
   ]
  }
 ]
}
];
