"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function BounceDemo() {
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const animation = anime({
      targets: boxRef.current,
      translateY: [0, -12, 0],
      easing: "easeInOutSine",
      duration: 1200,
      loop: true,
      autoplay: true,
    });
    return () => {
      animation.pause();
      animation.reset();
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="size-8 rounded-md bg-primary/80 dark:bg-primary/60"
      aria-hidden
    />
  );
}


