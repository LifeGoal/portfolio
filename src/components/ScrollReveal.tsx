import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { ScrollRevealProps } from "../types/scrollReveal";

export default function ScrollReveal({
    children,
    direction = "up",
    delay = 0,
    duration = 650,
    distance = 32,
    threshold = 0.12,
    rootMargin = "0px 0px -40px 0px",
    className = "",
    style = {},
    as: Component = "div",
    once = true,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === "undefined" || !("IntersectionObserver" in window)) return true;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;
        return false;
    });
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isVisible && once) return;

        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => {
                        setIsVisible(true);
                    });
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, once, isVisible]);

    const getInitialTransform = () => {
        switch (direction) {
            case "up":
                return `translate3d(0, ${distance}px, 0)`;
            case "down":
                return `translate3d(0, -${distance}px, 0)`;
            case "left":
                return `translate3d(-${distance}px, 0, 0)`;
            case "right":
                return `translate3d(${distance}px, 0, 0)`;
            case "scale":
                return "scale(0.95)";
            case "fade":
            default:
                return "none";
        }
    };

    const dynamicStyle: CSSProperties = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        ...style,
    };

    const combinedClassName = `scroll-reveal ${className}`.trim();

    return (
        <Component ref={elementRef as unknown as React.Ref<never>} style={dynamicStyle} className={combinedClassName}>
            {children}
        </Component>
    );
}
