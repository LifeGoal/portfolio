import type { CSSProperties, ElementType, ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

export interface ScrollRevealProps {
    children: ReactNode;
    direction?: RevealDirection;
    delay?: number;
    duration?: number;
    distance?: number;
    threshold?: number;
    rootMargin?: string;
    className?: string;
    style?: CSSProperties;
    as?: ElementType;
    once?: boolean;
}