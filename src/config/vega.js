// VEGA — Strategic Analytics agent (Novartis Oncology fill).
// Implements the must-have measures from the Aurivian extended analytics
// document, sized to oncology and the ASCO/ESMO 2025 cycle.

// 1.1 HCP Awareness Progression — movement of HCPs along the awareness ladder.
export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '34% of community oncologists achieving sustained adjuvant Kisqali practice change vs 22% industry average — +55% outperformance. Slowest conversion: Knowledgeable → Intent (post-NATALEE awareness lifted +28% but Intent conversion stalled at 41%). Primary blocker: workflow logistics (QTc monitoring, dose modification). Recommended action: deploy adjuvant workflow algorithm + community-facing leave-behind.',
  stages: [
    { stage: 'Sustained practice change', hcps: 487,  pctTotal: 34, vsQ4: '+18%' },
    { stage: 'Actively changing practice', hcps: 612,  pctTotal: 43, vsQ4: '+12%' },
    { stage: 'Intent to change',           hcps: 581,  pctTotal: 41, vsQ4: '+5%'  },
    { stage: 'Knowledgeable',              hcps: 1183, pctTotal: 84, vsQ4: '+28%' },
    { stage: 'Aware only',                 hcps: 412,  pctTotal: 29, vsQ4: '-9%'  },
  ],
};

// 1.2 Interaction Quality vs Quantity — by MSL/Region.
export const VEGA_INTERACTION_QUALITY = {
  insight: 'GU oncology MSL field is the highest-quality channel post-PSMAfore — Anderson and Patel both above 90% on-KIQ. Breast MSL Bell-Houston shows volume gap; community heme/onc Patel-Northeast running high quantity but low quality (likely off-KIQ on cost-effectiveness vs clinical efficacy). Recommended: targeted KIQ briefing + joint visit.',
  rows: [
    { msl: 'Anderson R',  region: 'GU — West',         interactions: 52, vsTarget: '+8%',  quality: 9.2, insightRate: 91, overall: 'Excellent' },
    { msl: 'Patel S',     region: 'GU — Northeast',     interactions: 48, vsTarget: '+4%',  quality: 8.9, insightRate: 88, overall: 'Excellent' },
    { msl: 'Bell-Houston M', region: 'Breast — Central', interactions: 31, vsTarget: '-22%', quality: 9.0, insightRate: 92, overall: 'Volume gap' },
    { msl: 'Reyes A',     region: 'Breast — West',      interactions: 47, vsTarget: '+2%',  quality: 7.8, insightRate: 76, overall: 'On track' },
    { msl: 'Patel V',     region: 'Heme — Northeast',   interactions: 58, vsTarget: '+24%', quality: 6.2, insightRate: 48, overall: 'Quality gap' },
  ],
};

// 1.3 Engagement Gap Tracker — Tier 1/2 KOLs not contacted within window.
export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Dr. Joyce O\'Shaughnessy', tier: 'Tier 2', lastContact: '2025-09-18', gap: '5 weeks', action: 'Schedule scientific exchange' },
  { kol: 'Dr. Neal Shore',           tier: 'Tier 1', lastContact: '2025-09-25', gap: '4 weeks', action: 'Plan interaction' },
  { kol: 'Prof. Tim Hughes',          tier: 'Tier 1', lastContact: '2025-10-04', gap: '3 weeks', action: 'On track' },
  { kol: 'Dr. Tanya Dorff',           tier: 'Tier 2', lastContact: '2025-10-12', gap: '2 weeks', action: 'On track' },
];

// 2.1 Share of Scientific Voice — vs competitors.
export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Novartis is leading scientific voice on PSMA-RLT (Pluvicto + pipeline) and CDK4/6 OS magnitude. Watch area: 225Ac-PSMA pipeline social/digital share growing +14 pts vs prior cycle — a leading indicator of competitive pressure ahead of regulatory readouts.',
  rows: [
    { source: 'Congress abstracts (ASCO+ESMO 2025)', us: '32%',  compA: '24%', compB: '18%', compC: '14%', trend: 'up' },
    { source: 'Peer-reviewed publications (12m)',     us: '29%',  compA: '26%', compB: '21%', compC: '12%', trend: 'flat' },
    { source: 'KOL active endorsements',              us: '38%',  compA: '22%', compB: '24%', compC: '11%', trend: 'up' },
    { source: 'Citation index (vs competitors)',      us: '2.1×', compA: '1.6×', compB: '1.3×', compC: '0.8×', trend: 'up' },
    { source: 'Social / digital mentions',            us: '24%',  compA: '17%', compB: '32%', compC: '21%', trend: 'down' },
  ],
};

// 2.2 KOL Sentiment Velocity — rate-of-change of alignment.
export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Dr. Hope Rugo',         score: 92, change30d: '+5.1', velocity: '+1.4 ↑↑', interpretation: 'Strong positive acceleration post-NATALEE — advisory board chair candidate' },
  { kol: 'Prof. Jorge Cortes',    score: 88, change30d: '+3.4', velocity: '+0.8 ↑',  interpretation: 'Steady positive — ASC4FIRST steering committee, maintain cadence' },
  { kol: 'Dr. Oliver Sartor',     score: 87, change30d: '+2.2', velocity: '+0.4 ↑',  interpretation: 'Foundational positive — VISION/PSMAfore lead, strategic priority' },
  { kol: 'Dr. Tanya Dorff',       score: 78, change30d: '+4.2', velocity: '+1.1 ↑↑', interpretation: 'Emerging cross-platform voice — RLT + cellular therapy. Watch list: rising influence' },
  { kol: 'Dr. Michael Mauro',     score: 71, change30d: '-2.8', velocity: '-0.7 ↓',  interpretation: 'Slight deceleration — ponatinib advocate; engage on Scemblix safety differentiation' },
];

// 4.1 Care Gap Closure Tracking — patient-level outcome of MA activity.
export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'Adjuvant Kisqali eligible patients started',  linkedMO: 'MO1',     baseline: '34%',     current: '52% (+18pts)',  patientsImpacted: '~2,140 additional patients on adjuvant Kisqali' },
  { gap: 'Pluvicto referral wait list',                  linkedMO: 'MO3',     baseline: '9.2 wks', current: '5.1 wks (-4.1)', patientsImpacted: '~890 patients faster to first dose' },
  { gap: 'Community Scemblix 1L decisions',              linkedMO: 'MO4',     baseline: '12% off', current: '5% off (-7pts)', patientsImpacted: '~310 newly diagnosed patients on Scemblix 1L' },
];

// 4.2 ROMI — financial framing.
export const VEGA_ROMI = {
  netValueCreated: '$27.4M',
  roiPct: '218%',
  returnPerPound: '$3.18',
  rows: [
    { category: 'Prescription growth attributed to MA', value: '$22.8M', methodology: 'HCPs with high MA engagement show 1.9× higher adjuvant Kisqali initiation — difference-in-difference vs match-controls' },
    { category: 'Health system efficiency (avoided costs)', value: '$5.2M', methodology: 'Reduced theranostic-centre wait-list capacity loss; faster time-to-Pluvicto first dose' },
    { category: 'Competitive revenue protection', value: '$11.6M', methodology: 'Estimated prescribing prevented from switching to Verzenio in 1L mBC and ponatinib in T315I CML' },
    { category: 'Total investment', value: '-$12.2M', methodology: 'Full Medical Affairs budget — field team, advisory boards, ASCO/ESMO presence, content' },
  ],
};

// 4.3 Medical Affairs Impact Index — composite executive headline metric.
export const VEGA_IMPACT_INDEX = {
  overall: 84,
  vsQ4: '+9',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',     score: 89, commentary: 'Above target — ASCO/ESMO presence, field interactions, advisory boards all exceeding benchmarks' },
    { dim: 'External ecosystem impact', score: 86, commentary: '+24% KOL network expansion, +18% total HCP engagement, share of voice up to 32% in onc abstracts' },
    { dim: 'HCP practice change',      score: 84, commentary: '34% sustained adjuvant Kisqali practice change vs 22% industry average; PSMA-RLT referral patterns shifted' },
    { dim: 'Patient care gap closure', score: 82, commentary: 'Adjuvant Kisqali +18pts, Pluvicto wait list -4.1 weeks, Scemblix 1L conversion +7pts' },
    { dim: 'Internal ecosystem impact', score: 79, commentary: 'Veeva Medical_Insight loop is operational; Cross-tumour Medical Affairs platform still maturing' },
  ],
};
