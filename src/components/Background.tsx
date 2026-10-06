import { useEffect, useState } from 'react'

export function Background() {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => { setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }) }
        window.addEventListener('mousemove', handleMouse)
        return () => window.removeEventListener('mousemove', handleMouse)
    }, [])

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
            <div className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: 'radial-gradient(circle, hsl(199 89% 60%) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: `translate(${(mousePos.x - 0.5) * 10}px, ${(mousePos.y - 0.5) * 10}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            />

            <div className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
                style={{
                    background: 'radial-gradient(circle, hsl(199 89% 60% / 0.3), transparent 70%)',
                    left: `${mousePos.x * 100}%`,
                    top: `${mousePos.y * 100}%`,
                    transition: 'left 0.1s ease-out, top 0.1s ease-out',
                }}
            />
        </div>
    )
}