// @react-three/fiber v8 only patches the legacy global JSX namespace.
// @types/react >=18.0 moved JSX types into the 'react' module namespace.
// This file patches both so R3F JSX elements work with TypeScript 6 + @types/react 19.
import type { ThreeElements } from '@react-three/fiber';

// Legacy (TS <5.1 / old @types/react)
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

// Modern (TS >=5.1 / @types/react >=18 uses React.JSX)
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {};
