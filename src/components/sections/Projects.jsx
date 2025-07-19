import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Overview } from "./Overview";

export const Projects = ({ language }) => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const texts = {
        pt: {
            title: 'Projetos',
            projects: [
                {
                    title: 'Sistema de Carregamento',
                    description: 'Um sistema para o gerenciamento dos carregametos da Vix Logística, feito com o propósito de monitorar e analisar o fluxo de cargas que entram e saem do parque de tubos da Petrobras.',
                    technologies: ['React', 'Laravel', 'MySQL'],

                },
                {
                    title: 'Lista de Funcionários',
                    description: 'Um sistema para gerenciamento de funcionários feito para a conclusão de um dos módulos da pós-graduação em Desenvolvimento Full-Stack na PUC RIO.',
                    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
                    
                },
                {
                    title: 'Sistema de Efetivos',
                    description: 'Um sistema para o gerenciamento dos efetivos da Vix Logística, feito para o gerenciamento e monitoramento das informações necessárias para a administração dos funcionários da empresa.',
                    technologies: ['React', 'Laravel', 'MySQL'],
                    images: [
                        '/danreby-portifolio/img/Efetivo/1.jpeg',
                        '/danreby-portifolio/img/Efetivo/2.jpeg',
                        '/danreby-portifolio/img/Efetivo/3.jpeg',
                        '/danreby-portifolio/img/Efetivo/4.jpeg',
                        '/danreby-portifolio/img/Efetivo/5.jpeg',
                        '/danreby-portifolio/img/Efetivo/6.jpeg',
                        '/danreby-portifolio/img/Efetivo/7.jpeg',
                        '/danreby-portifolio/img/Efetivo/8.jpeg',
                        '/danreby-portifolio/img/Efetivo/9.jpeg',
                        '/danreby-portifolio/img/Efetivo/10.jpeg',
                        '/danreby-portifolio/img/Efetivo/11.jpeg',
                        '/danreby-portifolio/img/Efetivo/12.jpeg',
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
                    title: 'Loading System',
                    description: 'A system for managing load operations at Vix Logística, designed to monitor and analyze the flow of cargo entering and leaving the Petrobras pipe yard.',
                    technologies: ['React', 'Laravel', 'MySQL'],
                },
                {
                    title: 'Employee List',
                    description: 'A system for employee management developed as part of a module for the Postgraduate Full-Stack Development program at PUC-Rio.',
                    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
                },
                {
                    title: 'Staff Management System',
                    description: 'A system for managing Vix Logística\'s staff, built to manage and monitor essential information for employee administration within the company.',
                    technologies: ['React', 'Laravel', 'MySQL'],
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
        setSelected({ ...project, language });
        setIsOpen(true);
    };
  const closeOverview = () => setIsOpen(false);

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all bg-gray-800/50">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4 break-words">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    {project.images?.length > 0 && (
                                    <button
                                    onClick={() => openOverview(project)}
                                    className="text-blue-400 hover:text-blue-300 transition-colors mt-4"
                                    >
                                    {language === 'pt' ? 'Ver Projeto ➜' : 'View Project ➜'}
                                    </button>
                                    )}
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
