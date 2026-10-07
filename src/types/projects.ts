import type { CSSProperties } from "react";

export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface ProjectCardProps extends Omit<ProjectItem, "id"> {
    className?: string;
    style?: CSSProperties;
}