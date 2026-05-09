// Proposed actions — Novartis Oncology Medical Affairs.
// Each action ties back to an Insight (AI1..AI7) and a Medical Objective.

export const ACTIONS = [
  { id: 'A1',  title: 'Co-create adjuvant Kisqali workflow algorithm with community-oncology MSL field input',     fromInsightRef: 'AI1', moRef: 'MO1', owner: 'Field Medical',  dueBy: '2025-Q4', status: 'Started',  strategyImpact: 'Confirmed' },
  { id: 'A2',  title: 'Commission QTc + dose-modification one-pager (community-facing leave-behind)',              fromInsightRef: 'AI1', moRef: 'MO1', owner: 'Medical Comms',   dueBy: '2025-Q4', status: 'Accepted', strategyImpact: 'Confirmed' },

  { id: 'A3',  title: 'Stand up Kisqali vs Verzenio head-to-head clinical comparison card (non-promotional)',      fromInsightRef: 'AI2', moRef: 'MO2', owner: 'Medical Comms',   dueBy: '2026-Q1', status: 'Started',  strategyImpact: 'Changed'   },
  { id: 'A4',  title: 'MSL talk-track refresh — anchor 1L mBC discussion on OS magnitude data',                    fromInsightRef: 'AI2', moRef: 'MO2', owner: 'Field Medical',   dueBy: '2026-Q1', status: 'Proposed', strategyImpact: null         },

  { id: 'A5',  title: 'Develop urology + medical-onc joint sequencing decision tool for Pluvicto pre-taxane',      fromInsightRef: 'AI3', moRef: 'MO3', owner: 'Medical Strategy', dueBy: '2026-Q1', status: 'Started',  strategyImpact: 'Changed'   },
  { id: 'A6',  title: 'Co-author PSMAfore real-world implementation publication with Sartor + Fizazi',              fromInsightRef: 'AI3', moRef: 'MO3', owner: 'Publications',     dueBy: '2026-Q2', status: 'Proposed', strategyImpact: null         },

  { id: 'A7',  title: 'Theranostic Centre Activation Program — credentialing + isotope supply support',             fromInsightRef: 'AI4', moRef: 'MO3', owner: 'Field Medical',   dueBy: '2026-Q1', status: 'Accepted', strategyImpact: 'Changed'   },
  { id: 'A8',  title: 'Build a Pluvicto site-readiness checklist (radiation safety, scheduling, billing)',          fromInsightRef: 'AI4', moRef: 'MO3', owner: 'Medical Comms',    dueBy: '2025-Q4', status: 'Started',  strategyImpact: 'Confirmed' },

  { id: 'A9',  title: 'Commission cost-per-MMR pharmacoeconomic analysis for Scemblix 1L (US + EU)',                 fromInsightRef: 'AI5', moRef: 'MO4', owner: 'HEOR',            dueBy: '2026-Q2', status: 'Started',  strategyImpact: 'Changed'   },
  { id: 'A10', title: 'Engage ELN guideline contributors on ASC4FIRST integration call',                            fromInsightRef: 'AI5', moRef: 'MO4', owner: 'Medical Strategy', dueBy: '2026-Q1', status: 'Proposed', strategyImpact: null         },

  { id: 'A11', title: 'Reframe Pluvicto positioning narrative: "PSMA-RLT foundation" vs "current PSMA option"',      fromInsightRef: 'AI6', moRef: 'MO3', owner: 'Medical Strategy', dueBy: '2026-Q1', status: 'Proposed', strategyImpact: null         },
  { id: 'A12', title: 'Build Pluvicto-then-225Ac sequencing case study library (academic centres)',                  fromInsightRef: 'AI6', moRef: 'MO3', owner: 'Field Medical',   dueBy: '2026-Q2', status: 'Proposed', strategyImpact: null         },

  { id: 'A13', title: 'Stand up cross-asset insight roll-up in NOVA — Phase 1 / drug-development network view',      fromInsightRef: 'AI7', moRef: 'MO5', owner: 'Medical Strategy', dueBy: '2026-Q1', status: 'Started',  strategyImpact: 'Confirmed' },
  { id: 'A14', title: 'Re-tier Veeva engagement plans for cross-tumour KOLs (start with Lillian Siu)',                fromInsightRef: 'AI7', moRef: 'MO5', owner: 'Field Medical',   dueBy: '2025-Q4', status: 'Accepted', strategyImpact: 'Changed'   },
];
