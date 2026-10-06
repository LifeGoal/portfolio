// Avataaars av Pablo Stanley (https://avataaars.com/), via DiceBear.

import { useEffect, useRef } from "react";

export default function InteractiveAvatar() {
    const whiteL = useRef<SVGCircleElement>(null);
    const whiteR = useRef<SVGCircleElement>(null);
    const pupilL = useRef<SVGGElement>(null);
    const pupilR = useRef<SVGGElement>(null);

    useEffect(() => {
        const look = (
            white: SVGCircleElement | null,
            pupil: SVGGElement | null,
            x: number,
            y: number
        ) => {
            if (!white || !pupil) return;
            const r = white.getBoundingClientRect();
            const cx = r.left + r.width / 2;
            const cy = r.top + r.height / 2;
            const dx = x - cx;
            const dy = y - cy;
            const angle = Math.atan2(dy, dx);
            const dist = 6 * Math.min(1, Math.hypot(dx, dy) / 150);
            pupil.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
        };

        const onMove = (e: MouseEvent) => {
            look(whiteL.current, pupilL.current, e.clientX, e.clientY);
            look(whiteR.current, pupilR.current, e.clientX, e.clientY);
        };

        const onTouch = (e: TouchEvent) => {
            const t = e.touches[0];
            if (!t) return;
            look(whiteL.current, pupilL.current, t.clientX, t.clientY);
            look(whiteR.current, pupilR.current, t.clientX, t.clientY);
        };

        const reset = () => {
            [pupilL.current, pupilR.current].forEach((p) => {
                if (p) p.style.transform = "translate(0px, 0px)";
            });
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("touchmove", onTouch, { passive: true });
        document.addEventListener("mouseleave", reset);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onTouch);
            document.removeEventListener("mouseleave", reset);
        };
    }, []);

    const pupilStyle = { transition: "transform 0.08s ease-out" };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" fill="none" aria-hidden="true" className="w-64 h-64 lg:w-96 lg:h-96">
            <defs>
                <g id="clothes-hoodie-659659be">
                    <path d="M76 0C60.48 3.7 48.9 10.83 45.23 19.45A72 72 0 0 0 0 86.3v9h200v-9a72 72 0 0 0-45.23-66.86C151.1 10.83 139.52 3.69 124 0v17.3a24 24 0 1 1-48 0z" fill="#262e33" />
                    <path d="M70 48.64a67 67 0 0 1-7-2.81V95.3h7zm60 0a67 67 0 0 0 7-2.81V83.8a3.5 3.5 0 1 1-7 0z" fill="#F4F4F4" />
                    <path d="M155.62 19.8a72 72 0 0 1 10.83 5.62c-1.34 15.5-30.58 27.89-66.45 27.89 30.93 0 56-13.44 56-30q0-1.79-.38-3.52m-111.24.01a17 17 0 0 0-.38 3.5c0 16.57 25.07 30 56 30-35.87 0-65.1-12.38-66.45-27.88a72 72 0 0 1 10.83-5.63" fill="black" fillOpacity=".16" />
                </g>
                <g id="mouth-twinkle-659659be"><path d="M32 10c0 5.37 6.16 9 14 9s14-3.63 14-9c0-1.1-.95-2-2-2-1.3 0-1.87.9-2 2-1.24 2.94-4.32 4.72-10 5-5.68-.28-8.76-2.06-10-5-.13-1.1-.7-2-2-2-1.05 0-2 .9-2 2" fill="black" fillOpacity=".6" /></g>
                <g id="nose-default-659659be"><path fillRule="evenodd" clipRule="evenodd" d="M0 0c0 4.42 5.37 8 12 8s12-3.58 12-8" fill="black" fillOpacity=".16" /></g>
                <g id="eyebrows-default-659659be"><path d="M7.77 17.16c3.91-5.51 14.64-8.6 23.89-6.33a2 2 0 0 0 .95-3.88c-10.73-2.64-23.16.94-28.1 7.9a2 2 0 0 0 3.3 2.3m80.73.01c-3.9-5.5-14.64-8.6-23.9-6.33a2 2 0 0 1-.94-3.88c10.74-2.64 23.17.94 28.1 7.9a2 2 0 0 1-3.25 2.3" fill="black" fillOpacity=".6" /></g>
                <g id="top-shortFlat-659659be"><path fillRule="evenodd" clipRule="evenodd" d="M179.15 39.92c-2.76-2.82-5.96-5.21-9.08-7.61q-1.04-.79-2.06-1.6c-.15-.12-1.72-1.24-1.9-1.66-.4-.99-.1-.22-.1-1.4.1-1.5 3.2-5.73.9-6.7-1-.43-2.8.7-3.73 1.08a60 60 0 0 1-5.73 1.9c.92-1.85 2.7-5.57-.64-4.58-2.6.78-5.04 2.77-7.65 3.7.86-1.4 4.32-5.8 1.2-6.05-.98-.07-3.8 1.75-4.86 2.14a56 56 0 0 1-9.63 2.51c-11.2 2.02-24.3 1.45-34.65 6.54-8 3.93-15.88 10.03-20.5 17.8-4.44 7.48-6.1 15.67-7.03 24.25-.7 6.3-.74 12.8-.42 19.12.1 2.07.34 11.61 3.34 8.72 1.5-1.44 1.5-7.25 1.87-9.22.75-3.91 1.47-7.85 2.72-11.64 2.2-6.68 4.8-13.8 10.3-18.4 3.53-2.94 6-6.93 9.4-9.9 1.5-1.35.35-1.2 2.8-1.03q2.44.16 4.9.2c3.8.1 7.6.08 11.4.1 7.63 0 15.24.1 22.89-.3 3.4-.2 6.8-.3 10.17-.6 1.9-.2 5.25-1.4 6.8-.5 1.43.84 2.9 3.61 3.94 4.75 2.4 2.67 5.3 4.72 8.12 6.92 5.9 4.57 8.86 10.33 10.65 17.48 1.8 7.13 1.3 13.75 3.5 20.76.38 1.24 1.4 3.36 2.67 1.46.25-.36.2-2.3.2-3.42 0-4.52 1.13-7.9 1.12-12.46-.06-13.83-.5-31.87-10.85-42.44" fill="#b58143" /></g>
                <clipPath id="clip-659659be"><rect width="280" height="280" rx="0" ry="0" /></clipPath>
            </defs>

            <g clipPath="url(#clip-659659be)">
                <path d="M140 36a56 56 0 0 0-56 56v6.17A12 12 0 0 0 74 110v14a12 12 0 0 0 10.3 11.88A56 56 0 0 0 116 180.6V230h48V180.62a56 56 0 0 0 31.7-44.73A12 12 0 0 0 206 124v-14a12 12 0 0 0-10-11.83V92a56 56 0 0 0-56-56" fill="#edb98a" />
                <path d="M116 180.61v8a56 56 0 0 0 24 5.39 56 56 0 0 0 24-5.39v-8a56 56 0 0 1-24 5.39 56 56 0 0 1-24-5.39" fill="black" fillOpacity=".1" />
                <use transform="translate(40 185)" href="#clothes-hoodie-659659be" />
                <use transform="translate(94 140)" href="#mouth-twinkle-659659be" />
                <use transform="translate(128 130)" href="#nose-default-659659be" />
                <circle ref={whiteL} cx="114" cy="112" r="14" fill="white" />
                <circle ref={whiteR} cx="166" cy="112" r="14" fill="white" />
                <g ref={pupilL} style={pupilStyle}><circle cx="114" cy="112" r="6" fill="black" fillOpacity=".7" /></g>
                <g ref={pupilR} style={pupilStyle}><circle cx="166" cy="112" r="6" fill="black" fillOpacity=".7" /></g>
                <use transform="translate(91.86 82)" href="#eyebrows-default-659659be" />
                <use transform="translate(8)" href="#top-shortFlat-659659be" />
            </g>
        </svg>
    );
}