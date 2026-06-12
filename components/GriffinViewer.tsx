'use client';

import dynamic from 'next/dynamic';

// Lazy-load the R3F canvas – SSR disabled (Three.js is browser-only)
const GriffinCanvas = dynamic(() => import('./GriffinCanvas'), {
  ssr: false,
  loading: () => <LoadingPulse />,
});

function LoadingPulse() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="rounded-full bg-primary/15 animate-pulse"
        style={{ width: 128, height: 128 }}
      />
    </div>
  );
}

export default function GriffinViewer() {
  return (
    // Responsive height: small on mobile, grows on tablet + desktop
    <div className="w-full h-[360px] sm:h-[460px] lg:h-[580px] xl:h-[640px]">
      <GriffinCanvas />
    </div>
  );
}
