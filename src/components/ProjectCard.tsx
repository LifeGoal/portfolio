import { ExternalLink } from "lucide-react";
import type { ProjectCardProps } from "../types/projects";

const ProjectCard = ({ title, description, image, link, className = "", style }: ProjectCardProps) => {
    return (
        <div style={style} className={`group w-full h-full flex flex-col bg-card/60 hover:bg-card/80 rounded-xl border border-border/60 hover:border-primary/50 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-300 backdrop-blur-sm cursor-pointer ${className}`}onClick={() => window.open(link, "_blank")}>
            <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-muted/30">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <ExternalLink className="w-3.5 h-3.5 absolute top-3 right-3 text-muted-foreground group-hover:text-primary" />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;