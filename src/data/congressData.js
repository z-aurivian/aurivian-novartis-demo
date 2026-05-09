// ============================================================================
// Novartis Oncology — Congress Intelligence Data (ARIA's substrate).
// Keys off CONGRESS_OPTIONS from clientConfig. Centred on ASCO 2025
// and ESMO 2025 since that's the Thiru meeting framing.
// ============================================================================

import { PRODUCT_OPTIONS } from '../config/clientConfig';

const productNames = PRODUCT_OPTIONS.map((p) => p.name);
// productNames[0] = Kisqali · [1] = Pluvicto · [2] = Scemblix

export const MOCK_TREND_SENTIMENT = {
  timeline: ['Pre-ASCO 2025', 'Post-ASCO 2025', 'Q3 2025', 'Pre-ESMO 2025', 'ESMO 2025'],
  scientific: [
    { period: 'Pre-ASCO 2025',  [productNames[0]]: 64, [productNames[1]]: 70, [productNames[2]]: 60, 'Verzenio': 66, 'Competitor RLT': 52 },
    { period: 'Post-ASCO 2025', [productNames[0]]: 72, [productNames[1]]: 78, [productNames[2]]: 76, 'Verzenio': 68, 'Competitor RLT': 58 },
    { period: 'Q3 2025',        [productNames[0]]: 74, [productNames[1]]: 80, [productNames[2]]: 78, 'Verzenio': 70, 'Competitor RLT': 62 },
    { period: 'Pre-ESMO 2025',  [productNames[0]]: 76, [productNames[1]]: 82, [productNames[2]]: 78, 'Verzenio': 71, 'Competitor RLT': 66 },
    { period: 'ESMO 2025',      [productNames[0]]: 81, [productNames[1]]: 84, [productNames[2]]: 80, 'Verzenio': 73, 'Competitor RLT': 70 },
  ],
  social: [
    { period: 'Pre-ASCO 2025',  [productNames[0]]: 58, [productNames[1]]: 62, [productNames[2]]: 54, 'Verzenio': 60, 'Competitor RLT': 48 },
    { period: 'Post-ASCO 2025', [productNames[0]]: 70, [productNames[1]]: 74, [productNames[2]]: 71, 'Verzenio': 64, 'Competitor RLT': 56 },
    { period: 'Q3 2025',        [productNames[0]]: 72, [productNames[1]]: 76, [productNames[2]]: 73, 'Verzenio': 66, 'Competitor RLT': 60 },
    { period: 'Pre-ESMO 2025',  [productNames[0]]: 74, [productNames[1]]: 78, [productNames[2]]: 74, 'Verzenio': 68, 'Competitor RLT': 64 },
    { period: 'ESMO 2025',      [productNames[0]]: 79, [productNames[1]]: 82, [productNames[2]]: 76, 'Verzenio': 70, 'Competitor RLT': 68 },
  ],
};

export const MOCK_SCIENTIFIC_ARTICLES = [
  { title: 'NATALEE 4-year iDFS update — adjuvant ribociclib in HR+/HER2− eBC',                       journalOrCongress: 'ASCO 2025 oral',         date: '2025-06', product: productNames[0], sentiment: 'positive' },
  { title: 'PSMAfore — pre-taxane Pluvicto vs ARPI switch in mCRPC',                                  journalOrCongress: 'ASCO 2025 oral',         date: '2025-06', product: productNames[1], sentiment: 'positive' },
  { title: 'ASC4FIRST — asciminib vs investigator-selected TKI in newly diagnosed CML',                journalOrCongress: 'NEJM',                   date: '2025-05', product: productNames[2], sentiment: 'positive' },
  { title: 'Verzenio adjuvant follow-up — monarchE 6-year overall survival update',                   journalOrCongress: 'ESMO 2025',              date: '2025-10', product: 'Verzenio',      sentiment: 'positive' },
  { title: '225Ac-PSMA pilot — preliminary safety and PSA response in heavily pretreated mCRPC',        journalOrCongress: 'ESMO 2025 LBA',          date: '2025-10', product: 'Competitor RLT', sentiment: 'positive' },
  { title: 'CDK4/6 sequencing in real-world HR+/HER2− mBC — multi-centre cohort',                      journalOrCongress: 'JCO',                    date: '2025-09', product: productNames[0], sentiment: 'neutral' },
];

export const MOCK_SOCIAL_TREND_SOURCES = [
  { platform: 'Twitter',  author: 'Dr. Hope Rugo',          topic: 'Adjuvant Kisqali NATALEE narrative shift',                       date: '2025-06', product: productNames[0], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Dr. Oliver Sartor',       topic: 'PSMAfore reshapes pre-taxane mCRPC sequencing',                  date: '2025-06', product: productNames[1], sentiment: 'positive' },
  { platform: 'Twitter',  author: 'Prof. Jorge Cortes',      topic: 'ASC4FIRST positions Scemblix as 1L CML option',                  date: '2025-05', product: productNames[2], sentiment: 'positive' },
  { platform: 'LinkedIn', author: 'Prof. Karim Fizazi',      topic: 'Pluvicto vs 225Ac sequencing — open question for the field',     date: '2025-10', product: productNames[1], sentiment: 'neutral' },
  { platform: 'Conference backchannel', author: 'Multiple',  topic: 'ESMO 2025 — adjuvant Kisqali community oncology adoption',       date: '2025-10', product: productNames[0], sentiment: 'positive' },
];

export const MOCK_INGESTION = {
  agendas: 18,
  abstracts: 2814,
  posters: 1142,
  speakers: 612,
  publicationsLinked: 2210,
  sessions: [
    { title: 'CDK4/6 inhibitors in adjuvant HR+/HER2− eBC — translating NATALEE',         track: 'Breast cancer',  products: [productNames[0], 'Verzenio'] },
    { title: 'Pre-taxane PSMA-RLT — sequencing and site-of-care',                          track: 'GU oncology',     products: [productNames[1], 'Competitor RLT'] },
    { title: 'BCR::ABL1 1L CML — ASC4FIRST and the new treatment landscape',                track: 'Hematology',      products: [productNames[2]] },
    { title: 'Cross-tumour theranostics — clinical and operational frontier',              track: 'Drug development', products: [productNames[1]] },
  ],
};

export const INGESTION_BY_CONGRESS = {
  'asco-2025': {
    agendas: 18, abstracts: 2814, posters: 1142, speakers: 612, publicationsLinked: 2210,
    sessions: [
      { title: 'NATALEE 4-yr iDFS — adjuvant Kisqali in HR+/HER2− eBC', track: 'Breast', products: [productNames[0]] },
      { title: 'PSMAfore — Pluvicto pre-taxane sequencing',             track: 'GU',     products: [productNames[1]] },
      { title: 'ASC4FIRST — Scemblix 1L CML',                            track: 'Heme',   products: [productNames[2]] },
    ],
  },
  'esmo-2025': {
    agendas: 22, abstracts: 3104, posters: 1284, speakers: 698, publicationsLinked: 2502,
    sessions: [
      { title: 'Adjuvant CDK4/6 community-oncology integration — EU view', track: 'Breast', products: [productNames[0], 'Verzenio'] },
      { title: '225Ac-PSMA platform — first-in-human readouts',            track: 'GU',     products: [productNames[1], 'Competitor RLT'] },
      { title: 'CML real-world evidence post-ASC4FIRST',                    track: 'Heme',   products: [productNames[2]] },
    ],
  },
  'eha-2025': {
    agendas: 8, abstracts: 942, posters: 412, speakers: 248, publicationsLinked: 614,
    sessions: [
      { title: 'ASC4FIRST detailed subgroup analysis',         track: 'CML',  products: [productNames[2]] },
      { title: 'TFR after first-line BCR::ABL1 inhibition',     track: 'CML',  products: [productNames[2]] },
    ],
  },
};

export function getIngestionForCongress(congressId) {
  return INGESTION_BY_CONGRESS[congressId] || MOCK_INGESTION;
}

export const MOCK_THEMES = [
  {
    theme: 'Adjuvant Kisqali — translating NATALEE into community practice',
    momentum: 95,
    mentions: 67,
    summary: 'Post-ASCO 2025, the 4-year iDFS update has moved adjuvant Kisqali from "highest-risk subgroup only" to a broader eBC conversation. Community medical oncologists are asking for clearer integration into ASCO/AGO guidelines and a simpler tolerability narrative.',
    action: 'Co-create an adjuvant Kisqali decision algorithm with community-oncology MSL field input. Engage Hope Rugo and Nadia Harbeck on guideline integration calls.',
  },
  {
    theme: 'Pluvicto pre-taxane sequencing — the PSMAfore moment',
    momentum: 92,
    mentions: 54,
    summary: 'PSMAfore data has reframed where Pluvicto sits in the mCRPC sequencing decision. Sequencing vs taxane chemotherapy in ARPI-pretreated patients is the most active open question.',
    action: 'Commission a sequencing decision tool for medical oncology + urology referral pairs. Brief MSL team ahead of ESMO follow-up sessions.',
  },
  {
    theme: 'ASC4FIRST — Scemblix as 1L CML standard',
    momentum: 89,
    mentions: 41,
    summary: 'ASC4FIRST has decisively shifted the 1L Ph+ CML conversation. KOL sentiment has moved from cautious-optimism to active endorsement, with cost-effectiveness as the open community-site question.',
    action: 'Stand up cost-effectiveness narrative + Veeva-captured field signal review for community sites. ELN guideline contributors engaged.',
  },
  {
    theme: 'Next-gen PSMA-RLT pipeline pressure',
    momentum: 84,
    mentions: 33,
    summary: 'Multiple 225Ac-PSMA programs have prominent ESMO 2025 platform sessions. KOLs increasingly compare Pluvicto to alpha-emitter pipeline — sentiment is "Pluvicto is foundational, not the endpoint."',
    action: 'Develop a sequencing narrative that positions Pluvicto as the PSMA RLT foundation; pre-empt the alpha-emitter framing in MSL talk tracks.',
  },
  {
    theme: 'Cross-tumour Medical Affairs strategy (Veeva-driven)',
    momentum: 76,
    mentions: 27,
    summary: 'Field MSLs across breast, prostate and heme are surfacing the same theme through Veeva Medical_Insight: cross-tumour KOLs increasingly drive platform-level decisions, but Medical Affairs reporting is still asset-by-asset.',
    action: 'Stand up cross-asset insight roll-up in NOVA. Demonstrated to Thiru via the LUCA cross-tumour cluster + Veeva insight provenance trail.',
  },
];

export const MOCK_COMPETITOR_VISIBILITY = [
  { product: `${productNames[0]} (Novartis)`,                share: 28, mentions: 142 },
  { product: `${productNames[1]} (Novartis)`,                share: 26, mentions: 121 },
  { product: `${productNames[2]} (Novartis)`,                share: 18, mentions: 84  },
  { product: 'Verzenio (Eli Lilly)',                          share: 14, mentions: 67  },
  { product: 'Ibrance (Pfizer)',                              share: 8,  mentions: 38  },
  { product: '225Ac-PSMA pipeline (various)',                 share: 6,  mentions: 28  },
];

export const MOCK_TRIALS = {
  total: 87,
  linkedToKOLs: 62,
  byIndication: { 'HR+/HER2− BC': 32, 'mCRPC': 24, 'Ph+ CML': 18, 'Other onc': 13 },
  sample: [
    { nctId: 'NCT03701334', title: 'NATALEE — adjuvant ribociclib + ET in HR+/HER2− stage II/III BC',                                     phase: 'Phase III',          sponsor: 'Novartis', product: productNames[0], indication: 'HR+/HER2− eBC', status: 'Active',    sites: 364 },
    { nctId: 'NCT04689828', title: 'PSMAfore — 177Lu-PSMA-617 vs ARPI switch in pre-taxane mCRPC',                                          phase: 'Phase III',          sponsor: 'Novartis', product: productNames[1], indication: 'mCRPC',          status: 'Completed', sites: 81  },
    { nctId: 'NCT04971226', title: 'ASC4FIRST — asciminib vs investigator-selected TKI in newly diagnosed Ph+ CML',                          phase: 'Phase III',          sponsor: 'Novartis', product: productNames[2], indication: 'CML 1L',          status: 'Completed', sites: 117 },
    { nctId: 'NCT03511664', title: 'VISION — 177Lu-PSMA-617 in post-ARPI / post-taxane mCRPC',                                              phase: 'Phase III',          sponsor: 'Novartis', product: productNames[1], indication: 'mCRPC',          status: 'Completed', sites: 84  },
  ],
};

export const MOCK_SOCIAL = {
  totalSignals: 5840,
  period: 'Last 90 days',
  byPlatform: [
    { platform: 'Twitter / X',           mentions: 2120, kolsTracked: 138 },
    { platform: 'LinkedIn',              mentions: 1480, kolsTracked: 184 },
    { platform: 'PubMed / alerts',       mentions:  742, kolsTracked: 412 },
    { platform: 'Conference backchannels', mentions: 1498, kolsTracked: 168 },
  ],
  sample: [
    { platform: 'Twitter',  author: 'Dr. Hope Rugo',     topic: 'Adjuvant Kisqali — community oncology angle',          sentiment: 'positive', date: '2025-06-04' },
    { platform: 'LinkedIn', author: 'Dr. Oliver Sartor',  topic: 'PSMAfore reshapes Pluvicto sequencing',                 sentiment: 'positive', date: '2025-06-02' },
    { platform: 'PubMed alert', author: 'Multiple',       topic: 'ASC4FIRST publication landing in NEJM',                sentiment: 'positive', date: '2025-05-30' },
  ],
};

export const DATA_MODULES = [
  { id: 'congress', label: 'Congress & Publications', iconId: 'FileText',     status: 'connected', description: 'ASCO/ESMO/EHA agendas, abstracts, posters, speakers, linked publications' },
  { id: 'trials',   label: 'Clinical Trials',          iconId: 'Activity',     status: 'available', description: 'Trial sponsorship, sites, outcomes by product (NATALEE, PSMAfore, ASC4FIRST)' },
  { id: 'veeva',    label: 'Veeva Medical_Insight',    iconId: 'Database',     status: 'available', description: 'MSL-captured field insights from Veeva CRM Medical_Insight object + capture app' },
  { id: 'social',   label: 'Social & Digital',         iconId: 'MessageCircle', status: 'available', description: 'Scientific and digital footprint signals across X / LinkedIn / conference backchannels' },
];

export function getDemoContext() {
  return {
    ingestion: MOCK_INGESTION,
    themes: MOCK_THEMES,
    competitorVisibility: MOCK_COMPETITOR_VISIBILITY,
    trials: MOCK_TRIALS,
    social: MOCK_SOCIAL,
    trendSentiment: MOCK_TREND_SENTIMENT,
    scientificArticles: MOCK_SCIENTIFIC_ARTICLES,
    socialTrendSources: MOCK_SOCIAL_TREND_SOURCES,
  };
}
