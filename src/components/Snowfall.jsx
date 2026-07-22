"use client";

import React, { useEffect, useRef } from "react";

// Lightweight, subtle snowfall on a fixed canvas.
export default function Snowfall({ count = 60 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let flakes = [];
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    const rand = (min, max) => Math.random() * (max - min) + min;

    flakes = Array.from({ length: count }).map(() => ({
      x: rand(0, w),
      y: rand(0, h),
      r: rand(0.6, 2.4),
      d: rand(0.3, 1),
      o: rand(0.2, 0.7),
      sway: rand(0, Math.PI * 2),
    }));

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

    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return <canvas ref={canvasRef} className="snow-canvas" data-testid="snowfall-canvas" aria-hidden="true" />;
}
