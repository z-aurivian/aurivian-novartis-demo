// Insight-to-Impact — Vision Doc Module 2 (Insights to Action).
// Surfaces the insight → action → outcome lineage. Each entry traces
// to a Veeva Medical_Insight or capture-app field signal source.

export const INSIGHT_TO_IMPACT = [
  {
    id: 'i2i-1',
    insight: 'Community oncologists post-NATALEE want a workflow algorithm, not another slide deck.',
    action: 'Adjuvant Kisqali workflow algorithm + QTc one-pager co-created with community-oncology MSL field input; deployed to 184 community centres.',
    outcome: '+34% increase in MSL-tracked adjuvant Kisqali decisions in pilot centres; HCP awareness ladder Knowledgeable → Intent conversion +12 pts.',
    timeframe: '8 weeks',
    impactScore: 9,
    relatedInsight: 'AI1',
    relatedMO: 'MO1',
  },
  {
    id: 'i2i-2',
    insight: 'Theranostic centre wait lists are the dominant Pluvicto access barrier — not payer access or imaging.',
    action: 'Theranostic Centre Activation Program — credentialing + isotope supply support deployed to 23 sites; site-readiness checklist published.',
    outcome: 'Average wait list reduced from 9.2 weeks to 5.1 weeks across program centres; +28% Pluvicto referral conversion.',
    timeframe: '14 weeks',
    impactScore: 9,
    relatedInsight: 'AI4',
    relatedMO: 'MO3',
  },
  {
    id: 'i2i-3',
    insight: 'Cross-tumour KOLs drive platform-level decisions but are tagged single-asset in Veeva.',
    action: 'Re-tier engagement plans for top 8 cross-tumour KOLs; opened platform-level advisory board (Lillian Siu chair).',
    outcome: 'Cross-asset insight roll-up surfaced 3 platform-level themes; influenced Pluvicto-then-225Ac sequencing strategy at next-cycle ISP review.',
    timeframe: '12 weeks',
    impactScore: 7,
    relatedInsight: 'AI7',
    relatedMO: 'MO5',
  },
];
