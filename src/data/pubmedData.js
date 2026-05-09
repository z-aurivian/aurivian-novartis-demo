// Novartis Oncology — placeholder pubmed corpora.
// The legacy named exports are kept so rag.js imports don't break,
// but content is empty. RAG context for Novartis is generated from
// the src/config/* flat datasets instead. Real PubMed enrichment can
// be added per-product later if needed.

export const PUBMED_SOLIRIS = [];      // legacy name — keep stub
export const PUBMED_ULTOMIRIS = [];    // legacy name — keep stub
export const PUBMED_COMPETITORS = [];  // legacy name — keep stub
export const PUBMED_KOL = [];          // legacy name — keep stub

// Forward-looking Novartis-specific exports (consumers can migrate when ready).
export const PUBMED_KISQALI = [];
export const PUBMED_PLUVICTO = [];
export const PUBMED_SCEMBLIX = [];
