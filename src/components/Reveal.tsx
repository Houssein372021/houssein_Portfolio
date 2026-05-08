import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur" | "fade";

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  className = "",
  style,
  ...props
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
} & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "-80px 0px", threshold: 0.12 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const revealStyle = {
    ...style,
    "--reveal-delay": `${delay}s`,
    "--reveal-duration": `${duration}s`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${visible ? "is-visible" : ""} ${className}`}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export function StaggerGroup({
  children,
  className = "",
  ...props
}: { children: ReactNode; delay?: number; stagger?: number } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
