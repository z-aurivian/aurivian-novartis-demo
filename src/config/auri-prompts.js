// Auri canned Q&A — Novartis Oncology.
// Sized for the 2026-05-11 Thiru Pattipaka meeting. Each response should
// trace to populated config objects (INSIGHTS / KOL_DATA / GAP_RADAR /
// ACTIONS / MEDICAL_OBJECTIVES) via ref ids — see AURI_RAG_SPEC.md.

export const AURI_PROMPTS = [
  {
    prompt: 'What did we learn at ASCO + ESMO that impacts Kisqali in early vs metastatic HR+/HER2− breast cancer?',
    response:
      "**Adjuvant eBC (NATALEE 4-yr update at ASCO 2025).** The absolute iDFS benefit at 4 years (4.9 pts) decisively shifted community-oncology framing — adjuvant Kisqali is now considered for a broader eBC population beyond the highest-risk subgroup. ESMO follow-up sessions confirmed European medical oncologists are aligning, with AGO and ELN-equivalent guideline integration in active discussion.\n\n**1L mBC (sequencing question).** OS magnitude continues to differentiate Kisqali against Verzenio and Ibrance, but the message is not breaking through in community oncology — AI2 (CDK4/6 sequencing under-leverage) shows decisions cluster on institutional habit. Action A3 (Kisqali vs Verzenio non-promotional clinical comparison card) was elevated to Started post-ASCO.\n\n**Key blocker.** Adjuvant uptake is now gated by **workflow logistics** (QTc monitoring, dose modification) — not the science. AI1 captures 4 Veeva Medical_Insight sources on this in 30 days. Workflow algorithm + community leave-behind (A1, A2) deployed across 184 community centres.",
    cites: [
      { type: 'insight',  id: 'AI1' },
      { type: 'insight',  id: 'AI2' },
      { type: 'action',   id: 'A1'  },
      { type: 'action',   id: 'A3'  },
      { type: 'congress', id: 'asco-2025' },
      { type: 'congress', id: 'esmo-2025' },
    ],
  },
  {
    prompt: 'Which Pluvicto or competitor RLT data could shift treatment algorithms in mCRPC?',
    response:
      "Three signals from the ASCO + ESMO 2025 cycle that could move algorithms:\n\n1. **PSMAfore reframes pre-taxane positioning.** Pluvicto is now a viable pre-taxane option in ARPI-pretreated patients. Urology referral thresholds are dropping; medical oncology is split on whether visceral vs slow biochemical progression should change sequencing (AI3). Decision tool in development (A5, status: Started).\n\n2. **225Ac-PSMA platform sessions at ESMO 2025.** Multiple competitor 225Ac-PSMA programs received plenary slots. KOL framing shifting to *\"Pluvicto is foundation, not endpoint\"* (AI6, captured at ESMO via the capture app). Strategic action A11 (reposition narrative) is Proposed.\n\n3. **Site-of-care capacity is the limiting reagent (AI4).** 6–12 week wait lists at theranostic centres are now the dominant Pluvicto access barrier — patients are progressing while waiting. Theranostic Centre Activation Program (A7, Accepted) reduced average wait list from 9.2 wks to 5.1 wks across 23 program centres.",
    cites: [
      { type: 'insight',  id: 'AI3' },
      { type: 'insight',  id: 'AI4' },
      { type: 'insight',  id: 'AI6' },
      { type: 'action',   id: 'A5'  },
      { type: 'action',   id: 'A7'  },
      { type: 'action',   id: 'A11' },
      { type: 'congress', id: 'esmo-2025' },
    ],
  },
  {
    prompt: 'Where are our biggest strategic coverage gaps?',
    response:
      "Three coverage gaps stand out this cycle:\n\n• **MO5 (Field-to-strategy intelligence loop)** — sits at **Gap**. Cross-tumour signal is recurring (AI7, Lillian Siu cluster) but no formal Listening Priority captures it. Gap Radar proposes a new LP for Veeva Medical_Insight cross-asset roll-up.\n• **MO2 (CDK4/6 sequencing)** — Low coverage. AI2 shows community 1L mBC decisions cluster on institutional habit; OS magnitude story isn't landing without an explicit head-to-head card.\n• **MO3 (PSMA-RLT sequencing)** — Low coverage despite high insight volume. The site-of-care capacity story (AI4) was being captured as anecdote — Gap Radar proposes a formal KIQ to track wait-list management as a metric.",
    cites: [
      { type: 'mo',      id: 'MO5' },
      { type: 'mo',      id: 'MO2' },
      { type: 'mo',      id: 'MO3' },
      { type: 'insight', id: 'AI7' },
      { type: 'insight', id: 'AI4' },
    ],
  },
  {
    prompt: 'Show me cross-tumour KOLs we should be engaging differently.',
    response:
      "**Dr. Lillian Siu (Princess Margaret Cancer Centre)** is the case in point. She appeared in Veeva Medical_Insight reports for **all three priority brands** in October 2025 — but her Veeva engagement record tags her single-asset (Pluvicto-aligned). The cross-tumour signal triggered AI7 and Action A14 (Accepted): re-tier her engagement plan as cross-tumour, open a platform-level advisory board with her as chair.\n\n**Watch list (rising).** Dr. Tanya Dorff at City of Hope is emerging as a similar pattern — RLT + cellular-therapy positioning crosses prostate and heme.\n\n**Implication for the Medical Affairs platform.** This isn't a one-off — AI7 and the cross-tumour theme are tracked as MO5. The deferred work is reshaping CRM tagging + engagement plans to treat platform-level KOLs as a distinct cohort.",
    cites: [
      { type: 'kol',     id: 'kol-16' },
      { type: 'kol',     id: 'kol-11' },
      { type: 'insight', id: 'AI7'   },
      { type: 'action',  id: 'A14'   },
      { type: 'mo',      id: 'MO5'   },
    ],
  },
  {
    prompt: 'How is Veeva Medical_Insight feeding into our strategic insight pipeline?',
    response:
      "Veeva Medical_Insight is now the highest-volume insight source in the pipeline (1,843 records this cycle, ROI 8.4/10) — see the Insight Source Value Matrix. The capture-app extension at ASCO/ESMO adds 612 first-party records with even higher quality (8.7/10).\n\n**Where it's working.** AI4 (PSMA-RLT site-of-care) was prioritised because 6 independent Veeva field reports in 30 days crossed the recurrence threshold — the system surfaced a pattern faster than a quarterly report would have.\n\n**Where it's not yet.** AI7 (cross-tumour KOLs underused) shows Veeva is capturing rich signal but our engagement plans treat it asset-by-asset. Action A13 (cross-asset insight roll-up in NOVA) and A14 (re-tier cross-tumour KOLs) are in flight.",
    cites: [
      { type: 'insight', id: 'AI4' },
      { type: 'insight', id: 'AI7' },
      { type: 'action',  id: 'A13' },
      { type: 'action',  id: 'A14' },
    ],
  },
  {
    prompt: 'What\'s the ASC4FIRST 1L Scemblix story — and what\'s blocking community uptake?',
    response:
      "**Clinical case is closed.** ASC4FIRST positioned Scemblix as 1L Ph+ CML standard. KOL sentiment moved from cautious-optimism to active endorsement post-EHA 2025 (kit-4: relevance 89, sentiment shift +0.26). Cortes (steering committee) and Hochhaus (ELN) are aligned.\n\n**Community blocker is pharmacoeconomic, not clinical.** AI5 captures it bluntly — *\"I want to use it 1L but our institution's value committee asked for a cost-per-MMR analysis I don't have.\"* Generic imatinib is the cost-of-care default; until Scemblix has a credible cost-per-MMR or cost-per-TFR-eligibility narrative, value-based contracts will gate uptake.\n\n**In flight.** A9 (commission cost-per-MMR pharmacoeconomic analysis, US + EU) is Started. A10 (engage ELN guideline contributors on ASC4FIRST integration) is Proposed.",
    cites: [
      { type: 'insight', id: 'AI5' },
      { type: 'action',  id: 'A9'  },
      { type: 'action',  id: 'A10' },
      { type: 'kol',     id: 'kol-12' },
      { type: 'kol',     id: 'kol-13' },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'What did we learn at ASCO + ESMO that impacts Kisqali in early vs metastatic HR+/HER2− breast cancer?',
  'Which Pluvicto or competitor RLT data could shift treatment algorithms in mCRPC?',
  'Where are our biggest strategic coverage gaps?',
  'Show me cross-tumour KOLs we should be engaging differently.',
  'How is Veeva Medical_Insight feeding into our strategic insight pipeline?',
  'What\'s the ASC4FIRST 1L Scemblix story — and what\'s blocking community uptake?',
];
