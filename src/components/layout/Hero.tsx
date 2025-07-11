import { ScrollArrow } from "../ui/ScrollArrow";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen grid items-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I'm
                        </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Pedro
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Machado
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create stellar web experiences with modern
                        technologies. Specializing in front-end development, I
                        build interfaces that are both beautiful and functional.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>

                    <ScrollArrow />
                </div>
            </div>
        </section>
    );
};

export default Hero;
