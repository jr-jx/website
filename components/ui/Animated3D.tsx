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
  delay = 0
}: Animated3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const getAnimationProps = () => {
      switch (animationType) {
        case "float":
          return {
            translateY: [0, -20, 0],
            duration: duration,
            easing: "easeInOutSine",
            loop: true,
            direction: "alternate"
          };
        case "rotate":
          return {
            rotateY: [0, 360],
            duration: duration,
            easing: "linear",
            loop: true
          };
        case "scale":
          return {
            scale: [1, 1.1, 1],
            duration: duration,
            easing: "easeInOutSine",
            loop: true,
            direction: "alternate"
          };
        case "tilt":
          return {
            rotateX: [0, 10, 0],
            rotateY: [0, 5, 0],
            duration: duration,
            easing: "easeInOutSine",
            loop: true,
            direction: "alternate"
          };
        default:
          return {
            translateY: [0, -20, 0],
            duration: duration,
            easing: "easeInOutSine",
            loop: true,
            direction: "alternate"
          };
      }
    };

    const timeline = createTimeline()
      .add(ref.current, {
        ...getAnimationProps(),
        delay: delay
      });

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
        perspective: "1000px"
      }}
    >
      {children}
    </div>
  );
}
