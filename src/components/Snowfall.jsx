"use client";

import React, { useEffect, useRef } from "react";

// Lightweight snowfall clipped to its parent (hero) container.
export default function Snowfall({ count = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let flakes = [];
    let w = 0;
    let h = 0;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const seedFlakes = () => {
      flakes = Array.from({ length: count }).map(() => ({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.6, 2.4),
        d: rand(0.3, 1),
        o: rand(0.2, 0.7),
        sway: rand(0, Math.PI * 2),
      }));
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = w;
      canvas.height = h;
      if (flakes.length === 0) seedFlakes();
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 246, 240, ${f.o})`;
        ctx.fill();
      }
      update();
      animationId = requestAnimationFrame(draw);
    };

    const update = () => {
      for (const f of flakes) {
        f.sway += 0.01;
        f.y += f.d * 0.5;
        f.x += Math.sin(f.sway) * 0.3;
        if (f.y > h) {
          f.y = -5;
          f.x = rand(0, w);
        }
      }
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="snow-canvas"
      data-testid="snowfall-canvas"
      aria-hidden="true"
    />
  );
}
