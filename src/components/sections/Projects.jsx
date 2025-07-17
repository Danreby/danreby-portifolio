export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">
                    Projetos Realizados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all bg-gray-800/50">
                        <h3 className="text-xl font-bold mb-2">Sistema de Carregamento</h3>
                        <p className="text-gray-300 mb-4 break-words">
                            Um sistema para o gerenciamento dos carregametos da Vix Logística, Feito com o propósito de monitorar e analisar o fluxo de cargas que entram e saem do parque de tubos da petrobras.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Lavarel", "MySQL"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Ver Projeto ➜ </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all bg-gray-800/50">
                        <h3 className="text-xl font-bold mb-2">Sistema de Efetivos</h3>
                        <p className="text-gray-300 mb-4 break-words">
                            Um sistema para gerenciamento de efetivos feito para a conclusão de um dos modulos da pós graduação em Desenvolvimento Full-Stack na PUC RIO.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "Flask", "HTML", "CSS", "JavaScript"].map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> Ver Projeto ➜ </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}