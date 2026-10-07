import { useState } from "react";
import { Briefcase, GraduationCap, Calendar, Clock, MapPin, Building2, CheckCircle2, Code2, Filter } from "lucide-react";
import type { CareerItem, CareerFilterType } from "../types/career";
import { careerItems } from "../config/careerData";

const CareerJourney = () => {
    const [selectedFilter, setSelectedFilter] = useState<CareerFilterType>("all");

    const filters: { key: CareerFilterType; label: string }[] = [
        { key: "all", label: "Alla" },
        { key: "work", label: "Arbete" },
        { key: "education", label: "Utbildning" },
        { key: "volunteer", label: "Ideellt / Projekt" },
    ];

    const filteredItems = careerItems.filter((item) => {
        if (selectedFilter === "all") return true;
        return item.type === selectedFilter;
    });

    const getIcon = (type: CareerItem["type"]) => {
        switch (type) {
            case "work":
                return <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />;
            case "education":
                return <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />;
            case "volunteer":
                return <Code2 className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />;
        }
    };

    const getTypeLabel = (type: CareerItem["type"]) => {
        switch (type) {
            case "work":
                return "Arbete";
            case "education":
                return "Utbildning";
            case "volunteer":
                return "Ideellt / Projekt";
        }
    };

    return (
        <section id="career-journey" className="flex flex-col items-center justify-center px-6 py-16 sm:py-24 border-b">
            <div className="mx-auto max-w-6xl w-full flex flex-col gap-8">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                        Karriär & <span className="text-primary">Erfarenhet</span>
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                        En tidslinje över vad och vart jag har varit verksam hittills.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-2xl font-semibold text-muted-foreground font-mono">
                        // Utvecklingserfarenhet
                    </p>

                    <div className="flex flex-wrap items-center gap-2 bg-card/60 p-1.5 rounded-lg border border-border/60">
                        <span className="text-sm text-muted-foreground px-2 flex items-center gap-1">
                            <Filter className="h-3.5 w-3.5 text-primary" />
                            Filter:
                        </span>
                        {filters.map(({ key, label }) => {
                            const isActive = selectedFilter === key;
                            return (
                                <button key={key} type="button" onClick={() => setSelectedFilter(key)} className={`px-4 py-2 text-xs rounded-md transition-all cursor-pointer ${isActive ? "bg-primary text-primary-foreground font-semibold shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-card"}`}>
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="relative flex flex-col gap-10 mt-4">
                    <div className="absolute left-5 sm:left-6 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-linear-to-b from-transparent via-border/80 to-transparent" />

                    {filteredItems.map((item) => (
                        <div key={item.id} className="relative pl-12 sm:pl-16 group">
                            <div className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 w-7 sm:w-10 h-0.5 bg-border/60 group-hover:bg-primary transition-colors duration-300" />

                            <div className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-border/80 bg-background text-muted-foreground shadow-md transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] z-10">
                                {getIcon(item.type)}
                            </div>

                            <div className="rounded-xl border border-border/60 bg-card/70 p-5 sm:p-7 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-card/90 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.12)]">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-wrap items-center gap-2.5">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">{item.role}</h3>
                                            <span className="inline-flex items-center rounded-md bg-muted/60 border border-border/60 px-2 py-0.5 text-xs text-muted-foreground">
                                                {getTypeLabel(item.type)}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm">
                                            <span className="font-semibold text-primary flex items-center gap-1.5">
                                                <Building2 className="h-4 w-4 shrink-0" />
                                                {item.company}
                                            </span>
                                            {item.location && (
                                                <span className="text-muted-foreground flex items-center gap-1 font-sans">
                                                    <MapPin className="h-3.5 w-3.5 shrink-0" />
                                                    {item.location}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap sm:flex-row sm:items-end gap-1.5">
                                        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-background/60 px-2.5 py-1 text-xs text-foreground">
                                            <Calendar className="h-3 w-3 text-primary shrink-0" />
                                            {item.start} - {item.current ? "Nuvarande" : item.end}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs text-primary font-medium">
                                            <Clock className="h-3 w-3 shrink-0" />
                                            {item.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                                    {item.description}
                                </p>

                                {item.highlights && item.highlights.length > 0 && (
                                    <ul className="mt-3.5 space-y-2">
                                        {item.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}

                    {filteredItems.length === 0 && (
                        <p className="text-muted-foreground font-mono text-sm py-8">
                            Tyvärr har jag ännu ingen erfarenhet inom detta område. Men jag är alltid öppen för nya möjligheter och utmaningar!
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CareerJourney;