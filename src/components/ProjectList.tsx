import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { projectsData } from "../config/projectsData";
import type { ProjectItem } from "../types/projects";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {visibleProjects.map((project: ProjectItem, index: number) => {
                    const isNew = index >= 3;
                    return (<ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} link={project.link} className={isNew ? "animate-project-in" : ""} style={isNew ? { animationDelay: `${(index - 3) * 80}ms` } : undefined} />);
                })}
            </div>

            {projectsData.length > 3 && (
                <button type="button" onClick={() => setShowAll((prev) => !prev)} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer py-2 px-4 rounded-lg bg-card/60 hover:bg-card/80 border border-border/60">
                    {showAll ? "Visa färre projekt" : "Visa fler projekt"}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
                </button>
            )}
        </div>
    );
};

export default ProjectList;