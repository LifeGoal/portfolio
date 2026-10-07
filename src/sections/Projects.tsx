import ProjectList from "../components/ProjectList";
import ScrollReveal from "../components/ScrollReveal";

const Projects = () => {
    return (
        <section id="projekt" className="flex flex-col items-center justify-center px-6 py-16 sm:py-24 border-b border-border/60">
            <div className="mx-auto max-w-6xl w-full flex flex-col gap-8">
                <ScrollReveal direction="up" delay={50}>
                    <div className="flex flex-col gap-3 items-center text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Mina <span className="text-primary">projekt</span>
                        </h2>
                        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                            Här är mina projekt jag har jobbat med, både personliga och i grupp med andra. För att se projektet i detalj, klicka på det.
                        </p>
                    </div>
                </ScrollReveal>
                <ProjectList />
            </div>
        </section>
    );
};

export default Projects;