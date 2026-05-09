// Predictive Signals — Novartis Oncology.
// Replaces the simpler "New Signals" feed. Each signal carries an agent
// attribution (which agent surfaced it) plus trajectory / confidence /
// time-to-impact framing.

export const PREDICTIVE_SIGNALS = [
  {
    id: 'ps-1',
    agent: 'ARIA',
    signal: '225Ac-PSMA platform sessions added to ESMO 2025 plenary',
    currentState: 'Two competitor 225Ac-PSMA programs received plenary platform slots at ESMO 2025; Novartis has no equivalent counter-positioning session in that room.',
    trajectory: 'rising',
    timeToImpact: '0–3 months',
    confidence: 'high',
    requiredAction: 'Brief MSL team on alpha-emitter sequencing narrative. Frame Pluvicto as PSMA-RLT foundation, not endpoint. Prepare ESMO talking points.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    id: 'ps-2',
    agent: 'NOVA',
    signal: 'Recurrence threshold hit: PSMA-RLT site-of-care capacity blocking Pluvicto access',
    currentState: 'Insight AI4 has 6 independent Veeva Medical_Insight sources this month — wait-list complaints from Cleveland, Dallas, Charlotte, Houston, Atlanta, Phoenix. Now Prioritised.',
    trajectory: 'rising',
    timeToImpact: '0–6 months',
    confidence: 'high',
    requiredAction: 'Launch Theranostic Centre Activation Program. Coordinate with isotope supply + radiation safety SMEs.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    id: 'ps-3',
    agent: 'LUCA',
    signal: 'Cross-tumour KOL Lillian Siu surfaces in 3 separate Veeva insight clusters',
    currentState: 'Phase 1 / drug-development network KOL appears in Kisqali, Pluvicto, and Scemblix MSL field reports in the same month — but is single-tagged in CRM as Pluvicto-aligned.',
    trajectory: 'rising',
    timeToImpact: '3–6 months',
    confidence: 'medium',
    requiredAction: 'Re-tier engagement plan as cross-tumour. Open advisory board invitation tied to platform-level Medical Affairs strategy.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    id: 'ps-4',
    agent: 'NOVA',
    signal: 'Adjuvant Kisqali community-oncology workflow blockers — pattern emerging',
    currentState: 'NATALEE 4-yr iDFS data is convincing community oncologists clinically, but QTc monitoring + dose-modification logistics are the new bottleneck. 4 Veeva sources in 30 days.',
    trajectory: 'rising',
    timeToImpact: '3–6 months',
    confidence: 'high',
    requiredAction: 'Approve adjuvant workflow algorithm + community-facing leave-behind. Deploy to MSL field ahead of SABCS 2025.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
  {
    id: 'ps-5',
    agent: 'VEGA',
    signal: 'Adjuvant Kisqali HCP awareness ladder — Knowledgeable → Intent conversion stalling',
    currentState: 'VEGA awareness-progression data shows Knowledgeable cohort growing (+28% post-NATALEE) but Intent-to-prescribe conversion plateauing at 41%. Workflow logistics is the suspected blocker.',
    trajectory: 'flat',
    timeToImpact: '3–6 months',
    confidence: 'medium',
    requiredAction: 'Cross-reference with AI1 workflow insight. Tighter feedback loop between MSL coaching and adjuvant workflow leave-behind deployment.',
    suggestedAction: { label: 'Open in VEGA', path: '/vega' },
  },
];
