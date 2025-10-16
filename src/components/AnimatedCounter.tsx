import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "50K+", "99.8%"
  start?: boolean;
  durationMs?: number;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const AnimatedCounter = ({ value, start = false, durationMs = 1200, className }: AnimatedCounterProps) => {
  const [display, setDisplay] = useState<string>(value);
  const startedRef = useRef(false);

  useEffect(() => {
    const match = value.match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2] || "";

    if (!start || startedRef.current) {
      return;
    }
    startedRef.current = true;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const current = target * eased;

      // Preserve decimals up to one place if target has decimals
      const isDecimal = match[1].includes(".");
      const formatted = isDecimal ? current.toFixed(1) : Math.round(current).toString();
      setDisplay(`${formatted}${suffix}`);

      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, value]);

  return <span className={className}>{display}</span>;
};

export default AnimatedCounter;