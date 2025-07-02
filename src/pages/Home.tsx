import { ReactLenis } from "lenis/react";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { StarBackground } from "@/components/ui/StarBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/layout/About";
import { Skills } from "@/components/layout/Skills";
import { Projects } from "@/components/layout/Projects";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";

export const Home = () => {
    // const lenis = useLenis();

    return (
        <>
            <ReactLenis root />
            <div className="min-h-screen bg-background text-foreground overflow-hidden">
                {/* Theme Toggle */}
                <ThemeToggle />
                {/* Background Effects */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default Home;
