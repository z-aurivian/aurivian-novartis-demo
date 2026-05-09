// Novartis Oncology — strategic content corpora.
// Replaces the Alexion / complement-biology defaults with concise oncology
// briefs that the RAG layer can surface when relevant. Kept short — depth
// lives in src/config/strategy.js + insights.js.

export const STRATEGIC_IMPERATIVES = [
  {
    id: 'si-natalee',
    name: 'NATALEE adjuvant translation',
    category: 'Brand strategy',
    description:
      'Translate the NATALEE 4-year iDFS update into adjuvant Kisqali standard-of-care positioning across HR+/HER2− eBC. Prioritise community-oncology adoption and EU guideline integration.',
  },
  {
    id: 'si-pluvicto-sequencing',
    name: 'Pluvicto sequencing leadership',
    category: 'Brand strategy',
    description:
      'Establish Pluvicto as the foundational PSMA-RLT in mCRPC. Drive clarity on pre- vs post-taxane positioning per PSMAfore. Pre-empt the 225Ac-PSMA / next-gen RLT pipeline narrative.',
  },
  {
    id: 'si-asc4first',
    name: 'Scemblix 1L positioning',
    category: 'Brand strategy',
    description:
      'Translate ASC4FIRST into a shifted Ph+ CML treatment-line preference. Defend T315I leadership against ponatinib while extending into 1L.',
  },
  {
    id: 'si-veeva-loop',
    name: 'Field-to-strategy intelligence loop',
    category: 'Operational',
    description:
      'Operationalise the connection between Veeva Medical_Insight capture, ASCO/ESMO field intelligence, and global strategic insight pipelines. Reduce time-to-insight for Medical Affairs leadership.',
  },
];

export const COMPETITIVE_LANDSCAPE = {
  cdk46: 'CDK4/6 class is mature; OS magnitude (Kisqali) and adjuvant breadth (Verzenio) are the main differentiators. Ibrance share is eroding.',
  psmaRlt: 'Pluvicto is the only approved PSMA RLT but multiple 225Ac-PSMA programs are in late-stage development. Sequencing vs Pluvicto is unresolved.',
  cmlTki: 'BCR::ABL1 TKI class is crowded but stratifying by safety: Scemblix differentiated on cardiovascular profile vs ponatinib; ASC4FIRST shifts 1L narrative.',
};

export const ONCOLOGY_LANDSCAPE = {
  brExStrong: 'HR+/HER2− is ~70% of breast cancer; CDK4/6 inhibitor is standard of care in 1L mBC and increasingly in adjuvant high-risk eBC.',
  prostateRlt: 'mCRPC patients post-ARPI represent the addressable Pluvicto pool; PSMA imaging access is the gating step.',
  cmlChronic: 'Ph+ CML chronic phase is a long-term management problem with deep molecular response and treatment-free remission as long-game outcomes.',
};

export const PIPELINE_INTELLIGENCE = [
  { asset: 'PSMACAR / 177Lu-PSMA-I&T', stage: 'Phase 2/3', sponsor: 'Various', notes: 'Next-gen PSMA RLT pipeline; key competitive watch for Pluvicto sequencing' },
  { asset: 'Inavolisib + CDK4/6',      stage: 'Approved (PI3K + CDK4/6)', sponsor: 'Genentech', notes: 'PIK3CA-mutated subset; competing slot in 1L HR+/HER2− mBC' },
  { asset: 'Imetelstat',               stage: 'Approved (MDS, exploring CML)', sponsor: 'Geron', notes: 'Telomerase inhibitor; not direct CML competitor but heme landscape' },
];

// Legacy export names kept for backwards compat with the master template's rag.js.
export const COMPLEMENT_BIOLOGY = ''; // not relevant for Novartis
