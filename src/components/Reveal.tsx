import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "blur" | "fade";

const variantsMap: Record<Direction, Variants> = {
  up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1 } },
  blur: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.7,
  ...props
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  duration?: number;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={variantsMap[direction]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  delay = 0,
  stagger = 0.08,
  ...props
}: { children: ReactNode; delay?: number; stagger?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
