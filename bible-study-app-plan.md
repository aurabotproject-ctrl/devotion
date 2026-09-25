# Deep Roots — A 2‑Year Personal Bible Study App
### Planning Document (v5 — images added in their own data file)

This is the spec the HTML app is built from. **v2 adds the decisions made during the first build (Day 1 prototype): app-written nuggets, thought-then-question prompts, and printing. See Section 9 for build status.** Keep this file in sync with every build.

---

## 1. Vision

A single-page, self-hosted (works locally or on GitHub Pages) daily Bible study companion that:

- Walks you through the **entire Bible over 2 years** (~730 days), at a **deliberately unhurried pace** — enough to actually sit with a passage, not just tick a box.
- Each day takes **about 30 minutes**.
- Goes **beneath the surface**: not just "what does this passage say" but *why it matters, how it connects to the rest of Scripture, and what it's doing in your actual life this week*.
- Is rooted in **Open Brethren convictions** — Scripture as final authority, the priesthood of all believers (no "expert" tone, no clergy-mediated interpretation), Christ-centered reading, and space for the Lord's Table/remembrance rhythm — while also **making room to grow in sensitivity to the Holy Spirit and in prayer**, without tipping into hype or manufactured experience.
- Lets you **highlight text and drop pins with your own popup notes**, right on the Bible text.
- Has a **full Bible reader built in** (no separate tab-switching to Bible Gateway).
- Lets you **print any day's study** (your highlights, verse notes, answers, plus the day's nuggets) as a clean page to keep or share.
- Gives you **content, not just blanks**: each day includes app-written background facts (nuggets) and a thought or example before every question.
- **Looks and feels good** — calm, uncluttered, like something you'd actually want to open every morning.

---

## 2. Theological Framing (so the app reflects you, not a generic template)

A few decisions baked into the daily questions and tone:

- **Christ-centred throughout** — every OT day includes a prompt connecting the passage to Christ (fulfilment, type/shadow, contrast), consistent with how Brethren teaching has historically read the whole Bible as one unfolding story pointing to Him.
- **No clergy voice** — the app never says "the correct interpretation is…". It asks questions and gives *observations*, not verdicts, so you're doing the Berean work yourself (Acts 17:11).
- **Holy Spirit growth, handled carefully** — rather than pushing toward any particular charismatic or cessationist position, the daily "Spirit" prompt simply asks things like: *What is this passage teaching me about who the Spirit is / what He does? Where do I sense Him prompting me right now?* It stays descriptive and personal, not prescriptive about gifts or practice — you bring your own convictions to it, the app just creates space.
- **Prayer as a skill, not just a slot** — rather than one generic "pray about this" line, prayer prompts rotate through actual forms (adoration, confession, thanksgiving, intercession, listening/silence) so you're building range over the two years, not repeating the same habit.
- **Breaking of Bread rhythm** — a lightweight optional weekly prompt (e.g. every Sunday) inviting reflection tied to remembrance/communion, since that's usually central to Brethren church life — easy to toggle off if you don't want it.

None of this requires deep theological literacy to use — the questions are written in plain language, aimed at "get beneath the surface" without needing seminary vocabulary.

---

## 3. The 2-Year Reading Plan

**Total ground to cover:** 66 books, 1,189 chapters, ~730 study days.

**Structure — interwoven, not straight through Genesis→Revelation:**
Reading Genesis to Revelation in canonical order back-to-back is the #1 reason people stall (long genealogies/law sections in a row, no NT relief). Instead:

- **Four interwoven tracks, rotated daily:**
  1. **Old Testament narrative & law** (Genesis → Malachi, in mostly canonical order)
  2. **New Testament** (Matthew → Revelation, in mostly canonical order)
  3. **Psalms & Wisdom** (Psalms spread across the full 2 years, ~2–3x through; Proverbs, Job, Ecclesiastes, Song of Songs interspersed)
  4. **Rest days** — built in roughly every 6th–7th day: no new reading, just a review/reflection day over the past week (or simply grace for a missed day — nothing to "catch up," the plan self-adjusts)

- **Typical day:** 1 OT chapter + occasionally 1 NT chapter or 1 Psalm — kept short (rarely more than 25–35 verses total) so the 30 minutes goes into reflection, not just reading.
- **Pace math:** 1,189 chapters ÷ ~625 actual reading days (leaving ~105 rest/review days across 2 years) ≈ under 2 chapters/day on average.
- **Big/dense sections (Leviticus, genealogies, some prophets)** get slightly longer sit-time on fewer verses per day rather than being rushed to "get through."

The **day-by-day reading schedule itself** (Day 1 → Day 730, with exact passage references) will live as a data file inside the app (JSON), so it's easy for you to review, edit, or reorder later — e.g. if you want to shift when Revelation lands, or swap in a different track balance. I'll generate that full schedule as the next step once you approve this plan.

---

## 4. The Daily Study Flow (~30 minutes)

Each day opens as one screen with a simple vertical flow:

| Step | Time | What it is |
|---|---|---|
| **1. Passage** | 8–10 min | Today's reading shown in the built-in Bible reader. Highlight + pin as you go. |
| **2. Summary** | ~1 min | **Added in v8.** 2–4 short sentences, app-written, giving the main points of the day's reading in order — read right after finishing the passage, so you can retell it in your own words before moving on. Skipped on rest days (there's no new passage to summarise). |
| **3. Nuggets** | 3–5 min | **Written by the app, not filled in by you (no input boxes).** 4–6 short, interesting facts that aren't commonly known: history, culture and customs, original-language points, background on people and authors, structure. Each has a short heading and 2–3 sentences. *Example for Luke: he is the only Gentile Gospel writer, so he explains Jewish customs for a wider audience.* |
| **4. Connections** | 3–5 min | Starter cross-references, then for each question a **thought first, then a question** (see "Prompt format" below). Ties today's passage to the rest of Scripture: fulfilled promises, echoed phrases, OT/NT pairings. This is where "beneath the surface" lives. |
| **5. Life Reflection** | 5–7 min | 2 questions, each with a **thought or everyday example first**, then the question. Specific to the passage's themes, not generic "how can I apply this". |
| **6. Holy Spirit** | 2–3 min | A thought (often from the passage or a linked verse) followed by a short, non-prescriptive question inviting attentiveness. |
| **7. Prayer** | 3–5 min | Rotating form (adoration / confession / thanksgiving / intercession / silence). Thought or example first (e.g. how to start), then the question, with space to write your own prayer. |
| **8. Takeaway** | — | A one-sentence "today's takeaway" box, with a short thought showing what a good takeaway looks like. Highlights, pins and answers save automatically. |

Adding the Summary step nudges each day a little past 30 minutes, but it means the passage actually sticks — reading it once, then retelling the main points in your own words, before moving into nuggets and questions.

**Prompt format (applies to every question, every day):** never ask a bare question. Each has (a) a short **thought or example** in italics, drawn from the passage, a linked verse, history or everyday life, then (b) the **question** in bold, then (c) the answer box. Tone stays observational, never "the correct interpretation is…".

**Nugget guidelines:** prefer lesser-known history, people, customs, original-language points, audience/author background, literary structure. State well-established facts plainly; mark disputed interpretations as such ("many readers see…"). Do not invent sources or statistics. Written for every day in the full plan.

A visible **progress bar/streak tracker** and a simple calendar view lets you see the 2-year journey at a glance, with no guilt-trip messaging if you miss days.

---

## 5. Core Features

### Built-in Bible reader
- Full Bible text pulled from a free public-domain translation via API (default: **WEB** — World English Bible, modern & free; you can request **KJV** or **ASV** instead, or I can bundle the text locally so it works 100% offline with zero API calls).
- Book/chapter navigation, plus jumps straight to "today's passage."
- Font size / light-dark theme toggle for comfortable reading.

### Highlighting
- Select any verse or phrase → choose a highlight colour (e.g. 4–5 preset colours you can assign your own meaning to, like "promise," "conviction," "question," "praise").
- Highlights persist and are visible every time you revisit that passage.

### Pins & popup notes
- Click a verse → drop a pin → a popup opens where you type a free-text note.
- Pins show as small markers in the margin; clicking one reopens your note.
- All notes are timestamped and taggable (e.g. tag by track: OT/NT/Psalms, or by theme).

### Notes & search
- A "My Notes" view listing every note/pin/highlight chronologically, filterable by book or tag — so two years from now you can find "everything I highlighted as a promise" in seconds.

### Printing
- A **"Print today's study"** button on each day builds a print-only sheet (black and white, serif, no app chrome).
- Contents: day title and print date; highlighted verses with their colour meaning; verse notes; the day's **nuggets**; and each **question with your answer** (unanswered questions are left off). The thoughts are not printed by default (could be added as an option).
- Uses the browser's print dialog, so "Save as PDF" also works for sharing digitally.

### Data storage
- Everything (progress, highlights, pins, notes, prayer journal entries) saves to your **browser's local storage**, so it works fully offline once loaded, and privately — nothing leaves your device unless you choose to export it.
- An **Export/Import (JSON) button** so you can back up your two years of notes, move them to another device, or move to a new version of the app without losing anything.

### Design
- Clean, warm, editorial feel rather than "church app" clip-art — think a nice reading app (Kindle/Readwise) crossed with a journal, not a dashboard.
- Calming neutral palette (warm off-white / soft sage or muted terracotta accents), generous whitespace, a serif for Scripture text and a clean sans-serif for UI/prompts.
- Subtle day/night mode for early-morning or evening study.

---

## 6. Technical Plan (for when we build it)

- **Single self-contained `index.html`** (HTML/CSS/vanilla JS) — works by double-clicking the file locally, and works unmodified if pushed to a GitHub repo and served via GitHub Pages.
- **Bible text**: fetched from a free public API (e.g. bible-api.com or similar) with a local cache so repeat visits don't re-fetch; optional fully-offline mode bundles the WEB translation text as a local JSON file (larger download, zero internet needed after that).
- **Reading plan data**: a separate `plan.json` (730 entries) the app reads from — easy for you or me to tweak later without touching app code. Each day entry should hold: reference, track, verse text (or lookup), `nuggets[]` (heading + body), and `steps[]` (each question as `{thought, question}`), plus the prayer form for that day.
- **Storage**: `localStorage` for highlights/pins/notes/progress; export/import as JSON.
- No build tools, no frameworks, no login — just open the file.

---

## 7. AI Image Prompts (for ChatGPT/DALL·E) — motivational visuals for your study space

You can generate these and either drop them into the app as day-section headers/backgrounds, or just print/use them for inspiration near your study spot. Written to avoid depicting any specific recognisable person (so they're safe to generate):

1. *"A wide, softly lit watercolor-style illustration of an open pathway through a quiet wheat field at golden-hour sunrise, a single well-worn dirt path leading toward distant hills, warm terracotta and sage tones, calm and spacious, no text, no people."*

2. *"A minimalist flat-illustration of an open book with gentle light rays rising from its pages into a soft gradient sky, warm cream and muted gold palette, peaceful and uncluttered, no text, no people."*

3. *"A close-up watercolor illustration of an olive branch resting on aged parchment paper, soft natural lighting, warm neutral tones with a touch of deep green, minimal and textured, no text."*

4. *"A serene flat-design illustration of a small clay lamp with a warm glowing flame sitting on a windowsill at dusk, soft blues and warm oranges, cozy and contemplative mood, no text, no people."*

5. *"An abstract, gentle illustration representing a river flowing between smooth stones, soft blue and sand tones, watercolor texture, calm and meditative, evoking stillness and renewal, no text."*

6. *"A wide panoramic watercolor illustration of a shepherd's staff leaning against a low stone wall in a green hillside pasture at dawn, muted earthy palette, quiet and pastoral, no text, no people."*

7. *"A soft, minimal illustration of hands open and upturned rendered in a warm sepia watercolor wash, gentle light falling across them, symbolizing prayer and receiving, no text, no visible face."*

8. *"A gentle abstract illustration of a dove in flight rendered in soft white and pale gold brushstrokes against a muted sky-blue background, minimal, airy, and calm, no text."*

*(Tip: add "in the style of a warm minimalist devotional journal illustration, muted earth-tone palette, no text, high resolution" to the end of any prompt for consistency across the set.)*

---

## 8. Open Questions for You

A few small decisions before I build:

1. **Translation**: WEB (free, modern, good default), KJV, or ASV?
2. **Start date**: today, or a specific date (e.g. next Monday / New Year)?
3. **Track balance**: happy with the OT + NT + Psalms/Wisdom interwoven structure above, or would you rather go closer to straight canonical order with just Psalms interspersed?
4. **Weekly "Breaking of Bread" reflection prompt** — include it (toggle-able) or leave out?
5. **Offline-first** (Bible text bundled in the app, larger file, zero internet needed) vs. **API-based** (smaller file, needs internet the first time it loads each passage, but auto-updates/caches)?

Once you confirm these, I'll generate the full 730-day reading schedule and build the actual working HTML app (with the reader, highlighting, pins, and design applied).


---

## 9. Build Status & Decisions (v2)

**Built so far (single file `index.html`, Day 1 only):**
- Landing page: headline, "Begin Day 1", progress line, three convictions, daily flow with times.
- Day 1 = **Genesis 1**: built-in reader, tap a verse to highlight (4 colours: promise / praise / conviction / question) or add a pinned note; nuggets card; Connections, Life reflection, Holy Spirit, Prayer (adoration), Takeaway, each as thought then question then answer box.
- Print button (see Printing above), Night/Day toggle, autosave to `localStorage` (key `deeproots-v1`).

**Not built yet:** 730-day plan/`plan.json`, day navigation and progress tracking, calendar view, "My Notes" search/filter, export/import JSON, weekly Breaking of Bread prompt, API/offline Bible text switching, rest/review days, header images.

**Decisions and assumptions made during the build:**
- Day 1 text is **KJV bundled in the file** so the preview works offline; final translation still depends on Open Question 1.
- **Nuggets are app-written, no input boxes** (user request). Nuggets and prompts are my own drafted wording and knowledge, not cited sources; the user can review and edit.
- **Every question gets a thought or example first** (user request).
- Design: warm paper background, sage green accent, Newsreader (serif, Scripture and headings) + Figtree (UI), rounded cards for study steps, dark mode via CSS variables. Google Fonts loaded with system fallbacks.
- Print sheet is built by JS into a hidden `#print-sheet` and shown only under `@media print`.

**Code structure to keep for further builds:** `V` (verse array), `NUG` (nuggets: `{h, b}`), `STEPS` (steps with `qs: [{th, q}]`), `S` (saved state: `f` answers, `c` highlight colours, `n` verse notes, `theme`). For the full app, these should move into per-day data in `plan.json`.

**Still open (Section 8):** translation, start date, track balance, Breaking of Bread prompt, offline vs API.


### Week 1 build (v3)
- **Sample week (days 1–7):** D1 Genesis 1 (OT) · D2 Genesis 2 (OT) · D3 Psalm 1 (Psalms) · D4 Genesis 3 (OT) · D5 Matthew 1 (NT) · D6 Psalm 8 (Psalms) · D7 **Rest & review** (no new reading).
- **Prayer rotation across the week:** adoration → thanksgiving → listening/silence → confession → intercession → adoration → rest.
- **Rest day:** shows a look-back list of the week's readings with your own takeaways (linked to each day), two reflection questions and a "rest" prompt. No passage, one nugget.
- **Navigation:** landing page lists the week; each day has Previous / Next buttons. State is stored per day (`S.hl[day]` for highlights and pins; answers keyed `d{day}_{stepId}{i}`; Day 1 keeps legacy keys).
- **Passage text:** Genesis 1, Psalm 1 and Psalm 8 are bundled (KJV). Genesis 2, Genesis 3 and Matthew 1 load from bible-api.com (KJV) and are cached in `localStorage`; if offline, a Bible Gateway link is shown. Full app should bundle everything (Open Question 5).
- **Data shape per day:** `{ref, tag, v | api, nug:[{h,b}], steps:[{id,t,m,xr,qs:[{th,q}]}], rest?}`. A `mk()` helper builds the standard Connections / Life / Spirit / Prayer / Takeaway steps.


### File structure (v4) — keep `index.html` clean
- `index.html` — app only (layout, styling, logic). **No daily content inside.** Loads the two data files with plain `<script src>` tags (works by double-click, no server or fetch needed).
- `data-year1.js` — `const YEAR1=[…]`, days 1–365. `data-year2.js` — `const YEAR2=[…]`, days 366–730. Keep all files in the same folder. The app joins them: `DAYS=[...YEAR1,...YEAR2]`; array position = day number.
- Day object: `{ref, tag, v | api, rest?, nug:[{h,b}], steps:[{id,t,m,xr?,qs:[{th,q}]}]}`. The schema is documented at the top of each data file.
- The shared "Today's takeaway" step is added by `index.html` to every day, so it is not repeated in the data.
- Rest-day look-back automatically shows the previous six days. The landing page now lists every built day (not just the first 7); once the plan runs to 730 days this should switch to a calendar/progress view instead of a flat list.

### Weeks 1–10 built (v6) — days 1–70 complete
- `data-year1.js` now holds days 1–70 (ten full weeks). `data-year2.js` is still empty, waiting for days 366–730.
- **Reading pattern kept from week 1:** each week is OT, OT, Psalms, OT, NT, Psalms, Rest — three Old Testament chapters, two psalms, one New Testament chapter, one rest/review day. At this pace Old Testament coverage is deliberately slower than the plan's long-run "~2 chapters/day average" (Section 3), which is fine early on — the unhurried Genesis narrative benefits from the extra sit-time and the average evens out once denser law and prophetic sections call for a faster pace later.
- **OT track:** Genesis 4 → Genesis 30 (Cain and Abel through Jacob's growing family in Paddan-aram), continuing in canonical order from Day 4.
- **NT track:** Matthew 2 → Matthew 10 (the Magi through the sending of the twelve), continuing in canonical order from Day 5.
- **Psalms & Wisdom track:** Psalms 2, 3, 4, 5, 15, 16, 19, 23, 24, 25, 27, 32, 34, 37, 42, 46, 51, 62 — chosen for a mix of well-known and formative psalms rather than strict numerical order; Proverbs, Job, Ecclesiastes and Song of Songs are still to be interspersed later as the plan calls for.
- **Prayer rotation:** each week still follows adoration → thanksgiving → listening/silence → confession → intercession → adoration → rest, though the exact day each form lands on was matched to what fit the passage best that week rather than a rigid fixed slot — all five forms still appear every week.
- Every OT/NT day added in weeks 2–10 uses `"api"` (bible-api.com, cached to localStorage) rather than bundled `"v"` text, matching the pattern already used for most of week 1's days.
- Landing page (`index.html`) updated to list all built days instead of hard-coding the first 7, with a day count in the subheading.
- **Not built yet (as of v6):** days 71–730, calendar/progress view, "My Notes" search/filter, export/import JSON, weekly Breaking of Bread prompt, offline Bible text bundling, header images beyond the four already wired up (Section 8's open questions are still open).

### Weeks 11–20 built (v7) — days 71–140 complete
- `data-year1.js` now holds days 1–140 (twenty full weeks). `data-year2.js` is still empty, waiting for days 366–730.
- Same weekly pattern and prayer rotation as v6, continued without change.
- **OT track:** Genesis 31 → Genesis 50 (Jacob's flight from Laban through Joseph's death, closing the book of Genesis), then straight into Exodus 1 → Exodus 10 (the birth of Moses, the burning bush, and the first nine plagues) — the Genesis/Exodus transition lands mid-plan, at Day 116.
- **NT track:** Matthew 11 → Matthew 20 (John the Baptist's doubt through the parable of the labourers and the third prediction of the cross), continuing in canonical order from Day 75.
- **Psalms & Wisdom track:** Psalms 63, 67, 71, 73, 84, 86, 90, 91, 95, 100, 103, 104, 107, 111, 112, 116, 118, 121, 130, 139 — again a curated mix rather than strict numerical order, including Psalm 90 (the only psalm attributed to Moses) placed deliberately alongside the early Exodus days.
- Every day in weeks 11–20 uses `"api"` (bible-api.com) as before; none of the new days bundle `"v"` text.
- **Not built yet:** days 141–730, calendar/progress view, "My Notes" search/filter, export/import JSON, weekly Breaking of Bread prompt, offline Bible text bundling, header images beyond the four already wired up (Section 8's open questions are still open).

### Summary step added to every day (v8) — retrofitted to days 1–140
- New `sum` field added to the day-object schema: an array of 2–4 short strings giving the main points of the day's reading, in order. Present on every non-rest day; omitted on rest days (there's no new passage to summarise).
- Rendered as its own card in `index.html`, positioned right after the Passage card and before Nuggets — see the updated Section 4 table above. The idea: read the passage once, then read the summary and retell it in your own words before moving into nuggets and questions, so it actually sticks rather than just being read past.
- **Retrofitted to all 120 non-rest days already built (days 1–140)** — the existing `ref`/`tag`/`api`/`v`/`nug`/`steps` content for those days was untouched; only the new `sum` field was added to each day object. The 20 rest days (7, 14, 21, … 140) were left as-is with no `sum` field.
- `sum` is now part of the standard schema for every non-rest day going forward — all future weeks (from Day 141 on) will include it from the start rather than needing a retrofit.
- Adds roughly a minute to the daily study, noted in the Section 4 table.

### Chapter audio narration (v9)
- Every non-rest day's Passage card gained a "🔊 Listen to this chapter" button that reveals an `<audio>` player streaming free, public-domain KJV narration from wordproject.org — no API key needed.
- `index.html` maps each day's `ref` to a chapter mp3 via a `BOOK_NUM` lookup covering all 66 KJV books, so it works automatically for every day, past and future.
- Checked several free World English Bible audio sources for the same feature; all had inconsistent, unpredictable per-book file naming that couldn't be reliably automated, so audio stays KJV-only for now (labelled "(KJV audio)" on the button). Worth revisiting if a keyed source like Bible Brain (api.bible/Faith Comes By Hearing) is set up later.

### KJV / WEB translation toggle (v10)
- A KJV/WEB button in the header switches the Passage text between the King James Version and the World English Bible, both served free via bible-api.com (no key needed). The choice persists in `localStorage`, each translation is cached separately, and the Passage heading reflects the current selection.
- The handful of very first days that bundle literal `"v"` verse text (rather than fetching via `"api"`) aren't affected by the toggle and always show their bundled KJV text — a minor legacy quirk from the app's earliest build.

### Weeks 21–25 built (v11) — days 141–175 complete
- `data-year1.js` now holds days 1–175 (twenty-five full weeks).
- Same weekly pattern and prayer rotation as v6/v7, continued without change.
- **OT track:** Exodus 11 → Exodus 25 (the tenth plague and first Passover, the Red Sea crossing, manna in the wilderness, Sinai and the Ten Commandments, case laws, covenant ratification, and the start of the tabernacle instructions).
- **NT track:** Matthew 21 → Matthew 25 (the triumphal entry and temple cleansing, controversies in Jerusalem, the woes to the Pharisees, the Olivet Discourse, and the judgment parables), continuing in canonical order from Day 145.
- **Psalms & Wisdom track:** Psalms 6, 9, 13, 17, 18, 22, 29, 30, 33, 36 — ten more not used in weeks 1–20, including Psalm 22 (the Messianic psalm of suffering, deliberately placed alongside the Sinai/Pharisee material in week 23).
- Every day in weeks 21–25 uses `"api"` (bible-api.com) and includes the `sum` field from the start.
- **Not built yet (as of v11):** days 176–730, calendar/progress view, "My Notes" search/filter, export/import JSON, weekly Breaking of Bread prompt, offline Bible text bundling, header images beyond the four already wired up (Section 8's open questions are still open).

### Days 176–200 built (v12) — completes Matthew, weeks 26–28 plus 4 days
- `data-year1.js` now holds days 1–200. This batch is 25 days, not a full 5 weeks — it runs weeks 26, 27 and 28 in full, then stops 4 days into week 29 (no rest day yet for that partial week).
- **OT track:** Exodus 26 → Exodus 37 (the tabernacle's structure and furnishings, the priestly garments, the ordination of Aaron's sons, the golden calf crisis and Moses' intercession, the covenant renewed and Moses' face shining, the people's freewill offerings, and Bezalel building the ark, mercy seat, table and lampstand).
- **NT track:** Matthew 26 → Matthew 28 — **completes the Gospel of Matthew** (the Last Supper and Gethsemane, the trial and crucifixion, the resurrection and Great Commission). The next NT day (week 29, day 5) will move into Mark.
- **Psalms & Wisdom track:** Psalms 20, 21, 26, 28, 31, 35, 38 — seven more not used before, including Psalm 31 ("into thine hand I commit my spirit"), paired with Matthew 27 in the same week since Jesus quotes that exact verse from the cross (Luke 23:46).
- Real thematic overlap between the two tracks this batch — tabernacle/priesthood/atonement material in Exodus running alongside the Passion narrative in Matthew — woven in naturally in a few places (the torn veil, the mercy seat) rather than forced into every day.
- Prayer-form rotation continues to be matched to what fits each day's passage rather than a fixed repeating slot.
- **Not built yet (as of v12):** the rest of week 29 (day 201 onward, starting with Mark 1), days 202–730, calendar/progress view, "My Notes" search/filter, export/import JSON, weekly Breaking of Bread prompt, offline Bible text bundling, header images beyond the four already wired up (Section 8's open questions are still open).

### Days 201–217 built (v13) — completes week 29, weeks 30–31, completes Exodus, starts Mark and Leviticus
- `data-year1.js` now holds days 1–217, ending cleanly on that week's rest day.
- **OT track:** Exodus 38 → Exodus 40 — **completes the book of Exodus**, closing with the tabernacle raised and the glory of the LORD filling it so completely Moses himself can't enter (Exodus 40:34–35) — then straight into Leviticus 1 → Leviticus 3, the first chapters of a new book (burnt, grain, and peace offerings), the first genuinely law-heavy stretch of the plan.
- **NT track:** Mark 1 → Mark 3 — **starts the Gospel of Mark**, the plan's second Gospel, noted in the content for its markedly faster pace than Matthew (John the Baptist through the calling of the Twelve in three chapters).
- **Psalms & Wisdom track:** Psalms 39, 40, 41, 43, 45 — including Psalm 40:6–8 (quoted of Christ in Hebrews 10:5–7), Psalm 41:9 (the betrayal-by-a-friend verse Jesus applies to Judas in John 13:18), and Psalm 45:6 (quoted of Christ's throne in Hebrews 1:8).
- Two genuine book transitions land in this batch — Matthew → Mark at Day 201, and Exodus → Leviticus at Day 211 — both acknowledged briefly in that day's content rather than glossed over.
- **Not built yet (as of v13):** days 218–730, calendar/progress view, "My Notes" search/filter, export/import JSON, weekly Breaking of Bread prompt, offline Bible text bundling, header images beyond the four already wired up (Section 8's open questions are still open).

### Images (v5) — kept in `data-images.js`
- `data-images.js` — `const IMAGES={hero, passage, nuggets, prayer}`. Each entry is `{src, alt, pos?}`: `src` is the image embedded as a data URI (WebP, 1400px wide, about 700 KB in total), `alt` is the screen-reader description, `pos` is an optional CSS `object-position` so the important part of the picture survives cropping. **All images used by the app live in this file; `index.html` contains none.** Loaded by a plain `<script src>` before the main script, so it still works by double-click.
- The first four prompts from Section 7 are used, in order:
  1. Wheat-field path → **landing page banner** (`hero`). Also reused on the rest-day "This week / look back" card.
  2. Open book with light rays → top of the **Passage** card (`passage`).
  3. Olive branch on parchment → top of the **Nuggets** card (`nuggets`).
  4. Clay lamp on a windowsill → top of the **Prayer** card (`prayer`).
- In `index.html` a small `banner(key)` helper builds the `<img>`; `BANNER` maps a step id to an image key (currently `prayer`). Images dim slightly in night mode and are not part of the print sheet.
- Prompts 5–8 are not used yet.
