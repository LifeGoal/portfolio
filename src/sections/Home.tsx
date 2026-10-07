import { FolderGit2 } from "lucide-react";
import { CustomIcon } from "../components/Icons";
import InteractiveAvatar from "../components/InteractiveAvatar";
import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
    return (
        <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16 sm:py-24 border-b border-border/60">
            <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl flex flex-col gap-6">
                    <ScrollReveal direction="up" delay={100}>
                        <h1 className="text-4xl sm:text-6xl font-bold text-white">
                            Hej, jag är <span className="text-primary">Viktor</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <p className="text-base sm:text-lg text-muted-foreground">
                            Fullstackutvecklare under utbildning, med flera års erfarenhet av ideellt utvecklingsarbete inom bland annat FiveM-communityt. Nu vill jag ta nästa steg och få in en fot i branschen som utvecklare. Jag bygger användarvänliga digitala lösningar och söker LIA eller en första junior-roll.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={300}>
                        <div className="flex flex-wrap items-center gap-4">
                            <a href="#projekt" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                                <FolderGit2 className="h-4 w-4" />
                                Se mina projekt
                            </a>
                            <a href="https://github.com/LifeGoal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card/60 active:scale-[0.98]">
                                <CustomIcon icon="github" className="h-4 w-4" />
                                GitHub Profil
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="w-full lg:w-auto flex justify-center">
                    <ScrollReveal direction="right" delay={250} duration={800} distance={40}>
                        <InteractiveAvatar />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Home;