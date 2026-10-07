import type { ComponentType } from "react"

export interface TechBadgeProps {
    name: string
    icon: ComponentType<{ className?: string }>
}