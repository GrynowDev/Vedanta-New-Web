import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function useCountUp(end, { duration = 1800, start = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!enabled || hasRun.current) return;
    hasRun.current = true;

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, enabled, end, start]);

  return value;
}

export function CountUp({ value, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, { enabled: inView });

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
