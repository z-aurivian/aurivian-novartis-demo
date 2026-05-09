# Session notes — 2026-05-09

## Goal
Stand up `aurivian-novartis-demo` for the 2026-05-11 8am EST meeting with Thiru Pattipaka (Head of AI for Medical Affairs, Novartis Oncology). Built on the master template (refreshed earlier today via the Vision Doc uplift).

## Build approach
1. Cloned the empty `z-aurivian/aurivian-novartis-demo` GitHub repo locally
2. Overlaid the master template (`aurivian-master-demo`) — `src/`, `public/`, configs, package.json, etc.
3. Rewrote `package.json` `name` field; removed `.vercel` link so Vercel project is fresh
4. Customised `src/config/*` and `src/data/*` for Novartis Oncology

## Customer identity
- **Customer**: Novartis Oncology (Medical Affairs)
- **Priority brands**: Kisqali (ribociclib · CDK4/6 · HR+/HER2− BC), Pluvicto (177Lu-PSMA-617 · PSMA RLT · mCRPC), Scemblix (asciminib · STAMP BCR::ABL1 · Ph+ CML)
- **Congresses**: ASCO 2025 (default), ESMO 2025, EHA 2025, SABCS 2025 (coming soon), ASCO GU 2026 (coming soon)
- **TA**: Oncology — breast (early + metastatic), mCRPC, Ph+ CML, plus solid-tumour / RLT pipeline lens

## Strategy framework
- **4 ISP pillars** spanning the three priority brands plus a "Build the Medical Affairs intelligence backbone" pillar tied to Veeva CRM Medical_Insight integration
- **5 Medical Objectives** (NATALEE adjuvant translation, CDK4/6 sequencing, PSMA-RLT sequencing, Scemblix 1L positioning, Field-to-strategy intelligence loop)
- **6 Listening Priorities** with KIQs / KITs
- **Coverage targets**: MO5 intentionally at Gap (Veeva loop) so the Gap Radar moment lands

## Insights (NOVA's spine)
7 actionable insights sourced explicitly from **Veeva CRM Medical_Insight** + **Capture App** field signal — per Thiru's brief framing:
- AI1: Adjuvant Kisqali workflow gap (community oncology QTc / dose-mod)
- AI2: CDK4/6 sequencing — Kisqali OS magnitude not breaking through
- AI3: Pluvicto pre-taxane sequencing — urology vs medical oncology disagreement
- AI4: PSMA-RLT site-of-care capacity = limiting reagent
- AI5: ASC4FIRST 1L Scemblix uptake blocked on cost-effectiveness
- AI6: 225Ac-PSMA reframing Pluvicto as foundation, not endpoint
- AI7: Cross-tumour KOLs underused (the Lillian Siu cluster) — strategic blind spot

14 actions tied to these insights; 5 currently `Started`, 4 `Accepted`, 5 `Proposed`. Strategy-impact tags include several `Changed` (reflecting genuine plan shifts).

## KOLs (LUCA)
16 oncology KOLs across breast (Rugo, Tolaney, Schmid, Hamilton, Harbeck, O'Shaughnessy), mCRPC (Sartor, Fizazi, Tombal, Shore, Dorff), CML (Cortes, Hochhaus, Hughes, Mauro), plus **Dr. Lillian Siu** as the cross-tumour signature KOL — appears in all three product alignments to power the LUCA cross-indication moment.

## Dashboard datasets
- **Predictive Signals** (5): mix of agent-attributions including a VEGA awareness-progression-stalling signal
- **KIT Scorecards** (5): cross-portfolio themes
- **Emerging Themes** (4): adjuvant workflow gap, theranostic capacity, 225Ac pipeline, cross-tumour platform demand
- **Insight-to-Impact** (3): featuring the Theranostic Centre Activation Program outcome
- **Insight Sources**: **Veeva CRM Medical_Insight is the headline source** (1,843 records, ROI 8.4/10) per the brief
- **Gap Radar** (3): proposes new LP for Veeva cross-asset roll-up
- **VEGA**: full extended-analytics fill — awareness progression tied to adjuvant Kisqali, MSL quality vs quantity, share of voice vs Verzenio/Ibrance/RLT competitors, sentiment velocity featuring Rugo/Cortes/Sartor, ROMI $27.4M

## Veeva CRM Medical_Insight framing
Threaded through **every** dataset per Thiru's brief:
- Source provenance on insights (`provenance: 'Veeva Medical_Insight + …'`)
- Source-type rows in `INSIGHTS[*].sourceInsights[]`
- Top row of the Insight Source Value Matrix
- Featured in ARIA's `DATA_MODULES` (new `veeva` module)
- Auri prompt explicitly addresses *"How is Veeva Medical_Insight feeding into our strategic insight pipeline?"*

## Auri prompts (canned Q&A)
6 prompts mapped to Thiru's likely questions:
1. ASCO + ESMO impact on Kisqali (early vs metastatic)
2. Pluvicto / competitor RLT impact on mCRPC algorithms
3. Strategic coverage gaps
4. Cross-tumour KOLs to engage differently (Lillian Siu story)
5. How Veeva Medical_Insight is feeding the strategic pipeline
6. ASC4FIRST 1L Scemblix story — clinical case vs community blocker

## Legacy data files
`src/data/{pubmedData,clinicalTrialsData}.js` were stubbed (empty arrays) to prevent the master's Soliris/Ultomiris content from leaking into Auri's RAG. `src/data/strategicContent.js` and `src/data/congressData.js` were rewritten with Novartis content while keeping all named exports for backwards compat.

## Build & deploy status
- `CI=false npm run build` — clean
- Local repo committed; ready to push to `main` and trigger Vercel deploy.
- **Action item for Zeinab/team**: connect the GitHub repo to a new Vercel project (`aurivian-novartis-demo.vercel.app`) and add `REACT_APP_ANTHROPIC_API_KEY` env var if Auri live mode is desired (canned prompts work without it).

## Known follow-ups (carrying forward)
- Full UI product awareness (still tracked in master template README)
- Real PPT export (stubs only)
- Optional: enrich `pubmedData.js` / `clinicalTrialsData.js` with real PubMed + ClinicalTrials.gov pulls for Kisqali / Pluvicto / Scemblix to deepen Auri's RAG path beyond canned prompts
