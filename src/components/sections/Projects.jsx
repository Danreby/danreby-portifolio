import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Overview } from "../system/modal/Overview";
import { useTranslations } from "../../i18n/useTranslations";

export const Projects = ({ language }) => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const { t } = useTranslations(language);
    const { title, projects: projectItems = [] } = t("projects");

    const openOverview = (project) => {
        if (project.images && project.images.length > 0) {
            setSelected({ ...project, language });
            setIsOpen(true);
            return;
        }

        if (project.url) {
            window.open(project.url, "_blank", "noopener,noreferrer");
            return;
        }

        setSelected({ ...project, language });
        setIsOpen(true);
    };
    const closeOverview = () => {
        setIsOpen(false);
        setSelected(null);
    };

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectItems.map((project, index) => (
                            <div
                            key={index}
                            className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all bg-gray-800/50
                                        flex flex-col justify-between h-full" 
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 break-words">{project.description}</p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, key) => (
                                        <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                                        >
                                        {tech}
                                        </span>
                                    ))}
                                    </div>

                                    <div className="flex justify-between items-center">
                                    {(project.images?.length > 0 || project.url) && (
                                        <button
                                        onClick={() => openOverview(project)}
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                        {language === "pt" ? "Ver Projeto ➜" : "View Project ➜"}
                                        </button>
                                    )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
            <Overview isOpen={isOpen} onClose={closeOverview} project={selected} />
        </section>
    );
}
