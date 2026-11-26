import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Counts consecutive frames 0001.webp, 0002.webp, … in a /public folder.
 * Lets a section switch to its image sequence just by dropping frames in — no code change.
 */
export function countFrames(publicDir: string): number {
  const dir = path.join(process.cwd(), 'public', publicDir);
  if (!fs.existsSync(dir)) return 0;
  let n = 0;
  while (fs.existsSync(path.join(dir, `${String(n + 1).padStart(4, '0')}.webp`))) n++;
  return n;
}

export const PANEL_SEQUENCE_DIRS = {
  desktop: '/assets/sequence/panel/desktop',
  mobile: '/assets/sequence/panel/mobile',
} as const;

export function getPanelSequence() {
  return {
    desktop: { dir: PANEL_SEQUENCE_DIRS.desktop, count: countFrames(PANEL_SEQUENCE_DIRS.desktop) },
    mobile: { dir: PANEL_SEQUENCE_DIRS.mobile, count: countFrames(PANEL_SEQUENCE_DIRS.mobile) },
  };
}
