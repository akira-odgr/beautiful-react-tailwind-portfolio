import { useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import type { MouseEvent } from "react";

export const Footer = () => {
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
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 ">
            <div className="container mx-auto max-w-5xl flex flex-wrap justify-between items-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Pedrotech.co, All rights
                    reserved.
                </p>
                <a
                    href="#hero"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                    onClick={handleScroll}
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
};
