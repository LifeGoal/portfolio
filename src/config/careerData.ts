import type { CareerItem } from "../types/career";

export const careerItems: CareerItem[] = [
    {
        id: "fivem-dev",
        role: "Spel- & Scriptutvecklare (Ideellt)",
        company: "FiveM Community & Eget skapande",
        companyType: "game",
        location: "Distans",
        start: "2017",
        end: "Nuvarande",
        duration: "9 år",
        type: "volunteer",
        current: true,
        description: "Flera års praktiskt utvecklingsarbete med skräddarsydda scripts, interaktiva användargränssnitt och databasintegrationer för multiplayer-servrar.",
        highlights: [
            "Skapade och underhöll spelservrar med egna scripts och anpassade funktioner samt ramverk för spelmekanik.",
            "Designade och implementerade interaktiva UI-delar för att förbättra spelupplevelsen och användarinteraktioner.",
            "Utvecklade och underhöll ett aktivt community med över 3000 medlemmar med forum, dokumentation och support.",
            "Felsökning, prestandaoptimering och dagligt utvecklande i en krävande miljö."
        ]
    },
    {
        id: "education-fullstack",
        role: "Fullstackutvecklare (Utbildning)",
        company: "Yrkeshögskola",
        companyType: "education",
        location: "Distans",
        start: "2025",
        end: "Nuvarande",
        duration: "Pågående (2 år)",
        type: "education",
        current: true,
        description: "Yrkeshögskoleutbildning inriktad på modern mjukvaruutveckling, systemarkitektur och databasdesign.",
        highlights: [
            "Frontendutveckling med React 19, TypeScript, Tailwind CSS, Vite och Next.js.",
            "Backendutveckling med Node.js, Express, PHP, MariaDB, MySQL, PostgreSQL och JWT-autentisering.",
            "DevOps & testning med Git/GitHub, Docker, CI/CD-pipelines, Vitest och Playwright."
        ]
    }
];

