"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  value: number;
  className?: string;
};

export function CountUp({ value, className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reduce) {
      node.textContent = String(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest)).padStart(2, "0");
      },
    });

    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {String(value).padStart(2, "0")}
    </span>
  );
}
