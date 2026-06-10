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
        <section id="projects" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
            <div className="absolute bottom-1/3 -left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-10">
                        {/* <span className="section-mono-label">// projects</span> */}
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-2">
                            {title}
                        </h2>
                        <div className="glow-divider" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                        {projectItems.map((project, index) => (
                            <div
                                key={index}
                                className="project-card glass-card rounded-2xl p-6 flex flex-col justify-between h-full group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="font-mono text-xs text-blue-500/40 bg-blue-500/5 border border-blue-500/10 px-2.5 py-0.5 rounded-md tracking-widest">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    {(project.images?.length > 0 || project.url) && (
                                        <button
                                            onClick={() => openOverview(project)}
                                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-all duration-200 group/btn px-2.5 py-1 rounded-lg hover:bg-blue-500/8 hover:border-blue-500/20 border border-transparent"
                                        >
                                            {language === "pt" ? "Ver projeto" : "View project"}
                                            <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-200 transition-colors duration-200">{project.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 break-words">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                    {project.technologies.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/8 text-blue-400/80 px-2.5 py-0.5 rounded-full text-xs border border-blue-500/15 hover:bg-blue-500/18 hover:text-blue-300 transition-all select-none"
                                        >
                                            {tech}
                                        </span>
                                    ))}
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
