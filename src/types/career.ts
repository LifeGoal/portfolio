export interface CareerItem {
    id: string;
    role: string;
    company: string;
    companyType: "game" | "education" | "work" | "other";
    location?: string;
    start: string;
    end?: string;
    duration: string;
    type: "work" | "education" | "volunteer";
    current?: boolean;
    description: string;
    highlights?: string[];
}

export type CareerFilterType = "all" | "work" | "education" | "volunteer";