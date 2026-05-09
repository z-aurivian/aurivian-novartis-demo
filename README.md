# Aurivian — Novartis Oncology demo

Built for Novartis Oncology Medical Affairs. Sized for the 2026-05-11 meeting with Thiru Pattipaka (Head of AI for Medical Affairs).

The demo runs the standard Aurivian product surface (Command Center → ARIA / LUCA / NOVA / VEGA → Insight Journey · Artifacts · Auri chat) populated with Novartis-specific oncology data: priority brands, ASCO/ESMO 2025 cycle insights, oncology KOLs, and Veeva CRM Medical_Insight as the headline field-signal channel.

---

## Scope

- **Customer**: Novartis Oncology — Medical Affairs
- **Priority brands**:
  - **Kisqali** (ribociclib) — CDK4/6 inhibitor, HR+/HER2− BC (early + metastatic)
  - **Pluvicto** (177Lu-PSMA-617) — PSMA-targeted radioligand therapy, mCRPC
  - **Scemblix** (asciminib) — STAMP allosteric BCR::ABL1 inhibitor, Ph+ CML
- **Congresses on stage**: ASCO 2025 (default), ESMO 2025, EHA 2025; SABCS 2025 / ASCO GU 2026 marked coming soon
- **Strategic frame**: 4 ISP pillars · 5 Medical Objectives · 6 Listening Priorities · MO5 (Field-to-strategy intelligence loop) intentionally at Gap so the Gap Radar moment lands

---

## What the brief asked for, and where it lands

Mapped from the Novartis brief shared 2026-05-09:

| Brief ask | Where it shows up in the demo |
|---|---|
| ARIA — ASCO/ESMO "brain" filtered by asset, tumour type, line of therapy, endpoint | `/congress` · `src/data/congressData.js` (ASCO 2025 + ESMO 2025 ingestion + themes) |
| LUCA — cross-tumour KOL intelligence (breast + prostate + heme) | `/kol` · 16 oncology KOLs in `src/data/demoData.js`, with **Lillian Siu** as the cross-tumour signature KOL |
| NOVA — Medical Insights orchestrator, ranked insight pipeline | `/insights` · `src/config/insights.js` (7 prioritised insights) + `actions.js` (14 actions) |
| Veeva CRM Medical_Insight as primary field signal source | `provenance` field on insights · headline row of `INSIGHT_SOURCES` · `DATA_MODULES` includes a Veeva module |
| Capture App + end-of-day reporting | Source-type rows in insights (`Congress capture`) · `Capture App` row in Insight Source Value Matrix |
| Cross-brand / cross-tumour insight cards | AI7 + the cross-asset roll-up gap surfaced in Gap Radar |

---

## Auri prompts (canned, mapped to Thiru's likely questions)

Six prompts in `src/config/auri-prompts.js`, ready to demo:

1. *"What did we learn at ASCO + ESMO that impacts Kisqali in early vs metastatic HR+/HER2− breast cancer?"*
2. *"Which Pluvicto or competitor RLT data could shift treatment algorithms in mCRPC?"*
3. *"Where are our biggest strategic coverage gaps?"*
4. *"Show me cross-tumour KOLs we should be engaging differently."* — the Lillian Siu story
5. *"How is Veeva Medical_Insight feeding into our strategic insight pipeline?"*
6. *"What's the ASC4FIRST 1L Scemblix story — and what's blocking community uptake?"*

Auri also runs in keyword/RAG mode against the populated config bundle when the prompt isn't an exact match. Live mode (Claude / OpenAI) is enabled by setting `REACT_APP_ANTHROPIC_API_KEY` (and optionally `REACT_APP_OPENAI_API_KEY`).

---

## Repo layout

The product surface (`src/components/`, `src/lib/`) is inherited unchanged from the master template — locked. Customer-specific content lives in `src/config/*` and `src/data/*`.

```
src/
├── App.js                    ← Shell: header + theme toggle + left rail
├── components/               ← LOCKED — shared product surface
│   ├── CommandCenter.js      ← directive + agents + 4 collapsible tiles
│   ├── CongressIngestion.js  ← ARIA
│   ├── KOLManagement.js      ← LUCA + Medical Messaging Alignment
│   ├── MedicalInsights.js    ← NOVA (3 tabs: Strategy-to-Action / KIT Performance / Insight Sources & Impact)
│   ├── Vega.js               ← VEGA — extended analytics
│   ├── InsightJourney.js     ← Kanban with Add-from-NOVA flow
│   └── …
├── lib/journeyStore.js
├── api/                      ← Claude → OpenAI → keyword fallback
├── config/                   ← PER-DEMO content (this is what was customised)
│   ├── customer.js           ← Novartis Oncology
│   ├── products.js           ← Kisqali / Pluvicto / Scemblix
│   ├── strategy.js           ← ISP / MOs / LPs / KIQs / KITs
│   ├── insights.js           ← 7 actionable insights
│   ├── actions.js            ← 14 proposed/in-flight actions
│   ├── kit-scorecards.js     ← cross-portfolio KIT performance
│   ├── predictive-signals.js
│   ├── emerging-themes.js
│   ├── insight-to-impact.js
│   ├── insight-sources.js    ← Veeva Medical_Insight headline
│   ├── messaging-alignment.js ← 4 oncology messaging pillars
│   ├── vega.js               ← extended analytics fill
│   ├── gap-radar.js
│   ├── outcome-volume.js
│   ├── auri-prompts.js       ← 6 canned Q&A
│   └── …
└── data/                     ← Legacy data slots consumed by RAG (rag.js)
    ├── demoData.js           ← KOL_DATA + product-keyed KIT_SCORECARDS / COMPETITOR_DATA
    ├── congressData.js       ← ARIA's substrate (ASCO/ESMO themes, trials, social)
    ├── strategicContent.js   ← Auri RAG content
    ├── pubmedData.js         ← stubbed (empty) — populate per product if needed
    └── clinicalTrialsData.js ← stubbed (empty) — populate per product if needed
```

---

## Running locally

```bash
npm install
npm start    # http://localhost:3000
```

Build:

```bash
CI=false npm run build
```

(`CI=false` is already in the script so warnings don't fail the Vercel build.)

---

## Deploy

Vercel auto-deploy on push to `main`. Required environment variables (all optional — Auri falls back to canned prompts + keyword matching when absent):

- `REACT_APP_ANTHROPIC_API_KEY` — Claude Sonnet 4.6 for live Auri mode
- `REACT_APP_OPENAI_API_KEY` — OpenAI fallback

---

## Companion docs

- [`DEMO_SCRIPT.md`](./DEMO_SCRIPT.md) — sequenced 5–10 min walkthrough for the May 11 meeting
- [`DEMO_BRIEF_TEMPLATE.md`](./DEMO_BRIEF_TEMPLATE.md) — the input schema this demo was filled from
- [`session_notes_2026-05-09.md`](./session_notes_2026-05-09.md) — what was built and why
- [`AURI_RAG_SPEC.md`](./AURI_RAG_SPEC.md) — Auri grounding spec
- [`RESEARCH_PROTOCOL.md`](./RESEARCH_PROTOCOL.md) — how to fill brief gaps when one comes in thin

---

## Known follow-ups (inherited from master template)

Tracked in `aurivian-master-demo` README — same items apply here:

- **Full UI product awareness.** The product selector currently scopes Auri's RAG context only — the dashboard surfaces don't re-filter when you toggle Kisqali ↔ Pluvicto ↔ Scemblix. UI is honest about this (selector reads "Auri scope", chat panel shows "Scope: …" chip). Resolution: convert the relevant configs to product-keyed maps and thread `selectedProduct` through every consuming surface.
- **Real Export-to-PowerPoint.** Today's button is a visual stub; wire `pptxgenjs` when a customer asks for it.
