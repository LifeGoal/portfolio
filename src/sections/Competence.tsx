import { VscVscode } from "react-icons/vsc";
import { PlaywrightIcon, TechBadge } from "../components/TechBadge";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite, SiTailwindcss, SiNextdotjs, SiReactrouter, SiFramer, SiNodedotjs, SiExpress, SiMariadb, SiMysql, SiPhp, SiSupabase, SiJsonwebtokens, SiPostgresql, SiMongodb, SiLua, SiGit, SiGithub, SiNpm, SiVitest, SiPostman, SiDocker } from "react-icons/si";
import { TbApi } from "react-icons/tb";


const Competence = () => {
    return (
        <section id="kompetens" className="flex flex-col items-center justify-center px-6 py-16 sm:py-24 border-b border-border/60">
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
    )
}

export default Competence;