import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Overview } from "../system/modal/Overview";

export const Projects = ({ language }) => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const texts = {
        pt: {
            title: 'Projetos',
            projects: [
                {
                    title: 'Catálogo de Jogos',
                    description: 'Um catálogo de jogos para o gerênciamento e organização de jogos pessoais. Desenvolvido como projeto acadêmico para a conclusão do modulo de Back-End Avançado em minha 2º pós-graduação na PUC-RIO',
                    technologies: ['ReactJS', 'Python', 'MySQL', 'Docker'],
                    url: 'https://youtu.be/wUAtUlpYEI4',
                },
                {
                    title: 'Lista de Funcionários',
                    description: 'Um sistema para gerenciamento de funcionários feito para a conclusão de um dos módulos da pós-graduação em Desenvolvimento Full-Stack na PUC RIO.',
                    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
                    
                },
                {
                    title: 'Sistema de Efetivos',
                    description: 'Um sistema para o gerenciamento dos efetivos da Vix Logística, feito para o gerenciamento e monitoramento das informações necessárias para a administração dos funcionários da empresa.',
                    technologies: ['ReactJS', 'Laravel', 'MySQL'],
                    images: [
                        '/danreby-portifolio/img/Efetivo/pt/1.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/2.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/3.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/4.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/5.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/6.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/7.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/8.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/9.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/10.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/11.jpeg',
                        '/danreby-portifolio/img/Efetivo/pt/12.jpeg',
                    ],
                },
                {
                    title: 'Sistema de Avaliações',
                    description: 'Um sistema de avaliações de serviços prestados de uma empresa terceirizada da Petrobras, com o intuito de ajudar no processo de avaliações de funcionários.',
                    technologies: ['Filament', 'Laravel', 'MySQL'],
                }
            ]
        },
        en: {
            title: 'Projects',
            projects: [
                {
                    title: 'Game Catalog',
                    description: 'A games catalog for managing and organizing a personal game collection. Developed as an academic project to complete the Advanced Back-End module of my second postgraduate program at PUC-Rio.',
                    technologies: ['ReactJS', 'Python', 'MySQL', 'Docker'],
                    url: 'https://youtu.be/wUAtUlpYEI4',
                },
                {
                    title: 'Employee List',
                    description: 'A system for employee management developed as part of a module for the Postgraduate Full-Stack Development program at PUC-Rio.',
                    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
                },
                {
                    title: 'Staff Management System',
                    description: 'A system for managing Vix Logística\'s staff, built to manage and monitor essential information for employee administration within the company.',
                    technologies: ['ReactJS', 'Laravel', 'MySQL'],
                    images: [
                        '/danreby-portifolio/img/Efetivo/en/1.jpg',
                        '/danreby-portifolio/img/Efetivo/en/2.jpg',
                        '/danreby-portifolio/img/Efetivo/en/3.jpg',
                        '/danreby-portifolio/img/Efetivo/en/4.jpg',
                        '/danreby-portifolio/img/Efetivo/en/5.jpg',
                        '/danreby-portifolio/img/Efetivo/en/6.jpg',
                        '/danreby-portifolio/img/Efetivo/en/7.jpg',
                        '/danreby-portifolio/img/Efetivo/en/8.jpg',
                        '/danreby-portifolio/img/Efetivo/en/9.jpg',
                        '/danreby-portifolio/img/Efetivo/en/10.jpg',
                        '/danreby-portifolio/img/Efetivo/en/11.jpg',
                        '/danreby-portifolio/img/Efetivo/en/12.jpg',
                    ],
                },
                {
                    title: 'Evaluation System',
                    description: 'A service evaluation system for a Petrobras subcontractor, aimed at streamlining the employee evaluation process.',
                    technologies: ['Filament', 'Laravel', 'MySQL'],
                }
            ]
        }
    };

    const { title, projects } = texts[language] || texts.pt;

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
                        {projects.map((project, index) => (
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
