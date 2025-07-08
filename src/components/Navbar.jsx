import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { X, Menu } from 'lucide-react';


const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setISMenueOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (

        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop:blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-2xl md:text-2xl text-primary font-bold flex items-center whitespace-nowrap">
                    <span className="relative z-10 flex items-center gap-1">
                        <span className="text-glow text-foreground-400">Chandan</span>
                        <span className="hidden sm:inline mr-1 ">Kumar </span>
                    </span>
                </a>

                <div className="flex items-center space-x-2 md:space-x-3 ml-auto">
                    {/* Desktop nav */}
                    <div className="hidden md:flex space-x-3 items-center justify-center">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground font-semibold tracking-wide relative group transition-colors duration-300 px-2 py-1"
                                style={{ fontFamily: 'Poppins, Inter, Arial, sans-serif', letterSpacing: '0.04em' }}
                            >
                                <span className="relative z-10">
                                    {item.name}
                                </span>
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 relative">
                        <div className="block md:hidden">
                            {/* <ToggleTheme /> */}
                        </div>
                        {/* Nav Menu  */}
                        <button
                            onClick={() => setISMenueOpen((prev) => !prev)}
                            className="flex mr-0 md:hidden text-foreground z-50 items-center justify-center p-1 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 shadow-md transition-colors duration-300 hover:scale-105 active:scale-95"
                            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-auto"
                )}>
                    <div className="flex flex-col text-xl space-y-3">
                        {navItems.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground font-semibold tracking-wide relative group transition-colors duration-300 px-2 py-1"
                                style={{ fontFamily: 'Poppins, Inter, Arial, sans-serif', letterSpacing: '0.04em' }}
                                onClick={() => setISMenueOpen(false)}
                            >
                                <span className="relative z-10">
                                    {item.name}
                                </span>
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar