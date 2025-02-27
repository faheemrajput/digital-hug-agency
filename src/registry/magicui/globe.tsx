
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlobeProps extends React.HTMLAttributes<HTMLDivElement> {
  // Customize with any additional props as needed
}

export function Globe({ className, ...props }: GlobeProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      setLoaded(true);
    };

    // Set initial size
    resizeCanvas();

    // Handle resize
    window.addEventListener("resize", resizeCanvas);

    // Animation variables
    const GLOBE_RADIUS = 120;
    const GLOBE_CENTER_X = canvas.width / 2 / (window.devicePixelRatio || 1);
    const GLOBE_CENTER_Y = canvas.height / 2 / (window.devicePixelRatio || 1);
    const DOT_RADIUS = 1;
    const DOTS_AMOUNT = 40;
    const dots: Array<{
      theta: number;
      phi: number;
      x: number;
      y: number;
      z: number;
      xProjected: number;
      yProjected: number;
      originalPhi: number;
    }> = [];

    // Initialize dots
    for (let i = 0; i < DOTS_AMOUNT; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = GLOBE_RADIUS * Math.cos(phi);

      dots.push({
        theta,
        phi,
        x,
        y,
        z,
        xProjected: 0,
        yProjected: 0,
        originalPhi: phi,
      });
    }

    let rotation = 0;
    const PRIMARY_COLOR = getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || "#FF5733";

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      // Draw globe wireframe
      ctx.strokeStyle = `rgba(255, 87, 51, 0.1)`;
      ctx.beginPath();
      ctx.arc(GLOBE_CENTER_X, GLOBE_CENTER_Y, GLOBE_RADIUS, 0, 2 * Math.PI);
      ctx.stroke();

      // Update rotation
      rotation += 0.005;

      // Update dot positions and draw
      dots.forEach((dot, i) => {
        // Rotate dots
        const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);

        // Project 3D point to 2D surface
        const scale = GLOBE_RADIUS / (GLOBE_RADIUS + rotatedZ);
        dot.xProjected = rotatedX * scale + GLOBE_CENTER_X;
        dot.yProjected = dot.y * scale + GLOBE_CENTER_Y;

        // Determine point color based on z position (depth)
        const depth = (rotatedZ + GLOBE_RADIUS) / (2 * GLOBE_RADIUS);
        const opacity = 0.4 + 0.6 * depth;
        ctx.fillStyle = `rgba(255, 87, 51, ${opacity})`;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.xProjected, dot.yProjected, DOT_RADIUS + 1 * depth, 0, 2 * Math.PI);
        ctx.fill();

        // Connect dots that are close to each other
        dots.forEach((otherDot, j) => {
          if (i !== j) {
            const dx = dot.xProjected - otherDot.xProjected;
            const dy = dot.yProjected - otherDot.yProjected;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 50) {
              ctx.beginPath();
              ctx.moveTo(dot.xProjected, dot.yProjected);
              ctx.lineTo(otherDot.xProjected, otherDot.yProjected);
              ctx.strokeStyle = `rgba(255, 87, 51, ${0.2 * (1 - dist / 50) * opacity})`;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className={cn("absolute pointer-events-none", className)} {...props}>
      <canvas
        ref={canvasRef}
        className={cn(
          "h-[300px] w-[300px] transition-opacity duration-1000",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
