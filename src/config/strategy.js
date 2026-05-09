// Strategic framework — Novartis Oncology Medical Affairs.
// ISP → POA (Medical Objectives) → Listening Priorities → KIQs / KITs.
// Built around Kisqali, Pluvicto and Scemblix as the priority brands,
// with ASCO/ESMO as the primary scientific stage.

export const ISP_PILLARS = [
  { id: 'p1', title: 'Establish Kisqali as the CDK4/6 of choice across HR+/HER2− BC',
    description: 'Cement Kisqali leadership in mBC and translate NATALEE into adjuvant eBC standard-of-care positioning.' },
  { id: 'p2', title: 'Position Pluvicto as the foundational PSMA-RLT in mCRPC',
    description: 'Drive sequencing clarity in post-ARPI / post-taxane mCRPC and pre-empt the emerging RLT pipeline.' },
  { id: 'p3', title: 'Expand Scemblix footprint into 1L Ph+ CML',
    description: 'Translate ASC4FIRST into shifted treatment-line preference; defend T315I leadership.' },
  { id: 'p4', title: 'Build the Novartis Medical Affairs intelligence backbone',
    description: 'Connect ASCO/ESMO field intelligence to Veeva Medical_Insight pipeline and global strategic decisions.' },
];

export const MEDICAL_OBJECTIVES = [
  { id: 'MO1', name: 'Adjuvant eBC evidence dissemination',  description: 'Translate NATALEE long-term data into clinician confidence for adjuvant Kisqali in HR+/HER2− eBC.', ispPillarRef: 'p1' },
  { id: 'MO2', name: 'CDK4/6 sequencing & switching',        description: 'Build clarity on Kisqali sequencing across CDK4/6 lines and against direct competitors.',           ispPillarRef: 'p1' },
  { id: 'MO3', name: 'PSMA-RLT sequencing in mCRPC',         description: 'Position Pluvicto in pre- and post-taxane mCRPC; pre-empt competitor RLT narratives.',              ispPillarRef: 'p2' },
  { id: 'MO4', name: 'Scemblix 1L positioning',              description: 'Drive ASC4FIRST data uptake to shift Ph+ CML 1L treatment preference.',                              ispPillarRef: 'p3' },
  { id: 'MO5', name: 'Field-to-strategy intelligence loop',  description: 'Operationalise ASCO/ESMO + Veeva Medical_Insight capture into shortlisted strategic insights.',     ispPillarRef: 'p4' },
];

export const LISTENING_PRIORITIES = [
  { id: 'LP1', name: 'NATALEE adjuvant uptake',
    moRef: 'MO1',
    kiq: 'How are oncologists translating NATALEE iDFS into real-world adjuvant Kisqali decisions?',
    kits: ['Adjuvant decision algorithm', 'NATALEE long-term data card'] },
  { id: 'LP2', name: 'CDK4/6 sequencing & switching',
    moRef: 'MO2',
    kiq: 'What is driving choice between Kisqali, Verzenio and Ibrance in the 1L mBC setting?',
    kits: ['CDK4/6 head-to-head card', 'Switch protocol leave-behind'] },
  { id: 'LP3', name: 'Pluvicto pre- vs post-taxane',
    moRef: 'MO3',
    kiq: 'How are urologists and medical oncologists positioning Pluvicto vs the next wave of PSMA RLTs?',
    kits: ['Pluvicto sequencing decision tool', 'PSMACAR / 225Ac competitor brief'] },
  { id: 'LP4', name: 'PSMA-RLT site-of-care readiness',
    moRef: 'MO3',
    kiq: 'Which centres are operationally ready to scale Pluvicto, and what blocks remain?',
    kits: ['Site-readiness checklist', 'Radiation safety MSL talking points'] },
  { id: 'LP5', name: 'Scemblix vs imatinib (1L)',
    moRef: 'MO4',
    kiq: 'Are CML treaters convinced by ASC4FIRST as a 1L alternative to imatinib / 2G TKIs?',
    kits: ['ASC4FIRST data slide', 'Toxicity comparison card'] },
  { id: 'LP6', name: 'Veeva Medical_Insight field signal',
    moRef: 'MO5',
    kiq: 'Which themes are the MSL team capturing into Medical_Insight that haven\'t yet rolled into a strategic insight?',
    kits: ['Medical_Insight digest', 'Cross-asset insight roll-up'] },
];

// Coverage score per MO at the moment of the demo. Intentional gaps so the
// Gap Radar moment lands.
export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Low',
  MO4: 'Sufficient',
  MO5: 'Gap',
};
