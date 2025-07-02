import { useEffect, useState, type MouseEvent } from "react";
import { useLenis } from "lenis/react";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";

type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const lenis = useLenis();

    const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const target = document.querySelector(href!);
        if (target instanceof HTMLElement) {
            lenis?.scrollTo(target);
        }
    };

    return (
        <header
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a
                    href="#hero"
                    className="text-xl font-bold text-primary flex items-center"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                            PedroTech
                        </span>{" "}
                        Portfolio
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-x-8">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={handleScroll}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="sm:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};
