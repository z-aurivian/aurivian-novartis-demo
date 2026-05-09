// Background signals — feeds Insight Journey's Captured-lane "fresh signal"
// cards. Lighter-weight than predictive-signals.js (no trajectory metadata).

export const SIGNALS = [
  {
    agent: 'LUCA',
    timestamp: '2025-10-30T09:12:00Z',
    headline: 'Lillian Siu surfaces in Kisqali, Pluvicto and Scemblix Veeva insights this month',
    context: 'Cross-tumour KOL signal — Phase 1 / drug-development network. Currently single-tagged in CRM as Pluvicto-aligned; cross-tumour engagement plan needed.',
    suggestedAction: { label: 'Open in LUCA', path: '/kol' },
  },
  {
    agent: 'ARIA',
    timestamp: '2025-10-19T14:30:00Z',
    headline: '225Ac-PSMA platform session added to ESMO 2025 plenary',
    context: 'Late-breaking PSMA RLT pipeline data. No equivalent Novartis counter-positioning session in the same room.',
    suggestedAction: { label: 'Open in ARIA', path: '/congress' },
  },
  {
    agent: 'NOVA',
    timestamp: '2025-10-22T11:00:00Z',
    headline: 'Recurrence threshold hit: Pluvicto site-of-care capacity blocks',
    context: 'Insight AI4 captured a sixth Veeva Medical_Insight source this month — now Prioritised. Strategy-to-Action recommends Theranostic Centre Activation Program.',
    suggestedAction: { label: 'Review in NOVA', path: '/insights' },
  },
];
