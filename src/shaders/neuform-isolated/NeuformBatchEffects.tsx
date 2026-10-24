import React, { useEffect, useRef } from "react";

export type NeuformBatchEffectProps = {
  variant?: string;
  mode?: "dark" | "light" | "auto";
  speed?: number;
  size?: number;
  gap?: number;
  length?: number;
  density?: number;
  strokeWidth?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function SignalParticles({
  mode = "dark",
  speed = 1,
  size = 1,
  length = 1,
  opacity = 1,
  hue = 0,
  saturation = 1,
  brightness = 1,
  className = "",
  style = {},
}: NeuformBatchEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let isVisible = true;

    const spacing = Math.max(6, Math.round(16 / Math.max(0.35, length)));
    const dotRadius = Number((1.5 * size).toFixed(2));

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    const isLight = mode === "light";
    const blueColor = isLight ? "#1d4ed8" : "#3b82f6";
    const purpleColor = isLight ? "#5b21b6" : "#8b5cf6";

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);

      const offsetX = (width - cols * spacing) / 2;
      const offsetY = (height - rows * spacing) / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;

          const nx = i * 0.1;
          const ny = j * 0.1;

          const wave1 = Math.sin(nx + time * 0.5) * Math.cos(ny - time * 0.3);
          const wave2 = Math.sin(nx * 0.5 - ny * 0.5 + time * 0.8);
          const value = wave1 + wave2;

          if (value > 0.1) {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

            const highlightCheck = Math.sin(i * 12.34) * Math.cos(j * 56.78);

            if (highlightCheck > 0.98) {
              ctx.fillStyle = blueColor;
            } else if (highlightCheck < -0.98) {
              ctx.fillStyle = purpleColor;
            } else {
              const alpha = Math.min(0.6, (value - 0.1) * 0.8) * opacity;
              ctx.fillStyle = isLight
                ? `rgba(36, 48, 68, ${alpha})`
                : `rgba(148, 163, 184, ${alpha})`;
            }

            ctx.fill();
          }
        }
      }

      time += 0.02 * speed;
      if (isVisible && !document.hidden) {
        animFrameRef.current = requestAnimationFrame(draw);
      }
    }

    animFrameRef.current = requestAnimationFrame(draw);

    const onVisibilityChange = () => {
      if (!document.hidden && isVisible) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animFrameRef.current);
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange, { passive: true });

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [length, size, speed, opacity, mode]);

  const filter =
    hue === 0 && saturation === 1 && brightness === 1
      ? undefined
      : `hue-rotate(${hue}deg) saturate(${saturation}) brightness(${brightness})`;

  return (
    <div
      className={`threeui-background signal-particles-mount ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        background: mode === "light" ? "#eef1f6" : "#08090d",
        overflow: "hidden",
        pointerEvents: "none",
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          filter,
        }}
      />
    </div>
  );
}
