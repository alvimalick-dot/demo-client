"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Full-bleed Three.js backdrop for the hero:
 *  - soft amber particle field drifting upward (steam / embers)
 *  - slowly tumbling wireframe "bean" shapes
 *  - gentle mouse parallax
 * Respects prefers-reduced-motion by rendering a single static frame.
 */
export default function CoffeeCanvas({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x212121, 10, 22);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      60
    );
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ---------- soft round sprite for particles ---------- */
    const makeSprite = () => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.35, "rgba(255,150,90,0.9)");
      g.addColorStop(1, "rgba(255,150,90,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    };

    /* ---------- rising particle field ---------- */
    const COUNT = 650;
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const spread = { x: 16, y: 10, z: 6 };
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;
      speeds[i] = 0.15 + Math.random() * 0.35;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.12,
      map: makeSprite(),
      transparent: true,
      depthWrite: false,
      opacity: 0.55,
      color: 0xff5500,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    /* ---------- tumbling wireframe "beans" ---------- */
    const beans = new THREE.Group();
    const beanGeo = new THREE.IcosahedronGeometry(1, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const solidMat = new THREE.MeshBasicMaterial({
      color: 0x2b2b2b,
      transparent: true,
      opacity: 0.85,
    });

    const beanConfigs = [
      { x: -6.2, y: 2.4, z: -3, s: 1.5, ry: 0.5, rx: 0.25 },
      { x: 6.8, y: -2.6, z: -2.5, s: 1.1, ry: -0.4, rx: 0.35 },
      { x: -5.4, y: -3.4, z: -1.5, s: 0.7, ry: 0.9, rx: 0.2 },
      { x: 6.2, y: 3.2, z: -3.5, s: 1.9, ry: 0.1, rx: 0.15 },
    ];
    beanConfigs.forEach(({ x, y, z, s, ry, rx }) => {
      const solid = new THREE.Mesh(beanGeo, solidMat);
      solid.scale.set(s, s * 0.62, s * 0.85);
      solid.position.set(x, y, z);
      solid.rotation.set(rx, ry, 0.4);
      const wire = new THREE.Mesh(beanGeo, wireMat);
      wire.scale.set(s * 1.02, s * 0.64, s * 0.87);
      wire.position.set(x, y, z);
      wire.rotation.set(rx, ry, 0.4);
      beans.add(solid, wire);
    });
    scene.add(beans);

    /* ---------- mouse parallax ---------- */
    const mouse = { x: 0, y: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    /* ---------- resize ---------- */
    const onResize = () => {
      const w = container.clientWidth;
      const h = Math.max(container.clientHeight, 1);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    /* ---------- loop ---------- */
    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      const t = clock.getElapsedTime();

      // rise particles & wrap
      const pos = pGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < COUNT; i++) {
        let y = pos.getY(i) + speeds[i] * 0.012;
        if (y > spread.y / 2) y = -spread.y / 2;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;

      beans.rotation.y += 0.0009;
      beans.rotation.x = Math.sin(t * 0.1) * 0.06;

      // parallax
      camera.position.x += (mouse.x * 0.9 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 0.6 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };

    if (reduced) {
      renderer.render(scene, camera); // single static frame
    } else {
      raf = requestAnimationFrame(tick);
    }

    /* ---------- cleanup ---------- */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      pGeo.dispose();
      pMat.dispose();
      beanGeo.dispose();
      wireMat.dispose();
      solidMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden />;
}
