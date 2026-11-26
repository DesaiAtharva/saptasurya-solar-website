/**
 * Real Saptasurya installations for the home-page project rail (Section 5).
 *
 * Add one entry per completed project. Put the photo in /public/assets/projects/
 * (WebP, ~1600×1000, landscape) and reference it as '/assets/projects/<file>.webp'.
 *
 * The rail stays hidden until at least MIN_PROJECTS entries have a photo file that
 * actually exists — never add sample, stock or AI images here.
 *
 * Example (shape only — not a real project):
 *   { city: 'Hadapsar, Pune', kw: 5, monthlySaving: 6000, installMonth: '2026-03',
 *     photo: '/assets/projects/hadapsar-5kw.webp' },
 */
export type Project = {
  /** Area / city shown on the card, e.g. "Baner, Pune". */
  city: string;
  /** Installed capacity in kW. */
  kw: number;
  /** Typical monthly saving in ₹ (from the customer's bills). */
  monthlySaving: number;
  /** Installation month as YYYY-MM. */
  installMonth: string;
  /** Path under /public, e.g. '/assets/projects/baner-5kw.webp'. */
  photo: string;
  /** Optional custom alt text; a descriptive default is generated otherwise. */
  alt?: string;
};

export const MIN_PROJECTS = 4;

export const PROJECTS: Project[] = [];
