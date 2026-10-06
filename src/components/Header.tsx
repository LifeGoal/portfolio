import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../config/siteNavigation'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-border/80 bg-background/80 backdrop-blur-lg shadow-lg shadow-black/20' : 'border-b border-transparent bg-transparent'}`}>
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#home" className="font-mono text-lg font-semibold">
                    <span className="text-primary">&lt;</span>
                    <span className="text-foreground">Viktor</span>
                    <span className="text-primary"> /&gt;</span>
                </a>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="text-muted-foreground hover:text-foreground md:hidden p-2" aria-label="Öppna meny">
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="glass-strong border-b border-border px-6 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}