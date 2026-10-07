import type { TechBadgeProps } from "../types/techBadge"

export function TechBadge({ name, icon: Icon }: TechBadgeProps) {
    return (
        <span className="w-max inline-flex items-center gap-2 bg-card/90 hover:bg-card px-3.5 py-1.5 rounded-lg text-sm font-mono font-medium shadow-sm transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]">
            <Icon className="w-4 h-4 shrink-0 transition-transform text-primary group-hover:scale-110" />
            <span>{name}</span>
        </span>
    )
}

export function PlaywrightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.7 8.3c-.3-1.6-1.5-2.9-3-3.3-1.6-.4-3.3.1-4.4 1.3-.3.4-.6.8-.8 1.3-.4-.2-.8-.4-1.3-.4-1.5-.1-2.9.7-3.6 2-.8 1.4-.7 3.2.2 4.4 1 1.4 2.7 2.2 4.4 2 1.3-.1 2.5-.9 3.1-2 .5.1 1.1.1 1.6 0 1.6-.3 2.9-1.5 3.3-3 .4-.7.6-1.5.5-2.3zm-10 4.5c-.8.1-1.6-.3-2-1-.5-.7-.5-1.7-.1-2.4.4-.7 1.2-1.1 2-1 .9.1 1.6.7 1.8 1.6.3 1.2-.5 2.5-1.7 2.8zm7.5-1.2c-.3 1.2-1.4 2-2.6 1.8-.7-.1-1.3-.5-1.7-1.1.8-.6 1.3-1.5 1.5-2.5.4.1.8.3 1.2.6.9.7 1.6 1.2 1.6 1.2z" />
        </svg>
    )
}