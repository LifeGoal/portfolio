import { FolderGit2 } from "lucide-react";
import { CustomIcon } from "../components/Icons";
import InteractiveAvatar from "../components/InteractiveAvatar";
import { TechBadge, PlaywrightIcon } from "../components/TechBadge";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite, SiTailwindcss, SiNextdotjs, SiReactrouter, SiFramer, SiNodedotjs, SiExpress, SiMariadb, SiMysql, SiPhp, SiSupabase, SiJsonwebtokens, SiPostgresql, SiMongodb, SiLua, SiGit, SiGithub, SiNpm, SiVitest, SiPostman, SiDocker } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const Frontpage = () => {
    return (
        <main className="flex-1">
            <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12 border-b">
                <div className="mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h1 className="text-4xl sm:text-6xl font-bold text-white">
                            Hej, jag är <span className="text-primary">Viktor</span>
                        </h1>

                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                            Fullstackutvecklare under utbildning, med flera års erfarenhet av ideellt utvecklingsarbete inom bland annat FiveM-communityt. Nu vill jag ta nästa steg och få in en fot i branschen som utvecklare. Jag bygger användarvänliga digitala lösningar och söker LIA eller en första junior-roll.
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

                    <div className="w-full lg:w-auto flex justify-center">
                        <InteractiveAvatar />
                    </div>
                </div>
            </section>

            <section id="om" className="flex flex-col items-center justify-center px-6 py-12 border-b">
                <div className="mx-auto max-w-6xl w-full">
                    <h2 className="text-3xl sm:text-4xl text-center font-bold text-white mb-6">Om <span className="text-primary">mig</span></h2>
                    <p className="text-base sm:text-lg text-muted-foreground">
                        Jag är en passionerad fullstackutvecklare under utbildning.
                        Med flera års erfarenhet av ideellt utvecklingsarbete inom FiveM-communityt har jag utvecklat en stark förmåga att skapa användarvänliga digitala lösningar för alla.
                        Mina tidigare kunskaper är självlärda och jag har en stark vilja att fortsätta utvecklas och lära mig nya teknologier inom branschen.
                    </p>
                    <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                        Självklart är jag inte färdigutvecklad, men jag är motiverad att ta nästa steg och få in en fot i branschen som utvecklare, på riktigt.
                        Därför söker jag nu en LIA-plats eller en första junior-roll där jag kan bidra med det har jag lärt mig hittills, samtidigt som jag fortsätter att växa och utvecklas som utvecklare med er.
                        Låter det intressant? Hör av dig så kan vi ta en pratstund!
                    </p>
                </div>
            </section>

            <section id="kompetens" className="flex flex-col items-center justify-center px-6 py-12">
                <div className="flex flex-col gap-6 mx-auto max-w-6xl w-full">
                    <div className="flex flex-col">
                        <h2 className="text-3xl sm:text-4xl text-center font-bold text-white mb-6">Mina <span className="text-primary">kompetenser</span></h2>
                    </div>
                    <p className="text-2xl font-semibold text-muted-foreground font-mono">
                        // Tech Stack
                    </p>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl font-semibold text-muted-foreground font-mono">
                            <span className="text-red-400">const</span> <span className="text-primary">frontend</span> = <span className="text-yellow-400">{'{'}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2.5 ml-4">
                            <TechBadge name="HTML5," icon={SiHtml5} />
                            <TechBadge name="CSS3," icon={SiCss} />
                            <TechBadge name="JavaScript," icon={SiJavascript} />
                            <TechBadge name="TypeScript," icon={SiTypescript} />
                            <TechBadge name="React," icon={SiReact} />
                            <TechBadge name="Vite," icon={SiVite} />
                            <TechBadge name="Tailwind CSS," icon={SiTailwindcss} />
                            <TechBadge name="Next.js" icon={SiNextdotjs} />
                            <TechBadge name="React Router," icon={SiReactrouter} />
                            <TechBadge name="REST API's," icon={TbApi} />
                            <TechBadge name="Framer Motion" icon={SiFramer} />
                        </div>
                        <p className="text-xl font-semibold text-yellow-400 font-mono">{'}'}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl font-semibold text-muted-foreground font-mono">
                            <span className="text-red-400">const</span> <span className="text-primary">backend</span> = <span className="text-yellow-400">{'{'}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2.5 ml-4">
                            <TechBadge name="Node.js," icon={SiNodedotjs} />
                            <TechBadge name="Express.js," icon={SiExpress} />
                            <TechBadge name="REST API's," icon={TbApi} />
                            <TechBadge name="MariaDB," icon={SiMariadb} />
                            <TechBadge name="MySQL," icon={SiMysql} />
                            <TechBadge name="PHP," icon={SiPhp} />
                            <TechBadge name="Supabase," icon={SiSupabase} />
                            <TechBadge name="JWT & Auth," icon={SiJsonwebtokens} />
                            <TechBadge name="PostgreSQL," icon={SiPostgresql} />
                            <TechBadge name="MongoDB," icon={SiMongodb} />
                            <TechBadge name="LUA" icon={SiLua} />
                        </div>
                        <p className="text-xl font-semibold text-yellow-400 font-mono">{'}'}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl font-semibold text-muted-foreground font-mono">
                            <span className="text-red-400">const</span> <span className="text-primary">tools</span> = <span className="text-yellow-400">{'{'}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2.5 ml-4">
                            <TechBadge name="Git," icon={SiGit} />
                            <TechBadge name="GitHub," icon={SiGithub} />
                            <TechBadge name="npm," icon={SiNpm} />
                            <TechBadge name="Vite," icon={SiVite} />
                            <TechBadge name="Vitest," icon={SiVitest} />
                            <TechBadge name="Playwright," icon={PlaywrightIcon} />
                            <TechBadge name="Postman," icon={SiPostman} />
                            <TechBadge name="Docker," icon={SiDocker} />
                            <TechBadge name="CI/CD," icon={SiDocker} />
                            <TechBadge name="VS Code" icon={VscVscode} />
                        </div>
                        <p className="text-xl font-semibold text-yellow-400 font-mono">{'}'}</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-xl font-semibold text-muted-foreground font-mono">
                            <span className="text-red-400">let</span> <span className="text-primary">learning</span> = <span className="text-yellow-400">{'{'}</span>
                        </h4>
                        <div className="flex flex-wrap gap-2.5 ml-4">
                            <TechBadge name="Fullstack-arkitektur," icon={TbApi} />
                            <TechBadge name="Testdriven utveckling (TDD)," icon={SiVitest} />
                            <TechBadge name="CI/CD & DevOps," icon={SiDocker} />
                            <TechBadge name="Next.js & SSR" icon={SiNextdotjs} />
                        </div>
                        <p className="text-xl font-semibold text-yellow-400 font-mono">{'}'}</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Frontpage;