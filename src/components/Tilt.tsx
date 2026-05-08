import type { ReactNode } from "react";

export function Tilt({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  return <div className={className}>{children}</div>;
}
