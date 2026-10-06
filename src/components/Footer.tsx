const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="border-t border-border/80 px-6 py-8 mt-auto">
            <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>&copy; {currentYear} <a href="https://github.com/LifeGoal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-medium">Viktor Lindqvist</a>. All rights reserved.</span>
            </div>
        </footer>
    )
}