// Congress roster — surfaces in the header congress selector and
// scopes ARIA. ASCO 2025 is the default for Thiru's meeting framing.

export const CONGRESS_OPTIONS = [
  {
    id: 'asco-2025',
    name: 'ASCO 2025',
    fullName: 'ASCO Annual Meeting 2025',
    location: 'Chicago, IL',
    date: 'May 30 – Jun 3, 2025',
    available: true,
    focus: 'Kisqali NATALEE follow-up · Pluvicto sequencing · Scemblix ASC4FIRST 1L data',
  },
  {
    id: 'esmo-2025',
    name: 'ESMO 2025',
    fullName: 'ESMO Congress 2025',
    location: 'Berlin, DE',
    date: 'Oct 17 – 21, 2025',
    available: true,
    focus: 'Adjuvant Kisqali deep dive · PSMA-RLT clinical updates · CML real-world evidence',
  },
  {
    id: 'eha-2025',
    name: 'EHA 2025',
    fullName: 'European Hematology Association Congress 2025',
    location: 'Milan, IT',
    date: 'Jun 12 – 15, 2025',
    available: true,
    focus: 'Hematology — Scemblix 1L positioning vs imatinib (ASC4FIRST)',
  },
  {
    id: 'trend-asco-esmo',
    name: 'Trend: ASCO → ESMO 2025',
    fullName: 'Sentiment trend ASCO 2025 → ESMO 2025',
    location: '—',
    date: '—',
    available: true,
    isTrend: true,
  },
  {
    id: 'sabcs-2025',
    name: 'SABCS 2025',
    fullName: 'San Antonio Breast Cancer Symposium 2025',
    location: 'San Antonio, TX',
    date: 'Dec 9 – 12, 2025',
    available: false,
    comingSoon: true,
  },
  {
    id: 'asco-gu-2026',
    name: 'ASCO GU 2026',
    fullName: 'ASCO Genitourinary Cancers Symposium 2026',
    location: 'San Francisco, CA',
    date: 'Feb 12 – 14, 2026',
    available: false,
    comingSoon: true,
  },
];
