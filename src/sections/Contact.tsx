import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const email = "lindqvistcs@gmail.com";

const Contact = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
    };

    return (
        <section id="kontakt" className="flex flex-col gap-8 items-center justify-center px-6 py-16 sm:py-24">
            <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Låt oss <span className="text-primary">arbeta ihop</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                    Jag är öppen för nya möjligheter och samarbeten. Tveka inte att kontakta mig!
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="flex gap-2 items-center px-6 py-4 bg-card/60 hover:bg-card/80 border border-border/60 text-sm text-muted-foreground hover:text-white rounded-lg font-mono font-medium transition-colors duration-200 cursor-pointer" onClick={copyToClipboard}>
                    {email} {!isCopied ? <Copy className="w-4 h-4" /> : <Check className="w-4 h-4 text-green-500" />}
                </button>

                <button className="p-4.5 bg-card/60 hover:bg-card/80 border border-border/60 text-muted-foreground hover:text-primary rounded-lg font-medium transition-colors duration-200 cursor-pointer" onClick={() => window.open("https://github.com/LifeGoal", "_blank")}>
                    <FiGithub className="w-4 h-4" />
                </button>
            </div>
        </section>
    )
}

export default Contact;