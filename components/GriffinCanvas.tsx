'use client';

import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { useGLTF, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface GriffinMeshProps {
  isHovered: boolean;
  clickTrigger: number;
  onHover: (hovered: boolean) => void;
}

function GriffinMesh({ isHovered, clickTrigger, onHover }: GriffinMeshProps) {
  const outerGroup  = useRef<THREE.Group>(null!);
  const eyeRefs     = useRef<THREE.Mesh[]>([]);
  const purpleLight = useRef<THREE.PointLight>(null!);
  const mouse       = useRef({ x: 0, y: 0 });
  const clickAnim   = useRef({ elapsed: 0, playing: false });

  const { scene } = useGLTF('/models/base_basic_pbr.glb') as { scene: THREE.Group };

  useEffect(() => {
    eyeRefs.current = [];
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      const n = obj.name.toLowerCase();
      if (n.includes('eye') || n.includes('pupil') || n.includes('iris') || n.includes('sclera'))
        eyeRefs.current.push(obj as THREE.Mesh);
    });
  }, [scene]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const handler = (e: MouseEvent) => {
      mouse.current.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  useEffect(() => {
    if (clickTrigger > 0) clickAnim.current = { elapsed: 0, playing: true };
  }, [clickTrigger]);

  useFrame((state, delta) => {
    const g = outerGroup.current;
    if (!g) return;

    const t = state.clock.elapsedTime;

    if (clickAnim.current.playing) {
      clickAnim.current.elapsed += delta;
      if (clickAnim.current.elapsed > 1.6) clickAnim.current.playing = false;
    }

    // Floating – clearly visible up/down drift
    const floatY = Math.sin(t * 0.55) * 0.22;
    const floatX = Math.sin(t * 0.38) * 0.06;

    // Breathing – visible scale swell
    const breathe = 1 + Math.sin(t * 1.1) * 0.022;

    // Idle organic sway
    const swayY = Math.sin(t * 0.28) * 0.028;
    const swayZ = Math.sin(t * 0.35) * 0.018;

    // Mouse look – responsive head tracking
    const yaw   = THREE.MathUtils.clamp(mouse.current.x * 0.45, -0.38, 0.38);
    const pitch = THREE.MathUtils.clamp(mouse.current.y * 0.22, -0.18, 0.18);

    // Click tilt
    const ce    = clickAnim.current.elapsed;
    const decay = clickAnim.current.playing ? Math.max(0, 1 - ce * 1.7) : 0;
    const tiltZ = Math.sin(ce * 8.8) * decay * 0.28;

    const s = delta * 2.8;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, yaw   + swayY,           s);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -pitch - 0.04,           s);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, tiltZ + swayZ, delta * 4.5);
    g.position.y = THREE.MathUtils.lerp(g.position.y, floatY,        delta * 1.8);
    g.position.x = THREE.MathUtils.lerp(g.position.x, floatX,        delta * 1.8);
    g.scale.setScalar(THREE.MathUtils.lerp(g.scale.x,  breathe,      delta * 2.0));

    // Eye glow pulse
    const baseGlow  = 0.55 + Math.sin(t * 2.1) * 0.18 + Math.sin(t * 3.7) * 0.07;
    const hoverGlow = isHovered ? 1.0 : 0;
    eyeRefs.current.forEach((mesh) => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (!(mat instanceof THREE.MeshStandardMaterial)) return;
      if (mat.emissive.getHex() === 0x000000) mat.emissive.set(0x7c3aed);
      mat.emissiveIntensity = THREE.MathUtils.lerp(mat.emissiveIntensity, baseGlow + hoverGlow, delta * 3.0);
    });

    // Purple energy light
    if (purpleLight.current) {
      const base  = 2.2 + Math.sin(t * 1.2) * 0.6 + Math.sin(t * 2.6) * 0.2;
      const hover = isHovered ? 2.0 : 0;
      purpleLight.current.intensity = THREE.MathUtils.lerp(purpleLight.current.intensity, base + hover, delta * 3);
    }
  });

  return (
    <group ref={outerGroup}>
      <pointLight ref={purpleLight} position={[0.3, 1.2, 2.5]} color="#7c3aed" intensity={2.2} distance={14} decay={2} />

      {/* Adjust scale/position/rotation here to re-frame the model */}
      <group scale={2.0} position={[0, -0.8, 0]} rotation={[0, 0.15, 0]}>
        <primitive
          object={scene}
          onPointerOver={(e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); onHover(true); }}
          onPointerOut={() => onHover(false)}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/base_basic_pbr.glb');

export default function GriffinCanvas() {
  const [isHovered,    setIsHovered]    = useState(false);
  const [clickTrigger, setClickTrigger] = useState(0);

  return (
    <div
      className="w-full h-full"
      style={{ cursor: isHovered ? 'pointer' : 'default' }}
      onClick={() => setClickTrigger((n) => n + 1)}
    >
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.5, 4.5], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        frameloop="always"
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight color="#c4b5fd" intensity={1.1} />
          <directionalLight position={[4, 7, 5]}  intensity={1.5} color="#ffffff" />
          <directionalLight position={[-3, 4, 2]} intensity={0.35} color="#ede9fe" />
          <directionalLight position={[0, 1, -5]} intensity={0.18} color="#7c3aed" />

          <GriffinMesh isHovered={isHovered} clickTrigger={clickTrigger} onHover={setIsHovered} />

          <ContactShadows position={[0, -2.5, 0]} opacity={0.12} scale={8} blur={4} far={4} color="#7c3aed" />
        </Suspense>
      </Canvas>
    </div>
  );
}
