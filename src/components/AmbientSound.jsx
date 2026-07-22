"use client";

import React, { useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Ambient forest-like soundscape synthesized with the Web Audio API.
// Reliable (no external asset). Soft filtered noise + gentle sway = wind through pines.
export default function AmbientSound() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef(null);
  const nodesRef = useRef(null);

  const start = useCallback(() => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    ctxRef.current = ctx;

    // Brown-ish noise buffer
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.2;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 620;

    const gain = ctx.createGain();
    gain.gain.value = 0.0;

    // Gentle wind sway via LFO on gain
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.08;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.05;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(0);
    lfo.start(0);
    gain.gain.linearRampToValueAtTime(0.11, ctx.currentTime + 2.5);

    nodesRef.current = { noise, lfo, gain };
  }, []);

  const stop = useCallback(() => {
    const ctx = ctxRef.current;
    const nodes = nodesRef.current;
    if (!ctx || !nodes) return;
    nodes.gain.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 1.2);
    setTimeout(() => {
      try {
        nodes.noise.stop();
        nodes.lfo.stop();
        ctx.close();
      } catch (e) { /* noop */ }
      ctxRef.current = null;
      nodesRef.current = null;
    }, 1300);
  }, []);

  const toggle = () => {
    if (on) stop();
    else start();
    setOn(!on);
  };

  return (
    <button
      onClick={toggle}
      data-testid="ambient-sound-toggle"
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      className="fixed bottom-6 right-6 z-[9997] flex items-center gap-3 rounded-full border border-gold/30 bg-forest/70 px-4 py-3 backdrop-blur-xl transition-colors duration-300 hover:border-gold/70"
    >
      {on ? (
        <Volume2 className="h-4 w-4 text-gold" strokeWidth={1.5} />
      ) : (
        <VolumeX className="h-4 w-4 text-ivory/70" strokeWidth={1.5} />
      )}
      <span className="hidden font-body text-[10px] uppercase tracking-[0.25em] text-ivory/80 sm:inline">
        {on ? "Forest On" : "Ambience"}
      </span>
    </button>
  );
}
