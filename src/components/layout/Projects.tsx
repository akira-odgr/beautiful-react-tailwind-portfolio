import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { JSX } from "react";

const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description:
            "A modern and responsive landing page template for SaaS products, built with React and Tailwind CSS.",
        image: "/images/project1.png",
        tags: ["React", "Tailwind CSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description:
            "Interactive analytics dashboard for tracking user engagement and performance metrics, built with React and Tailwind CSS.",
        image: "/images/project3.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Orbit Analytics Dashboard",
        description:
            "Interactive analytics dashboard for tracking user engagement and performance metrics, built with React and Tailwind CSS.",
        image: "/images/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const Projects = (): JSX.Element => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl max-auto">
                    Here are some of my recent projects that showcase my skills
                    and creativity. Feel free to explore them and get inspired!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/akira-odgr"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                    >
                        Check My Github
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
