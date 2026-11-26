import React from 'react';

export type Segment = { text: string; accent?: boolean; br?: boolean };

/**
 * Masked word-by-word reveal. Pure CSS (see .ss-w in index.css), so the text is
 * real, server-rendered HTML (SEO) and animates without waiting for JavaScript.
 * `afterIntro` delays the reveal until the home intro has finished (first visit only).
 */
export default function SplitReveal({
  segments,
  afterIntro = false,
  startIndex = 0,
}: {
  segments: Segment[];
  afterIntro?: boolean;
  startIndex?: number;
}) {
  let i = startIndex;
  return (
    <span className={afterIntro ? 'ss-reveal-after-intro' : undefined}>
      {segments.map((seg, si) => (
        <React.Fragment key={si}>
          {seg.text.split(' ').map((word, wi) => {
            const idx = i++;
            return (
              <React.Fragment key={wi}>
                <span className="ss-w">
                  <span
                    className={seg.accent ? 'ss-accent' : undefined}
                    style={{ ['--i' as string]: idx }}
                  >
                    {word}
                  </span>
                </span>{' '}
              </React.Fragment>
            );
          })}
          {seg.br && <br />}
        </React.Fragment>
      ))}
    </span>
  );
}
