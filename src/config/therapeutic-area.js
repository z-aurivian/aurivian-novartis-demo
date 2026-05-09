// Therapeutic Area — Oncology cross-tumour view.
// Three priority indication clusters spanning Novartis's launch brands.

export const THERAPEUTIC_AREA = {
  name: 'Oncology',
  subIndications: [
    'HR+/HER2− breast cancer (early & metastatic)',
    'mCRPC — metastatic castration-resistant prostate cancer',
    'Ph+ CML — chronic myeloid leukaemia',
    'Solid tumours / radioligand pipeline',
  ],
  competitors: [
    { name: 'Verzenio',    company: 'Eli Lilly',           moa: 'CDK4/6 inhibitor (abemaciclib)',                   stance: 'Direct competitor — Kisqali in HR+/HER2− mBC and adjuvant eBC' },
    { name: 'Ibrance',     company: 'Pfizer',              moa: 'CDK4/6 inhibitor (palbociclib)',                   stance: 'Established competitor; eroding share post-NATALEE' },
    { name: 'PSMA RLT competitors', company: 'Various',    moa: 'PSMA-targeted radioligands (e.g. 225Ac-PSMA programs)', stance: 'Pipeline threat; sequencing narrative is contested' },
    { name: 'Bosulif',     company: 'Pfizer',              moa: 'BCR::ABL1 TKI (bosutinib)',                        stance: 'Comparator in CML 3L; ASC4FIRST shifts framing for Scemblix' },
    { name: 'Iclusig',     company: 'Takeda',              moa: 'BCR::ABL1 TKI (ponatinib)',                        stance: 'T315I gold standard; Scemblix 3L+ direct comparator' },
  ],
  advocacyOrgs: ['SHARE Cancer Support', 'Susan G. Komen', 'Prostate Cancer Foundation', 'Leukemia & Lymphoma Society'],
};
