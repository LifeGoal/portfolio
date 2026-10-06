import { FolderGit2 } from "lucide-react";
import { CustomIcon } from "../components/Icons";

const Frontpage = () => {
    return (
        <main className="flex-1">
            <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
                <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h1 className="text-4xl sm:text-6xl font-bold text-white">
                            Hej, jag är <span className="text-foreground">Viktor</span>
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                            Frontend-utvecklare som bygger moderna och snabba webblösningar
                            med fokus på ren kod, prestanda och mörka teman.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <a href="#projekt" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]">
                                <FolderGit2 className="h-4 w-4" />
                                Se mina projekt
                            </a>
                            <a href="https://github.com/LifeGoal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-card/60 active:scale-[0.98]">
                                <CustomIcon icon="github" className="h-4 w-4" />
                                GitHub Profil
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-auto">
                        {/* Fixa en vector bild här (av mig själv eller något annat kul) */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Frontpage;