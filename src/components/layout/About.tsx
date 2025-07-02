import type { ComponentType, JSX } from "react";
import { Button } from "@/components/ui/Button";
import { Briefcase, Code, User } from "lucide-react";

type AboutData = {
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
};

const aboutData: AboutData[] = [
    {
        icon: Code,
        title: "Web Development",
        description:
            "Creating responsive websites and web applications using modern technologies like React, Node.js, and more.",
    },
    {
        icon: User,
        title: "UI/UX Design",
        description:
            "  Designing intruitive and visually appealing user interfaces that enhance user experience across various devices.",
    },
    {
        icon: Briefcase,
        title: "Project Management",
        description:
            "  Leading projects from concept to completion, ensuring timely delivery and                          client satisfaction through effective communication and collaboration.",
    },
];

export const About = (): JSX.Element => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Web Developer & Tech Creator
                        </h3>
                        <p className="text-muted-foreground">
                            With over 5 years of experience in web development,
                            I specialize in creating dynamic and engaging web
                            applications. My journey began with a fascination
                            for technology and has evolved into a passion for
                            building user-friendly digital experiences.
                        </p>
                        <p>
                            I'm passionate about crafting solutions that not
                            only meet client needs but also enhance user
                            experience. My expertise spans across various
                            technologies, including React, Node.js, and modern
                            web standards. I thrive on challenges and
                            continuously seek to expand my skill set to stay at
                            the forefront of the ever-evolving tech landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <Button>
                                <a href="#contact"> Get In Touch</a>
                            </Button>
                            <a
                                href="#"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            {aboutData.map(
                                ({ icon: Icon, title, description }) => (
                                    <div
                                        key={title}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">
                                                {title}
                                            </h4>
                                            <p className="text-muted-foreground">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
