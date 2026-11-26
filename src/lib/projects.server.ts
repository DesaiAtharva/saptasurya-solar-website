import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import { PROJECTS, MIN_PROJECTS, type Project } from '@/data/projects';

/**
 * Projects whose photo file really exists in /public (checked at build/render time on the server).
 * Returns an empty list until there are at least MIN_PROJECTS — the rail is then not rendered at all.
 */
export function getPublishedProjects(): Project[] {
  const publicDir = path.join(process.cwd(), 'public');
  const withPhotos = PROJECTS.filter((p) => {
    if (!p.photo || !p.photo.startsWith('/assets/projects/')) return false;
    const file = path.join(publicDir, p.photo);
    return file.startsWith(publicDir) && fs.existsSync(file);
  });
  return withPhotos.length >= MIN_PROJECTS ? withPhotos : [];
}
