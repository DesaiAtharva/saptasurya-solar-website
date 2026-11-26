import HomeView from '@/views/HomeView';
import { getPublishedProjects } from '@/lib/projects.server';
import { getPanelSequence } from '@/lib/sequences.server';

// Metadata for the home page comes from the root layout.
export default function Page() {
  return (
    <HomeView
      // Only real projects whose photo files exist (and at least MIN_PROJECTS of them).
      projects={getPublishedProjects()}
      // Panel image sequence: frames dropped into /public/assets/sequence/panel/* are picked up automatically.
      panelSequence={getPanelSequence()}
    />
  );
}
