import type { ProjectItem } from "../types/projects";

export const projectsData: ProjectItem[] = [
    {
        id: "1",
        title: "Portfolio",
        description: "Min egen portfolio som visar mina projekt och erfarenheter. Den är byggd med Typescript, React och Tailwind CSS.",
        image: "/portfolio.webp",
        link: "https://viktor-lindqvist.vercel.app"
    },
    {
        id: "2",
        title: "Presently",
        description: "Presently är en gåvoplattform där man kan ge gåvor till sina nära och kära varje månad. Den är byggd med Typescript, React, Tailwind CSS och Next.js.",
        image: "/presently.webp",
        link: "https://presently-fawn.vercel.app"
    },
    {
        id: "3",
        title: "LifeShop",
        description: "En e-handelsplattform skapad för att sälja produkter online. Den är byggd med Typescript, React, Tailwind CSS och Express.js.",
        image: "/lifeshop.webp",
        link: "https://e-handel-systemutveckling.vercel.app"
    },
    {
        id: "4",
        title: "Boendeportalen",
        description: "En plattform för att hitta och ansöka om boende. Byggdes i grupp med andra studenter. Plattformen är byggd med TypeScript, React och Tailwind CSS samt använder Axios för databasförbindelser.",
        image: "/boendeportalen.webp",
        link: "https://boendeportalen-one.vercel.app"
    }
];