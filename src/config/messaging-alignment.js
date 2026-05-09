// Medical Messaging Alignment — LUCA's per-KOL alignment view (Novartis).
// Vision Doc Module 3 (KOL Intelligence) — alignment % per messaging pillar
// plus an AI engagement recommendation tying tier, influence and gaps
// together. Pillars span the three priority brands so any oncology KOL
// has scoring; cross-tumour KOLs get measured across all four.

export const MESSAGING_PILLARS = [
  { id: 'pillar-1', name: 'NATALEE adjuvant translation (Kisqali)',         short: 'Adjuvant Kisqali' },
  { id: 'pillar-2', name: 'PSMA-RLT sequencing leadership (Pluvicto)',       short: 'Pluvicto sequencing' },
  { id: 'pillar-3', name: 'ASC4FIRST 1L positioning (Scemblix)',             short: 'Scemblix 1L' },
  { id: 'pillar-4', name: 'Cross-tumour Medical Affairs platform',           short: 'Cross-tumour platform' },
];

// Stable per-KOL alignment + AI recommendation, derived deterministically
// from tier + influence + a per-pillar offset on the KOL id hash. Avoids
// hand-keying every KOL while giving each one distinct, plausible scores.
function hashCode(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const TIER_BASELINE = { 'Tier 1': 78, 'Tier 2': 64, 'Tier 3': 50 };

export function getMessagingAlignment(kol) {
  if (!kol) return null;
  const baseline = TIER_BASELINE[kol.engagementTier] ?? 60;
  const influenceLift = Math.round((kol.influenceScore - 70) / 4); // ~ -5..+8
  const idHash = hashCode(kol.id);

  const pillars = MESSAGING_PILLARS.map((p, i) => {
    const offset = ((idHash + i * 37) % 31) - 15;
    let score = Math.max(20, Math.min(98, baseline + influenceLift + offset));
    // KOLs only aligned to one product score lower on the other-product pillars.
    const isAlignedToProduct =
      (p.id === 'pillar-1' && kol.productAlignment?.includes('kisqali'))  ||
      (p.id === 'pillar-2' && kol.productAlignment?.includes('pluvicto')) ||
      (p.id === 'pillar-3' && kol.productAlignment?.includes('scemblix')) ||
      (p.id === 'pillar-4' && (kol.productAlignment?.length || 0) > 1);
    if (!isAlignedToProduct && p.id !== 'pillar-4') score = Math.max(20, score - 30);
    return { ...p, score };
  });

  const gap = pillars.reduce((min, p) => (p.score < min.score ? p : min), pillars[0]);
  const strongest = pillars.reduce((max, p) => (p.score > max.score ? p : max), pillars[0]);
  const avgScore = Math.round(pillars.reduce((sum, p) => sum + p.score, 0) / pillars.length);

  let recommendation;
  if (gap.score >= 70) {
    recommendation = `Strong alignment across all messaging pillars (avg ${avgScore}%). Maintain current cadence — consider advisory board invitation, particularly on ${strongest.short}.`;
  } else if (gap.score >= 50) {
    recommendation = `Average alignment ${avgScore}%. Largest gap is ${gap.name} (${gap.score}%). Recommended: targeted scientific exchange; bring updated evidence pack.`;
  } else {
    recommendation = `Below-target alignment on ${gap.name} (${gap.score}%). Suggest cross-tumour engagement; potential for platform-level value if alignment lifts.`;
  }

  return { pillars, avgScore, gap, strongest, recommendation };
}
