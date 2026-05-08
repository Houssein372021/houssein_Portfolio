import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const positionRef = useRef({ x: -240, y: -240 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX - 250, y: e.clientY - 250 };

      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        const element = ref.current;
        if (!element) return;
        const { x, y } = positionRef.current;
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor-glow pointer-events-none fixed top-0 left-0 z-0 w-[500px] h-[500px] rounded-full opacity-40 mix-blend-screen"
    >
      <div className="w-full h-full rounded-full bg-gradient-hero blur-[100px]" />
    </div>
  );
}
