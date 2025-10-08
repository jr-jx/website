"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

interface Animated3DProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "float" | "rotate" | "scale" | "tilt";
  duration?: number;
  delay?: number;
}

export function Animated3D({
  children,
  className = "",
  animationType = "float",
  duration = 2000,
  delay = 0,
}: Animated3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    let timeline: ReturnType<typeof createTimeline>;

    switch (animationType) {
      case "float":
        timeline = createTimeline().add(ref.current, {
          translateY: [0, -20, 0],
          duration: duration,
          easing: "easeInOutSine",
          loop: true,
          direction: "alternate",
          delay: delay,
        });
        break;
      case "rotate":
        timeline = createTimeline().add(ref.current, {
          rotateY: [0, 360],
          duration: duration,
          easing: "linear",
          loop: true,
          delay: delay,
        });
        break;
      case "scale":
        timeline = createTimeline().add(ref.current, {
          scale: [1, 1.1, 1],
          duration: duration,
          easing: "easeInOutSine",
          loop: true,
          direction: "alternate",
          delay: delay,
        });
        break;
      case "tilt":
        timeline = createTimeline().add(ref.current, {
          rotateX: [0, 10, 0],
          rotateY: [0, 5, 0],
          duration: duration,
          easing: "easeInOutSine",
          loop: true,
          direction: "alternate",
          delay: delay,
        });
        break;
      default:
        timeline = createTimeline().add(ref.current, {
          translateY: [0, -20, 0],
          duration: duration,
          easing: "easeInOutSine",
          loop: true,
          direction: "alternate",
          delay: delay,
        });
    }

    return () => {
      timeline.pause();
      timeline.reset();
    };
  }, [animationType, duration, delay]);

  return (
    <div
      ref={ref}
      className={`transform-gpu ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </div>
  );
}
